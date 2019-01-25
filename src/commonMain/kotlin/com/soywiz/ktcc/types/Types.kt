package com.soywiz.ktcc.types

import com.soywiz.ktcc.parser.*
import kotlin.math.*

open class Type {
    companion object {
        val BOOL = BoolType
        val VOID = IntType(true, 0)

        val CHAR = IntType(true, 1)
        val SHORT = IntType(true, 2)
        val INT = IntType(true, 4)
        val LONG = IntType(true, 8)

        val UCHAR = IntType(false, 1)
        val USHORT = IntType(false, 2)
        val UINT = IntType(false, 4)
        val ULONG = IntType(false, 8)

        val FLOAT = FloatType
        val DOUBLE = DoubleType

        val VOID_PTR = PointerType(VOID, false)
        val CHAR_PTR = PointerType(CHAR, false)

        val UNKNOWN = UnknownType("unknown")
        val UNRESOLVED = UnknownType("unresolved")

        fun common(types: List<Type>): Type = if (types.isEmpty()) UNKNOWN else types.reduce { a, b -> common(a, b) }
        fun common(a: Type, b: Type): Type {
            if (a is NumberType && b is NumberType) {
                if (a is IntType && b is IntType) {
                    return IntType(a.signed || b.signed, max(a.size, b.size))
                }
                return if (max(a.size, b.size) > 4) DOUBLE else FLOAT
            }
            return a
        }
    }
}

fun Type.ptr(const: Boolean = false) = PointerType(this, const)

abstract class PrimType : Type()

abstract class NumberType : PrimType() {
    abstract val size: Int
}

object BoolType : PrimType() {
    override fun toString(): String = "Bool"
}

data class IntType(val signed: Boolean, override val size: Int) : NumberType() {
    override fun toString(): String = when (size) {
        0 -> "Unit"
        1 -> if (this.signed) "Byte" else "UByte"
        2 -> if (this.signed) "Short" else "UShort"
        4 -> if (this.signed) "Int" else "UInt"
        8 -> if (this.signed) "Long" else "ULong"
        else -> TODO("IntFType")
    }
}

abstract class FloatingType : NumberType()

object FloatType : FloatingType() {
    override val size: Int = 4
    override fun toString(): String = "Float"
}

object DoubleType : FloatingType() {
    override val size: Int = 8
    override fun toString(): String = "Double"
}

object VariadicType : PrimType() {
    override fun toString(): String = "Any?"
}
object DummyType : PrimType() {
    override fun toString(): String = "Dummy"
}

abstract class BaseReferenceableType() : Type() {
}

abstract class BasePointerType() : BaseReferenceableType() {
    abstract val elementType: Type
    abstract val actsAsPointer: Boolean
}

data class PointerType(override val elementType: Type, val const: Boolean) : BasePointerType() {
    //override fun toString(): String = "$type*"
    override val actsAsPointer: Boolean = true
    override fun toString(): String = "CPointer<$elementType>"
}

data class ArrayType(override val elementType: Type, val numElements: Int?, val sizeError: Throwable?, val declarator: ArrayDeclarator) : BasePointerType() {
    val hasSubarrays get() = elementType is ArrayType
    override val actsAsPointer: Boolean = !hasSubarrays || numElements == null
    override fun toString(): String = if (numElements != null) "$elementType[$numElements]" else "$elementType[]"
}

fun StructType.getStructTypeInfo(parser: ProgramParser): StructTypeInfo {
    return parser.getStructTypeInfo(this.spec)
}

data class EnumType(val spec: EnumTypeSpecifier) : Type() {
    override fun toString(): String = "enum ${spec.id}"
}

data class StructType(val spec: StructUnionTypeSpecifier) : BaseReferenceableType() {
    override fun toString(): String = "struct ${spec.id}"
}

data class UnknownType(val reason: Any?) : PrimType() {
    override fun toString(): String = "UnknownFType($reason)"
}

data class RefType(val id: String) : Type() {
    override fun toString(): String = id
}

data class TypedefTypeName(val id: String) : Type() {
    override fun toString(): String = id
}

fun generateFinalType(listType: ListTypeSpecifier): Type {
    val storages = arrayListOf<StorageClassSpecifier.Kind>()
    val qualifiers = arrayListOf<TypeQualifier.Kind>()
    var primSize = 4
    var signed: Boolean? = null
    var float = false
    var long = 0
    for (type in listType.items) {
        when (type) {
            is VariadicTypeSpecifier -> return VariadicType
            is StorageClassSpecifier -> storages += type.kind
            is TypeQualifier -> qualifiers += type.kind
            is BasicTypeSpecifier -> {
                when (type.id) {
                    BasicTypeSpecifier.Kind.VOID -> primSize = 0
                    BasicTypeSpecifier.Kind.UNSIGNED -> signed = false
                    BasicTypeSpecifier.Kind.SIGNED -> signed = true
                    BasicTypeSpecifier.Kind.CHAR -> primSize = 1
                    BasicTypeSpecifier.Kind.SHORT -> primSize = 2
                    BasicTypeSpecifier.Kind.INT -> primSize = 4
                    BasicTypeSpecifier.Kind.LONG -> long++
                    BasicTypeSpecifier.Kind.FLOAT -> run { float = true; primSize = 4 }
                    BasicTypeSpecifier.Kind.DOUBLE -> run { float = true; long++; primSize = 4 }
                    BasicTypeSpecifier.Kind.BOOL -> return Type.BOOL
                    BasicTypeSpecifier.Kind.COMPLEX -> TODO("BasicTypeSpecifier: COMPLEX")
                }
            }
            is StructUnionTypeSpecifier -> return StructType(type)
            is EnumTypeSpecifier -> return EnumType(type)
            is RefTypeSpecifier -> return RefType(type.id)
            is TypeName -> {
                if (type.abstractDecl != null) TODO("type.abstractDecl != null")
                return type.specifiers.toFinalType()
            }
            else -> TODO("generateFinalType: ${listType::class}: $listType")
        }
    }
    return when {
        float -> if (long > 0) Type.DOUBLE else Type.FLOAT
        signed == false -> when (primSize) {
            0 -> Type.VOID
            1 -> Type.UCHAR
            2 -> Type.USHORT
            4 -> if (long > 0) Type.ULONG else Type.UINT
            else -> Type.UINT
        }
        else -> when (primSize) {
            0 -> Type.VOID
            1 -> Type.CHAR
            2 -> Type.SHORT
            4 -> if (long > 0) Type.LONG else Type.INT
            else -> Type.INT
        }
    }
}

