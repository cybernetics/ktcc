(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktcc'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktcc'.");
    }
    root.ktcc = factory(typeof ktcc === 'undefined' ? {} : ktcc, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var numberToInt = Kotlin.numberToInt;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var toString = Kotlin.toString;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var unboxChar = Kotlin.unboxChar;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_7epoxm$;
  var toInt_0 = Kotlin.kotlin.text.toInt_pdl1vz$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var firstOrNull = Kotlin.kotlin.text.firstOrNull_gw00vp$;
  var contains_0 = Kotlin.kotlin.text.contains_sgbm27$;
  var endsWith = Kotlin.kotlin.text.endsWith_sgbm27$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var wrapFunction = Kotlin.wrapFunction;
  var firstOrNull_0 = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Throwable = Error;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var plus = Kotlin.kotlin.collections.plus_khz7k3$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_73mtqc$;
  var contains_1 = Kotlin.kotlin.collections.contains_mjy6jw$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var isWhitespace = Kotlin.kotlin.text.isWhitespace_myv2d0$;
  var lastOrNull = Kotlin.kotlin.text.lastOrNull_gw00vp$;
  var endsWith_0 = Kotlin.kotlin.text.endsWith_7epoxm$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var substringBefore = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var throwUPAE = Kotlin.throwUPAE;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Exception = Kotlin.kotlin.Exception;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var contains_2 = Kotlin.kotlin.collections.contains_o2f9me$;
  var toChar = Kotlin.toChar;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  ProgramParser.prototype = Object.create(ListReader.prototype);
  ProgramParser.prototype.constructor = ProgramParser;
  Expr.prototype = Object.create(Node.prototype);
  Expr.prototype.constructor = Expr;
  Id.prototype = Object.create(Expr.prototype);
  Id.prototype.constructor = Id;
  StringConstant.prototype = Object.create(Expr.prototype);
  StringConstant.prototype.constructor = StringConstant;
  CharConstant.prototype = Object.create(Expr.prototype);
  CharConstant.prototype.constructor = CharConstant;
  IntConstant.prototype = Object.create(Expr.prototype);
  IntConstant.prototype.constructor = IntConstant;
  DoubleConstant.prototype = Object.create(Expr.prototype);
  DoubleConstant.prototype.constructor = DoubleConstant;
  LValue.prototype = Object.create(Expr.prototype);
  LValue.prototype.constructor = LValue;
  CommaExpr.prototype = Object.create(Expr.prototype);
  CommaExpr.prototype.constructor = CommaExpr;
  ConstExpr.prototype = Object.create(Expr.prototype);
  ConstExpr.prototype.constructor = ConstExpr;
  PostfixExpr.prototype = Object.create(Expr.prototype);
  PostfixExpr.prototype.constructor = PostfixExpr;
  Unop.prototype = Object.create(Expr.prototype);
  Unop.prototype.constructor = Unop;
  ArrayAccessExpr.prototype = Object.create(LValue.prototype);
  ArrayAccessExpr.prototype.constructor = ArrayAccessExpr;
  FieldAccessExpr.prototype = Object.create(LValue.prototype);
  FieldAccessExpr.prototype.constructor = FieldAccessExpr;
  CallExpr.prototype = Object.create(Expr.prototype);
  CallExpr.prototype.constructor = CallExpr;
  OperatorsExpr.prototype = Object.create(Expr.prototype);
  OperatorsExpr.prototype.constructor = OperatorsExpr;
  Binop.prototype = Object.create(Expr.prototype);
  Binop.prototype.constructor = Binop;
  Stm.prototype = Object.create(Node.prototype);
  Stm.prototype.constructor = Stm;
  IfElse.prototype = Object.create(Stm.prototype);
  IfElse.prototype.constructor = IfElse;
  While.prototype = Object.create(Stm.prototype);
  While.prototype.constructor = While;
  DoWhile.prototype = Object.create(Stm.prototype);
  DoWhile.prototype.constructor = DoWhile;
  For.prototype = Object.create(Stm.prototype);
  For.prototype.constructor = For;
  Goto.prototype = Object.create(Stm.prototype);
  Goto.prototype.constructor = Goto;
  Continue.prototype = Object.create(Stm.prototype);
  Continue.prototype.constructor = Continue;
  Break.prototype = Object.create(Stm.prototype);
  Break.prototype.constructor = Break;
  Return.prototype = Object.create(Stm.prototype);
  Return.prototype.constructor = Return;
  Switch.prototype = Object.create(Stm.prototype);
  Switch.prototype.constructor = Switch;
  ExprStm.prototype = Object.create(Stm.prototype);
  ExprStm.prototype.constructor = ExprStm;
  LabeledStm.prototype = Object.create(Stm.prototype);
  LabeledStm.prototype.constructor = LabeledStm;
  CaseStm.prototype = Object.create(Stm.prototype);
  CaseStm.prototype.constructor = CaseStm;
  DefaultStm.prototype = Object.create(Stm.prototype);
  DefaultStm.prototype.constructor = DefaultStm;
  Stms.prototype = Object.create(Stm.prototype);
  Stms.prototype.constructor = Stms;
  Decl.prototype = Object.create(Stm.prototype);
  Decl.prototype.constructor = Decl;
  CParam.prototype = Object.create(Node.prototype);
  CParam.prototype.constructor = CParam;
  FuncDecl.prototype = Object.create(Decl.prototype);
  FuncDecl.prototype.constructor = FuncDecl;
  Program.prototype = Object.create(Node.prototype);
  Program.prototype.constructor = Program;
  UnaryExpr.prototype = Object.create(Expr.prototype);
  UnaryExpr.prototype.constructor = UnaryExpr;
  CastExpr.prototype = Object.create(Expr.prototype);
  CastExpr.prototype.constructor = CastExpr;
  SizeOfAlignTypeExpr.prototype = Object.create(Expr.prototype);
  SizeOfAlignTypeExpr.prototype.constructor = SizeOfAlignTypeExpr;
  ConditionalExpr.prototype = Object.create(Expr.prototype);
  ConditionalExpr.prototype.constructor = ConditionalExpr;
  TypeSpecifier.prototype = Object.create(Node.prototype);
  TypeSpecifier.prototype.constructor = TypeSpecifier;
  ListTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  ListTypeSpecifier.prototype.constructor = ListTypeSpecifier;
  BasicTypeSpecifier$Kind$Companion.prototype = Object.create(KeywordEnum$Companion.prototype);
  BasicTypeSpecifier$Kind$Companion.prototype.constructor = BasicTypeSpecifier$Kind$Companion;
  BasicTypeSpecifier$Kind.prototype = Object.create(Enum.prototype);
  BasicTypeSpecifier$Kind.prototype.constructor = BasicTypeSpecifier$Kind;
  BasicTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  BasicTypeSpecifier.prototype.constructor = BasicTypeSpecifier;
  TypedefTypeSpecifierName.prototype = Object.create(TypeSpecifier.prototype);
  TypedefTypeSpecifierName.prototype.constructor = TypedefTypeSpecifierName;
  TypedefTypeSpecifierRef.prototype = Object.create(TypeSpecifier.prototype);
  TypedefTypeSpecifierRef.prototype.constructor = TypedefTypeSpecifierRef;
  StructUnionTypeSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  StructUnionTypeSpecifier.prototype.constructor = StructUnionTypeSpecifier;
  StorageClassSpecifier$Kind$Companion.prototype = Object.create(KeywordEnum$Companion.prototype);
  StorageClassSpecifier$Kind$Companion.prototype.constructor = StorageClassSpecifier$Kind$Companion;
  StorageClassSpecifier$Kind.prototype = Object.create(Enum.prototype);
  StorageClassSpecifier$Kind.prototype.constructor = StorageClassSpecifier$Kind;
  StorageClassSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  StorageClassSpecifier.prototype.constructor = StorageClassSpecifier;
  TypeQualifier$Kind$Companion.prototype = Object.create(KeywordEnum$Companion.prototype);
  TypeQualifier$Kind$Companion.prototype.constructor = TypeQualifier$Kind$Companion;
  TypeQualifier$Kind.prototype = Object.create(Enum.prototype);
  TypeQualifier$Kind.prototype.constructor = TypeQualifier$Kind;
  TypeQualifier.prototype = Object.create(TypeSpecifier.prototype);
  TypeQualifier.prototype.constructor = TypeQualifier;
  FunctionSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  FunctionSpecifier.prototype.constructor = FunctionSpecifier;
  AlignAsSpecifier.prototype = Object.create(TypeSpecifier.prototype);
  AlignAsSpecifier.prototype.constructor = AlignAsSpecifier;
  TypeName.prototype = Object.create(TypeSpecifier.prototype);
  TypeName.prototype.constructor = TypeName;
  AbstractDeclarator.prototype = Object.create(Node.prototype);
  AbstractDeclarator.prototype.constructor = AbstractDeclarator;
  StructDeclarator.prototype = Object.create(Node.prototype);
  StructDeclarator.prototype.constructor = StructDeclarator;
  StructDeclaration.prototype = Object.create(Node.prototype);
  StructDeclaration.prototype.constructor = StructDeclaration;
  Pointer.prototype = Object.create(Node.prototype);
  Pointer.prototype.constructor = Pointer;
  ParameterDecl.prototype = Object.create(Node.prototype);
  ParameterDecl.prototype.constructor = ParameterDecl;
  Declarator.prototype = Object.create(Node.prototype);
  Declarator.prototype.constructor = Declarator;
  DeclaratorWithPointer.prototype = Object.create(Declarator.prototype);
  DeclaratorWithPointer.prototype.constructor = DeclaratorWithPointer;
  IdentifierDeclarator.prototype = Object.create(Declarator.prototype);
  IdentifierDeclarator.prototype.constructor = IdentifierDeclarator;
  ParameterDeclarator.prototype = Object.create(Declarator.prototype);
  ParameterDeclarator.prototype.constructor = ParameterDeclarator;
  ArrayDeclarator.prototype = Object.create(Declarator.prototype);
  ArrayDeclarator.prototype.constructor = ArrayDeclarator;
  Designator.prototype = Object.create(Node.prototype);
  Designator.prototype.constructor = Designator;
  ArrayAccessDesignator.prototype = Object.create(Designator.prototype);
  ArrayAccessDesignator.prototype.constructor = ArrayAccessDesignator;
  FieldAccessDesignator.prototype = Object.create(Designator.prototype);
  FieldAccessDesignator.prototype.constructor = FieldAccessDesignator;
  DesignatorList.prototype = Object.create(Node.prototype);
  DesignatorList.prototype.constructor = DesignatorList;
  DesignOptInit.prototype = Object.create(Node.prototype);
  DesignOptInit.prototype.constructor = DesignOptInit;
  ArrayInitExpr.prototype = Object.create(Expr.prototype);
  ArrayInitExpr.prototype.constructor = ArrayInitExpr;
  InitDeclarator.prototype = Object.create(Node.prototype);
  InitDeclarator.prototype.constructor = InitDeclarator;
  Declaration.prototype = Object.create(Decl.prototype);
  Declaration.prototype.constructor = Declaration;
  IncludeKind.prototype = Object.create(Enum.prototype);
  IncludeKind.prototype.constructor = IncludeKind;
  IncludeMode.prototype = Object.create(Enum.prototype);
  IncludeMode.prototype.constructor = IncludeMode;
  IntFType.prototype = Object.create(FType.prototype);
  IntFType.prototype.constructor = IntFType;
  FloatFType.prototype = Object.create(FType.prototype);
  FloatFType.prototype.constructor = FloatFType;
  PointerFType.prototype = Object.create(FType.prototype);
  PointerFType.prototype.constructor = PointerFType;
  StructFType.prototype = Object.create(FType.prototype);
  StructFType.prototype.constructor = StructFType;
  UnknownFType.prototype = Object.create(FType.prototype);
  UnknownFType.prototype.constructor = UnknownFType;
  TypedefFTypeRef.prototype = Object.create(FType.prototype);
  TypedefFTypeRef.prototype.constructor = TypedefFTypeRef;
  TypedefFTypeName.prototype = Object.create(FType.prototype);
  TypedefFTypeName.prototype.constructor = TypedefFTypeName;
  ArrayFType.prototype = Object.create(FType.prototype);
  ArrayFType.prototype.constructor = ArrayFType;
  ExpectException.prototype = Object.create(Exception.prototype);
  ExpectException.prototype.constructor = ExpectException;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  function ProgramParser(items, tokens, pos) {
    if (pos === void 0)
      pos = 0;
    ListReader.call(this, items, '<eof>', pos);
    this.tokens = tokens;
    this.POINTER_SIZE = 4;
    this.typedefTypes = LinkedHashMap_init();
    this.typedefAliases = LinkedHashMap_init();
    this.strings = LinkedHashSet_init();
    this.structId = 0;
    this.structTypesByName = LinkedHashMap_init();
    this.structTypesBySpecifier = LinkedHashMap_init();
  }
  Object.defineProperty(ProgramParser.prototype, 'current', {get: function () {
    return this.peek_za3lpa$();
  }});
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  ProgramParser.prototype.resolve_b2mlnm$ = function ($receiver) {
    var tmp$;
    if (Kotlin.isType($receiver, TypedefFTypeRef)) {
      var tmp$_0;
      if ((tmp$ = this.typedefAliases.get_11rb$($receiver.id)) != null)
        tmp$_0 = tmp$;
      else {
        throw IllegalStateException_init(("Can't resolve type " + $receiver.id).toString());
      }
      return tmp$_0;
    }
     else
      return $receiver;
  };
  ProgramParser.prototype.getSize_b2mlnm$ = function ($receiver) {
    if (Kotlin.isType($receiver, IntFType))
      return $receiver.typeSize;
    else if (Kotlin.isType($receiver, FloatFType))
      return $receiver.size;
    else if (Kotlin.isType($receiver, PointerFType))
      return this.POINTER_SIZE;
    else if (Kotlin.isType($receiver, TypedefFTypeRef))
      return this.getSize_b2mlnm$(this.resolve_b2mlnm$($receiver));
    else if (Kotlin.isType($receiver, StructFType))
      return this.getStructTypeInfo_me841z$($receiver.spec).size;
    else if (Kotlin.isType($receiver, ArrayFType)) {
      var decl = $receiver.declarator;
      if (decl.expr != null) {
        return Kotlin.imul(this.getSize_b2mlnm$($receiver.type), numberToInt(constantEvaluate(decl.expr)));
      }
       else {
        return this.POINTER_SIZE;
      }
    }
     else {
      throw IllegalStateException_init((Kotlin.getKClassFromExpression($receiver).toString() + ': ' + $receiver).toString());
    }
  };
  ProgramParser.prototype.getStructTypeInfo_61zpoe$ = function (name) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.structTypesByName.get_11rb$(name)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(("Can't find type by name " + name).toString());
    }
    return tmp$_0;
  };
  ProgramParser.prototype.getStructTypeInfo_me841z$ = function (spec) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.structTypesBySpecifier.get_11rb$(spec)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(("Can't find type by spec " + spec).toString());
    }
    return tmp$_0;
  };
  ProgramParser.prototype.toString = function () {
    return "ProgramParser(current='" + this.current + "', pos=" + this.pos + ', token=' + toString(getOrNull(this.tokens, this.pos)) + ')';
  };
  ProgramParser.$metadata$ = {kind: Kind_CLASS, simpleName: 'ProgramParser', interfaces: [ListReader]};
  function StructField(name, type, offset, size) {
    this.name = name;
    this.type = type;
    this.offset = offset;
    this.size = size;
    this.offsetName = 'OFFSET_' + this.name;
  }
  StructField.$metadata$ = {kind: Kind_CLASS, simpleName: 'StructField', interfaces: []};
  StructField.prototype.component1 = function () {
    return this.name;
  };
  StructField.prototype.component2 = function () {
    return this.type;
  };
  StructField.prototype.component3 = function () {
    return this.offset;
  };
  StructField.prototype.component4 = function () {
    return this.size;
  };
  StructField.prototype.copy_7czv9f$ = function (name, type, offset, size) {
    return new StructField(name === void 0 ? this.name : name, type === void 0 ? this.type : type, offset === void 0 ? this.offset : offset, size === void 0 ? this.size : size);
  };
  StructField.prototype.toString = function () {
    return 'StructField(name=' + Kotlin.toString(this.name) + (', type=' + Kotlin.toString(this.type)) + (', offset=' + Kotlin.toString(this.offset)) + (', size=' + Kotlin.toString(this.size)) + ')';
  };
  StructField.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  StructField.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.offset, other.offset) && Kotlin.equals(this.size, other.size)))));
  };
  function StructTypeInfo(name, spec, size) {
    if (size === void 0)
      size = 0;
    this.name = name;
    this.spec = spec;
    this.size = size;
    this.fields = ArrayList_init();
  }
  StructTypeInfo.$metadata$ = {kind: Kind_CLASS, simpleName: 'StructTypeInfo', interfaces: []};
  StructTypeInfo.prototype.component1 = function () {
    return this.name;
  };
  StructTypeInfo.prototype.component2 = function () {
    return this.spec;
  };
  StructTypeInfo.prototype.component3 = function () {
    return this.size;
  };
  StructTypeInfo.prototype.copy_jwwz7r$ = function (name, spec, size) {
    return new StructTypeInfo(name === void 0 ? this.name : name, spec === void 0 ? this.spec : spec, size === void 0 ? this.size : size);
  };
  StructTypeInfo.prototype.toString = function () {
    return 'StructTypeInfo(name=' + Kotlin.toString(this.name) + (', spec=' + Kotlin.toString(this.spec)) + (', size=' + Kotlin.toString(this.size)) + ')';
  };
  StructTypeInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.spec) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  StructTypeInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.spec, other.spec) && Kotlin.equals(this.size, other.size)))));
  };
  function Node() {
    this.pos = -1;
  }
  Node.$metadata$ = {kind: Kind_CLASS, simpleName: 'Node', interfaces: []};
  function Id(name) {
    Id$Companion_getInstance();
    Expr.call(this);
    this.name = name;
    Id$Companion_getInstance().validate_61zpoe$(this.name);
  }
  function Id$Companion() {
    Id$Companion_instance = this;
  }
  Id$Companion.prototype.isValid_61zpoe$ = function (name) {
    return this.isValidMsg_61zpoe$(name) == null;
  };
  Id$Companion.prototype.isValidMsg_61zpoe$ = function (name) {
    if (name.length === 0)
      return 'Empty is not a valid identifier';
    if (!isAlphaOrUnderscore(name.charCodeAt(0)))
      return 'Identifier must start with a-zA-Z_';
    var all$result;
    all$break: do {
      var tmp$;
      tmp$ = iterator(name);
      while (tmp$.hasNext()) {
        var element = unboxChar(tmp$.next());
        if (!isAlnumOrUnderscore(unboxChar(toBoxedChar(element)))) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    if (!all$result)
      return 'Identifier can only contain a-zA-Z0-9_';
    return null;
  };
  Id$Companion.prototype.validate_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = this.isValidMsg_61zpoe$(name);
    if (tmp$ == null) {
      return;
    }
    throw new ExpectException(tmp$);
  };
  Id$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Id$Companion_instance = null;
  function Id$Companion_getInstance() {
    if (Id$Companion_instance === null) {
      new Id$Companion();
    }
    return Id$Companion_instance;
  }
  Id.prototype.toString = function () {
    return this.name;
  };
  Id.$metadata$ = {kind: Kind_CLASS, simpleName: 'Id', interfaces: [Expr]};
  Id.prototype.component1 = function () {
    return this.name;
  };
  Id.prototype.copy_61zpoe$ = function (name) {
    return new Id(name === void 0 ? this.name : name);
  };
  Id.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Id.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function StringConstant(raw) {
    StringConstant$Companion_getInstance();
    Expr.call(this);
    this.raw = raw;
    StringConstant$Companion_getInstance().validate_61zpoe$(this.raw);
  }
  function StringConstant$Companion() {
    StringConstant$Companion_instance = this;
  }
  StringConstant$Companion.prototype.isValid_61zpoe$ = function (data) {
    return this.isValidMsg_61zpoe$(data) == null;
  };
  StringConstant$Companion.prototype.isValidMsg_61zpoe$ = function (data) {
    if (!startsWith(data, 34))
      return "Not starting with '\"'";
    return null;
  };
  StringConstant$Companion.prototype.validate_61zpoe$ = function (data) {
    var tmp$;
    tmp$ = this.isValidMsg_61zpoe$(data);
    if (tmp$ == null) {
      return;
    }
    throw new ExpectException(tmp$);
  };
  StringConstant$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var StringConstant$Companion_instance = null;
  function StringConstant$Companion_getInstance() {
    if (StringConstant$Companion_instance === null) {
      new StringConstant$Companion();
    }
    return StringConstant$Companion_instance;
  }
  StringConstant.$metadata$ = {kind: Kind_CLASS, simpleName: 'StringConstant', interfaces: [Expr]};
  StringConstant.prototype.component1 = function () {
    return this.raw;
  };
  StringConstant.prototype.copy_61zpoe$ = function (raw) {
    return new StringConstant(raw === void 0 ? this.raw : raw);
  };
  StringConstant.prototype.toString = function () {
    return 'StringConstant(raw=' + Kotlin.toString(this.raw) + ')';
  };
  StringConstant.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.raw) | 0;
    return result;
  };
  StringConstant.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.raw, other.raw))));
  };
  function CharConstant(raw) {
    CharConstant$Companion_getInstance();
    Expr.call(this);
    this.raw = raw;
    CharConstant$Companion_getInstance().validate_61zpoe$(this.raw);
  }
  function CharConstant$Companion() {
    CharConstant$Companion_instance = this;
  }
  CharConstant$Companion.prototype.isValid_61zpoe$ = function (data) {
    return this.isValidMsg_61zpoe$(data) == null;
  };
  CharConstant$Companion.prototype.isValidMsg_61zpoe$ = function (data) {
    if (!startsWith(data, 39))
      return 'Not starting with "\'"';
    return null;
  };
  CharConstant$Companion.prototype.validate_61zpoe$ = function (data) {
    var tmp$;
    tmp$ = this.isValidMsg_61zpoe$(data);
    if (tmp$ == null) {
      return;
    }
    throw new ExpectException(tmp$);
  };
  CharConstant$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var CharConstant$Companion_instance = null;
  function CharConstant$Companion_getInstance() {
    if (CharConstant$Companion_instance === null) {
      new CharConstant$Companion();
    }
    return CharConstant$Companion_instance;
  }
  CharConstant.$metadata$ = {kind: Kind_CLASS, simpleName: 'CharConstant', interfaces: [Expr]};
  CharConstant.prototype.component1 = function () {
    return this.raw;
  };
  CharConstant.prototype.copy_61zpoe$ = function (raw) {
    return new CharConstant(raw === void 0 ? this.raw : raw);
  };
  CharConstant.prototype.toString = function () {
    return 'CharConstant(raw=' + Kotlin.toString(this.raw) + ')';
  };
  CharConstant.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.raw) | 0;
    return result;
  };
  CharConstant.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.raw, other.raw))));
  };
  function IntConstant(data) {
    IntConstant$Companion_getInstance();
    Expr.call(this);
    this.data = data;
    this.dataWithoutSuffix = removeSuffix(removeSuffix(removeSuffix(this.data, 'u'), 'l'), 'L');
    IntConstant$Companion_getInstance().validate_61zpoe$(this.data);
  }
  Object.defineProperty(IntConstant.prototype, 'value', {get: function () {
    if (startsWith_0(this.dataWithoutSuffix, '0x') || startsWith_0(this.dataWithoutSuffix, '0X')) {
      return toInt(this.dataWithoutSuffix.substring(2), 16);
    }
     else if (startsWith_0(this.dataWithoutSuffix, '0'))
      return toInt(this.dataWithoutSuffix, 8);
    else
      return toInt_0(this.dataWithoutSuffix);
  }});
  function IntConstant$Companion() {
    IntConstant$Companion_instance = this;
  }
  IntConstant$Companion.prototype.isValid_61zpoe$ = function (data) {
    return this.isValidMsg_61zpoe$(data) == null;
  };
  IntConstant$Companion.prototype.isValidMsg_61zpoe$ = function (data) {
    if (contains(data, '.'))
      return 'Decimal';
    if (startsWith_0(data, '0x'))
      return null;
    if (startsWith_0(data, '0'))
      return null;
    var $receiver = new CharRange(48, 57);
    var element = firstOrNull(data);
    if (element != null && $receiver.contains_mef7kx$(element) && !contains_0(data, 46) && !endsWith(data, 102))
      return null;
    return 'Constant can only contain digits';
  };
  IntConstant$Companion.prototype.validate_61zpoe$ = function (data) {
    var tmp$;
    tmp$ = this.isValidMsg_61zpoe$(data);
    if (tmp$ == null) {
      return;
    }
    throw new ExpectException(tmp$);
  };
  IntConstant$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var IntConstant$Companion_instance = null;
  function IntConstant$Companion_getInstance() {
    if (IntConstant$Companion_instance === null) {
      new IntConstant$Companion();
    }
    return IntConstant$Companion_instance;
  }
  IntConstant.prototype.toString = function () {
    return this.data;
  };
  IntConstant.$metadata$ = {kind: Kind_CLASS, simpleName: 'IntConstant', interfaces: [Expr]};
  IntConstant.prototype.component1 = function () {
    return this.data;
  };
  IntConstant.prototype.copy_61zpoe$ = function (data) {
    return new IntConstant(data === void 0 ? this.data : data);
  };
  IntConstant.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  IntConstant.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.data, other.data))));
  };
  function DoubleConstant(data) {
    DoubleConstant$Companion_getInstance();
    Expr.call(this);
    this.data = data;
    this.dataWithoutSuffix = removeSuffix(this.data, 'f');
    DoubleConstant$Companion_getInstance().validate_61zpoe$(this.data);
  }
  Object.defineProperty(DoubleConstant.prototype, 'value', {get: function () {
    return toDouble(this.dataWithoutSuffix);
  }});
  function DoubleConstant$Companion() {
    DoubleConstant$Companion_instance = this;
  }
  DoubleConstant$Companion.prototype.isValid_61zpoe$ = function (data) {
    return this.isValidMsg_61zpoe$(data) == null;
  };
  DoubleConstant$Companion.prototype.isValidMsg_61zpoe$ = function (data) {
    var $receiver = new CharRange(48, 57);
    var element = firstOrNull(data);
    if (element != null && $receiver.contains_mef7kx$(element) || firstOrNull(data) === 46)
      return null;
    return 'Constant can only contain digits';
  };
  DoubleConstant$Companion.prototype.validate_61zpoe$ = function (data) {
    var tmp$;
    tmp$ = this.isValidMsg_61zpoe$(data);
    if (tmp$ == null) {
      return;
    }
    throw new ExpectException(tmp$);
  };
  DoubleConstant$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var DoubleConstant$Companion_instance = null;
  function DoubleConstant$Companion_getInstance() {
    if (DoubleConstant$Companion_instance === null) {
      new DoubleConstant$Companion();
    }
    return DoubleConstant$Companion_instance;
  }
  DoubleConstant.prototype.toString = function () {
    return this.data;
  };
  DoubleConstant.$metadata$ = {kind: Kind_CLASS, simpleName: 'DoubleConstant', interfaces: [Expr]};
  DoubleConstant.prototype.component1 = function () {
    return this.data;
  };
  DoubleConstant.prototype.copy_61zpoe$ = function (data) {
    return new DoubleConstant(data === void 0 ? this.data : data);
  };
  DoubleConstant.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  DoubleConstant.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.data, other.data))));
  };
  function Expr() {
    Node.call(this);
  }
  Expr.$metadata$ = {kind: Kind_CLASS, simpleName: 'Expr', interfaces: [Node]};
  function LValue() {
    Expr.call(this);
  }
  LValue.$metadata$ = {kind: Kind_CLASS, simpleName: 'LValue', interfaces: [Expr]};
  function CommaExpr(exprs) {
    Expr.call(this);
    this.exprs = exprs;
  }
  CommaExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'CommaExpr', interfaces: [Expr]};
  CommaExpr.prototype.component1 = function () {
    return this.exprs;
  };
  CommaExpr.prototype.copy_fcq9q1$ = function (exprs) {
    return new CommaExpr(exprs === void 0 ? this.exprs : exprs);
  };
  CommaExpr.prototype.toString = function () {
    return 'CommaExpr(exprs=' + Kotlin.toString(this.exprs) + ')';
  };
  CommaExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.exprs) | 0;
    return result;
  };
  CommaExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.exprs, other.exprs))));
  };
  function ConstExpr(expr) {
    Expr.call(this);
    this.expr = expr;
  }
  ConstExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConstExpr', interfaces: [Expr]};
  ConstExpr.prototype.component1 = function () {
    return this.expr;
  };
  ConstExpr.prototype.copy_2q1gro$ = function (expr) {
    return new ConstExpr(expr === void 0 ? this.expr : expr);
  };
  ConstExpr.prototype.toString = function () {
    return 'ConstExpr(expr=' + Kotlin.toString(this.expr) + ')';
  };
  ConstExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    return result;
  };
  ConstExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.expr, other.expr))));
  };
  function PostfixExpr(lvalue, op) {
    Expr.call(this);
    this.lvalue = lvalue;
    this.op = op;
  }
  PostfixExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'PostfixExpr', interfaces: [Expr]};
  PostfixExpr.prototype.component1 = function () {
    return this.lvalue;
  };
  PostfixExpr.prototype.component2 = function () {
    return this.op;
  };
  PostfixExpr.prototype.copy_uwweuu$ = function (lvalue, op) {
    return new PostfixExpr(lvalue === void 0 ? this.lvalue : lvalue, op === void 0 ? this.op : op);
  };
  PostfixExpr.prototype.toString = function () {
    return 'PostfixExpr(lvalue=' + Kotlin.toString(this.lvalue) + (', op=' + Kotlin.toString(this.op)) + ')';
  };
  PostfixExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lvalue) | 0;
    result = result * 31 + Kotlin.hashCode(this.op) | 0;
    return result;
  };
  PostfixExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.lvalue, other.lvalue) && Kotlin.equals(this.op, other.op)))));
  };
  function Unop(op, lvalue) {
    Expr.call(this);
    this.op = op;
    this.lvalue = lvalue;
  }
  Unop.$metadata$ = {kind: Kind_CLASS, simpleName: 'Unop', interfaces: [Expr]};
  Unop.prototype.component1 = function () {
    return this.op;
  };
  Unop.prototype.component2 = function () {
    return this.lvalue;
  };
  Unop.prototype.copy_e865ym$ = function (op, lvalue) {
    return new Unop(op === void 0 ? this.op : op, lvalue === void 0 ? this.lvalue : lvalue);
  };
  Unop.prototype.toString = function () {
    return 'Unop(op=' + Kotlin.toString(this.op) + (', lvalue=' + Kotlin.toString(this.lvalue)) + ')';
  };
  Unop.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.op) | 0;
    result = result * 31 + Kotlin.hashCode(this.lvalue) | 0;
    return result;
  };
  Unop.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.op, other.op) && Kotlin.equals(this.lvalue, other.lvalue)))));
  };
  function ArrayAccessExpr(expr, index) {
    LValue.call(this);
    this.expr = expr;
    this.index = index;
  }
  ArrayAccessExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayAccessExpr', interfaces: [LValue]};
  ArrayAccessExpr.prototype.component1 = function () {
    return this.expr;
  };
  ArrayAccessExpr.prototype.component2 = function () {
    return this.index;
  };
  ArrayAccessExpr.prototype.copy_kh1b2s$ = function (expr, index) {
    return new ArrayAccessExpr(expr === void 0 ? this.expr : expr, index === void 0 ? this.index : index);
  };
  ArrayAccessExpr.prototype.toString = function () {
    return 'ArrayAccessExpr(expr=' + Kotlin.toString(this.expr) + (', index=' + Kotlin.toString(this.index)) + ')';
  };
  ArrayAccessExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    return result;
  };
  ArrayAccessExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.index, other.index)))));
  };
  function FieldAccessExpr(expr, id, indirect) {
    LValue.call(this);
    this.expr = expr;
    this.id = id;
    this.indirect = indirect;
  }
  FieldAccessExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'FieldAccessExpr', interfaces: [LValue]};
  FieldAccessExpr.prototype.component1 = function () {
    return this.expr;
  };
  FieldAccessExpr.prototype.component2 = function () {
    return this.id;
  };
  FieldAccessExpr.prototype.component3 = function () {
    return this.indirect;
  };
  FieldAccessExpr.prototype.copy_pqa7p1$ = function (expr, id, indirect) {
    return new FieldAccessExpr(expr === void 0 ? this.expr : expr, id === void 0 ? this.id : id, indirect === void 0 ? this.indirect : indirect);
  };
  FieldAccessExpr.prototype.toString = function () {
    return 'FieldAccessExpr(expr=' + Kotlin.toString(this.expr) + (', id=' + Kotlin.toString(this.id)) + (', indirect=' + Kotlin.toString(this.indirect)) + ')';
  };
  FieldAccessExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.indirect) | 0;
    return result;
  };
  FieldAccessExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.indirect, other.indirect)))));
  };
  function CallExpr(expr, args) {
    Expr.call(this);
    this.expr = expr;
    this.args = args;
  }
  CallExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'CallExpr', interfaces: [Expr]};
  CallExpr.prototype.component1 = function () {
    return this.expr;
  };
  CallExpr.prototype.component2 = function () {
    return this.args;
  };
  CallExpr.prototype.copy_s85wwf$ = function (expr, args) {
    return new CallExpr(expr === void 0 ? this.expr : expr, args === void 0 ? this.args : args);
  };
  CallExpr.prototype.toString = function () {
    return 'CallExpr(expr=' + Kotlin.toString(this.expr) + (', args=' + Kotlin.toString(this.args)) + ')';
  };
  CallExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.args) | 0;
    return result;
  };
  CallExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.args, other.args)))));
  };
  function OperatorsExpr(exprs, ops) {
    OperatorsExpr$Companion_getInstance();
    Expr.call(this);
    this.exprs = exprs;
    this.ops = ops;
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_1 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  function OperatorsExpr$Companion() {
    OperatorsExpr$Companion_instance = this;
    var $receiver = withIndex(listOf(['*', '/', '%', '+', '-', '<<', '>>', '<', '<=', '>', '>=', '==', '!=', '&', '|', '&&', '||', '=', '*=', '/=', '%=', '+=', '-=', '<<=', '>>=', '&=', '^=', '|=']));
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
    var destination = LinkedHashMap_init_1(capacity);
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var pair = to(element.value, element.index);
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    this.precedences = destination;
  }
  OperatorsExpr$Companion.prototype.compareOps_puj7f4$ = function (l, r) {
    var tmp$, tmp$_0;
    return Kotlin.primitiveCompareTo((tmp$ = this.precedences.get_11rb$(l)) != null ? tmp$ : -1, (tmp$_0 = this.precedences.get_11rb$(r)) != null ? tmp$_0 : -1);
  };
  OperatorsExpr$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var OperatorsExpr$Companion_instance = null;
  function OperatorsExpr$Companion_getInstance() {
    if (OperatorsExpr$Companion_instance === null) {
      new OperatorsExpr$Companion();
    }
    return OperatorsExpr$Companion_instance;
  }
  OperatorsExpr.prototype.expand = function () {
    var tmp$, tmp$_0;
    var out = new Binop(this.exprs.get_za3lpa$(0), this.ops.get_za3lpa$(0), this.exprs.get_za3lpa$(1));
    tmp$ = zip(drop(this.exprs, 2), drop(this.ops, 1)).iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var next = tmp$_1.component1(), op = tmp$_1.component2();
      if (OperatorsExpr$Companion_getInstance().compareOps_puj7f4$(out.op, op) > 0) {
        tmp$_0 = new Binop(out.l, out.op, new Binop(out.r, op, next));
      }
       else {
        tmp$_0 = new Binop(out, op, next);
      }
      out = tmp$_0;
    }
    return out;
  };
  OperatorsExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'OperatorsExpr', interfaces: [Expr]};
  OperatorsExpr.prototype.component1 = function () {
    return this.exprs;
  };
  OperatorsExpr.prototype.component2 = function () {
    return this.ops;
  };
  OperatorsExpr.prototype.copy_awyua6$ = function (exprs, ops) {
    return new OperatorsExpr(exprs === void 0 ? this.exprs : exprs, ops === void 0 ? this.ops : ops);
  };
  OperatorsExpr.prototype.toString = function () {
    return 'OperatorsExpr(exprs=' + Kotlin.toString(this.exprs) + (', ops=' + Kotlin.toString(this.ops)) + ')';
  };
  OperatorsExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.exprs) | 0;
    result = result * 31 + Kotlin.hashCode(this.ops) | 0;
    return result;
  };
  OperatorsExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.exprs, other.exprs) && Kotlin.equals(this.ops, other.ops)))));
  };
  function Binop(l, op, r) {
    Expr.call(this);
    this.l = l;
    this.op = op;
    this.r = r;
  }
  Binop.$metadata$ = {kind: Kind_CLASS, simpleName: 'Binop', interfaces: [Expr]};
  Binop.prototype.component1 = function () {
    return this.l;
  };
  Binop.prototype.component2 = function () {
    return this.op;
  };
  Binop.prototype.component3 = function () {
    return this.r;
  };
  Binop.prototype.copy_m5l5wm$ = function (l, op, r) {
    return new Binop(l === void 0 ? this.l : l, op === void 0 ? this.op : op, r === void 0 ? this.r : r);
  };
  Binop.prototype.toString = function () {
    return 'Binop(l=' + Kotlin.toString(this.l) + (', op=' + Kotlin.toString(this.op)) + (', r=' + Kotlin.toString(this.r)) + ')';
  };
  Binop.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.l) | 0;
    result = result * 31 + Kotlin.hashCode(this.op) | 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    return result;
  };
  Binop.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.l, other.l) && Kotlin.equals(this.op, other.op) && Kotlin.equals(this.r, other.r)))));
  };
  function Stm() {
    Node.call(this);
  }
  Stm.$metadata$ = {kind: Kind_CLASS, simpleName: 'Stm', interfaces: [Node]};
  function IfElse(cond, strue, sfalse) {
    Stm.call(this);
    this.cond = cond;
    this.strue = strue;
    this.sfalse = sfalse;
  }
  IfElse.$metadata$ = {kind: Kind_CLASS, simpleName: 'IfElse', interfaces: [Stm]};
  IfElse.prototype.component1 = function () {
    return this.cond;
  };
  IfElse.prototype.component2 = function () {
    return this.strue;
  };
  IfElse.prototype.component3 = function () {
    return this.sfalse;
  };
  IfElse.prototype.copy_pkm7pj$ = function (cond, strue, sfalse) {
    return new IfElse(cond === void 0 ? this.cond : cond, strue === void 0 ? this.strue : strue, sfalse === void 0 ? this.sfalse : sfalse);
  };
  IfElse.prototype.toString = function () {
    return 'IfElse(cond=' + Kotlin.toString(this.cond) + (', strue=' + Kotlin.toString(this.strue)) + (', sfalse=' + Kotlin.toString(this.sfalse)) + ')';
  };
  IfElse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    result = result * 31 + Kotlin.hashCode(this.strue) | 0;
    result = result * 31 + Kotlin.hashCode(this.sfalse) | 0;
    return result;
  };
  IfElse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cond, other.cond) && Kotlin.equals(this.strue, other.strue) && Kotlin.equals(this.sfalse, other.sfalse)))));
  };
  function While(cond, body) {
    Stm.call(this);
    this.cond = cond;
    this.body = body;
  }
  While.$metadata$ = {kind: Kind_CLASS, simpleName: 'While', interfaces: [Stm]};
  While.prototype.component1 = function () {
    return this.cond;
  };
  While.prototype.component2 = function () {
    return this.body;
  };
  While.prototype.copy_t4kivp$ = function (cond, body) {
    return new While(cond === void 0 ? this.cond : cond, body === void 0 ? this.body : body);
  };
  While.prototype.toString = function () {
    return 'While(cond=' + Kotlin.toString(this.cond) + (', body=' + Kotlin.toString(this.body)) + ')';
  };
  While.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    return result;
  };
  While.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cond, other.cond) && Kotlin.equals(this.body, other.body)))));
  };
  function DoWhile(cond, body) {
    Stm.call(this);
    this.cond = cond;
    this.body = body;
  }
  DoWhile.$metadata$ = {kind: Kind_CLASS, simpleName: 'DoWhile', interfaces: [Stm]};
  DoWhile.prototype.component1 = function () {
    return this.cond;
  };
  DoWhile.prototype.component2 = function () {
    return this.body;
  };
  DoWhile.prototype.copy_t4kivp$ = function (cond, body) {
    return new DoWhile(cond === void 0 ? this.cond : cond, body === void 0 ? this.body : body);
  };
  DoWhile.prototype.toString = function () {
    return 'DoWhile(cond=' + Kotlin.toString(this.cond) + (', body=' + Kotlin.toString(this.body)) + ')';
  };
  DoWhile.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    return result;
  };
  DoWhile.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cond, other.cond) && Kotlin.equals(this.body, other.body)))));
  };
  function For(init, cond, post, body) {
    Stm.call(this);
    this.init = init;
    this.cond = cond;
    this.post = post;
    this.body = body;
  }
  For.$metadata$ = {kind: Kind_CLASS, simpleName: 'For', interfaces: [Stm]};
  For.prototype.component1 = function () {
    return this.init;
  };
  For.prototype.component2 = function () {
    return this.cond;
  };
  For.prototype.component3 = function () {
    return this.post;
  };
  For.prototype.component4 = function () {
    return this.body;
  };
  For.prototype.copy_u0q08z$ = function (init, cond, post, body) {
    return new For(init === void 0 ? this.init : init, cond === void 0 ? this.cond : cond, post === void 0 ? this.post : post, body === void 0 ? this.body : body);
  };
  For.prototype.toString = function () {
    return 'For(init=' + Kotlin.toString(this.init) + (', cond=' + Kotlin.toString(this.cond)) + (', post=' + Kotlin.toString(this.post)) + (', body=' + Kotlin.toString(this.body)) + ')';
  };
  For.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.init) | 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    result = result * 31 + Kotlin.hashCode(this.post) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    return result;
  };
  For.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.init, other.init) && Kotlin.equals(this.cond, other.cond) && Kotlin.equals(this.post, other.post) && Kotlin.equals(this.body, other.body)))));
  };
  function Goto(id) {
    Stm.call(this);
    this.id = id;
  }
  Goto.$metadata$ = {kind: Kind_CLASS, simpleName: 'Goto', interfaces: [Stm]};
  Goto.prototype.component1 = function () {
    return this.id;
  };
  Goto.prototype.copy_ny89hm$ = function (id) {
    return new Goto(id === void 0 ? this.id : id);
  };
  Goto.prototype.toString = function () {
    return 'Goto(id=' + Kotlin.toString(this.id) + ')';
  };
  Goto.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  Goto.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function Continue(dummy) {
    if (dummy === void 0)
      dummy = true;
    Stm.call(this);
    this.dummy = dummy;
  }
  Continue.$metadata$ = {kind: Kind_CLASS, simpleName: 'Continue', interfaces: [Stm]};
  Continue.prototype.component1 = function () {
    return this.dummy;
  };
  Continue.prototype.copy_6taknv$ = function (dummy) {
    return new Continue(dummy === void 0 ? this.dummy : dummy);
  };
  Continue.prototype.toString = function () {
    return 'Continue(dummy=' + Kotlin.toString(this.dummy) + ')';
  };
  Continue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dummy) | 0;
    return result;
  };
  Continue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.dummy, other.dummy))));
  };
  function Break(dummy) {
    if (dummy === void 0)
      dummy = true;
    Stm.call(this);
    this.dummy = dummy;
  }
  Break.$metadata$ = {kind: Kind_CLASS, simpleName: 'Break', interfaces: [Stm]};
  Break.prototype.component1 = function () {
    return this.dummy;
  };
  Break.prototype.copy_6taknv$ = function (dummy) {
    return new Break(dummy === void 0 ? this.dummy : dummy);
  };
  Break.prototype.toString = function () {
    return 'Break(dummy=' + Kotlin.toString(this.dummy) + ')';
  };
  Break.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dummy) | 0;
    return result;
  };
  Break.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.dummy, other.dummy))));
  };
  function Return(expr) {
    Stm.call(this);
    this.expr = expr;
  }
  Return.$metadata$ = {kind: Kind_CLASS, simpleName: 'Return', interfaces: [Stm]};
  Return.prototype.component1 = function () {
    return this.expr;
  };
  Return.prototype.copy_de5dwb$ = function (expr) {
    return new Return(expr === void 0 ? this.expr : expr);
  };
  Return.prototype.toString = function () {
    return 'Return(expr=' + Kotlin.toString(this.expr) + ')';
  };
  Return.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    return result;
  };
  Return.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.expr, other.expr))));
  };
  function Switch(expr, body) {
    Stm.call(this);
    this.expr = expr;
    this.body = body;
  }
  Switch.$metadata$ = {kind: Kind_CLASS, simpleName: 'Switch', interfaces: [Stm]};
  Switch.prototype.component1 = function () {
    return this.expr;
  };
  Switch.prototype.component2 = function () {
    return this.body;
  };
  Switch.prototype.copy_t4kivp$ = function (expr, body) {
    return new Switch(expr === void 0 ? this.expr : expr, body === void 0 ? this.body : body);
  };
  Switch.prototype.toString = function () {
    return 'Switch(expr=' + Kotlin.toString(this.expr) + (', body=' + Kotlin.toString(this.body)) + ')';
  };
  Switch.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    return result;
  };
  Switch.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.body, other.body)))));
  };
  function ExprStm(expr) {
    Stm.call(this);
    this.expr = expr;
  }
  ExprStm.$metadata$ = {kind: Kind_CLASS, simpleName: 'ExprStm', interfaces: [Stm]};
  ExprStm.prototype.component1 = function () {
    return this.expr;
  };
  ExprStm.prototype.copy_de5dwb$ = function (expr) {
    return new ExprStm(expr === void 0 ? this.expr : expr);
  };
  ExprStm.prototype.toString = function () {
    return 'ExprStm(expr=' + Kotlin.toString(this.expr) + ')';
  };
  ExprStm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    return result;
  };
  ExprStm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.expr, other.expr))));
  };
  function LabeledStm(id, stm) {
    Stm.call(this);
    this.id = id;
    this.stm = stm;
  }
  LabeledStm.$metadata$ = {kind: Kind_CLASS, simpleName: 'LabeledStm', interfaces: [Stm]};
  LabeledStm.prototype.component1 = function () {
    return this.id;
  };
  LabeledStm.prototype.component2 = function () {
    return this.stm;
  };
  LabeledStm.prototype.copy_j4t3lx$ = function (id, stm) {
    return new LabeledStm(id === void 0 ? this.id : id, stm === void 0 ? this.stm : stm);
  };
  LabeledStm.prototype.toString = function () {
    return 'LabeledStm(id=' + Kotlin.toString(this.id) + (', stm=' + Kotlin.toString(this.stm)) + ')';
  };
  LabeledStm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.stm) | 0;
    return result;
  };
  LabeledStm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.stm, other.stm)))));
  };
  function CaseStm(expr, stm) {
    Stm.call(this);
    this.expr = expr;
    this.stm = stm;
  }
  CaseStm.$metadata$ = {kind: Kind_CLASS, simpleName: 'CaseStm', interfaces: [Stm]};
  CaseStm.prototype.component1 = function () {
    return this.expr;
  };
  CaseStm.prototype.component2 = function () {
    return this.stm;
  };
  CaseStm.prototype.copy_asp97q$ = function (expr, stm) {
    return new CaseStm(expr === void 0 ? this.expr : expr, stm === void 0 ? this.stm : stm);
  };
  CaseStm.prototype.toString = function () {
    return 'CaseStm(expr=' + Kotlin.toString(this.expr) + (', stm=' + Kotlin.toString(this.stm)) + ')';
  };
  CaseStm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.stm) | 0;
    return result;
  };
  CaseStm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.stm, other.stm)))));
  };
  function DefaultStm(stm) {
    Stm.call(this);
    this.stm = stm;
  }
  DefaultStm.$metadata$ = {kind: Kind_CLASS, simpleName: 'DefaultStm', interfaces: [Stm]};
  DefaultStm.prototype.component1 = function () {
    return this.stm;
  };
  DefaultStm.prototype.copy_w5zual$ = function (stm) {
    return new DefaultStm(stm === void 0 ? this.stm : stm);
  };
  DefaultStm.prototype.toString = function () {
    return 'DefaultStm(stm=' + Kotlin.toString(this.stm) + ')';
  };
  DefaultStm.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.stm) | 0;
    return result;
  };
  DefaultStm.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.stm, other.stm))));
  };
  function Stms(stms) {
    Stm.call(this);
    this.stms = stms;
  }
  Stms.$metadata$ = {kind: Kind_CLASS, simpleName: 'Stms', interfaces: [Stm]};
  Stms.prototype.component1 = function () {
    return this.stms;
  };
  Stms.prototype.copy_by0ryk$ = function (stms) {
    return new Stms(stms === void 0 ? this.stms : stms);
  };
  Stms.prototype.toString = function () {
    return 'Stms(stms=' + Kotlin.toString(this.stms) + ')';
  };
  Stms.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.stms) | 0;
    return result;
  };
  Stms.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.stms, other.stms))));
  };
  function Decl() {
    Stm.call(this);
  }
  Decl.$metadata$ = {kind: Kind_CLASS, simpleName: 'Decl', interfaces: [Stm]};
  function CParam(type, name) {
    Node.call(this);
    this.type = type;
    this.name = name;
  }
  CParam.$metadata$ = {kind: Kind_CLASS, simpleName: 'CParam', interfaces: [Node]};
  CParam.prototype.component1 = function () {
    return this.type;
  };
  CParam.prototype.component2 = function () {
    return this.name;
  };
  CParam.prototype.copy_8p7b1$ = function (type, name) {
    return new CParam(type === void 0 ? this.type : type, name === void 0 ? this.name : name);
  };
  CParam.prototype.toString = function () {
    return 'CParam(type=' + Kotlin.toString(this.type) + (', name=' + Kotlin.toString(this.name)) + ')';
  };
  CParam.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  CParam.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.name, other.name)))));
  };
  function FuncDecl(rettype, name, params, body) {
    Decl.call(this);
    this.rettype = rettype;
    this.name = name;
    this.params = params;
    this.body = body;
  }
  FuncDecl.$metadata$ = {kind: Kind_CLASS, simpleName: 'FuncDecl', interfaces: [Decl]};
  FuncDecl.prototype.component1 = function () {
    return this.rettype;
  };
  FuncDecl.prototype.component2 = function () {
    return this.name;
  };
  FuncDecl.prototype.component3 = function () {
    return this.params;
  };
  FuncDecl.prototype.component4 = function () {
    return this.body;
  };
  FuncDecl.prototype.copy_97449c$ = function (rettype, name, params, body) {
    return new FuncDecl(rettype === void 0 ? this.rettype : rettype, name === void 0 ? this.name : name, params === void 0 ? this.params : params, body === void 0 ? this.body : body);
  };
  FuncDecl.prototype.toString = function () {
    return 'FuncDecl(rettype=' + Kotlin.toString(this.rettype) + (', name=' + Kotlin.toString(this.name)) + (', params=' + Kotlin.toString(this.params)) + (', body=' + Kotlin.toString(this.body)) + ')';
  };
  FuncDecl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.rettype) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.params) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    return result;
  };
  FuncDecl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.rettype, other.rettype) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.params, other.params) && Kotlin.equals(this.body, other.body)))));
  };
  function Program(decls, parser) {
    Node.call(this);
    this.decls = decls;
    this.parser = parser;
  }
  Program.prototype.getFunctionOrNull_61zpoe$ = function (name) {
    var $receiver = this.decls;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, FuncDecl))
        destination.add_11rb$(element);
    }
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (equals(element_0.name.name, name)) {
          firstOrNull$result = element_0;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  Program.prototype.getFunction_61zpoe$ = function (name) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.getFunctionOrNull_61zpoe$(name)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(("Can't find function named '" + name + "'").toString());
    }
    return tmp$_0;
  };
  Program.$metadata$ = {kind: Kind_CLASS, simpleName: 'Program', interfaces: [Node]};
  Program.prototype.component1 = function () {
    return this.decls;
  };
  Program.prototype.component2 = function () {
    return this.parser;
  };
  Program.prototype.copy_ngetmi$ = function (decls, parser) {
    return new Program(decls === void 0 ? this.decls : decls, parser === void 0 ? this.parser : parser);
  };
  Program.prototype.toString = function () {
    return 'Program(decls=' + Kotlin.toString(this.decls) + (', parser=' + Kotlin.toString(this.parser)) + ')';
  };
  Program.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.decls) | 0;
    result = result * 31 + Kotlin.hashCode(this.parser) | 0;
    return result;
  };
  Program.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.decls, other.decls) && Kotlin.equals(this.parser, other.parser)))));
  };
  function whileBlock(cond, gen) {
    var $receiver = ArrayList_init();
    while (cond($receiver.size)) {
      var element = gen();
      $receiver.add_11rb$(element);
    }
    return $receiver;
  }
  function whileNotNull(gen) {
    var $receiver = ArrayList_init();
    while (true) {
      var tmp$;
      tmp$ = gen($receiver.size);
      if (tmp$ == null) {
        break;
      }
      $receiver.add_11rb$(tmp$);
    }
    return $receiver;
  }
  function list($receiver, end, separator, consumeEnd, tailingSeparator, gen) {
    if (separator === void 0)
      separator = null;
    if (consumeEnd === void 0)
      consumeEnd = false;
    if (tailingSeparator === void 0)
      tailingSeparator = false;
    var out = ArrayList_init();
    if (!equals($receiver.peek_za3lpa$(), end)) {
      while (true) {
        if (out.size >= 16384) {
          throw IllegalStateException_init('Array too big'.toString());
        }
        var element = gen();
        out.add_11rb$(element);
        if (equals($receiver.peek_za3lpa$(), separator)) {
          $receiver.read();
          if (tailingSeparator) {
            if (equals($receiver.peek_za3lpa$(), end)) {
              break;
            }
          }
          continue;
        }
         else if (equals($receiver.peek_za3lpa$(), end)) {
          break;
        }
      }
    }
    if (consumeEnd)
      $receiver.expect_11rb$(end);
    return out;
  }
  function identifier($receiver) {
    return new Id($receiver.read());
  }
  function primaryExpr($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = tryPrimaryExpr($receiver)) != null)
      tmp$_0 = tmp$;
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + getCallableRef('primaryExpr', function ($receiver) {
        return primaryExpr($receiver);
      }.bind(null, $receiver)).callableName);
    }
    return tmp$_0;
  }
  function tryPrimaryExpr($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      var v = $receiver.peek_za3lpa$();
      switch (v) {
        case '+':
        case '-':
          var op = $receiver.read();
          callback$result = new Unop(op, primaryExpr($receiver));
          break callback$break;
        case '(':
          $receiver.expect_11rb$('(');
          var expr = expression($receiver);
          $receiver.expect_11rb$(')');
          callback$result = expr;
          break callback$break;
        case '_Generic':
          $receiver.expect_7l2mas$(['_Generic', '(']);
          throw new NotImplementedError_init('An operation is not implemented: ' + '_Generic');
        default:if (Id$Companion_getInstance().isValid_61zpoe$(v)) {
            callback$result = new Id($receiver.read());
            break callback$break;
          }
           else if (StringConstant$Companion_getInstance().isValid_61zpoe$(v)) {
            var $receiver_0 = $receiver.read();
            $receiver.strings.add_11rb$($receiver_0);
            callback$result = new StringConstant($receiver_0);
            break callback$break;
          }
           else if (CharConstant$Companion_getInstance().isValid_61zpoe$(v)) {
            callback$result = new CharConstant($receiver.read());
            break callback$break;
          }
           else if (IntConstant$Companion_getInstance().isValid_61zpoe$(v)) {
            callback$result = new IntConstant($receiver.read());
            break callback$break;
          }
           else if (DoubleConstant$Companion_getInstance().isValid_61zpoe$(v)) {
            callback$result = new DoubleConstant($receiver.read());
            break callback$break;
          }
           else {
            callback$result = null;
            break callback$break;
          }

      }
    }
     while (false);
    var $receiver_1 = callback$result;
    $receiver_1 != null ? ($receiver_1.pos = startPos) : null;
    return $receiver_1;
  }
  function tryPostFixExpression$lambda(this$tryPostFixExpression) {
    return function () {
      return assignmentExpr(this$tryPostFixExpression);
    };
  }
  function tryPostFixExpression($receiver) {
    var tmp$, tmp$_0;
    tmp$ = tryPrimaryExpr($receiver);
    if (tmp$ == null) {
      return null;
    }
    var expr = tmp$;
    loop: while (!$receiver.eof) {
      switch ($receiver.peek_za3lpa$()) {
        case '[':
          $receiver.expect_11rb$('[');
          var index = expression($receiver);
          $receiver.expect_11rb$(']');
          tmp$_0 = new ArrayAccessExpr(expr, index);
          break;
        case '(':
          $receiver.expect_11rb$('(');
          var args = list($receiver, ')', ',', void 0, void 0, tryPostFixExpression$lambda($receiver));
          $receiver.expect_11rb$(')');
          tmp$_0 = new CallExpr(expr, args);
          break;
        case '.':
        case '->':
          var indirect = equals($receiver.read(), '->');
          var id = identifier($receiver);
          tmp$_0 = new FieldAccessExpr(expr, id, indirect);
          break;
        case '++':
        case '--':
          var op = $receiver.read();
          tmp$_0 = new PostfixExpr(expr, op);
          break;
        default:break loop;
      }
      expr = tmp$_0;
    }
    return expr;
  }
  function UnaryExpr(op, expr) {
    Expr.call(this);
    this.op = op;
    this.expr = expr;
  }
  UnaryExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'UnaryExpr', interfaces: [Expr]};
  UnaryExpr.prototype.component1 = function () {
    return this.op;
  };
  UnaryExpr.prototype.component2 = function () {
    return this.expr;
  };
  UnaryExpr.prototype.copy_e865ym$ = function (op, expr) {
    return new UnaryExpr(op === void 0 ? this.op : op, expr === void 0 ? this.expr : expr);
  };
  UnaryExpr.prototype.toString = function () {
    return 'UnaryExpr(op=' + Kotlin.toString(this.op) + (', expr=' + Kotlin.toString(this.expr)) + ')';
  };
  UnaryExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.op) | 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    return result;
  };
  UnaryExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.op, other.op) && Kotlin.equals(this.expr, other.expr)))));
  };
  function CastExpr(type, expr) {
    Expr.call(this);
    this.type = type;
    this.expr = expr;
  }
  CastExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'CastExpr', interfaces: [Expr]};
  CastExpr.prototype.component1 = function () {
    return this.type;
  };
  CastExpr.prototype.component2 = function () {
    return this.expr;
  };
  CastExpr.prototype.copy_p296tg$ = function (type, expr) {
    return new CastExpr(type === void 0 ? this.type : type, expr === void 0 ? this.expr : expr);
  };
  CastExpr.prototype.toString = function () {
    return 'CastExpr(type=' + Kotlin.toString(this.type) + (', expr=' + Kotlin.toString(this.expr)) + ')';
  };
  CastExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    return result;
  };
  CastExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.expr, other.expr)))));
  };
  function SizeOfAlignTypeExpr(kind, typeName) {
    Expr.call(this);
    this.kind = kind;
    this.typeName = typeName;
    this.ftype_6sbvfp$_0 = lazy(SizeOfAlignTypeExpr$ftype$lambda(this));
  }
  Object.defineProperty(SizeOfAlignTypeExpr.prototype, 'ftype', {get: function () {
    return this.ftype_6sbvfp$_0.value;
  }});
  function SizeOfAlignTypeExpr$ftype$lambda(this$SizeOfAlignTypeExpr) {
    return function () {
      return toFinalType(this$SizeOfAlignTypeExpr.typeName);
    };
  }
  SizeOfAlignTypeExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'SizeOfAlignTypeExpr', interfaces: [Expr]};
  SizeOfAlignTypeExpr.prototype.component1 = function () {
    return this.kind;
  };
  SizeOfAlignTypeExpr.prototype.component2 = function () {
    return this.typeName;
  };
  SizeOfAlignTypeExpr.prototype.copy_mv9dfi$ = function (kind, typeName) {
    return new SizeOfAlignTypeExpr(kind === void 0 ? this.kind : kind, typeName === void 0 ? this.typeName : typeName);
  };
  SizeOfAlignTypeExpr.prototype.toString = function () {
    return 'SizeOfAlignTypeExpr(kind=' + Kotlin.toString(this.kind) + (', typeName=' + Kotlin.toString(this.typeName)) + ')';
  };
  SizeOfAlignTypeExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.typeName) | 0;
    return result;
  };
  SizeOfAlignTypeExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kind, other.kind) && Kotlin.equals(this.typeName, other.typeName)))));
  };
  function tryUnaryExpression($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      switch ($receiver.peek_za3lpa$()) {
        case '++':
        case '--':
          var op = $receiver.read();
          var expr = tryUnaryExpression($receiver);
          callback$result = new UnaryExpr(op, ensureNotNull(expr));
          break callback$break;
        case '&':
        case '*':
        case '+':
        case '-':
        case '~':
        case '!':
          var op_0 = $receiver.read();
          var expr_0 = tryCastExpression($receiver);
          callback$result = new UnaryExpr(op_0, ensureNotNull(expr_0));
          break callback$break;
        case 'sizeof':
        case 'Alignof':
          var kind = $receiver.expectAny_7l2mas$(['sizeof', 'Alignof']);
          if (equals($receiver.peek_za3lpa$(), '(')) {
            $receiver.expect_11rb$('(');
            var type = tryTypeName($receiver);
            var expr_1 = type == null ? ensureNotNull(tryUnaryExpression($receiver)) : null;
            $receiver.expect_11rb$(')');
            callback$result = expr_1 != null ? expr_1 : new SizeOfAlignTypeExpr(kind, ensureNotNull(type));
            break callback$break;
          }
           else {
            callback$result = ensureNotNull(tryUnaryExpression($receiver));
            break callback$break;
          }

        default:callback$result = tryPostFixExpression($receiver);
          break callback$break;
      }
    }
     while (false);
    var $receiver_0 = callback$result;
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function tryCastExpression($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    var tmp$;
    if (equals($receiver.peek_za3lpa$(), '(')) {
      var oldPos = $receiver.pos;
      var callback$result_0;
      callback$break: do {
        var tmp$_0;
        $receiver.expect_11rb$('(');
        tmp$_0 = tryTypeName($receiver);
        if (tmp$_0 == null) {
          callback$result_0 = null;
          break callback$break;
        }
        var type = tmp$_0;
        $receiver.expect_11rb$(')');
        var expr = tryCastExpression($receiver);
        callback$result_0 = new CastExpr(type, ensureNotNull(expr));
      }
       while (false);
      var result = callback$result_0;
      if (result == null) {
        $receiver.pos = oldPos;
      }
      callback$result = (tmp$ = result) != null ? tmp$ : tryUnaryExpression($receiver);
    }
     else {
      callback$result = tryUnaryExpression($receiver);
    }
    var $receiver_0 = callback$result;
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function tryBinopExpr($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    var exprs = ArrayList_init();
    var ops = ArrayList_init();
    while (!$receiver.eof) {
      var tmp$;
      tmp$ = tryCastExpression($receiver);
      if (tmp$ == null) {
        return null;
      }
      exprs.add_11rb$(tmp$);
      if (!$receiver.eof && binaryOperators.contains_11rb$($receiver.peek_za3lpa$())) {
        var element = $receiver.read();
        ops.add_11rb$(element);
        continue;
      }
       else {
        break;
      }
    }
    if (exprs.size === 0)
      throw new ExpectException('Not a expression! at ' + $receiver);
    if (exprs.size === 1) {
      callback$result = first(exprs);
    }
     else {
      callback$result = (new OperatorsExpr(exprs, ops)).expand();
    }
    var $receiver_0 = callback$result;
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function ConditionalExpr(cond, etrue, efalse) {
    Expr.call(this);
    this.cond = cond;
    this.etrue = etrue;
    this.efalse = efalse;
  }
  ConditionalExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConditionalExpr', interfaces: [Expr]};
  ConditionalExpr.prototype.component1 = function () {
    return this.cond;
  };
  ConditionalExpr.prototype.component2 = function () {
    return this.etrue;
  };
  ConditionalExpr.prototype.component3 = function () {
    return this.efalse;
  };
  ConditionalExpr.prototype.copy_f427fo$ = function (cond, etrue, efalse) {
    return new ConditionalExpr(cond === void 0 ? this.cond : cond, etrue === void 0 ? this.etrue : etrue, efalse === void 0 ? this.efalse : efalse);
  };
  ConditionalExpr.prototype.toString = function () {
    return 'ConditionalExpr(cond=' + Kotlin.toString(this.cond) + (', etrue=' + Kotlin.toString(this.etrue)) + (', efalse=' + Kotlin.toString(this.efalse)) + ')';
  };
  ConditionalExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    result = result * 31 + Kotlin.hashCode(this.etrue) | 0;
    result = result * 31 + Kotlin.hashCode(this.efalse) | 0;
    return result;
  };
  ConditionalExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cond, other.cond) && Kotlin.equals(this.etrue, other.etrue) && Kotlin.equals(this.efalse, other.efalse)))));
  };
  function tryConditionalExpr($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    var expr = tryBinopExpr($receiver);
    if (expr != null && !$receiver.eof && equals($receiver.peek_za3lpa$(), '?')) {
      $receiver.expect_11rb$('?');
      var etrue = expression($receiver);
      $receiver.expect_11rb$(':');
      var efalse = ensureNotNull(tryConditionalExpr($receiver));
      callback$result = new ConditionalExpr(expr, etrue, efalse);
    }
     else {
      callback$result = expr;
    }
    var $receiver_0 = callback$result;
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function tryAssignmentExpr($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    var exprs = ArrayList_init();
    var ops = ArrayList_init();
    while (!$receiver.eof) {
      var tmp$;
      tmp$ = tryConditionalExpr($receiver);
      if (tmp$ == null) {
        return null;
      }
      exprs.add_11rb$(tmp$);
      if (!$receiver.eof && assignmentOperators.contains_11rb$($receiver.peek_za3lpa$())) {
        var element = $receiver.read();
        ops.add_11rb$(element);
        continue;
      }
       else {
        break;
      }
    }
    if (exprs.size === 0)
      throw new ExpectException('Not a expression! at ' + $receiver);
    if (exprs.size === 1) {
      callback$result = first(exprs);
    }
     else {
      callback$result = (new OperatorsExpr(exprs, ops)).expand();
    }
    var $receiver_0 = callback$result;
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function assignmentExpr($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = tryAssignmentExpr($receiver)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Not an assignment-expression at ' + $receiver).toString());
    }
    return tmp$_0;
  }
  function tryExpression($receiver) {
    var tmp$;
    var exprs = ArrayList_init();
    while (!$receiver.eof) {
      var tmp$_0;
      tmp$_0 = tryAssignmentExpr($receiver);
      if (tmp$_0 == null) {
        break;
      }
      exprs.add_11rb$(tmp$_0);
      if (equals($receiver.peekOutside_za3lpa$(), ',')) {
        $receiver.read();
        continue;
      }
       else {
        break;
      }
    }
    if (exprs.isEmpty())
      tmp$ = null;
    else if (exprs.size === 1)
      tmp$ = first(exprs);
    else
      tmp$ = new CommaExpr(exprs);
    return tmp$;
  }
  function expression($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = tryExpression($receiver)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Not an expression at ' + $receiver).toString());
    }
    return tmp$_0;
  }
  function constantExpression($receiver) {
    return new ConstExpr(expression($receiver));
  }
  function stringLiteral($receiver) {
    return new ConstExpr(expression($receiver));
  }
  function blockItem$lambda$lambda(this$blockItem) {
    return function () {
      return declaration(this$blockItem);
    };
  }
  function blockItem$lambda$lambda_0(this$blockItem) {
    return function () {
      return statement(this$blockItem);
    };
  }
  function blockItem($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      loop_label: switch ($receiver.peek_za3lpa$()) {
        case 'if':
        case 'switch':
        case 'while':
        case 'do':
        case 'for':
        case 'goto':
        case 'continue':
        case 'break':
        case 'return':
        case '{':
        case 'case':
        case 'default':
          callback$result = statement($receiver);
          break callback$break;
        default:var name = 'block-item';
          var callbacks = [blockItem$lambda$lambda($receiver), blockItem$lambda$lambda_0($receiver)];
          var tryBlocks_t794yk$result;
          tryBlocks_t794yk$break: do {
            var tmp$;
            var errors = ArrayList_init();
            for (tmp$ = 0; tmp$ !== callbacks.length; ++tmp$) {
              var callback = callbacks[tmp$];
              var tmp$_0;
              var oldPos = $receiver.pos;
              try {
                tmp$_0 = callback();
              }
               catch (e) {
                if (Kotlin.isType(e, ExpectException)) {
                  tmp$_0 = e;
                }
                 else
                  throw e;
              }
              var result = tmp$_0;
              if (Kotlin.isType(result, ExpectException))
                $receiver.pos = oldPos;
              var result_0 = new ItemOrError(result);
              if (!result_0.isError) {
                tryBlocks_t794yk$result = result_0.value;
                break tryBlocks_t794yk$break;
              }
               else {
                var element = result_0.error;
                errors.add_11rb$(element);
              }
            }
            throw new ExpectException('Tried to parse ' + name + ' but failed with ' + errors);
          }
           while (false);
          callback$result = tryBlocks_t794yk$result;
          break callback$break;
      }
    }
     while (false);
    var $receiver_0 = callback$result;
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function statement$lambda$lambda(this$statement) {
    return function () {
      var id = identifier(this$statement);
      this$statement.expect_11rb$(':');
      var stm = statement(this$statement);
      return new LabeledStm(id, stm);
    };
  }
  function statement$lambda$lambda_0(this$statement) {
    return function () {
      var expr = tryExpression(this$statement);
      this$statement.expect_11rb$(';');
      return new ExprStm(expr);
    };
  }
  function statement($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      var tmp$;
      loop_label: switch ($receiver.peek_za3lpa$()) {
        case 'if':
          $receiver.expect_7l2mas$(['if', '(']);
          var expr = expression($receiver);
          $receiver.expect_11rb$(')');
          var strue = statement($receiver);
          var sfalse = $receiver.tryExpect_11rb$('else') != null ? statement($receiver) : null;
          callback$result = new IfElse(expr, strue, sfalse);
          break callback$break;
        case 'switch':
          $receiver.expect_7l2mas$(['switch', '(']);
          var expr_0 = expression($receiver);
          $receiver.expect_11rb$(')');
          var body = statement($receiver);
          callback$result = new Switch(expr_0, body);
          break callback$break;
        case 'while':
          $receiver.expect_7l2mas$(['while', '(']);
          var expr_1 = expression($receiver);
          $receiver.expect_11rb$(')');
          var body_0 = statement($receiver);
          callback$result = new While(expr_1, body_0);
          break callback$break;
        case 'do':
          $receiver.expect_11rb$('do');
          var body_1 = statement($receiver);
          $receiver.expect_11rb$('while');
          $receiver.expect_11rb$('(');
          var expr_2 = expression($receiver);
          $receiver.expect_11rb$(')');
          $receiver.expect_11rb$(';');
          callback$result = new DoWhile(expr_2, body_1);
          break callback$break;
        case 'for':
          $receiver.expect_7l2mas$(['for', '(']);
          var initDecl = tryDeclaration($receiver);
          if (initDecl == null) {
            var expr_3 = tryExpression($receiver);
            $receiver.expect_11rb$(';');
            tmp$ = expr_3;
          }
           else {
            tmp$ = initDecl;
          }

          var init = tmp$;
          var cond = tryExpression($receiver);
          $receiver.expect_11rb$(';');
          var post = tryExpression($receiver);
          $receiver.expect_11rb$(')');
          var body_2 = statement($receiver);
          callback$result = new For(init, cond, post, body_2);
          break callback$break;
        case 'goto':
          $receiver.expect_11rb$('goto');
          var id = identifier($receiver);
          $receiver.expect_11rb$(';');
          callback$result = new Goto(id);
          break callback$break;
        case 'continue':
          $receiver.expect_7l2mas$(['continue', ';']);
          callback$result = new Continue();
          break callback$break;
        case 'break':
          $receiver.expect_7l2mas$(['break', ';']);
          callback$result = new Break();
          break callback$break;
        case 'return':
          $receiver.expect_11rb$('return');
          var expr_4 = tryExpression($receiver);
          $receiver.expect_11rb$(';');
          callback$result = new Return(expr_4);
          break callback$break;
        case '{':
          callback$result = compoundStatement($receiver);
          break callback$break;
        case 'case':
          $receiver.expect_11rb$('case');
          var expr_5 = constantExpression($receiver);
          $receiver.expect_11rb$(':');
          var stm = statement($receiver);
          callback$result = new CaseStm(expr_5, stm);
          break callback$break;
        case 'default':
          $receiver.expect_7l2mas$(['default', ':']);
          var stm_0 = statement($receiver);
          callback$result = new DefaultStm(stm_0);
          break callback$break;
        default:var name = 'expression-statement';
          var callbacks = [statement$lambda$lambda($receiver), statement$lambda$lambda_0($receiver)];
          var tryBlocks_t794yk$result;
          tryBlocks_t794yk$break: do {
            var tmp$_0;
            var errors = ArrayList_init();
            for (tmp$_0 = 0; tmp$_0 !== callbacks.length; ++tmp$_0) {
              var callback = callbacks[tmp$_0];
              var tmp$_1;
              var oldPos = $receiver.pos;
              try {
                tmp$_1 = callback();
              }
               catch (e) {
                if (Kotlin.isType(e, ExpectException)) {
                  tmp$_1 = e;
                }
                 else
                  throw e;
              }
              var result = tmp$_1;
              if (Kotlin.isType(result, ExpectException))
                $receiver.pos = oldPos;
              var result_0 = new ItemOrError(result);
              if (!result_0.isError) {
                tryBlocks_t794yk$result = result_0.value;
                break tryBlocks_t794yk$break;
              }
               else {
                var element = result_0.error;
                errors.add_11rb$(element);
              }
            }
            throw new ExpectException('Tried to parse ' + name + ' but failed with ' + errors);
          }
           while (false);
          var result_1 = tryBlocks_t794yk$result;
          var tmp$_2;
          if (result_1 != null)
            tmp$_2 = result_1;
          else {
            throw IllegalStateException_init("Can't be null!".toString());
          }

          callback$result = tmp$_2;
          break callback$break;
      }
    }
     while (false);
    var $receiver_0 = callback$result;
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function TypeSpecifier() {
    Node.call(this);
  }
  TypeSpecifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypeSpecifier', interfaces: [Node]};
  function withoutTypedefs($receiver) {
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if ((!Kotlin.isType(element, StorageClassSpecifier) || element.kind !== StorageClassSpecifier$Kind$TYPEDEF_getInstance()) && !Kotlin.isType(element, TypedefTypeSpecifierName))
        destination.add_11rb$(element);
    }
    return destination;
  }
  function ListTypeSpecifier(items) {
    TypeSpecifier.call(this);
    this.items = items;
  }
  ListTypeSpecifier.prototype.isEmpty = function () {
    return this.items.isEmpty();
  };
  var Collection = Kotlin.kotlin.collections.Collection;
  Object.defineProperty(ListTypeSpecifier.prototype, 'hasTypedef', {get: function () {
    var $receiver = this.items;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (Kotlin.isType(element, StorageClassSpecifier) && element.kind === StorageClassSpecifier$Kind$TYPEDEF_getInstance()) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  }});
  Object.defineProperty(ListTypeSpecifier.prototype, 'typedefId', {get: function () {
    var tmp$, tmp$_0;
    var $receiver = this.items;
    var destination = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (Kotlin.isType(element, TypedefTypeSpecifierName))
        destination.add_11rb$(element);
    }
    return (tmp$_0 = (tmp$ = destination) != null ? firstOrNull_0(tmp$) : null) != null ? tmp$_0.id : null;
  }});
  ListTypeSpecifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'ListTypeSpecifier', interfaces: [TypeSpecifier]};
  ListTypeSpecifier.prototype.component1 = function () {
    return this.items;
  };
  ListTypeSpecifier.prototype.copy_6jhrb0$ = function (items) {
    return new ListTypeSpecifier(items === void 0 ? this.items : items);
  };
  ListTypeSpecifier.prototype.toString = function () {
    return 'ListTypeSpecifier(items=' + Kotlin.toString(this.items) + ')';
  };
  ListTypeSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    return result;
  };
  ListTypeSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.items, other.items))));
  };
  function BasicTypeSpecifier(id) {
    TypeSpecifier.call(this);
    this.id = id;
  }
  function BasicTypeSpecifier$Kind(name, ordinal, keyword) {
    Enum.call(this);
    this.keyword_akjmma$_0 = keyword;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BasicTypeSpecifier$Kind_initFields() {
    BasicTypeSpecifier$Kind_initFields = function () {
    };
    BasicTypeSpecifier$Kind$VOID_instance = new BasicTypeSpecifier$Kind('VOID', 0, 'void');
    BasicTypeSpecifier$Kind$CHAR_instance = new BasicTypeSpecifier$Kind('CHAR', 1, 'char');
    BasicTypeSpecifier$Kind$SHORT_instance = new BasicTypeSpecifier$Kind('SHORT', 2, 'short');
    BasicTypeSpecifier$Kind$INT_instance = new BasicTypeSpecifier$Kind('INT', 3, 'int');
    BasicTypeSpecifier$Kind$LONG_instance = new BasicTypeSpecifier$Kind('LONG', 4, 'long');
    BasicTypeSpecifier$Kind$FLOAT_instance = new BasicTypeSpecifier$Kind('FLOAT', 5, 'float');
    BasicTypeSpecifier$Kind$DOUBLE_instance = new BasicTypeSpecifier$Kind('DOUBLE', 6, 'double');
    BasicTypeSpecifier$Kind$SIGNED_instance = new BasicTypeSpecifier$Kind('SIGNED', 7, 'signed');
    BasicTypeSpecifier$Kind$UNSIGNED_instance = new BasicTypeSpecifier$Kind('UNSIGNED', 8, 'unsigned');
    BasicTypeSpecifier$Kind$BOOL_instance = new BasicTypeSpecifier$Kind('BOOL', 9, '_Bool');
    BasicTypeSpecifier$Kind$COMPLEX_instance = new BasicTypeSpecifier$Kind('COMPLEX', 10, '_Complex');
    BasicTypeSpecifier$Kind$Companion_getInstance();
  }
  Object.defineProperty(BasicTypeSpecifier$Kind.prototype, 'keyword', {get: function () {
    return this.keyword_akjmma$_0;
  }});
  var BasicTypeSpecifier$Kind$VOID_instance;
  function BasicTypeSpecifier$Kind$VOID_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$VOID_instance;
  }
  var BasicTypeSpecifier$Kind$CHAR_instance;
  function BasicTypeSpecifier$Kind$CHAR_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$CHAR_instance;
  }
  var BasicTypeSpecifier$Kind$SHORT_instance;
  function BasicTypeSpecifier$Kind$SHORT_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$SHORT_instance;
  }
  var BasicTypeSpecifier$Kind$INT_instance;
  function BasicTypeSpecifier$Kind$INT_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$INT_instance;
  }
  var BasicTypeSpecifier$Kind$LONG_instance;
  function BasicTypeSpecifier$Kind$LONG_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$LONG_instance;
  }
  var BasicTypeSpecifier$Kind$FLOAT_instance;
  function BasicTypeSpecifier$Kind$FLOAT_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$FLOAT_instance;
  }
  var BasicTypeSpecifier$Kind$DOUBLE_instance;
  function BasicTypeSpecifier$Kind$DOUBLE_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$DOUBLE_instance;
  }
  var BasicTypeSpecifier$Kind$SIGNED_instance;
  function BasicTypeSpecifier$Kind$SIGNED_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$SIGNED_instance;
  }
  var BasicTypeSpecifier$Kind$UNSIGNED_instance;
  function BasicTypeSpecifier$Kind$UNSIGNED_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$UNSIGNED_instance;
  }
  var BasicTypeSpecifier$Kind$BOOL_instance;
  function BasicTypeSpecifier$Kind$BOOL_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$BOOL_instance;
  }
  var BasicTypeSpecifier$Kind$COMPLEX_instance;
  function BasicTypeSpecifier$Kind$COMPLEX_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    return BasicTypeSpecifier$Kind$COMPLEX_instance;
  }
  function BasicTypeSpecifier$Kind$Companion() {
    BasicTypeSpecifier$Kind$Companion_instance = this;
    KeywordEnum$Companion.call(this, BasicTypeSpecifier$Kind$BasicTypeSpecifier$Kind$Companion_init$lambda);
  }
  function BasicTypeSpecifier$Kind$BasicTypeSpecifier$Kind$Companion_init$lambda() {
    return BasicTypeSpecifier$Kind$values();
  }
  BasicTypeSpecifier$Kind$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KeywordEnum$Companion]};
  var BasicTypeSpecifier$Kind$Companion_instance = null;
  function BasicTypeSpecifier$Kind$Companion_getInstance() {
    BasicTypeSpecifier$Kind_initFields();
    if (BasicTypeSpecifier$Kind$Companion_instance === null) {
      new BasicTypeSpecifier$Kind$Companion();
    }
    return BasicTypeSpecifier$Kind$Companion_instance;
  }
  BasicTypeSpecifier$Kind.$metadata$ = {kind: Kind_CLASS, simpleName: 'Kind', interfaces: [KeywordEnum, Enum]};
  function BasicTypeSpecifier$Kind$values() {
    return [BasicTypeSpecifier$Kind$VOID_getInstance(), BasicTypeSpecifier$Kind$CHAR_getInstance(), BasicTypeSpecifier$Kind$SHORT_getInstance(), BasicTypeSpecifier$Kind$INT_getInstance(), BasicTypeSpecifier$Kind$LONG_getInstance(), BasicTypeSpecifier$Kind$FLOAT_getInstance(), BasicTypeSpecifier$Kind$DOUBLE_getInstance(), BasicTypeSpecifier$Kind$SIGNED_getInstance(), BasicTypeSpecifier$Kind$UNSIGNED_getInstance(), BasicTypeSpecifier$Kind$BOOL_getInstance(), BasicTypeSpecifier$Kind$COMPLEX_getInstance()];
  }
  BasicTypeSpecifier$Kind.values = BasicTypeSpecifier$Kind$values;
  function BasicTypeSpecifier$Kind$valueOf(name) {
    switch (name) {
      case 'VOID':
        return BasicTypeSpecifier$Kind$VOID_getInstance();
      case 'CHAR':
        return BasicTypeSpecifier$Kind$CHAR_getInstance();
      case 'SHORT':
        return BasicTypeSpecifier$Kind$SHORT_getInstance();
      case 'INT':
        return BasicTypeSpecifier$Kind$INT_getInstance();
      case 'LONG':
        return BasicTypeSpecifier$Kind$LONG_getInstance();
      case 'FLOAT':
        return BasicTypeSpecifier$Kind$FLOAT_getInstance();
      case 'DOUBLE':
        return BasicTypeSpecifier$Kind$DOUBLE_getInstance();
      case 'SIGNED':
        return BasicTypeSpecifier$Kind$SIGNED_getInstance();
      case 'UNSIGNED':
        return BasicTypeSpecifier$Kind$UNSIGNED_getInstance();
      case 'BOOL':
        return BasicTypeSpecifier$Kind$BOOL_getInstance();
      case 'COMPLEX':
        return BasicTypeSpecifier$Kind$COMPLEX_getInstance();
      default:throwISE('No enum constant com.soywiz.ktcc.BasicTypeSpecifier.Kind.' + name);
    }
  }
  BasicTypeSpecifier$Kind.valueOf_61zpoe$ = BasicTypeSpecifier$Kind$valueOf;
  BasicTypeSpecifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'BasicTypeSpecifier', interfaces: [TypeSpecifier]};
  BasicTypeSpecifier.prototype.component1 = function () {
    return this.id;
  };
  BasicTypeSpecifier.prototype.copy_ybnq4j$ = function (id) {
    return new BasicTypeSpecifier(id === void 0 ? this.id : id);
  };
  BasicTypeSpecifier.prototype.toString = function () {
    return 'BasicTypeSpecifier(id=' + Kotlin.toString(this.id) + ')';
  };
  BasicTypeSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  BasicTypeSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function TypedefTypeSpecifierName(id) {
    TypeSpecifier.call(this);
    this.id = id;
  }
  TypedefTypeSpecifierName.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypedefTypeSpecifierName', interfaces: [TypeSpecifier]};
  TypedefTypeSpecifierName.prototype.component1 = function () {
    return this.id;
  };
  TypedefTypeSpecifierName.prototype.copy_61zpoe$ = function (id) {
    return new TypedefTypeSpecifierName(id === void 0 ? this.id : id);
  };
  TypedefTypeSpecifierName.prototype.toString = function () {
    return 'TypedefTypeSpecifierName(id=' + Kotlin.toString(this.id) + ')';
  };
  TypedefTypeSpecifierName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  TypedefTypeSpecifierName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function TypedefTypeSpecifierRef(id) {
    TypeSpecifier.call(this);
    this.id = id;
  }
  TypedefTypeSpecifierRef.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypedefTypeSpecifierRef', interfaces: [TypeSpecifier]};
  TypedefTypeSpecifierRef.prototype.component1 = function () {
    return this.id;
  };
  TypedefTypeSpecifierRef.prototype.copy_61zpoe$ = function (id) {
    return new TypedefTypeSpecifierRef(id === void 0 ? this.id : id);
  };
  TypedefTypeSpecifierRef.prototype.toString = function () {
    return 'TypedefTypeSpecifierRef(id=' + Kotlin.toString(this.id) + ')';
  };
  TypedefTypeSpecifierRef.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  TypedefTypeSpecifierRef.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function StructUnionTypeSpecifier(kind, id, decls) {
    TypeSpecifier.call(this);
    this.kind = kind;
    this.id = id;
    this.decls = decls;
  }
  StructUnionTypeSpecifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'StructUnionTypeSpecifier', interfaces: [TypeSpecifier]};
  StructUnionTypeSpecifier.prototype.component1 = function () {
    return this.kind;
  };
  StructUnionTypeSpecifier.prototype.component2 = function () {
    return this.id;
  };
  StructUnionTypeSpecifier.prototype.component3 = function () {
    return this.decls;
  };
  StructUnionTypeSpecifier.prototype.copy_bf3bjq$ = function (kind, id, decls) {
    return new StructUnionTypeSpecifier(kind === void 0 ? this.kind : kind, id === void 0 ? this.id : id, decls === void 0 ? this.decls : decls);
  };
  StructUnionTypeSpecifier.prototype.toString = function () {
    return 'StructUnionTypeSpecifier(kind=' + Kotlin.toString(this.kind) + (', id=' + Kotlin.toString(this.id)) + (', decls=' + Kotlin.toString(this.decls)) + ')';
  };
  StructUnionTypeSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.decls) | 0;
    return result;
  };
  StructUnionTypeSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kind, other.kind) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.decls, other.decls)))));
  };
  function KeywordEnum() {
  }
  function KeywordEnum$Companion(gen) {
    this.gen = gen;
    var $receiver = this.gen();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_1(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.keyword, element);
    }
    this.BY_KEYWORD = destination;
  }
  KeywordEnum$Companion.prototype.get_61zpoe$ = function (keyword) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.BY_KEYWORD.get_11rb$(keyword)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(("Can't find enum entry with keyword '" + keyword + "'").toString());
    }
    return tmp$_0;
  };
  KeywordEnum$Companion.$metadata$ = {kind: Kind_CLASS, simpleName: 'Companion', interfaces: []};
  KeywordEnum.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'KeywordEnum', interfaces: []};
  function StorageClassSpecifier(kind) {
    TypeSpecifier.call(this);
    this.kind = kind;
  }
  function StorageClassSpecifier$Kind(name, ordinal, keyword) {
    Enum.call(this);
    this.keyword_nq4w29$_0 = keyword;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function StorageClassSpecifier$Kind_initFields() {
    StorageClassSpecifier$Kind_initFields = function () {
    };
    StorageClassSpecifier$Kind$TYPEDEF_instance = new StorageClassSpecifier$Kind('TYPEDEF', 0, 'typedef');
    StorageClassSpecifier$Kind$EXTERN_instance = new StorageClassSpecifier$Kind('EXTERN', 1, 'extern');
    StorageClassSpecifier$Kind$STATIC_instance = new StorageClassSpecifier$Kind('STATIC', 2, 'static');
    StorageClassSpecifier$Kind$THREAD_LOCAL_instance = new StorageClassSpecifier$Kind('THREAD_LOCAL', 3, '_Thread_local');
    StorageClassSpecifier$Kind$AUTO_instance = new StorageClassSpecifier$Kind('AUTO', 4, 'auto');
    StorageClassSpecifier$Kind$REGISTER_instance = new StorageClassSpecifier$Kind('REGISTER', 5, 'register');
    StorageClassSpecifier$Kind$Companion_getInstance();
  }
  Object.defineProperty(StorageClassSpecifier$Kind.prototype, 'keyword', {get: function () {
    return this.keyword_nq4w29$_0;
  }});
  var StorageClassSpecifier$Kind$TYPEDEF_instance;
  function StorageClassSpecifier$Kind$TYPEDEF_getInstance() {
    StorageClassSpecifier$Kind_initFields();
    return StorageClassSpecifier$Kind$TYPEDEF_instance;
  }
  var StorageClassSpecifier$Kind$EXTERN_instance;
  function StorageClassSpecifier$Kind$EXTERN_getInstance() {
    StorageClassSpecifier$Kind_initFields();
    return StorageClassSpecifier$Kind$EXTERN_instance;
  }
  var StorageClassSpecifier$Kind$STATIC_instance;
  function StorageClassSpecifier$Kind$STATIC_getInstance() {
    StorageClassSpecifier$Kind_initFields();
    return StorageClassSpecifier$Kind$STATIC_instance;
  }
  var StorageClassSpecifier$Kind$THREAD_LOCAL_instance;
  function StorageClassSpecifier$Kind$THREAD_LOCAL_getInstance() {
    StorageClassSpecifier$Kind_initFields();
    return StorageClassSpecifier$Kind$THREAD_LOCAL_instance;
  }
  var StorageClassSpecifier$Kind$AUTO_instance;
  function StorageClassSpecifier$Kind$AUTO_getInstance() {
    StorageClassSpecifier$Kind_initFields();
    return StorageClassSpecifier$Kind$AUTO_instance;
  }
  var StorageClassSpecifier$Kind$REGISTER_instance;
  function StorageClassSpecifier$Kind$REGISTER_getInstance() {
    StorageClassSpecifier$Kind_initFields();
    return StorageClassSpecifier$Kind$REGISTER_instance;
  }
  function StorageClassSpecifier$Kind$Companion() {
    StorageClassSpecifier$Kind$Companion_instance = this;
    KeywordEnum$Companion.call(this, StorageClassSpecifier$Kind$StorageClassSpecifier$Kind$Companion_init$lambda);
  }
  function StorageClassSpecifier$Kind$StorageClassSpecifier$Kind$Companion_init$lambda() {
    return StorageClassSpecifier$Kind$values();
  }
  StorageClassSpecifier$Kind$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KeywordEnum$Companion]};
  var StorageClassSpecifier$Kind$Companion_instance = null;
  function StorageClassSpecifier$Kind$Companion_getInstance() {
    StorageClassSpecifier$Kind_initFields();
    if (StorageClassSpecifier$Kind$Companion_instance === null) {
      new StorageClassSpecifier$Kind$Companion();
    }
    return StorageClassSpecifier$Kind$Companion_instance;
  }
  StorageClassSpecifier$Kind.$metadata$ = {kind: Kind_CLASS, simpleName: 'Kind', interfaces: [KeywordEnum, Enum]};
  function StorageClassSpecifier$Kind$values() {
    return [StorageClassSpecifier$Kind$TYPEDEF_getInstance(), StorageClassSpecifier$Kind$EXTERN_getInstance(), StorageClassSpecifier$Kind$STATIC_getInstance(), StorageClassSpecifier$Kind$THREAD_LOCAL_getInstance(), StorageClassSpecifier$Kind$AUTO_getInstance(), StorageClassSpecifier$Kind$REGISTER_getInstance()];
  }
  StorageClassSpecifier$Kind.values = StorageClassSpecifier$Kind$values;
  function StorageClassSpecifier$Kind$valueOf(name) {
    switch (name) {
      case 'TYPEDEF':
        return StorageClassSpecifier$Kind$TYPEDEF_getInstance();
      case 'EXTERN':
        return StorageClassSpecifier$Kind$EXTERN_getInstance();
      case 'STATIC':
        return StorageClassSpecifier$Kind$STATIC_getInstance();
      case 'THREAD_LOCAL':
        return StorageClassSpecifier$Kind$THREAD_LOCAL_getInstance();
      case 'AUTO':
        return StorageClassSpecifier$Kind$AUTO_getInstance();
      case 'REGISTER':
        return StorageClassSpecifier$Kind$REGISTER_getInstance();
      default:throwISE('No enum constant com.soywiz.ktcc.StorageClassSpecifier.Kind.' + name);
    }
  }
  StorageClassSpecifier$Kind.valueOf_61zpoe$ = StorageClassSpecifier$Kind$valueOf;
  StorageClassSpecifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'StorageClassSpecifier', interfaces: [TypeSpecifier]};
  StorageClassSpecifier.prototype.component1 = function () {
    return this.kind;
  };
  StorageClassSpecifier.prototype.copy_2v49ao$ = function (kind) {
    return new StorageClassSpecifier(kind === void 0 ? this.kind : kind);
  };
  StorageClassSpecifier.prototype.toString = function () {
    return 'StorageClassSpecifier(kind=' + Kotlin.toString(this.kind) + ')';
  };
  StorageClassSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    return result;
  };
  StorageClassSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.kind, other.kind))));
  };
  function TypeQualifier(kind) {
    TypeSpecifier.call(this);
    this.kind = kind;
  }
  function TypeQualifier$Kind(name, ordinal, keyword) {
    Enum.call(this);
    this.keyword_1406te$_0 = keyword;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TypeQualifier$Kind_initFields() {
    TypeQualifier$Kind_initFields = function () {
    };
    TypeQualifier$Kind$CONST_instance = new TypeQualifier$Kind('CONST', 0, 'const');
    TypeQualifier$Kind$RESTRICT_instance = new TypeQualifier$Kind('RESTRICT', 1, 'restrict');
    TypeQualifier$Kind$VOLATILE_instance = new TypeQualifier$Kind('VOLATILE', 2, 'volatile');
    TypeQualifier$Kind$ATOMIC_instance = new TypeQualifier$Kind('ATOMIC', 3, '_Atomic');
    TypeQualifier$Kind$Companion_getInstance();
  }
  Object.defineProperty(TypeQualifier$Kind.prototype, 'keyword', {get: function () {
    return this.keyword_1406te$_0;
  }});
  var TypeQualifier$Kind$CONST_instance;
  function TypeQualifier$Kind$CONST_getInstance() {
    TypeQualifier$Kind_initFields();
    return TypeQualifier$Kind$CONST_instance;
  }
  var TypeQualifier$Kind$RESTRICT_instance;
  function TypeQualifier$Kind$RESTRICT_getInstance() {
    TypeQualifier$Kind_initFields();
    return TypeQualifier$Kind$RESTRICT_instance;
  }
  var TypeQualifier$Kind$VOLATILE_instance;
  function TypeQualifier$Kind$VOLATILE_getInstance() {
    TypeQualifier$Kind_initFields();
    return TypeQualifier$Kind$VOLATILE_instance;
  }
  var TypeQualifier$Kind$ATOMIC_instance;
  function TypeQualifier$Kind$ATOMIC_getInstance() {
    TypeQualifier$Kind_initFields();
    return TypeQualifier$Kind$ATOMIC_instance;
  }
  function TypeQualifier$Kind$Companion() {
    TypeQualifier$Kind$Companion_instance = this;
    KeywordEnum$Companion.call(this, TypeQualifier$Kind$TypeQualifier$Kind$Companion_init$lambda);
  }
  function TypeQualifier$Kind$TypeQualifier$Kind$Companion_init$lambda() {
    return TypeQualifier$Kind$values();
  }
  TypeQualifier$Kind$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [KeywordEnum$Companion]};
  var TypeQualifier$Kind$Companion_instance = null;
  function TypeQualifier$Kind$Companion_getInstance() {
    TypeQualifier$Kind_initFields();
    if (TypeQualifier$Kind$Companion_instance === null) {
      new TypeQualifier$Kind$Companion();
    }
    return TypeQualifier$Kind$Companion_instance;
  }
  TypeQualifier$Kind.$metadata$ = {kind: Kind_CLASS, simpleName: 'Kind', interfaces: [KeywordEnum, Enum]};
  function TypeQualifier$Kind$values() {
    return [TypeQualifier$Kind$CONST_getInstance(), TypeQualifier$Kind$RESTRICT_getInstance(), TypeQualifier$Kind$VOLATILE_getInstance(), TypeQualifier$Kind$ATOMIC_getInstance()];
  }
  TypeQualifier$Kind.values = TypeQualifier$Kind$values;
  function TypeQualifier$Kind$valueOf(name) {
    switch (name) {
      case 'CONST':
        return TypeQualifier$Kind$CONST_getInstance();
      case 'RESTRICT':
        return TypeQualifier$Kind$RESTRICT_getInstance();
      case 'VOLATILE':
        return TypeQualifier$Kind$VOLATILE_getInstance();
      case 'ATOMIC':
        return TypeQualifier$Kind$ATOMIC_getInstance();
      default:throwISE('No enum constant com.soywiz.ktcc.TypeQualifier.Kind.' + name);
    }
  }
  TypeQualifier$Kind.valueOf_61zpoe$ = TypeQualifier$Kind$valueOf;
  TypeQualifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypeQualifier', interfaces: [TypeSpecifier]};
  TypeQualifier.prototype.component1 = function () {
    return this.kind;
  };
  TypeQualifier.prototype.copy_y2ujzz$ = function (kind) {
    return new TypeQualifier(kind === void 0 ? this.kind : kind);
  };
  TypeQualifier.prototype.toString = function () {
    return 'TypeQualifier(kind=' + Kotlin.toString(this.kind) + ')';
  };
  TypeQualifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    return result;
  };
  TypeQualifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.kind, other.kind))));
  };
  function FunctionSpecifier(kind) {
    TypeSpecifier.call(this);
    this.kind = kind;
  }
  FunctionSpecifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'FunctionSpecifier', interfaces: [TypeSpecifier]};
  FunctionSpecifier.prototype.component1 = function () {
    return this.kind;
  };
  FunctionSpecifier.prototype.copy_61zpoe$ = function (kind) {
    return new FunctionSpecifier(kind === void 0 ? this.kind : kind);
  };
  FunctionSpecifier.prototype.toString = function () {
    return 'FunctionSpecifier(kind=' + Kotlin.toString(this.kind) + ')';
  };
  FunctionSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    return result;
  };
  FunctionSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.kind, other.kind))));
  };
  function AlignAsSpecifier(info) {
    TypeSpecifier.call(this);
    this.info = info;
  }
  AlignAsSpecifier.$metadata$ = {kind: Kind_CLASS, simpleName: 'AlignAsSpecifier', interfaces: [TypeSpecifier]};
  AlignAsSpecifier.prototype.component1 = function () {
    return this.info;
  };
  AlignAsSpecifier.prototype.copy_2q70oh$ = function (info) {
    return new AlignAsSpecifier(info === void 0 ? this.info : info);
  };
  AlignAsSpecifier.prototype.toString = function () {
    return 'AlignAsSpecifier(info=' + Kotlin.toString(this.info) + ')';
  };
  AlignAsSpecifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.info) | 0;
    return result;
  };
  AlignAsSpecifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.info, other.info))));
  };
  function TypeName(specifiers, abstractDecl) {
    TypeSpecifier.call(this);
    this.specifiers = specifiers;
    this.abstractDecl = abstractDecl;
  }
  TypeName.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypeName', interfaces: [TypeSpecifier]};
  TypeName.prototype.component1 = function () {
    return this.specifiers;
  };
  TypeName.prototype.component2 = function () {
    return this.abstractDecl;
  };
  TypeName.prototype.copy_ejikw8$ = function (specifiers, abstractDecl) {
    return new TypeName(specifiers === void 0 ? this.specifiers : specifiers, abstractDecl === void 0 ? this.abstractDecl : abstractDecl);
  };
  TypeName.prototype.toString = function () {
    return 'TypeName(specifiers=' + Kotlin.toString(this.specifiers) + (', abstractDecl=' + Kotlin.toString(this.abstractDecl)) + ')';
  };
  TypeName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.specifiers) | 0;
    result = result * 31 + Kotlin.hashCode(this.abstractDecl) | 0;
    return result;
  };
  TypeName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.specifiers, other.specifiers) && Kotlin.equals(this.abstractDecl, other.abstractDecl)))));
  };
  function tryTypeName($receiver) {
    var startPos = $receiver.pos;
    var tmp$;
    tmp$ = declarationSpecifiers($receiver);
    if (tmp$ == null) {
      return null;
    }
    var specifiers = tmp$;
    var absDecl = tryAbstractDeclarator($receiver);
    var $receiver_0 = new TypeName(specifiers, absDecl);
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function tryDirectAbstractDeclarator($receiver) {
    var out = null;
    loop: while (true) {
      switch ($receiver.peek_za3lpa$()) {
        case '(':
          throw new NotImplementedError_init('An operation is not implemented: ' + ('tryDirectAbstractDeclarator at ' + $receiver));
        case '[':
          throw new NotImplementedError_init('An operation is not implemented: ' + ('tryDirectAbstractDeclarator at ' + $receiver));
        default:break loop;
      }
    }
    return out;
  }
  function AbstractDeclarator(ptr, adc) {
    Node.call(this);
    this.ptr = ptr;
  }
  AbstractDeclarator.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractDeclarator', interfaces: [Node]};
  function tryAbstractDeclarator($receiver) {
    var startPos = $receiver.pos;
    var pointer = tryPointer($receiver);
    var adc = tryDirectAbstractDeclarator($receiver);
    if (pointer == null && adc == null)
      return null;
    var $receiver_0 = new AbstractDeclarator(pointer, adc);
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function declarationSpecifiers($receiver) {
    var tmp$, tmp$_0;
    var out = ArrayList_init();
    var hasTypedef = false;
    while (true) {
      if ($receiver.eof) {
        throw IllegalStateException_init('eof found'.toString());
      }
      tmp$ = tryDeclarationSpecifier($receiver, hasTypedef);
      if (tmp$ == null) {
        break;
      }
      var spec = tmp$;
      if (Kotlin.isType(spec, StorageClassSpecifier) && spec.kind === StorageClassSpecifier$Kind$TYPEDEF_getInstance())
        hasTypedef = true;
      out.add_11rb$(spec);
    }
    var result = out.isEmpty() ? null : new ListTypeSpecifier(out);
    if (hasTypedef) {
      ensureNotNull(result);
      var tmp$_1;
      var destination = ArrayList_init();
      var tmp$_2;
      tmp$_2 = out.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (Kotlin.isType(element, TypedefTypeSpecifierName))
          destination.add_11rb$(element);
      }
      if ((tmp$_0 = firstOrNull_0(destination)) != null)
        tmp$_1 = tmp$_0;
      else {
        throw IllegalStateException_init("Typedef doesn't include a name".toString());
      }
      var name = tmp$_1;
      var $receiver_0 = $receiver.typedefTypes;
      var key = name.id;
      $receiver_0.put_xwzc9p$(key, result);
      var $receiver_1 = $receiver.typedefAliases;
      var key_0 = name.id;
      var value = toFinalType(new ListTypeSpecifier(withoutTypedefs(result.items)));
      $receiver_1.put_xwzc9p$(key_0, value);
      var destination_0 = ArrayList_init();
      var tmp$_3;
      tmp$_3 = out.iterator();
      while (tmp$_3.hasNext()) {
        var element_0 = tmp$_3.next();
        if (Kotlin.isType(element_0, StructUnionTypeSpecifier))
          destination_0.add_11rb$(element_0);
      }
      var structTypeSpecifier = firstOrNull_0(destination_0);
      if (structTypeSpecifier != null) {
        $receiver.getStructTypeInfo_me841z$(structTypeSpecifier).name = name.id;
      }
    }
    return result;
  }
  function tryTypeQualifier($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      switch ($receiver.peek_za3lpa$()) {
        case 'const':
        case 'restrict':
        case 'volatile':
        case '_Atomic':
          callback$result = new TypeQualifier(TypeQualifier$Kind$Companion_getInstance().get_61zpoe$($receiver.read()));
          break callback$break;
        default:callback$result = null;
          break callback$break;
      }
    }
     while (false);
    var $receiver_0 = callback$result;
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function StructDeclarator(declarator, bit) {
    Node.call(this);
    this.declarator = declarator;
    this.bit = bit;
  }
  StructDeclarator.$metadata$ = {kind: Kind_CLASS, simpleName: 'StructDeclarator', interfaces: [Node]};
  StructDeclarator.prototype.component1 = function () {
    return this.declarator;
  };
  StructDeclarator.prototype.component2 = function () {
    return this.bit;
  };
  StructDeclarator.prototype.copy_29em8t$ = function (declarator, bit) {
    return new StructDeclarator(declarator === void 0 ? this.declarator : declarator, bit === void 0 ? this.bit : bit);
  };
  StructDeclarator.prototype.toString = function () {
    return 'StructDeclarator(declarator=' + Kotlin.toString(this.declarator) + (', bit=' + Kotlin.toString(this.bit)) + ')';
  };
  StructDeclarator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.declarator) | 0;
    result = result * 31 + Kotlin.hashCode(this.bit) | 0;
    return result;
  };
  StructDeclarator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.declarator, other.declarator) && Kotlin.equals(this.bit, other.bit)))));
  };
  function StructDeclaration(specifiers, declarators) {
    Node.call(this);
    this.specifiers = specifiers;
    this.declarators = declarators;
  }
  StructDeclaration.$metadata$ = {kind: Kind_CLASS, simpleName: 'StructDeclaration', interfaces: [Node]};
  StructDeclaration.prototype.component1 = function () {
    return this.specifiers;
  };
  StructDeclaration.prototype.component2 = function () {
    return this.declarators;
  };
  StructDeclaration.prototype.copy_1pk4mj$ = function (specifiers, declarators) {
    return new StructDeclaration(specifiers === void 0 ? this.specifiers : specifiers, declarators === void 0 ? this.declarators : declarators);
  };
  StructDeclaration.prototype.toString = function () {
    return 'StructDeclaration(specifiers=' + Kotlin.toString(this.specifiers) + (', declarators=' + Kotlin.toString(this.declarators)) + ')';
  };
  StructDeclaration.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.specifiers) | 0;
    result = result * 31 + Kotlin.hashCode(this.declarators) | 0;
    return result;
  };
  StructDeclaration.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.specifiers, other.specifiers) && Kotlin.equals(this.declarators, other.declarators)))));
  };
  function structDeclarator($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = tryStructDeclarator($receiver)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init('Not a struct declarator!'.toString());
    }
    return tmp$_0;
  }
  function tryStructDeclarator($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      var tmp$;
      var declarator = tryDeclarator($receiver);
      if (declarator == null || equals($receiver.peek_za3lpa$(), ':')) {
        if (declarator == null && !equals($receiver.peek_za3lpa$(), ':')) {
          callback$result = null;
          break callback$break;
        }
        $receiver.expect_11rb$(':');
        tmp$ = constantExpression($receiver);
      }
       else {
        tmp$ = null;
      }
      var bitExpr = tmp$;
      callback$result = new StructDeclarator(declarator, bitExpr);
    }
     while (false);
    var $receiver_0 = callback$result;
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function tryStructDeclaration$lambda$lambda(this$tryStructDeclaration) {
    return function () {
      return structDeclarator(this$tryStructDeclaration);
    };
  }
  function tryStructDeclaration($receiver) {
    var startPos = $receiver.pos;
    var tmp$;
    if (equals($receiver.peek_za3lpa$(), '_Static_assert')) {
      tmp$ = staticAssert($receiver);
    }
     else {
      var specifiers = declarationSpecifiers($receiver);
      var declarators = list($receiver, ';', ',', void 0, void 0, tryStructDeclaration$lambda$lambda($receiver));
      $receiver.expect_11rb$(';');
      var tmp$_0;
      if (specifiers != null)
        tmp$_0 = specifiers;
      else {
        throw IllegalStateException_init((toString(specifiers) + ' ' + declarators + ' at ' + $receiver).toString());
      }
      tmp$ = new StructDeclaration(tmp$_0, declarators);
    }
    return tmp$;
  }
  function tryDeclarationSpecifier$lambda$lambda(this$tryDeclarationSpecifier) {
    return function () {
      var tmp$;
      var tmp$_0;
      if ((tmp$ = tryStructDeclaration(this$tryDeclarationSpecifier)) != null)
        tmp$_0 = tmp$;
      else {
        throw IllegalStateException_init('No a struct-declaration'.toString());
      }
      return tmp$_0;
    };
  }
  var Math_0 = Math;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Map = Kotlin.kotlin.collections.Map;
  function tryDeclarationSpecifier($receiver, hasTypedef) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      var tmp$, tmp$_0;
      var v = $receiver.peek_za3lpa$();
      switch (v) {
        case 'typedef':
        case 'extern':
        case 'static':
        case '_Thread_local':
        case 'auto':
        case 'register':
          callback$result = new StorageClassSpecifier(ensureNotNull(StorageClassSpecifier$Kind$Companion_getInstance().get_61zpoe$($receiver.read())));
          break callback$break;
        case 'const':
        case 'restrict':
        case 'volatile':
        case '_Atomic':
          callback$result = new TypeQualifier(TypeQualifier$Kind$Companion_getInstance().get_61zpoe$($receiver.read()));
          break callback$break;
        case 'inline':
        case '_Noreturn':
          callback$result = new FunctionSpecifier($receiver.read());
          break callback$break;
        case '_Alignas':
          $receiver.expect_11rb$('_Alignas');
          $receiver.expect_11rb$('(');
          var node = (tmp$ = tryTypeName($receiver)) != null ? tmp$ : constantExpression($receiver);
          $receiver.expect_11rb$(')');
          callback$result = new AlignAsSpecifier(node);
          break callback$break;
        case 'void':
        case 'char':
        case 'short':
        case 'int':
        case 'long':
        case 'float':
        case 'double':
        case 'signed':
        case 'unsigned':
        case '_Bool':
        case '_Complex':
          callback$result = new BasicTypeSpecifier(BasicTypeSpecifier$Kind$Companion_getInstance().get_61zpoe$($receiver.read()));
          break callback$break;
        case 'enum':
          var kind = $receiver.read();
          var id = !equals($receiver.peek_za3lpa$(), '{') ? identifier($receiver) : null;
          if (!equals($receiver.peek_za3lpa$(), '{')) {
            $receiver.expect_11rb$('{');
            throw new NotImplementedError_init('An operation is not implemented: ' + 'enum');
          }

          throw new NotImplementedError_init('An operation is not implemented: ' + 'enum');
        case 'struct':
        case 'union':
          var kind_0 = $receiver.read();
          var id_0 = !equals($receiver.peek_za3lpa$(), '{') ? identifier($receiver) : null;
          if (equals($receiver.peek_za3lpa$(), '{')) {
            $receiver.expect_11rb$('{');
            var decls = list($receiver, '}', null, void 0, void 0, tryDeclarationSpecifier$lambda$lambda($receiver));
            $receiver.expect_11rb$('}');
            tmp$_0 = decls;
          }
           else {
            tmp$_0 = null;
          }

          var decls_0 = tmp$_0;
          var struct = new StructUnionTypeSpecifier(kind_0, id_0, decls_0 != null ? decls_0 : emptyList());
          var tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
          var it = struct;
          var isUnion = equals(struct.kind, 'union');
          var structName = (tmp$_3 = (tmp$_1 = it.id) != null ? tmp$_1.name : null) != null ? tmp$_3 : 'Anonymous' + (tmp$_2 = $receiver.structId, $receiver.structId = tmp$_2 + 1 | 0, tmp$_2);
          var structType = new StructTypeInfo(structName, it);
          $receiver.structTypesByName.put_xwzc9p$(structName, structType);
          $receiver.structTypesBySpecifier.put_xwzc9p$(it, structType);
          var offset = 0;
          var maxSize = 0;
          tmp$_4 = it.decls.iterator();
          while (tmp$_4.hasNext()) {
            var decl = tmp$_4.next();
            var ftype = toFinalType(decl.specifiers);
            tmp$_5 = decl.declarators.iterator();
            while (tmp$_5.hasNext()) {
              var dtors = tmp$_5.next();
              var name = (tmp$_7 = (tmp$_6 = dtors.declarator) != null ? getName(tmp$_6) : null) != null ? tmp$_7 : 'unknown';
              var rftype = withDeclarator(ftype, dtors.declarator);
              var rsize = $receiver.getSize_b2mlnm$(rftype);
              var $receiver_0 = structType.fields;
              var element = new StructField(name, rftype, offset, rsize);
              $receiver_0.add_11rb$(element);
              var a = maxSize;
              maxSize = Math_0.max(a, rsize);
              if (!isUnion) {
                offset = offset + rsize | 0;
              }
            }
          }

          structType.size = isUnion ? maxSize : offset;
          callback$result = struct;
          break callback$break;
        default:var $receiver_1 = $receiver.typedefTypes;
          var tmp$_8;
          if ((Kotlin.isType(tmp$_8 = $receiver_1, Map) ? tmp$_8 : throwCCE()).containsKey_11rb$(v)) {
            callback$result = new TypedefTypeSpecifierRef($receiver.read());
            break callback$break;
          }
           else if (hasTypedef && Id$Companion_getInstance().isValid_61zpoe$(v)) {
            callback$result = new TypedefTypeSpecifierName($receiver.read());
            break callback$break;
          }
           else {
            callback$result = null;
            break callback$break;
          }

      }
    }
     while (false);
    var $receiver_2 = callback$result;
    $receiver_2 != null ? ($receiver_2.pos = startPos) : null;
    return $receiver_2;
  }
  function Pointer(qualifiers, parent) {
    Node.call(this);
    this.qualifiers = qualifiers;
    this.parent = parent;
  }
  Pointer.$metadata$ = {kind: Kind_CLASS, simpleName: 'Pointer', interfaces: [Node]};
  Pointer.prototype.component1 = function () {
    return this.qualifiers;
  };
  Pointer.prototype.component2 = function () {
    return this.parent;
  };
  Pointer.prototype.copy_ksu54d$ = function (qualifiers, parent) {
    return new Pointer(qualifiers === void 0 ? this.qualifiers : qualifiers, parent === void 0 ? this.parent : parent);
  };
  Pointer.prototype.toString = function () {
    return 'Pointer(qualifiers=' + Kotlin.toString(this.qualifiers) + (', parent=' + Kotlin.toString(this.parent)) + ')';
  };
  Pointer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.qualifiers) | 0;
    result = result * 31 + Kotlin.hashCode(this.parent) | 0;
    return result;
  };
  Pointer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.qualifiers, other.qualifiers) && Kotlin.equals(this.parent, other.parent)))));
  };
  function tryPointer$lambda$lambda(this$tryPointer) {
    return function (it) {
      return tryTypeQualifier(this$tryPointer);
    };
  }
  function tryPointer($receiver) {
    var startPos = $receiver.pos;
    var tmp$;
    var pointer = null;
    while (true) {
      if (equals($receiver.peek_za3lpa$(), '*')) {
        $receiver.expect_11rb$('*');
        tmp$ = new Pointer(whileNotNull(tryPointer$lambda$lambda($receiver)), pointer);
      }
       else {
        break;
      }
      pointer = tmp$;
    }
    var $receiver_0 = pointer;
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function ParameterDecl(specs, declarator) {
    Node.call(this);
    this.specs = specs;
    this.declarator = declarator;
  }
  ParameterDecl.$metadata$ = {kind: Kind_CLASS, simpleName: 'ParameterDecl', interfaces: [Node]};
  ParameterDecl.prototype.component1 = function () {
    return this.specs;
  };
  ParameterDecl.prototype.component2 = function () {
    return this.declarator;
  };
  ParameterDecl.prototype.copy_24xqej$ = function (specs, declarator) {
    return new ParameterDecl(specs === void 0 ? this.specs : specs, declarator === void 0 ? this.declarator : declarator);
  };
  ParameterDecl.prototype.toString = function () {
    return 'ParameterDecl(specs=' + Kotlin.toString(this.specs) + (', declarator=' + Kotlin.toString(this.declarator)) + ')';
  };
  ParameterDecl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.specs) | 0;
    result = result * 31 + Kotlin.hashCode(this.declarator) | 0;
    return result;
  };
  ParameterDecl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.specs, other.specs) && Kotlin.equals(this.declarator, other.declarator)))));
  };
  function Declarator() {
    Node.call(this);
  }
  Declarator.$metadata$ = {kind: Kind_CLASS, simpleName: 'Declarator', interfaces: [Node]};
  function DeclaratorWithPointer(pointer, declarator) {
    Declarator.call(this);
    this.pointer = pointer;
    this.declarator = declarator;
  }
  DeclaratorWithPointer.$metadata$ = {kind: Kind_CLASS, simpleName: 'DeclaratorWithPointer', interfaces: [Declarator]};
  DeclaratorWithPointer.prototype.component1 = function () {
    return this.pointer;
  };
  DeclaratorWithPointer.prototype.component2 = function () {
    return this.declarator;
  };
  DeclaratorWithPointer.prototype.copy_igcmqq$ = function (pointer, declarator) {
    return new DeclaratorWithPointer(pointer === void 0 ? this.pointer : pointer, declarator === void 0 ? this.declarator : declarator);
  };
  DeclaratorWithPointer.prototype.toString = function () {
    return 'DeclaratorWithPointer(pointer=' + Kotlin.toString(this.pointer) + (', declarator=' + Kotlin.toString(this.declarator)) + ')';
  };
  DeclaratorWithPointer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pointer) | 0;
    result = result * 31 + Kotlin.hashCode(this.declarator) | 0;
    return result;
  };
  DeclaratorWithPointer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pointer, other.pointer) && Kotlin.equals(this.declarator, other.declarator)))));
  };
  function IdentifierDeclarator(id) {
    Declarator.call(this);
    this.id = id;
  }
  IdentifierDeclarator.$metadata$ = {kind: Kind_CLASS, simpleName: 'IdentifierDeclarator', interfaces: [Declarator]};
  IdentifierDeclarator.prototype.component1 = function () {
    return this.id;
  };
  IdentifierDeclarator.prototype.copy_ny89hm$ = function (id) {
    return new IdentifierDeclarator(id === void 0 ? this.id : id);
  };
  IdentifierDeclarator.prototype.toString = function () {
    return 'IdentifierDeclarator(id=' + Kotlin.toString(this.id) + ')';
  };
  IdentifierDeclarator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  IdentifierDeclarator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function ParameterDeclarator(base, decls) {
    Declarator.call(this);
    this.base = base;
    this.decls = decls;
  }
  ParameterDeclarator.$metadata$ = {kind: Kind_CLASS, simpleName: 'ParameterDeclarator', interfaces: [Declarator]};
  ParameterDeclarator.prototype.component1 = function () {
    return this.base;
  };
  ParameterDeclarator.prototype.component2 = function () {
    return this.decls;
  };
  ParameterDeclarator.prototype.copy_lkuflr$ = function (base, decls) {
    return new ParameterDeclarator(base === void 0 ? this.base : base, decls === void 0 ? this.decls : decls);
  };
  ParameterDeclarator.prototype.toString = function () {
    return 'ParameterDeclarator(base=' + Kotlin.toString(this.base) + (', decls=' + Kotlin.toString(this.decls)) + ')';
  };
  ParameterDeclarator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.base) | 0;
    result = result * 31 + Kotlin.hashCode(this.decls) | 0;
    return result;
  };
  ParameterDeclarator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.base, other.base) && Kotlin.equals(this.decls, other.decls)))));
  };
  function ArrayDeclarator(base, typeQualifiers, expr, static0, static1) {
    Declarator.call(this);
    this.base = base;
    this.typeQualifiers = typeQualifiers;
    this.expr = expr;
    this.static0 = static0;
    this.static1 = static1;
  }
  ArrayDeclarator.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayDeclarator', interfaces: [Declarator]};
  ArrayDeclarator.prototype.component1 = function () {
    return this.base;
  };
  ArrayDeclarator.prototype.component2 = function () {
    return this.typeQualifiers;
  };
  ArrayDeclarator.prototype.component3 = function () {
    return this.expr;
  };
  ArrayDeclarator.prototype.component4 = function () {
    return this.static0;
  };
  ArrayDeclarator.prototype.component5 = function () {
    return this.static1;
  };
  ArrayDeclarator.prototype.copy_gnxh2l$ = function (base, typeQualifiers, expr, static0, static1) {
    return new ArrayDeclarator(base === void 0 ? this.base : base, typeQualifiers === void 0 ? this.typeQualifiers : typeQualifiers, expr === void 0 ? this.expr : expr, static0 === void 0 ? this.static0 : static0, static1 === void 0 ? this.static1 : static1);
  };
  ArrayDeclarator.prototype.toString = function () {
    return 'ArrayDeclarator(base=' + Kotlin.toString(this.base) + (', typeQualifiers=' + Kotlin.toString(this.typeQualifiers)) + (', expr=' + Kotlin.toString(this.expr)) + (', static0=' + Kotlin.toString(this.static0)) + (', static1=' + Kotlin.toString(this.static1)) + ')';
  };
  ArrayDeclarator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.base) | 0;
    result = result * 31 + Kotlin.hashCode(this.typeQualifiers) | 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.static0) | 0;
    result = result * 31 + Kotlin.hashCode(this.static1) | 0;
    return result;
  };
  ArrayDeclarator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.base, other.base) && Kotlin.equals(this.typeQualifiers, other.typeQualifiers) && Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.static0, other.static0) && Kotlin.equals(this.static1, other.static1)))));
  };
  function parameterDeclaration($receiver) {
    var startPos = $receiver.pos;
    var tmp$;
    var tmp$_0;
    if ((tmp$ = declarationSpecifiers($receiver)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Expected declaration specifiers at ' + $receiver).toString());
    }
    var specs = tmp$_0;
    var decl = declarator($receiver);
    var $receiver_0 = new ParameterDecl(specs, decl);
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function declarator($receiver) {
    var tmp$;
    tmp$ = tryDeclarator($receiver);
    if (tmp$ == null) {
      throw new ExpectException('Not a declarator at ' + $receiver);
    }
    return tmp$;
  }
  function tryDeclarator$lambda$lambda(this$tryDeclarator) {
    return function () {
      return parameterDeclaration(this$tryDeclarator);
    };
  }
  function tryDeclarator$lambda$lambda_0(this$tryDeclarator) {
    return function (it) {
      return tryTypeQualifier(this$tryDeclarator);
    };
  }
  function tryDeclarator($receiver) {
    var startPos = $receiver.pos;
    var tmp$, tmp$_0;
    var pointer = tryPointer($receiver);
    var out = null;
    loop: while (true) {
      switch ($receiver.peek_za3lpa$()) {
        case '(':
          if (out == null) {
            $receiver.expect_11rb$('(');
            var decl = declarator($receiver);
            $receiver.expect_11rb$(')');
            tmp$ = decl;
          }
           else {
            $receiver.expect_11rb$('(');
            var params = list($receiver, ')', ',', void 0, void 0, tryDeclarator$lambda$lambda($receiver));
            $receiver.expect_11rb$(')');
            tmp$ = new ParameterDeclarator(out, params);
          }

          break;
        case '[':
          if (out == null)
            break loop;
          $receiver.expect_11rb$('[');
          var static0 = $receiver.tryExpect_11rb$('static') != null;
          var typeQualifiers = whileNotNull(tryDeclarator$lambda$lambda_0($receiver));
          var static1 = $receiver.tryExpect_11rb$('static') != null;
          var expr = tryExpression($receiver);
          $receiver.expect_11rb$(']');
          tmp$ = new ArrayDeclarator(out, typeQualifiers, expr, static0, static1);
          break;
        default:if (Id$Companion_getInstance().isValid_61zpoe$($receiver.peek_za3lpa$())) {
            tmp$ = new IdentifierDeclarator(identifier($receiver));
          }
           else {
            break loop;
          }

          break;
      }
      out = tmp$;
    }
    if (out == null)
      tmp$_0 = null;
    else if (pointer != null)
      tmp$_0 = new DeclaratorWithPointer(pointer, out);
    else
      tmp$_0 = out;
    return tmp$_0;
  }
  function Designator() {
    Node.call(this);
  }
  Designator.$metadata$ = {kind: Kind_CLASS, simpleName: 'Designator', interfaces: [Node]};
  function ArrayAccessDesignator(constant) {
    Designator.call(this);
    this.constant = constant;
  }
  ArrayAccessDesignator.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayAccessDesignator', interfaces: [Designator]};
  ArrayAccessDesignator.prototype.component1 = function () {
    return this.constant;
  };
  ArrayAccessDesignator.prototype.copy_a9sg5z$ = function (constant) {
    return new ArrayAccessDesignator(constant === void 0 ? this.constant : constant);
  };
  ArrayAccessDesignator.prototype.toString = function () {
    return 'ArrayAccessDesignator(constant=' + Kotlin.toString(this.constant) + ')';
  };
  ArrayAccessDesignator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.constant) | 0;
    return result;
  };
  ArrayAccessDesignator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.constant, other.constant))));
  };
  function FieldAccessDesignator(field) {
    Designator.call(this);
    this.field = field;
  }
  FieldAccessDesignator.$metadata$ = {kind: Kind_CLASS, simpleName: 'FieldAccessDesignator', interfaces: [Designator]};
  FieldAccessDesignator.prototype.component1 = function () {
    return this.field;
  };
  FieldAccessDesignator.prototype.copy_ny89hm$ = function (field) {
    return new FieldAccessDesignator(field === void 0 ? this.field : field);
  };
  FieldAccessDesignator.prototype.toString = function () {
    return 'FieldAccessDesignator(field=' + Kotlin.toString(this.field) + ')';
  };
  FieldAccessDesignator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.field) | 0;
    return result;
  };
  FieldAccessDesignator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.field, other.field))));
  };
  function DesignatorList(list) {
    Node.call(this);
    this.list = list;
  }
  DesignatorList.$metadata$ = {kind: Kind_CLASS, simpleName: 'DesignatorList', interfaces: [Node]};
  DesignatorList.prototype.component1 = function () {
    return this.list;
  };
  DesignatorList.prototype.copy_ft4arc$ = function (list) {
    return new DesignatorList(list === void 0 ? this.list : list);
  };
  DesignatorList.prototype.toString = function () {
    return 'DesignatorList(list=' + Kotlin.toString(this.list) + ')';
  };
  DesignatorList.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.list) | 0;
    return result;
  };
  DesignatorList.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.list, other.list))));
  };
  function tryDesignator($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      switch ($receiver.peek_za3lpa$()) {
        case '.':
          $receiver.expect_11rb$('.');
          callback$result = new FieldAccessDesignator(identifier($receiver));
          break callback$break;
        case '[':
          $receiver.expect_11rb$('[');
          var expr = constantExpression($receiver);
          $receiver.expect_11rb$(']');
          callback$result = new ArrayAccessDesignator(expr);
          break callback$break;
        default:callback$result = null;
          break callback$break;
      }
    }
     while (false);
    var $receiver_0 = callback$result;
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function designatorList$lambda(this$designatorList) {
    return function (it) {
      return tryDesignator(this$designatorList);
    };
  }
  function designatorList($receiver) {
    return whileNotNull(designatorList$lambda($receiver));
  }
  function tryDesignation($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    var design = designatorList($receiver);
    if (!design.isEmpty()) {
      $receiver.expect_11rb$('=');
      callback$result = new DesignatorList(design);
    }
     else {
      callback$result = null;
    }
    var $receiver_0 = callback$result;
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function DesignOptInit(design, initializer) {
    Node.call(this);
    this.design = design;
    this.initializer = initializer;
  }
  DesignOptInit.$metadata$ = {kind: Kind_CLASS, simpleName: 'DesignOptInit', interfaces: [Node]};
  DesignOptInit.prototype.component1 = function () {
    return this.design;
  };
  DesignOptInit.prototype.component2 = function () {
    return this.initializer;
  };
  DesignOptInit.prototype.copy_59h1wy$ = function (design, initializer) {
    return new DesignOptInit(design === void 0 ? this.design : design, initializer === void 0 ? this.initializer : initializer);
  };
  DesignOptInit.prototype.toString = function () {
    return 'DesignOptInit(design=' + Kotlin.toString(this.design) + (', initializer=' + Kotlin.toString(this.initializer)) + ')';
  };
  DesignOptInit.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.design) | 0;
    result = result * 31 + Kotlin.hashCode(this.initializer) | 0;
    return result;
  };
  DesignOptInit.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.design, other.design) && Kotlin.equals(this.initializer, other.initializer)))));
  };
  function designOptInitializer($receiver) {
    var startPos = $receiver.pos;
    var designationOpt = tryDesignation($receiver);
    var initializer_0 = initializer($receiver);
    var $receiver_0 = new DesignOptInit(designationOpt, initializer_0);
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function ArrayInitExpr(items) {
    Expr.call(this);
    this.items = items;
  }
  ArrayInitExpr.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayInitExpr', interfaces: [Expr]};
  ArrayInitExpr.prototype.component1 = function () {
    return this.items;
  };
  ArrayInitExpr.prototype.copy_ypzlad$ = function (items) {
    return new ArrayInitExpr(items === void 0 ? this.items : items);
  };
  ArrayInitExpr.prototype.toString = function () {
    return 'ArrayInitExpr(items=' + Kotlin.toString(this.items) + ')';
  };
  ArrayInitExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    return result;
  };
  ArrayInitExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.items, other.items))));
  };
  function initializer$lambda$lambda(this$initializer) {
    return function () {
      return designOptInitializer(this$initializer);
    };
  }
  function initializer($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    var tmp$;
    if (equals($receiver.peek_za3lpa$(), '{')) {
      $receiver.expect_11rb$('{');
      var items = list($receiver, '}', ',', void 0, true, initializer$lambda$lambda($receiver));
      $receiver.expect_11rb$('}');
      callback$result = new ArrayInitExpr(items);
    }
     else {
      var tmp$_0;
      if ((tmp$ = tryAssignmentExpr($receiver)) != null)
        tmp$_0 = tmp$;
      else {
        throw IllegalStateException_init('Not an assignment-expression'.toString());
      }
      callback$result = tmp$_0;
    }
    var $receiver_0 = callback$result;
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function InitDeclarator(decl, initializer) {
    Node.call(this);
    this.decl = decl;
    this.initializer = initializer;
  }
  InitDeclarator.$metadata$ = {kind: Kind_CLASS, simpleName: 'InitDeclarator', interfaces: [Node]};
  InitDeclarator.prototype.component1 = function () {
    return this.decl;
  };
  InitDeclarator.prototype.component2 = function () {
    return this.initializer;
  };
  InitDeclarator.prototype.copy_7ilc6p$ = function (decl, initializer) {
    return new InitDeclarator(decl === void 0 ? this.decl : decl, initializer === void 0 ? this.initializer : initializer);
  };
  InitDeclarator.prototype.toString = function () {
    return 'InitDeclarator(decl=' + Kotlin.toString(this.decl) + (', initializer=' + Kotlin.toString(this.initializer)) + ')';
  };
  InitDeclarator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.decl) | 0;
    result = result * 31 + Kotlin.hashCode(this.initializer) | 0;
    return result;
  };
  InitDeclarator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.decl, other.decl) && Kotlin.equals(this.initializer, other.initializer)))));
  };
  function initDeclarator($receiver) {
    var startPos = $receiver.pos;
    var decl = declarator($receiver);
    var initializer_0 = $receiver.tryExpect_11rb$('=') != null ? initializer($receiver) : null;
    var $receiver_0 = new InitDeclarator(decl, initializer_0);
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function staticAssert($receiver) {
    $receiver.expect_7l2mas$(['_Static_assert', '(']);
    var expr = constantExpression($receiver);
    $receiver.expect_11rb$(',');
    var str = stringLiteral($receiver);
    $receiver.expect_11rb$(')');
    throw new NotImplementedError_init('An operation is not implemented: ' + '_Static_assert');
  }
  function tryDeclaration$lambda$lambda(this$tryDeclaration) {
    return function () {
      return initDeclarator(this$tryDeclaration);
    };
  }
  function tryDeclaration($receiver) {
    var startPos = $receiver.pos;
    var callback$result;
    callback$break: do {
      var tmp$;
      if (equals($receiver.peek_za3lpa$(), '_Static_assert')) {
        callback$result = staticAssert($receiver);
      }
       else {
        tmp$ = declarationSpecifiers($receiver);
        if (tmp$ == null) {
          callback$result = null;
          break callback$break;
        }
        var specs = tmp$;
        if (specs.isEmpty()) {
          callback$result = null;
          break callback$break;
        }
        var initDeclaratorList = list($receiver, ';', ',', void 0, void 0, tryDeclaration$lambda$lambda($receiver));
        $receiver.expect_11rb$(';');
        callback$result = new Declaration(specs, initDeclaratorList);
      }
    }
     while (false);
    var $receiver_0 = callback$result;
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function Declaration(specs, initDeclaratorList) {
    Decl.call(this);
    this.specs = specs;
    this.initDeclaratorList = initDeclaratorList;
  }
  Declaration.$metadata$ = {kind: Kind_CLASS, simpleName: 'Declaration', interfaces: [Decl]};
  Declaration.prototype.component1 = function () {
    return this.specs;
  };
  Declaration.prototype.component2 = function () {
    return this.initDeclaratorList;
  };
  Declaration.prototype.copy_szmz2o$ = function (specs, initDeclaratorList) {
    return new Declaration(specs === void 0 ? this.specs : specs, initDeclaratorList === void 0 ? this.initDeclaratorList : initDeclaratorList);
  };
  Declaration.prototype.toString = function () {
    return 'Declaration(specs=' + Kotlin.toString(this.specs) + (', initDeclaratorList=' + Kotlin.toString(this.initDeclaratorList)) + ')';
  };
  Declaration.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.specs) | 0;
    result = result * 31 + Kotlin.hashCode(this.initDeclaratorList) | 0;
    return result;
  };
  Declaration.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.specs, other.specs) && Kotlin.equals(this.initDeclaratorList, other.initDeclaratorList)))));
  };
  function declaration($receiver) {
    var tmp$;
    tmp$ = tryDeclaration($receiver);
    if (tmp$ == null) {
      throw new ExpectException('TODO: ProgramParser.declaration');
    }
    return tmp$;
  }
  function compoundStatement$lambda$lambda(this$compoundStatement) {
    return function (it) {
      return !equals(this$compoundStatement.peek_za3lpa$(), '}');
    };
  }
  function compoundStatement$lambda$lambda_0(this$compoundStatement) {
    return function () {
      return blockItem(this$compoundStatement);
    };
  }
  function compoundStatement($receiver) {
    var startPos = $receiver.pos;
    $receiver.expect_11rb$('{');
    var stms = whileBlock(compoundStatement$lambda$lambda($receiver), compoundStatement$lambda$lambda_0($receiver));
    $receiver.expect_11rb$('}');
    var $receiver_0 = new Stms(stms);
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function toCParam($receiver) {
    return new CParam(withDeclarator(toFinalType($receiver.specs), $receiver.declarator), getName($receiver.declarator));
  }
  function extractParameter($receiver) {
    if (Kotlin.isType($receiver, DeclaratorWithPointer))
      return extractParameter($receiver.declarator);
    else if (Kotlin.isType($receiver, ParameterDeclarator))
      return $receiver;
    else {
      throw IllegalStateException_init(('Not a DeclaratorWithPointer ' + $receiver).toString());
    }
  }
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function functionDefinition($receiver) {
    var startPos = $receiver.pos;
    var tmp$;
    try {
      var tmp$_0;
      if ((tmp$ = declarationSpecifiers($receiver)) != null)
        tmp$_0 = tmp$;
      else {
        throw IllegalStateException_init(("Can't declarationSpecifiers " + $receiver).toString());
      }
      var rettype = tmp$_0;
      var decl = declarator($receiver);
      var body = compoundStatement($receiver);
      var paramDecl = extractParameter(decl);
      if (!Kotlin.isType(paramDecl.base, IdentifierDeclarator)) {
        throw IllegalStateException_init(('Function without name at ' + $receiver + ' but decl.base=' + paramDecl.base).toString());
      }
      var name = paramDecl.base.id;
      var $receiver_0 = paramDecl.decls;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(toCParam(item));
      }
      var params = destination;
      return new FuncDecl(rettype, name, params, body);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        println(e);
        throw e;
      }
       else
        throw e;
    }
  }
  function externalDeclaration$lambda$lambda(this$externalDeclaration) {
    return function () {
      return declaration(this$externalDeclaration);
    };
  }
  function externalDeclaration$lambda$lambda_0(this$externalDeclaration) {
    return function () {
      return functionDefinition(this$externalDeclaration);
    };
  }
  function externalDeclaration($receiver) {
    var startPos = $receiver.pos;
    var name = 'externalDeclaration';
    var callbacks = [externalDeclaration$lambda$lambda($receiver), externalDeclaration$lambda$lambda_0($receiver)];
    var tryBlocks_t794yk$result;
    tryBlocks_t794yk$break: do {
      var tmp$;
      var errors = ArrayList_init();
      for (tmp$ = 0; tmp$ !== callbacks.length; ++tmp$) {
        var callback = callbacks[tmp$];
        var tmp$_0;
        var oldPos = $receiver.pos;
        try {
          tmp$_0 = callback();
        }
         catch (e) {
          if (Kotlin.isType(e, ExpectException)) {
            tmp$_0 = e;
          }
           else
            throw e;
        }
        var result = tmp$_0;
        if (Kotlin.isType(result, ExpectException))
          $receiver.pos = oldPos;
        var result_0 = new ItemOrError(result);
        if (!result_0.isError) {
          tryBlocks_t794yk$result = result_0.value;
          break tryBlocks_t794yk$break;
        }
         else {
          var element = result_0.error;
          errors.add_11rb$(element);
        }
      }
      throw new ExpectException('Tried to parse ' + name + ' but failed with ' + errors);
    }
     while (false);
    var $receiver_0 = tryBlocks_t794yk$result;
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function translationUnits$lambda$lambda(this$translationUnits) {
    return function (it) {
      return !this$translationUnits.eof;
    };
  }
  function translationUnits$lambda$lambda_0(this$translationUnits) {
    return function () {
      return externalDeclaration(this$translationUnits);
    };
  }
  function translationUnits($receiver) {
    var startPos = $receiver.pos;
    var decls = whileBlock(translationUnits$lambda$lambda($receiver), translationUnits$lambda$lambda_0($receiver));
    if (!$receiver.eof) {
      throw IllegalStateException_init('Invalid program'.toString());
    }
    var $receiver_0 = new Program(decls, $receiver);
    $receiver_0 != null ? ($receiver_0.pos = startPos) : null;
    return $receiver_0;
  }
  function program($receiver) {
    return translationUnits($receiver);
  }
  function programParser($receiver) {
    var $receiver_0 = $receiver.items;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.str);
    }
    return new ProgramParser(destination, $receiver.items, $receiver.pos);
  }
  function programParser_0($receiver) {
    return programParser(tokenize($receiver));
  }
  function times($receiver, other) {
    if (typeof $receiver === 'number' && typeof other === 'number')
      return Kotlin.imul($receiver, other);
    throw new NotImplementedError_init('An operation is not implemented: ' + ('Number.times ' + $receiver.toString() + ' (' + Kotlin.getKClassFromExpression($receiver) + '), ' + other.toString() + ' (' + Kotlin.getKClassFromExpression(other) + ')'));
  }
  function plus_0($receiver, other) {
    if (typeof $receiver === 'number' && typeof other === 'number')
      return $receiver + other | 0;
    throw new NotImplementedError_init('An operation is not implemented: ' + ('Number.times ' + $receiver.toString() + ' (' + Kotlin.getKClassFromExpression($receiver) + '), ' + other.toString() + ' (' + Kotlin.getKClassFromExpression(other) + ')'));
  }
  function constantEvaluate($receiver) {
    if (Kotlin.isType($receiver, Binop)) {
      var lv = constantEvaluate($receiver.l);
      var rv = constantEvaluate($receiver.r);
      switch ($receiver.op) {
        case '*':
          return times(lv, rv);
        case '+':
          return plus_0(lv, rv);
        default:throw new NotImplementedError_init('An operation is not implemented: ' + $receiver.op);
      }
    }
     else if (Kotlin.isType($receiver, IntConstant))
      return $receiver.value;
    else {
      throw IllegalStateException_init(("Don't know how to constant-evaluate " + Kotlin.getKClassFromExpression($receiver) + " '" + $receiver + "'").toString());
    }
  }
  var keywords;
  var storageClassSpecifiers;
  var typeSpecifier_0;
  var unaryOperators;
  var assignmentOperators;
  var binaryOperators;
  var ternaryOperators;
  var postPreFixOperators;
  var allOperators;
  function PToken(str, range, file, nline) {
    if (str === void 0)
      str = '<EOF>';
    if (range === void 0)
      range = until(0, 0);
    this.str = str;
    this.range = range;
    this.file = file;
    this.nline = nline;
    this.replacement = null;
    this.keep = true;
  }
  Object.defineProperty(PToken.prototype, 'start', {get: function () {
    return this.range.start;
  }});
  Object.defineProperty(PToken.prototype, 'end', {get: function () {
    return this.range.endInclusive + 1 | 0;
  }});
  PToken.$metadata$ = {kind: Kind_CLASS, simpleName: 'PToken', interfaces: []};
  PToken.prototype.component1 = function () {
    return this.str;
  };
  PToken.prototype.component2 = function () {
    return this.range;
  };
  PToken.prototype.component3 = function () {
    return this.file;
  };
  PToken.prototype.component4 = function () {
    return this.nline;
  };
  PToken.prototype.copy_yxq51$ = function (str, range, file, nline) {
    return new PToken(str === void 0 ? this.str : str, range === void 0 ? this.range : range, file === void 0 ? this.file : file, nline === void 0 ? this.nline : nline);
  };
  PToken.prototype.toString = function () {
    return 'PToken(str=' + Kotlin.toString(this.str) + (', range=' + Kotlin.toString(this.range)) + (', file=' + Kotlin.toString(this.file)) + (', nline=' + Kotlin.toString(this.nline)) + ')';
  };
  PToken.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.str) | 0;
    result = result * 31 + Kotlin.hashCode(this.range) | 0;
    result = result * 31 + Kotlin.hashCode(this.file) | 0;
    result = result * 31 + Kotlin.hashCode(this.nline) | 0;
    return result;
  };
  PToken.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.str, other.str) && Kotlin.equals(this.range, other.range) && Kotlin.equals(this.file, other.file) && Kotlin.equals(this.nline, other.nline)))));
  };
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  function PreprocessorContext(initialDefines, file, optimization, includeProvider) {
    if (initialDefines === void 0) {
      initialDefines = emptyMap();
    }
    if (file === void 0)
      file = 'unknown';
    if (optimization === void 0)
      optimization = 0;
    if (includeProvider === void 0)
      includeProvider = PreprocessorContext_init$lambda;
    this.initialDefines = initialDefines;
    this.file = file;
    this.optimization = optimization;
    this.includeProvider = includeProvider;
    this.defines_0 = LinkedHashMap_init_0(this.initialDefines);
    this.counter_0 = 0;
    this.includeLevel_0 = 0;
    this.pif = new PIfCtx(true);
  }
  PreprocessorContext.prototype.includeBlock_85cpgq$ = function (newFile, callback) {
    var oldFile = this.file;
    this.file = newFile;
    this.includeLevel_0 = this.includeLevel_0 + 1 | 0;
    try {
      return callback();
    }
    finally {
      this.includeLevel_0 = this.includeLevel_0 - 1 | 0;
      this.file = oldFile;
    }
  };
  PreprocessorContext.prototype.defines_61zpoe$ = function (name) {
    var tmp$, tmp$_0;
    switch (name) {
      case '__FILE__':
        tmp$_0 = get_cquoted(this.file);
        break;
      case '__LINE__':
        tmp$_0 = get_cquoted('-1');
        break;
      case '__STDC__':
        tmp$_0 = '1';
        break;
      case '__DATE__':
        tmp$_0 = '??? ?? ????';
        break;
      case '__TIME__':
        tmp$_0 = '??:??:??';
        break;
      case '__TIMESTAMP__':
        tmp$_0 = '??? ??? ?? ??:??:?? ????';
        break;
      case '__STDC_VERSION__':
        tmp$_0 = '201710L';
        break;
      case '__COUNTER__':
        tmp$_0 = (tmp$ = this.counter_0, this.counter_0 = tmp$ + 1 | 0, tmp$).toString();
        break;
      case '__unix__':
        tmp$_0 = '1';
        break;
      case '__INCLUDE_LEVEL__':
        tmp$_0 = this.includeLevel_0.toString();
        break;
      case '__OPTIMIZE__':
        tmp$_0 = this.optimization > 0 ? '1' : null;
        break;
      default:tmp$_0 = this.defines_0.get_11rb$(name);
        break;
    }
    return tmp$_0;
  };
  PreprocessorContext.prototype.defined_61zpoe$ = function (name) {
    return this.defines_61zpoe$(name) != null;
  };
  PreprocessorContext.prototype.define_puj7f4$ = function (name, replacement) {
    this.defines_0.put_xwzc9p$(name, replacement);
  };
  PreprocessorContext.prototype.undefine_61zpoe$ = function (name) {
    this.defines_0.remove_11rb$(name);
  };
  function PreprocessorContext_init$lambda(file, kind) {
    throw IllegalStateException_init(("Can't find file=" + file + ', kind=' + kind).toString());
  }
  PreprocessorContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'PreprocessorContext', interfaces: []};
  function expectEOL($receiver) {
    return expectAny($receiver, ['\n', '<EOF>']);
  }
  function expectAny($receiver, expect) {
    var actual = $receiver.readOutside();
    if (!contains_1(expect, actual.str))
      throw new ExpectException('Expected ' + toList(expect) + " but found '" + actual + "'");
    return actual;
  }
  function _isSpace($receiver) {
    return isBlank($receiver) && !equals($receiver, '\n');
  }
  function skipSpaces($receiver, skipEOL, skipComments) {
    if (skipEOL === void 0)
      skipEOL = false;
    if (skipComments === void 0)
      skipComments = true;
    while (true) {
      var peek = $receiver.peekOutside_za3lpa$().str;
      if (_isSpace(peek)) {
        $receiver.readOutside();
        continue;
      }
      if (equals(peek, '\n') && skipEOL) {
        $receiver.readOutside();
        continue;
      }
      if (skipComments && (startsWith_0(peek, '//') || startsWith_0(peek, '/*'))) {
        $receiver.readOutside();
        continue;
      }
      break;
    }
    return $receiver;
  }
  function PIfCtx(success, parent) {
    if (success === void 0)
      success = true;
    if (parent === void 0)
      parent = null;
    this.success = success;
    this.parent = parent;
  }
  Object.defineProperty(PIfCtx.prototype, 'renderFinal', {get: function () {
    var tmp$, tmp$_0;
    return this.success && ((tmp$_0 = (tmp$ = this.parent) != null ? tmp$.renderFinal : null) != null ? tmp$_0 : true);
  }});
  PIfCtx.$metadata$ = {kind: Kind_CLASS, simpleName: 'PIfCtx', interfaces: []};
  PIfCtx.prototype.component1 = function () {
    return this.success;
  };
  PIfCtx.prototype.component2 = function () {
    return this.parent;
  };
  PIfCtx.prototype.copy_or0rff$ = function (success, parent) {
    return new PIfCtx(success === void 0 ? this.success : success, parent === void 0 ? this.parent : parent);
  };
  PIfCtx.prototype.toString = function () {
    return 'PIfCtx(success=' + Kotlin.toString(this.success) + (', parent=' + Kotlin.toString(this.parent)) + ')';
  };
  PIfCtx.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.success) | 0;
    result = result * 31 + Kotlin.hashCode(this.parent) | 0;
    return result;
  };
  PIfCtx.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.success, other.success) && Kotlin.equals(this.parent, other.parent)))));
  };
  function IncludeKind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IncludeKind_initFields() {
    IncludeKind_initFields = function () {
    };
    IncludeKind$GLOBAL_instance = new IncludeKind('GLOBAL', 0);
    IncludeKind$LOCAL_instance = new IncludeKind('LOCAL', 1);
  }
  var IncludeKind$GLOBAL_instance;
  function IncludeKind$GLOBAL_getInstance() {
    IncludeKind_initFields();
    return IncludeKind$GLOBAL_instance;
  }
  var IncludeKind$LOCAL_instance;
  function IncludeKind$LOCAL_getInstance() {
    IncludeKind_initFields();
    return IncludeKind$LOCAL_instance;
  }
  IncludeKind.$metadata$ = {kind: Kind_CLASS, simpleName: 'IncludeKind', interfaces: [Enum]};
  function IncludeKind$values() {
    return [IncludeKind$GLOBAL_getInstance(), IncludeKind$LOCAL_getInstance()];
  }
  IncludeKind.values = IncludeKind$values;
  function IncludeKind$valueOf(name) {
    switch (name) {
      case 'GLOBAL':
        return IncludeKind$GLOBAL_getInstance();
      case 'LOCAL':
        return IncludeKind$LOCAL_getInstance();
      default:throwISE('No enum constant com.soywiz.ktcc.IncludeKind.' + name);
    }
  }
  IncludeKind.valueOf_61zpoe$ = IncludeKind$valueOf;
  function preprocess$lambda(closure$ctx) {
    return function ($receiver, str, pos, nline) {
      return new PToken(str, until(pos, pos + str.length | 0), closure$ctx.file, nline);
    };
  }
  function preprocess$lambda$removeChunk(closure$spos, this$, closure$tokens) {
    return function (start, end) {
      if (start === void 0)
        start = closure$spos;
      if (end === void 0)
        end = this$.pos;
      var tmp$;
      for (var n = start; n < end; n++) {
        (tmp$ = getOrNull(closure$tokens.items, n)) != null ? (tmp$.replacement = '') : null;
      }
    };
  }
  function preprocess$lambda$lambda(closure$ctx, closure$fileName, closure$tokens, closure$spos) {
    return function () {
      closure$tokens.items.get_za3lpa$(closure$spos).replacement = preprocess(closure$ctx.includeProvider(closure$fileName.v, IncludeKind$GLOBAL_getInstance()), closure$ctx);
      return Unit;
    };
  }
  function preprocess$lambda$lambda_0(closure$ctx, closure$fileName, closure$tokens, closure$spos) {
    return function () {
      closure$tokens.items.get_za3lpa$(closure$spos).replacement = preprocess(closure$ctx.includeProvider(closure$fileName, IncludeKind$LOCAL_getInstance()), closure$ctx);
      return Unit;
    };
  }
  function preprocess($receiver, ctx) {
    if (ctx === void 0)
      ctx = new PreprocessorContext();
    var fstr = $receiver;
    do {
      var lines_0 = lines(fstr);
      var tokens = doTokenize(fstr, new PToken(void 0, until(fstr.length, fstr.length), ctx.file, lines_0.size), IncludeMode$ALL_getInstance(), preprocess$lambda(ctx));
      var replacements = {v: 0};
      var closure$replacements = replacements;
      var tmp$, tmp$_0;
      loop: while (!tokens.eof) {
        var spos = tokens.pos;
        var tok = tokens.read();
        tok.keep = ctx.pif.renderFinal;
        var removeChunk = preprocess$lambda$removeChunk(spos, tokens, tokens);
        switch (tok.str) {
          case '#define':
            var name = skipSpaces(tokens).read();
            switch (tokens.peekOutside_za3lpa$().str) {
              case '(':
                expectAny(skipSpaces(tokens), ['(']);
                var ids = ArrayList_init();
                while (!equals(skipSpaces(tokens).peekOutside_za3lpa$().str, ')')) {
                  var element = skipSpaces(tokens).readOutside().str;
                  ids.add_11rb$(element);
                  var after = skipSpaces(tokens).peekOutside_za3lpa$().str;
                  if (equals(after, ',')) {
                    tokens.readOutside();
                    continue;
                  }
                  if (equals(after, ')'))
                    break;
                }

                expectAny(skipSpaces(tokens), [')']);
                break;
              case '\n':
              case '<EOF>':
                skipSpaces(tokens).readOutside();
                ctx.define_puj7f4$(name.str, name.str);
                break;
              default:var value = skipSpaces(tokens).read();
                ctx.define_puj7f4$(name.str, value.str);
                break;
            }

            removeChunk();
            break;
          case '#undef':
            var name_0 = skipSpaces(tokens).read().str;
            expectEOL(skipSpaces(tokens));
            ctx.undefine_61zpoe$(name_0);
            removeChunk();
            break;
          case '#ifdef':
          case '#ifndef':
            var negate = equals(tok.str, '#ifndef');
            var name_1 = skipSpaces(tokens).read().str;
            expectEOL(skipSpaces(tokens));
            var success = ctx.defined_61zpoe$(name_1);
            if (negate)
              success = !success;
            ctx.pif = ctx.pif.copy_or0rff$(success, ctx.pif);
            removeChunk();
            break;
          case '#elsif':
            expectEOL(skipSpaces(tokens));
            ctx.pif = ctx.pif.copy_or0rff$(!ctx.pif.success);
            removeChunk();
            break;
          case '#endif':
            expectEOL(skipSpaces(tokens));
            var tmp$_1;
            if ((tmp$ = ctx.pif.parent) != null)
              tmp$_1 = tmp$;
            else {
              throw IllegalStateException_init(('No #if* matching #endif at ' + tok).toString());
            }

            ctx.pif = tmp$_1;
            removeChunk();
            break;
          case '#include':
            skipSpaces(tokens);
            var peek = tokens.peekOutside_za3lpa$().str;
            if (equals(peek, '<')) {
              expectAny(tokens, ['<']);
              var fileName = {v: ''};
              while (!equals(tokens.peekOutside_za3lpa$().str, '>'))
                fileName.v += tokens.readOutside().str;
              expectAny(tokens, ['>']);
              removeChunk();
              ctx.includeBlock_85cpgq$(fileName.v, preprocess$lambda$lambda(ctx, fileName, tokens, spos));
              closure$replacements.v = closure$replacements.v + 1 | 0;
            }
             else {
              if (startsWith(peek, 34)) {
                tokens.readOutside();
                removeChunk();
                var fileName_0 = get_cunquoted(peek);
                ctx.includeBlock_85cpgq$(fileName_0, preprocess$lambda$lambda_0(ctx, fileName_0, tokens, spos));
                closure$replacements.v = closure$replacements.v + 1 | 0;
              }
               else {
                throw IllegalStateException_init(('Invalid #include ' + peek).toString());
              }
            }

            break;
          default:if (tok.keep) {
              var replaced = ctx.defines_61zpoe$(tok.str);
              if (replaced != null) {
                if (!equals(tok.str, replaced)) {
                  tok.replacement = replaced;
                  tmp$_0 = closure$replacements.v, closure$replacements.v = tmp$_0 + 1 | 0;
                }
              }
            }
             else {
              tok.replacement = '';
            }

            break;
        }
      }
      var $receiver_0 = tokens.items;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        var tmp$_3;
        destination.add_11rb$((tmp$_3 = item.replacement) != null ? tmp$_3 : item.str);
      }
      fstr = joinToString(destination, '');
    }
     while (replacements.v !== 0);
    return fstr;
  }
  var allSymbols;
  function sym3$lambda() {
    var $receiver = allSymbols;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.length === 3)
        destination.add_11rb$(element);
    }
    return destination;
  }
  var sym3;
  function get_sym3() {
    return sym3.value;
  }
  function sym2$lambda() {
    var $receiver = allSymbols;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.length === 2)
        destination.add_11rb$(element);
    }
    return destination;
  }
  var sym2;
  function get_sym2() {
    return sym2.value;
  }
  function sym1$lambda() {
    var $receiver = allSymbols;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.length === 1)
        destination.add_11rb$(element);
    }
    return destination;
  }
  var sym1;
  function get_sym1() {
    return sym1.value;
  }
  function CToken(str, pos, nline) {
    this.str = str;
    this.pos = pos;
    this.nline = nline;
  }
  CToken.$metadata$ = {kind: Kind_CLASS, simpleName: 'CToken', interfaces: []};
  CToken.prototype.component1 = function () {
    return this.str;
  };
  CToken.prototype.component2 = function () {
    return this.pos;
  };
  CToken.prototype.component3 = function () {
    return this.nline;
  };
  CToken.prototype.copy_3m52m6$ = function (str, pos, nline) {
    return new CToken(str === void 0 ? this.str : str, pos === void 0 ? this.pos : pos, nline === void 0 ? this.nline : nline);
  };
  CToken.prototype.toString = function () {
    return 'CToken(str=' + Kotlin.toString(this.str) + (', pos=' + Kotlin.toString(this.pos)) + (', nline=' + Kotlin.toString(this.nline)) + ')';
  };
  CToken.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.str) | 0;
    result = result * 31 + Kotlin.hashCode(this.pos) | 0;
    result = result * 31 + Kotlin.hashCode(this.nline) | 0;
    return result;
  };
  CToken.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.str, other.str) && Kotlin.equals(this.pos, other.pos) && Kotlin.equals(this.nline, other.nline)))));
  };
  function tokenize$lambda($receiver, str, pos, nline) {
    return new CToken(str, pos, nline);
  }
  function tokenize($receiver) {
    return doTokenize($receiver, new CToken('', $receiver.length, -1), void 0, tokenize$lambda);
  }
  function IncludeMode(name, ordinal, eol, spaces, comments) {
    if (eol === void 0)
      eol = false;
    if (spaces === void 0)
      spaces = false;
    if (comments === void 0)
      comments = false;
    Enum.call(this);
    this.eol = eol;
    this.spaces = spaces;
    this.comments = comments;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IncludeMode_initFields() {
    IncludeMode_initFields = function () {
    };
    IncludeMode$NORMAL_instance = new IncludeMode('NORMAL', 0);
    IncludeMode$EOL_instance = new IncludeMode('EOL', 1, true);
    IncludeMode$ALL_instance = new IncludeMode('ALL', 2, true, true, true);
  }
  var IncludeMode$NORMAL_instance;
  function IncludeMode$NORMAL_getInstance() {
    IncludeMode_initFields();
    return IncludeMode$NORMAL_instance;
  }
  var IncludeMode$EOL_instance;
  function IncludeMode$EOL_getInstance() {
    IncludeMode_initFields();
    return IncludeMode$EOL_instance;
  }
  var IncludeMode$ALL_instance;
  function IncludeMode$ALL_getInstance() {
    IncludeMode_initFields();
    return IncludeMode$ALL_instance;
  }
  IncludeMode.$metadata$ = {kind: Kind_CLASS, simpleName: 'IncludeMode', interfaces: [Enum]};
  function IncludeMode$values() {
    return [IncludeMode$NORMAL_getInstance(), IncludeMode$EOL_getInstance(), IncludeMode$ALL_getInstance()];
  }
  IncludeMode.values = IncludeMode$values;
  function IncludeMode$valueOf(name) {
    switch (name) {
      case 'NORMAL':
        return IncludeMode$NORMAL_getInstance();
      case 'EOL':
        return IncludeMode$EOL_getInstance();
      case 'ALL':
        return IncludeMode$ALL_getInstance();
      default:throwISE('No enum constant com.soywiz.ktcc.IncludeMode.' + name);
    }
  }
  IncludeMode.valueOf_61zpoe$ = IncludeMode$valueOf;
  function doTokenize(file, default_0, include, gen) {
    if (include === void 0)
      include = IncludeMode$NORMAL_getInstance();
    return doTokenize_0(new StrReader(file), default_0, include, gen);
  }
  function doTokenize_0(file, default_0, include, gen) {
    if (include === void 0)
      include = IncludeMode$NORMAL_getInstance();
    var out = ArrayList_init();
    var nline = {v: 1};
    while (!file.eof) {
      var v = unboxChar(file.peek());
      var spos = file.pos;
      if (v === 10) {
        file.read();
        if (include.eol) {
          var element = gen(file, String.fromCharCode(v), spos, nline.v);
          out.add_11rb$(element);
        }
        nline.v = nline.v + 1 | 0;
        continue;
      }
      if (isWhitespace(v) || v === 13) {
        file.read();
        if (include.spaces) {
          var element_0 = gen(file, String.fromCharCode(v), spos, nline.v);
          out.add_11rb$(element_0);
        }
        continue;
      }
      if (v === 34 || v === 39) {
        var startPos = file.pos;
        var start = v;
        file.read();
        while (!file.eof && unboxChar(file.peek()) !== start) {
          var c = unboxChar(file.read());
          if (c === 92) {
            file.read();
          }
        }
        if (!file.eof)
          file.read();
        var $receiver = file.str;
        var endIndex = file.pos;
        var literal = $receiver.substring(startPos, endIndex);
        var element_1 = gen(file, literal, spos, nline.v);
        out.add_11rb$(element_1);
        continue;
      }
      var peek3 = file.peek_za3lpa$(3);
      var peek2 = file.peek_za3lpa$(2);
      var peek1 = file.peek_za3lpa$(1);
      if (equals(peek2, '//')) {
        var startPos_0 = file.pos;
        file.expect_61zpoe$('//');
        while (!file.eof && unboxChar(file.peek()) !== 10)
          file.read();
        if (!file.eof)
          file.expect_61zpoe$('\n');
        var $receiver_0 = file.str;
        var endIndex_0 = file.pos;
        var comment = $receiver_0.substring(startPos_0, endIndex_0);
        if (include.comments) {
          var element_2 = gen(file, comment, spos, nline.v);
          out.add_11rb$(element_2);
        }
        continue;
      }
      if (equals(peek2, '/*')) {
        var startPos_1 = file.pos;
        file.expect_61zpoe$('/*');
        while (!file.eof && !equals(file.peek_za3lpa$(2), '*/'))
          file.read();
        if (!file.eof)
          file.expect_61zpoe$('*/');
        var $receiver_1 = file.str;
        var endIndex_1 = file.pos;
        var comment_0 = $receiver_1.substring(startPos_1, endIndex_1);
        if (include.comments) {
          var element_3 = gen(file, comment_0, spos, nline.v);
          out.add_11rb$(element_3);
        }
        continue;
      }
      var old = file.pos;
      var number = '';
      var hex = false;
      var suffix = false;
      var ndigits = 0;
      loop: while (!file.eof) {
        var peek = unboxChar(file.peek());
        if ((new CharRange(48, 57)).contains_mef7kx$(peek)) {
          if (suffix)
            break loop;
          number += String.fromCharCode(unboxChar(file.read()));
          ndigits = ndigits + 1 | 0;
        }
         else
          switch (peek) {
            case 46:
              if (suffix)
                break loop;
              if (contains_0(number, 46)) {
                break loop;
              }
               else {
                number += String.fromCharCode(unboxChar(file.read()));
              }

              break;
            case 120:
            case 88:
              if (number.length === 0)
                break loop;
              if (suffix)
                break loop;
              if (equals(number, '0')) {
                number += String.fromCharCode(unboxChar(file.read()));
                hex = true;
              }
               else {
                break loop;
              }

              break;
            default:if ((new CharRange(97, 102)).contains_mef7kx$(peek) || (new CharRange(65, 70)).contains_mef7kx$(peek)) {
                if (number.length === 0)
                  break loop;
                if (hex) {
                  if (suffix)
                    break loop;
                  number += String.fromCharCode(unboxChar(file.read()));
                  ndigits = ndigits + 1 | 0;
                }
                 else {
                  var tmp$ = peek === 101 || peek === 69;
                  if (tmp$) {
                    var $receiver_2 = new CharRange(48, 57);
                    var element_4 = lastOrNull(number);
                    tmp$ = (element_4 != null && $receiver_2.contains_mef7kx$(element_4));
                  }
                  if (tmp$)
                    number += String.fromCharCode(unboxChar(file.read()));
                  else if (peek === 102) {
                    number += String.fromCharCode(unboxChar(file.read()));
                    suffix = true;
                  }
                   else
                    break loop;
                }
              }
               else
                switch (peek) {
                  case 108:
                  case 76:
                  case 117:
                  case 85:
                    var tmp$_0 = ndigits > 0;
                    if (tmp$_0) {
                      tmp$_0 = number.length > 0;
                    }

                    if (tmp$_0) {
                      number += String.fromCharCode(unboxChar(file.read()));
                      suffix = true;
                    }
                     else {
                      break loop;
                    }

                    break;
                  case 45:
                  case 43:
                    if (endsWith_0(number, 'e') || endsWith_0(number, 'E')) {
                      number += String.fromCharCode(unboxChar(file.read()));
                    }
                     else {
                      break loop;
                    }

                    break;
                  default:break loop;
                }

              break;
          }
      }
      var result = number.length === 0 ? null : number;
      if (result == null)
        file.pos = old;
      var number_0 = result;
      if (number_0 != null) {
        var element_5 = gen(file, number_0, spos, nline.v);
        out.add_11rb$(element_5);
      }
       else if (get_sym3().contains_11rb$(peek3)) {
        var element_6 = gen(file, file.read_za3lpa$(3), spos, nline.v);
        out.add_11rb$(element_6);
      }
       else if (get_sym2().contains_11rb$(peek2)) {
        var element_7 = gen(file, file.read_za3lpa$(2), spos, nline.v);
        out.add_11rb$(element_7);
      }
       else if (get_sym1().contains_11rb$(peek1)) {
        var element_8 = gen(file, file.read_za3lpa$(1), spos, nline.v);
        out.add_11rb$(element_8);
      }
       else {
        if (isDigit(v)) {
          var startPos_2 = file.pos;
          while (!file.eof && isDigit(unboxChar(file.peek())) || (new CharRange(65, 70)).contains_mef7kx$(unboxChar(file.peek())) || (new CharRange(97, 102)).contains_mef7kx$(unboxChar(file.peek())) || unboxChar(file.peek()) === 120 || unboxChar(file.peek()) === 88 || unboxChar(file.peek()) === 101)
            file.read();
          var $receiver_3 = file.str;
          var endIndex_2 = file.pos;
          var element_9 = gen(file, $receiver_3.substring(startPos_2, endIndex_2), spos, nline.v);
          out.add_11rb$(element_9);
        }
         else if (isAlphaOrUnderscore(v)) {
          var startPos_3 = file.pos;
          while (!file.eof && isAlnumOrUnderscore(unboxChar(file.peek())))
            file.read();
          var $receiver_4 = file.str;
          var endIndex_3 = file.pos;
          var element_10 = gen(file, $receiver_4.substring(startPos_3, endIndex_3), spos, nline.v);
          out.add_11rb$(element_10);
        }
         else if (v === 35) {
          var startPos_4 = file.pos;
          file.read();
          while (!file.eof && isAlnumOrUnderscore(unboxChar(file.peek())))
            file.read();
          var $receiver_5 = file.str;
          var endIndex_4 = file.pos;
          var element_11 = gen(file, $receiver_5.substring(startPos_4, endIndex_4), spos, nline.v);
          out.add_11rb$(element_11);
        }
         else {
          throw IllegalStateException_init(("Unknown symbol: '" + String.fromCharCode(v) + "'").toString());
        }
      }
    }
    return reader(out, default_0);
  }
  function FType() {
  }
  FType.$metadata$ = {kind: Kind_CLASS, simpleName: 'FType', interfaces: []};
  var DummyFType_instance = null;
  function IntFType(signed, long, size) {
    FType.call(this);
    this.signed = signed;
    this.long = long;
    this.size = size;
    var tmp$, tmp$_0;
    switch ((tmp$ = this.size) != null ? tmp$ : 4) {
      case 1:
        tmp$_0 = 1;
        break;
      case 2:
        tmp$_0 = 2;
        break;
      case 4:
        tmp$_0 = this.long >= 1 ? 8 : 4;
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'IntFType');
    }
    this.typeSize = tmp$_0;
  }
  Object.defineProperty(IntFType.prototype, 'rsigned', {get: function () {
    var tmp$;
    return (tmp$ = this.signed) != null ? tmp$ : true;
  }});
  IntFType.prototype.toString = function () {
    var tmp$;
    if (this.signed == null && this.long === 0 && this.size == null)
      return 'Unit';
    switch (this.typeSize) {
      case 1:
        tmp$ = this.rsigned ? 'Byte' : 'UByte';
        break;
      case 2:
        tmp$ = this.rsigned ? 'Short' : 'UShort';
        break;
      case 4:
        tmp$ = this.rsigned ? 'Int' : 'UInt';
        break;
      case 8:
        tmp$ = this.rsigned ? 'Long' : 'ULong';
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'IntFType');
    }
    return tmp$;
  };
  IntFType.$metadata$ = {kind: Kind_CLASS, simpleName: 'IntFType', interfaces: [FType]};
  IntFType.prototype.component1 = function () {
    return this.signed;
  };
  IntFType.prototype.component2 = function () {
    return this.long;
  };
  IntFType.prototype.component3 = function () {
    return this.size;
  };
  IntFType.prototype.copy_a9za4l$ = function (signed, long, size) {
    return new IntFType(signed === void 0 ? this.signed : signed, long === void 0 ? this.long : long, size === void 0 ? this.size : size);
  };
  IntFType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.signed) | 0;
    result = result * 31 + Kotlin.hashCode(this.long) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  IntFType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.signed, other.signed) && Kotlin.equals(this.long, other.long) && Kotlin.equals(this.size, other.size)))));
  };
  function FloatFType(size) {
    FType.call(this);
    this.size = size;
  }
  FloatFType.prototype.toString = function () {
    switch (this.size) {
      case 4:
        return 'Float';
      case 8:
        return 'Double';
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'FloatFType');
    }
  };
  FloatFType.$metadata$ = {kind: Kind_CLASS, simpleName: 'FloatFType', interfaces: [FType]};
  FloatFType.prototype.component1 = function () {
    return this.size;
  };
  FloatFType.prototype.copy_za3lpa$ = function (size) {
    return new FloatFType(size === void 0 ? this.size : size);
  };
  FloatFType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  FloatFType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.size, other.size))));
  };
  function PointerFType(type, const_0) {
    FType.call(this);
    this.type = type;
    this.const = const_0;
  }
  PointerFType.prototype.toString = function () {
    return 'CPointer<' + this.type + '>';
  };
  PointerFType.$metadata$ = {kind: Kind_CLASS, simpleName: 'PointerFType', interfaces: [FType]};
  PointerFType.prototype.component1 = function () {
    return this.type;
  };
  PointerFType.prototype.component2 = function () {
    return this.const;
  };
  PointerFType.prototype.copy_op6c3a$ = function (type, const_0) {
    return new PointerFType(type === void 0 ? this.type : type, const_0 === void 0 ? this.const : const_0);
  };
  PointerFType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.const) | 0;
    return result;
  };
  PointerFType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.const, other.const)))));
  };
  function StructFType(spec) {
    FType.call(this);
    this.spec = spec;
  }
  StructFType.prototype.toString = function () {
    return 'UnknownStruct' + toString(this.spec.id);
  };
  StructFType.$metadata$ = {kind: Kind_CLASS, simpleName: 'StructFType', interfaces: [FType]};
  function UnknownFType(reason) {
    FType.call(this);
    this.reason = reason;
  }
  UnknownFType.prototype.toString = function () {
    return 'UnknownFType' + toString(this.reason);
  };
  UnknownFType.$metadata$ = {kind: Kind_CLASS, simpleName: 'UnknownFType', interfaces: [FType]};
  function TypedefFTypeRef(id) {
    FType.call(this);
    this.id = id;
  }
  TypedefFTypeRef.prototype.toString = function () {
    return this.id;
  };
  TypedefFTypeRef.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypedefFTypeRef', interfaces: [FType]};
  function TypedefFTypeName(id) {
    FType.call(this);
    this.id = id;
  }
  TypedefFTypeName.prototype.toString = function () {
    return this.id;
  };
  TypedefFTypeName.$metadata$ = {kind: Kind_CLASS, simpleName: 'TypedefFTypeName', interfaces: [FType]};
  function ArrayFType(type, declarator) {
    FType.call(this);
    this.type = type;
    this.declarator = declarator;
  }
  ArrayFType.prototype.toString = function () {
    var tmp$;
    return this.type.toString() + '[' + toString((tmp$ = this.declarator.expr) != null ? constantEvaluate(tmp$) : null) + ']';
  };
  ArrayFType.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayFType', interfaces: [FType]};
  function combine(l, r) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(l, IntFType) && Kotlin.isType(r, IntFType)) {
      return new IntFType((tmp$ = r.signed) != null ? tmp$ : l.signed, l.long + r.long | 0, (tmp$_0 = r.size) != null ? tmp$_0 : l.size);
    }
     else {
      return r;
    }
  }
  function generateFinalType(type) {
    var tmp$;
    if (Kotlin.isType(type, ListTypeSpecifier)) {
      var items = type.items;
      var res = generateFinalType(first(items));
      tmp$ = items.size;
      for (var n = 1; n < tmp$; n++)
        res = combine(res, generateFinalType(items.get_za3lpa$(n)));
      return res;
    }
     else if (Kotlin.isType(type, BasicTypeSpecifier)) {
      switch (type.id.name) {
        case 'VOID':
          return new IntFType(null, 0, null);
        case 'UNSIGNED':
          return new IntFType(false, 0, null);
        case 'SIGNED':
          return new IntFType(true, 0, null);
        case 'CHAR':
          return new IntFType(null, 0, 1);
        case 'SHORT':
          return new IntFType(null, 0, 2);
        case 'INT':
          return new IntFType(null, 0, 4);
        case 'LONG':
          return new IntFType(null, 1, null);
        case 'FLOAT':
          return new FloatFType(4);
        case 'DOUBLE':
          return new FloatFType(8);
        default:throw IllegalStateException_init(type.id.toString().toString());
      }
    }
     else if (Kotlin.isType(type, StructUnionTypeSpecifier))
      return new StructFType(type);
    else if (Kotlin.isType(type, StorageClassSpecifier))
      return new IntFType(null, 0, null);
    else if (Kotlin.isType(type, TypedefTypeSpecifierName))
      return new TypedefFTypeName(type.id);
    else if (Kotlin.isType(type, TypedefTypeSpecifierRef))
      return new TypedefFTypeRef(type.id);
    else if (Kotlin.isType(type, TypeQualifier))
      return new IntFType(null, 0, null);
    else if (Kotlin.isType(type, TypeName)) {
      if (type.abstractDecl != null) {
        throw new NotImplementedError_init('An operation is not implemented: ' + 'type.abstractDecl != null');
      }
      return toFinalType(type.specifiers);
    }
    throw new NotImplementedError_init('An operation is not implemented: ' + (Kotlin.getKClassFromExpression(type).toString() + ': ' + type));
  }
  function generatePointerType(type, pointer) {
    var base = new PointerFType(type, false);
    return pointer.parent != null ? generatePointerType(base, pointer.parent) : base;
  }
  function generateFinalType_0(type, declarator) {
    var tmp$;
    if (Kotlin.isType(declarator, DeclaratorWithPointer)) {
      var pointer = declarator.pointer;
      var decl = generateFinalType_0(type, declarator.declarator);
      return generatePointerType(decl, pointer);
    }
     else if (Kotlin.isType(declarator, IdentifierDeclarator))
      return type;
    else if (Kotlin.isType(declarator, ParameterDeclarator))
      return new UnknownFType(declarator);
    else if (Kotlin.isType(declarator, ArrayDeclarator)) {
      if (declarator.base != null) {
        tmp$ = new ArrayFType(generateFinalType_0(type, ensureNotNull(declarator.base)), declarator);
      }
       else {
        tmp$ = new ArrayFType(type, declarator);
      }
      return tmp$;
    }
     else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('declarator: ' + declarator));
    }
  }
  function withDeclarator($receiver, declarator) {
    return declarator != null ? generateFinalType_0($receiver, declarator) : $receiver;
  }
  function withDeclarator_0($receiver, declarator) {
    if (declarator == null)
      return $receiver;
    if (declarator.ptr == null)
      return $receiver;
    return generatePointerType($receiver, declarator.ptr);
  }
  function toFinalType($receiver) {
    return generateFinalType($receiver);
  }
  function getName($receiver) {
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, IdentifierDeclarator))
      return $receiver.id.name;
    else if (Kotlin.isType($receiver, DeclaratorWithPointer))
      return getName($receiver.declarator);
    else if (Kotlin.isType($receiver, ParameterDeclarator))
      return getName($receiver.base);
    else if (Kotlin.isType($receiver, ArrayDeclarator))
      return (tmp$_0 = (tmp$ = $receiver.base) != null ? getName(tmp$) : null) != null ? tmp$_0 : 'unknown';
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('TypeSpecifier.getName: ' + $receiver));
    }
  }
  var CLI_instance = null;
  function CCompiler() {
    CCompiler_instance = this;
  }
  function CCompiler$preprocess$lambda(it) {
    return readFile(it);
  }
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  function CCompiler$preprocess$getIncludeResource(file) {
    return CStdIncludes.get_11rb$(file);
  }
  function CCompiler$preprocess$lambda$lambda(closure$includeFolders, closure$fileReader, closure$getIncludeResource, closure$folder) {
    return function (fname, kind) {
      var tmp$, tmp$_0, tmp$_1;
      switch (kind.name) {
        case 'GLOBAL':
          var result = null;
          tmp$ = closure$includeFolders.iterator();
          while (tmp$.hasNext()) {
            var includeFolder = tmp$.next();
            var f = closure$fileReader(includeFolder + '/' + fname);
            if (f != null) {
              result = toStringUtf8(f);
              break;
            }
          }

          tmp$_1 = result != null ? result : closure$getIncludeResource(fname);
          break;
        case 'LOCAL':
          tmp$_1 = (tmp$_0 = closure$fileReader(closure$folder + '/' + fname)) != null ? toStringUtf8(tmp$_0) : null;
          break;
        default:tmp$_1 = Kotlin.noWhenBranchMatched();
          break;
      }
      var tmp$_2;
      if (tmp$_1 != null)
        tmp$_2 = tmp$_1;
      else {
        throw IllegalStateException_init(("Can't find file=" + fname + ', kind=' + kind).toString());
      }
      return tmp$_2;
    };
  }
  CCompiler.prototype.preprocess_ji1ias$ = function (sourceFiles, defines, includeFolders, optimizeLevel, fileReader) {
    if (defines === void 0) {
      defines = emptyList();
    }
    if (includeFolders === void 0) {
      includeFolders = emptyList();
    }
    if (optimizeLevel === void 0)
      optimizeLevel = 0;
    if (fileReader === void 0)
      fileReader = CCompiler$preprocess$lambda;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(defines, 10)), 16);
    var destination = LinkedHashMap_init_1(capacity);
    var tmp$;
    tmp$ = defines.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var parts = split(element, ['=']);
      var pair = to(parts.get_za3lpa$(0), 1 >= 0 && 1 <= get_lastIndex(parts) ? parts.get_za3lpa$(1) : parts.get_za3lpa$(0));
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    var definesMap = destination;
    var getIncludeResource = CCompiler$preprocess$getIncludeResource;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(sourceFiles, 10));
    var tmp$_0;
    tmp$_0 = sourceFiles.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination_0.add_11rb$;
      var tmp$_2;
      var file = item;
      var folder = substringBefore(item, 47, '.');
      var includeProvider = CCompiler$preprocess$lambda$lambda(includeFolders, fileReader, getIncludeResource, folder);
      var tmp$_3;
      if ((tmp$_2 = fileReader(file)) != null)
        tmp$_3 = tmp$_2;
      else {
        throw IllegalStateException_init(('Source file ' + file + ' not found').toString());
      }
      var fileBytes = tmp$_3;
      tmp$_1.call(destination_0, preprocess(toStringUtf8(fileBytes), new PreprocessorContext(definesMap, file, optimizeLevel, includeProvider)));
    }
    var cSources = destination_0;
    return joinToString(cSources, '\n');
  };
  CCompiler.prototype.parse_61zpoe$ = function (preprocessedSource) {
    return program(programParser_0(preprocessedSource));
  };
  CCompiler.prototype.compileKotlin_ivxn3r$ = function (preprocessedSource, includeRuntime) {
    if (includeRuntime === void 0)
      includeRuntime = true;
    var out = (new KotlinGenerator()).generate_unjmr9$(this.parse_61zpoe$(preprocessedSource));
    return includeRuntime ? RuntimeCode + '\n' + out : out;
  };
  CCompiler.$metadata$ = {kind: Kind_OBJECT, simpleName: 'CCompiler', interfaces: []};
  var CCompiler_instance = null;
  function CCompiler_getInstance() {
    if (CCompiler_instance === null) {
      new CCompiler();
    }
    return CCompiler_instance;
  }
  function KotlinGenerator() {
    this.program_ndpup$_0 = this.program_ndpup$_0;
  }
  Object.defineProperty(KotlinGenerator.prototype, 'program', {get: function () {
    if (this.program_ndpup$_0 == null)
      return throwUPAE('program');
    return this.program_ndpup$_0;
  }, set: function (program) {
    this.program_ndpup$_0 = program;
  }});
  Object.defineProperty(KotlinGenerator.prototype, 'parser', {get: function () {
    return this.program.parser;
  }});
  Object.defineProperty(KotlinGenerator.prototype, 'strings', {get: function () {
    return this.parser.strings;
  }});
  function KotlinGenerator$generate$lambda$lambda$lambda(closure$typeFields, this$KotlinGenerator, closure$typeName, this$, closure$type) {
    return function () {
      var tmp$;
      var $receiver = closure$typeFields;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(item.name + ': ' + this$KotlinGenerator.str_b2mlnm$(item.type));
      }
      var fields = destination;
      var $receiver_0 = closure$typeFields;
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$('this.' + item_0.name + ' = ' + item_0.name);
      }
      var fieldsSet = destination_0;
      this$.line_61zpoe$('operator fun invoke(' + joinToString(fields, ', ') + '): ' + closure$typeName + ' = ' + closure$typeName + '(alloca(SIZE_BYTES)).also { ' + joinToString(fieldsSet, '; ') + ' }');
      this$.line_61zpoe$('const val SIZE_BYTES = ' + closure$type.size);
      tmp$ = closure$typeFields.iterator();
      while (tmp$.hasNext()) {
        var field = tmp$.next();
        this$.line_61zpoe$('const val ' + field.offsetName + ' = ' + field.offset);
      }
      return Unit;
    };
  }
  function KotlinGenerator$generate$lambda$lambda(this$, closure$typeFields, this$KotlinGenerator, closure$typeName, closure$type) {
    return function () {
      var tmp$;
      this$.line_61zpoe$('companion object {');
      this$.indent_klfg04$(KotlinGenerator$generate$lambda$lambda$lambda(closure$typeFields, this$KotlinGenerator, closure$typeName, this$, closure$type));
      this$.line_61zpoe$('}');
      tmp$ = closure$typeFields.iterator();
      while (tmp$.hasNext()) {
        var field = tmp$.next();
        var ftype = field.type;
        var foffsetName = closure$typeName + '.' + field.offsetName;
        if (Kotlin.isType(ftype, IntFType)) {
          var ftypeSize = ftype.typeSize;
          if (ftypeSize === 4)
            this$.line_61zpoe$('var ' + field.name + ': ' + ftype + ' get() = lw(ptr + ' + foffsetName + '); set(value) = sw(ptr + ' + foffsetName + ', value)');
          else
            this$.line_61zpoe$('var ' + field.name + ': ' + ftype + ' get() = TODO(' + '"' + 'ftypeSize=' + ftypeSize + '"' + '); set(value) = TODO()');
        }
         else if (Kotlin.isType(ftype, FloatFType))
          this$.line_61zpoe$('var ' + field.name + ': ' + ftype + ' get() = flw(ptr + ' + foffsetName + '); set(value) = fsw(ptr + ' + foffsetName + ', value)');
        else if (Kotlin.isType(ftype, PointerFType))
          this$.line_61zpoe$('var ' + field.name + ': ' + ftype + ' get() = CPointer(lw(ptr + ' + foffsetName + ')); set(value) = run { sw(ptr + ' + foffsetName + ', value.ptr) }');
        else
          this$.line_61zpoe$('var ' + field.name + ': ' + ftype + ' get() = TODO(' + '"' + 'ftype=' + ftype + '"' + '); set(value) = TODO(' + '"' + 'ftype=' + ftype + '"' + ')');
      }
      return Unit;
    };
  }
  function KotlinGenerator$generate$lambda(closure$program, this$KotlinGenerator) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      this$KotlinGenerator.program = closure$program;
      tmp$ = this$KotlinGenerator.strings.iterator();
      while (tmp$.hasNext()) {
        var str = tmp$.next();
        $receiver.line_61zpoe$('// ' + str);
      }
      tmp$_0 = this$KotlinGenerator.parser.structTypesByName.values.iterator();
      while (tmp$_0.hasNext()) {
        var type = tmp$_0.next();
        var typeName = type.name;
        var typeFields = type.fields;
        $receiver.line_61zpoe$('/*!inline*/ class ' + typeName + '(val ptr: Int) {');
        $receiver.indent_klfg04$(KotlinGenerator$generate$lambda$lambda($receiver, typeFields, this$KotlinGenerator, typeName, type));
        $receiver.line_61zpoe$('}');
      }
      tmp$_1 = closure$program.decls.iterator();
      while (tmp$_1.hasNext()) {
        var decl = tmp$_1.next();
        this$KotlinGenerator.generate_wyqb1q$($receiver, decl);
      }
      return Unit;
    };
  }
  KotlinGenerator.prototype.generate_unjmr9$ = function (program) {
    return Indenter(KotlinGenerator$generate$lambda(program, this));
  };
  function KotlinGenerator$generate$lambda_0(closure$it, this$KotlinGenerator, this$generate) {
    return function () {
      this$KotlinGenerator.generate_a880qk$(this$generate, closure$it.body);
      return Unit;
    };
  }
  KotlinGenerator.prototype.generate_wyqb1q$ = function ($receiver, it) {
    var tmp$;
    if (Kotlin.isType(it, FuncDecl)) {
      var tmp$_0 = 'fun ' + it.name.name + '(';
      var $receiver_0 = it.params;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(this.generateParam_ckdxgn$(item));
      }
      $receiver.line_61zpoe$(tmp$_0 + joinToString(destination, ', ') + '): ' + this.generate_ojkvrr$(it.rettype) + ' = stackFrame {');
      $receiver.indent_klfg04$(KotlinGenerator$generate$lambda_0(it, this, $receiver));
      $receiver.line_61zpoe$('}');
    }
     else if (Kotlin.isType(it, Declaration)) {
      var ftype = toFinalType(it.specs);
      tmp$ = it.initDeclaratorList.iterator();
      while (tmp$.hasNext()) {
        var init = tmp$.next();
        if (Kotlin.isType(init.decl, ParameterDeclarator))
          continue;
        var varType = this.resolve_b2mlnm$(withDeclarator(ftype, init.decl));
        var name = getName(init.decl);
        var varInit = init.initializer;
        if (varInit != null) {
          $receiver.line_61zpoe$('var ' + name + ': ' + this.str_b2mlnm$(varType) + ' = ' + this.generate_heq7lg$(varInit, void 0, varType));
        }
         else {
          $receiver.line_61zpoe$('var ' + name + ': ' + this.str_b2mlnm$(varType));
        }
      }
    }
     else {
      throw IllegalStateException_init(("Don't know how to generate decl " + it).toString());
    }
  };
  KotlinGenerator.prototype.resolve_b2mlnm$ = function ($receiver) {
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, TypedefFTypeRef)) {
      var tmp$_1;
      if ((tmp$_0 = (tmp$ = this.parser.typedefAliases.get_11rb$($receiver.id)) != null ? this.resolve_b2mlnm$(tmp$) : null) != null)
        tmp$_1 = tmp$_0;
      else {
        throw IllegalStateException_init(("Can't find type with id=" + $receiver.id).toString());
      }
      return tmp$_1;
    }
     else
      return $receiver;
  };
  KotlinGenerator.prototype.str_b2mlnm$ = function ($receiver) {
    if (Kotlin.isType($receiver, PointerFType))
      return 'CPointer<' + this.str_b2mlnm$($receiver.type) + '>';
    else if (Kotlin.isType($receiver, StructFType))
      return this.parser.getStructTypeInfo_me841z$($receiver.spec).name;
    else
      return $receiver.toString();
  };
  KotlinGenerator.prototype.removeOuterParenthesis_pdl1vz$ = function ($receiver) {
    var str = $receiver;
    while (startsWith(str, 40) && endsWith(str, 41)) {
      var $receiver_0 = str;
      var endIndex = str.length - 1 | 0;
      str = $receiver_0.substring(1, endIndex);
    }
    return str;
  };
  function KotlinGenerator$generate$lambda_1(closure$it, this$KotlinGenerator, this$generate) {
    return function () {
      this$KotlinGenerator.generate_a880qk$(this$generate, closure$it.body);
      return Unit;
    };
  }
  function KotlinGenerator$generate$lambda_2(closure$it, this$KotlinGenerator, this$generate) {
    return function () {
      this$KotlinGenerator.generate_a880qk$(this$generate, closure$it.body);
      return Unit;
    };
  }
  function KotlinGenerator$generate$lambda_3(closure$it, this$KotlinGenerator, this$generate) {
    return function () {
      this$KotlinGenerator.generate_a880qk$(this$generate, closure$it.body);
      if (closure$it.post != null) {
        this$generate.line_61zpoe$(this$KotlinGenerator.generate_heq7lg$(closure$it.post));
      }
      return Unit;
    };
  }
  function KotlinGenerator$generate$lambda_4(closure$it, this$KotlinGenerator, this$generate) {
    return function () {
      this$KotlinGenerator.generate_a880qk$(this$generate, closure$it.strue);
      return Unit;
    };
  }
  function KotlinGenerator$generate$lambda_5(closure$it, this$KotlinGenerator, this$generate) {
    return function () {
      this$KotlinGenerator.generate_a880qk$(this$generate, closure$it.sfalse);
      return Unit;
    };
  }
  KotlinGenerator.prototype.generate_a880qk$ = function ($receiver, it) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(it, Stms)) {
      tmp$ = it.stms.iterator();
      while (tmp$.hasNext()) {
        var s = tmp$.next();
        this.generate_a880qk$($receiver, s);
      }
    }
     else if (Kotlin.isType(it, Return))
      it.expr != null ? $receiver.line_61zpoe$('return ' + this.generate_heq7lg$(it.expr, false)) : $receiver.line_61zpoe$('return');
    else if (Kotlin.isType(it, ExprStm)) {
      if (it.expr != null) {
        $receiver.line_61zpoe$(this.removeOuterParenthesis_pdl1vz$(this.generate_heq7lg$(it.expr, false)));
      }
    }
     else if (Kotlin.isType(it, While)) {
      $receiver.line_61zpoe$('while (' + this.generate_heq7lg$(it.cond, false) + ') {');
      $receiver.indent_klfg04$(KotlinGenerator$generate$lambda_1(it, this, $receiver));
      $receiver.line_61zpoe$('}');
    }
     else if (Kotlin.isType(it, DoWhile)) {
      $receiver.line_61zpoe$('do {');
      $receiver.indent_klfg04$(KotlinGenerator$generate$lambda_2(it, this, $receiver));
      $receiver.line_61zpoe$('} while (' + this.generate_heq7lg$(it.cond, false) + ')');
    }
     else if (Kotlin.isType(it, For)) {
      if (it.init != null) {
        var init = it.init;
        if (Kotlin.isType(init, Decl))
          this.generate_wyqb1q$($receiver, init);
        else if (Kotlin.isType(init, Expr))
          $receiver.line_61zpoe$(this.removeOuterParenthesis_pdl1vz$(this.generate_heq7lg$(init)));
        else {
          throw IllegalStateException_init(('Not a Decl or Expr in for init init=' + toString(init) + ' (' + Kotlin.getKClassFromExpression(init) + ')').toString());
        }
      }
      $receiver.line_61zpoe$('while (' + this.generate_heq7lg$((tmp$_0 = it.cond) != null ? tmp$_0 : new IntConstant('1'), false) + ') {');
      $receiver.indent_klfg04$(KotlinGenerator$generate$lambda_3(it, this, $receiver));
      $receiver.line_61zpoe$('}');
    }
     else if (Kotlin.isType(it, Continue))
      $receiver.line_61zpoe$('continue');
    else if (Kotlin.isType(it, Break))
      $receiver.line_61zpoe$('break');
    else if (Kotlin.isType(it, IfElse)) {
      $receiver.line_61zpoe$('if (' + this.generate_heq7lg$(it.cond) + ') {');
      $receiver.indent_klfg04$(KotlinGenerator$generate$lambda_4(it, this, $receiver));
      if (it.sfalse != null) {
        $receiver.line_61zpoe$('} else {');
        $receiver.indent_klfg04$(KotlinGenerator$generate$lambda_5(it, this, $receiver));
        $receiver.line_61zpoe$('}');
      }
       else {
        $receiver.line_61zpoe$('}');
      }
    }
     else if (Kotlin.isType(it, Break))
      $receiver.line_61zpoe$('break');
    else if (Kotlin.isType(it, Decl))
      this.generate_wyqb1q$($receiver, it);
    else {
      throw IllegalStateException_init(("Don't know how to generate stm " + it).toString());
    }
  };
  KotlinGenerator.prototype.generateParam_ckdxgn$ = function (it) {
    return it.name + ': ' + it.type;
  };
  KotlinGenerator.prototype.toKotlinType_kh98so$ = function ($receiver) {
    var tmp$, tmp$_0;
    var void_0 = false;
    var static_0 = false;
    var unsigned = {v: false};
    var integral = {v: false};
    var longCount = 0;
    var float = false;
    tmp$ = $receiver.items.iterator();
    while (tmp$.hasNext()) {
      var spec = tmp$.next();
      if (Kotlin.isType(spec, BasicTypeSpecifier)) {
        switch (spec.id.name) {
          case 'VOID':
            void_0 = true;
            break;
          case 'INT':
            integral.v = true;
            break;
          case 'UNSIGNED':
            unsigned.v = true;
            integral.v = true;
            break;
          case 'FLOAT':
            float = true;
            break;
          default:throw new NotImplementedError_init('An operation is not implemented: ' + spec.id.toString());
        }
      }
       else if (Kotlin.isType(spec, StorageClassSpecifier)) {
        if (equals(spec.kind, StorageClassSpecifier$Kind$STATIC_getInstance()))
          static_0 = true;
      }
       else if (!Kotlin.isType(spec, TypedefTypeSpecifierRef))
        if (!Kotlin.isType(spec, TypeQualifier)) {
          throw new NotImplementedError_init('An operation is not implemented: ' + ('toKotlinType: ' + spec));
        }
    }
    if (void_0)
      tmp$_0 = 'Unit';
    else if (integral.v)
      tmp$_0 = 'Int';
    else if (float)
      tmp$_0 = 'Float';
    else
      tmp$_0 = 'Unknown';
    return tmp$_0;
  };
  KotlinGenerator.prototype.generate_ojkvrr$ = function (it) {
    return this.toKotlinType_kh98so$(it);
  };
  function KotlinGenerator$generate$lambda_6(this$KotlinGenerator) {
    return function (it) {
      return this$KotlinGenerator.generate_heq7lg$(it);
    };
  }
  function KotlinGenerator$generate$lambda_7(closure$ltype, this$KotlinGenerator) {
    return function (it) {
      return this$KotlinGenerator.generate_heq7lg$(it.initializer, void 0, closure$ltype.type);
    };
  }
  function KotlinGenerator$generate$lambda_8(closure$ltype, this$KotlinGenerator) {
    return function (it) {
      return this$KotlinGenerator.generate_heq7lg$(it.initializer, void 0, closure$ltype.type);
    };
  }
  function KotlinGenerator$generate$lambda_9(this$KotlinGenerator) {
    return function (it) {
      return this$KotlinGenerator.removeOuterParenthesis_pdl1vz$(this$KotlinGenerator.generate_heq7lg$(it));
    };
  }
  KotlinGenerator.prototype.generate_heq7lg$ = function ($receiver, par, leftType) {
    if (par === void 0)
      par = true;
    if (leftType === void 0)
      leftType = null;
    var tmp$, tmp$_0, tmp$_1;
    if (Kotlin.isType($receiver, IntConstant))
      return $receiver.value.toString();
    else if (Kotlin.isType($receiver, DoubleConstant))
      return $receiver.value.toString();
    else if (Kotlin.isType($receiver, Binop)) {
      var ll = this.generate_heq7lg$($receiver.l);
      var rr = this.generate_heq7lg$($receiver.r);
      switch ($receiver.op) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
          tmp$ = ll + ' ' + $receiver.op + ' ' + rr;
          break;
        case '==':
        case '!=':
        case '<':
        case '>':
        case '<=':
        case '>=':
          tmp$ = ll + ' ' + $receiver.op + ' ' + rr;
          break;
        case '=':
        case '+=':
        case '-=':
        case '*=':
        case '/=':
        case '%=':
          tmp$ = ll + ' ' + $receiver.op + ' ' + rr;
          break;
        case '&=':
          tmp$ = ll + ' = ' + ll + ' and ' + rr;
          break;
        case '|=':
          tmp$ = ll + ' = ' + ll + ' or ' + rr;
          break;
        case '^=':
          tmp$ = ll + ' = ' + ll + ' xor ' + rr;
          break;
        case '&&=':
          tmp$ = ll + ' = ' + ll + ' && ' + rr;
          break;
        case '||=':
          tmp$ = ll + ' = ' + ll + ' || ' + rr;
          break;
        case '<<=':
          tmp$ = ll + ' = ' + ll + ' shl ' + rr;
          break;
        case '>>=':
          tmp$ = ll + ' = ' + ll + ' shr ' + rr;
          break;
        case '&&':
        case '||':
          tmp$ = ll + ' ' + $receiver.op + ' ' + rr;
          break;
        case '^':
          tmp$ = ll + ' xor ' + rr;
          break;
        case '&':
          tmp$ = ll + ' and ' + rr;
          break;
        case '|':
          tmp$ = ll + ' or ' + rr;
          break;
        case '<<':
          tmp$ = ll + ' shl ' + rr;
          break;
        case '>>':
          tmp$ = ll + ' shr ' + rr;
          break;
        default:throw new NotImplementedError_init('An operation is not implemented: ' + ('Binop ' + $receiver.op));
      }
      var base = tmp$;
      return par ? '(' + base + ')' : base;
    }
     else if (Kotlin.isType($receiver, Id))
      return $receiver.name;
    else if (Kotlin.isType($receiver, PostfixExpr)) {
      var left = this.generate_heq7lg$($receiver.lvalue);
      switch ($receiver.op) {
        case '++':
          return left + ' = ' + left + ' + 1';
        case '--':
          return left + ' = ' + left + ' - 1';
        default:throw new NotImplementedError_init('An operation is not implemented: ' + ("Don't know how to generate postfix operator '" + $receiver.op + "'"));
      }
    }
     else if (Kotlin.isType($receiver, CallExpr))
      return this.generate_heq7lg$($receiver.expr) + '(' + joinToString($receiver.args, ', ', void 0, void 0, void 0, void 0, KotlinGenerator$generate$lambda_6(this)) + ')';
    else if (Kotlin.isType($receiver, StringConstant))
      return $receiver.raw + '.ptr';
    else if (Kotlin.isType($receiver, CharConstant))
      return $receiver.raw + '.toInt()';
    else if (Kotlin.isType($receiver, CastExpr))
      return this.generate_heq7lg$($receiver.expr) + '.to' + withDeclarator_0(toFinalType($receiver.type.specifiers), $receiver.type.abstractDecl) + '()';
    else if (Kotlin.isType($receiver, ArrayAccessExpr))
      return this.generate_heq7lg$($receiver.expr) + '[' + this.generate_heq7lg$($receiver.index, false) + ']';
    else if (Kotlin.isType($receiver, UnaryExpr)) {
      switch ($receiver.op) {
        case '*':
          return '((' + this.generate_heq7lg$($receiver.expr) + ')[0])';
        case '&':
          return '&' + this.generate_heq7lg$($receiver.expr);
        case '-':
          return '-' + this.generate_heq7lg$($receiver.expr);
        case '+':
          return '+' + this.generate_heq7lg$($receiver.expr);
        case '!':
          return '!(' + this.generate_heq7lg$($receiver.expr) + ')';
        case '~':
          return '(' + this.generate_heq7lg$($receiver.expr) + ').inv()';
        case '--':
          return '--' + this.generate_heq7lg$($receiver.expr);
        default:throw new NotImplementedError_init('An operation is not implemented: ' + ("Don't know how to generate unary operator '" + $receiver.op + "'"));
      }
    }
     else if (Kotlin.isType($receiver, ArrayInitExpr)) {
      var ltype = this.resolve_b2mlnm$(ensureNotNull(leftType));
      if (Kotlin.isType(ltype, StructFType)) {
        var structType = this.getProgramType_m0fxnx$(ltype);
        var structName = structType.name;
        var inits = LinkedHashMap_init();
        var index = 0;
        tmp$_0 = $receiver.items.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          var field = structType.fields.get_za3lpa$((tmp$_1 = index, index = tmp$_1 + 1 | 0, tmp$_1));
          var key = field.name;
          var value = this.generate_heq7lg$(item.initializer, void 0, field.type);
          inits.put_xwzc9p$(key, value);
        }
        var $receiver_0 = structType.fields;
        var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver_0, 10)), 16);
        var destination = LinkedHashMap_init_1(capacity);
        var tmp$_2;
        tmp$_2 = $receiver_0.iterator();
        while (tmp$_2.hasNext()) {
          var element = tmp$_2.next();
          var tmp$_3;
          var pair = to(element.name, (tmp$_3 = inits.get_11rb$(element.name)) != null ? tmp$_3 : this.defaultValue_b2mlnm$(element.type));
          destination.put_xwzc9p$(pair.first, pair.second);
        }
        var setFields = destination;
        var tmp$_4 = structName + '(';
        var destination_0 = ArrayList_init_0(setFields.size);
        var tmp$_5;
        tmp$_5 = setFields.entries.iterator();
        while (tmp$_5.hasNext()) {
          var item_0 = tmp$_5.next();
          destination_0.add_11rb$(item_0.key + ' = ' + item_0.value);
        }
        return tmp$_4 + joinToString(destination_0, ', ') + ')';
      }
       else if (Kotlin.isType(ltype, PointerFType))
        return 'listOf(' + joinToString($receiver.items, ', ', void 0, void 0, void 0, void 0, KotlinGenerator$generate$lambda_7(ltype, this)) + ')';
      else if (Kotlin.isType(ltype, ArrayFType))
        return 'listOf(' + joinToString($receiver.items, ', ', void 0, void 0, void 0, void 0, KotlinGenerator$generate$lambda_8(ltype, this)) + ')';
      else {
        throw IllegalStateException_init(('Not a pointer nor an struct but ' + Kotlin.getKClassFromExpression(ltype) + ' ' + ltype).toString());
      }
    }
     else if (Kotlin.isType($receiver, ConditionalExpr))
      return '(if (' + this.generate_heq7lg$($receiver.cond) + ') ' + this.generate_heq7lg$($receiver.etrue) + ' else ' + this.generate_heq7lg$($receiver.efalse) + ')';
    else if (Kotlin.isType($receiver, FieldAccessExpr))
      return this.generate_heq7lg$($receiver.expr) + '.' + $receiver.id;
    else if (Kotlin.isType($receiver, CommaExpr))
      return 'run { ' + joinToString($receiver.exprs, '; ', void 0, void 0, void 0, void 0, KotlinGenerator$generate$lambda_9(this)) + ' }';
    else if (Kotlin.isType($receiver, SizeOfAlignTypeExpr))
      return '' + toString($receiver.ftype) + '.SIZE_BYTES';
    else {
      throw IllegalStateException_init(("Don't know how to generate expr " + $receiver + ' (' + Kotlin.getKClassFromExpression($receiver) + ')').toString());
    }
  };
  KotlinGenerator.prototype.defaultValue_b2mlnm$ = function ($receiver) {
    if (Kotlin.isType($receiver, IntFType))
      return '0';
    else if (Kotlin.isType($receiver, PointerFType))
      return 'CPointer(0)';
    else if (Kotlin.isType($receiver, TypedefFTypeRef))
      return this.defaultValue_b2mlnm$(this.resolve_b2mlnm$($receiver));
    else if (Kotlin.isType($receiver, StructFType))
      return this.getProgramType_m0fxnx$($receiver).name + '()';
    else {
      throw IllegalStateException_init(('Unknown defaultValue for ' + Kotlin.getKClassFromExpression($receiver) + ': ' + $receiver).toString());
    }
  };
  KotlinGenerator.prototype.getProgramType_m0fxnx$ = function ($receiver) {
    return this.parser.getStructTypeInfo_me841z$($receiver.spec);
  };
  KotlinGenerator.prototype.getProgramType_b2mlnm$ = function ($receiver) {
    if (Kotlin.isType($receiver, StructFType))
      return this.getProgramType_m0fxnx$($receiver);
    else if (Kotlin.isType($receiver, TypedefFTypeRef))
      return this.parser.getStructTypeInfo_61zpoe$($receiver.id);
    else {
      throw IllegalStateException_init($receiver.toString().toString());
    }
  };
  KotlinGenerator.$metadata$ = {kind: Kind_CLASS, simpleName: 'KotlinGenerator', interfaces: []};
  var CStdIncludes;
  var RuntimeCode;
  function isDigit($receiver) {
    return (new CharRange(48, 57)).contains_mef7kx$($receiver);
  }
  function isAlphaLC($receiver) {
    return (new CharRange(97, 122)).contains_mef7kx$($receiver);
  }
  function isAlphaUC($receiver) {
    return (new CharRange(65, 90)).contains_mef7kx$($receiver);
  }
  function isAlpha($receiver) {
    return isAlphaLC($receiver) || isAlphaUC($receiver);
  }
  function isAlphaOrUnderscore($receiver) {
    return isAlpha($receiver) || $receiver === 95;
  }
  function isAlnumOrUnderscore($receiver) {
    return isAlphaOrUnderscore($receiver) || isDigit($receiver);
  }
  function Indenter(callback) {
    var $receiver = new Indenter_0();
    callback($receiver);
    return $receiver.toString();
  }
  function Indenter_0() {
    this.cmds_0 = ArrayList_init();
  }
  function Indenter$Indent() {
    Indenter$Indent_instance = this;
  }
  Indenter$Indent.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Indent', interfaces: []};
  var Indenter$Indent_instance = null;
  function Indenter$Indent_getInstance() {
    if (Indenter$Indent_instance === null) {
      new Indenter$Indent();
    }
    return Indenter$Indent_instance;
  }
  function Indenter$Unindent() {
    Indenter$Unindent_instance = this;
  }
  Indenter$Unindent.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Unindent', interfaces: []};
  var Indenter$Unindent_instance = null;
  function Indenter$Unindent_getInstance() {
    if (Indenter$Unindent_instance === null) {
      new Indenter$Unindent();
    }
    return Indenter$Unindent_instance;
  }
  Indenter_0.prototype.line_61zpoe$ = function (str) {
    this.cmds_0.add_11rb$(str);
  };
  Indenter_0.prototype.indent_klfg04$ = function (callback) {
    var $receiver = this.cmds_0;
    var element = Indenter$Indent_getInstance();
    $receiver.add_11rb$(element);
    try {
      return callback();
    }
    finally {
      var $receiver_0 = this.cmds_0;
      var element_0 = Indenter$Unindent_getInstance();
      $receiver_0.add_11rb$(element_0);
    }
  };
  Indenter_0.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    var tmp$, tmp$_0;
    var pre = '';
    tmp$ = this.cmds_0.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      if (equals(cmd, Indenter$Indent_getInstance()))
        pre += '\t';
      else if (equals(cmd, Indenter$Unindent_getInstance())) {
        var $receiver_0 = pre;
        var endIndex = pre.length - 1 | 0;
        pre = $receiver_0.substring(0, endIndex);
      }
       else if (typeof cmd === 'string') {
        tmp$_0 = split(cmd, ['\n']).iterator();
        while (tmp$_0.hasNext()) {
          var line = tmp$_0.next();
          $receiver.append_gw00v9$(pre);
          $receiver.append_gw00v9$(line + '\n');
        }
      }
    }
    return $receiver.toString();
  };
  Indenter_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'Indenter', interfaces: []};
  function ListReader(items, default_0, pos) {
    if (pos === void 0)
      pos = 0;
    this.items = items;
    this.default = default_0;
    this.pos = pos;
  }
  Object.defineProperty(ListReader.prototype, 'size', {get: function () {
    return this.items.size;
  }});
  Object.defineProperty(ListReader.prototype, 'eof', {get: function () {
    return this.pos >= this.size;
  }});
  ListReader.prototype.read = function () {
    var tmp$;
    if (this.eof) {
      throw IllegalStateException_init('EOF found'.toString());
    }
    return this.items.get_za3lpa$((tmp$ = this.pos, this.pos = tmp$ + 1 | 0, tmp$));
  };
  function ListReader$readOutside$lambda(this$ListReader) {
    return function (it) {
      return this$ListReader.default;
    };
  }
  ListReader.prototype.readOutside = function () {
    var tmp$, tmp$_0;
    tmp$_0 = this.items;
    var index = (tmp$ = this.pos, this.pos = tmp$ + 1 | 0, tmp$);
    return index >= 0 && index <= get_lastIndex(tmp$_0) ? tmp$_0.get_za3lpa$(index) : ListReader$readOutside$lambda(this)(index);
  };
  ListReader.prototype.peek_za3lpa$ = function (offset) {
    if (offset === void 0)
      offset = 0;
    if (this.eof) {
      throw IllegalStateException_init('EOF found'.toString());
    }
    return this.items.get_za3lpa$(this.pos + offset | 0);
  };
  ListReader.prototype.peekOutside_za3lpa$ = function (offset) {
    if (offset === void 0)
      offset = 0;
    var $receiver = this.items;
    var index = this.pos + offset | 0;
    return index >= 0 && index <= get_lastIndex($receiver) ? $receiver.get_za3lpa$(index) : this.default;
  };
  ListReader.prototype.expect_11rb$ = function (expect) {
    var actual = this.readOutside();
    if (!equals(actual, expect))
      throw new ExpectException("Expected '" + expect + "' but found '" + actual + "'");
    return actual;
  };
  ListReader.prototype.expect_7l2mas$ = function (expect) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== expect.length; ++tmp$) {
      var e = expect[tmp$];
      this.expect_11rb$(e);
    }
  };
  ListReader.prototype.expectAny_7l2mas$ = function (expect) {
    var actual = this.readOutside();
    if (!contains_1(expect, actual))
      throw new ExpectException("Expected '" + expect + "' but found '" + actual + "'");
    return actual;
  };
  ListReader.prototype.tryExpect_11rb$ = function (expect) {
    if (equals(this.peek_za3lpa$(), expect)) {
      return this.readOutside();
    }
     else {
      return null;
    }
  };
  ListReader.prototype.restoreOnNull_9ce4rd$ = defineInlineFunction('ktcc.com.soywiz.ktcc.util.ListReader.restoreOnNull_9ce4rd$', function (callback) {
    var oldPos = this.pos;
    var result = callback();
    if (result == null) {
      this.pos = oldPos;
    }
    return result;
  });
  ListReader.prototype.tryBlock_9ce4rd$ = defineInlineFunction('ktcc.com.soywiz.ktcc.util.ListReader.tryBlock_9ce4rd$', wrapFunction(function () {
    var ExpectException = _.com.soywiz.ktcc.util.ExpectException;
    var ItemOrError_init = _.com.soywiz.ktcc.util.ItemOrError;
    return function (callback) {
      var tmp$;
      var oldPos = this.pos;
      try {
        tmp$ = callback();
      }
       catch (e) {
        if (Kotlin.isType(e, ExpectException)) {
          tmp$ = e;
        }
         else
          throw e;
      }
      var result = tmp$;
      if (Kotlin.isType(result, ExpectException))
        this.pos = oldPos;
      return (new ItemOrError_init(result)).valueOrNull;
    };
  }));
  ListReader.prototype.tryBlockResult_9ce4rd$ = defineInlineFunction('ktcc.com.soywiz.ktcc.util.ListReader.tryBlockResult_9ce4rd$', wrapFunction(function () {
    var ExpectException = _.com.soywiz.ktcc.util.ExpectException;
    var ItemOrError_init = _.com.soywiz.ktcc.util.ItemOrError;
    return function (callback) {
      var tmp$;
      var oldPos = this.pos;
      try {
        tmp$ = callback();
      }
       catch (e) {
        if (Kotlin.isType(e, ExpectException)) {
          tmp$ = e;
        }
         else
          throw e;
      }
      var result = tmp$;
      if (Kotlin.isType(result, ExpectException))
        this.pos = oldPos;
      return new ItemOrError_init(result);
    };
  }));
  ListReader.prototype.tryBlocks_t794yk$ = defineInlineFunction('ktcc.com.soywiz.ktcc.util.ListReader.tryBlocks_t794yk$', wrapFunction(function () {
    var ExpectException_init = _.com.soywiz.ktcc.util.ExpectException;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var ItemOrError_init = _.com.soywiz.ktcc.util.ItemOrError;
    return function (name, callbacks) {
      var tmp$;
      var errors = ArrayList_init();
      for (tmp$ = 0; tmp$ !== callbacks.length; ++tmp$) {
        var callback = callbacks[tmp$];
        var tmp$_0;
        var oldPos = this.pos;
        try {
          tmp$_0 = callback();
        }
         catch (e) {
          if (Kotlin.isType(e, ExpectException_init)) {
            tmp$_0 = e;
          }
           else
            throw e;
        }
        var result = tmp$_0;
        if (Kotlin.isType(result, ExpectException_init))
          this.pos = oldPos;
        var result_0 = new ItemOrError_init(result);
        if (!result_0.isError) {
          return result_0.value;
        }
         else {
          var element = result_0.error;
          errors.add_11rb$(element);
        }
      }
      throw new ExpectException_init('Tried to parse ' + name + ' but failed with ' + errors);
    };
  }));
  ListReader.$metadata$ = {kind: Kind_CLASS, simpleName: 'ListReader', interfaces: []};
  function ExpectException(msg) {
    Exception_init(msg, this);
    this.name = 'ExpectException';
  }
  ExpectException.$metadata$ = {kind: Kind_CLASS, simpleName: 'ExpectException', interfaces: [Exception]};
  function ItemOrError(_value) {
    this._value = _value;
  }
  Object.defineProperty(ItemOrError.prototype, 'valueOrNull', {get: function () {
    return !this.isError ? this.value : null;
  }});
  Object.defineProperty(ItemOrError.prototype, 'value', {get: function () {
    var tmp$;
    return (tmp$ = this._value) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ItemOrError.prototype, 'error', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this._value, Throwable) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(ItemOrError.prototype, 'isError', {get: function () {
    return Kotlin.isType(this._value, Throwable);
  }});
  ItemOrError.$metadata$ = {kind: Kind_CLASS, simpleName: 'ItemOrError', interfaces: []};
  ItemOrError.prototype.unbox = function () {
    return this._value;
  };
  ItemOrError.prototype.toString = function () {
    return 'ItemOrError(_value=' + Kotlin.toString(this._value) + ')';
  };
  ItemOrError.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this._value) | 0;
    return result;
  };
  ItemOrError.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this._value, other._value))));
  };
  function reader($receiver, default_0) {
    return new ListReader($receiver, default_0);
  }
  function get_cescaped($receiver) {
    var tmp$;
    var out = StringBuilder_init();
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      switch (c) {
        case 92:
          out.append_gw00v9$('\\\\');
          break;
        case 34:
          out.append_gw00v9$('\\"');
          break;
        case 10:
          out.append_gw00v9$('\\n');
          break;
        case 13:
          out.append_gw00v9$('\\r');
          break;
        case 9:
          out.append_gw00v9$('\\t');
          break;
        default:out.append_s8itvh$(c);
          break;
      }
    }
    return out.toString();
  }
  function get_cquoted($receiver) {
    return '"' + get_cescaped($receiver) + '"';
  }
  function get_cunescaped($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var out = StringBuilder_init();
    var n = 0;
    while (n < $receiver.length) {
      var c = $receiver.charCodeAt((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      if (c === 92) {
        var c2 = $receiver.charCodeAt((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
        switch (c2) {
          case 110:
            out.append_s8itvh$(10);
            break;
          case 114:
            out.append_s8itvh$(13);
            break;
          case 116:
            out.append_s8itvh$(9);
            break;
          case 120:
            var h0 = $receiver.charCodeAt((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
            var h1 = $receiver.charCodeAt((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
            throw new NotImplementedError_init('An operation is not implemented: ' + 'cunescaped');
        }
      }
       else {
        out.append_s8itvh$(c);
      }
    }
    return out.toString();
  }
  function get_cunquoted($receiver) {
    if (startsWith($receiver, 34) && endsWith($receiver, 34)) {
      var endIndex = $receiver.length - 1 | 0;
      return get_cunescaped($receiver.substring(1, endIndex));
    }
     else {
      throw IllegalStateException_init('String is not quoted'.toString());
    }
  }
  function StrReader(str, pos) {
    if (pos === void 0)
      pos = 0;
    this.str = str;
    this.pos = pos;
  }
  Object.defineProperty(StrReader.prototype, 'size', {get: function () {
    return this.str.length;
  }});
  Object.defineProperty(StrReader.prototype, 'eof', {get: function () {
    return this.pos >= this.size;
  }});
  Object.defineProperty(StrReader.prototype, 'available', {get: function () {
    return this.size - this.pos | 0;
  }});
  var get_lastIndex_0 = Kotlin.kotlin.text.get_lastIndex_gw00vp$;
  StrReader.prototype.peek = function () {
    var $receiver = this.str;
    var index = this.pos;
    return toBoxedChar(index >= 0 && index <= get_lastIndex_0($receiver) ? $receiver.charCodeAt(index) : unboxChar(toBoxedChar(0)));
  };
  StrReader.prototype.peekOffset_za3lpa$ = function (offset) {
    var $receiver = this.str;
    var index = this.pos + offset | 0;
    return toBoxedChar(index >= 0 && index <= get_lastIndex_0($receiver) ? $receiver.charCodeAt(index) : unboxChar(toBoxedChar(0)));
  };
  StrReader.prototype.read = function () {
    var tmp$, tmp$_0;
    tmp$_0 = this.str;
    var index = (tmp$ = this.pos, this.pos = tmp$ + 1 | 0, tmp$);
    return toBoxedChar(index >= 0 && index <= get_lastIndex_0(tmp$_0) ? tmp$_0.charCodeAt(index) : unboxChar(toBoxedChar(0)));
  };
  StrReader.prototype.peek_za3lpa$ = function (count) {
    var tmp$ = this.str;
    var tmp$_0 = this.pos;
    var tmp$_1 = this.pos;
    var a = this.available;
    var endIndex = tmp$_1 + Math_0.min(a, count) | 0;
    return tmp$.substring(tmp$_0, endIndex);
  };
  StrReader.prototype.read_za3lpa$ = function (count) {
    var $receiver = this.peek_za3lpa$(count);
    this.pos = this.pos + $receiver.length | 0;
    return $receiver;
  };
  StrReader.prototype.expect_61zpoe$ = function (expect) {
    var actual = this.read_za3lpa$(expect.length);
    if (!equals(actual, expect)) {
      throw IllegalStateException_init(("Expected '" + expect + "' actual '" + actual + "'").toString());
    }
  };
  StrReader.prototype.tryExpect_l3c5xc$ = function (expect) {
    return contains_2(expect, unboxChar(this.peek())) ? unboxChar(this.read()) : null;
  };
  StrReader.prototype.readBlock_o14v8n$ = defineInlineFunction('ktcc.com.soywiz.ktcc.util.StrReader.readBlock_o14v8n$', function (callback) {
    var startPos = this.pos;
    callback();
    var $receiver = this.str;
    var endIndex = this.pos;
    return $receiver.substring(startPos, endIndex);
  });
  StrReader.prototype.keepPos_klfg04$ = function (callback) {
    var old = this.pos;
    try {
      return callback();
    }
    finally {
      this.pos = old;
    }
  };
  StrReader.prototype.tryRead_klfg04$ = defineInlineFunction('ktcc.com.soywiz.ktcc.util.StrReader.tryRead_klfg04$', function (callback) {
    var old = this.pos;
    var result = callback();
    if (result == null)
      this.pos = old;
    return result;
  });
  StrReader.$metadata$ = {kind: Kind_CLASS, simpleName: 'StrReader', interfaces: []};
  function toStringUtf8($receiver) {
    var $receiver_0 = StringBuilder_init();
    var tmp$;
    var src = $receiver;
    var start = 0;
    var end = src.length;
    if (start < 0 || start > src.length || (end < 0 || end > src.length)) {
      throw IllegalStateException_init('Out of bounds'.toString());
    }
    var i = start;
    while (i < end) {
      var c = src[i] & 255;
      tmp$ = c >> 4;
      if (tmp$ >= 0 && tmp$ <= 7) {
        $receiver_0.append_s8itvh$(toChar(c));
        i = i + 1 | 0;
      }
       else if (tmp$ >= 12 && tmp$ <= 13) {
        $receiver_0.append_s8itvh$(toChar((c & 31) << 6 | src[i + 1 | 0] & 63));
        i = i + 2 | 0;
      }
       else if (tmp$ === 14) {
        $receiver_0.append_s8itvh$(toChar((c & 15) << 12 | (src[i + 1 | 0] & 63) << 6 | src[i + 2 | 0] & 63));
        i = i + 3 | 0;
      }
       else {
        i = i + 1 | 0;
      }
    }
    return $receiver_0.toString();
  }
  function readFile(name) {
    return files.get_11rb$(name);
  }
  var files;
  function main$lambda$compile(closure$sourcesEditor, closure$includeRuntimeNode, closure$transpiledEditor) {
    return function () {
      var tmp$;
      var sources = closure$sourcesEditor.getValue();
      files.clear();
      println('sources=' + sources);
      var $receiver = files;
      var value = utf8Encode(sources);
      $receiver.put_xwzc9p$('main.c', value);
      try {
        var cfile = CCompiler_getInstance().preprocess_ji1ias$(listOf_0('main.c'));
        var ktfile = CCompiler_getInstance().compileKotlin_ivxn3r$(cfile, closure$includeRuntimeNode.checked);
        closure$transpiledEditor.setValue(ktfile, -1);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          closure$transpiledEditor.setValue(((tmp$ = e.stack) != null ? tmp$ : e).toString(), -1);
          console.error(e);
        }
         else
          throw e;
      }
    };
  }
  function main$lambda$lambda(closure$compile) {
    return function (it) {
      closure$compile();
      return Unit;
    };
  }
  function main$lambda$lambda$lambda(closure$autocompileNode, closure$compile) {
    return function () {
      if (closure$autocompileNode.checked) {
        closure$compile();
      }
      return Unit;
    };
  }
  function main$lambda$lambda_0(closure$timeout, closure$autocompileNode, closure$compile) {
    return function (e) {
      window.clearTimeout(closure$timeout.v);
      closure$timeout.v = window.setTimeout(main$lambda$lambda$lambda(closure$autocompileNode, closure$compile), 500);
      return Unit;
    };
  }
  function main$lambda$lambda_1(closure$compile) {
    return function (e) {
      println('CLICKED!');
      closure$compile();
      return Unit;
    };
  }
  function main$lambda(e) {
    var tmp$;
    println('READY');
    var autocompileNode = document.getElementById('autocompile');
    var includeRuntimeNode = document.getElementById('include-runtime');
    var $receiver = ace.edit('sources');
    $receiver.setTheme('ace/theme/monokai');
    $receiver.session.setMode('ace/mode/c_cpp');
    var sourcesEditor = $receiver;
    var $receiver_0 = ace.edit('transpiled');
    $receiver_0.setTheme('ace/theme/monokai');
    $receiver_0.session.setMode('ace/mode/kotlin');
    var transpiledEditor = $receiver_0;
    var compile = main$lambda$compile(sourcesEditor, includeRuntimeNode, transpiledEditor);
    var timeout = {v: 0};
    includeRuntimeNode.addEventListener('change', main$lambda$lambda(compile));
    sourcesEditor.on('change', main$lambda$lambda_0(timeout, autocompileNode, compile));
    (tmp$ = document.getElementById('compile')) != null ? (tmp$.addEventListener('click', main$lambda$lambda_1(compile)), Unit) : null;
    sourcesEditor.focus();
    compile();
    return Unit;
  }
  function main(args) {
    println('Waiting for DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', main$lambda);
  }
  function utf8Encode(str) {
    return new Int8Array((new TextEncoder('utf-8')).encode(str).buffer);
  }
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$ktcc = package$soywiz.ktcc || (package$soywiz.ktcc = {});
  package$ktcc.ProgramParser = ProgramParser;
  package$ktcc.StructField = StructField;
  package$ktcc.StructTypeInfo = StructTypeInfo;
  package$ktcc.Node = Node;
  Object.defineProperty(Id, 'Companion', {get: Id$Companion_getInstance});
  package$ktcc.Id = Id;
  Object.defineProperty(StringConstant, 'Companion', {get: StringConstant$Companion_getInstance});
  package$ktcc.StringConstant = StringConstant;
  Object.defineProperty(CharConstant, 'Companion', {get: CharConstant$Companion_getInstance});
  package$ktcc.CharConstant = CharConstant;
  Object.defineProperty(IntConstant, 'Companion', {get: IntConstant$Companion_getInstance});
  package$ktcc.IntConstant = IntConstant;
  Object.defineProperty(DoubleConstant, 'Companion', {get: DoubleConstant$Companion_getInstance});
  package$ktcc.DoubleConstant = DoubleConstant;
  package$ktcc.Expr = Expr;
  package$ktcc.LValue = LValue;
  package$ktcc.CommaExpr = CommaExpr;
  package$ktcc.ConstExpr = ConstExpr;
  package$ktcc.PostfixExpr = PostfixExpr;
  package$ktcc.Unop = Unop;
  package$ktcc.ArrayAccessExpr = ArrayAccessExpr;
  package$ktcc.FieldAccessExpr = FieldAccessExpr;
  package$ktcc.CallExpr = CallExpr;
  Object.defineProperty(OperatorsExpr, 'Companion', {get: OperatorsExpr$Companion_getInstance});
  package$ktcc.OperatorsExpr = OperatorsExpr;
  package$ktcc.Binop = Binop;
  package$ktcc.Stm = Stm;
  package$ktcc.IfElse = IfElse;
  package$ktcc.While = While;
  package$ktcc.DoWhile = DoWhile;
  package$ktcc.For = For;
  package$ktcc.Goto = Goto;
  package$ktcc.Continue = Continue;
  package$ktcc.Break = Break;
  package$ktcc.Return = Return;
  package$ktcc.Switch = Switch;
  package$ktcc.ExprStm = ExprStm;
  package$ktcc.LabeledStm = LabeledStm;
  package$ktcc.CaseStm = CaseStm;
  package$ktcc.DefaultStm = DefaultStm;
  package$ktcc.Stms = Stms;
  package$ktcc.Decl = Decl;
  package$ktcc.CParam = CParam;
  package$ktcc.FuncDecl = FuncDecl;
  package$ktcc.Program = Program;
  package$ktcc.whileBlock_wrvsdf$ = whileBlock;
  package$ktcc.whileNotNull_nyd4o0$ = whileNotNull;
  package$ktcc.list_ydl78e$ = list;
  package$ktcc.identifier_st2c3p$ = identifier;
  package$ktcc.primaryExpr_st2c3p$ = primaryExpr;
  package$ktcc.tryPrimaryExpr_st2c3p$ = tryPrimaryExpr;
  package$ktcc.tryPostFixExpression_st2c3p$ = tryPostFixExpression;
  package$ktcc.UnaryExpr = UnaryExpr;
  package$ktcc.CastExpr = CastExpr;
  package$ktcc.SizeOfAlignTypeExpr = SizeOfAlignTypeExpr;
  package$ktcc.tryUnaryExpression_st2c3p$ = tryUnaryExpression;
  package$ktcc.tryCastExpression_st2c3p$ = tryCastExpression;
  package$ktcc.tryBinopExpr_st2c3p$ = tryBinopExpr;
  package$ktcc.ConditionalExpr = ConditionalExpr;
  package$ktcc.tryConditionalExpr_st2c3p$ = tryConditionalExpr;
  package$ktcc.tryAssignmentExpr_st2c3p$ = tryAssignmentExpr;
  package$ktcc.assignmentExpr_st2c3p$ = assignmentExpr;
  package$ktcc.tryExpression_st2c3p$ = tryExpression;
  package$ktcc.expression_st2c3p$ = expression;
  package$ktcc.constantExpression_st2c3p$ = constantExpression;
  package$ktcc.stringLiteral_st2c3p$ = stringLiteral;
  package$ktcc.blockItem_st2c3p$ = blockItem;
  package$ktcc.statement_st2c3p$ = statement;
  package$ktcc.TypeSpecifier = TypeSpecifier;
  package$ktcc.withoutTypedefs_ab1nf1$ = withoutTypedefs;
  package$ktcc.ListTypeSpecifier = ListTypeSpecifier;
  Object.defineProperty(BasicTypeSpecifier$Kind, 'VOID', {get: BasicTypeSpecifier$Kind$VOID_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'CHAR', {get: BasicTypeSpecifier$Kind$CHAR_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'SHORT', {get: BasicTypeSpecifier$Kind$SHORT_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'INT', {get: BasicTypeSpecifier$Kind$INT_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'LONG', {get: BasicTypeSpecifier$Kind$LONG_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'FLOAT', {get: BasicTypeSpecifier$Kind$FLOAT_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'DOUBLE', {get: BasicTypeSpecifier$Kind$DOUBLE_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'SIGNED', {get: BasicTypeSpecifier$Kind$SIGNED_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'UNSIGNED', {get: BasicTypeSpecifier$Kind$UNSIGNED_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'BOOL', {get: BasicTypeSpecifier$Kind$BOOL_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'COMPLEX', {get: BasicTypeSpecifier$Kind$COMPLEX_getInstance});
  Object.defineProperty(BasicTypeSpecifier$Kind, 'Companion', {get: BasicTypeSpecifier$Kind$Companion_getInstance});
  BasicTypeSpecifier.Kind = BasicTypeSpecifier$Kind;
  package$ktcc.BasicTypeSpecifier = BasicTypeSpecifier;
  package$ktcc.TypedefTypeSpecifierName = TypedefTypeSpecifierName;
  package$ktcc.TypedefTypeSpecifierRef = TypedefTypeSpecifierRef;
  package$ktcc.StructUnionTypeSpecifier = StructUnionTypeSpecifier;
  KeywordEnum.Companion = KeywordEnum$Companion;
  package$ktcc.KeywordEnum = KeywordEnum;
  Object.defineProperty(StorageClassSpecifier$Kind, 'TYPEDEF', {get: StorageClassSpecifier$Kind$TYPEDEF_getInstance});
  Object.defineProperty(StorageClassSpecifier$Kind, 'EXTERN', {get: StorageClassSpecifier$Kind$EXTERN_getInstance});
  Object.defineProperty(StorageClassSpecifier$Kind, 'STATIC', {get: StorageClassSpecifier$Kind$STATIC_getInstance});
  Object.defineProperty(StorageClassSpecifier$Kind, 'THREAD_LOCAL', {get: StorageClassSpecifier$Kind$THREAD_LOCAL_getInstance});
  Object.defineProperty(StorageClassSpecifier$Kind, 'AUTO', {get: StorageClassSpecifier$Kind$AUTO_getInstance});
  Object.defineProperty(StorageClassSpecifier$Kind, 'REGISTER', {get: StorageClassSpecifier$Kind$REGISTER_getInstance});
  Object.defineProperty(StorageClassSpecifier$Kind, 'Companion', {get: StorageClassSpecifier$Kind$Companion_getInstance});
  StorageClassSpecifier.Kind = StorageClassSpecifier$Kind;
  package$ktcc.StorageClassSpecifier = StorageClassSpecifier;
  Object.defineProperty(TypeQualifier$Kind, 'CONST', {get: TypeQualifier$Kind$CONST_getInstance});
  Object.defineProperty(TypeQualifier$Kind, 'RESTRICT', {get: TypeQualifier$Kind$RESTRICT_getInstance});
  Object.defineProperty(TypeQualifier$Kind, 'VOLATILE', {get: TypeQualifier$Kind$VOLATILE_getInstance});
  Object.defineProperty(TypeQualifier$Kind, 'ATOMIC', {get: TypeQualifier$Kind$ATOMIC_getInstance});
  Object.defineProperty(TypeQualifier$Kind, 'Companion', {get: TypeQualifier$Kind$Companion_getInstance});
  TypeQualifier.Kind = TypeQualifier$Kind;
  package$ktcc.TypeQualifier = TypeQualifier;
  package$ktcc.FunctionSpecifier = FunctionSpecifier;
  package$ktcc.AlignAsSpecifier = AlignAsSpecifier;
  package$ktcc.TypeName = TypeName;
  package$ktcc.tryTypeName_st2c3p$ = tryTypeName;
  package$ktcc.tryDirectAbstractDeclarator_st2c3p$ = tryDirectAbstractDeclarator;
  package$ktcc.AbstractDeclarator = AbstractDeclarator;
  package$ktcc.tryAbstractDeclarator_st2c3p$ = tryAbstractDeclarator;
  package$ktcc.declarationSpecifiers_st2c3p$ = declarationSpecifiers;
  package$ktcc.tryTypeQualifier_st2c3p$ = tryTypeQualifier;
  package$ktcc.StructDeclarator = StructDeclarator;
  package$ktcc.StructDeclaration = StructDeclaration;
  package$ktcc.structDeclarator_st2c3p$ = structDeclarator;
  package$ktcc.tryStructDeclarator_st2c3p$ = tryStructDeclarator;
  package$ktcc.tryStructDeclaration_st2c3p$ = tryStructDeclaration;
  package$ktcc.tryDeclarationSpecifier_ff223a$ = tryDeclarationSpecifier;
  package$ktcc.Pointer = Pointer;
  package$ktcc.tryPointer_st2c3p$ = tryPointer;
  package$ktcc.ParameterDecl = ParameterDecl;
  package$ktcc.Declarator = Declarator;
  package$ktcc.DeclaratorWithPointer = DeclaratorWithPointer;
  package$ktcc.IdentifierDeclarator = IdentifierDeclarator;
  package$ktcc.ParameterDeclarator = ParameterDeclarator;
  package$ktcc.ArrayDeclarator = ArrayDeclarator;
  package$ktcc.parameterDeclaration_st2c3p$ = parameterDeclaration;
  package$ktcc.declarator_st2c3p$ = declarator;
  package$ktcc.tryDeclarator_st2c3p$ = tryDeclarator;
  package$ktcc.Designator = Designator;
  package$ktcc.ArrayAccessDesignator = ArrayAccessDesignator;
  package$ktcc.FieldAccessDesignator = FieldAccessDesignator;
  package$ktcc.DesignatorList = DesignatorList;
  package$ktcc.tryDesignator_st2c3p$ = tryDesignator;
  package$ktcc.designatorList_st2c3p$ = designatorList;
  package$ktcc.tryDesignation_st2c3p$ = tryDesignation;
  package$ktcc.DesignOptInit = DesignOptInit;
  package$ktcc.designOptInitializer_st2c3p$ = designOptInitializer;
  package$ktcc.ArrayInitExpr = ArrayInitExpr;
  package$ktcc.initializer_st2c3p$ = initializer;
  package$ktcc.InitDeclarator = InitDeclarator;
  package$ktcc.initDeclarator_st2c3p$ = initDeclarator;
  package$ktcc.staticAssert_st2c3p$ = staticAssert;
  package$ktcc.tryDeclaration_st2c3p$ = tryDeclaration;
  package$ktcc.Declaration = Declaration;
  package$ktcc.declaration_st2c3p$ = declaration;
  package$ktcc.compoundStatement_st2c3p$ = compoundStatement;
  package$ktcc.toCParam_d4qpe3$ = toCParam;
  package$ktcc.extractParameter_fxcs27$ = extractParameter;
  package$ktcc.functionDefinition_st2c3p$ = functionDefinition;
  package$ktcc.externalDeclaration_st2c3p$ = externalDeclaration;
  package$ktcc.translationUnits_st2c3p$ = translationUnits;
  package$ktcc.program_st2c3p$ = program;
  package$ktcc.programParser_qit53o$ = programParser;
  package$ktcc.programParser_pdl1vz$ = programParser_0;
  package$ktcc.times_a5ehzx$ = times;
  package$ktcc.plus_a5ehzx$ = plus_0;
  package$ktcc.constantEvaluate_de5dvv$ = constantEvaluate;
  package$ktcc.PToken = PToken;
  package$ktcc.PreprocessorContext = PreprocessorContext;
  package$ktcc.expectEOL_oyr0yh$ = expectEOL;
  package$ktcc.expectAny_b7qkwy$ = expectAny;
  package$ktcc.skipSpaces_t7aypn$ = skipSpaces;
  package$ktcc.PIfCtx = PIfCtx;
  Object.defineProperty(IncludeKind, 'GLOBAL', {get: IncludeKind$GLOBAL_getInstance});
  Object.defineProperty(IncludeKind, 'LOCAL', {get: IncludeKind$LOCAL_getInstance});
  package$ktcc.IncludeKind = IncludeKind;
  package$ktcc.preprocess_wbgl1c$ = preprocess;
  package$ktcc.CToken = CToken;
  package$ktcc.tokenize_pdl1vz$ = tokenize;
  Object.defineProperty(IncludeMode, 'NORMAL', {get: IncludeMode$NORMAL_getInstance});
  Object.defineProperty(IncludeMode, 'EOL', {get: IncludeMode$EOL_getInstance});
  Object.defineProperty(IncludeMode, 'ALL', {get: IncludeMode$ALL_getInstance});
  package$ktcc.IncludeMode = IncludeMode;
  package$ktcc.doTokenize_34sell$ = doTokenize;
  package$ktcc.doTokenize_duw0hu$ = doTokenize_0;
  package$ktcc.FType = FType;
  package$ktcc.IntFType = IntFType;
  package$ktcc.FloatFType = FloatFType;
  package$ktcc.PointerFType = PointerFType;
  package$ktcc.StructFType = StructFType;
  package$ktcc.UnknownFType = UnknownFType;
  package$ktcc.TypedefFTypeRef = TypedefFTypeRef;
  package$ktcc.TypedefFTypeName = TypedefFTypeName;
  package$ktcc.ArrayFType = ArrayFType;
  package$ktcc.combine_pqu7pm$ = combine;
  package$ktcc.generateFinalType_oeligb$ = generateFinalType;
  package$ktcc.generatePointerType_5g7u6l$ = generatePointerType;
  package$ktcc.generateFinalType_e7mbid$ = generateFinalType_0;
  package$ktcc.withDeclarator_r0j8u7$ = withDeclarator;
  package$ktcc.withDeclarator_lfnksf$ = withDeclarator_0;
  package$ktcc.toFinalType_orppq2$ = toFinalType;
  package$ktcc.getName_fxcs27$ = getName;
  var package$compiler = package$ktcc.compiler || (package$ktcc.compiler = {});
  Object.defineProperty(package$compiler, 'CCompiler', {get: CCompiler_getInstance});
  var package$gen = package$ktcc.gen || (package$ktcc.gen = {});
  package$gen.KotlinGenerator = KotlinGenerator;
  var package$util = package$ktcc.util || (package$ktcc.util = {});
  package$util.isDigit_myv2d0$ = isDigit;
  package$util.isAlphaLC_myv2d0$ = isAlphaLC;
  package$util.isAlphaUC_myv2d0$ = isAlphaUC;
  package$util.isAlpha_myv2d0$ = isAlpha;
  package$util.isAlphaOrUnderscore_myv2d0$ = isAlphaOrUnderscore;
  package$util.isAlnumOrUnderscore_myv2d0$ = isAlnumOrUnderscore;
  package$util.Indenter_f28zyd$ = Indenter;
  package$util.Indenter = Indenter_0;
  package$util.ExpectException = ExpectException;
  package$util.ListReader = ListReader;
  package$util.ItemOrError = ItemOrError;
  package$util.reader_bv23uc$ = reader;
  package$util.get_cescaped_pdl1vz$ = get_cescaped;
  package$util.get_cquoted_pdl1vz$ = get_cquoted;
  package$util.get_cunescaped_pdl1vz$ = get_cunescaped;
  package$util.get_cunquoted_pdl1vz$ = get_cunquoted;
  package$util.StrReader = StrReader;
  package$util.toStringUtf8_964n91$ = toStringUtf8;
  var package$internal = package$ktcc.internal || (package$ktcc.internal = {});
  package$internal.readFile_61zpoe$ = readFile;
  _.main_kand9s$ = main;
  _.utf8Encode_61zpoe$ = utf8Encode;
  keywords = setOf(['auto', 'break', 'case', 'char', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum', 'extern', 'float', 'for', 'goto', 'if', 'inline', 'int', 'long', 'register', 'restrict', 'return', 'short', 'signed', 'sizeof', 'static', 'struct', 'switch', 'typedef', 'union', 'unsigned', 'void', 'volatile', 'while', '_Alignas', '_Alignof', '_Atomic', '_Bool', '_Complex', '_Generic', '_Imaginary', '_Noreturn', '_Static_assert', '_Thread_local']);
  storageClassSpecifiers = setOf(['typedef', 'extern', 'static', '_Thread_local', 'auto', 'register']);
  typeSpecifier_0 = setOf(['void', 'char', 'short', 'int', 'long', 'float', 'double', 'signed', 'unsigned', '_Bool', '_Complex']);
  unaryOperators = setOf(['&', '*', '+', '-', '~', '!']);
  assignmentOperators = setOf(['=', '*=', '/=', '%=', '+=', '-=', '<<=', '>>=', '&=', '^=', '|=']);
  binaryOperators = setOf(['*', '/', '%', '+', '-', '<<', '>>', '<', '>', '<=', '>=', '==', '!=', '&', '^', '|', '&&', '||']);
  ternaryOperators = setOf(['?', ':']);
  postPreFixOperators = setOf(['++', '--']);
  allOperators = plus(plus(plus(plus(unaryOperators, binaryOperators), ternaryOperators), postPreFixOperators), assignmentOperators);
  allSymbols = plus(allOperators, setOf(['->', '(', ')', '[', ']', '{', '}', ';', ',', '.']));
  sym3 = lazy(sym3$lambda);
  sym2 = lazy(sym2$lambda);
  sym1 = lazy(sym1$lambda);
  CStdIncludes = mapOf([to('stdint.h', '\n'), to('stdio.h', '\nint putchar(int c);\n'), to('stdlib.h', '\n'), to('string.h', '\n')]);
  RuntimeCode = '// KTCC RUNTIME ///////////////////////////////////////////////////\nimport java.nio.*\n\nval HEAP = ByteBuffer.allocateDirect(16 * 1024).order(ByteOrder.LITTLE_ENDIAN) // 16KB\nval HEAP8 = HEAP\nval HEAP16 = HEAP.asShortBuffer()\nval HEAP32 = HEAP.asIntBuffer()\n\nvar HEAP_PTR = 4 * 1024\nvar STACK_PTR = 4 * 1024 // 4 KB\n\nfun lb(ptr: Int) = HEAP[ptr]\nfun sb(ptr: Int, value: Byte) = run { HEAP.put(ptr, value) }\n\nfun lh(ptr: Int): Short = HEAP.getShort(ptr)\nfun sh(ptr: Int, value: Short): Unit = run { HEAP.putShort(ptr, value) }\n\nfun lw(ptr: Int): Int = HEAP.getInt(ptr)\nfun sw(ptr: Int, value: Int): Unit = run { HEAP.putInt(ptr, value) }\n\n//fun lw(ptr: Int): Int = HEAP32[ptr ushr 2]\n//fun sw(ptr: Int, value: Int): Unit = run { HEAP32.put(ptr ushr 2, value) }\n\n/*!!inline*/ class CPointer<T>(val ptr: Int)\n\ninline fun <T> Int.toCPointer(): CPointer<T> = CPointer(this)\ninline fun <T> CPointer<*>.toCPointer(): CPointer<T> = CPointer(this.ptr)\n\noperator fun CPointer<Byte>.get(offset: Int): Byte = lb(this.ptr + offset * 1)\noperator fun CPointer<Short>.get(offset: Int): Short = lh(this.ptr + offset * 2)\noperator fun CPointer<Int>.get(offset: Int): Int = lw(this.ptr + offset * 4)\n\noperator fun CPointer<Byte>.set(offset: Int, value: Byte) = sb(this.ptr + offset * 1, value)\noperator fun CPointer<Short>.set(offset: Int, value: Short) = sh(this.ptr + offset * 2, value)\noperator fun CPointer<Int>.set(offset: Int, value: Int) = sw(this.ptr + offset * 4, value)\n\noperator fun CPointer<Byte>.plus(offset: Int): CPointer<Byte> = CPointer<Byte>(ptr + offset * 1)\noperator fun CPointer<Byte>.minus(offset: Int): CPointer<Byte> = CPointer<Byte>(ptr - offset * 1)\n\n// STACK ALLOC\ninline fun <T> stackFrame(callback: () -> T): T {\n    val oldPos = STACK_PTR\n    return try { callback() } finally { STACK_PTR = oldPos }\n}\nfun alloca(size: Int): CPointer<Unit> = CPointer<Unit>((STACK_PTR - size).also { STACK_PTR -= size })\n\n// HEAP ALLOC\nfun malloc(size: Int): CPointer<Unit> = CPointer<Unit>(HEAP_PTR.also { HEAP_PTR += size })\nfun free(ptr: CPointer<*>): Unit = Unit // @TODO\n\n// I/O\nfun putchar(c: Int): Int = c.also { System.out.print(c.toChar()) }\n\ntypealias size_t = Int\n\n// memset\nfun memset(ptr: CPointer<*>, value: Int, num: size_t): CPointer<Unit> = (ptr as CPointer<Unit>).also { for (n in 0 until num) sb(ptr.ptr + value, value.toByte()) }\n\nprivate val STRINGS = LinkedHashMap<String, CPointer<Byte>>()\n\nval String.ptr: CPointer<Byte> get() = STRINGS.getOrPut(this) {\n    val bytes = this.toByteArray(Charsets.UTF_8)\n    val ptr = malloc(bytes.size + 1).toCPointer<Byte>()\n    val p = ptr.ptr\n    for (n in 0 until bytes.size) sb(p + n, bytes[n])\n    sb(p + bytes.size, 0)\n    ptr\n}\n\n///////////////////////////////////////////////////////////////////\n';
  files = LinkedHashMap_init();
  main([]);
  return _;
}));

//# sourceMappingURL=ktcc.js.map