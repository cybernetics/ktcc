package com.soywiz.ktcc.gen

import com.soywiz.ktcc.parser.*
import com.soywiz.ktcc.transform.*
import com.soywiz.ktcc.types.*

open class BaseGenerator(val program: Program, val parser: ProgramParser) {
    val strings get() = parser.strings

    val fixedSizeArrayTypes: Set<ArrayType> by lazy {
        //program.getAllTypes(program.parser).filterIsInstance<ArrayType>().filter { it.numElements != null && it.elementType is ArrayType }.toSet()
        program.getAllTypes(parser).filterIsInstance<ArrayType>().toSet()
    }

    fun Type.resolve(): Type = this.resolve(parser)

    val Type.requireRefStackAlloc get() = when (this) {
        is StructType -> false
        else -> true
    }
}
