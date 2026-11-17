(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var protoOf = kotlin_kotlin.$_$.xb;
  var initMetadataForObject = kotlin_kotlin.$_$.eb;
  var VOID = kotlin_kotlin.$_$.d;
  var initMetadataForClass = kotlin_kotlin.$_$.ya;
  var toString = kotlin_kotlin.$_$.ac;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l4;
  var Unit_instance = kotlin_kotlin.$_$.z2;
  var charSequenceLength = kotlin_kotlin.$_$.ma;
  var charSequenceGet = kotlin_kotlin.$_$.la;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var equals = kotlin_kotlin.$_$.ra;
  var toString_0 = kotlin_kotlin.$_$.bh;
  var Enum = kotlin_kotlin.$_$.qf;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var initMetadataForInterface = kotlin_kotlin.$_$.cb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.za;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.a4;
  var hashCode = kotlin_kotlin.$_$.xa;
  var joinToString = kotlin_kotlin.$_$.d7;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var KtMap = kotlin_kotlin.$_$.n5;
  var KtList = kotlin_kotlin.$_$.k5;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var getKClassFromExpression = kotlin_kotlin.$_$.qc;
  var getBooleanHashCode = kotlin_kotlin.$_$.ua;
  var getStringHashCode = kotlin_kotlin.$_$.wa;
  var toDouble = kotlin_kotlin.$_$.qe;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.k2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e3;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var isInterface = kotlin_kotlin.$_$.nb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p4;
  var KProperty1 = kotlin_kotlin.$_$.wc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.va;
  var constructCallableReference = kotlin_kotlin.$_$.pa;
  var lazy = kotlin_kotlin.$_$.xg;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var captureStack = kotlin_kotlin.$_$.ha;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var defineProp = kotlin_kotlin.$_$.qa;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var charSequenceSubSequence = kotlin_kotlin.$_$.na;
  var coerceAtLeast = kotlin_kotlin.$_$.fc;
  var coerceAtMost = kotlin_kotlin.$_$.gc;
  var isBlank = kotlin_kotlin.$_$.qd;
  var Collection = kotlin_kotlin.$_$.f5;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var singleOrNull = kotlin_kotlin.$_$.z7;
  var emptyMap = kotlin_kotlin.$_$.s6;
  var getValue = kotlin_kotlin.$_$.z6;
  var copyOf = kotlin_kotlin.$_$.m6;
  var arrayCopy = kotlin_kotlin.$_$.v5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var to = kotlin_kotlin.$_$.ch;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.of;
  var invoke = kotlin_kotlin.$_$.sg;
  var CoroutineImpl = kotlin_kotlin.$_$.i9;
  var DeepRecursiveScope = kotlin_kotlin.$_$.pf;
  var Unit = kotlin_kotlin.$_$.kg;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.q8;
  var initMetadataForLambda = kotlin_kotlin.$_$.db;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ab;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var getKClass = kotlin_kotlin.$_$.rc;
  var Exception = kotlin_kotlin.$_$.sf;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var contains = kotlin_kotlin.$_$.ed;
  var plus = kotlin_kotlin.$_$.zg;
  var missingFieldExceptionWithNewMessage = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var convertToByte = kotlin_kotlin.$_$.p9;
  var fromInt = kotlin_kotlin.$_$.t9;
  var convertToShort = kotlin_kotlin.$_$.r9;
  var convertToInt = kotlin_kotlin.$_$.q9;
  var IllegalArgumentException = kotlin_kotlin.$_$.tf;
  var isFinite = kotlin_kotlin.$_$.ug;
  var isFinite_0 = kotlin_kotlin.$_$.tg;
  var charCodeAt = kotlin_kotlin.$_$.ka;
  var toUInt = kotlin_kotlin.$_$.ye;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.b1;
  var toULong = kotlin_kotlin.$_$.ze;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.i1;
  var toUByte = kotlin_kotlin.$_$.xe;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.u;
  var toUShort = kotlin_kotlin.$_$.af;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.p1;
  var Companion_getInstance = kotlin_kotlin.$_$.w2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.x2;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.v2;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.y2;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var setOf = kotlin_kotlin.$_$.y7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.n;
  var numberToChar = kotlin_kotlin.$_$.ub;
  var equals_0 = kotlin_kotlin.$_$.ld;
  var toString_1 = kotlin_kotlin.$_$.o;
  var toByte = kotlin_kotlin.$_$.yb;
  var startsWith = kotlin_kotlin.$_$.fe;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var numberRangeToNumber = kotlin_kotlin.$_$.tb;
  var ClosedRange = kotlin_kotlin.$_$.ec;
  var contains_0 = kotlin_kotlin.$_$.jc;
  var single = kotlin_kotlin.$_$.ce;
  var Char = kotlin_kotlin.$_$.lf;
  var toInt = kotlin_kotlin.$_$.te;
  var toList = kotlin_kotlin.$_$.f8;
  var toNumber = kotlin_kotlin.$_$.da;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yg;
  var last = kotlin_kotlin.$_$.i7;
  var removeLast = kotlin_kotlin.$_$.v7;
  var lastIndexOf = kotlin_kotlin.$_$.wd;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.j;
  var multiply = kotlin_kotlin.$_$.w9;
  var add = kotlin_kotlin.$_$.o9;
  var subtract = kotlin_kotlin.$_$.ca;
  var numberToLong = kotlin_kotlin.$_$.y9;
  var negate = kotlin_kotlin.$_$.x9;
  var charArray = kotlin_kotlin.$_$.ja;
  var indexOf = kotlin_kotlin.$_$.od;
  var indexOf_0 = kotlin_kotlin.$_$.pd;
  var substring = kotlin_kotlin.$_$.me;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.g3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForClass(JsonObjectBuilder, 'JsonObjectBuilder');
  initMetadataForClass(JsonArrayBuilder, 'JsonArrayBuilder');
  initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForObject(RedactedKey, 'RedactedKey');
  initMetadataForClass(JsonPath, 'JsonPath');
  initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
  initMetadataForClass(LexerMode, 'LexerMode', VOID, Enum);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [JsonDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.q16_1 = configuration;
    this.r16_1 = serializersModule;
    this.s16_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).st = function () {
    return this.r16_1;
  };
  protoOf(Json).t16 = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, LexerMode_OBJ_getInstance(), lexer, deserializer.eq(), null);
    var result = input.ct(deserializer);
    lexer.h17();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.c18();
    return new JsonImpl(conf, builder.z17_1);
  }
  function JsonBuilder(json) {
    this.i17_1 = json.q16_1.d18_1;
    this.j17_1 = json.q16_1.i18_1;
    this.k17_1 = json.q16_1.e18_1;
    this.l17_1 = json.q16_1.f18_1;
    this.m17_1 = json.q16_1.h18_1;
    this.n17_1 = json.q16_1.j18_1;
    this.o17_1 = json.q16_1.k18_1;
    this.p17_1 = json.q16_1.m18_1;
    this.q17_1 = json.q16_1.t18_1;
    this.r17_1 = json.q16_1.o18_1;
    this.s17_1 = json.q16_1.p18_1;
    this.t17_1 = json.q16_1.q18_1;
    this.u17_1 = json.q16_1.r18_1;
    this.v17_1 = json.q16_1.s18_1;
    this.w17_1 = json.q16_1.n18_1;
    this.x17_1 = json.q16_1.g18_1;
    this.y17_1 = json.q16_1.l18_1;
    this.z17_1 = json.st();
    this.a18_1 = json.q16_1.u18_1;
    this.b18_1 = json.q16_1.v18_1;
  }
  protoOf(JsonBuilder).c18 = function () {
    if (this.y17_1) {
      // Inline function 'kotlin.require' call
      if (!(this.p17_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.q17_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.m17_1) {
      // Inline function 'kotlin.require' call
      if (!(this.n17_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.n17_1 === '    ')) {
      var tmp0 = this.n17_1;
      var tmp$ret$6;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$6 = false;
            break $l$block;
          }
        }
        tmp$ret$6 = true;
      }
      var allWhitespaces = tmp$ret$6;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.n17_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.i17_1, this.k17_1, this.l17_1, this.x17_1, this.m17_1, this.j17_1, this.n17_1, this.o17_1, this.y17_1, this.p17_1, this.w17_1, this.r17_1, this.s17_1, this.t17_1, this.u17_1, this.v17_1, this.q17_1, this.a18_1, this.b18_1);
  };
  function validateConfiguration($this) {
    if (equals($this.st(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.q16_1);
    $this.st().y15(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonIgnoreUnknownKeys() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode, exceptionsWithDebugInfo, maxNestingDepth) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    exceptionsWithDebugInfo = exceptionsWithDebugInfo === VOID ? true : exceptionsWithDebugInfo;
    maxNestingDepth = maxNestingDepth === VOID ? 400 : maxNestingDepth;
    this.d18_1 = encodeDefaults;
    this.e18_1 = ignoreUnknownKeys;
    this.f18_1 = isLenient;
    this.g18_1 = allowStructuredMapKeys;
    this.h18_1 = prettyPrint;
    this.i18_1 = explicitNulls;
    this.j18_1 = prettyPrintIndent;
    this.k18_1 = coerceInputValues;
    this.l18_1 = useArrayPolymorphism;
    this.m18_1 = classDiscriminator;
    this.n18_1 = allowSpecialFloatingPointValues;
    this.o18_1 = useAlternativeNames;
    this.p18_1 = namingStrategy;
    this.q18_1 = decodeEnumsCaseInsensitive;
    this.r18_1 = allowTrailingComma;
    this.s18_1 = allowComments;
    this.t18_1 = classDiscriminatorMode;
    this.u18_1 = exceptionsWithDebugInfo;
    this.v18_1 = maxNestingDepth;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.d18_1 + ', ignoreUnknownKeys=' + this.e18_1 + ', isLenient=' + this.f18_1 + ', ' + ('allowStructuredMapKeys=' + this.g18_1 + ', prettyPrint=' + this.h18_1 + ', explicitNulls=' + this.i18_1 + ', ') + ("prettyPrintIndent='" + this.j18_1 + "', coerceInputValues=" + this.k18_1 + ', useArrayPolymorphism=' + this.l18_1 + ', ') + ("classDiscriminator='" + this.m18_1 + "', allowSpecialFloatingPointValues=" + this.n18_1 + ', ') + ('useAlternativeNames=' + this.o18_1 + ', namingStrategy=' + toString_0(this.p18_1) + ', decodeEnumsCaseInsensitive=' + this.q18_1 + ', ') + ('allowTrailingComma=' + this.r18_1 + ', allowComments=' + this.s18_1 + ', classDiscriminatorMode=' + this.t18_1.toString() + ', ') + ('exceptionsWithDebugInfo=' + this.u18_1 + ', maxNestingDepth=' + this.v18_1 + ')');
  };
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_instance;
    static_init_called = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    static_init();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    static_init();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function JsonDecoder() {
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_3() {
    return Companion_instance;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.m1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.n1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.s(_Char___init__impl__6a9atx(58));
    this_0.w(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.y18_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.y18_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.y18_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.y18_1.l1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).r = function () {
    return this.y18_1.r();
  };
  protoOf(JsonObject).z18 = function (key) {
    return this.y18_1.r2(key);
  };
  protoOf(JsonObject).r2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.z18((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).a19 = function (value) {
    return this.y18_1.s2(value);
  };
  protoOf(JsonObject).s2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.a19(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).td = function (key) {
    return this.y18_1.t2(key);
  };
  protoOf(JsonObject).t2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.td((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.y18_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).e1 = function () {
    return this.y18_1.e1();
  };
  protoOf(JsonObject).u2 = function () {
    return this.y18_1.u2();
  };
  protoOf(JsonObject).v2 = function () {
    return this.y18_1.v2();
  };
  protoOf(JsonObject).l1 = function () {
    return this.y18_1.l1();
  };
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonElement() {
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.b19_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.b19_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.b19_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.b19_1, ',', '[', ']');
  };
  protoOf(JsonArray).r = function () {
    return this.b19_1.r();
  };
  protoOf(JsonArray).c19 = function (element) {
    return this.b19_1.j2(element);
  };
  protoOf(JsonArray).j2 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.c19(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).t = function () {
    return this.b19_1.t();
  };
  protoOf(JsonArray).d19 = function (elements) {
    return this.b19_1.k2(elements);
  };
  protoOf(JsonArray).k2 = function (elements) {
    return this.d19(elements);
  };
  protoOf(JsonArray).d1 = function (index) {
    return this.b19_1.d1(index);
  };
  protoOf(JsonArray).e19 = function (element) {
    return this.b19_1.m2(element);
  };
  protoOf(JsonArray).m2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.e19(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).f19 = function (element) {
    return this.b19_1.n2(element);
  };
  protoOf(JsonArray).n2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.f19(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).o2 = function () {
    return this.b19_1.o2();
  };
  protoOf(JsonArray).f1 = function (index) {
    return this.b19_1.f1(index);
  };
  protoOf(JsonArray).p2 = function (fromIndex, toIndex) {
    return this.b19_1.p2(fromIndex, toIndex);
  };
  protoOf(JsonArray).asJsReadonlyArrayView = function () {
    return this.b19_1.asJsReadonlyArrayView();
  };
  protoOf(JsonArray).e1 = function () {
    return this.b19_1.e1();
  };
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.g19();
  };
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_1(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonPrimitive_2(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.h19_1 = 'null';
  }
  protoOf(JsonNull).g19 = function () {
    return this.h19_1;
  };
  protoOf(JsonNull).i19 = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).rz = function (typeParamsSerializers) {
    return this.i19();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.j19_1 = isString;
    this.k19_1 = coerceToInlineType;
    this.l19_1 = toString(body);
    if (!(this.k19_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.k19_1.lr()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).g19 = function () {
    return this.l19_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.j19_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.l19_1);
      tmp = this_0.toString();
    } else {
      tmp = this.l19_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.j19_1 === other.j19_1))
      return false;
    if (!(this.l19_1 === other.l19_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.j19_1);
    result = imul(31, result) + getStringHashCode(this.l19_1) | 0;
    return result;
  };
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.g19();
    }
    return tmp;
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.g19());
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return StringJsonLexer_0(Default_getInstance(), _this__u8e3s4.g19()).m19();
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.g19();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.g19());
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonObjectBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.n19_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonObjectBuilder).o19 = function (key, element) {
    return this.n19_1.a3(key, element);
  };
  protoOf(JsonObjectBuilder).c18 = function () {
    return new JsonObject(this.n19_1);
  };
  function put(_this__u8e3s4, key, value) {
    return _this__u8e3s4.o19(key, JsonPrimitive_0(value));
  }
  function put_0(_this__u8e3s4, key, value) {
    return _this__u8e3s4.o19(key, JsonPrimitive_1(value));
  }
  function put_1(_this__u8e3s4, key, value) {
    return _this__u8e3s4.o19(key, JsonPrimitive_2(value));
  }
  function JsonArrayBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p19_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonArrayBuilder).q19 = function (element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.p19_1.c1(element);
    return true;
  };
  protoOf(JsonArrayBuilder).c18 = function () {
    return new JsonArray(this.p19_1);
  };
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.oq('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.oq('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.oq('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.oq('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.oq('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().r19_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().s19_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().t19_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().u19_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().v19_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.w19_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).eq = function () {
    return this.w19_1;
  };
  protoOf(JsonElementSerializer).fq = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.x18();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.x19_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).eq();
    this.y19_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).jr = function () {
    return this.y19_1;
  };
  protoOf(JsonObjectDescriptor).or = function (index) {
    return this.x19_1.or(index);
  };
  protoOf(JsonObjectDescriptor).pr = function (name) {
    return this.x19_1.pr(name);
  };
  protoOf(JsonObjectDescriptor).qr = function (index) {
    return this.x19_1.qr(index);
  };
  protoOf(JsonObjectDescriptor).rr = function (index) {
    return this.x19_1.rr(index);
  };
  protoOf(JsonObjectDescriptor).sr = function (index) {
    return this.x19_1.sr(index);
  };
  protoOf(JsonObjectDescriptor).kr = function () {
    return this.x19_1.kr();
  };
  protoOf(JsonObjectDescriptor).cr = function () {
    return this.x19_1.cr();
  };
  protoOf(JsonObjectDescriptor).lr = function () {
    return this.x19_1.lr();
  };
  protoOf(JsonObjectDescriptor).mr = function () {
    return this.x19_1.mr();
  };
  protoOf(JsonObjectDescriptor).nr = function () {
    return this.x19_1.nr();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.u19_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).eq = function () {
    return this.u19_1;
  };
  protoOf(JsonObjectSerializer).fq = function (decoder) {
    verify(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).fq(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.z19_1 = ListSerializer(JsonElementSerializer_getInstance()).eq();
    this.a1a_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).jr = function () {
    return this.a1a_1;
  };
  protoOf(JsonArrayDescriptor).or = function (index) {
    return this.z19_1.or(index);
  };
  protoOf(JsonArrayDescriptor).pr = function (name) {
    return this.z19_1.pr(name);
  };
  protoOf(JsonArrayDescriptor).qr = function (index) {
    return this.z19_1.qr(index);
  };
  protoOf(JsonArrayDescriptor).rr = function (index) {
    return this.z19_1.rr(index);
  };
  protoOf(JsonArrayDescriptor).sr = function (index) {
    return this.z19_1.sr(index);
  };
  protoOf(JsonArrayDescriptor).kr = function () {
    return this.z19_1.kr();
  };
  protoOf(JsonArrayDescriptor).cr = function () {
    return this.z19_1.cr();
  };
  protoOf(JsonArrayDescriptor).lr = function () {
    return this.z19_1.lr();
  };
  protoOf(JsonArrayDescriptor).mr = function () {
    return this.z19_1.mr();
  };
  protoOf(JsonArrayDescriptor).nr = function () {
    return this.z19_1.nr();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.v19_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).eq = function () {
    return this.v19_1;
  };
  protoOf(JsonArraySerializer).fq = function (decoder) {
    verify(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).fq(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.r19_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).eq = function () {
    return this.r19_1;
  };
  protoOf(JsonPrimitiveSerializer).fq = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.x18();
    if (!(result instanceof JsonPrimitive)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.w18().q16_1.u18_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.s19_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).eq = function () {
    return this.s19_1;
  };
  protoOf(JsonNullSerializer).fq = function (decoder) {
    verify(decoder);
    if (decoder.os()) {
      throw decodingExceptionOf("Expected 'null' literal");
    }
    decoder.ps();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.t19_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).eq = function () {
    return this.t19_1;
  };
  protoOf(JsonLiteralSerializer).fq = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.x18();
    if (!(result instanceof JsonLiteral)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.w18().q16_1.u18_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify(decoder) {
    asJsonDecoder(decoder);
  }
  function _get_original__l7ku1m($this) {
    var tmp0 = $this.b1a_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
    return tmp0.n1();
  }
  function defer$o$_get_original_$ref_3cje7k() {
    return constructCallableReference(function (p0) {
      return _get_original__l7ku1m(p0);
    }, 1, 0, 9);
  }
  function defer$1($deferred) {
    this.b1a_1 = lazy($deferred);
  }
  protoOf(defer$1).jr = function () {
    return _get_original__l7ku1m(this).jr();
  };
  protoOf(defer$1).kr = function () {
    return _get_original__l7ku1m(this).kr();
  };
  protoOf(defer$1).mr = function () {
    return _get_original__l7ku1m(this).mr();
  };
  protoOf(defer$1).or = function (index) {
    return _get_original__l7ku1m(this).or(index);
  };
  protoOf(defer$1).pr = function (name) {
    return _get_original__l7ku1m(this).pr(name);
  };
  protoOf(defer$1).qr = function (index) {
    return _get_original__l7ku1m(this).qr(index);
  };
  protoOf(defer$1).rr = function (index) {
    return _get_original__l7ku1m(this).rr(index);
  };
  protoOf(defer$1).sr = function (index) {
    return _get_original__l7ku1m(this).sr(index);
  };
  function JsonDecodingException(fullMessage, shortMessage, offset, path, input, hint, cause) {
    cause = cause === VOID ? null : cause;
    JsonException.call(this, fullMessage, cause);
    captureStack(this, JsonDecodingException);
    this.d1a_1 = shortMessage;
    this.e1a_1 = offset;
    this.f1a_1 = path;
    this.g1a_1 = input;
    this.h1a_1 = hint;
  }
  function JsonException(message, cause) {
    SerializationException_init_$Init$(message, cause, this);
    captureStack(this, JsonException);
    this.i1a_1 = message;
    delete this.message;
  }
  protoOf(JsonException).e = function () {
    return this.i1a_1;
  };
  function JsonEncodingException(shortMessage, classSerialName, hint, cause) {
    classSerialName = classSerialName === VOID ? null : classSerialName;
    hint = hint === VOID ? null : hint;
    cause = cause === VOID ? null : cause;
    JsonException.call(this, formatEncodingException(shortMessage, hint), cause);
    captureStack(this, JsonEncodingException);
    this.k1a_1 = shortMessage;
    this.l1a_1 = classSerialName;
    this.m1a_1 = hint;
  }
  function readIfAbsent($this, descriptor, index) {
    $this.o1a_1 = (!descriptor.sr(index) && descriptor.rr(index).cr());
    return $this.o1a_1;
  }
  function JsonElementMarker$readIfAbsent$ref(p0) {
    return constructCallableReference(function (p0_0, p1) {
      var tmp0 = p0;
      return readIfAbsent(tmp0, p0_0, p1);
    }, 2, 0, 10, 'readIfAbsent', [p0]);
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.n1a_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.o1a_1 = false;
  }
  protoOf(JsonElementMarker).p1a = function (index) {
    this.n1a_1.mx(index);
  };
  protoOf(JsonElementMarker).q1a = function () {
    return this.n1a_1.nx();
  };
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp2 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
  }
  function access$formatDecodingException$tJsonExceptionsKt(offset, shortMessage, path, hint, input) {
    return formatDecodingException(offset, shortMessage, path, hint, input);
  }
  function decodingExceptionOf(shortMessage, hint) {
    hint = hint === VOID ? null : hint;
    return new JsonDecodingException(formatDecodingException(-1, shortMessage, null, hint, null), shortMessage, -1, null, null, hint);
  }
  function formatDecodingException(offset, shortMessage, path, hint, input) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (offset >= 0) {
      this_0.q('Unexpected JSON token at offset ' + offset + ': ');
    }
    this_0.q(shortMessage);
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(path == null || isBlank(path))) {
      this_0.q(' at path: ');
      this_0.q(path);
    }
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(hint == null || isBlank(hint))) {
      this_0.q('\n' + hint);
    }
    if (!(input == null)) {
      this_0.q('\nJSON input: ');
      this_0.q(input);
    }
    return this_0.toString();
  }
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.r1a('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.d17_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.s1a(nonFiniteFpMessage(result, null), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.jr() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.kr().toString() + "'"), keyDescriptor.jr(), "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function access$nonFiniteFpMessage$tJsonExceptionsKt(value, key) {
    return nonFiniteFpMessage(value, key);
  }
  function decodingExceptionOf_0(_this__u8e3s4, shortMessage, offset, path, hint, input, cause) {
    cause = cause === VOID ? null : cause;
    // Inline function 'kotlinx.serialization.json.internal.ifDebugInput' call
    var tmp;
    if (_this__u8e3s4.c17_1.u18_1) {
      tmp = toString(minify(input, offset));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    return new JsonDecodingException(formatDecodingException(offset, shortMessage, path, hint, inputValue), shortMessage, offset, path, inputValue, hint, cause);
  }
  function formatEncodingException(shortMessage, hint) {
    var tmp;
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (hint == null || isBlank(hint)) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    return shortMessage + tmp;
  }
  function nonFiniteFpMessage(value, key) {
    return 'Unexpected special floating-point value ' + toString(value) + (!(key == null) ? ' with key ' + key + '. ' : '. ') + 'By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification.';
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  var JsonSerializationNamesKey;
  function ignoreUnknownKeys(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp;
    if (json.q16_1.e18_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.nr();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.r();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonIgnoreUnknownKeys) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$0);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.pr(name);
    if (!(index === -3))
      return index;
    if (!json.q16_1.o18_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.jr() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.q16_1.q18_1 && equals(descriptor.kr(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).t2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.kr(), CLASS_getInstance()) ? json.q16_1.p18_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.u1a(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.mr();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.qr(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonNames) {
            destination.c1(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1a_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp1_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp1_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.or(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.w1a(_this__u8e3s4, i, _this__u8e3s4.or(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.r()) {
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.kr(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).r2(name)) {
      throw decodingExceptionOf("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.or(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.or(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.a3(name, index);
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function RedactedKey() {
  }
  var RedactedKey_instance;
  function RedactedKey_getInstance() {
    return RedactedKey_instance;
  }
  function resize($this) {
    var newSize = imul($this.b1b_1, 2);
    $this.z1a_1 = copyOf($this.z1a_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.a1b_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.a1b_1 = newIndices;
  }
  function JsonPath(configuration) {
    this.x1a_1 = configuration.v18_1;
    this.y1a_1 = configuration.u18_1;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.z1a_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.a1b_1 = tmp_2;
    this.b1b_1 = -1;
  }
  protoOf(JsonPath).c1b = function (sd) {
    this.b1b_1 = this.b1b_1 + 1 | 0;
    var depth = this.b1b_1;
    if (depth >= this.x1a_1) {
      jsonTooNested(this.x1a_1);
    }
    if (depth === this.z1a_1.length) {
      resize(this);
    }
    this.z1a_1[depth] = sd;
  };
  protoOf(JsonPath).d1b = function (index) {
    this.a1b_1[this.b1b_1] = index;
  };
  protoOf(JsonPath).e1b = function (key) {
    var tmp;
    if (!(this.a1b_1[this.b1b_1] === -2)) {
      this.b1b_1 = this.b1b_1 + 1 | 0;
      tmp = this.b1b_1 === this.z1a_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.z1a_1[this.b1b_1] = this.y1a_1 ? key : RedactedKey_instance;
    this.a1b_1[this.b1b_1] = -2;
  };
  protoOf(JsonPath).f1b = function () {
    if (this.a1b_1[this.b1b_1] === -2) {
      this.z1a_1[this.b1b_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).g1b = function () {
    var depth = this.b1b_1;
    if (this.a1b_1[depth] === -2) {
      this.a1b_1[depth] = -1;
      this.b1b_1 = this.b1b_1 - 1 | 0;
    }
    if (!(this.b1b_1 === -1)) {
      this.b1b_1 = this.b1b_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).h1b = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('$');
    // Inline function 'kotlin.repeat' call
    var times = this.b1b_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.z1a_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.kr(), LIST_getInstance())) {
            if (!(this.a1b_1[index] === -1)) {
              this_0.q('[');
              this_0.lc(this.a1b_1[index]);
              this_0.q(']');
            }
          } else {
            var idx = this.a1b_1[index];
            if (idx >= 0) {
              this_0.q('.');
              this_0.q(element.or(idx));
            }
          }
        } else {
          if (element === RedactedKey_instance) {
            this_0.q('[<debug info disabled>]');
          } else {
            if (!(element === Tombstone_instance)) {
              this_0.q('[');
              this_0.q("'");
              this_0.w(element);
              this_0.q("'");
              this_0.q(']');
            }
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.h1b();
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.nr().t();
    while (_iterator__ex2g4s.u()) {
      var annotation = _iterator__ex2g4s.v();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.i1b_1;
    }
    return json.q16_1.m18_1;
  }
  function subtypeNotRegisteredMessageJson(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    var tmp;
    if (subClassName == null) {
      tmp = to('Class discriminator was missing and no default serializers were registered ' + scope, null);
    } else {
      tmp = to("Serializer for subclass '" + subClassName + "' is not found " + scope, "Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n" + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
    }
    return tmp;
  }
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.kr();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.j1b_1)
      return Unit_instance;
    if (!$this.k1b_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function JsonSerializersModuleValidator(configuration) {
    this.j1b_1 = configuration.l18_1;
    this.k1b_1 = !configuration.t18_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).h16 = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).k16 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.eq();
    checkKind(this, descriptor, actualClass);
  };
  protoOf(JsonSerializersModuleValidator).l16 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).m16 = function (baseClass, defaultDeserializerProvider) {
  };
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.l1b_1.q1b(6);
    if ($this.l1b_1.r1b() === 4) {
      $this.l1b_1.s1a('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.l1b_1.s1b()) {
      var key = $this.m1b_1 ? $this.l1b_1.u1b() : $this.l1b_1.t1b();
      $this.l1b_1.q1b(5);
      var element = $this.v1b();
      // Inline function 'kotlin.collections.set' call
      result.a3(key, element);
      lastToken = $this.l1b_1.w1b();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.l1b_1.s1a('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.l1b_1.q1b(7);
    } else if (lastToken === 4) {
      if (!$this.n1b_1) {
        invalidTrailingComma($this.l1b_1);
      }
      $this.l1b_1.q1b(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, $receiver, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, $receiver, $completion);
    tmp.s8_1 = Unit_instance;
    tmp.t8_1 = null;
    return tmp.y8();
  }
  function readArray($this) {
    var lastToken = $this.l1b_1.w1b();
    if ($this.l1b_1.r1b() === 4) {
      $this.l1b_1.s1a('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.l1b_1.s1b()) {
      var element = $this.v1b();
      result.c1(element);
      lastToken = $this.l1b_1.w1b();
      if (!(lastToken === 4)) {
        var tmp0 = $this.l1b_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.d17_1;
        if (!condition) {
          var tmp$ret$2 = 'Expected end of the array or comma';
          tmp0.s1a(tmp$ret$2, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.l1b_1.q1b(9);
    } else if (lastToken === 4) {
      if (!$this.n1b_1) {
        invalidTrailingComma($this.l1b_1, 'array');
      }
      $this.l1b_1.q1b(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.m1b_1 || !isString) {
      tmp = $this.l1b_1.u1b();
    } else {
      tmp = $this.l1b_1.t1b();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.t1c_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).y1c = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.z1c($this$DeepRecursiveFunction, it, $completion);
    tmp.s8_1 = Unit_instance;
    tmp.t8_1 = null;
    return tmp.y8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).m9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.y1c(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).y8 = function () {
    var suspendResult = this.s8_1;
    $sm: do
      try {
        var tmp = this.q8_1;
        switch (tmp) {
          case 0:
            this.r8_1 = 3;
            var tmp0_subject = this.t1c_1.l1b_1.r1b();
            if (tmp0_subject === 1) {
              this.w1c_1 = readValue(this.t1c_1, true);
              this.q8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.w1c_1 = readValue(this.t1c_1, false);
                this.q8_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.x1c_1 = this.t1c_1;
                  this.x1c_1.p1b_1 = this.x1c_1.p1b_1 + 1 | 0;
                  if (this.x1c_1.p1b_1 >= this.x1c_1.o1b_1) {
                    jsonTooNested(this.x1c_1.o1b_1);
                  }
                  this.q8_1 = 1;
                  suspendResult = readObject_0(this.t1c_1, this.u1c_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    var tmp_0 = this;
                    var this_0 = this.t1c_1;
                    this_0.p1b_1 = this_0.p1b_1 + 1 | 0;
                    if (this_0.p1b_1 >= this_0.o1b_1) {
                      jsonTooNested(this_0.o1b_1);
                    }
                    var result = readArray(this.t1c_1);
                    this_0.p1b_1 = this_0.p1b_1 - 1 | 0;
                    tmp_0.w1c_1 = result;
                    this.q8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_1 = this;
                    this.t1c_1.l1b_1.s1a("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            var result_0 = suspendResult;
            this.x1c_1.p1b_1 = this.x1c_1.p1b_1 - 1 | 0;
            this.w1c_1 = result_0;
            this.q8_1 = 2;
            continue $sm;
          case 2:
            return this.w1c_1;
          case 3:
            throw this.t8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.r8_1 === 3) {
          throw e;
        } else {
          this.q8_1 = this.r8_1;
          this.t8_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).z1c = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.t1c_1, completion);
    i.u1c_1 = $this$DeepRecursiveFunction;
    i.v1c_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$DeepRecursiveFunction, it, $completion) {
      return i.y1c($this$DeepRecursiveFunction, it, $completion);
    }, 2);
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1c_1 = _this__u8e3s4;
    this.g1c_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).y8 = function () {
    var suspendResult = this.s8_1;
    $sm: do
      try {
        var tmp = this.q8_1;
        switch (tmp) {
          case 0:
            this.r8_1 = 5;
            this.i1c_1 = this.f1c_1;
            this.j1c_1 = this.i1c_1.l1b_1.q1b(6);
            if (this.i1c_1.l1b_1.r1b() === 4) {
              this.i1c_1.l1b_1.s1a('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.h1c_1 = LinkedHashMap_init_$Create$();
            this.q8_1 = 1;
            continue $sm;
          case 1:
            if (!this.i1c_1.l1b_1.s1b()) {
              this.q8_1 = 4;
              continue $sm;
            }

            this.k1c_1 = this.i1c_1.m1b_1 ? this.i1c_1.l1b_1.u1b() : this.i1c_1.l1b_1.t1b();
            this.i1c_1.l1b_1.q1b(5);
            this.q8_1 = 2;
            suspendResult = this.g1c_1.wn(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.h1c_1;
            var key = this.k1c_1;
            tmp0.a3(key, element);
            this.j1c_1 = this.i1c_1.l1b_1.w1b();
            var tmp0_subject = this.j1c_1;
            if (tmp0_subject === 4) {
              this.q8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.q8_1 = 4;
                continue $sm;
              } else {
                this.i1c_1.l1b_1.s1a('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.q8_1 = 1;
            continue $sm;
          case 4:
            if (this.j1c_1 === 6) {
              this.i1c_1.l1b_1.q1b(7);
            } else if (this.j1c_1 === 4) {
              if (!this.i1c_1.n1b_1) {
                invalidTrailingComma(this.i1c_1.l1b_1);
              }
              this.i1c_1.l1b_1.q1b(7);
            }

            return new JsonObject(this.h1c_1);
          case 5:
            throw this.t8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.r8_1 === 5) {
          throw e;
        } else {
          this.q8_1 = this.r8_1;
          this.t8_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.l1b_1 = lexer;
    this.m1b_1 = configuration.f18_1;
    this.n1b_1 = configuration.r18_1;
    this.o1b_1 = configuration.v18_1;
    this.p1b_1 = this.l1b_1.e17_1.b1b_1;
  }
  protoOf(JsonTreeReader).v1b = function () {
    var token = this.l1b_1.r1b();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      this.p1b_1 = this.p1b_1 + 1 | 0;
      if (this.p1b_1 >= this.o1b_1) {
        jsonTooNested(this.o1b_1);
      }
      var result;
      if (this.p1b_1 === 200) {
        this.p1b_1 = this.p1b_1 - 1 | 0;
        result = readDeepRecursive(this);
      } else {
        result = readObject(this);
        this.p1b_1 = this.p1b_1 - 1 | 0;
      }
      tmp = result;
    } else if (token === 8) {
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.withDepthControl' call
      this.p1b_1 = this.p1b_1 + 1 | 0;
      if (this.p1b_1 >= this.o1b_1) {
        jsonTooNested(this.o1b_1);
      }
      var result_0 = readArray(this);
      this.p1b_1 = this.p1b_1 - 1 | 0;
      tmp = result_0;
    } else {
      this.l1b_1.s1a('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function jsonTooNested(maxStackDepth) {
    throw decodingExceptionOf('Json input is too nested and may be impossible to parse without stack overflow.', 'Current nesting limit is ' + maxStackDepth + ". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.");
  }
  var static_init_called_0;
  function static_init_0() {
    if (static_init_called_0)
      return Unit_instance;
    static_init_called_0 = true;
    LexerMode_OBJ_instance = new LexerMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    LexerMode_LIST_instance = new LexerMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    LexerMode_MAP_instance = new LexerMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    LexerMode_POLY_OBJ_instance = new LexerMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  var LexerMode_OBJ_instance;
  var LexerMode_LIST_instance;
  var LexerMode_MAP_instance;
  var LexerMode_POLY_OBJ_instance;
  function LexerMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.c1d_1 = begin;
    this.d1d_1 = end;
  }
  function modeFor(_this__u8e3s4, desc) {
    var tmp0_subject = desc.kr();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = LexerMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = LexerMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.rr(0), _this__u8e3s4.st());
          var keyKind = keyDescriptor.kr();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            tmp_0 = LexerMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.q16_1.g18_1) {
              tmp_0 = LexerMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = LexerMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.kr(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.lr()) {
      tmp = carrierDescriptor(_this__u8e3s4.rr(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function LexerMode_OBJ_getInstance() {
    static_init_0();
    return LexerMode_OBJ_instance;
  }
  function LexerMode_LIST_getInstance() {
    static_init_0();
    return LexerMode_LIST_instance;
  }
  function LexerMode_MAP_getInstance() {
    static_init_0();
    return LexerMode_MAP_instance;
  }
  function LexerMode_POLY_OBJ_getInstance() {
    static_init_0();
    return LexerMode_POLY_OBJ_instance;
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.t1a_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).e1d = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.t1a_1;
    var value_0 = this_0.t2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.a3(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.a3(tmp2, value_1);
  };
  protoOf(DescriptorSchemaCache).u1a = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.f1d(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.e1d(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).f1d = function (descriptor, key) {
    var tmp0_safe_receiver = this.t1a_1.t2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.t2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.g1d_1 = discriminatorToSkip;
  }
  function trySkip($this, $receiver, unknownKey) {
    if ($receiver == null)
      return false;
    if ($receiver.g1d_1 === unknownKey) {
      $receiver.g1d_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.ut(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.w16_1.r1b() === 4) {
      $this.w16_1.s1a('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.y16_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.y16_1 === -1)) {
        hasComma = $this.w16_1.i1d();
      }
    } else {
      $this.w16_1.h1d(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.w16_1.s1b()) {
      if (decodingKey) {
        if ($this.y16_1 === -1) {
          var tmp0 = $this.w16_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.d17_1;
          if (!condition) {
            var tmp$ret$1 = 'Unexpected leading comma';
            tmp0.s1a(tmp$ret$1, position);
          }
        } else {
          var tmp0_0 = $this.w16_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.d17_1;
          if (!condition_0) {
            var tmp$ret$3 = 'Expected comma after the key-value pair';
            tmp0_0.s1a(tmp$ret$3, position_0);
          }
        }
      }
      $this.y16_1 = $this.y16_1 + 1 | 0;
      tmp = $this.y16_1;
    } else {
      if (hasComma && !$this.u16_1.q16_1.r18_1) {
        invalidTrailingComma($this.w16_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.u16_1;
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.sr(index);
      var elementDescriptor = descriptor.rr(index);
      var tmp;
      if (isOptional && !elementDescriptor.cr()) {
        tmp = $this.w16_1.j1d(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.kr(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.cr()) {
          tmp_0 = $this.w16_1.j1d(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.w16_1.k1d($this.a17_1.f18_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.q16_1.i18_1 && elementDescriptor.cr();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.w16_1.t1b();
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.w16_1.i1d();
    while ($this.w16_1.s1b()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.w16_1.h1d(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.u16_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.a17_1.k18_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.w16_1.i1d();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.b17_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.p1a(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, descriptor, key);
      }
    }
    if (hasComma && !$this.u16_1.q16_1.r18_1) {
      invalidTrailingComma($this.w16_1);
    }
    var tmp1_safe_receiver = $this.b17_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q1a();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.u16_1) || trySkip($this, $this.z16_1, key)) {
      $this.w16_1.m1d($this.a17_1.f18_1);
    } else {
      $this.w16_1.e17_1.g1b();
      $this.w16_1.l1d(key);
    }
    return $this.w16_1.i1d();
  }
  function decodeListIndex($this) {
    var hasComma = $this.w16_1.i1d();
    var tmp;
    if ($this.w16_1.s1b()) {
      if (!($this.y16_1 === -1) && !hasComma) {
        $this.w16_1.s1a('Expected end of the array or comma');
      }
      $this.y16_1 = $this.y16_1 + 1 | 0;
      tmp = $this.y16_1;
    } else {
      if (hasComma && !$this.u16_1.q16_1.r18_1) {
        invalidTrailingComma($this.w16_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.a17_1.f18_1) {
      tmp = $this.w16_1.o1d();
    } else {
      tmp = $this.w16_1.n1d();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.u16_1 = json;
    this.v16_1 = mode;
    this.w16_1 = lexer;
    this.x16_1 = this.u16_1.st();
    this.y16_1 = -1;
    this.z16_1 = discriminatorHolder;
    this.a17_1 = this.u16_1.q16_1;
    this.b17_1 = this.a17_1.i18_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).w18 = function () {
    return this.u16_1;
  };
  protoOf(StreamingJsonDecoder).st = function () {
    return this.x16_1;
  };
  protoOf(StreamingJsonDecoder).x18 = function () {
    return (new JsonTreeReader(this.u16_1.q16_1, this.w16_1)).v1b();
  };
  protoOf(StreamingJsonDecoder).ct = function (deserializer) {
    var tmp2_withExceptionHandling_this = this.w16_1.e17_1;
    var tmp3_withExceptionHandling_this = this.w16_1;
    // Inline function 'kotlinx.serialization.json.internal.withExceptionHandling' call
    var tmp;
    try {
      var tmp_0;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp_0 = true;
      } else {
        tmp_0 = this.u16_1.q16_1.l18_1;
      }
      if (tmp_0) {
        return deserializer.fq(this);
      }
      var discriminator = classDiscriminator(deserializer.eq(), this.u16_1);
      var tmp0_elvis_lhs = this.w16_1.p1d(discriminator, this.a17_1.f18_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$2;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_2;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_2 = true;
          } else {
            tmp_2 = this.w18().q16_1.l18_1;
          }
          if (tmp_2) {
            tmp$ret$2 = tmp2.fq(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.eq(), this.w18());
          var tmp2_0 = this.x18();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.eq().jr();
          if (!(tmp2_0 instanceof JsonObject)) {
            var tmp2_1 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2_0).o() + ' as the serialized body of ' + serialName;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path = this.w16_1.e17_1.h1b();
            var tmp_3;
            if (this.w18().q16_1.u18_1) {
              var tmp$ret$8 = toString(tmp2_0);
              tmp_3 = toString(minify(tmp$ret$8));
            } else {
              tmp_3 = null;
            }
            var inputValue = tmp_3;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path, null, inputValue), tmp2_1, -1, path, inputValue, null);
          }
          var jsonTree = tmp2_0;
          var tmp0_safe_receiver = jsonTree.td(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4 = tmp2.tq(this, type);
          var actualSerializer = (!(tmp_4 == null) ? isInterface(tmp_4, DeserializationStrategy) : false) ? tmp_4 : null;
          if (actualSerializer == null) {
            var _destruct__k2r9zo = subtypeNotRegisteredMessageJson(type, tmp2.sq());
            var message = _destruct__k2r9zo.lg();
            var hint = _destruct__k2r9zo.mg();
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.w16_1.e17_1.h1b();
            var tmp_5;
            if (this.w18().q16_1.u18_1) {
              var tmp$ret$13 = jsonTree.toString();
              tmp_5 = toString(minify(tmp$ret$13));
            } else {
              tmp_5 = null;
            }
            var inputValue_0 = tmp_5;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, message, path_0, hint, inputValue_0), message, -1, path_0, inputValue_0, hint);
          }
          tmp$ret$2 = readPolymorphicJson(this.w18(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_1;
      var tmp_6 = deserializer.tq(this, type_0);
      var actualSerializer_0 = (!(tmp_6 == null) ? isInterface(tmp_6, DeserializationStrategy) : false) ? tmp_6 : null;
      if (actualSerializer_0 == null) {
        var _destruct__k2r9zo_0 = subtypeNotRegisteredMessageJson(type_0, deserializer.sq());
        var message_0 = _destruct__k2r9zo_0.lg();
        var hint_0 = _destruct__k2r9zo_0.mg();
        this.w16_1.s1a(message_0, VOID, hint_0);
      }
      this.z16_1 = new DiscriminatorHolder(discriminator);
      tmp = actualSerializer_0.fq(this);
    } catch ($p) {
      var tmp_7;
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains(ensureNotNull(e.message), 'at path'))
          throw e;
        var tmp_8 = plus(e.message, ' at path: ');
        var tmp$ret$14 = tmp2_withExceptionHandling_this.h1b();
        throw missingFieldExceptionWithNewMessage(e, tmp_8 + tmp$ret$14);
      } else {
        if ($p instanceof SerializationException) {
          var e_0 = $p;
          throw e_0;
        } else {
          if ($p instanceof Exception) {
            var e_1 = $p;
            // Inline function 'kotlinx.serialization.json.internal.errorFromDeserializer' call
            var path_1 = tmp2_withExceptionHandling_this.h1b();
            var causeMessage = e_1.message;
            var shortMessage = 'Deserialization failed because of ' + (causeMessage == null ? 'an exception' : "'" + causeMessage + "' exception") + ' in the decoder';
            var tmp_9;
            if (this.w18().q16_1.u18_1) {
              var tmp$ret$19 = tmp3_withExceptionHandling_this.q1d();
              tmp_9 = toString(minify(tmp$ret$19));
            } else {
              tmp_9 = null;
            }
            var inputValue_1 = tmp_9;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, path_1, null, inputValue_1), shortMessage, -1, path_1, inputValue_1, null, e_1);
          } else {
            throw $p;
          }
        }
      }
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).dt = function (descriptor) {
    var newMode = modeFor(this.u16_1, descriptor);
    this.w16_1.e17_1.c1b(descriptor);
    this.w16_1.h1d(newMode.c1d_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.a1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.u16_1, newMode, this.w16_1, descriptor, this.z16_1);
        break;
      default:
        var tmp_0;
        if (this.v16_1.equals(newMode) && this.u16_1.q16_1.i18_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.u16_1, newMode, this.w16_1, descriptor, this.z16_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).et = function (descriptor) {
    if (descriptor.mr() === 0 && ignoreUnknownKeys(descriptor, this.u16_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.w16_1.i1d() && !this.u16_1.q16_1.r18_1) {
      invalidTrailingComma(this.w16_1, '');
    }
    this.w16_1.h1d(this.v16_1.d1d_1);
    this.w16_1.e17_1.g1b();
  };
  protoOf(StreamingJsonDecoder).os = function () {
    var tmp;
    var tmp0_safe_receiver = this.b17_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o1a_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.w16_1.r1d();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).ps = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).pt = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.v16_1.equals(LexerMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.w16_1.e17_1.f1b();
    }
    var value = protoOf(AbstractDecoder).pt.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.w16_1.e17_1.e1b(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).ut = function (descriptor) {
    var index;
    switch (this.v16_1.a1_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.v16_1.equals(LexerMode_MAP_getInstance())) {
      this.w16_1.e17_1.d1b(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).qs = function () {
    return this.w16_1.s1d();
  };
  protoOf(StreamingJsonDecoder).rs = function () {
    var value = this.w16_1.t1d();
    if (!(value === fromInt(convertToByte(value)))) {
      this.w16_1.s1a("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  };
  protoOf(StreamingJsonDecoder).ss = function () {
    var value = this.w16_1.t1d();
    if (!(value === fromInt(convertToShort(value)))) {
      this.w16_1.s1a("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  };
  protoOf(StreamingJsonDecoder).ts = function () {
    var value = this.w16_1.t1d();
    if (!(value === fromInt(convertToInt(value)))) {
      this.w16_1.s1a("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).us = function () {
    return this.w16_1.t1d();
  };
  protoOf(StreamingJsonDecoder).vs = function () {
    var tmp0 = this.w16_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u1b();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s1a("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.u16_1.q16_1.n18_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.w16_1, result);
  };
  protoOf(StreamingJsonDecoder).ws = function () {
    var tmp0 = this.w16_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u1b();
      try {
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s1a("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.u16_1.q16_1.n18_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.w16_1, result);
  };
  protoOf(StreamingJsonDecoder).xs = function () {
    var string = this.w16_1.u1b();
    if (!(string.length === 1)) {
      this.w16_1.s1a("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).ys = function () {
    var tmp;
    if (this.a17_1.f18_1) {
      tmp = this.w16_1.o1d();
    } else {
      tmp = this.w16_1.t1b();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).at = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.w16_1, this.u16_1) : protoOf(AbstractDecoder).at.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).zs = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.u16_1, this.ys(), ' at path ' + this.w16_1.e17_1.h1b());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.u1d_1 = lexer;
    this.v1d_1 = json.st();
  }
  protoOf(JsonDecoderForUnsignedTypes).st = function () {
    return this.v1d_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).ut = function (descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).ts = function () {
    var tmp0 = this.u1d_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u1b();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s1a("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).us = function () {
    var tmp0 = this.u1d_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u1b();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s1a("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).rs = function () {
    var tmp0 = this.u1d_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u1b();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s1a("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).ss = function () {
    var tmp0 = this.u1d_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u1b();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.s1a("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.lr() && get_unsignedNumberDescriptors().j2(_this__u8e3s4);
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_0(Companion_getInstance()).eq(), serializer_1(Companion_getInstance_0()).eq(), serializer_2(Companion_getInstance_1()).eq(), serializer_3(Companion_getInstance_2()).eq()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charCodeAt(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.ic(value, lastPos, i);
          _this__u8e3s4.q(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.ic(value, lastPos, value.length);
    else
      _this__u8e3s4.q(value);
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
  }
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = Array(93);
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(128);
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$13 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$13);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$14 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$14);
      ESCAPE_MARKERS = this_7;
    }
  }
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    var descriptor = deserializer.eq();
    return (new JsonTreeDecoder(_this__u8e3s4, element, descriptor, discriminator, descriptor)).ct(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    var tmp2 = "Failed to parse literal '" + literal.toString() + "' as " + type + ' value';
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var path = $this.c1e(tag);
    var tmp;
    if ($this.w18().q16_1.u18_1) {
      var tmp$ret$3 = toString($this.d1e());
      tmp = toString(minify(tmp$ret$3));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.y1d_1 = json;
    this.z1d_1 = value;
    this.a1e_1 = polymorphicDiscriminator;
    this.b1e_1 = this.w18().q16_1;
  }
  protoOf(AbstractJsonTreeDecoder).w18 = function () {
    return this.y1d_1;
  };
  protoOf(AbstractJsonTreeDecoder).n1 = function () {
    return this.z1d_1;
  };
  protoOf(AbstractJsonTreeDecoder).st = function () {
    return this.w18().st();
  };
  protoOf(AbstractJsonTreeDecoder).d1e = function () {
    var tmp0_safe_receiver = this.j14();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.e1e(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.n1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).c1e = function (currentTag) {
    return this.l14() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).x18 = function () {
    return this.d1e();
  };
  protoOf(AbstractJsonTreeDecoder).ct = function (deserializer) {
    var tmp2_withExceptionHandling_this = this.d1e();
    // Inline function 'kotlinx.serialization.json.internal.withExceptionHandling' call
    var tmp;
    try {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
        var tmp_0;
        if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
          tmp_0 = true;
        } else {
          tmp_0 = this.w18().q16_1.l18_1;
        }
        if (tmp_0) {
          tmp$ret$2 = deserializer.fq(this);
          break $l$block;
        }
        var discriminator = classDiscriminator(deserializer.eq(), this.w18());
        var tmp2 = this.x18();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName = deserializer.eq().jr();
        if (!(tmp2 instanceof JsonObject)) {
          var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path = this.l14();
          var tmp_1;
          if (this.w18().q16_1.u18_1) {
            var tmp$ret$8 = toString(tmp2);
            tmp_1 = toString(minify(tmp$ret$8));
          } else {
            tmp_1 = null;
          }
          var inputValue = tmp_1;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
        }
        var jsonTree = tmp2;
        var tmp0_safe_receiver = jsonTree.td(discriminator);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
        var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
        var tmp_2 = deserializer.tq(this, type);
        var actualSerializer = (!(tmp_2 == null) ? isInterface(tmp_2, DeserializationStrategy) : false) ? tmp_2 : null;
        if (actualSerializer == null) {
          var _destruct__k2r9zo = subtypeNotRegisteredMessageJson(type, deserializer.sq());
          var message = _destruct__k2r9zo.lg();
          var hint = _destruct__k2r9zo.mg();
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_0 = this.l14();
          var tmp_3;
          if (this.w18().q16_1.u18_1) {
            var tmp$ret$13 = jsonTree.toString();
            tmp_3 = toString(minify(tmp$ret$13));
          } else {
            tmp_3 = null;
          }
          var inputValue_0 = tmp_3;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, message, path_0, hint, inputValue_0), message, -1, path_0, inputValue_0, hint);
        }
        tmp$ret$2 = readPolymorphicJson(this.w18(), discriminator, jsonTree, actualSerializer);
      }
      tmp = tmp$ret$2;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains(ensureNotNull(e.message), 'at path'))
          throw e;
        var tmp_5 = plus(e.message, ' at path: ');
        var tmp$ret$14 = this.l14();
        throw missingFieldExceptionWithNewMessage(e, tmp_5 + tmp$ret$14);
      } else {
        if ($p instanceof SerializationException) {
          var e_0 = $p;
          throw e_0;
        } else {
          if ($p instanceof Exception) {
            var e_1 = $p;
            // Inline function 'kotlinx.serialization.json.internal.errorFromDeserializer' call
            var path_1 = this.l14();
            var causeMessage = e_1.message;
            var shortMessage = 'Deserialization failed because of ' + (causeMessage == null ? 'an exception' : "'" + causeMessage + "' exception") + ' in the decoder';
            var tmp_6;
            if (this.w18().q16_1.u18_1) {
              var tmp$ret$19 = toString(tmp2_withExceptionHandling_this);
              tmp_6 = toString(minify(tmp$ret$19));
            } else {
              tmp_6 = null;
            }
            var inputValue_1 = tmp_6;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, path_1, null, inputValue_1), shortMessage, -1, path_1, inputValue_1, null, e_1);
          } else {
            throw $p;
          }
        }
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).k14 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).dt = function (descriptor) {
    var currentObject = this.d1e();
    var tmp0_subject = descriptor.kr();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.w18();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.jr();
      if (!(currentObject instanceof JsonArray)) {
        var tmp2 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.l14();
        var tmp_2;
        if (this.w18().q16_1.u18_1) {
          var tmp$ret$6 = toString(currentObject);
          tmp_2 = toString(minify(tmp$ret$6));
        } else {
          tmp_2 = null;
        }
        var inputValue = tmp_2;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.w18();
        var keyDescriptor = carrierDescriptor(descriptor.rr(0), this_0.st());
        var keyKind = keyDescriptor.kr();
        var tmp_3;
        var tmp_4;
        if (keyKind instanceof PrimitiveKind) {
          tmp_4 = true;
        } else {
          tmp_4 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_4) {
          var tmp_5 = this.w18();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.jr();
          if (!(currentObject instanceof JsonObject)) {
            var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_0;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.l14();
            var tmp_6;
            if (this.w18().q16_1.u18_1) {
              var tmp$ret$15 = toString(currentObject);
              tmp_6 = toString(minify(tmp$ret$15));
            } else {
              tmp_6 = null;
            }
            var inputValue_0 = tmp_6;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path_0, null, inputValue_0), tmp2_0, -1, path_0, inputValue_0, null);
          }
          tmp_3 = new JsonTreeMapDecoder(tmp_5, currentObject, descriptor);
        } else {
          if (this_0.q16_1.g18_1) {
            var tmp_7 = this.w18();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.jr();
            if (!(currentObject instanceof JsonArray)) {
              var tmp2_1 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_1;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var path_1 = this.l14();
              var tmp_8;
              if (this.w18().q16_1.u18_1) {
                var tmp$ret$23 = toString(currentObject);
                tmp_8 = toString(minify(tmp$ret$23));
              } else {
                tmp_8 = null;
              }
              var inputValue_1 = tmp_8;
              throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path_1, null, inputValue_1), tmp2_1, -1, path_1, inputValue_1, null);
            }
            tmp_3 = new JsonTreeListDecoder(tmp_7, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_3;
      } else {
        var tmp_9 = this.w18();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.jr();
        if (!(currentObject instanceof JsonObject)) {
          var tmp2_2 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_2;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_2 = this.l14();
          var tmp_10;
          if (this.w18().q16_1.u18_1) {
            var tmp$ret$30 = toString(currentObject);
            tmp_10 = toString(minify(tmp$ret$30));
          } else {
            tmp_10 = null;
          }
          var inputValue_2 = tmp_10;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_2, path_2, null, inputValue_2), tmp2_2, -1, path_2, inputValue_2, null);
        }
        tmp = new JsonTreeDecoder(tmp_9, currentObject, descriptor, this.a1e_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).et = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).os = function () {
    var tmp = this.d1e();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).f1e = function (tag, enumDescriptor) {
    var tmp = this.w18();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.e1e(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.jr();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.c1e(tag);
      var tmp_0;
      if (this.w18().q16_1.u18_1) {
        var tmp$ret$7 = toString(tmp2);
        tmp_0 = toString(minify(tmp$ret$7));
      } else {
        tmp_0 = null;
      }
      var inputValue = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.g19());
  };
  protoOf(AbstractJsonTreeDecoder).x14 = function (tag, enumDescriptor) {
    return this.f1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).g1e = function (tag) {
    return !(this.e1e(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).n14 = function (tag) {
    return this.g1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h1e = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'boolean';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1e(tag);
        var tmp;
        if (this.w18().q16_1.u18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).o14 = function (tag) {
    return this.h1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i1e = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'byte';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1e(tag);
        var tmp;
        if (this.w18().q16_1.u18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToByte(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).p14 = function (tag) {
    return this.i1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j1e = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'short';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1e(tag);
        var tmp;
        if (this.w18().q16_1.u18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToShort(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).q14 = function (tag) {
    return this.j1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k1e = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'int';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1e(tag);
        var tmp;
        if (this.w18().q16_1.u18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToInt(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).r14 = function (tag) {
    return this.k1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).l1e = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'long';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1e(tag);
        var tmp;
        if (this.w18().q16_1.u18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).s14 = function (tag) {
    return this.l1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).m1e = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'float';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1e(tag);
        var tmp;
        if (this.w18().q16_1.u18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.w18().q16_1.n18_1;
    if (specialFp || isFinite(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.w18().q16_1.u18_1) {
      var tmp$ret$13 = toString(this.d1e());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).t14 = function (tag) {
    return this.m1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n1e = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'double';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1e(tag);
        var tmp;
        if (this.w18().q16_1.u18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.w18().q16_1.n18_1;
    if (specialFp || isFinite_0(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.w18().q16_1.u18_1) {
      var tmp$ret$13 = toString(this.d1e());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).u14 = function (tag) {
    return this.n1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).o1e = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1e(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'char';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1e(tag);
        var tmp;
        if (this.w18().q16_1.u18_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.g19()));
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0.x1_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).v14 = function (tag) {
    return this.o1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).p1e = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.e1e(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'string';
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.c1e(tag);
      var tmp;
      if (this.w18().q16_1.u18_1) {
        var tmp$ret$6 = toString(value);
        tmp = toString(minify(tmp$ret$6));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral)) {
      var tmp2_0 = "Expected string value for a non-null key '" + tag + "', got null literal instead";
      var tmp4 = this.c1e(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint = "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.";
      var tmp_0;
      if (this.w18().q16_1.u18_1) {
        var tmp$ret$10 = toString(this.d1e());
        tmp_0 = toString(minify(tmp$ret$10));
      } else {
        tmp_0 = null;
      }
      var inputValue_0 = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, tmp4, hint, inputValue_0), tmp2_0, -1, tmp4, inputValue_0, hint);
    }
    if (!value_0.j19_1 && !this.w18().q16_1.f18_1) {
      var tmp2_1 = "String literal for value of key '" + tag + "' should be quoted";
      var tmp4_0 = this.c1e(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint_0 = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
      var tmp_1;
      if (this.w18().q16_1.u18_1) {
        var tmp$ret$14 = toString(this.d1e());
        tmp_1 = toString(minify(tmp$ret$14));
      } else {
        tmp_1 = null;
      }
      var inputValue_1 = tmp_1;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, tmp4_0, hint_0, inputValue_1), tmp2_1, -1, tmp4_0, inputValue_1, hint_0);
    }
    return value_0.l19_1;
  };
  protoOf(AbstractJsonTreeDecoder).w14 = function (tag) {
    return this.p1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q1e = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.w18();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.e1e(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.jr();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c1e(tag);
        var tmp_1;
        if (this.w18().q16_1.u18_1) {
          var tmp$ret$7 = toString(tmp2);
          tmp_1 = toString(minify(tmp$ret$7));
        } else {
          tmp_1 = null;
        }
        var inputValue = tmp_1;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.g19());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.w18());
    } else {
      tmp = protoOf(NamedValueDecoder).y14.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).y14 = function (tag, inlineDescriptor) {
    return this.q1e((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).at = function (descriptor) {
    return !(this.j14() == null) ? protoOf(NamedValueDecoder).at.call(this, descriptor) : (new JsonPrimitiveDecoder(this.w18(), this.n1(), this.a1e_1)).at(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, element) {
    var tmp0 = $this.w18();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.sr(index);
      var elementDescriptor = descriptor.rr(index);
      var tmp;
      if (isOptional && !elementDescriptor.cr()) {
        tmp = element instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.kr(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.cr()) {
          tmp_0 = element instanceof JsonNull;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_safe_receiver = element instanceof JsonPrimitive ? element : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.q16_1.i18_1 && elementDescriptor.cr();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function throwUnknownKey($this, key) {
    var tmp2 = "Encountered an unknown key '" + key + "'";
    var tmp4 = $this.l14();
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.";
    var tmp;
    if ($this.w18().q16_1.u18_1) {
      var tmp$ret$3 = $this.n1().toString();
      tmp = toString(minify(tmp$ret$3));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, tmp4, hint, inputValue), tmp2, -1, tmp4, inputValue, hint);
  }
  function JsonTreeDecoder(json, value, descriptor, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.x1e_1 = value;
    this.y1e_1 = polyDescriptor;
    this.z1e_1 = this.n1().l1().t();
    this.a1f_1 = this.b1e_1.i18_1 ? null : new JsonElementMarker(descriptor);
    this.b1f_1 = null;
    this.c1f_1 = null;
  }
  protoOf(JsonTreeDecoder).n1 = function () {
    return this.x1e_1;
  };
  protoOf(JsonTreeDecoder).ut = function (descriptor) {
    var entries = this.z1e_1;
    $l$loop: while (entries.u()) {
      var entry = entries.v();
      var key = entry.m1();
      var index = getJsonNameIndex(descriptor, this.w18(), key);
      if (!(index === -3)) {
        if (this.b1e_1.k18_1 && coerceInputValue_0(this, descriptor, index, entry.n1())) {
          continue $l$loop;
        }
        var tmp0_safe_receiver = this.a1f_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.p1a(index);
        }
        this.b1f_1 = key;
        this.c1f_1 = entry.n1();
        return index;
      }
      if (!(key === this.a1e_1) && !ignoreUnknownKeys(descriptor, this.w18())) {
        throwUnknownKey(this, key);
      }
    }
    var tmp1_safe_receiver = this.a1f_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q1a();
    var markerIndex = tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
    if (!(markerIndex === -1)) {
      this.b1f_1 = descriptor.or(markerIndex);
      this.c1f_1 = null;
    }
    return markerIndex;
  };
  protoOf(JsonTreeDecoder).os = function () {
    var tmp;
    var tmp0_safe_receiver = this.a1f_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o1a_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = protoOf(AbstractJsonTreeDecoder).os.call(this);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JsonTreeDecoder).f14 = function (descriptor, index) {
    var tmp0_elvis_lhs = this.b1f_1;
    return tmp0_elvis_lhs == null ? descriptor.or(index) : tmp0_elvis_lhs;
  };
  protoOf(JsonTreeDecoder).e1e = function (tag) {
    var tmp0_elvis_lhs = this.c1f_1;
    return tmp0_elvis_lhs == null ? getValue(this.n1(), tag) : tmp0_elvis_lhs;
  };
  protoOf(JsonTreeDecoder).dt = function (descriptor) {
    if (descriptor === this.y1e_1) {
      var tmp = this.w18();
      var tmp2 = this.d1e();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.y1e_1.jr();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.l14();
        var tmp_0;
        if (this.w18().q16_1.u18_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      return new JsonTreeDecoder(tmp, tmp2, descriptor, this.a1e_1, this.y1e_1);
    }
    return protoOf(AbstractJsonTreeDecoder).dt.call(this, descriptor);
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.j1f_1 = value;
    this.k1f_1 = this.j1f_1.e1();
    this.l1f_1 = -1;
  }
  protoOf(JsonTreeListDecoder).n1 = function () {
    return this.j1f_1;
  };
  protoOf(JsonTreeListDecoder).f14 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).e1e = function (tag) {
    return this.j1f_1.d1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).ut = function (descriptor) {
    while (this.l1f_1 < (this.k1f_1 - 1 | 0)) {
      this.l1f_1 = this.l1f_1 + 1 | 0;
      return this.l1f_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.s1f_1 = value;
    this.z14('primitive');
  }
  protoOf(JsonPrimitiveDecoder).n1 = function () {
    return this.s1f_1;
  };
  protoOf(JsonPrimitiveDecoder).ut = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).e1e = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.s1f_1;
  };
  function JsonTreeMapDecoder(json, value, descriptor) {
    JsonTreeDecoder.call(this, json, value, descriptor);
    this.f1g_1 = toList(value.u2());
    this.g1g_1 = imul(this.f1g_1.e1(), 2);
    this.h1g_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).f14 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.f1g_1.d1(i);
  };
  protoOf(JsonTreeMapDecoder).ut = function (descriptor) {
    while (this.h1g_1 < (this.g1g_1 - 1 | 0)) {
      this.h1g_1 = this.h1g_1 + 1 | 0;
      return this.h1g_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).e1e = function (tag) {
    return (this.h1g_1 % 2 | 0) === 0 ? JsonPrimitive_1(tag) : getValue(this.n1(), tag);
  };
  protoOf(JsonTreeMapDecoder).et = function (descriptor) {
  };
  function appendEscape($this, lastPosition, current) {
    $this.i1g(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.i1g(lastPosition, currentPosition);
    var result = $this.g17_1.toString();
    $this.g17_1.oc(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.f17_1);
    $this.f17_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.q1d(), $this.d17_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.j1g(currentPosition);
    if (currentPosition === -1) {
      $this.s1a('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.q1d();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.q1d(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.s1a("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.g17_1.s(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.d17_1 = startPos;
      $this.k1g();
      if (($this.d17_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.s1a('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.d17_1);
    }
    $this.g17_1.s(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.s1a("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.j1g(start);
    if (current >= charSequenceLength($this.q1d()) || current === -1) {
      $this.s1a('EOF');
    }
    var tmp = $this.q1d();
    var _unary__edvuaz = current;
    current = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(tmp, _unary__edvuaz);
    var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.s1a("Expected valid boolean literal prefix, but had '" + $this.u1b() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.q1d()) - current | 0) < literalSuffix.length) {
      $this.s1a('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.q1d(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.s1a("Expected valid boolean literal prefix, but had '" + $this.u1b() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.d17_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer(configuration) {
    this.c17_1 = configuration;
    this.d17_1 = 0;
    this.e17_1 = new JsonPath(this.c17_1);
    this.f17_1 = null;
    this.g17_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).k1g = function () {
  };
  protoOf(AbstractJsonLexer).i1d = function () {
    var current = this.l1g();
    var source = this.q1d();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.d17_1 = this.d17_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).m1g = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).h17 = function () {
    var nextToken = this.w1b();
    if (!(nextToken === 10)) {
      this.s1a('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.q1d(), this.d17_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).q1b = function (expected) {
    var token = this.w1b();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true && this.d17_1 > 0 ? this.d17_1 - 1 | 0 : this.d17_1;
      var s = this.d17_1 === charSequenceLength(this.q1d()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.q1d(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.s1a(tmp$ret$1, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).n1g = function (expected) {
    if (this.d17_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.d17_1;
        try {
          this.d17_1 = this.d17_1 - 1 | 0;
          tmp$ret$0 = this.u1b();
          break $l$block;
        }finally {
          this.d17_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.r1a("Expected string literal but 'null' literal was found", this.d17_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true && this.d17_1 > 0 ? this.d17_1 - 1 | 0 : this.d17_1;
    var s = this.d17_1 === charSequenceLength(this.q1d()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.q1d(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.s1a(tmp$ret$3, position);
  };
  protoOf(AbstractJsonLexer).r1b = function () {
    var source = this.q1d();
    var cpos = this.d17_1;
    $l$loop_0: while (true) {
      cpos = this.j1g(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.d17_1 = cpos;
      return charToTokenClass(ch);
    }
    this.d17_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).j1d = function (doConsume) {
    var current = this.l1g();
    current = this.j1g(current);
    var len = charSequenceLength(this.q1d()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.q1d(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.q1d(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.d17_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).r1d = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.j1d(doConsume) : $super.j1d.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).k1d = function (isLenient) {
    var token = this.r1b();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.u1b();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.t1b();
    }
    var string = tmp;
    this.f17_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).o1g = function () {
    this.f17_1 = null;
  };
  protoOf(AbstractJsonLexer).p1g = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.q1d();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).t1b = function () {
    if (!(this.f17_1 == null)) {
      return takePeeked(this);
    }
    return this.n1d();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.j1g(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.s1a('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.i1g(lastPosition, currentPosition);
          currentPosition = this.j1g(currentPosition);
          if (currentPosition === -1) {
            this.s1a('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.p1g(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.d17_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).o1d = function () {
    var result = this.u1b();
    if (result === 'null' && wasUnquotedString(this)) {
      this.s1a("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).u1b = function () {
    if (!(this.f17_1 == null)) {
      return takePeeked(this);
    }
    var current = this.l1g();
    if (current >= charSequenceLength(this.q1d()) || current === -1) {
      this.s1a('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.q1d(), current));
    if (token === 1) {
      return this.t1b();
    }
    if (!(token === 0)) {
      this.s1a('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.q1d(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.q1d(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.q1d())) {
        usedAppend = true;
        this.i1g(this.d17_1, current);
        var eof = this.j1g(current);
        if (eof === -1) {
          this.d17_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.p1g(this.d17_1, current);
    } else {
      tmp = decodedString(this, this.d17_1, current);
    }
    var result = tmp;
    this.d17_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).i1g = function (fromIndex, toIndex) {
    this.g17_1.ic(this.q1d(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).m1d = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.r1b();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.u1b();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.r1b();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.u1b();
        else
          this.n1d();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.c1(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8)) {
          this.s1a('found ] instead of }');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6)) {
          this.s1a('found } instead of ]');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.s1a('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.w1b();
      if (tokenStack.e1() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.q1d()) + "', currentPosition=" + this.d17_1 + ')';
  };
  protoOf(AbstractJsonLexer).l1d = function (key) {
    var processed = this.p1g(0, this.d17_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.r1a("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).r1a = function (message, position, hint) {
    throw decodingExceptionOf_0(this, message, position, this.e17_1.h1b(), hint, this.q1d());
  };
  protoOf(AbstractJsonLexer).s1a = function (message, position, hint, $super) {
    position = position === VOID ? this.d17_1 : position;
    hint = hint === VOID ? null : hint;
    return $super === VOID ? this.r1a(message, position, hint) : $super.r1a.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).t1d = function () {
    var current = this.l1g();
    current = this.j1g(current);
    if (current >= charSequenceLength(this.q1d()) || current === -1) {
      this.s1a('EOF');
    }
    var tmp;
    if (charSequenceGet(this.q1d(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.q1d())) {
        this.s1a('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = 0n;
    var exponentAccumulator = 0n;
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.q1d()))) {
      var ch = charSequenceGet(this.q1d(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.s1a("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current);
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.s1a("Unexpected symbol '-' in numeric literal", current);
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.s1a("Unexpected symbol '+' in numeric literal", current);
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.s1a("Unexpected symbol '-' in numeric literal", current);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.s1a("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current - 1 | 0);
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = exponentAccumulator;
        // Inline function 'kotlin.Long.plus' call
        var this_1 = multiply(this_0, fromInt(10));
        exponentAccumulator = add(this_1, fromInt(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      var this_2 = accumulator;
      // Inline function 'kotlin.Long.minus' call
      var this_3 = multiply(this_2, fromInt(10));
      accumulator = subtract(this_3, fromInt(digit));
      if (accumulator > 0n) {
        this.s1a('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.s1a('Expected numeric literal', current);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.s1a('EOF');
      }
      if (!(charSequenceGet(this.q1d(), current) === _Char___init__impl__6a9atx(34))) {
        this.s1a('Expected closing quotation mark', current);
      }
      current = current + 1 | 0;
    }
    this.d17_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(9223372036854775807n) || doubleAccumulator < toNumber(-9223372036854775808n)) {
        this.s1a('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.s1a("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!(accumulator === -9223372036854775808n)) {
      tmp_0 = negate(accumulator);
    } else {
      this.s1a('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).m19 = function () {
    var result = this.t1d();
    var next = this.w1b();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true && this.d17_1 > 0 ? this.d17_1 - 1 | 0 : this.d17_1;
      var s = this.d17_1 === charSequenceLength(this.q1d()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.q1d(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.s1a(tmp$ret$1, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).s1d = function () {
    var current = this.l1g();
    if (current === charSequenceLength(this.q1d())) {
      this.s1a('EOF');
    }
    var tmp;
    if (charSequenceGet(this.q1d(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.d17_1 === charSequenceLength(this.q1d())) {
        this.s1a('EOF');
      }
      if (!(charSequenceGet(this.q1d(), this.d17_1) === _Char___init__impl__6a9atx(34))) {
        this.s1a('Expected closing quotation mark');
      }
      this.d17_1 = this.d17_1 + 1 | 0;
    }
    return result;
  };
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().r1g_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().q1g_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.q1g_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.r1g_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.q1g_1 = charArray(117);
    this.r1g_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source, configuration) {
    StringJsonLexer.call(this, source, configuration);
  }
  protoOf(StringJsonLexerWithComments).w1b = function () {
    var source = this.q1d();
    var cpos = this.l1g();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.d17_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).s1b = function () {
    var current = this.l1g();
    if (current >= this.q1d().length || current === -1)
      return false;
    return this.m1g(charCodeAt(this.q1d(), current));
  };
  protoOf(StringJsonLexerWithComments).h1d = function (expected) {
    var source = this.q1d();
    var current = this.l1g();
    if (current >= source.length || current === -1) {
      this.d17_1 = -1;
      this.n1g(expected);
    }
    var c = charCodeAt(source, current);
    this.d17_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.n1g(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).r1b = function () {
    var source = this.q1d();
    var cpos = this.l1g();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.d17_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).l1g = function () {
    var current = this.d17_1;
    if (current === -1)
      return current;
    var source = this.q1d();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.d17_1 = source.length;
            this.s1a('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.d17_1 = current;
    return current;
  };
  function StringJsonLexer(source, configuration) {
    AbstractJsonLexer.call(this, configuration);
    this.d1h_1 = source;
  }
  protoOf(StringJsonLexer).q1d = function () {
    return this.d1h_1;
  };
  protoOf(StringJsonLexer).j1g = function (position) {
    return position < this.q1d().length ? position : -1;
  };
  protoOf(StringJsonLexer).w1b = function () {
    var source = this.q1d();
    var cpos = this.d17_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.d17_1 = cpos;
      return charToTokenClass(c);
    }
    this.d17_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).s1b = function () {
    var current = this.d17_1;
    if (current === -1)
      return false;
    var source = this.q1d();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.d17_1 = current;
      return this.m1g(c);
    }
    this.d17_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).l1g = function () {
    var current = this.d17_1;
    if (current === -1)
      return current;
    var source = this.q1d();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.d17_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).h1d = function (expected) {
    if (this.d17_1 === -1) {
      this.n1g(expected);
    }
    var source = this.q1d();
    var cpos = this.d17_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.d17_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.n1g(expected);
    }
    this.d17_1 = -1;
    this.n1g(expected);
  };
  protoOf(StringJsonLexer).n1d = function () {
    this.h1d(_Char___init__impl__6a9atx(34));
    var current = this.d17_1;
    var closingQuote = indexOf_0(this.q1d(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.u1b();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false && this.d17_1 > 0 ? this.d17_1 - 1 | 0 : this.d17_1;
      var s = this.d17_1 === charSequenceLength(this.q1d()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.q1d(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.s1a(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.q1d(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.q1d(), this.d17_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.d17_1 = closingQuote + 1 | 0;
    return substring(this.q1d(), current, closingQuote);
  };
  protoOf(StringJsonLexer).p1d = function (keyToMatch, isLenient) {
    var positionSnapshot = this.d17_1;
    try {
      if (!(this.w1b() === 6))
        return null;
      var firstKey = this.k1d(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.o1g();
      if (!(this.w1b() === 5))
        return null;
      return this.k1d(isLenient);
    }finally {
      this.d17_1 = positionSnapshot;
      this.o1g();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.q16_1.s18_1 ? new StringJsonLexer(source, json.q16_1) : new StringJsonLexerWithComments(source, json.q16_1);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.s16_1;
  }
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).cr = get_isNullable;
  protoOf(defer$1).lr = get_isInline;
  protoOf(defer$1).nr = get_annotations;
  defineProp(protoOf(JsonException), 'message', function () {
    return this.e();
  });
  protoOf(JsonSerializersModuleValidator).j16 = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  RedactedKey_instance = new RedactedKey();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = JsonElementSerializer_getInstance;
  _.$_$.b = JsonArrayBuilder;
  _.$_$.c = JsonArray;
  _.$_$.d = JsonObjectBuilder;
  _.$_$.e = Json_0;
  _.$_$.f = put_1;
  _.$_$.g = put_0;
  _.$_$.h = put;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
