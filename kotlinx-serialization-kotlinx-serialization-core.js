(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.wb;
  var initMetadataForInterface = kotlin_kotlin.$_$.bb;
  var VOID = kotlin_kotlin.$_$.d;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.e2;
  var Unit_instance = kotlin_kotlin.$_$.s2;
  var constructCallableReference = kotlin_kotlin.$_$.oa;
  var emptyList = kotlin_kotlin.$_$.o6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.y2;
  var lazy = kotlin_kotlin.$_$.wg;
  var KProperty1 = kotlin_kotlin.$_$.vc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ua;
  var toString = kotlin_kotlin.$_$.zb;
  var initMetadataForClass = kotlin_kotlin.$_$.xa;
  var objectCreate = kotlin_kotlin.$_$.vb;
  var captureStack = kotlin_kotlin.$_$.ga;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.g4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.i4;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.k4;
  var IllegalArgumentException = kotlin_kotlin.$_$.tf;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.c3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.s;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.r;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var isInterface = kotlin_kotlin.$_$.mb;
  var KClass = kotlin_kotlin.$_$.sc;
  var Triple = kotlin_kotlin.$_$.bg;
  var getKClass = kotlin_kotlin.$_$.qc;
  var Pair = kotlin_kotlin.$_$.wf;
  var Entry = kotlin_kotlin.$_$.j5;
  var KtMap = kotlin_kotlin.$_$.l5;
  var KtMutableMap = kotlin_kotlin.$_$.o5;
  var LinkedHashMap = kotlin_kotlin.$_$.g5;
  var HashMap = kotlin_kotlin.$_$.e5;
  var KtSet = kotlin_kotlin.$_$.q5;
  var KtMutableSet = kotlin_kotlin.$_$.p5;
  var LinkedHashSet = kotlin_kotlin.$_$.h5;
  var HashSet = kotlin_kotlin.$_$.f5;
  var Collection = kotlin_kotlin.$_$.d5;
  var KtList = kotlin_kotlin.$_$.i5;
  var KtMutableList = kotlin_kotlin.$_$.m5;
  var ArrayList = kotlin_kotlin.$_$.c5;
  var copyToArray = kotlin_kotlin.$_$.l6;
  var Result = kotlin_kotlin.$_$.xf;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var equals = kotlin_kotlin.$_$.qa;
  var getStringHashCode = kotlin_kotlin.$_$.va;
  var isBlank = kotlin_kotlin.$_$.qd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j4;
  var toList = kotlin_kotlin.$_$.e8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.d3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.j3;
  var toHashSet = kotlin_kotlin.$_$.b8;
  var toBooleanArray = kotlin_kotlin.$_$.z7;
  var withIndex = kotlin_kotlin.$_$.k8;
  var to = kotlin_kotlin.$_$.ch;
  var toMap = kotlin_kotlin.$_$.g8;
  var lazy_0 = kotlin_kotlin.$_$.xg;
  var contentEquals = kotlin_kotlin.$_$.x5;
  var initMetadataForObject = kotlin_kotlin.$_$.db;
  var getKClassFromExpression = kotlin_kotlin.$_$.pc;
  var Char = kotlin_kotlin.$_$.lf;
  var Companion_getInstance = kotlin_kotlin.$_$.i2;
  var Duration = kotlin_kotlin.$_$.ff;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.j2;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.k2;
  var toIntOrNull = kotlin_kotlin.$_$.se;
  var hashCode = kotlin_kotlin.$_$.wa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n4;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.e3;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.k3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o3;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.p3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.g3;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.h3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.n3;
  var asList = kotlin_kotlin.$_$.t5;
  var isArray = kotlin_kotlin.$_$.eb;
  var until = kotlin_kotlin.$_$.kc;
  var step = kotlin_kotlin.$_$.jc;
  var getValue = kotlin_kotlin.$_$.w6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ya;
  var get_lastIndex = kotlin_kotlin.$_$.c7;
  var shiftLeft = kotlin_kotlin.$_$.y9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.pg;
  var joinToString = kotlin_kotlin.$_$.a7;
  var toString_0 = kotlin_kotlin.$_$.bh;
  var KTypeParameter = kotlin_kotlin.$_$.wc;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.i3;
  var booleanArray = kotlin_kotlin.$_$.fa;
  var emptyMap = kotlin_kotlin.$_$.p6;
  var contentHashCode = kotlin_kotlin.$_$.a6;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.l2;
  var isCharArray = kotlin_kotlin.$_$.hb;
  var charArray = kotlin_kotlin.$_$.ia;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.a2;
  var isDoubleArray = kotlin_kotlin.$_$.jb;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.b2;
  var isFloatArray = kotlin_kotlin.$_$.kb;
  var Companion_instance = kotlin_kotlin.$_$.m2;
  var isLongArray = kotlin_kotlin.$_$.s9;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.q2;
  var ULongArray = kotlin_kotlin.$_$.gg;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.j1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.h1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.c2;
  var isIntArray = kotlin_kotlin.$_$.lb;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.p2;
  var UIntArray = kotlin_kotlin.$_$.eg;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.c1;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.a1;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.d2;
  var isShortArray = kotlin_kotlin.$_$.ob;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.r2;
  var UShortArray = kotlin_kotlin.$_$.ig;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.q1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.o1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.z1;
  var isByteArray = kotlin_kotlin.$_$.gb;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.o2;
  var UByteArray = kotlin_kotlin.$_$.cg;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.w;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.t;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.y1;
  var isBooleanArray = kotlin_kotlin.$_$.fb;
  var coerceAtLeast = kotlin_kotlin.$_$.ec;
  var copyOf = kotlin_kotlin.$_$.f6;
  var copyOf_0 = kotlin_kotlin.$_$.h6;
  var copyOf_1 = kotlin_kotlin.$_$.i6;
  var copyOf_2 = kotlin_kotlin.$_$.d6;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.m1;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.n1;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.k1;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.l1;
  var copyOf_3 = kotlin_kotlin.$_$.k6;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.f1;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.g1;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.d1;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.e1;
  var copyOf_4 = kotlin_kotlin.$_$.c6;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.t1;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.u1;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.r1;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.s1;
  var copyOf_5 = kotlin_kotlin.$_$.g6;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.y;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.z;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.v;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.x;
  var copyOf_6 = kotlin_kotlin.$_$.e6;
  var trimIndent = kotlin_kotlin.$_$.cf;
  var charSequenceLength = kotlin_kotlin.$_$.la;
  var lastOrNull = kotlin_kotlin.$_$.e7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.d7;
  var ULong = kotlin_kotlin.$_$.hg;
  var UInt = kotlin_kotlin.$_$.fg;
  var UByte = kotlin_kotlin.$_$.dg;
  var UShort = kotlin_kotlin.$_$.jg;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yg;
  var get_js = kotlin_kotlin.$_$.qb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.g2;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.y6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.q4;
  var get_indices_0 = kotlin_kotlin.$_$.x6;
  var get_longArrayClass = kotlin_kotlin.$_$.t9;
  var Unit = kotlin_kotlin.$_$.kg;
  var Instant = kotlin_kotlin.$_$.gf;
  var Uuid = kotlin_kotlin.$_$.if;
  var mapOf = kotlin_kotlin.$_$.l7;
  var Companion_instance_0 = kotlin_kotlin.$_$.n2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.qg;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(elementNames$$inlined$Iterable$1);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.bq(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.lt(descriptor, index, deserializer, previousValue) : $super.lt.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(InstantSerializer, 'InstantSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(EnumSerializer, 'EnumSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor', VOID, PluginGeneratedSerialDescriptor);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.x15(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(createCache$1);
  initMetadataForClass(createParametrizedCache$1);
  //endregion
  function KSerializer() {
  }
  function DeserializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.cq(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.dq());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.mq('type', serializer_0(StringCompanionObject_instance).aq());
      $this$buildSerialDescriptor.mq('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.nq_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.gq_1 = this$0.oq_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.nq_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return constructCallableReference(function (p0) {
      return p0.aq();
    }, 1, 0, 1);
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.nq_1 = baseClass;
    this.oq_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.pq_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).dq = function () {
    return this.nq_1;
  };
  protoOf(PolymorphicSerializer).aq = function () {
    var tmp0 = this.pq_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.n1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.nq_1) + ')';
  };
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    var tmp0_message = missingFields.e1() === 1 ? "Field '" + missingFields.d1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing";
    MissingFieldException.call($this, tmp0_message, null, missingFields, serialName);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(message, cause, missingFields, serialName) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.qq_1 = missingFields;
    this.rq_1 = serialName;
  }
  protoOf(MissingFieldException).sq = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.qq_1, this.rq_1);
  };
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.l();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.k();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = typeOrThrow(item);
      destination.b1(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.r()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.uq(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.tq()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        tmp_1 = _Result___get_isFailure__impl__jpiriv(this_1) ? null : _Result___get_value__impl__bjfvqg(this_1);
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_2;
    if (typeArguments.r()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.uq(rootClass) : tmp0_elvis_lhs;
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_3 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      tmp_2 = tmp_3;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_4;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var serializers = tmp_4;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.vq(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_5;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp4_elvis_lhs;
      }
      tmp_2 = tmp_5;
    }
    var contextualSerializer = tmp_2;
    var tmp_6;
    if (contextualSerializer == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_6 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_6;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s = typeArguments.t();
      while (_iterator__ex2g4s.u()) {
        var item = _iterator__ex2g4s.v();
        var tmp$ret$2 = serializer(_this__u8e3s4, item);
        destination.b1(tmp$ret$2);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.t();
      while (_iterator__ex2g4s_0.u()) {
        var item_0 = _iterator__ex2g4s_0.v();
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$5 = tmp_0;
        destination_0.b1(tmp$ret$5);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.d1(0), serializers.d1(1), serializers.d1(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.d1(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.d1(0).j();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().wq(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().wq(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().xq(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().xq(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.d1(0).j();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.d1(0).j();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.aq().yq()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function serializer_1(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function serializer_5(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return InstantSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.uq(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.aq();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.dr_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.zq_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.cr_1 = original;
    this.dr_1 = kClass;
    this.er_1 = this.cr_1.fr() + '<' + this.dr_1.o() + '>';
  }
  protoOf(ContextDescriptor).fr = function () {
    return this.er_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.cr_1, another.cr_1) && another.dr_1.equals(this.dr_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.dr_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.er_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.dr_1) + ', original: ' + toString(this.cr_1) + ')';
  };
  protoOf(ContextDescriptor).gr = function () {
    return this.cr_1.gr();
  };
  protoOf(ContextDescriptor).yq = function () {
    return this.cr_1.yq();
  };
  protoOf(ContextDescriptor).hr = function () {
    return this.cr_1.hr();
  };
  protoOf(ContextDescriptor).ir = function () {
    return this.cr_1.ir();
  };
  protoOf(ContextDescriptor).jr = function () {
    return this.cr_1.jr();
  };
  protoOf(ContextDescriptor).kr = function (index) {
    return this.cr_1.kr(index);
  };
  protoOf(ContextDescriptor).lr = function (name) {
    return this.cr_1.lr(name);
  };
  protoOf(ContextDescriptor).mr = function (index) {
    return this.cr_1.mr(index);
  };
  protoOf(ContextDescriptor).nr = function (index) {
    return this.cr_1.nr(index);
  };
  protoOf(ContextDescriptor).or = function (index) {
    return this.cr_1.or(index);
  };
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function SerialDescriptor() {
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementNames$$inlined$Iterable$1(_this__u8e3s4);
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementNames$1($this_elementNames) {
    this.qr_1 = $this_elementNames;
    this.pr_1 = $this_elementNames.ir();
  }
  protoOf(elementNames$1).u = function () {
    return this.pr_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.qr_1.ir();
    var _unary__edvuaz = this.pr_1;
    this.pr_1 = _unary__edvuaz - 1 | 0;
    return this.qr_1.kr(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.rr_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.rr_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.tr_1 = $this_elementDescriptors;
    this.sr_1 = $this_elementDescriptors.ir();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.sr_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.tr_1.ir();
    var _unary__edvuaz = this.sr_1;
    this.sr_1 = _unary__edvuaz - 1 | 0;
    return this.tr_1.nr(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.ur_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.ur_1);
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.hq_1.e1(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.eq_1 = serialName;
    this.fq_1 = false;
    this.gq_1 = emptyList();
    this.hq_1 = ArrayList_init_$Create$_0();
    this.iq_1 = HashSet_init_$Create$();
    this.jq_1 = ArrayList_init_$Create$_0();
    this.kq_1 = ArrayList_init_$Create$_0();
    this.lq_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).vr = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.iq_1.b1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.eq_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.hq_1.b1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.jq_1.b1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.kq_1.b1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.lq_1.b1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).mq = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.vr(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.vr.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.hq_1.e1(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.hs_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.n1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.gs_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef(p0);
    }, 1, 0, 2);
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.wr_1 = serialName;
    this.xr_1 = kind;
    this.yr_1 = elementsCount;
    this.zr_1 = builder.gq_1;
    this.as_1 = toHashSet(builder.hq_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.hq_1;
    tmp.bs_1 = copyToArray(this_0);
    this.cs_1 = compactArray(builder.jq_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.kq_1;
    tmp_0.ds_1 = copyToArray(this_1);
    this.es_1 = toBooleanArray(builder.lq_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.bs_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$4 = to(item.yf_1, item.xf_1);
      destination.b1(tmp$ret$4);
    }
    tmp_1.fs_1 = toMap(destination);
    this.gs_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.hs_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).fr = function () {
    return this.wr_1;
  };
  protoOf(SerialDescriptorImpl).gr = function () {
    return this.xr_1;
  };
  protoOf(SerialDescriptorImpl).ir = function () {
    return this.yr_1;
  };
  protoOf(SerialDescriptorImpl).jr = function () {
    return this.zr_1;
  };
  protoOf(SerialDescriptorImpl).is = function () {
    return this.as_1;
  };
  protoOf(SerialDescriptorImpl).kr = function (index) {
    return getChecked(this.bs_1, index);
  };
  protoOf(SerialDescriptorImpl).lr = function (name) {
    var tmp0_elvis_lhs = this.fs_1.s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).mr = function (index) {
    return getChecked(this.ds_1, index);
  };
  protoOf(SerialDescriptorImpl).nr = function (index) {
    return getChecked(this.cs_1, index);
  };
  protoOf(SerialDescriptorImpl).or = function (index) {
    return getChecked_0(this.es_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.fr() === other.fr())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.gs_1, other.gs_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ir() === other.ir())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ir();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.nr(index).fr() === other.nr(index).fr())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.nr(index).gr(), other.nr(index).gr())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    return toStringImpl(this);
  };
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).o());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).js = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).ks = function () {
    return true;
  };
  protoOf(AbstractDecoder).ls = function () {
    return null;
  };
  protoOf(AbstractDecoder).ms = function () {
    var tmp = this.js();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ns = function () {
    var tmp = this.js();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).os = function () {
    var tmp = this.js();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ps = function () {
    var tmp = this.js();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).qs = function () {
    var tmp = this.js();
    return typeof tmp === 'bigint' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).rs = function () {
    var tmp = this.js();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ss = function () {
    var tmp = this.js();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ts = function () {
    var tmp = this.js();
    return tmp instanceof Char ? tmp.w1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).us = function () {
    var tmp = this.js();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).vs = function (enumDescriptor) {
    var tmp = this.js();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ws = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).xs = function (deserializer, previousValue) {
    return this.ys(deserializer);
  };
  protoOf(AbstractDecoder).zs = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).at = function (descriptor) {
  };
  protoOf(AbstractDecoder).bt = function (descriptor, index) {
    return this.ms();
  };
  protoOf(AbstractDecoder).ct = function (descriptor, index) {
    return this.ns();
  };
  protoOf(AbstractDecoder).dt = function (descriptor, index) {
    return this.os();
  };
  protoOf(AbstractDecoder).et = function (descriptor, index) {
    return this.ps();
  };
  protoOf(AbstractDecoder).ft = function (descriptor, index) {
    return this.qs();
  };
  protoOf(AbstractDecoder).gt = function (descriptor, index) {
    return this.rs();
  };
  protoOf(AbstractDecoder).ht = function (descriptor, index) {
    return this.ss();
  };
  protoOf(AbstractDecoder).it = function (descriptor, index) {
    return this.ts();
  };
  protoOf(AbstractDecoder).jt = function (descriptor, index) {
    return this.us();
  };
  protoOf(AbstractDecoder).kt = function (descriptor, index) {
    return this.ws(descriptor.nr(index));
  };
  protoOf(AbstractDecoder).lt = function (descriptor, index, deserializer, previousValue) {
    return this.xs(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).nt = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.aq().yq();
    var tmp;
    if (isNullabilitySupported || this.ks()) {
      tmp = this.xs(deserializer, previousValue);
    } else {
      tmp = this.ls();
    }
    return tmp;
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.jt($this.aq(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.mt($this.aq(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).bq = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.aq();
    var composite = decoder.zs(descriptor);
    var tmp$ret$1;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.pt()) {
        tmp$ret$1 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.qt(this.aq());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.jt(this.aq(), index);
            break;
          case 1:
            var tmp0 = klassName;
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (tmp0 == null) {
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer(this, composite, klassName);
            value = composite.mt(this.aq(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp0_0 = value;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0_0 == null) {
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp0_0;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$1 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$1;
    composite.at(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).cq = function (decoder, klassName) {
    return decoder.ot().st(this.dq(), klassName);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.tt_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).aq = function () {
    return this.tt_1;
  };
  protoOf(NothingSerializer_0).bq = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.ut_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).aq = function () {
    return this.ut_1;
  };
  protoOf(DurationSerializer).vt = function (decoder) {
    return Companion_getInstance().pm(decoder.us());
  };
  protoOf(DurationSerializer).bq = function (decoder) {
    return new Duration(this.vt(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.wt_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).aq = function () {
    return this.wt_1;
  };
  protoOf(InstantSerializer).bq = function (decoder) {
    return Companion_getInstance_0().an(decoder.us());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.xt_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).aq = function () {
    return this.xt_1;
  };
  protoOf(UuidSerializer).bq = function (decoder) {
    return Companion_getInstance_1().ho(decoder.us());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).fr = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).fr = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).fr = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).fr = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.au_1 = elementDescriptor;
    this.bu_1 = 1;
  }
  protoOf(ListLikeDescriptor).gr = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).ir = function () {
    return this.bu_1;
  };
  protoOf(ListLikeDescriptor).kr = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).lr = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).or = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.fr() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).mr = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.fr() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).nr = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.fr() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.au_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.au_1, other.au_1) && this.fr() === other.fr())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.au_1), 31) + getStringHashCode(this.fr()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.fr() + '(' + toString(this.au_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.gu_1 = serialName;
    this.hu_1 = keyDescriptor;
    this.iu_1 = valueDescriptor;
    this.ju_1 = 2;
  }
  protoOf(MapLikeDescriptor).fr = function () {
    return this.gu_1;
  };
  protoOf(MapLikeDescriptor).gr = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).ir = function () {
    return this.ju_1;
  };
  protoOf(MapLikeDescriptor).kr = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).lr = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).or = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.fr() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).mr = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.fr() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).nr = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.fr() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.hu_1;
        break;
      case 1:
        tmp = this.iu_1;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.fr() === other.fr()))
      return false;
    if (!equals(this.hu_1, other.hu_1))
      return false;
    if (!equals(this.iu_1, other.iu_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.fr());
    result = imul(31, result) + hashCode(this.hu_1) | 0;
    result = imul(31, result) + hashCode(this.iu_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.fr() + '(' + toString(this.hu_1) + ', ' + toString(this.iu_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.ou_1 = primitive.fr() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).fr = function () {
    return this.ou_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.qu_1 = new ArrayListClassDesc(element.aq());
  }
  protoOf(ArrayListSerializer).aq = function () {
    return this.qu_1;
  };
  protoOf(ArrayListSerializer).ru = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).su = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ArrayListSerializer).tu = function (_this__u8e3s4) {
    return this.su(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).uu = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).vu = function (_this__u8e3s4) {
    return this.uu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).wu = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).xu = function (_this__u8e3s4) {
    return this.wu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).yu = function (_this__u8e3s4, size) {
    return _this__u8e3s4.p5(size);
  };
  protoOf(ArrayListSerializer).zu = function (_this__u8e3s4, size) {
    return this.yu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).av = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a3(index, element);
  };
  protoOf(ArrayListSerializer).bv = function (_this__u8e3s4, index, element) {
    return this.av(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.iv_1 = new HashSetClassDesc(eSerializer.aq());
  }
  protoOf(HashSetSerializer).aq = function () {
    return this.iv_1;
  };
  protoOf(HashSetSerializer).ru = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).jv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashSetSerializer).tu = function (_this__u8e3s4) {
    return this.jv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).kv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).vu = function (_this__u8e3s4) {
    return this.kv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).lv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).xu = function (_this__u8e3s4) {
    return this.lv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).mv = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).zu = function (_this__u8e3s4, size) {
    return this.mv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).nv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(HashSetSerializer).bv = function (_this__u8e3s4, index, element) {
    return this.nv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.pv_1 = new LinkedHashSetClassDesc(eSerializer.aq());
  }
  protoOf(LinkedHashSetSerializer).aq = function () {
    return this.pv_1;
  };
  protoOf(LinkedHashSetSerializer).ru = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).qv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashSetSerializer).tu = function (_this__u8e3s4) {
    return this.qv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).rv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).vu = function (_this__u8e3s4) {
    return this.rv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).lv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).xu = function (_this__u8e3s4) {
    return this.lv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).sv = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).zu = function (_this__u8e3s4, size) {
    return this.sv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).tv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(LinkedHashSetSerializer).bv = function (_this__u8e3s4, index, element) {
    return this.tv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.wv_1 = new HashMapClassDesc(kSerializer.aq(), vSerializer.aq());
  }
  protoOf(HashMapSerializer).aq = function () {
    return this.wv_1;
  };
  protoOf(HashMapSerializer).ru = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).xv = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(HashMapSerializer).tu = function (_this__u8e3s4) {
    return this.xv(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).yv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).vu = function (_this__u8e3s4) {
    return this.yv(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).zv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).xu = function (_this__u8e3s4) {
    return this.zv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).aw = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).zu = function (_this__u8e3s4, size) {
    return this.aw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.hw_1 = new LinkedHashMapClassDesc(kSerializer.aq(), vSerializer.aq());
  }
  protoOf(LinkedHashMapSerializer).aq = function () {
    return this.hw_1;
  };
  protoOf(LinkedHashMapSerializer).ru = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).iw = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(LinkedHashMapSerializer).tu = function (_this__u8e3s4) {
    return this.iw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).jw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).vu = function (_this__u8e3s4) {
    return this.jw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).zv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).xu = function (_this__u8e3s4) {
    return this.zv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).kw = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).zu = function (_this__u8e3s4, size) {
    return this.kw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.mw_1 = kClass;
    this.nw_1 = new ArrayClassDesc(eSerializer.aq());
  }
  protoOf(ReferenceArraySerializer).aq = function () {
    return this.nw_1;
  };
  protoOf(ReferenceArraySerializer).ru = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).ow = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ReferenceArraySerializer).tu = function (_this__u8e3s4) {
    return this.ow(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).pw = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.mw_1);
  };
  protoOf(ReferenceArraySerializer).vu = function (_this__u8e3s4) {
    return this.pw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).qw = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).xu = function (_this__u8e3s4) {
    return this.qw((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).rw = function (_this__u8e3s4, size) {
    return _this__u8e3s4.p5(size);
  };
  protoOf(ReferenceArraySerializer).zu = function (_this__u8e3s4, size) {
    return this.rw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).sw = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a3(index, element);
  };
  protoOf(ReferenceArraySerializer).bv = function (_this__u8e3s4, index, element) {
    return this.sw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.bw_1 = keySerializer;
    this.cw_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).dw = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.p1_1;
    var last = progression.q1_1;
    var step_0 = progression.r1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.ew(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).dv = function (decoder, builder, startIndex, size) {
    return this.dw(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).ew = function (decoder, index, builder, checkIndex) {
    var key = decoder.mt(this.aq(), index, this.bw_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.qt(this.aq());
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.q2(key)) {
      var tmp_2 = this.cw_1.aq().gr();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.lt(this.aq(), vIndex, this.cw_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.mt(this.aq(), vIndex, this.cw_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.v2(key, value);
  };
  protoOf(MapLikeSerializer).ev = function (decoder, index, builder, checkIndex) {
    return this.ew(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.cv_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).dv = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.ev(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).ev = function (decoder, index, builder, checkIndex) {
    this.bv(builder, index, decoder.mt(this.aq(), index, this.cv_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.rt($this.aq());
    $this.zu(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).gv = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.xu(previous);
    var builder = tmp1_elvis_lhs == null ? this.ru() : tmp1_elvis_lhs;
    var startIndex = this.tu(builder);
    var compositeDecoder = decoder.zs(this.aq());
    if (compositeDecoder.pt()) {
      this.dv(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.qt(this.aq());
        if (index === -1)
          break $l$loop;
        this.fv(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.at(this.aq());
    return this.vu(builder);
  };
  protoOf(AbstractCollectionSerializer).bq = function (decoder) {
    return this.gv(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).fv = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.ev(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.ev.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.uw_1 = new PrimitiveArrayDescriptor(primitiveSerializer.aq());
  }
  protoOf(PrimitiveArraySerializer).aq = function () {
    return this.uw_1;
  };
  protoOf(PrimitiveArraySerializer).vw = function (_this__u8e3s4) {
    return _this__u8e3s4.ww();
  };
  protoOf(PrimitiveArraySerializer).tu = function (_this__u8e3s4) {
    return this.vw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).xw = function (_this__u8e3s4) {
    return _this__u8e3s4.yw();
  };
  protoOf(PrimitiveArraySerializer).vu = function (_this__u8e3s4) {
    return this.xw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).zw = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ax(size);
  };
  protoOf(PrimitiveArraySerializer).zu = function (_this__u8e3s4, size) {
    return this.zw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).bx = function (_this__u8e3s4, index, element) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).bv = function (_this__u8e3s4, index, element) {
    return this.bx(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  protoOf(PrimitiveArraySerializer).ru = function () {
    return this.xu(this.cx());
  };
  protoOf(PrimitiveArraySerializer).bq = function (decoder) {
    return this.gv(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).ex = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.ww() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.ax(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.ax.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_1 = this;
    this.fx_1 = new BigInt64Array(0);
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = new BigInt64Array(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = shiftLeft(-1n, elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.jx_1[slot] = $this.jx_1[slot] | shiftLeft(1n, offsetInSlot);
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.jx_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.jx_1[slot];
        while (!(slotMarks === -1n)) {
          var indexInSlot = countTrailingZeroBits(~slotMarks);
          slotMarks = slotMarks | shiftLeft(1n, indexInSlot);
          var index = slotOffset + indexInSlot | 0;
          if ($this.hx_1($this.gx_1, index)) {
            $this.jx_1[slot] = slotMarks;
            return index;
          }
        }
        $this.jx_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.gx_1 = descriptor;
    this.hx_1 = readIfAbsent;
    var elementsCount = this.gx_1.ir();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = 0n;
      } else {
        tmp_0 = shiftLeft(-1n, elementsCount);
      }
      tmp.ix_1 = tmp_0;
      this.jx_1 = Companion_getInstance_7().fx_1;
    } else {
      this.ix_1 = 0n;
      this.jx_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).kx = function (index) {
    if (index < 64) {
      this.ix_1 = this.ix_1 | shiftLeft(1n, index);
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).lx = function () {
    var elementsCount = this.gx_1.ir();
    while (!(this.ix_1 === -1n)) {
      var index = countTrailingZeroBits(~this.ix_1);
      this.ix_1 = this.ix_1 | shiftLeft(1n, index);
      if (this.hx_1(this.gx_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.mx_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.mx_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.by(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.nx_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return constructCallableReference(function (p0) {
      return p0.aq();
    }, 1, 0, 3);
  }
  function EnumSerializer(serialName, values) {
    this.mx_1 = values;
    this.nx_1 = null;
    var tmp = this;
    tmp.ox_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).aq = function () {
    var tmp0 = this.ox_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.n1();
  };
  protoOf(EnumSerializer).bq = function (decoder) {
    var index = decoder.vs(this.aq());
    if (!(0 <= index ? index <= (this.mx_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.aq().fr() + ' enum values, ' + ('values size is ' + this.mx_1.length));
    }
    return this.mx_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.aq().fr() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.py_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('elementDescriptors', 1, tmp, EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a(), null);
    return tmp0.n1();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.kr(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a() {
    return constructCallableReference(function (p0) {
      return _get_elementDescriptors__y23q9p(p0);
    }, 1, 0, 4);
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.oy_1 = ENUM_getInstance();
    var tmp = this;
    tmp.py_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).gr = function () {
    return this.oy_1;
  };
  protoOf(EnumDescriptor).nr = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!isInterface(other, SerialDescriptor))
      return false;
    if (!(other.gr() === ENUM_getInstance()))
      return false;
    if (!(this.fr() === other.fr()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.fr() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.fr());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = get_elementNames(this).t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.ez_1 = true;
  }
  protoOf(InlineClassDescriptor).hr = function () {
    return this.ez_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.fr() === other.fr())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.ez_1 && contentEquals(this.qy(), other.qy()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ir() === other.ir())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ir();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.nr(index).fr() === other.nr(index).fr())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.nr(index).gr(), other.nr(index).gr())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.fz_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).gz = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.fz_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).aq = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).bq = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.sq(message);
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.iz_1 = OBJECT_getInstance();
    this.jz_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).gr = function () {
    return this.iz_1;
  };
  protoOf(NothingSerialDescriptor).fr = function () {
    return this.jz_1;
  };
  protoOf(NothingSerialDescriptor).ir = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).kr = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).lr = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).or = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).nr = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).mr = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.jz_1) + imul(31, this.iz_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.kz_1 = serializer;
    this.lz_1 = new SerialDescriptorForNullable(this.kz_1.aq());
  }
  protoOf(NullableSerializer).aq = function () {
    return this.lz_1;
  };
  protoOf(NullableSerializer).bq = function (decoder) {
    return decoder.ks() ? decoder.ys(this.kz_1) : decoder.ls();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.kz_1, other.kz_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.kz_1);
  };
  function SerialDescriptorForNullable(original) {
    this.zq_1 = original;
    this.ar_1 = this.zq_1.fr() + '?';
    this.br_1 = cachedSerialNames(this.zq_1);
  }
  protoOf(SerialDescriptorForNullable).fr = function () {
    return this.ar_1;
  };
  protoOf(SerialDescriptorForNullable).is = function () {
    return this.br_1;
  };
  protoOf(SerialDescriptorForNullable).yq = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.zq_1, other.zq_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.zq_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.zq_1), 31);
  };
  protoOf(SerialDescriptorForNullable).gr = function () {
    return this.zq_1.gr();
  };
  protoOf(SerialDescriptorForNullable).hr = function () {
    return this.zq_1.hr();
  };
  protoOf(SerialDescriptorForNullable).ir = function () {
    return this.zq_1.ir();
  };
  protoOf(SerialDescriptorForNullable).jr = function () {
    return this.zq_1.jr();
  };
  protoOf(SerialDescriptorForNullable).kr = function (index) {
    return this.zq_1.kr(index);
  };
  protoOf(SerialDescriptorForNullable).lr = function (name) {
    return this.zq_1.lr(name);
  };
  protoOf(SerialDescriptorForNullable).mr = function (index) {
    return this.zq_1.mr(index);
  };
  protoOf(SerialDescriptorForNullable).nr = function (index) {
    return this.zq_1.nr(index);
  };
  protoOf(SerialDescriptorForNullable).or = function (index) {
    return this.zq_1.or(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.gq_1 = this$0.nz_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer$_get_descriptor_$ref_7z4xb6() {
    return constructCallableReference(function (p0) {
      return p0.aq();
    }, 1, 0, 5);
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.mz_1 = objectInstance;
    this.nz_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.oz_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).aq = function () {
    var tmp0 = this.oz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.n1();
  };
  protoOf(ObjectSerializer).bq = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.aq();
    var composite = decoder.zs(descriptor);
    var tmp$ret$1;
    $l$block_0: {
      if (composite.pt()) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.qt(this.aq());
      if (index === -1) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$1;
    composite.at(descriptor);
    return this.mz_1;
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.j();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0 = _this__u8e3s4.pk_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.pk_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.r())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.is();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.ir());
    var inductionVariable = 0;
    var last = _this__u8e3s4.ir();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.kr(i);
        result.b1(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.o();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.kr(i);
          missingFields.b1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.fr());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.yx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.n1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.ay_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.n1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.tx_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.tx_1[i];
        indices.v2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.qx_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gz();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return constructCallableReference(function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    }, 1, 0, 6);
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.qx_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hz();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2 = item.aq();
          destination.b1(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return constructCallableReference(function (p0) {
      return p0.qy();
    }, 1, 0, 7);
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.qy());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    }, 1, 0, 8);
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.px_1 = serialName;
    this.qx_1 = generatedSerializer;
    this.rx_1 = elementsCount;
    this.sx_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.rx_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.tx_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.rx_1;
    tmp_3.ux_1 = Array(size);
    this.vx_1 = null;
    this.wx_1 = booleanArray(this.rx_1);
    this.xx_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.yx_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.zx_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.ay_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).fr = function () {
    return this.px_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).ir = function () {
    return this.rx_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).gr = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).jr = function () {
    var tmp0_elvis_lhs = this.vx_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).is = function () {
    return this.xx_1.t2();
  };
  protoOf(PluginGeneratedSerialDescriptor).qy = function () {
    var tmp0 = this.zx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.n1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ry = function (name, isOptional) {
    this.sx_1 = this.sx_1 + 1 | 0;
    this.tx_1[this.sx_1] = name;
    this.wx_1[this.sx_1] = isOptional;
    this.ux_1[this.sx_1] = null;
    if (this.sx_1 === (this.rx_1 - 1 | 0)) {
      this.xx_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).by = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.ry(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.ry.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).nr = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).aq();
  };
  protoOf(PluginGeneratedSerialDescriptor).or = function (index) {
    return getChecked_0(this.wx_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).mr = function (index) {
    var tmp0_elvis_lhs = getChecked(this.ux_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).kr = function (index) {
    return getChecked(this.tx_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).lr = function (name) {
    var tmp0_elvis_lhs = this.xx_1.s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.fr() === other.fr())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.qy(), other.qy())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ir() === other.ir())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ir();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.nr(index).fr() === other.nr(index).fr())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.nr(index).gr(), other.nr(index).gr())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    return toStringImpl(this);
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.fr());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.fr();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.gr();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.ir());
    var tmp_0 = _this__u8e3s4.fr() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.kr(i) + ': ' + $this_toStringImpl.nr(i).fr();
    };
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  function SerializerFactory() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).sz = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).xu = function (_this__u8e3s4) {
    return this.sz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).cx = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).tz = function (decoder, index, builder, checkIndex) {
    builder.wz(decoder.it(this.uw_1, index));
  };
  protoOf(CharArraySerializer_0).ev = function (decoder, index, builder, checkIndex) {
    return this.tz(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).dx = function (decoder, index, builder, checkIndex) {
    return this.tz(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).zz = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).xu = function (_this__u8e3s4) {
    return this.zz((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).cx = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).a10 = function (decoder, index, builder, checkIndex) {
    builder.d10(decoder.ht(this.uw_1, index));
  };
  protoOf(DoubleArraySerializer_0).ev = function (decoder, index, builder, checkIndex) {
    return this.a10(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).dx = function (decoder, index, builder, checkIndex) {
    return this.a10(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).g10 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).xu = function (_this__u8e3s4) {
    return this.g10((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).cx = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).h10 = function (decoder, index, builder, checkIndex) {
    builder.k10(decoder.gt(this.uw_1, index));
  };
  protoOf(FloatArraySerializer_0).ev = function (decoder, index, builder, checkIndex) {
    return this.h10(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).dx = function (decoder, index, builder, checkIndex) {
    return this.h10(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_instance));
  }
  protoOf(LongArraySerializer_0).n10 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).xu = function (_this__u8e3s4) {
    return this.n10((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).cx = function () {
    return new BigInt64Array(0);
  };
  protoOf(LongArraySerializer_0).o10 = function (decoder, index, builder, checkIndex) {
    builder.r10(decoder.ft(this.uw_1, index));
  };
  protoOf(LongArraySerializer_0).ev = function (decoder, index, builder, checkIndex) {
    return this.o10(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).dx = function (decoder, index, builder, checkIndex) {
    return this.o10(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_3()));
  }
  protoOf(ULongArraySerializer_0).u10 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).xu = function (_this__u8e3s4) {
    return this.u10(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.pp_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).v10 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).cx = function () {
    return new ULongArray(this.v10());
  };
  protoOf(ULongArraySerializer_0).w10 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.kt(this.uw_1, index).qs();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.z10(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).ev = function (decoder, index, builder, checkIndex) {
    return this.w10(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).dx = function (decoder, index, builder, checkIndex) {
    return this.w10(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).c11 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).xu = function (_this__u8e3s4) {
    return this.c11((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).cx = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).d11 = function (decoder, index, builder, checkIndex) {
    builder.g11(decoder.et(this.uw_1, index));
  };
  protoOf(IntArraySerializer_0).ev = function (decoder, index, builder, checkIndex) {
    return this.d11(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).dx = function (decoder, index, builder, checkIndex) {
    return this.d11(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_4()));
  }
  protoOf(UIntArraySerializer_0).j11 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).xu = function (_this__u8e3s4) {
    return this.j11(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.fp_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).k11 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).cx = function () {
    return new UIntArray(this.k11());
  };
  protoOf(UIntArraySerializer_0).l11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.kt(this.uw_1, index).ps();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.o11(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).ev = function (decoder, index, builder, checkIndex) {
    return this.l11(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).dx = function (decoder, index, builder, checkIndex) {
    return this.l11(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).r11 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).xu = function (_this__u8e3s4) {
    return this.r11((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).cx = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).s11 = function (decoder, index, builder, checkIndex) {
    builder.v11(decoder.dt(this.uw_1, index));
  };
  protoOf(ShortArraySerializer_0).ev = function (decoder, index, builder, checkIndex) {
    return this.s11(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).dx = function (decoder, index, builder, checkIndex) {
    return this.s11(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_5()));
  }
  protoOf(UShortArraySerializer_0).y11 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).xu = function (_this__u8e3s4) {
    return this.y11(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.zp_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).z11 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).cx = function () {
    return new UShortArray(this.z11());
  };
  protoOf(UShortArraySerializer_0).a12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.kt(this.uw_1, index).os();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.d12(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).ev = function (decoder, index, builder, checkIndex) {
    return this.a12(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).dx = function (decoder, index, builder, checkIndex) {
    return this.a12(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).g12 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).xu = function (_this__u8e3s4) {
    return this.g12((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).cx = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).h12 = function (decoder, index, builder, checkIndex) {
    builder.k12(decoder.ct(this.uw_1, index));
  };
  protoOf(ByteArraySerializer_0).ev = function (decoder, index, builder, checkIndex) {
    return this.h12(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).dx = function (decoder, index, builder, checkIndex) {
    return this.h12(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_6()));
  }
  protoOf(UByteArraySerializer_0).n12 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).xu = function (_this__u8e3s4) {
    return this.n12(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.vo_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).o12 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).cx = function () {
    return new UByteArray(this.o12());
  };
  protoOf(UByteArraySerializer_0).p12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.kt(this.uw_1, index).ns();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.s12(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).ev = function (decoder, index, builder, checkIndex) {
    return this.p12(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).dx = function (decoder, index, builder, checkIndex) {
    return this.p12(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).v12 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).xu = function (_this__u8e3s4) {
    return this.v12((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).cx = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).w12 = function (decoder, index, builder, checkIndex) {
    builder.z12(decoder.bt(this.uw_1, index));
  };
  protoOf(BooleanArraySerializer_0).ev = function (decoder, index, builder, checkIndex) {
    return this.w12(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).dx = function (decoder, index, builder, checkIndex) {
    return this.w12(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.uz_1 = bufferWithData;
    this.vz_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(CharArrayBuilder).ww = function () {
    return this.vz_1;
  };
  protoOf(CharArrayBuilder).ax = function (requiredCapacity) {
    if (this.uz_1.length < requiredCapacity)
      this.uz_1 = copyOf(this.uz_1, coerceAtLeast(requiredCapacity, imul(this.uz_1.length, 2)));
  };
  protoOf(CharArrayBuilder).wz = function (c) {
    this.ex();
    var tmp = this.uz_1;
    var _unary__edvuaz = this.vz_1;
    this.vz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).yw = function () {
    return copyOf(this.uz_1, this.vz_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.b10_1 = bufferWithData;
    this.c10_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(DoubleArrayBuilder).ww = function () {
    return this.c10_1;
  };
  protoOf(DoubleArrayBuilder).ax = function (requiredCapacity) {
    if (this.b10_1.length < requiredCapacity)
      this.b10_1 = copyOf_0(this.b10_1, coerceAtLeast(requiredCapacity, imul(this.b10_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).d10 = function (c) {
    this.ex();
    var tmp = this.b10_1;
    var _unary__edvuaz = this.c10_1;
    this.c10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).yw = function () {
    return copyOf_0(this.b10_1, this.c10_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i10_1 = bufferWithData;
    this.j10_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(FloatArrayBuilder).ww = function () {
    return this.j10_1;
  };
  protoOf(FloatArrayBuilder).ax = function (requiredCapacity) {
    if (this.i10_1.length < requiredCapacity)
      this.i10_1 = copyOf_1(this.i10_1, coerceAtLeast(requiredCapacity, imul(this.i10_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).k10 = function (c) {
    this.ex();
    var tmp = this.i10_1;
    var _unary__edvuaz = this.j10_1;
    this.j10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).yw = function () {
    return copyOf_1(this.i10_1, this.j10_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.p10_1 = bufferWithData;
    this.q10_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(LongArrayBuilder).ww = function () {
    return this.q10_1;
  };
  protoOf(LongArrayBuilder).ax = function (requiredCapacity) {
    if (this.p10_1.length < requiredCapacity)
      this.p10_1 = copyOf_2(this.p10_1, coerceAtLeast(requiredCapacity, imul(this.p10_1.length, 2)));
  };
  protoOf(LongArrayBuilder).r10 = function (c) {
    this.ex();
    var tmp = this.p10_1;
    var _unary__edvuaz = this.q10_1;
    this.q10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).yw = function () {
    return copyOf_2(this.p10_1, this.q10_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.x10_1 = bufferWithData;
    this.y10_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.ax(10);
  }
  protoOf(ULongArrayBuilder).ww = function () {
    return this.y10_1;
  };
  protoOf(ULongArrayBuilder).ax = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.x10_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.x10_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.x10_1), 2));
      tmp.x10_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).z10 = function (c) {
    this.ex();
    var tmp = this.x10_1;
    var _unary__edvuaz = this.y10_1;
    this.y10_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).a13 = function () {
    var tmp0 = this.x10_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.y10_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).yw = function () {
    return new ULongArray(this.a13());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.e11_1 = bufferWithData;
    this.f11_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(IntArrayBuilder).ww = function () {
    return this.f11_1;
  };
  protoOf(IntArrayBuilder).ax = function (requiredCapacity) {
    if (this.e11_1.length < requiredCapacity)
      this.e11_1 = copyOf_3(this.e11_1, coerceAtLeast(requiredCapacity, imul(this.e11_1.length, 2)));
  };
  protoOf(IntArrayBuilder).g11 = function (c) {
    this.ex();
    var tmp = this.e11_1;
    var _unary__edvuaz = this.f11_1;
    this.f11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).yw = function () {
    return copyOf_3(this.e11_1, this.f11_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.m11_1 = bufferWithData;
    this.n11_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.ax(10);
  }
  protoOf(UIntArrayBuilder).ww = function () {
    return this.n11_1;
  };
  protoOf(UIntArrayBuilder).ax = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.m11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.m11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.m11_1), 2));
      tmp.m11_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).o11 = function (c) {
    this.ex();
    var tmp = this.m11_1;
    var _unary__edvuaz = this.n11_1;
    this.n11_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).b13 = function () {
    var tmp0 = this.m11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.n11_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).yw = function () {
    return new UIntArray(this.b13());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t11_1 = bufferWithData;
    this.u11_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(ShortArrayBuilder).ww = function () {
    return this.u11_1;
  };
  protoOf(ShortArrayBuilder).ax = function (requiredCapacity) {
    if (this.t11_1.length < requiredCapacity)
      this.t11_1 = copyOf_4(this.t11_1, coerceAtLeast(requiredCapacity, imul(this.t11_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).v11 = function (c) {
    this.ex();
    var tmp = this.t11_1;
    var _unary__edvuaz = this.u11_1;
    this.u11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).yw = function () {
    return copyOf_4(this.t11_1, this.u11_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.b12_1 = bufferWithData;
    this.c12_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.ax(10);
  }
  protoOf(UShortArrayBuilder).ww = function () {
    return this.c12_1;
  };
  protoOf(UShortArrayBuilder).ax = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.b12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.b12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.b12_1), 2));
      tmp.b12_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).d12 = function (c) {
    this.ex();
    var tmp = this.b12_1;
    var _unary__edvuaz = this.c12_1;
    this.c12_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).c13 = function () {
    var tmp0 = this.b12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.c12_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).yw = function () {
    return new UShortArray(this.c13());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i12_1 = bufferWithData;
    this.j12_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(ByteArrayBuilder).ww = function () {
    return this.j12_1;
  };
  protoOf(ByteArrayBuilder).ax = function (requiredCapacity) {
    if (this.i12_1.length < requiredCapacity)
      this.i12_1 = copyOf_5(this.i12_1, coerceAtLeast(requiredCapacity, imul(this.i12_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).k12 = function (c) {
    this.ex();
    var tmp = this.i12_1;
    var _unary__edvuaz = this.j12_1;
    this.j12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).yw = function () {
    return copyOf_5(this.i12_1, this.j12_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.q12_1 = bufferWithData;
    this.r12_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.ax(10);
  }
  protoOf(UByteArrayBuilder).ww = function () {
    return this.r12_1;
  };
  protoOf(UByteArrayBuilder).ax = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.q12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.q12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.q12_1), 2));
      tmp.q12_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).s12 = function (c) {
    this.ex();
    var tmp = this.q12_1;
    var _unary__edvuaz = this.r12_1;
    this.r12_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).d13 = function () {
    var tmp0 = this.q12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.r12_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).yw = function () {
    return new UByteArray(this.d13());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.x12_1 = bufferWithData;
    this.y12_1 = bufferWithData.length;
    this.ax(10);
  }
  protoOf(BooleanArrayBuilder).ww = function () {
    return this.y12_1;
  };
  protoOf(BooleanArrayBuilder).ax = function (requiredCapacity) {
    if (this.x12_1.length < requiredCapacity)
      this.x12_1 = copyOf_6(this.x12_1, coerceAtLeast(requiredCapacity, imul(this.x12_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).z12 = function (c) {
    this.ex();
    var tmp = this.x12_1;
    var _unary__edvuaz = this.y12_1;
    this.y12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).yw = function () {
    return copyOf_6(this.x12_1, this.y12_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.e13_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).aq = function () {
    return this.e13_1;
  };
  protoOf(StringSerializer).bq = function (decoder) {
    return decoder.us();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.f13_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).aq = function () {
    return this.f13_1;
  };
  protoOf(IntSerializer).bq = function (decoder) {
    return decoder.ps();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.g13_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).aq = function () {
    return this.g13_1;
  };
  protoOf(BooleanSerializer).bq = function (decoder) {
    return decoder.ms();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.h13_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).aq = function () {
    return this.h13_1;
  };
  protoOf(LongSerializer).bq = function (decoder) {
    return decoder.qs();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().s2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.i13_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.i13_1 = serialName;
    this.j13_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).fr = function () {
    return this.i13_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).gr = function () {
    return this.j13_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).ir = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).kr = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).lr = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).or = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).nr = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).mr = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.i13_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.i13_1 === other.i13_1 && equals(this.j13_1, other.j13_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.i13_1) + imul(31, this.j13_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().u2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.aq().fr();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.k13_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).aq = function () {
    return this.k13_1;
  };
  protoOf(ByteSerializer).bq = function (decoder) {
    return decoder.ns();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.l13_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).aq = function () {
    return this.l13_1;
  };
  protoOf(ShortSerializer).bq = function (decoder) {
    return decoder.os();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.m13_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).aq = function () {
    return this.m13_1;
  };
  protoOf(CharSerializer).n13 = function (decoder) {
    return decoder.ts();
  };
  protoOf(CharSerializer).bq = function (decoder) {
    return new Char(this.n13(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.o13_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).aq = function () {
    return this.o13_1;
  };
  protoOf(DoubleSerializer).bq = function (decoder) {
    return decoder.ss();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.p13_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).aq = function () {
    return this.p13_1;
  };
  protoOf(FloatSerializer).bq = function (decoder) {
    return decoder.rs();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.q13_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).aq = function () {
    return this.q13_1.aq();
  };
  protoOf(UnitSerializer).r13 = function (decoder) {
    this.q13_1.bq(decoder);
  };
  protoOf(UnitSerializer).bq = function (decoder) {
    this.r13(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).u13 = function (_this__u8e3s4, index) {
    return this.w13(this.v13(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).w13 = function (nestedName) {
    var tmp0_elvis_lhs = this.z13();
    return this.a14(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).v13 = function (descriptor, index) {
    return descriptor.kr(index);
  };
  protoOf(NamedValueDecoder).a14 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).b14 = function () {
    return this.x13_1.r() ? '$' : joinToString(this.x13_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.p14(tag);
    var r = block();
    if (!$this.y13_1) {
      $this.q14();
    }
    $this.y13_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.xs($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.aq().yq();
      var tmp;
      if (isNullabilitySupported || tmp0.ks()) {
        tmp = this$0.xs($deserializer, $previousValue);
      } else {
        tmp = tmp0.ls();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.x13_1 = ArrayList_init_$Create$_0();
    this.y13_1 = false;
  }
  protoOf(TaggedDecoder).ot = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).c14 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).d14 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).e14 = function (tag) {
    var tmp = this.c14(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).f14 = function (tag) {
    var tmp = this.c14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).g14 = function (tag) {
    var tmp = this.c14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).h14 = function (tag) {
    var tmp = this.c14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).i14 = function (tag) {
    var tmp = this.c14(tag);
    return typeof tmp === 'bigint' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).j14 = function (tag) {
    var tmp = this.c14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).k14 = function (tag) {
    var tmp = this.c14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).l14 = function (tag) {
    var tmp = this.c14(tag);
    return tmp instanceof Char ? tmp.w1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).m14 = function (tag) {
    var tmp = this.c14(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).n14 = function (tag, enumDescriptor) {
    var tmp = this.c14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).o14 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.p14(tag);
    return this;
  };
  protoOf(TaggedDecoder).xs = function (deserializer, previousValue) {
    return this.ys(deserializer);
  };
  protoOf(TaggedDecoder).ws = function (descriptor) {
    return this.o14(this.q14(), descriptor);
  };
  protoOf(TaggedDecoder).ks = function () {
    var tmp0_elvis_lhs = this.z13();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.d14(currentTag);
  };
  protoOf(TaggedDecoder).ls = function () {
    return null;
  };
  protoOf(TaggedDecoder).ms = function () {
    return this.e14(this.q14());
  };
  protoOf(TaggedDecoder).ns = function () {
    return this.f14(this.q14());
  };
  protoOf(TaggedDecoder).os = function () {
    return this.g14(this.q14());
  };
  protoOf(TaggedDecoder).ps = function () {
    return this.h14(this.q14());
  };
  protoOf(TaggedDecoder).qs = function () {
    return this.i14(this.q14());
  };
  protoOf(TaggedDecoder).rs = function () {
    return this.j14(this.q14());
  };
  protoOf(TaggedDecoder).ss = function () {
    return this.k14(this.q14());
  };
  protoOf(TaggedDecoder).ts = function () {
    return this.l14(this.q14());
  };
  protoOf(TaggedDecoder).us = function () {
    return this.m14(this.q14());
  };
  protoOf(TaggedDecoder).vs = function (enumDescriptor) {
    return this.n14(this.q14(), enumDescriptor);
  };
  protoOf(TaggedDecoder).zs = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).at = function (descriptor) {
  };
  protoOf(TaggedDecoder).bt = function (descriptor, index) {
    return this.e14(this.u13(descriptor, index));
  };
  protoOf(TaggedDecoder).ct = function (descriptor, index) {
    return this.f14(this.u13(descriptor, index));
  };
  protoOf(TaggedDecoder).dt = function (descriptor, index) {
    return this.g14(this.u13(descriptor, index));
  };
  protoOf(TaggedDecoder).et = function (descriptor, index) {
    return this.h14(this.u13(descriptor, index));
  };
  protoOf(TaggedDecoder).ft = function (descriptor, index) {
    return this.i14(this.u13(descriptor, index));
  };
  protoOf(TaggedDecoder).gt = function (descriptor, index) {
    return this.j14(this.u13(descriptor, index));
  };
  protoOf(TaggedDecoder).ht = function (descriptor, index) {
    return this.k14(this.u13(descriptor, index));
  };
  protoOf(TaggedDecoder).it = function (descriptor, index) {
    return this.l14(this.u13(descriptor, index));
  };
  protoOf(TaggedDecoder).jt = function (descriptor, index) {
    return this.m14(this.u13(descriptor, index));
  };
  protoOf(TaggedDecoder).kt = function (descriptor, index) {
    return this.o14(this.u13(descriptor, index), descriptor.nr(index));
  };
  protoOf(TaggedDecoder).lt = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.u13(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).nt = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.u13(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).z13 = function () {
    return lastOrNull(this.x13_1);
  };
  protoOf(TaggedDecoder).p14 = function (name) {
    this.x13_1.b1(name);
  };
  protoOf(TaggedDecoder).q14 = function () {
    var r = this.x13_1.b3(get_lastIndex_0(this.x13_1));
    this.y13_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.r14_1 = key;
    this.s14_1 = value;
  }
  protoOf(MapEntry).m1 = function () {
    return this.r14_1;
  };
  protoOf(MapEntry).n1 = function () {
    return this.s14_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.r14_1) + ', value=' + toString_0(this.s14_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.r14_1 == null ? 0 : hashCode(this.r14_1);
    result = imul(result, 31) + (this.s14_1 == null ? 0 : hashCode(this.s14_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.r14_1, other.r14_1))
      return false;
    if (!equals(this.s14_1, other.s14_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.mq('key', $keySerializer.aq());
      $this$buildSerialDescriptor.mq('value', $valueSerializer.aq());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.v14_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).aq = function () {
    return this.v14_1;
  };
  protoOf(MapEntrySerializer_0).w14 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.mq('first', $keySerializer.aq());
      $this$buildClassSerialDescriptor.mq('second', $valueSerializer.aq());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.b15_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).aq = function () {
    return this.b15_1;
  };
  protoOf(PairSerializer_0).w14 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.mt($this.f15_1, 0, $this.c15_1);
    var b = composite.mt($this.f15_1, 1, $this.d15_1);
    var c = composite.mt($this.f15_1, 2, $this.e15_1);
    composite.at($this.f15_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.qt($this.f15_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.mt($this.f15_1, 0, $this.c15_1);
          break;
        case 1:
          b = composite.mt($this.f15_1, 1, $this.d15_1);
          break;
        case 2:
          c = composite.mt($this.f15_1, 2, $this.e15_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.at($this.f15_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    return new Triple(a, b, c);
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.mq('first', this$0.c15_1.aq());
      $this$buildClassSerialDescriptor.mq('second', this$0.d15_1.aq());
      $this$buildClassSerialDescriptor.mq('third', this$0.e15_1.aq());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.c15_1 = aSerializer;
    this.d15_1 = bSerializer;
    this.e15_1 = cSerializer;
    var tmp = this;
    tmp.f15_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).aq = function () {
    return this.f15_1;
  };
  protoOf(TripleSerializer_0).bq = function (decoder) {
    var composite = decoder.zs(this.f15_1);
    if (composite.pt()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.x14_1 = keySerializer;
    this.y14_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).bq = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.aq();
    var composite = decoder.zs(descriptor);
    var tmp$ret$1;
    $l$block: {
      if (composite.pt()) {
        var key = composite.mt(this.aq(), 0, this.x14_1);
        var value = composite.mt(this.aq(), 1, this.y14_1);
        tmp$ret$1 = this.w14(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.qt(this.aq());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.mt(this.aq(), 0, this.x14_1);
            break;
          case 1:
            value_0 = composite.mt(this.aq(), 1, this.y14_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      tmp$ret$1 = this.w14(key_0, value_0);
    }
    var result = tmp$ret$1;
    composite.at(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.g15_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_instance));
  }
  protoOf(ULongSerializer).aq = function () {
    return this.g15_1;
  };
  protoOf(ULongSerializer).h15 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.ws(this.g15_1).qs();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).bq = function (decoder) {
    return new ULong(this.h15(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.i15_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).aq = function () {
    return this.i15_1;
  };
  protoOf(UIntSerializer).j15 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.ws(this.i15_1).ps();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).bq = function (decoder) {
    return new UInt(this.j15(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.k15_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_7(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).aq = function () {
    return this.k15_1;
  };
  protoOf(UByteSerializer).l15 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.ws(this.k15_1).ns();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).bq = function (decoder) {
    return new UByte(this.l15(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.m15_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).aq = function () {
    return this.m15_1;
  };
  protoOf(UShortSerializer).n15 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.ws(this.m15_1).os();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).bq = function (decoder) {
    return new UShort(this.n15(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).uq = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.vq(kClass, typeArgumentsSerializers) : $super.vq.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.p15_1 = class2ContextualFactory;
    this.q15_1 = polyBase2Serializers;
    this.r15_1 = polyBase2DefaultSerializerProvider;
    this.s15_1 = polyBase2NamedSerializers;
    this.t15_1 = polyBase2DefaultDeserializerProvider;
    this.u15_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).tq = function () {
    return this.u15_1;
  };
  protoOf(SerialModuleImpl).st = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.s15_1.s2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).s2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.t15_1.s2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).vq = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.p15_1.s2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v15(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).o15 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.p15_1.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.n1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.y15_1;
        collector.z15(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.x15(kclass, serial.w15_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.q15_1.l1().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.m1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.n1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.l1().t();
      while (_iterator__ex2g4s_1.u()) {
        var element_1 = _iterator__ex2g4s_1.v();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.m1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.n1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$15 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.a16(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.r15_1.l1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.n1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.b16(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.t15_1.l1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.n1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.c16(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.d16_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.d16_1.equals(tmp0_other_with_cast.d16_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.d16_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.d16_1) + ')';
  };
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterfaceHack(_this__u8e3s4);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().nb()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().vb());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.pz(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().wb(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().zb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().ub(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().fc(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().tb(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().ec(), FloatArraySerializer()), to(PrimitiveClasses_getInstance().sb(), serializer_5(Companion_instance)), to(get_longArrayClass(), LongArraySerializer()), to(getKClass(ULong), serializer_1(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().rb(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().cc(), IntArraySerializer()), to(getKClass(UInt), serializer_2(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().qb(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().bc(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().pb(), serializer_7(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().ac(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().ob(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().yb(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().nb(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().nb())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.e16_1 = $factory;
  }
  protoOf(createCache$1).wq = function (key) {
    return this.e16_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.f16_1 = $factory;
  }
  protoOf(createParametrizedCache$1).xq = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.f16_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).yq = get_isNullable;
  protoOf(SerialDescriptorImpl).hr = get_isInline;
  protoOf(AbstractDecoder).mt = decodeSerializableElement$default;
  protoOf(AbstractDecoder).ys = decodeSerializableValue;
  protoOf(AbstractDecoder).pt = decodeSequentially;
  protoOf(AbstractDecoder).rt = decodeCollectionSize;
  protoOf(ListLikeDescriptor).yq = get_isNullable;
  protoOf(ListLikeDescriptor).hr = get_isInline;
  protoOf(ListLikeDescriptor).jr = get_annotations;
  protoOf(MapLikeDescriptor).yq = get_isNullable;
  protoOf(MapLikeDescriptor).hr = get_isInline;
  protoOf(MapLikeDescriptor).jr = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).yq = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).hr = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).hz = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).yq = get_isNullable;
  protoOf(NothingSerialDescriptor).hr = get_isInline;
  protoOf(NothingSerialDescriptor).jr = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).yq = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).hr = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).jr = get_annotations;
  protoOf(TaggedDecoder).mt = decodeSerializableElement$default;
  protoOf(TaggedDecoder).ys = decodeSerializableValue;
  protoOf(TaggedDecoder).pt = decodeSequentially;
  protoOf(TaggedDecoder).rt = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SEALED_getInstance;
  _.$_$.b = STRING_getInstance;
  _.$_$.c = CONTEXTUAL_getInstance;
  _.$_$.d = ENUM_getInstance;
  _.$_$.e = CLASS_getInstance;
  _.$_$.f = LIST_getInstance;
  _.$_$.g = MAP_getInstance;
  _.$_$.h = BooleanSerializer_getInstance;
  _.$_$.i = IntSerializer_getInstance;
  _.$_$.j = LongSerializer_getInstance;
  _.$_$.k = StringSerializer_getInstance;
  _.$_$.l = SerializationException_init_$Init$_0;
  _.$_$.m = SerializationException_init_$Create$_0;
  _.$_$.n = UnknownFieldException_init_$Create$;
  _.$_$.o = ListSerializer;
  _.$_$.p = MapSerializer;
  _.$_$.q = get_nullable;
  _.$_$.r = serializer_0;
  _.$_$.s = serializer_4;
  _.$_$.t = serializer_2;
  _.$_$.u = serializer_3;
  _.$_$.v = serializer_1;
  _.$_$.w = PolymorphicKind;
  _.$_$.x = PrimitiveKind;
  _.$_$.y = PrimitiveSerialDescriptor;
  _.$_$.z = get_annotations;
  _.$_$.a1 = get_isInline;
  _.$_$.b1 = get_isNullable;
  _.$_$.c1 = SerialDescriptor;
  _.$_$.d1 = ENUM;
  _.$_$.e1 = buildSerialDescriptor;
  _.$_$.f1 = getContextualDescriptor;
  _.$_$.g1 = AbstractDecoder;
  _.$_$.h1 = CompositeDecoder;
  _.$_$.i1 = Decoder;
  _.$_$.j1 = AbstractPolymorphicSerializer;
  _.$_$.k1 = ArrayListSerializer;
  _.$_$.l1 = ElementMarker;
  _.$_$.m1 = typeParametersSerializers;
  _.$_$.n1 = GeneratedSerializer;
  _.$_$.o1 = InlinePrimitiveDescriptor;
  _.$_$.p1 = NamedValueDecoder;
  _.$_$.q1 = PluginGeneratedSerialDescriptor;
  _.$_$.r1 = SerializerFactory;
  _.$_$.s1 = createSimpleEnumSerializer;
  _.$_$.t1 = jsonCachedSerialNames;
  _.$_$.u1 = missingFieldExceptionWithNewMessage;
  _.$_$.v1 = throwMissingFieldException;
  _.$_$.w1 = EmptySerializersModule_0;
  _.$_$.x1 = contextual;
  _.$_$.y1 = SerializersModuleCollector;
  _.$_$.z1 = DeserializationStrategy;
  _.$_$.a2 = KSerializer;
  _.$_$.b2 = MissingFieldException;
  _.$_$.c2 = SerializableWith;
  _.$_$.d2 = SerializationException;
  _.$_$.e2 = findPolymorphicSerializer;
  _.$_$.f2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