fun generatePointerType(type: Type, pointer: Pointer): Type {
    val base = PointerType(type, false)
    return if (pointer.parent != null) generatePointerType(base, pointer.parent) else base
}

abstract class FParamBase {
    abstract val type: Type
}
data class FParamVariadic(val dummy: Unit = Unit) : FParamBase() {
    override val type get() = VariadicType
}
data class FParam(val name: String, override val type: Type) : FParamBase()

data class FunctionType(val name: String, val retType: Type, val args: List<FParam> = listOf(), var variadic: Boolean = false) : Type() {
    val argsWithVariadic: List<FParamBase> = args + if (variadic) listOf(FParamVariadic()) else listOf()
    val typesWithVariadicWithRet: List<Type> = argsWithVariadic.map { it.type } + listOf(retType)

    override fun toString(): String {
        return "CFunction${typesWithVariadicWithRet.size - 1}<${typesWithVariadicWithRet.joinToString(", ")}>"
        //val args2 = if (variadic) args + listOf("...") else args
        //return "$retType $name(${args2.joinToString(", ")})"
    }
}

fun CParam.toFParam() = FParam(this.name.name, this.type)

fun generateFinalType(type: Type, declarator: Declarator): Type {
    when (declarator) {
        is DeclaratorWithPointer -> {
            val pointer = declarator.pointer
            val decl = generateFinalType(type, declarator.declarator)
            if (decl is FunctionType) {
                return FunctionType(decl.name, generatePointerType(decl.retType, pointer), decl.args, decl.variadic)
            } else {
                return generatePointerType(decl, pointer)
            }
        }
        is IdentifierDeclarator -> {
            return type
        }
        is ParameterDeclarator -> {
            val id = declarator.base.getNameId()
            if (declarator.base is DeclaratorWithPointer) {
                // @TODO: Function return pointer
            }

            //if (declarator.base !is IdentifierDeclarator) error("Unsupported: declarator.base !is IdentifierDeclarator but ${declarator.base::class} : ${declarator.base}")
            return FunctionType(id.id.name, type, declarator.declsWithoutVariadic.map { it.toCParam().toFParam() }, declarator.variadic)
        }
        is ArrayDeclarator -> {
            var error: Throwable? = null
            val arraySize = try {
                (declarator.expr?.constantEvaluate() as? Number)?.toInt()
            } catch (e: Throwable) {
                error = e
                -1
            }
            return ArrayType(generateFinalType(type, declarator.base), arraySize, error, declarator)
        }
        is VarargDeclarator -> {
            return VariadicType
        }
        else -> TODO("declarator: $declarator")
    }
    return type
}

fun generateFinalType(type: ListTypeSpecifier, declarator: Declarator): Type = generateFinalType(generateFinalType(type), declarator)

fun Type.withDeclarator(declarator: Declarator?): Type = if (declarator != null) generateFinalType(this, declarator) else this

fun Type.withDeclarator(declarator: AbstractDeclarator?): Type {
    if (declarator == null) return this
    if (declarator.ptr == null) return this
    return generatePointerType(this, declarator.ptr)
}

fun ListTypeSpecifier.toFinalType() = generateFinalType(this)
fun ListTypeSpecifier.toFinalType(declarator: Declarator?) = if (declarator != null) {
    generateFinalType(this, declarator)
} else {
    generateFinalType(this)
}

fun Declarator.getName(): String = getNameId().id.name

fun Declarator.getNameId(): IdentifierDeclarator = when (this) {
    is IdentifierDeclarator -> this
    is DeclaratorWithPointer -> declarator.getNameId()
    is ParameterDeclarator -> base.getNameId()
    is ArrayDeclarator -> base.getNameId()
    is VarargDeclarator -> id
    else -> TODO("TypeSpecifier.getName: $this")
}
interface FTypeResolver {
    fun resolve(type: Type): Type
}

fun Type.canAssignTo(dst: Type, resolver: FTypeResolver): Boolean {
    val src = resolver.resolve(this)
    val dst = resolver.resolve(dst)

    if (src == dst) return true
    if (src == Type.VOID || dst == Type.VOID && src != dst) return false

    if (dst is BasePointerType && src is IntType) return true // Increment pointer etc.

    if (src is BasePointerType && src.elementType == Type.VOID) return true
    if (dst is BasePointerType && dst.elementType == Type.VOID) return true
    if (src is BasePointerType && dst is PointerType) {
        return src.elementType == dst.elementType // Ignore const
    }
    if (src is IntType && dst is IntType) {
        return true // @TODO: warnings for long to shorter types
    }
    val srcIsNumber = src is IntType || src is BoolType || src is FloatingType
    val dstIsNumber = dst is IntType || dst is BoolType || dst is FloatingType
    if (srcIsNumber && dstIsNumber) return true
    if (src is ArrayType && dst is PointerType && src.elementType == dst.elementType) return true
    return src == dst
}