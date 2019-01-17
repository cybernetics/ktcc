package com.soywiz.ktcc.gen

import com.soywiz.ktcc.*
import com.soywiz.ktcc.util.*

class KotlinGenerator {
    fun generate(program: Program) = Indenter {
        object : NodeVisitor() {
            override fun visit(it: StringConstant) {
                line("// ${it.raw}")
            }
        }.visit(program)

        for (decl in program.decls) {
            generate(decl)
        }
    }

    fun Indenter.generate(it: Decl): Unit {
        when (it) {
            is FuncDecl -> {
                line("fun ${it.name.name}(${it.params.map { generateParam(it) }.joinToString(", ")}): ${generate(it.rettype)} = stackFrame {")
                indent {
                    generate(it.body)
                }
                line("}")
            }
            is Declaration -> {
                val ftype = it.specs.toFinalType()
                for (init in it.initDeclaratorList) {
                    val varType = ftype.withDeclarator(init.decl)
                    val name = init.decl.getName()
                    val varInit = init.initializer
                    if (varInit != null) {
                        line("var $name: $varType = ${(varInit).generate()}")
                    } else {
                        line("var $name: $varType")
                    }
                }
            }
            else -> error("Don't know how to generate decl $it")
        }
    }

    fun Indenter.generate(it: Stm): Unit = when (it) {
        is Stms -> {
            for (s in it.stms) generate(s)
        }
        is Return -> {
            if (it.expr != null) line("return ${(it.expr).generate()}") else line("return")
        }
        is ExprStm -> {
            if (it.expr != null) line(it.expr.generate(par = false))
            Unit
        }
        is While -> {
            line("while (${(it.cond).generate()}) {")
            indent {
                generate(it.body)
            }
            line("}")
        }
        is For -> {
            if (it.init != null) {
                val init = it.init
                if (init != null) {
                    if (init !is Decl) error("Not a Decl in for init")
                    generate(init)
                }
            }
            line("while (${(it.cond ?: IntConstant("1")).generate()}) {")
            indent {
                generate(it.body)
                if (it.post != null) {
                    line(it.post.generate())
                }
            }
            line("}")
        }
        is IfElse -> {
            line("if (${it.cond.generate()}) {")
            indent {
                generate(it.strue)
            }
            if (it.sfalse != null) {
                line("} else {")
                indent {
                    generate(it.sfalse)
                }
                line("}")
            } else {
                line("}")
            }
        }
        is Break -> {
            line("break")
        }
        is Decl -> generate(it)
        else -> error("Don't know how to generate stm $it")
    }

    fun generateParam(it: CParam): String = "${it.name}: ${it.type}"

    fun CType.toKotlinType(): String = when (this) {
        is CTypeWithSpecifiers -> {
            var void = false
            var unsigned = false
            var integral = false
            var longCount = 0
            for (spec in specs.items) {
                when (spec) {
                    is BasicTypeSpecifier -> {
                        when (spec.id) {
                            "void" -> void = true
                            "int" -> integral = true
                            else -> TODO(spec.id)
                        }
                    }
                    else -> TODO()
                }
            }
            when {
                void -> "Unit"
                integral -> "Int"
                else -> TODO()
            }
        }
        else -> TODO()
    }

    fun generate(it: CType): String = it.toKotlinType()

    fun generateDefault(it: CType): String = when (it) {
        is NamedCType -> when (it.id.name) {
            "int" -> "0"
            "void" -> "Unit"
            else -> error("Unknown type $it")
        }
        else -> error("Don't know how to generate default value for type $it")
    }

    fun Expr.generate(par: Boolean = true): String = when (this) {
        is IntConstant -> "$value"
        is Binop -> {
            val base = "${l.generate()} $op ${r.generate()}"
            if (par) "($base)" else base
        }
        is Id -> name
        is PostfixExpr -> {
            val left = lvalue.generate()
            when (op) {
                "++" -> "$left = $left + 1"
                "--" -> "$left = $left - 1"
                else -> TODO("Don't know how to generate postfix operator '$op'")
            }
        }
        is CallExpr -> {
            expr.generate() + "(" + args.joinToString(", ") { it.generate() } + ")"
        }
        is StringConstant -> "$raw.ptr"
        is CharConstant -> "$raw.toInt()"
        is CastExpr -> "${expr.generate()}.to${type.specifiers.toFinalType().withDeclarator(type.abstractDecl)}()"
        is ArrayAccessExpr -> "${expr.generate()}[${index.generate()}]"
        is UnaryExpr -> {
            when (op) {
                "*" -> "${expr.generate()}[0]"
                else -> TODO("Don't know how to generate unary operator '$op'")
            }
        }
        else -> error("Don't know how to generate expr $this")
    }
}