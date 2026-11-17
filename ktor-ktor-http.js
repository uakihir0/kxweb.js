(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-io.js', './ktor-ktor-utils.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-http'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-http'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-http'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ktor-ktor-http'.");
    }
    globalThis['ktor-ktor-http'] = factory(typeof globalThis['ktor-ktor-http'] === 'undefined' ? {} : globalThis['ktor-ktor-http'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var shiftRightUnsigned = kotlin_kotlin.$_$.aa;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.n;
  var toString = kotlin_kotlin.$_$.o;
  var toString_0 = kotlin_kotlin.$_$.ac;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l4;
  var Unit_instance = kotlin_kotlin.$_$.z2;
  var shiftLeft = kotlin_kotlin.$_$.z9;
  var protoOf = kotlin_kotlin.$_$.xb;
  var asIterable = kotlin_kotlin.$_$.cd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.za;
  var initMetadataForClass = kotlin_kotlin.$_$.ya;
  var VOID = kotlin_kotlin.$_$.d;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.c1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.z3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var toByte = kotlin_kotlin.$_$.yb;
  var numberToChar = kotlin_kotlin.$_$.ub;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.l;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.k;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.a4;
  var charCodeAt = kotlin_kotlin.$_$.ka;
  var isSurrogate = kotlin_kotlin.$_$.td;
  var encode = kotlin_io_ktor_ktor_io.$_$.r;
  var substring = kotlin_kotlin.$_$.me;
  var takeWhile = kotlin_io_ktor_ktor_io.$_$.b1;
  var charSequenceGet = kotlin_kotlin.$_$.la;
  var charSequenceLength = kotlin_kotlin.$_$.ma;
  var charSequenceSubSequence = kotlin_kotlin.$_$.na;
  var decodeToString = kotlin_kotlin.$_$.hd;
  var Exception = kotlin_kotlin.$_$.sf;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.f4;
  var captureStack = kotlin_kotlin.$_$.ha;
  var Char__minus_impl_a2frrh_0 = kotlin_kotlin.$_$.j;
  var canRead = kotlin_io_ktor_ktor_io.$_$.x;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.m;
  var plus = kotlin_kotlin.$_$.q7;
  var plus_0 = kotlin_kotlin.$_$.r7;
  var last = kotlin_kotlin.$_$.i7;
  var emptyList = kotlin_kotlin.$_$.r6;
  var equals = kotlin_kotlin.$_$.ra;
  var getStringHashCode = kotlin_kotlin.$_$.wa;
  var hashCode = kotlin_kotlin.$_$.xa;
  var objectCreate = kotlin_kotlin.$_$.wb;
  var equals_0 = kotlin_kotlin.$_$.ld;
  var Collection = kotlin_kotlin.$_$.f5;
  var isInterface = kotlin_kotlin.$_$.nb;
  var isBlank = kotlin_kotlin.$_$.qd;
  var indexOf = kotlin_kotlin.$_$.pd;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var isCharSequence = kotlin_kotlin.$_$.jb;
  var trim = kotlin_kotlin.$_$.ef;
  var take = kotlin_kotlin.$_$.ne;
  var substring_0 = kotlin_kotlin.$_$.le;
  var contains = kotlin_kotlin.$_$.fd;
  var initMetadataForObject = kotlin_kotlin.$_$.eb;
  var startsWith = kotlin_kotlin.$_$.he;
  var plus_1 = kotlin_kotlin.$_$.s7;
  var forName = kotlin_io_ktor_ktor_io.$_$.s;
  var IllegalArgumentException = kotlin_kotlin.$_$.tf;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var setOf = kotlin_kotlin.$_$.y7;
  var first = kotlin_kotlin.$_$.md;
  var last_0 = kotlin_kotlin.$_$.xd;
  var get_lastIndex = kotlin_kotlin.$_$.vd;
  var get_lastIndex_0 = kotlin_kotlin.$_$.g7;
  var StringValuesBuilderImpl = kotlin_io_ktor_ktor_utils.$_$.t;
  var listOf = kotlin_kotlin.$_$.k7;
  var StringValuesImpl = kotlin_io_ktor_ktor_utils.$_$.u;
  var emptyMap = kotlin_kotlin.$_$.s6;
  var StringValues = kotlin_io_ktor_ktor_utils.$_$.w;
  var emptySet = kotlin_kotlin.$_$.t6;
  var get = kotlin_io_ktor_ktor_utils.$_$.s;
  var forEach = kotlin_io_ktor_ktor_utils.$_$.r;
  var StringValuesSingleImpl = kotlin_io_ktor_ktor_utils.$_$.v;
  var toDoubleOrNull = kotlin_kotlin.$_$.pe;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.z1;
  var lazy = kotlin_kotlin.$_$.wg;
  var to = kotlin_kotlin.$_$.ch;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e3;
  var asList = kotlin_kotlin.$_$.w5;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.i;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.k4;
  var toLongOrNull = kotlin_kotlin.$_$.ue;
  var listOf_0 = kotlin_kotlin.$_$.l7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z5;
  var mapCapacity = kotlin_kotlin.$_$.m7;
  var coerceAtLeast = kotlin_kotlin.$_$.fc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m3;
  var Comparable = kotlin_kotlin.$_$.mf;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.d3;
  var addAll = kotlin_kotlin.$_$.u5;
  var joinTo = kotlin_kotlin.$_$.e7;
  var toString_1 = kotlin_kotlin.$_$.bh;
  var initMetadataForInterface = kotlin_kotlin.$_$.cb;
  var isWhitespace = kotlin_kotlin.$_$.ud;
  var charArrayOf = kotlin_kotlin.$_$.ia;
  var split = kotlin_kotlin.$_$.de;
  var toMutableList = kotlin_kotlin.$_$.j8;
  var startsWith_0 = kotlin_kotlin.$_$.ge;
  var first_0 = kotlin_kotlin.$_$.x6;
  var joinToString = kotlin_kotlin.$_$.d7;
  var toCharArray = kotlin_io_ktor_ktor_utils.$_$.b1;
  var indexOfAny = kotlin_kotlin.$_$.nd;
  var dropLast = kotlin_kotlin.$_$.p6;
  var IllegalStateException = kotlin_kotlin.$_$.uf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.q4;
  var indexOf_0 = kotlin_kotlin.$_$.od;
  var toInt = kotlin_kotlin.$_$.te;
  var toLowerCasePreservingASCIIRules = kotlin_io_ktor_ktor_utils.$_$.c1;
  var isLowerCase = kotlin_io_ktor_ktor_utils.$_$.z;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.x;
  var startsWith_1 = kotlin_kotlin.$_$.fe;
  var constructCallableReference = kotlin_kotlin.$_$.pa;
  var lazy_0 = kotlin_kotlin.$_$.xg;
  var KProperty1 = kotlin_kotlin.$_$.wc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.va;
  var getKClassFromExpression = kotlin_kotlin.$_$.qc;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var toSet = kotlin_kotlin.$_$.k8;
  var fromInt = kotlin_kotlin.$_$.t9;
  var CoroutineImpl = kotlin_kotlin.$_$.i9;
  var initMetadataForLambda = kotlin_kotlin.$_$.db;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(AsciiBitSet, 'AsciiBitSet');
  initMetadataForClass(URLDecodeException, 'URLDecodeException', VOID, Exception);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(HeaderValueWithParameters, 'HeaderValueWithParameters');
  initMetadataForClass(ContentDisposition, 'ContentDisposition', VOID, HeaderValueWithParameters);
  initMetadataForCompanion(Companion_1);
  initMetadataForObject(Application, 'Application');
  initMetadataForObject(Image, 'Image');
  initMetadataForObject(MultiPart, 'MultiPart');
  initMetadataForObject(Text, 'Text');
  initMetadataForObject(Video, 'Video');
  initMetadataForClass(ContentType, 'ContentType', VOID, HeaderValueWithParameters);
  initMetadataForClass(BadContentTypeFormatException, 'BadContentTypeFormatException', VOID, Exception);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(HeadersBuilder, 'HeadersBuilder', HeadersBuilder, StringValuesBuilderImpl);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(HeadersImpl, 'HeadersImpl', HeadersImpl, StringValuesImpl, [StringValues]);
  initMetadataForObject(EmptyHeaders, 'EmptyHeaders', VOID, VOID, [StringValues]);
  initMetadataForClass(HeadersSingleImpl, 'HeadersSingleImpl', VOID, StringValuesSingleImpl, [StringValues]);
  initMetadataForClass(HeaderValueParam, 'HeaderValueParam');
  initMetadataForClass(HeaderValue, 'HeaderValue');
  initMetadataForObject(HttpHeaders, 'HttpHeaders');
  initMetadataForClass(UnsafeHeaderException, 'UnsafeHeaderException', VOID, IllegalArgumentException);
  initMetadataForClass(IllegalHeaderNameException, 'IllegalHeaderNameException', VOID, IllegalArgumentException);
  initMetadataForClass(IllegalHeaderValueException, 'IllegalHeaderValueException', VOID, IllegalArgumentException);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(HttpMethod, 'HttpMethod');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(HttpProtocolVersion, 'HttpProtocolVersion');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(HttpStatusCode, 'HttpStatusCode', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_7);
  initMetadataForInterface(Parameters, 'Parameters', VOID, VOID, [StringValues]);
  initMetadataForObject(EmptyParameters, 'EmptyParameters', VOID, VOID, [Parameters]);
  initMetadataForClass(ParametersBuilderImpl, 'ParametersBuilderImpl', ParametersBuilderImpl, StringValuesBuilderImpl);
  initMetadataForClass(ParametersImpl, 'ParametersImpl', ParametersImpl, StringValuesImpl, [Parameters]);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(URLBuilder, 'URLBuilder', URLBuilder);
  initMetadataForClass(URLParserException, 'URLParserException', VOID, IllegalStateException);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(URLProtocol, 'URLProtocol');
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(Url_0, 'Url', VOID, VOID, VOID, VOID, VOID, {0: UrlSerializer_getInstance});
  initMetadataForObject(UrlSerializer, 'UrlSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(UrlDecodedParametersBuilder, 'UrlDecodedParametersBuilder');
  initMetadataForClass(OutgoingContent, 'OutgoingContent');
  initMetadataForClass(ByteArrayContent_0, 'ByteArrayContent', VOID, OutgoingContent);
  initMetadataForClass(ByteArrayContent, 'ByteArrayContent', VOID, ByteArrayContent_0);
  initMetadataForLambda(PartData$FormItem$_init_$slambda_xpexm6, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(PartData$BinaryItem$_init_$slambda_l0n5zl, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(PartData$BinaryChannelItem$_init_$slambda_qcg1jy, CoroutineImpl, VOID, [0]);
  initMetadataForClass(PartData, 'PartData');
  initMetadataForClass(FormItem, 'FormItem', VOID, PartData);
  initMetadataForClass(FileItem, 'FileItem', VOID, PartData);
  initMetadataForClass(BinaryItem, 'BinaryItem', VOID, PartData);
  initMetadataForClass(BinaryChannelItem, 'BinaryChannelItem', VOID, PartData);
  initMetadataForInterface(MultiPartData, 'MultiPartData', VOID, VOID, VOID, [0]);
  initMetadataForObject(NullBody, 'NullBody');
  initMetadataForClass(NoContent, 'NoContent', VOID, OutgoingContent);
  initMetadataForClass(ReadChannelContent, 'ReadChannelContent', VOID, OutgoingContent);
  initMetadataForClass(WriteChannelContent, 'WriteChannelContent', VOID, OutgoingContent, VOID, [1]);
  initMetadataForClass(ProtocolUpgrade, 'ProtocolUpgrade', VOID, OutgoingContent, VOID, [4]);
  initMetadataForClass(ContentWrapper, 'ContentWrapper', VOID, OutgoingContent);
  initMetadataForClass(TextContent, 'TextContent', VOID, ByteArrayContent_0);
  //endregion
  function containsCode($this, code) {
    if (!((code >>> 7 | 0) === 0))
      return false;
    var bits = code < 64 ? $this.v2r_1 : $this.w2r_1;
    return (shiftRightUnsigned(bits, code) & 1n) === 1n;
  }
  function Companion() {
  }
  protoOf(Companion).x2r = function (chars) {
    var low = 0n;
    var high = 0n;
    var _iterator__ex2g4s = chars.t();
    while (_iterator__ex2g4s.u()) {
      var char = _iterator__ex2g4s.v().x1_1;
      // Inline function 'kotlin.code' call
      var code = Char__toInt_impl_vasixd(char);
      // Inline function 'kotlin.require' call
      if (!(code < 128)) {
        var message = "Only ASCII characters are supported, got '" + toString(char) + "' (code " + code + ')';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      if (code < 64)
        low = low | shiftLeft(1n, code);
      else
        high = high | shiftLeft(1n, code);
    }
    return new AsciiBitSet(low, high);
  };
  protoOf(Companion).y2r = function (chars) {
    return this.x2r(asIterable(chars));
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function AsciiBitSet(low, high) {
    this.v2r_1 = low;
    this.w2r_1 = high;
  }
  protoOf(AsciiBitSet).gk = function (char) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(char);
    return containsCode(this, tmp$ret$0);
  };
  protoOf(AsciiBitSet).z2r = function (byte) {
    return containsCode(this, byte);
  };
  protoOf(AsciiBitSet).a2s = function (other) {
    return new AsciiBitSet(this.v2r_1 | other.v2r_1, this.w2r_1 | other.w2r_1);
  };
  function get_URL_ALPHABET() {
    _init_properties_Codecs_kt__fudxxf();
    return URL_ALPHABET;
  }
  var URL_ALPHABET;
  function get_HEX_ALPHABET() {
    _init_properties_Codecs_kt__fudxxf();
    return HEX_ALPHABET;
  }
  var HEX_ALPHABET;
  function get_URL_PROTOCOL_PART() {
    _init_properties_Codecs_kt__fudxxf();
    return URL_PROTOCOL_PART;
  }
  var URL_PROTOCOL_PART;
  function get_VALID_PATH_PART() {
    _init_properties_Codecs_kt__fudxxf();
    return VALID_PATH_PART;
  }
  var VALID_PATH_PART;
  var ATTRIBUTE_CHARACTERS;
  function get_URL_PARAMETER_CHARS() {
    _init_properties_Codecs_kt__fudxxf();
    return URL_PARAMETER_CHARS;
  }
  var URL_PARAMETER_CHARS;
  function encodeURLParameter(_this__u8e3s4, spaceToPlus) {
    spaceToPlus = spaceToPlus === VOID ? false : spaceToPlus;
    _init_properties_Codecs_kt__fudxxf();
    var content = toByteArray(_this__u8e3s4, Charsets_getInstance().m2j_1);
    // Inline function 'kotlin.text.buildString' call
    var capacity = content.length;
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    var inductionVariable = 0;
    var last = content.length;
    while (inductionVariable < last) {
      var byte = content[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (get_URL_PARAMETER_CHARS().z2r(byte))
        this_0.s(numberToChar(byte));
      else {
        var tmp;
        if (spaceToPlus) {
          var tmp_0 = byte;
          // Inline function 'kotlin.code' call
          var this_1 = _Char___init__impl__6a9atx(32);
          var tmp$ret$3 = Char__toInt_impl_vasixd(this_1);
          tmp = tmp_0 === toByte(tmp$ret$3);
        } else {
          tmp = false;
        }
        if (tmp)
          this_0.s(_Char___init__impl__6a9atx(43));
        else {
          appendPercentEncoded(this_0, byte);
        }
      }
    }
    return this_0.toString();
  }
  function appendPercentEncoded(_this__u8e3s4, byte) {
    _init_properties_Codecs_kt__fudxxf();
    var code = byte & 255;
    _this__u8e3s4.s(_Char___init__impl__6a9atx(37));
    _this__u8e3s4.s(hexDigitToChar(code >> 4));
    _this__u8e3s4.s(hexDigitToChar(code & 15));
  }
  function hexDigitToChar(digit) {
    _init_properties_Codecs_kt__fudxxf();
    return (0 <= digit ? digit <= 9 : false) ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), digit) : Char__minus_impl_a2frrh(Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(65), digit), 10);
  }
  function encodeURLParameterValue(_this__u8e3s4) {
    _init_properties_Codecs_kt__fudxxf();
    return encodeURLParameter(_this__u8e3s4, true);
  }
  function decodeURLPart(_this__u8e3s4, start, end, charset) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? _this__u8e3s4.length : end;
    charset = charset === VOID ? Charsets_getInstance().m2j_1 : charset;
    _init_properties_Codecs_kt__fudxxf();
    return decodeScan(_this__u8e3s4, start, end, false, charset);
  }
  function encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset) {
    encodeFull = encodeFull === VOID ? false : encodeFull;
    spaceToPlus = spaceToPlus === VOID ? false : spaceToPlus;
    charset = charset === VOID ? Charsets_getInstance().m2j_1 : charset;
    _init_properties_Codecs_kt__fudxxf();
    var content = toByteArray(_this__u8e3s4, charset);
    // Inline function 'kotlin.text.buildString' call
    var capacity = content.length;
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    var inductionVariable = 0;
    var last = content.length;
    while (inductionVariable < last) {
      var byte = content[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = byte;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(32);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_1);
      if (tmp === toByte(tmp$ret$3))
        if (spaceToPlus)
          this_0.s(_Char___init__impl__6a9atx(43));
        else
          this_0.q('%20');
      else {
        if (get_URL_ALPHABET().z2r(byte) || (!encodeFull && get_URL_PROTOCOL_PART().z2r(byte)))
          this_0.s(numberToChar(byte));
        else {
          appendPercentEncoded(this_0, byte);
        }
      }
    }
    return this_0.toString();
  }
  function decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? _this__u8e3s4.length : end;
    plusIsSpace = plusIsSpace === VOID ? false : plusIsSpace;
    charset = charset === VOID ? Charsets_getInstance().m2j_1 : charset;
    _init_properties_Codecs_kt__fudxxf();
    return decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset);
  }
  function encodeURLPathPart(_this__u8e3s4) {
    _init_properties_Codecs_kt__fudxxf();
    return encodeURLPath(_this__u8e3s4, true);
  }
  function encodeURLPath(_this__u8e3s4, encodeSlash, encodeEncoded) {
    encodeSlash = encodeSlash === VOID ? false : encodeSlash;
    encodeEncoded = encodeEncoded === VOID ? true : encodeEncoded;
    _init_properties_Codecs_kt__fudxxf();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    var charset = Charsets_getInstance().m2j_1;
    var index = 0;
    $l$loop_1: while (index < _this__u8e3s4.length) {
      var current = charCodeAt(_this__u8e3s4, index);
      if (!encodeSlash && current === _Char___init__impl__6a9atx(47) || get_URL_ALPHABET().gk(current) || get_VALID_PATH_PART().gk(current)) {
        this_0.s(current);
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!encodeEncoded && current === _Char___init__impl__6a9atx(37) && (index + 2 | 0) < _this__u8e3s4.length && get_HEX_ALPHABET().gk(charCodeAt(_this__u8e3s4, index + 1 | 0)) && get_HEX_ALPHABET().gk(charCodeAt(_this__u8e3s4, index + 2 | 0))) {
        this_0.s(current);
        this_0.s(charCodeAt(_this__u8e3s4, index + 1 | 0));
        this_0.s(charCodeAt(_this__u8e3s4, index + 2 | 0));
        index = index + 3 | 0;
        continue $l$loop_1;
      }
      // Inline function 'kotlin.code' call
      if (Char__toInt_impl_vasixd(current) < 128) {
        // Inline function 'kotlin.code' call
        var tmp$ret$4 = Char__toInt_impl_vasixd(current);
        appendPercentEncoded(this_0, toByte(tmp$ret$4));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      var symbolSize = isSurrogate(current) ? 2 : 1;
      var tmp = encode(charset.p2j(), _this__u8e3s4, index, index + symbolSize | 0);
      forEach_0(tmp, encodeURLPath$lambda(this_0));
      index = index + symbolSize | 0;
    }
    return this_0.toString();
  }
  function decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset) {
    _init_properties_Codecs_kt__fudxxf();
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charCodeAt(_this__u8e3s4, index);
        if (ch === _Char___init__impl__6a9atx(37) || (plusIsSpace && ch === _Char___init__impl__6a9atx(43))) {
          return decodeImpl(_this__u8e3s4, start, end, index, plusIsSpace, charset);
        }
      }
       while (inductionVariable < end);
    return start === 0 && end === _this__u8e3s4.length ? toString_0(_this__u8e3s4) : substring(_this__u8e3s4, start, end);
  }
  function forEach_0(_this__u8e3s4, block) {
    _init_properties_Codecs_kt__fudxxf();
    takeWhile(_this__u8e3s4, forEach$lambda(block));
  }
  function decodeImpl(_this__u8e3s4, start, end, prefixEnd, plusIsSpace, charset) {
    _init_properties_Codecs_kt__fudxxf();
    var length = end - start | 0;
    var sbSize = length > 255 ? length / 3 | 0 : length;
    var sb = StringBuilder_init_$Create$(sbSize);
    if (prefixEnd > start) {
      sb.ic(_this__u8e3s4, start, prefixEnd);
    }
    var index = prefixEnd;
    var bytes = null;
    while (index < end) {
      var c = charSequenceGet(_this__u8e3s4, index);
      if (plusIsSpace && c === _Char___init__impl__6a9atx(43)) {
        sb.s(_Char___init__impl__6a9atx(32));
        index = index + 1 | 0;
      } else if (c === _Char___init__impl__6a9atx(37)) {
        if (bytes == null) {
          bytes = new Int8Array((end - index | 0) / 3 | 0);
        }
        var count = 0;
        while (index < end && charSequenceGet(_this__u8e3s4, index) === _Char___init__impl__6a9atx(37)) {
          if ((index + 2 | 0) >= end) {
            // Inline function 'kotlin.text.substring' call
            var startIndex = index;
            var endIndex = charSequenceLength(_this__u8e3s4);
            var tmp$ret$0 = toString_0(charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex));
            throw new URLDecodeException('Incomplete trailing HEX escape: ' + tmp$ret$0 + ', in ' + toString_0(_this__u8e3s4) + ' at ' + index);
          }
          var digit1 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 1 | 0));
          var digit2 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 2 | 0));
          if (digit1 === -1 || digit2 === -1) {
            throw new URLDecodeException('Wrong HEX escape: %' + toString(charSequenceGet(_this__u8e3s4, index + 1 | 0)) + toString(charSequenceGet(_this__u8e3s4, index + 2 | 0)) + ', in ' + toString_0(_this__u8e3s4) + ', at ' + index);
          }
          var tmp = bytes;
          var _unary__edvuaz = count;
          count = _unary__edvuaz + 1 | 0;
          tmp[_unary__edvuaz] = toByte(imul(digit1, 16) + digit2 | 0);
          index = index + 3 | 0;
        }
        sb.q(decodeToString(bytes, 0, 0 + count | 0));
      } else {
        sb.s(c);
        index = index + 1 | 0;
      }
    }
    return sb.toString();
  }
  function URLDecodeException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, URLDecodeException);
  }
  function charToHexDigit(c2) {
    _init_properties_Codecs_kt__fudxxf();
    return (_Char___init__impl__6a9atx(48) <= c2 ? c2 <= _Char___init__impl__6a9atx(57) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(48)) : (_Char___init__impl__6a9atx(65) <= c2 ? c2 <= _Char___init__impl__6a9atx(70) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(65)) + 10 | 0 : (_Char___init__impl__6a9atx(97) <= c2 ? c2 <= _Char___init__impl__6a9atx(102) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(97)) + 10 | 0 : -1;
  }
  function encodeURLPath$lambda($$this$buildString) {
    return function (it) {
      appendPercentEncoded($$this$buildString, it);
      return Unit_instance;
    };
  }
  function forEach$lambda($block) {
    return function (buffer) {
      while (canRead(buffer)) {
        $block(buffer.u1h());
      }
      return true;
    };
  }
  var properties_initialized_Codecs_kt_hkj9s1;
  function _init_properties_Codecs_kt__fudxxf() {
    if (!properties_initialized_Codecs_kt_hkj9s1) {
      properties_initialized_Codecs_kt_hkj9s1 = true;
      URL_ALPHABET = Companion_instance.x2r(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      HEX_ALPHABET = Companion_instance.x2r(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(70))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      URL_PROTOCOL_PART = Companion_instance.y2r(":/?#[]@!$&'()*,;=-._~+");
      VALID_PATH_PART = Companion_instance.y2r(":@!$&'()*+,;=-._~");
      ATTRIBUTE_CHARACTERS = get_URL_ALPHABET().a2s(Companion_instance.y2r('!#$&+-.^_`|~'));
      URL_PARAMETER_CHARS = get_URL_ALPHABET().a2s(Companion_instance.y2r('-._~'));
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.b2s_1 = new ContentDisposition('file');
    this.c2s_1 = new ContentDisposition('mixed');
    this.d2s_1 = new ContentDisposition('attachment');
    this.e2s_1 = new ContentDisposition('inline');
  }
  protoOf(Companion_0).lo = function (value) {
    // Inline function 'io.ktor.http.Companion.parse' call
    var headerValue = last(parseHeaderValue(value));
    var tmp0 = headerValue.f2s_1;
    var p = headerValue.g2s_1;
    return new ContentDisposition(tmp0, p);
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null) {
      Companion_instance_2;
      new Companion_0();
    }
    return Companion_instance_0;
  }
  function ContentDisposition(disposition, parameters) {
    Companion_getInstance_0();
    parameters = parameters === VOID ? emptyList() : parameters;
    HeaderValueWithParameters.call(this, disposition, parameters);
  }
  protoOf(ContentDisposition).k2s = function () {
    return this.l2s_1;
  };
  protoOf(ContentDisposition).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ContentDisposition) {
      tmp_0 = this.k2s() === other.k2s();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.m2s_1, other.m2s_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ContentDisposition).hashCode = function () {
    return imul(getStringHashCode(this.k2s()), 31) + hashCode(this.m2s_1) | 0;
  };
  var textSubTypes;
  function ContentType_init_$Init$(contentType, contentSubtype, parameters, $this) {
    parameters = parameters === VOID ? emptyList() : parameters;
    ContentType.call($this, contentType, contentSubtype, contentType + '/' + contentSubtype, parameters);
    return $this;
  }
  function ContentType_init_$Create$(contentType, contentSubtype, parameters) {
    return ContentType_init_$Init$(contentType, contentSubtype, parameters, objectCreate(protoOf(ContentType)));
  }
  function hasParameter($this, name, value) {
    var tmp;
    switch ($this.m2s_1.e1()) {
      case 0:
        tmp = false;
        break;
      case 1:
        // Inline function 'kotlin.let' call

        var it = $this.m2s_1.d1(0);
        tmp = (equals_0(it.o2s_1, name, true) && equals_0(it.p2s_1, value, true));
        break;
      default:
        var tmp0 = $this.m2s_1;
        var tmp$ret$2;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp_0;
          if (isInterface(tmp0, Collection)) {
            tmp_0 = tmp0.r();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = false;
            break $l$block_0;
          }
          var _iterator__ex2g4s = tmp0.t();
          while (_iterator__ex2g4s.u()) {
            var element = _iterator__ex2g4s.v();
            if (equals_0(element.o2s_1, name, true) && equals_0(element.p2s_1, value, true)) {
              tmp$ret$2 = true;
              break $l$block_0;
            }
          }
          tmp$ret$2 = false;
        }

        tmp = tmp$ret$2;
        break;
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.r2s_1 = ContentType_init_$Create$('*', '*');
  }
  protoOf(Companion_1).lo = function (value) {
    if (isBlank(value))
      return this.r2s_1;
    // Inline function 'io.ktor.http.Companion.parse' call
    var headerValue = last(parseHeaderValue(value));
    var tmp0 = headerValue.f2s_1;
    var parameters = headerValue.g2s_1;
    var slash = indexOf(tmp0, _Char___init__impl__6a9atx(47));
    if (slash === -1) {
      // Inline function 'kotlin.text.trim' call
      if (toString_0(trim(isCharSequence(tmp0) ? tmp0 : THROW_CCE())) === '*')
        return Companion_getInstance_1().r2s_1;
      throw new BadContentTypeFormatException(value);
    }
    // Inline function 'kotlin.text.trim' call
    var this_0 = take(tmp0, slash);
    var type = toString_0(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(type) === 0) {
      throw new BadContentTypeFormatException(value);
    }
    // Inline function 'kotlin.text.trim' call
    var this_1 = substring_0(tmp0, slash + 1 | 0);
    var subtype = toString_0(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
    if (contains(type, _Char___init__impl__6a9atx(32)) || contains(subtype, _Char___init__impl__6a9atx(32))) {
      throw new BadContentTypeFormatException(value);
    }
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(subtype) === 0) {
      tmp = true;
    } else {
      tmp = contains(subtype, _Char___init__impl__6a9atx(47));
    }
    if (tmp) {
      throw new BadContentTypeFormatException(value);
    }
    return ContentType_init_$Create$(type, subtype, parameters);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null) {
      Companion_instance_2;
      new Companion_1();
    }
    return Companion_instance_1;
  }
  function Application() {
    Application_instance = this;
    this.s2s_1 = 'application';
    this.t2s_1 = ContentType_init_$Create$('application', '*');
    this.u2s_1 = ContentType_init_$Create$('application', 'atom+xml');
    this.v2s_1 = ContentType_init_$Create$('application', 'cbor');
    this.w2s_1 = ContentType_init_$Create$('application', 'json');
    this.x2s_1 = ContentType_init_$Create$('application', 'hal+json');
    this.y2s_1 = ContentType_init_$Create$('application', 'javascript');
    this.z2s_1 = ContentType_init_$Create$('application', 'octet-stream');
    this.a2t_1 = ContentType_init_$Create$('application', 'rss+xml');
    this.b2t_1 = ContentType_init_$Create$('application', 'soap+xml');
    this.c2t_1 = ContentType_init_$Create$('application', 'xml');
    this.d2t_1 = ContentType_init_$Create$('application', 'xml-dtd');
    this.e2t_1 = ContentType_init_$Create$('application', 'yaml');
    this.f2t_1 = ContentType_init_$Create$('application', 'zip');
    this.g2t_1 = ContentType_init_$Create$('application', 'gzip');
    this.h2t_1 = ContentType_init_$Create$('application', 'x-www-form-urlencoded');
    this.i2t_1 = ContentType_init_$Create$('application', 'pdf');
    this.j2t_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    this.k2t_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.wordprocessingml.document');
    this.l2t_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.presentationml.presentation');
    this.m2t_1 = ContentType_init_$Create$('application', 'protobuf');
    this.n2t_1 = ContentType_init_$Create$('application', 'wasm');
    this.o2t_1 = ContentType_init_$Create$('application', 'problem+json');
    this.p2t_1 = ContentType_init_$Create$('application', 'problem+xml');
  }
  var Application_instance;
  function Application_getInstance() {
    if (Application_instance == null)
      new Application();
    return Application_instance;
  }
  function Image() {
    Image_instance = this;
    this.q2t_1 = 'image';
    this.r2t_1 = ContentType_init_$Create$('image', '*');
    this.s2t_1 = ContentType_init_$Create$('image', 'apng');
    this.t2t_1 = ContentType_init_$Create$('image', 'avif');
    this.u2t_1 = ContentType_init_$Create$('image', 'bmp');
    this.v2t_1 = ContentType_init_$Create$('image', 'gif');
    this.w2t_1 = ContentType_init_$Create$('image', 'heic');
    this.x2t_1 = ContentType_init_$Create$('image', 'heif');
    this.y2t_1 = ContentType_init_$Create$('image', 'jpeg');
    this.z2t_1 = ContentType_init_$Create$('image', 'jxl');
    this.a2u_1 = ContentType_init_$Create$('image', 'png');
    this.b2u_1 = ContentType_init_$Create$('image', 'svg+xml');
    this.c2u_1 = ContentType_init_$Create$('image', 'tiff');
    this.d2u_1 = ContentType_init_$Create$('image', 'webp');
    this.e2u_1 = ContentType_init_$Create$('image', 'x-icon');
  }
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image();
    return Image_instance;
  }
  function MultiPart() {
    MultiPart_instance = this;
    this.f2u_1 = 'multipart';
    this.g2u_1 = ContentType_init_$Create$('multipart', '*');
    this.h2u_1 = ContentType_init_$Create$('multipart', 'mixed');
    this.i2u_1 = ContentType_init_$Create$('multipart', 'alternative');
    this.j2u_1 = ContentType_init_$Create$('multipart', 'related');
    this.k2u_1 = ContentType_init_$Create$('multipart', 'form-data');
    this.l2u_1 = ContentType_init_$Create$('multipart', 'signed');
    this.m2u_1 = ContentType_init_$Create$('multipart', 'encrypted');
    this.n2u_1 = ContentType_init_$Create$('multipart', 'byteranges');
  }
  protoOf(MultiPart).o2u = function (contentType) {
    return startsWith(contentType, 'multipart/', true);
  };
  var MultiPart_instance;
  function MultiPart_getInstance() {
    if (MultiPart_instance == null)
      new MultiPart();
    return MultiPart_instance;
  }
  function Text() {
    Text_instance = this;
    this.p2u_1 = 'text';
    this.q2u_1 = ContentType_init_$Create$('text', '*');
    this.r2u_1 = ContentType_init_$Create$('text', 'plain');
    this.s2u_1 = ContentType_init_$Create$('text', 'css');
    this.t2u_1 = ContentType_init_$Create$('text', 'csv');
    this.u2u_1 = ContentType_init_$Create$('text', 'html');
    this.v2u_1 = ContentType_init_$Create$('text', 'javascript');
    this.w2u_1 = ContentType_init_$Create$('text', 'markdown');
    this.x2u_1 = ContentType_init_$Create$('text', 'vcard');
    this.y2u_1 = ContentType_init_$Create$('text', 'xml');
    this.z2u_1 = ContentType_init_$Create$('text', 'event-stream');
  }
  var Text_instance;
  function Text_getInstance() {
    if (Text_instance == null)
      new Text();
    return Text_instance;
  }
  function Video() {
    Video_instance = this;
    this.a2v_1 = 'video';
    this.b2v_1 = ContentType_init_$Create$('video', '*');
    this.c2v_1 = ContentType_init_$Create$('video', 'mpeg');
    this.d2v_1 = ContentType_init_$Create$('video', 'mp4');
    this.e2v_1 = ContentType_init_$Create$('video', 'ogg');
    this.f2v_1 = ContentType_init_$Create$('video', 'quicktime');
  }
  var Video_instance;
  function Video_getInstance() {
    if (Video_instance == null)
      new Video();
    return Video_instance;
  }
  function ContentType(contentType, contentSubtype, existingContent, parameters) {
    Companion_getInstance_1();
    parameters = parameters === VOID ? emptyList() : parameters;
    HeaderValueWithParameters.call(this, existingContent, parameters);
    this.i2v_1 = contentType;
    this.j2v_1 = contentSubtype;
  }
  protoOf(ContentType).k2v = function (name, value) {
    if (hasParameter(this, name, value))
      return this;
    return new ContentType(this.i2v_1, this.j2v_1, this.l2s_1, plus_1(this.m2s_1, HeaderValueParam_init_$Create$(name, value)));
  };
  protoOf(ContentType).l2v = function (pattern) {
    if (!(pattern.i2v_1 === '*') && !equals_0(pattern.i2v_1, this.i2v_1, true)) {
      return false;
    }
    if (!(pattern.j2v_1 === '*') && !equals_0(pattern.j2v_1, this.j2v_1, true)) {
      return false;
    }
    var _iterator__ex2g4s = pattern.m2s_1.t();
    while (_iterator__ex2g4s.u()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.v();
      var patternName = _destruct__k2r9zo.lg();
      var patternValue = _destruct__k2r9zo.mg();
      var tmp;
      if (patternName === '*') {
        var tmp_0;
        if (patternValue === '*') {
          tmp_0 = true;
        } else {
          var tmp0 = this.m2s_1;
          var tmp$ret$0;
          $l$block_0: {
            // Inline function 'kotlin.collections.any' call
            var tmp_1;
            if (isInterface(tmp0, Collection)) {
              tmp_1 = tmp0.r();
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
            var _iterator__ex2g4s_0 = tmp0.t();
            while (_iterator__ex2g4s_0.u()) {
              var element = _iterator__ex2g4s_0.v();
              if (equals_0(element.p2s_1, patternValue, true)) {
                tmp$ret$0 = true;
                break $l$block_0;
              }
            }
            tmp$ret$0 = false;
          }
          tmp_0 = tmp$ret$0;
        }
        tmp = tmp_0;
      } else {
        var value = this.n2s(patternName);
        tmp = patternValue === '*' ? !(value == null) : equals_0(value, patternValue, true);
      }
      var matches = tmp;
      if (!matches) {
        return false;
      }
    }
    return true;
  };
  protoOf(ContentType).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof ContentType) {
      tmp_1 = equals_0(this.i2v_1, other.i2v_1, true);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals_0(this.j2v_1, other.j2v_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.m2s_1, other.m2s_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ContentType).hashCode = function () {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = this.i2v_1.toLowerCase();
    var result = getStringHashCode(tmp$ret$0);
    var tmp = result;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = this.j2v_1.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$2) | 0) | 0;
    result = result + imul(31, hashCode(this.m2s_1)) | 0;
    return result;
  };
  function charset(_this__u8e3s4) {
    _init_properties_ContentTypes_kt__i9dj34();
    var tmp0_safe_receiver = _this__u8e3s4.n2s('charset');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0;
      try {
        tmp_0 = forName(Charsets_getInstance(), tmp0_safe_receiver);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof IllegalArgumentException) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function withCharset(_this__u8e3s4, charset) {
    _init_properties_ContentTypes_kt__i9dj34();
    return _this__u8e3s4.k2v('charset', get_name(charset));
  }
  function BadContentTypeFormatException(value) {
    Exception_init_$Init$('Bad Content-Type format: ' + value, this);
    captureStack(this, BadContentTypeFormatException);
  }
  var properties_initialized_ContentTypes_kt_1k2nnm;
  function _init_properties_ContentTypes_kt__i9dj34() {
    if (!properties_initialized_ContentTypes_kt_1k2nnm) {
      properties_initialized_ContentTypes_kt_1k2nnm = true;
      textSubTypes = setOf(['json', 'ld+json', 'xml', 'xhtml+xml', 'rss+xml', 'atom+xml', 'x-www-form-urlencoded', 'svg+xml']);
    }
  }
  function get_HeaderFieldValueSeparators() {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    return HeaderFieldValueSeparators;
  }
  var HeaderFieldValueSeparators;
  function append(_this__u8e3s4, name, value) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    _this__u8e3s4.c2n(name, value.toString());
  }
  function isQuoted(_this__u8e3s4) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    if (_this__u8e3s4.length < 2) {
      return false;
    }
    if (!(first(_this__u8e3s4) === _Char___init__impl__6a9atx(34)) || !(last_0(_this__u8e3s4) === _Char___init__impl__6a9atx(34))) {
      return false;
    }
    var startIndex = 1;
    $l$loop: do {
      var index = indexOf(_this__u8e3s4, _Char___init__impl__6a9atx(34), startIndex);
      if (index === get_lastIndex(_this__u8e3s4)) {
        break $l$loop;
      }
      var slashesCount = 0;
      var slashIndex = index - 1 | 0;
      while (charCodeAt(_this__u8e3s4, slashIndex) === _Char___init__impl__6a9atx(92)) {
        slashesCount = slashesCount + 1 | 0;
        slashIndex = slashIndex - 1 | 0;
      }
      if ((slashesCount % 2 | 0) === 0) {
        return false;
      }
      startIndex = index + 1 | 0;
    }
     while (startIndex < _this__u8e3s4.length);
    return true;
  }
  function quote(_this__u8e3s4) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    quoteTo(_this__u8e3s4, this_0);
    return this_0.toString();
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function HeaderValueWithParameters(content, parameters) {
    parameters = parameters === VOID ? emptyList() : parameters;
    this.l2s_1 = content;
    this.m2s_1 = parameters;
  }
  protoOf(HeaderValueWithParameters).n2s = function (name) {
    var inductionVariable = 0;
    var last = get_lastIndex_0(this.m2s_1);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parameter = this.m2s_1.d1(index);
        if (equals_0(parameter.o2s_1, name, true)) {
          return parameter.p2s_1;
        }
      }
       while (!(index === last));
    return null;
  };
  protoOf(HeaderValueWithParameters).toString = function () {
    var tmp;
    if (this.m2s_1.r()) {
      tmp = this.l2s_1;
    } else {
      var tmp_0 = this.l2s_1.length;
      // Inline function 'kotlin.collections.sumOf' call
      var sum = 0;
      var _iterator__ex2g4s = this.m2s_1.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var tmp_1 = sum;
        sum = tmp_1 + ((element.o2s_1.length + element.p2s_1.length | 0) + 3 | 0) | 0;
      }
      var size = tmp_0 + sum | 0;
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$(size);
      this_0.q(this.l2s_1);
      var inductionVariable = 0;
      var last = get_lastIndex_0(this.m2s_1);
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element_0 = this.m2s_1.d1(index);
          this_0.q('; ');
          this_0.q(element_0.o2s_1);
          this_0.q('=');
          // Inline function 'io.ktor.http.escapeIfNeededTo' call
          var this_1 = element_0.p2s_1;
          if (needQuotes(this_1))
            this_0.q(quote(this_1));
          else
            this_0.q(this_1);
        }
         while (!(index === last));
      tmp = this_0.toString();
    }
    return tmp;
  };
  function quoteTo(_this__u8e3s4, out) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    out.q('"');
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = charCodeAt(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var ch = element;
      if (ch === _Char___init__impl__6a9atx(92))
        out.q('\\\\');
      else if (ch === _Char___init__impl__6a9atx(10))
        out.q('\\n');
      else if (ch === _Char___init__impl__6a9atx(13))
        out.q('\\r');
      else if (ch === _Char___init__impl__6a9atx(9))
        out.q('\\t');
      else if (ch === _Char___init__impl__6a9atx(34))
        out.q('\\"');
      else
        out.s(ch);
    }
    out.q('"');
  }
  function needQuotes(_this__u8e3s4) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(_this__u8e3s4) === 0)
      return true;
    if (isQuoted(_this__u8e3s4))
      return false;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = charCodeAt(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (get_HeaderFieldValueSeparators().gk(element))
        return true;
    }
    return false;
  }
  var properties_initialized_HeaderValueWithParameters_kt_yu5xg;
  function _init_properties_HeaderValueWithParameters_kt__z6luvy() {
    if (!properties_initialized_HeaderValueWithParameters_kt_yu5xg) {
      properties_initialized_HeaderValueWithParameters_kt_yu5xg = true;
      HeaderFieldValueSeparators = Companion_instance.y2r('()<>@,;:\\"/[]?={} \t\n\r');
    }
  }
  function HeadersBuilder(size) {
    size = size === VOID ? 8 : size;
    StringValuesBuilderImpl.call(this, true, size);
  }
  protoOf(HeadersBuilder).o2v = function () {
    return new HeadersImpl(this.v2m_1);
  };
  protoOf(HeadersBuilder).w2m = function (name) {
    protoOf(StringValuesBuilderImpl).w2m.call(this, name);
    HttpHeaders_getInstance().o2z(name);
  };
  protoOf(HeadersBuilder).b2n = function (value) {
    protoOf(StringValuesBuilderImpl).b2n.call(this, value);
    HttpHeaders_getInstance().p2z(value);
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.q2z_1 = EmptyHeaders_instance;
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function headersOf(name, value) {
    return new HeadersSingleImpl(name, listOf(value));
  }
  function HeadersImpl(values) {
    values = values === VOID ? emptyMap() : values;
    StringValuesImpl.call(this, true, values);
  }
  protoOf(HeadersImpl).toString = function () {
    return 'Headers ' + toString_0(this.s2m());
  };
  function EmptyHeaders() {
  }
  protoOf(EmptyHeaders).x2m = function () {
    return true;
  };
  protoOf(EmptyHeaders).y2m = function (name) {
    return null;
  };
  protoOf(EmptyHeaders).z2m = function () {
    return emptySet();
  };
  protoOf(EmptyHeaders).s2m = function () {
    return emptySet();
  };
  protoOf(EmptyHeaders).r = function () {
    return true;
  };
  protoOf(EmptyHeaders).toString = function () {
    return 'Headers ' + toString_0(this.s2m());
  };
  var EmptyHeaders_instance;
  function EmptyHeaders_getInstance() {
    return EmptyHeaders_instance;
  }
  function HeadersSingleImpl(name, values) {
    StringValuesSingleImpl.call(this, true, name, values);
  }
  protoOf(HeadersSingleImpl).toString = function () {
    return 'Headers ' + toString_0(this.s2m());
  };
  function HeaderValueParam_init_$Init$(name, value, $this) {
    HeaderValueParam.call($this, name, value, false);
    return $this;
  }
  function HeaderValueParam_init_$Create$(name, value) {
    return HeaderValueParam_init_$Init$(name, value, objectCreate(protoOf(HeaderValueParam)));
  }
  function HeaderValueParam(name, value, escapeValue) {
    this.o2s_1 = name;
    this.p2s_1 = value;
    this.q2s_1 = escapeValue;
  }
  protoOf(HeaderValueParam).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof HeaderValueParam) {
      tmp_0 = equals_0(other.o2s_1, this.o2s_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(other.p2s_1, this.p2s_1, true);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HeaderValueParam).hashCode = function () {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = this.o2s_1.toLowerCase();
    var result = getStringHashCode(tmp$ret$0);
    var tmp = result;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = this.p2s_1.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$2) | 0) | 0;
    return result;
  };
  protoOf(HeaderValueParam).lg = function () {
    return this.o2s_1;
  };
  protoOf(HeaderValueParam).mg = function () {
    return this.p2s_1;
  };
  protoOf(HeaderValueParam).toString = function () {
    return 'HeaderValueParam(name=' + this.o2s_1 + ', value=' + this.p2s_1 + ', escapeValue=' + this.q2s_1 + ')';
  };
  function HeaderValue(value, params) {
    params = params === VOID ? emptyList() : params;
    this.f2s_1 = value;
    this.g2s_1 = params;
    var tmp = this;
    var tmp0 = this.g2s_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (equals_0(element.o2s_1, 'q', true)) {
          tmp$ret$0 = element;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p2s_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_1;
      if (0.0 <= tmp2_safe_receiver ? tmp2_safe_receiver <= 1.0 : false) {
        tmp_1 = tmp2_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp3_elvis_lhs = tmp_0;
    tmp.h2s_1 = tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs;
  }
  protoOf(HeaderValue).toString = function () {
    return 'HeaderValue(value=' + this.f2s_1 + ', params=' + toString_0(this.g2s_1) + ')';
  };
  protoOf(HeaderValue).hashCode = function () {
    var result = getStringHashCode(this.f2s_1);
    result = imul(result, 31) + hashCode(this.g2s_1) | 0;
    return result;
  };
  protoOf(HeaderValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HeaderValue))
      return false;
    if (!(this.f2s_1 === other.f2s_1))
      return false;
    if (!equals(this.g2s_1, other.g2s_1))
      return false;
    return true;
  };
  function parseHeaderValue(text) {
    return parseHeaderValue_0(text, false);
  }
  function parseHeaderValue_0(text, parametersOnly) {
    if (text == null) {
      return emptyList();
    }
    var position = 0;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var items = lazy(tmp, parseHeaderValue$lambda);
    while (position <= get_lastIndex(text)) {
      position = parseHeaderValueItem(text, position, items, parametersOnly);
    }
    return valueOrEmpty(items);
  }
  function parseHeaderValueItem(text, start, items, parametersOnly) {
    var position = start;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var parameters = lazy(tmp, parseHeaderValueItem$lambda);
    var valueEnd = parametersOnly ? position : null;
    while (position <= get_lastIndex(text)) {
      var tmp0_subject = charCodeAt(text, position);
      if (tmp0_subject === _Char___init__impl__6a9atx(44)) {
        var tmp_0 = items.n1();
        var tmp1_elvis_lhs = valueEnd;
        tmp_0.c1(new HeaderValue(subtrim(text, start, tmp1_elvis_lhs == null ? position : tmp1_elvis_lhs), valueOrEmpty(parameters)));
        return position + 1 | 0;
      } else if (tmp0_subject === _Char___init__impl__6a9atx(59)) {
        if (valueEnd == null)
          valueEnd = position;
        position = parseHeaderValueParameter(text, position + 1 | 0, parameters);
      } else {
        var tmp_1;
        if (parametersOnly) {
          tmp_1 = parseHeaderValueParameter(text, position, parameters);
        } else {
          tmp_1 = position + 1 | 0;
        }
        position = tmp_1;
      }
    }
    var tmp_2 = items.n1();
    var tmp2_elvis_lhs = valueEnd;
    tmp_2.c1(new HeaderValue(subtrim(text, start, tmp2_elvis_lhs == null ? position : tmp2_elvis_lhs), valueOrEmpty(parameters)));
    return position;
  }
  function valueOrEmpty(_this__u8e3s4) {
    return _this__u8e3s4.go() ? _this__u8e3s4.n1() : emptyList();
  }
  function subtrim(_this__u8e3s4, start, end) {
    // Inline function 'kotlin.text.trim' call
    var this_0 = substring(_this__u8e3s4, start, end);
    return toString_0(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
  }
  function parseHeaderValueParameter(text, start, parameters) {
    var position = start;
    while (position <= get_lastIndex(text)) {
      var tmp0_subject = charCodeAt(text, position);
      if (tmp0_subject === _Char___init__impl__6a9atx(61)) {
        var _destruct__k2r9zo = parseHeaderValueParameterValue(text, position + 1 | 0);
        var paramEnd = _destruct__k2r9zo.lg();
        var paramValue = _destruct__k2r9zo.mg();
        parseHeaderValueParameter$addParam(parameters, text, start, position, paramValue);
        return paramEnd;
      } else if (tmp0_subject === _Char___init__impl__6a9atx(59) || tmp0_subject === _Char___init__impl__6a9atx(44)) {
        parseHeaderValueParameter$addParam(parameters, text, start, position, '');
        return position;
      } else {
        position = position + 1 | 0;
      }
    }
    parseHeaderValueParameter$addParam(parameters, text, start, position, '');
    return position;
  }
  function parseHeaderValueParameterValue(value, start) {
    if (value.length === start) {
      return to(start, '');
    }
    var position = start;
    if (charCodeAt(value, start) === _Char___init__impl__6a9atx(34)) {
      return parseHeaderValueParameterValueQuoted(value, position + 1 | 0);
    }
    while (position <= get_lastIndex(value)) {
      var tmp0_subject = charCodeAt(value, position);
      if (tmp0_subject === _Char___init__impl__6a9atx(59) || tmp0_subject === _Char___init__impl__6a9atx(44))
        return to(position, subtrim(value, start, position));
      else {
        position = position + 1 | 0;
      }
    }
    return to(position, subtrim(value, start, position));
  }
  function parseHeaderValueParameterValueQuoted(value, start) {
    var position = start;
    var builder = StringBuilder_init_$Create$_0();
    loop: while (position <= get_lastIndex(value)) {
      var currentChar = charCodeAt(value, position);
      if (currentChar === _Char___init__impl__6a9atx(34) && nextIsDelimiterOrEnd(value, position)) {
        return to(position + 1 | 0, builder.toString());
      } else if (currentChar === _Char___init__impl__6a9atx(92) && position < get_lastIndex(value)) {
        builder.s(charCodeAt(value, position + 1 | 0));
        position = position + 2 | 0;
        continue loop;
      }
      builder.s(currentChar);
      position = position + 1 | 0;
    }
    return to(position, substring(value, start - 1 | 0, position));
  }
  function nextIsDelimiterOrEnd(_this__u8e3s4, start) {
    var position = start + 1 | 0;
    loop: while (position < _this__u8e3s4.length && charCodeAt(_this__u8e3s4, position) === _Char___init__impl__6a9atx(32)) {
      position = position + 1 | 0;
    }
    return position === _this__u8e3s4.length || charCodeAt(_this__u8e3s4, position) === _Char___init__impl__6a9atx(59) || charCodeAt(_this__u8e3s4, position) === _Char___init__impl__6a9atx(44);
  }
  function parseHeaderValue$lambda() {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  }
  function parseHeaderValueItem$lambda() {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  }
  function parseHeaderValueParameter$addParam($parameters, text, start, end, value) {
    var name = subtrim(text, start, end);
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(name) === 0) {
      return Unit_instance;
    }
    $parameters.n1().c1(HeaderValueParam_init_$Create$(name, value));
  }
  function get_ILLEGAL_HEADER_NAME_CHARS() {
    _init_properties_HttpHeaders_kt__8vtb1o();
    return ILLEGAL_HEADER_NAME_CHARS;
  }
  var ILLEGAL_HEADER_NAME_CHARS;
  function HttpHeaders() {
    HttpHeaders_instance = this;
    this.p2v_1 = 'Accept';
    this.q2v_1 = 'Accept-Charset';
    this.r2v_1 = 'Accept-Encoding';
    this.s2v_1 = 'Accept-Language';
    this.t2v_1 = 'Accept-Ranges';
    this.u2v_1 = 'Age';
    this.v2v_1 = 'Allow';
    this.w2v_1 = 'ALPN';
    this.x2v_1 = 'Authentication-Info';
    this.y2v_1 = 'Authorization';
    this.z2v_1 = 'Cache-Control';
    this.a2w_1 = 'Connection';
    this.b2w_1 = 'Content-Disposition';
    this.c2w_1 = 'Content-Encoding';
    this.d2w_1 = 'Content-Language';
    this.e2w_1 = 'Content-Length';
    this.f2w_1 = 'Content-Location';
    this.g2w_1 = 'Content-Range';
    this.h2w_1 = 'Content-Type';
    this.i2w_1 = 'Cookie';
    this.j2w_1 = 'DASL';
    this.k2w_1 = 'Date';
    this.l2w_1 = 'DAV';
    this.m2w_1 = 'Depth';
    this.n2w_1 = 'Destination';
    this.o2w_1 = 'ETag';
    this.p2w_1 = 'Expect';
    this.q2w_1 = 'Expires';
    this.r2w_1 = 'From';
    this.s2w_1 = 'Forwarded';
    this.t2w_1 = 'Host';
    this.u2w_1 = 'HTTP2-Settings';
    this.v2w_1 = 'If';
    this.w2w_1 = 'If-Match';
    this.x2w_1 = 'If-Modified-Since';
    this.y2w_1 = 'If-None-Match';
    this.z2w_1 = 'If-Range';
    this.a2x_1 = 'If-Schedule-Tag-Match';
    this.b2x_1 = 'If-Unmodified-Since';
    this.c2x_1 = 'Last-Modified';
    this.d2x_1 = 'Location';
    this.e2x_1 = 'Lock-Token';
    this.f2x_1 = 'Link';
    this.g2x_1 = 'Max-Forwards';
    this.h2x_1 = 'MIME-Version';
    this.i2x_1 = 'Ordering-Type';
    this.j2x_1 = 'Origin';
    this.k2x_1 = 'Overwrite';
    this.l2x_1 = 'Position';
    this.m2x_1 = 'Pragma';
    this.n2x_1 = 'Prefer';
    this.o2x_1 = 'Preference-Applied';
    this.p2x_1 = 'Proxy-Authenticate';
    this.q2x_1 = 'Proxy-Authentication-Info';
    this.r2x_1 = 'Proxy-Authorization';
    this.s2x_1 = 'Public-Key-Pins';
    this.t2x_1 = 'Public-Key-Pins-Report-Only';
    this.u2x_1 = 'Range';
    this.v2x_1 = 'Referer';
    this.w2x_1 = 'Retry-After';
    this.x2x_1 = 'Schedule-Reply';
    this.y2x_1 = 'Schedule-Tag';
    this.z2x_1 = 'Sec-WebSocket-Accept';
    this.a2y_1 = 'Sec-WebSocket-Extensions';
    this.b2y_1 = 'Sec-WebSocket-Key';
    this.c2y_1 = 'Sec-WebSocket-Protocol';
    this.d2y_1 = 'Sec-WebSocket-Version';
    this.e2y_1 = 'Server';
    this.f2y_1 = 'Set-Cookie';
    this.g2y_1 = 'SLUG';
    this.h2y_1 = 'Strict-Transport-Security';
    this.i2y_1 = 'TE';
    this.j2y_1 = 'Timeout';
    this.k2y_1 = 'Trailer';
    this.l2y_1 = 'Transfer-Encoding';
    this.m2y_1 = 'Upgrade';
    this.n2y_1 = 'User-Agent';
    this.o2y_1 = 'Vary';
    this.p2y_1 = 'Via';
    this.q2y_1 = 'Warning';
    this.r2y_1 = 'WWW-Authenticate';
    this.s2y_1 = 'Access-Control-Allow-Origin';
    this.t2y_1 = 'Access-Control-Allow-Methods';
    this.u2y_1 = 'Access-Control-Allow-Credentials';
    this.v2y_1 = 'Access-Control-Allow-Headers';
    this.w2y_1 = 'Access-Control-Request-Method';
    this.x2y_1 = 'Access-Control-Request-Headers';
    this.y2y_1 = 'Access-Control-Expose-Headers';
    this.z2y_1 = 'Access-Control-Max-Age';
    this.a2z_1 = 'X-Http-Method-Override';
    this.b2z_1 = 'X-Forwarded-Host';
    this.c2z_1 = 'X-Forwarded-Server';
    this.d2z_1 = 'X-Forwarded-Proto';
    this.e2z_1 = 'X-Forwarded-For';
    this.f2z_1 = 'X-Forwarded-Port';
    this.g2z_1 = 'X-Request-ID';
    this.h2z_1 = 'X-Correlation-ID';
    this.i2z_1 = 'X-Total-Count';
    this.j2z_1 = 'Last-Event-ID';
    this.k2z_1 = 'TDM-Reservation';
    this.l2z_1 = 'TDM-Policy';
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m2z_1 = ['Transfer-Encoding', 'Upgrade'];
    this.n2z_1 = asList(this.m2z_1);
  }
  protoOf(HttpHeaders).o2z = function (name) {
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(name)) {
      var item = charSequenceGet(name, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      if (get_ILLEGAL_HEADER_NAME_CHARS().gk(item)) {
        throw new IllegalHeaderNameException(name, _unary__edvuaz);
      }
    }
  };
  protoOf(HttpHeaders).p2z = function (value) {
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(value)) {
      var item = charSequenceGet(value, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) < 0 && !(item === _Char___init__impl__6a9atx(9))) {
        throw new IllegalHeaderValueException(value, _unary__edvuaz);
      }
    }
  };
  var HttpHeaders_instance;
  function HttpHeaders_getInstance() {
    if (HttpHeaders_instance == null)
      new HttpHeaders();
    return HttpHeaders_instance;
  }
  function UnsafeHeaderException(header) {
    IllegalArgumentException_init_$Init$('Header(s) ' + header + ' are controlled by the engine and ' + 'cannot be set explicitly', this);
    captureStack(this, UnsafeHeaderException);
  }
  function IllegalHeaderNameException(headerName, position) {
    var tmp = "Header name '" + headerName + "' contains illegal character '" + toString(charCodeAt(headerName, position)) + "'";
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(headerName, position);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    captureStack(this, IllegalHeaderNameException);
    this.r2z_1 = headerName;
    this.s2z_1 = position;
  }
  function IllegalHeaderValueException(headerValue, position) {
    var tmp = "Header value '" + headerValue + "' contains illegal character '" + toString(charCodeAt(headerValue, position)) + "'";
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(headerValue, position);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    captureStack(this, IllegalHeaderValueException);
    this.t2z_1 = headerValue;
    this.u2z_1 = position;
  }
  var properties_initialized_HttpHeaders_kt_3d6wem;
  function _init_properties_HttpHeaders_kt__8vtb1o() {
    if (!properties_initialized_HttpHeaders_kt_3d6wem) {
      properties_initialized_HttpHeaders_kt_3d6wem = true;
      ILLEGAL_HEADER_NAME_CHARS = Companion_instance.x2r(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(0), _Char___init__impl__6a9atx(32))).a2s(Companion_instance.y2r('"(),/:;<=>?@[\\]{}'));
    }
  }
  function contentType(_this__u8e3s4, type) {
    return _this__u8e3s4.v2z().a2n('Content-Type', type.toString());
  }
  function contentLength(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.v2z().td('Content-Length');
    return tmp0_safe_receiver == null ? null : toLongOrNull(tmp0_safe_receiver);
  }
  function contentType_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.v2z().td('Content-Type');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = Companion_getInstance_1().lo(tmp0_safe_receiver);
    }
    return tmp;
  }
  function charset_0(_this__u8e3s4) {
    var tmp0_safe_receiver = contentType_1(_this__u8e3s4);
    return tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
  }
  function contentType_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.v2z().td('Content-Type');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = Companion_getInstance_1().lo(tmp0_safe_receiver);
    }
    return tmp;
  }
  function get_REQUESTS_WITHOUT_BODY() {
    _init_properties_HttpMethod_kt__cbus5z();
    return REQUESTS_WITHOUT_BODY;
  }
  var REQUESTS_WITHOUT_BODY;
  function Companion_4() {
    Companion_instance_4 = this;
    this.w2z_1 = new HttpMethod('GET');
    this.x2z_1 = new HttpMethod('POST');
    this.y2z_1 = new HttpMethod('PUT');
    this.z2z_1 = new HttpMethod('PATCH');
    this.a30_1 = new HttpMethod('DELETE');
    this.b30_1 = new HttpMethod('HEAD');
    this.c30_1 = new HttpMethod('OPTIONS');
    this.d30_1 = new HttpMethod('TRACE');
    this.e30_1 = new HttpMethod('QUERY');
    this.f30_1 = listOf_0([this.w2z_1, this.x2z_1, this.y2z_1, this.z2z_1, this.a30_1, this.b30_1, this.c30_1]);
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function HttpMethod(value) {
    Companion_getInstance_4();
    this.g30_1 = value;
  }
  protoOf(HttpMethod).toString = function () {
    return this.g30_1;
  };
  protoOf(HttpMethod).hashCode = function () {
    return getStringHashCode(this.g30_1);
  };
  protoOf(HttpMethod).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpMethod))
      return false;
    if (!(this.g30_1 === other.g30_1))
      return false;
    return true;
  };
  function get_supportsRequestBody(_this__u8e3s4) {
    _init_properties_HttpMethod_kt__cbus5z();
    return !get_REQUESTS_WITHOUT_BODY().j2(_this__u8e3s4);
  }
  var properties_initialized_HttpMethod_kt_ogor3f;
  function _init_properties_HttpMethod_kt__cbus5z() {
    if (!properties_initialized_HttpMethod_kt_ogor3f) {
      properties_initialized_HttpMethod_kt_ogor3f = true;
      REQUESTS_WITHOUT_BODY = setOf([Companion_getInstance_4().w2z_1, Companion_getInstance_4().b30_1, Companion_getInstance_4().c30_1, Companion_getInstance_4().d30_1]);
    }
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.h30_1 = new HttpProtocolVersion('HTTP', 3, 0);
    this.i30_1 = new HttpProtocolVersion('HTTP', 2, 0);
    this.j30_1 = new HttpProtocolVersion('HTTP', 1, 1);
    this.k30_1 = new HttpProtocolVersion('HTTP', 1, 0);
    this.l30_1 = new HttpProtocolVersion('SPDY', 3, 0);
    this.m30_1 = new HttpProtocolVersion('QUIC', 1, 0);
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function HttpProtocolVersion(name, major, minor) {
    Companion_getInstance_5();
    this.n30_1 = name;
    this.o30_1 = major;
    this.p30_1 = minor;
  }
  protoOf(HttpProtocolVersion).toString = function () {
    return this.n30_1 + '/' + this.o30_1 + '.' + this.p30_1;
  };
  protoOf(HttpProtocolVersion).hashCode = function () {
    var result = getStringHashCode(this.n30_1);
    result = imul(result, 31) + this.o30_1 | 0;
    result = imul(result, 31) + this.p30_1 | 0;
    return result;
  };
  protoOf(HttpProtocolVersion).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpProtocolVersion))
      return false;
    if (!(this.n30_1 === other.n30_1))
      return false;
    if (!(this.o30_1 === other.o30_1))
      return false;
    if (!(this.p30_1 === other.p30_1))
      return false;
    return true;
  };
  function Companion_6() {
    Companion_instance_6 = this;
    this.q30_1 = new HttpStatusCode(100, 'Continue');
    this.r30_1 = new HttpStatusCode(101, 'Switching Protocols');
    this.s30_1 = new HttpStatusCode(102, 'Processing');
    this.t30_1 = new HttpStatusCode(200, 'OK');
    this.u30_1 = new HttpStatusCode(201, 'Created');
    this.v30_1 = new HttpStatusCode(202, 'Accepted');
    this.w30_1 = new HttpStatusCode(203, 'Non-Authoritative Information');
    this.x30_1 = new HttpStatusCode(204, 'No Content');
    this.y30_1 = new HttpStatusCode(205, 'Reset Content');
    this.z30_1 = new HttpStatusCode(206, 'Partial Content');
    this.a31_1 = new HttpStatusCode(207, 'Multi-Status');
    this.b31_1 = new HttpStatusCode(300, 'Multiple Choices');
    this.c31_1 = new HttpStatusCode(301, 'Moved Permanently');
    this.d31_1 = new HttpStatusCode(302, 'Found');
    this.e31_1 = new HttpStatusCode(303, 'See Other');
    this.f31_1 = new HttpStatusCode(304, 'Not Modified');
    this.g31_1 = new HttpStatusCode(305, 'Use Proxy');
    this.h31_1 = new HttpStatusCode(306, 'Switch Proxy');
    this.i31_1 = new HttpStatusCode(307, 'Temporary Redirect');
    this.j31_1 = new HttpStatusCode(308, 'Permanent Redirect');
    this.k31_1 = new HttpStatusCode(400, 'Bad Request');
    this.l31_1 = new HttpStatusCode(401, 'Unauthorized');
    this.m31_1 = new HttpStatusCode(402, 'Payment Required');
    this.n31_1 = new HttpStatusCode(403, 'Forbidden');
    this.o31_1 = new HttpStatusCode(404, 'Not Found');
    this.p31_1 = new HttpStatusCode(405, 'Method Not Allowed');
    this.q31_1 = new HttpStatusCode(406, 'Not Acceptable');
    this.r31_1 = new HttpStatusCode(407, 'Proxy Authentication Required');
    this.s31_1 = new HttpStatusCode(408, 'Request Timeout');
    this.t31_1 = new HttpStatusCode(409, 'Conflict');
    this.u31_1 = new HttpStatusCode(410, 'Gone');
    this.v31_1 = new HttpStatusCode(411, 'Length Required');
    this.w31_1 = new HttpStatusCode(412, 'Precondition Failed');
    this.x31_1 = new HttpStatusCode(413, 'Payload Too Large');
    this.y31_1 = new HttpStatusCode(414, 'Request-URI Too Long');
    this.z31_1 = new HttpStatusCode(415, 'Unsupported Media Type');
    this.a32_1 = new HttpStatusCode(416, 'Requested Range Not Satisfiable');
    this.b32_1 = new HttpStatusCode(417, 'Expectation Failed');
    this.c32_1 = new HttpStatusCode(422, 'Unprocessable Entity');
    this.d32_1 = new HttpStatusCode(423, 'Locked');
    this.e32_1 = new HttpStatusCode(424, 'Failed Dependency');
    this.f32_1 = new HttpStatusCode(425, 'Too Early');
    this.g32_1 = new HttpStatusCode(426, 'Upgrade Required');
    this.h32_1 = new HttpStatusCode(428, 'Precondition Required');
    this.i32_1 = new HttpStatusCode(429, 'Too Many Requests');
    this.j32_1 = new HttpStatusCode(431, 'Request Header Fields Too Large');
    this.k32_1 = new HttpStatusCode(500, 'Internal Server Error');
    this.l32_1 = new HttpStatusCode(501, 'Not Implemented');
    this.m32_1 = new HttpStatusCode(502, 'Bad Gateway');
    this.n32_1 = new HttpStatusCode(503, 'Service Unavailable');
    this.o32_1 = new HttpStatusCode(504, 'Gateway Timeout');
    this.p32_1 = new HttpStatusCode(505, 'HTTP Version Not Supported');
    this.q32_1 = new HttpStatusCode(506, 'Variant Also Negotiates');
    this.r32_1 = new HttpStatusCode(507, 'Insufficient Storage');
    this.s32_1 = allStatusCodes();
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.s32_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp$ret$2 = element.u32_1;
      destination.a3(tmp$ret$2, element);
    }
    tmp.t32_1 = destination;
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function HttpStatusCode(value, description) {
    Companion_getInstance_6();
    this.u32_1 = value;
    this.v32_1 = description;
  }
  protoOf(HttpStatusCode).toString = function () {
    return '' + this.u32_1 + ' ' + this.v32_1;
  };
  protoOf(HttpStatusCode).equals = function (other) {
    var tmp;
    if (other instanceof HttpStatusCode) {
      tmp = other.u32_1 === this.u32_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HttpStatusCode).hashCode = function () {
    return this.u32_1;
  };
  protoOf(HttpStatusCode).w32 = function (other) {
    return this.u32_1 - other.u32_1 | 0;
  };
  protoOf(HttpStatusCode).d = function (other) {
    return this.w32(other instanceof HttpStatusCode ? other : THROW_CCE());
  };
  function allStatusCodes() {
    return listOf_0([Companion_getInstance_6().q30_1, Companion_getInstance_6().r30_1, Companion_getInstance_6().s30_1, Companion_getInstance_6().t30_1, Companion_getInstance_6().u30_1, Companion_getInstance_6().v30_1, Companion_getInstance_6().w30_1, Companion_getInstance_6().x30_1, Companion_getInstance_6().y30_1, Companion_getInstance_6().z30_1, Companion_getInstance_6().a31_1, Companion_getInstance_6().b31_1, Companion_getInstance_6().c31_1, Companion_getInstance_6().d31_1, Companion_getInstance_6().e31_1, Companion_getInstance_6().f31_1, Companion_getInstance_6().g31_1, Companion_getInstance_6().h31_1, Companion_getInstance_6().i31_1, Companion_getInstance_6().j31_1, Companion_getInstance_6().k31_1, Companion_getInstance_6().l31_1, Companion_getInstance_6().m31_1, Companion_getInstance_6().n31_1, Companion_getInstance_6().o31_1, Companion_getInstance_6().p31_1, Companion_getInstance_6().q31_1, Companion_getInstance_6().r31_1, Companion_getInstance_6().s31_1, Companion_getInstance_6().t31_1, Companion_getInstance_6().u31_1, Companion_getInstance_6().v31_1, Companion_getInstance_6().w31_1, Companion_getInstance_6().h32_1, Companion_getInstance_6().x31_1, Companion_getInstance_6().y31_1, Companion_getInstance_6().z31_1, Companion_getInstance_6().a32_1, Companion_getInstance_6().b32_1, Companion_getInstance_6().c32_1, Companion_getInstance_6().d32_1, Companion_getInstance_6().e32_1, Companion_getInstance_6().f32_1, Companion_getInstance_6().g32_1, Companion_getInstance_6().i32_1, Companion_getInstance_6().j32_1, Companion_getInstance_6().k32_1, Companion_getInstance_6().l32_1, Companion_getInstance_6().m32_1, Companion_getInstance_6().n32_1, Companion_getInstance_6().o32_1, Companion_getInstance_6().p32_1, Companion_getInstance_6().q32_1, Companion_getInstance_6().r32_1]);
  }
  function formUrlEncode(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = _this__u8e3s4.s2m();
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.map' call
      var this_0 = element.n1();
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s_0 = this_0.t();
      while (_iterator__ex2g4s_0.u()) {
        var item = _iterator__ex2g4s_0.v();
        var tmp$ret$5 = to(element.m1(), item);
        destination_0.c1(tmp$ret$5);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return formUrlEncode_0(destination);
  }
  function formUrlEncode_0(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    formUrlEncodeTo(_this__u8e3s4, this_0);
    return this_0.toString();
  }
  function formUrlEncodeTo(_this__u8e3s4, out) {
    joinTo(_this__u8e3s4, out, '&', VOID, VOID, VOID, VOID, formUrlEncodeTo$lambda);
  }
  function formUrlEncodeTo$lambda(it) {
    var key = encodeURLParameter(it.jg_1, true);
    var tmp;
    if (it.kg_1 == null) {
      tmp = key;
    } else {
      var value = encodeURLParameterValue(toString_1(it.kg_1));
      tmp = key + '=' + value;
    }
    return tmp;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.x32_1 = EmptyParameters_instance;
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Parameters() {
  }
  function EmptyParameters() {
  }
  protoOf(EmptyParameters).x2m = function () {
    return true;
  };
  protoOf(EmptyParameters).y2m = function (name) {
    return null;
  };
  protoOf(EmptyParameters).z2m = function () {
    return emptySet();
  };
  protoOf(EmptyParameters).s2m = function () {
    return emptySet();
  };
  protoOf(EmptyParameters).r = function () {
    return true;
  };
  protoOf(EmptyParameters).toString = function () {
    return 'Parameters ' + toString_0(this.s2m());
  };
  protoOf(EmptyParameters).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Parameters) : false) {
      tmp = other.r();
    } else {
      tmp = false;
    }
    return tmp;
  };
  var EmptyParameters_instance;
  function EmptyParameters_getInstance() {
    return EmptyParameters_instance;
  }
  function ParametersBuilder(size) {
    size = size === VOID ? 8 : size;
    return new ParametersBuilderImpl(size);
  }
  function ParametersBuilderImpl(size) {
    size = size === VOID ? 8 : size;
    StringValuesBuilderImpl.call(this, true, size);
  }
  protoOf(ParametersBuilderImpl).o2v = function () {
    return new ParametersImpl(this.v2m_1);
  };
  function ParametersImpl(values) {
    values = values === VOID ? emptyMap() : values;
    StringValuesImpl.call(this, true, values);
  }
  protoOf(ParametersImpl).toString = function () {
    return 'Parameters ' + toString_0(this.s2m());
  };
  function parseQueryString(query, startIndex, limit, decode) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    limit = limit === VOID ? 1000 : limit;
    decode = decode === VOID ? true : decode;
    var tmp;
    if (startIndex > get_lastIndex(query)) {
      tmp = Companion_getInstance_7().x32_1;
    } else {
      // Inline function 'io.ktor.http.Companion.build' call
      Companion_getInstance_7();
      // Inline function 'kotlin.apply' call
      var this_0 = ParametersBuilder();
      parse(this_0, query, startIndex, limit, decode);
      tmp = this_0.o2v();
    }
    return tmp;
  }
  function parse(_this__u8e3s4, query, startIndex, limit, decode) {
    var count = 0;
    var nameIndex = startIndex;
    var equalIndex = -1;
    var inductionVariable = startIndex;
    var last = get_lastIndex(query);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (count === limit) {
          return Unit_instance;
        }
        var tmp0_subject = charCodeAt(query, index);
        if (tmp0_subject === _Char___init__impl__6a9atx(38)) {
          appendParam(_this__u8e3s4, query, nameIndex, equalIndex, index, decode);
          nameIndex = index + 1 | 0;
          equalIndex = -1;
          count = count + 1 | 0;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(61)) {
          if (equalIndex === -1) {
            equalIndex = index;
          }
        }
      }
       while (!(index === last));
    if (count === limit) {
      return Unit_instance;
    }
    appendParam(_this__u8e3s4, query, nameIndex, equalIndex, query.length, decode);
  }
  function appendParam(_this__u8e3s4, query, nameIndex, equalIndex, endIndex, decode) {
    if (equalIndex === -1) {
      var spaceNameIndex = trimStart(nameIndex, endIndex, query);
      var spaceEndIndex = trimEnd(spaceNameIndex, endIndex, query);
      if (spaceEndIndex > spaceNameIndex) {
        var name = decode ? decodeURLQueryComponent(query, spaceNameIndex, spaceEndIndex) : substring(query, spaceNameIndex, spaceEndIndex);
        _this__u8e3s4.t2m(name, emptyList());
      }
      return Unit_instance;
    }
    var spaceNameIndex_0 = trimStart(nameIndex, equalIndex, query);
    var spaceEqualIndex = trimEnd(spaceNameIndex_0, equalIndex, query);
    if (spaceEqualIndex > spaceNameIndex_0) {
      var name_0 = decode ? decodeURLQueryComponent(query, spaceNameIndex_0, spaceEqualIndex) : substring(query, spaceNameIndex_0, spaceEqualIndex);
      var spaceValueIndex = trimStart(equalIndex + 1 | 0, endIndex, query);
      var spaceEndIndex_0 = trimEnd(spaceValueIndex, endIndex, query);
      var value = decode ? decodeURLQueryComponent(query, spaceValueIndex, spaceEndIndex_0, true) : substring(query, spaceValueIndex, spaceEndIndex_0);
      _this__u8e3s4.c2n(name_0, value);
    }
  }
  function trimStart(start, end, query) {
    var spaceIndex = start;
    while (spaceIndex < end && isWhitespace(charSequenceGet(query, spaceIndex))) {
      spaceIndex = spaceIndex + 1 | 0;
    }
    return spaceIndex;
  }
  function trimEnd(start, end, text) {
    var spaceIndex = end;
    while (spaceIndex > start && isWhitespace(charSequenceGet(text, spaceIndex - 1 | 0))) {
      spaceIndex = spaceIndex - 1 | 0;
    }
    return spaceIndex;
  }
  function applyOrigin($this) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = $this.a33_1;
    if (charSequenceLength(this_0) > 0) {
      tmp = true;
    } else {
      tmp = $this.m33().k33_1 === 'file';
    }
    if (tmp)
      return Unit_instance;
    $this.a33_1 = Companion_getInstance_8().g34_1.n33_1;
    if ($this.d33_1 == null)
      $this.d33_1 = Companion_getInstance_8().g34_1.y33_1;
    if ($this.c33_1 === 0) {
      $this.i34(Companion_getInstance_8().g34_1.o33_1);
    }
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.g34_1 = Url(get_origin(this));
    this.h34_1 = 256;
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function URLBuilder(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery) {
    Companion_getInstance_8();
    protocol = protocol === VOID ? null : protocol;
    host = host === VOID ? '' : host;
    port = port === VOID ? 0 : port;
    user = user === VOID ? null : user;
    password = password === VOID ? null : password;
    pathSegments = pathSegments === VOID ? emptyList() : pathSegments;
    parameters = parameters === VOID ? Companion_getInstance_7().x32_1 : parameters;
    fragment = fragment === VOID ? '' : fragment;
    trailingQuery = trailingQuery === VOID ? false : trailingQuery;
    this.a33_1 = host;
    this.b33_1 = trailingQuery;
    this.c33_1 = port;
    this.d33_1 = protocol;
    var tmp = this;
    tmp.e33_1 = user == null ? null : encodeURLParameter(user);
    var tmp_0 = this;
    tmp_0.f33_1 = password == null ? null : encodeURLParameter(password);
    this.g33_1 = encodeURLQueryComponent(fragment);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(pathSegments, 10));
    var _iterator__ex2g4s = pathSegments.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = encodeURLPathPart(item);
      destination.c1(tmp$ret$2);
    }
    tmp_1.h33_1 = destination;
    this.i33_1 = encodeParameters(parameters);
    this.j33_1 = new UrlDecodedParametersBuilder(this.i33_1);
  }
  protoOf(URLBuilder).i34 = function (value) {
    // Inline function 'kotlin.require' call
    if (!(0 <= value ? value <= 65535 : false)) {
      var message = 'Port must be between 0 and 65535, or 0 if not set. Provided: ' + value;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.c33_1 = value;
  };
  protoOf(URLBuilder).j34 = function (value) {
    this.d33_1 = value;
  };
  protoOf(URLBuilder).m33 = function () {
    var tmp0_elvis_lhs = this.d33_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_9().k34_1 : tmp0_elvis_lhs;
  };
  protoOf(URLBuilder).q34 = function (value) {
    var tmp = this;
    tmp.e33_1 = value == null ? null : encodeURLParameter(value);
  };
  protoOf(URLBuilder).r34 = function () {
    var tmp0_safe_receiver = this.e33_1;
    return tmp0_safe_receiver == null ? null : decodeURLPart(tmp0_safe_receiver);
  };
  protoOf(URLBuilder).s34 = function () {
    var tmp0_safe_receiver = this.f33_1;
    return tmp0_safe_receiver == null ? null : decodeURLPart(tmp0_safe_receiver);
  };
  protoOf(URLBuilder).t34 = function () {
    return decodeURLQueryComponent(this.g33_1);
  };
  protoOf(URLBuilder).u34 = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.h33_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = decodeURLPart(item);
      destination.c1(tmp$ret$2);
    }
    return destination;
  };
  protoOf(URLBuilder).v34 = function (value) {
    this.i33_1 = value;
    this.j33_1 = new UrlDecodedParametersBuilder(value);
  };
  protoOf(URLBuilder).w34 = function () {
    applyOrigin(this);
    return appendTo(this, StringBuilder_init_$Create$(256)).toString();
  };
  protoOf(URLBuilder).toString = function () {
    return appendTo(this, StringBuilder_init_$Create$(256)).toString();
  };
  protoOf(URLBuilder).o2v = function () {
    applyOrigin(this);
    return new Url_0(this.d33_1, this.a33_1, this.c33_1, this.u34(), this.j33_1.o2v(), this.t34(), this.r34(), this.s34(), this.b33_1, this.w34());
  };
  function get_authority(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.q(get_encodedUserAndPassword(_this__u8e3s4));
    this_0.q(_this__u8e3s4.a33_1);
    if (!(_this__u8e3s4.c33_1 === 0) && !(_this__u8e3s4.c33_1 === _this__u8e3s4.m33().l33_1)) {
      this_0.q(':');
      this_0.q(_this__u8e3s4.c33_1.toString());
    }
    return this_0.toString();
  }
  function set(_this__u8e3s4, scheme, host, port, path, block) {
    scheme = scheme === VOID ? null : scheme;
    host = host === VOID ? null : host;
    port = port === VOID ? null : port;
    path = path === VOID ? null : path;
    var tmp;
    if (block === VOID) {
      tmp = set$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    if (!(scheme == null)) {
      _this__u8e3s4.j34(Companion_getInstance_9().x34(scheme));
    }
    if (!(host == null))
      _this__u8e3s4.a33_1 = host;
    if (!(port == null)) {
      _this__u8e3s4.i34(port);
    }
    if (!(path == null)) {
      set_encodedPath(_this__u8e3s4, path);
    }
    block(_this__u8e3s4);
  }
  function appendTo(_this__u8e3s4, out) {
    out.b1(_this__u8e3s4.m33().k33_1);
    switch (_this__u8e3s4.m33().k33_1) {
      case 'file':
        appendFile(out, _this__u8e3s4.a33_1, get_encodedPath(_this__u8e3s4));
        appendUrlFullPath(out, '', _this__u8e3s4.i33_1, _this__u8e3s4.b33_1);
        break;
      case 'mailto':
        appendMailto(out, get_encodedUserAndPassword(_this__u8e3s4), _this__u8e3s4.a33_1);
        return out;
      case 'about':
        appendPayload(out, _this__u8e3s4.a33_1);
        return out;
      case 'tel':
        appendPayload(out, _this__u8e3s4.a33_1);
        return out;
      case 'data':
        appendPayload(out, _this__u8e3s4.a33_1);
        return out;
      default:
        out.b1('://');
        out.b1(get_authority(_this__u8e3s4));
        appendUrlFullPath(out, get_encodedPath(_this__u8e3s4), _this__u8e3s4.i33_1, _this__u8e3s4.b33_1);
        break;
    }
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.g33_1;
    if (charSequenceLength(this_0) > 0) {
      out.s(_Char___init__impl__6a9atx(35));
      out.b1(_this__u8e3s4.g33_1);
    }
    return out;
  }
  function get_encodedUserAndPassword(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    appendUserAndPassword(this_0, _this__u8e3s4.e33_1, _this__u8e3s4.f33_1);
    return this_0.toString();
  }
  function set_encodedPath(_this__u8e3s4, value) {
    _this__u8e3s4.h33_1 = isBlank(value) ? emptyList() : value === '/' ? get_ROOT_PATH() : toMutableList(split(value, charArrayOf([_Char___init__impl__6a9atx(47)])));
  }
  function get_encodedPath(_this__u8e3s4) {
    return joinPath(_this__u8e3s4.h33_1);
  }
  function appendFile(_this__u8e3s4, host, encodedPath) {
    _this__u8e3s4.b1('://');
    _this__u8e3s4.b1(host);
    if (!startsWith_0(encodedPath, _Char___init__impl__6a9atx(47))) {
      _this__u8e3s4.s(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.b1(encodedPath);
  }
  function appendMailto(_this__u8e3s4, encodedUser, host) {
    _this__u8e3s4.b1(':');
    _this__u8e3s4.b1(encodedUser);
    _this__u8e3s4.b1(host);
  }
  function appendPayload(_this__u8e3s4, host) {
    _this__u8e3s4.b1(':');
    _this__u8e3s4.b1(host);
  }
  function joinPath(_this__u8e3s4) {
    if (_this__u8e3s4.r())
      return '';
    if (_this__u8e3s4.e1() === 1) {
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = first_0(_this__u8e3s4);
      if (charSequenceLength(this_0) === 0)
        return '/';
      return first_0(_this__u8e3s4);
    }
    return joinToString(_this__u8e3s4, '/');
  }
  function set$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function get_ROOT_PATH() {
    _init_properties_URLParser_kt__sf11to();
    return ROOT_PATH;
  }
  var ROOT_PATH;
  function takeFrom(_this__u8e3s4, urlString) {
    _init_properties_URLParser_kt__sf11to();
    if (isBlank(urlString))
      return _this__u8e3s4;
    var tmp;
    try {
      tmp = takeFromUnsafe(_this__u8e3s4, urlString);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        throw new URLParserException(urlString, cause);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function takeFromUnsafe(_this__u8e3s4, urlString) {
    _init_properties_URLParser_kt__sf11to();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(urlString) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var it = charSequenceGet(urlString, index);
          if (!isWhitespace(it)) {
            tmp$ret$0 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = -1;
    }
    var startIndex = tmp$ret$0;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable_0 = charSequenceLength(urlString) - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          var it_0 = charSequenceGet(urlString, index_0);
          if (!isWhitespace(it_0)) {
            tmp$ret$2 = index_0;
            break $l$block_0;
          }
        }
         while (0 <= inductionVariable_0);
      tmp$ret$2 = -1;
    }
    var endIndex = tmp$ret$2 + 1 | 0;
    var schemeLength = findScheme(urlString, startIndex, endIndex);
    if (schemeLength > 0) {
      var scheme = substring(urlString, startIndex, startIndex + schemeLength | 0);
      _this__u8e3s4.j34(Companion_getInstance_9().x34(scheme));
      startIndex = startIndex + (schemeLength + 1 | 0) | 0;
    }
    if (_this__u8e3s4.m33().k33_1 === 'data') {
      _this__u8e3s4.a33_1 = substring(urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    var slashCount = count(urlString, startIndex, endIndex, _Char___init__impl__6a9atx(47));
    startIndex = startIndex + slashCount | 0;
    if (_this__u8e3s4.m33().k33_1 === 'file') {
      parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.m33().k33_1 === 'mailto') {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!(slashCount === 0)) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      parseMailto(_this__u8e3s4, urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.m33().k33_1 === 'about') {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!(slashCount === 0)) {
        var message_0 = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString_0(message_0));
      }
      _this__u8e3s4.a33_1 = substring(urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.m33().k33_1 === 'tel') {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!(slashCount === 0)) {
        var message_1 = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString_0(message_1));
      }
      _this__u8e3s4.a33_1 = substring(urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    if (slashCount >= 2) {
      loop: while (true) {
        // Inline function 'kotlin.takeIf' call
        var this_0 = indexOfAny(urlString, toCharArray('@/\\?#'), startIndex);
        var tmp;
        if (this_0 > 0) {
          tmp = this_0;
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var delimiter = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
        if (delimiter < endIndex && charCodeAt(urlString, delimiter) === _Char___init__impl__6a9atx(64)) {
          var passwordIndex = indexOfColonInHostPort(urlString, startIndex, delimiter);
          if (!(passwordIndex === -1)) {
            _this__u8e3s4.e33_1 = substring(urlString, startIndex, passwordIndex);
            _this__u8e3s4.f33_1 = substring(urlString, passwordIndex + 1 | 0, delimiter);
          } else {
            _this__u8e3s4.e33_1 = substring(urlString, startIndex, delimiter);
          }
          startIndex = delimiter + 1 | 0;
        } else {
          fillHost(_this__u8e3s4, urlString, startIndex, delimiter);
          startIndex = delimiter;
          break loop;
        }
      }
    }
    if (startIndex >= endIndex) {
      _this__u8e3s4.h33_1 = charCodeAt(urlString, endIndex - 1 | 0) === _Char___init__impl__6a9atx(47) ? get_ROOT_PATH() : emptyList();
      return _this__u8e3s4;
    }
    // Inline function 'kotlin.takeIf' call
    var this_1 = indexOfAny(urlString, toCharArray('?#'), startIndex);
    var tmp_0;
    if (this_1 >= 0) {
      tmp_0 = this_1;
    } else {
      tmp_0 = null;
    }
    var tmp1_elvis_lhs = tmp_0;
    var pathEnd = tmp1_elvis_lhs == null ? endIndex : tmp1_elvis_lhs;
    if (pathEnd > startIndex) {
      var tmp_1 = _this__u8e3s4;
      var tmp_2;
      if (slashCount === 0) {
        tmp_2 = dropLast(_this__u8e3s4.h33_1, 1);
      } else {
        tmp_2 = emptyList();
      }
      tmp_1.h33_1 = tmp_2;
      var encodedPath = encodeURLPath(substring(urlString, startIndex, pathEnd), VOID, false);
      var tmp_3;
      var tmp_4;
      if (_this__u8e3s4.h33_1.e1() === 1) {
        // Inline function 'kotlin.text.isEmpty' call
        var this_2 = first_0(_this__u8e3s4.h33_1);
        tmp_4 = charSequenceLength(this_2) === 0;
      } else {
        tmp_4 = false;
      }
      if (tmp_4) {
        tmp_3 = emptyList();
      } else {
        tmp_3 = _this__u8e3s4.h33_1;
      }
      var basePath = tmp_3;
      var encodedChunks = encodedPath === '/' ? get_ROOT_PATH() : split(encodedPath, charArrayOf([_Char___init__impl__6a9atx(47)]));
      var relativePath = plus_0(slashCount === 1 ? get_ROOT_PATH() : emptyList(), encodedChunks);
      _this__u8e3s4.h33_1 = plus_0(basePath, relativePath);
      startIndex = pathEnd;
    } else if (slashCount === 0 && _this__u8e3s4.h33_1.r() && charCodeAt(urlString, startIndex) === _Char___init__impl__6a9atx(63)) {
      _this__u8e3s4.h33_1 = get_ROOT_PATH();
    } else if (slashCount > 0) {
      _this__u8e3s4.h33_1 = emptyList();
    }
    if (startIndex < endIndex && charCodeAt(urlString, startIndex) === _Char___init__impl__6a9atx(63)) {
      startIndex = parseQuery(_this__u8e3s4, urlString, startIndex, endIndex);
    }
    parseFragment(_this__u8e3s4, urlString, startIndex, endIndex);
    return _this__u8e3s4;
  }
  function URLParserException(urlString, cause) {
    IllegalStateException_init_$Init$('Fail to parse url: ' + urlString, cause, this);
    captureStack(this, URLParserException);
  }
  function findScheme(urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    var current = startIndex;
    var incorrectSchemePosition = -1;
    var firstChar = charCodeAt(urlString, current);
    if (!(_Char___init__impl__6a9atx(97) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(122) : false) && !(_Char___init__impl__6a9atx(65) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(90) : false)) {
      incorrectSchemePosition = current;
    }
    while (current < endIndex) {
      var char = charCodeAt(urlString, current);
      if (char === _Char___init__impl__6a9atx(58)) {
        if (!(incorrectSchemePosition === -1)) {
          throw IllegalArgumentException_init_$Create$('Illegal character in scheme at position ' + incorrectSchemePosition);
        }
        return current - startIndex | 0;
      }
      if (char === _Char___init__impl__6a9atx(47) || char === _Char___init__impl__6a9atx(63) || char === _Char___init__impl__6a9atx(35))
        return -1;
      if (incorrectSchemePosition === -1 && !(_Char___init__impl__6a9atx(97) <= char ? char <= _Char___init__impl__6a9atx(122) : false) && !(_Char___init__impl__6a9atx(65) <= char ? char <= _Char___init__impl__6a9atx(90) : false) && !(_Char___init__impl__6a9atx(48) <= char ? char <= _Char___init__impl__6a9atx(57) : false) && !(char === _Char___init__impl__6a9atx(46)) && !(char === _Char___init__impl__6a9atx(43)) && !(char === _Char___init__impl__6a9atx(45))) {
        incorrectSchemePosition = current;
      }
      current = current + 1 | 0;
    }
    return -1;
  }
  function count(urlString, startIndex, endIndex, char) {
    _init_properties_URLParser_kt__sf11to();
    var result = 0;
    $l$loop: while ((startIndex + result | 0) < endIndex && charCodeAt(urlString, startIndex + result | 0) === char) {
      result = result + 1 | 0;
    }
    return result;
  }
  function parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount) {
    _init_properties_URLParser_kt__sf11to();
    var tmp;
    switch (slashCount) {
      case 1:
        _this__u8e3s4.a33_1 = '';
        tmp = startIndex;
        break;
      case 2:
        // Inline function 'kotlin.takeIf' call

        var this_0 = indexOfAny(urlString, toCharArray('/?#'), startIndex);
        var tmp_0;
        if (startIndex <= this_0 ? this_0 < endIndex : false) {
          tmp_0 = this_0;
        } else {
          tmp_0 = null;
        }

        var tmp1_elvis_lhs = tmp_0;
        var hostEnd = tmp1_elvis_lhs == null ? endIndex : tmp1_elvis_lhs;
        _this__u8e3s4.a33_1 = substring(urlString, startIndex, hostEnd);
        tmp = hostEnd;
        break;
      case 3:
        _this__u8e3s4.a33_1 = '';
        tmp = startIndex;
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Invalid file url: ' + urlString);
    }
    var pathStart = tmp;
    // Inline function 'kotlin.takeIf' call
    var this_1 = indexOfAny(urlString, toCharArray('?#'), pathStart);
    var tmp_1;
    if (this_1 >= 0) {
      tmp_1 = this_1;
    } else {
      tmp_1 = null;
    }
    var tmp2_elvis_lhs = tmp_1;
    var pathEnd = tmp2_elvis_lhs == null ? endIndex : tmp2_elvis_lhs;
    var path = encodeURLPath(substring(urlString, pathStart, pathEnd), VOID, false);
    set_encodedPath(_this__u8e3s4, slashCount === 3 ? '/' + path : path);
    var nextPartStart = pathEnd;
    if (nextPartStart < endIndex && charCodeAt(urlString, nextPartStart) === _Char___init__impl__6a9atx(63)) {
      nextPartStart = parseQuery(_this__u8e3s4, urlString, nextPartStart, endIndex);
    }
    parseFragment(_this__u8e3s4, urlString, nextPartStart, endIndex);
  }
  function parseMailto(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    var delimiter = indexOf_0(urlString, '@', startIndex);
    if (delimiter === -1) {
      throw IllegalArgumentException_init_$Create$('Invalid mailto url: ' + urlString + ", it should contain '@'.");
    }
    _this__u8e3s4.q34(decodeURLPart(substring(urlString, startIndex, delimiter)));
    _this__u8e3s4.a33_1 = substring(urlString, delimiter + 1 | 0, endIndex);
  }
  function indexOfColonInHostPort(_this__u8e3s4, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    var skip = false;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0_subject = charCodeAt(_this__u8e3s4, index);
        if (tmp0_subject === _Char___init__impl__6a9atx(91))
          skip = true;
        else if (tmp0_subject === _Char___init__impl__6a9atx(93))
          skip = false;
        else if (tmp0_subject === _Char___init__impl__6a9atx(58))
          if (!skip)
            return index;
      }
       while (inductionVariable < endIndex);
    return -1;
  }
  function fillHost(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    // Inline function 'kotlin.takeIf' call
    var this_0 = indexOfColonInHostPort(urlString, startIndex, endIndex);
    var tmp;
    if (this_0 > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var colonIndex = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var hostValue = substring(urlString, startIndex, colonIndex);
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.text.none' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(hostValue)) {
        var element = charSequenceGet(hostValue, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (isWhitespace(element)) {
          tmp$ret$2 = false;
          break $l$block;
        }
      }
      tmp$ret$2 = true;
    }
    // Inline function 'kotlin.require' call
    if (!tmp$ret$2) {
      var message = 'Host cannot contain whitespace characters: "' + hostValue + '"';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    _this__u8e3s4.a33_1 = hostValue;
    var tmp_0;
    if ((colonIndex + 1 | 0) < endIndex) {
      tmp_0 = toInt(substring(urlString, colonIndex + 1 | 0, endIndex));
    } else {
      tmp_0 = 0;
    }
    _this__u8e3s4.i34(tmp_0);
  }
  function parseQuery(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    if ((startIndex + 1 | 0) === endIndex) {
      _this__u8e3s4.b33_1 = true;
      return endIndex;
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = indexOf(urlString, _Char___init__impl__6a9atx(35), startIndex + 1 | 0);
    var tmp;
    if (this_0 > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var fragmentStart = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var rawParameters = parseQueryString(substring(urlString, startIndex + 1 | 0, fragmentStart), VOID, VOID, false);
    rawParameters.e2n(parseQuery$lambda(_this__u8e3s4));
    return fragmentStart;
  }
  function parseFragment(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    if (startIndex < endIndex && charCodeAt(urlString, startIndex) === _Char___init__impl__6a9atx(35)) {
      _this__u8e3s4.g33_1 = substring(urlString, startIndex + 1 | 0, endIndex);
    }
  }
  function parseQuery$lambda($this_parseQuery) {
    return function (key, values) {
      $this_parseQuery.i33_1.t2m(key, values);
      return Unit_instance;
    };
  }
  var properties_initialized_URLParser_kt_hd1g6a;
  function _init_properties_URLParser_kt__sf11to() {
    if (!properties_initialized_URLParser_kt_hd1g6a) {
      properties_initialized_URLParser_kt_hd1g6a = true;
      ROOT_PATH = listOf('');
    }
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.k34_1 = new URLProtocol('http', 80);
    this.l34_1 = new URLProtocol('https', 443);
    this.m34_1 = new URLProtocol('ws', 80);
    this.n34_1 = new URLProtocol('wss', 443);
    this.o34_1 = new URLProtocol('socks', 1080);
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = listOf_0([this.k34_1, this.l34_1, this.m34_1, this.n34_1, this.o34_1]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp$ret$2 = element.k33_1;
      destination.a3(tmp$ret$2, element);
    }
    tmp.p34_1 = destination;
  }
  protoOf(Companion_9).x34 = function (name) {
    // Inline function 'kotlin.let' call
    var it = toLowerCasePreservingASCIIRules(name);
    var tmp0_elvis_lhs = Companion_getInstance_9().p34_1.t2(it);
    return tmp0_elvis_lhs == null ? new URLProtocol(it, 0) : tmp0_elvis_lhs;
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function URLProtocol(name, defaultPort) {
    Companion_getInstance_9();
    this.k33_1 = name;
    this.l33_1 = defaultPort;
    var tmp0 = this.k33_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(tmp0)) {
        var element = charSequenceGet(tmp0, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (!isLowerCase(element)) {
          tmp$ret$0 = false;
          break $l$block;
        }
      }
      tmp$ret$0 = true;
    }
    // Inline function 'kotlin.require' call
    if (!tmp$ret$0) {
      var message = 'All characters should be lower case';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(URLProtocol).toString = function () {
    return 'URLProtocol(name=' + this.k33_1 + ', defaultPort=' + this.l33_1 + ')';
  };
  protoOf(URLProtocol).hashCode = function () {
    var result = getStringHashCode(this.k33_1);
    result = imul(result, 31) + this.l33_1 | 0;
    return result;
  };
  protoOf(URLProtocol).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof URLProtocol))
      return false;
    if (!(this.k33_1 === other.k33_1))
      return false;
    if (!(this.l33_1 === other.l33_1))
      return false;
    return true;
  };
  function isSecure(_this__u8e3s4) {
    return _this__u8e3s4.k33_1 === 'https' || _this__u8e3s4.k33_1 === 'wss';
  }
  function isWebsocket(_this__u8e3s4) {
    return _this__u8e3s4.k33_1 === 'ws' || _this__u8e3s4.k33_1 === 'wss';
  }
  function takeFrom_0(_this__u8e3s4, url) {
    _this__u8e3s4.d33_1 = url.d33_1;
    _this__u8e3s4.a33_1 = url.a33_1;
    _this__u8e3s4.i34(url.c33_1);
    _this__u8e3s4.h33_1 = url.h33_1;
    _this__u8e3s4.e33_1 = url.e33_1;
    _this__u8e3s4.f33_1 = url.f33_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ParametersBuilder();
    appendAll(this_0, url.i33_1);
    _this__u8e3s4.v34(this_0);
    _this__u8e3s4.g33_1 = url.g33_1;
    _this__u8e3s4.b33_1 = url.b33_1;
    return _this__u8e3s4;
  }
  function URLBuilder_0(urlString) {
    return takeFrom(new URLBuilder(), urlString);
  }
  function Url(urlString) {
    return URLBuilder_0(urlString).o2v();
  }
  function get_hostWithPort(_this__u8e3s4) {
    return _this__u8e3s4.n33_1 + ':' + _this__u8e3s4.y34();
  }
  function appendUrlFullPath(_this__u8e3s4, encodedPath, encodedQueryParameters, trailingQuery) {
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(encodedPath)) {
      tmp = !startsWith_1(encodedPath, '/');
    } else {
      tmp = false;
    }
    if (tmp) {
      _this__u8e3s4.s(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.b1(encodedPath);
    if (!encodedQueryParameters.r() || trailingQuery) {
      _this__u8e3s4.b1('?');
    }
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = encodedQueryParameters.s2m();
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var key = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.n1();
      var tmp_0;
      if (value.r()) {
        tmp_0 = listOf(to(key, null));
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(value, 10));
        var _iterator__ex2g4s_0 = value.t();
        while (_iterator__ex2g4s_0.u()) {
          var item = _iterator__ex2g4s_0.v();
          var tmp$ret$8 = to(key, item);
          destination_0.c1(tmp$ret$8);
        }
        tmp_0 = destination_0;
      }
      var list = tmp_0;
      addAll(destination, list);
    }
    var tmp_1 = destination;
    joinTo(tmp_1, _this__u8e3s4, '&', VOID, VOID, VOID, VOID, appendUrlFullPath$lambda);
  }
  function appendUserAndPassword(_this__u8e3s4, encodedUser, encodedPassword) {
    if (encodedUser == null) {
      return Unit_instance;
    }
    _this__u8e3s4.q(encodedUser);
    if (!(encodedPassword == null)) {
      _this__u8e3s4.s(_Char___init__impl__6a9atx(58));
      _this__u8e3s4.q(encodedPassword);
    }
    _this__u8e3s4.q('@');
  }
  function get_hostWithPortIfSpecified(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.o33_1;
    return tmp0_subject === 0 || tmp0_subject === _this__u8e3s4.z33_1.l33_1 ? _this__u8e3s4.n33_1 : get_hostWithPort(_this__u8e3s4);
  }
  function appendUrlFullPath$lambda(it) {
    var key = it.jg_1;
    var tmp;
    if (it.kg_1 == null) {
      tmp = key;
    } else {
      var value = toString_1(it.kg_1);
      tmp = key + '=' + value;
    }
    return tmp;
  }
  function Companion_10() {
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function Url$segments$delegate$lambda($pathSegments) {
    return function () {
      var tmp;
      if ($pathSegments.r()) {
        return emptyList();
      }
      var tmp_0;
      var tmp_1;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = first_0($pathSegments);
      if (charSequenceLength(this_0) === 0) {
        tmp_1 = $pathSegments.e1() > 1;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = 1;
      } else {
        tmp_0 = 0;
      }
      var start = tmp_0;
      var tmp_2;
      // Inline function 'kotlin.text.isEmpty' call
      var this_1 = last($pathSegments);
      if (charSequenceLength(this_1) === 0) {
        tmp_2 = get_lastIndex_0($pathSegments);
      } else {
        tmp_2 = get_lastIndex_0($pathSegments) + 1 | 0;
      }
      var end = tmp_2;
      return $pathSegments.p2(start, end);
    };
  }
  function Url$encodedPath$delegate$lambda($pathSegments, this$0) {
    return function () {
      var tmp;
      if ($pathSegments.r()) {
        return '';
      }
      var pathStartIndex = indexOf(this$0.u33_1, _Char___init__impl__6a9atx(47), this$0.z33_1.k33_1.length + 3 | 0);
      var tmp_0;
      if (pathStartIndex === -1) {
        return '';
      }
      // Inline function 'kotlin.charArrayOf' call
      var tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(63), _Char___init__impl__6a9atx(35)]);
      var pathEndIndex = indexOfAny(this$0.u33_1, tmp$ret$0, pathStartIndex);
      var tmp_1;
      if (pathEndIndex === -1) {
        return substring_0(this$0.u33_1, pathStartIndex);
      }
      return substring(this$0.u33_1, pathStartIndex, pathEndIndex);
    };
  }
  function Url$encodedQuery$delegate$lambda(this$0) {
    return function () {
      var queryStart = indexOf(this$0.u33_1, _Char___init__impl__6a9atx(63)) + 1 | 0;
      var tmp;
      if (queryStart === 0) {
        return '';
      }
      var queryEnd = indexOf(this$0.u33_1, _Char___init__impl__6a9atx(35), queryStart);
      var tmp_0;
      if (queryEnd === -1) {
        return substring_0(this$0.u33_1, queryStart);
      }
      return substring(this$0.u33_1, queryStart, queryEnd);
    };
  }
  function Url$encodedPathAndQuery$delegate$lambda(this$0) {
    return function () {
      var pathStart = indexOf(this$0.u33_1, _Char___init__impl__6a9atx(47), this$0.z33_1.k33_1.length + 3 | 0);
      var tmp;
      if (pathStart === -1) {
        return '';
      }
      var queryEnd = indexOf(this$0.u33_1, _Char___init__impl__6a9atx(35), pathStart);
      var tmp_0;
      if (queryEnd === -1) {
        return substring_0(this$0.u33_1, pathStart);
      }
      return substring(this$0.u33_1, pathStart, queryEnd);
    };
  }
  function Url$encodedUser$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.r33_1 == null) {
        return null;
      }
      var tmp_0;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = this$0.r33_1;
      if (charSequenceLength(this_0) === 0) {
        return '';
      }
      var usernameStart = this$0.z33_1.k33_1.length + 3 | 0;
      // Inline function 'kotlin.charArrayOf' call
      var tmp$ret$1 = charArrayOf([_Char___init__impl__6a9atx(58), _Char___init__impl__6a9atx(64)]);
      var usernameEnd = indexOfAny(this$0.u33_1, tmp$ret$1, usernameStart);
      return substring(this$0.u33_1, usernameStart, usernameEnd);
    };
  }
  function Url$_get_encodedUser_$ref_3lb9bi() {
    return constructCallableReference(function (p0) {
      return p0.z34();
    }, 1, 0, 21);
  }
  function Url$encodedPassword$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.s33_1 == null) {
        return null;
      }
      var tmp_0;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = this$0.s33_1;
      if (charSequenceLength(this_0) === 0) {
        return '';
      }
      var passwordStart = indexOf(this$0.u33_1, _Char___init__impl__6a9atx(58), this$0.z33_1.k33_1.length + 3 | 0) + 1 | 0;
      var passwordEnd = indexOf(this$0.u33_1, _Char___init__impl__6a9atx(64));
      return substring(this$0.u33_1, passwordStart, passwordEnd);
    };
  }
  function Url$_get_encodedPassword_$ref_25ixc2() {
    return constructCallableReference(function (p0) {
      return p0.a35();
    }, 1, 0, 22);
  }
  function Url$encodedFragment$delegate$lambda(this$0) {
    return function () {
      var fragmentStart = indexOf(this$0.u33_1, _Char___init__impl__6a9atx(35)) + 1 | 0;
      var tmp;
      if (fragmentStart === 0) {
        return '';
      }
      return substring_0(this$0.u33_1, fragmentStart);
    };
  }
  function Url_0(protocol, host, specifiedPort, pathSegments, parameters, fragment, user, password, trailingQuery, urlString) {
    this.n33_1 = host;
    this.o33_1 = specifiedPort;
    this.p33_1 = parameters;
    this.q33_1 = fragment;
    this.r33_1 = user;
    this.s33_1 = password;
    this.t33_1 = trailingQuery;
    this.u33_1 = urlString;
    var containsArg = this.o33_1;
    // Inline function 'kotlin.require' call
    if (!(0 <= containsArg ? containsArg <= 65535 : false)) {
      var message = 'Port must be between 0 and 65535, or 0 if not set. Provided: ' + this.o33_1;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.v33_1 = pathSegments;
    this.w33_1 = pathSegments;
    var tmp = this;
    tmp.x33_1 = lazy_0(Url$segments$delegate$lambda(pathSegments));
    this.y33_1 = protocol;
    var tmp_0 = this;
    var tmp0_elvis_lhs = this.y33_1;
    tmp_0.z33_1 = tmp0_elvis_lhs == null ? Companion_getInstance_9().k34_1 : tmp0_elvis_lhs;
    var tmp_1 = this;
    tmp_1.a34_1 = lazy_0(Url$encodedPath$delegate$lambda(pathSegments, this));
    var tmp_2 = this;
    tmp_2.b34_1 = lazy_0(Url$encodedQuery$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.c34_1 = lazy_0(Url$encodedPathAndQuery$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.d34_1 = lazy_0(Url$encodedUser$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.e34_1 = lazy_0(Url$encodedPassword$delegate$lambda(this));
    var tmp_6 = this;
    tmp_6.f34_1 = lazy_0(Url$encodedFragment$delegate$lambda(this));
  }
  protoOf(Url_0).y34 = function () {
    // Inline function 'kotlin.takeUnless' call
    var this_0 = this.o33_1;
    var tmp;
    if (!(this_0 === 0)) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    return tmp0_elvis_lhs == null ? this.z33_1.l33_1 : tmp0_elvis_lhs;
  };
  protoOf(Url_0).z34 = function () {
    var tmp0 = this.d34_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('encodedUser', 1, tmp, Url$_get_encodedUser_$ref_3lb9bi(), null);
    return tmp0.n1();
  };
  protoOf(Url_0).a35 = function () {
    var tmp0 = this.e34_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('encodedPassword', 1, tmp, Url$_get_encodedPassword_$ref_25ixc2(), null);
    return tmp0.n1();
  };
  protoOf(Url_0).toString = function () {
    return this.u33_1;
  };
  protoOf(Url_0).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Url_0))
      THROW_CCE();
    return this.u33_1 === other.u33_1;
  };
  protoOf(Url_0).hashCode = function () {
    return getStringHashCode(this.u33_1);
  };
  function get_authority_0(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.q(get_encodedUserAndPassword_0(_this__u8e3s4));
    this_0.q(get_hostWithPortIfSpecified(_this__u8e3s4));
    return this_0.toString();
  }
  function UrlSerializer() {
    UrlSerializer_instance = this;
    this.b35_1 = PrimitiveSerialDescriptor('io.ktor.http.Url', STRING_getInstance());
  }
  protoOf(UrlSerializer).eq = function () {
    return this.b35_1;
  };
  protoOf(UrlSerializer).fq = function (decoder) {
    return Url(decoder.ys());
  };
  var UrlSerializer_instance;
  function UrlSerializer_getInstance() {
    if (UrlSerializer_instance == null)
      new UrlSerializer();
    return UrlSerializer_instance;
  }
  function get_encodedUserAndPassword_0(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    appendUserAndPassword(this_0, _this__u8e3s4.z34(), _this__u8e3s4.a35());
    return this_0.toString();
  }
  function UrlDecodedParametersBuilder(encodedParametersBuilder) {
    this.c35_1 = encodedParametersBuilder;
    this.d35_1 = this.c35_1.x2m();
  }
  protoOf(UrlDecodedParametersBuilder).o2v = function () {
    return decodeParameters(this.c35_1);
  };
  protoOf(UrlDecodedParametersBuilder).x2m = function () {
    return this.d35_1;
  };
  protoOf(UrlDecodedParametersBuilder).y2m = function (name) {
    var tmp0_safe_receiver = this.c35_1.y2m(encodeURLParameter(name));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var _iterator__ex2g4s = tmp0_safe_receiver.t();
      while (_iterator__ex2g4s.u()) {
        var item = _iterator__ex2g4s.v();
        var tmp$ret$2 = decodeURLQueryComponent(item, VOID, VOID, true);
        destination.c1(tmp$ret$2);
      }
      tmp = destination;
    }
    return tmp;
  };
  protoOf(UrlDecodedParametersBuilder).z2m = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.c35_1.z2m();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = decodeURLQueryComponent(item);
      destination.c1(tmp$ret$2);
    }
    return toSet(destination);
  };
  protoOf(UrlDecodedParametersBuilder).r = function () {
    return this.c35_1.r();
  };
  protoOf(UrlDecodedParametersBuilder).s2m = function () {
    return decodeParameters(this.c35_1).s2m();
  };
  protoOf(UrlDecodedParametersBuilder).c2n = function (name, value) {
    return this.c35_1.c2n(encodeURLParameter(name), encodeURLParameterValue(value));
  };
  protoOf(UrlDecodedParametersBuilder).t2m = function (name, values) {
    var tmp = encodeURLParameter(name);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(values, 10));
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = encodeURLParameterValue(item);
      destination.c1(tmp$ret$2);
    }
    return this.c35_1.t2m(tmp, destination);
  };
  protoOf(UrlDecodedParametersBuilder).w2 = function () {
    return this.c35_1.w2();
  };
  function encodeParameters(parameters) {
    // Inline function 'kotlin.apply' call
    var this_0 = ParametersBuilder();
    appendAllEncoded(this_0, parameters);
    return this_0;
  }
  function decodeParameters(parameters) {
    // Inline function 'kotlin.apply' call
    var this_0 = ParametersBuilder();
    appendAllDecoded(this_0, parameters);
    return this_0.o2v();
  }
  function appendAllEncoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = parameters.z2m().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp0_elvis_lhs = parameters.y2m(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = encodeURLParameter(element);
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(values, 10));
      var _iterator__ex2g4s_0 = values.t();
      while (_iterator__ex2g4s_0.u()) {
        var item = _iterator__ex2g4s_0.v();
        var tmp$ret$4 = encodeURLParameterValue(item);
        destination.c1(tmp$ret$4);
      }
      _this__u8e3s4.t2m(tmp, destination);
    }
  }
  function appendAllDecoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = parameters.z2m().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp0_elvis_lhs = parameters.y2m(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = decodeURLQueryComponent(element);
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(values, 10));
      var _iterator__ex2g4s_0 = values.t();
      while (_iterator__ex2g4s_0.u()) {
        var item = _iterator__ex2g4s_0.v();
        var tmp$ret$4 = decodeURLQueryComponent(item, VOID, VOID, true);
        destination.c1(tmp$ret$4);
      }
      _this__u8e3s4.t2m(tmp, destination);
    }
  }
  function ByteArrayContent(bytes, contentType, status) {
    contentType = contentType === VOID ? null : contentType;
    status = status === VOID ? null : status;
    ByteArrayContent_0.call(this);
    this.f35_1 = bytes;
    this.g35_1 = contentType;
    this.h35_1 = status;
  }
  protoOf(ByteArrayContent).i35 = function () {
    return this.g35_1;
  };
  protoOf(ByteArrayContent).j35 = function () {
    return fromInt(this.f35_1.length);
  };
  protoOf(ByteArrayContent).k35 = function () {
    return this.f35_1;
  };
  function PartData$FormItem$_init_$slambda_xpexm6(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PartData$FormItem$_init_$slambda_xpexm6).i2h = function ($completion) {
    var tmp = this.u2r($completion);
    tmp.s8_1 = Unit_instance;
    tmp.t8_1 = null;
    return tmp.y8();
  };
  protoOf(PartData$FormItem$_init_$slambda_xpexm6).k9 = function ($completion) {
    return this.i2h($completion);
  };
  protoOf(PartData$FormItem$_init_$slambda_xpexm6).y8 = function () {
    var suspendResult = this.s8_1;
    $sm: do
      try {
        var tmp = this.q8_1;
        if (tmp === 0) {
          this.r8_1 = 1;
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.t8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PartData$FormItem$_init_$slambda_xpexm6).u2r = function (completion) {
    return new PartData$FormItem$_init_$slambda_xpexm6(completion);
  };
  function PartData$FormItem$_init_$slambda_xpexm6_0(resultContinuation) {
    var i = new PartData$FormItem$_init_$slambda_xpexm6(resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.i2h($completion);
    }, 0);
  }
  function PartData$BinaryItem$_init_$slambda_l0n5zl(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PartData$BinaryItem$_init_$slambda_l0n5zl).i2h = function ($completion) {
    var tmp = this.u2r($completion);
    tmp.s8_1 = Unit_instance;
    tmp.t8_1 = null;
    return tmp.y8();
  };
  protoOf(PartData$BinaryItem$_init_$slambda_l0n5zl).k9 = function ($completion) {
    return this.i2h($completion);
  };
  protoOf(PartData$BinaryItem$_init_$slambda_l0n5zl).y8 = function () {
    var suspendResult = this.s8_1;
    $sm: do
      try {
        var tmp = this.q8_1;
        if (tmp === 0) {
          this.r8_1 = 1;
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.t8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PartData$BinaryItem$_init_$slambda_l0n5zl).u2r = function (completion) {
    return new PartData$BinaryItem$_init_$slambda_l0n5zl(completion);
  };
  function PartData$BinaryItem$_init_$slambda_l0n5zl_0(resultContinuation) {
    var i = new PartData$BinaryItem$_init_$slambda_l0n5zl(resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.i2h($completion);
    }, 0);
  }
  function PartData$BinaryChannelItem$_init_$lambda_77jc0t() {
    return Unit_instance;
  }
  function PartData$BinaryChannelItem$_init_$slambda_qcg1jy(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PartData$BinaryChannelItem$_init_$slambda_qcg1jy).i2h = function ($completion) {
    var tmp = this.u2r($completion);
    tmp.s8_1 = Unit_instance;
    tmp.t8_1 = null;
    return tmp.y8();
  };
  protoOf(PartData$BinaryChannelItem$_init_$slambda_qcg1jy).k9 = function ($completion) {
    return this.i2h($completion);
  };
  protoOf(PartData$BinaryChannelItem$_init_$slambda_qcg1jy).y8 = function () {
    var suspendResult = this.s8_1;
    $sm: do
      try {
        var tmp = this.q8_1;
        if (tmp === 0) {
          this.r8_1 = 1;
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.t8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PartData$BinaryChannelItem$_init_$slambda_qcg1jy).u2r = function (completion) {
    return new PartData$BinaryChannelItem$_init_$slambda_qcg1jy(completion);
  };
  function PartData$BinaryChannelItem$_init_$slambda_qcg1jy_0(resultContinuation) {
    var i = new PartData$BinaryChannelItem$_init_$slambda_qcg1jy(resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.i2h($completion);
    }, 0);
  }
  function FormItem(value, dispose, partHeaders, release) {
    var tmp;
    if (release === VOID) {
      tmp = PartData$FormItem$_init_$slambda_xpexm6_0(null);
    } else {
      tmp = release;
    }
    release = tmp;
    PartData.call(this, dispose, partHeaders, release);
    this.p36_1 = value;
  }
  function FileItem() {
  }
  function BinaryItem(provider, dispose, partHeaders, release) {
    var tmp;
    if (release === VOID) {
      tmp = PartData$BinaryItem$_init_$slambda_l0n5zl_0(null);
    } else {
      tmp = release;
    }
    release = tmp;
    PartData.call(this, dispose, partHeaders, release);
    this.v36_1 = provider;
  }
  function BinaryChannelItem(provider, partHeaders) {
    var tmp = PartData$BinaryChannelItem$_init_$lambda_77jc0t;
    PartData.call(this, tmp, partHeaders, PartData$BinaryChannelItem$_init_$slambda_qcg1jy_0(null));
    this.b37_1 = provider;
  }
  function PartData$contentDisposition$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.d37_1.td('Content-Disposition');
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_getInstance_0().lo(tmp0_safe_receiver);
      }
      return tmp;
    };
  }
  function PartData$contentType$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.d37_1.td('Content-Type');
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_getInstance_1().lo(tmp0_safe_receiver);
      }
      return tmp;
    };
  }
  function PartData(dispose, headers, release) {
    this.c37_1 = dispose;
    this.d37_1 = headers;
    this.e37_1 = release;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.f37_1 = lazy(tmp_0, PartData$contentDisposition$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.g37_1 = lazy(tmp_2, PartData$contentType$delegate$lambda(this));
  }
  function MultiPartData() {
  }
  function NullBody() {
  }
  var NullBody_instance;
  function NullBody_getInstance() {
    return NullBody_instance;
  }
  function NoContent() {
    OutgoingContent.call(this);
  }
  function ReadChannelContent() {
    OutgoingContent.call(this);
  }
  function WriteChannelContent() {
    OutgoingContent.call(this);
  }
  function ByteArrayContent_0() {
    OutgoingContent.call(this);
  }
  function ProtocolUpgrade() {
  }
  function ContentWrapper() {
  }
  protoOf(ContentWrapper).o37 = function () {
    return this.n37_1;
  };
  function OutgoingContent() {
    this.l35_1 = null;
  }
  protoOf(OutgoingContent).i35 = function () {
    return null;
  };
  protoOf(OutgoingContent).j35 = function () {
    return null;
  };
  protoOf(OutgoingContent).v2z = function () {
    return Companion_getInstance_3().q2z_1;
  };
  function isEmpty(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof NoContent) {
      tmp = true;
    } else {
      if (_this__u8e3s4 instanceof ContentWrapper) {
        tmp = isEmpty(_this__u8e3s4.o37());
      } else {
        tmp = false;
      }
    }
    return tmp;
  }
  function TextContent(text, contentType, status) {
    status = status === VOID ? null : status;
    ByteArrayContent_0.call(this);
    this.q37_1 = text;
    this.r37_1 = contentType;
    this.s37_1 = status;
    var tmp = this;
    var tmp0_elvis_lhs = charset(this.r37_1);
    tmp.t37_1 = toByteArray(this.q37_1, tmp0_elvis_lhs == null ? Charsets_getInstance().m2j_1 : tmp0_elvis_lhs);
  }
  protoOf(TextContent).i35 = function () {
    return this.r37_1;
  };
  protoOf(TextContent).j35 = function () {
    return fromInt(this.t37_1.length);
  };
  protoOf(TextContent).k35 = function () {
    return this.t37_1;
  };
  protoOf(TextContent).toString = function () {
    return 'TextContent[' + this.r37_1.toString() + '] "' + take(this.q37_1, 30) + '"';
  };
  function get_origin(_this__u8e3s4) {
    return PlatformUtils_getInstance().k2m_1 ? locationOrigin() : 'http://localhost';
  }
  function locationOrigin() {
    return function () {
      var tmpLocation = null;
      if (typeof window !== 'undefined') {
        tmpLocation = window.location;
      } else if (typeof self !== 'undefined') {
        tmpLocation = self.location;
      }
      var origin = '';
      if (tmpLocation) {
        origin = tmpLocation.origin;
      }
      return origin && origin != 'null' ? origin : 'http://localhost';
    }();
  }
  //region block: post-declaration
  protoOf(EmptyHeaders).td = get;
  protoOf(EmptyHeaders).e2n = forEach;
  protoOf(EmptyParameters).td = get;
  protoOf(EmptyParameters).e2n = forEach;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_2 = new Companion_2();
  EmptyHeaders_instance = new EmptyHeaders();
  EmptyParameters_instance = new EmptyParameters();
  Companion_instance_10 = new Companion_10();
  NullBody_instance = new NullBody();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NullBody_instance;
  _.$_$.b = Application_getInstance;
  _.$_$.c = Companion_getInstance_1;
  _.$_$.d = Image_getInstance;
  _.$_$.e = MultiPart_getInstance;
  _.$_$.f = Text_getInstance;
  _.$_$.g = Video_getInstance;
  _.$_$.h = Companion_getInstance_3;
  _.$_$.i = HttpHeaders_getInstance;
  _.$_$.j = Companion_getInstance_4;
  _.$_$.k = Companion_getInstance_5;
  _.$_$.l = Companion_getInstance_6;
  _.$_$.m = Companion_getInstance_7;
  _.$_$.n = Companion_getInstance_9;
  _.$_$.o = ContentType_init_$Create$;
  _.$_$.p = ByteArrayContent;
  _.$_$.q = MultiPartData;
  _.$_$.r = NullBody;
  _.$_$.s = ByteArrayContent_0;
  _.$_$.t = ContentWrapper;
  _.$_$.u = NoContent;
  _.$_$.v = ProtocolUpgrade;
  _.$_$.w = ReadChannelContent;
  _.$_$.x = WriteChannelContent;
  _.$_$.y = OutgoingContent;
  _.$_$.z = BinaryChannelItem;
  _.$_$.a1 = BinaryItem;
  _.$_$.b1 = FileItem;
  _.$_$.c1 = FormItem;
  _.$_$.d1 = TextContent;
  _.$_$.e1 = isEmpty;
  _.$_$.f1 = HeadersBuilder;
  _.$_$.g1 = HttpStatusCode;
  _.$_$.h1 = ParametersBuilder;
  _.$_$.i1 = URLBuilder_0;
  _.$_$.j1 = URLBuilder;
  _.$_$.k1 = UnsafeHeaderException;
  _.$_$.l1 = Url;
  _.$_$.m1 = append;
  _.$_$.n1 = get_authority;
  _.$_$.o1 = get_authority_0;
  _.$_$.p1 = charset_0;
  _.$_$.q1 = charset;
  _.$_$.r1 = contentLength;
  _.$_$.s1 = contentType_0;
  _.$_$.t1 = contentType;
  _.$_$.u1 = encodeURLParameter;
  _.$_$.v1 = formUrlEncode;
  _.$_$.w1 = headersOf;
  _.$_$.x1 = get_hostWithPort;
  _.$_$.y1 = isQuoted;
  _.$_$.z1 = isSecure;
  _.$_$.a2 = isWebsocket;
  _.$_$.b2 = quote;
  _.$_$.c2 = set;
  _.$_$.d2 = get_supportsRequestBody;
  _.$_$.e2 = takeFrom_0;
  _.$_$.f2 = takeFrom;
  _.$_$.g2 = withCharset;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-http.js.map
