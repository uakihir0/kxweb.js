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
  var protoOf = kotlin_kotlin.$_$.xb;
  var initMetadataForInterface = kotlin_kotlin.$_$.cb;
  var VOID = kotlin_kotlin.$_$.d;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.k2;
  var Unit_instance = kotlin_kotlin.$_$.z2;
  var constructCallableReference = kotlin_kotlin.$_$.pa;
  var emptyList = kotlin_kotlin.$_$.r6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.a2;
  var lazy = kotlin_kotlin.$_$.wg;
  var KProperty1 = kotlin_kotlin.$_$.wc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.va;
  var toString = kotlin_kotlin.$_$.ac;
  var initMetadataForClass = kotlin_kotlin.$_$.ya;
  var objectCreate = kotlin_kotlin.$_$.wb;
  var captureStack = kotlin_kotlin.$_$.ha;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.i4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.k4;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.m4;
  var IllegalArgumentException = kotlin_kotlin.$_$.tf;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.s;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.r;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var isInterface = kotlin_kotlin.$_$.nb;
  var KClass = kotlin_kotlin.$_$.tc;
  var Triple = kotlin_kotlin.$_$.bg;
  var getKClass = kotlin_kotlin.$_$.rc;
  var Pair = kotlin_kotlin.$_$.wf;
  var Entry = kotlin_kotlin.$_$.l5;
  var KtMap = kotlin_kotlin.$_$.n5;
  var KtMutableMap = kotlin_kotlin.$_$.q5;
  var LinkedHashMap = kotlin_kotlin.$_$.i5;
  var HashMap = kotlin_kotlin.$_$.g5;
  var KtSet = kotlin_kotlin.$_$.s5;
  var KtMutableSet = kotlin_kotlin.$_$.r5;
  var LinkedHashSet = kotlin_kotlin.$_$.j5;
  var HashSet = kotlin_kotlin.$_$.h5;
  var Collection = kotlin_kotlin.$_$.f5;
  var KtList = kotlin_kotlin.$_$.k5;
  var KtMutableList = kotlin_kotlin.$_$.o5;
  var ArrayList = kotlin_kotlin.$_$.e5;
  var copyToArray = kotlin_kotlin.$_$.o6;
  var Result = kotlin_kotlin.$_$.xf;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var equals = kotlin_kotlin.$_$.ra;
  var getStringHashCode = kotlin_kotlin.$_$.wa;
  var isBlank = kotlin_kotlin.$_$.qd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l4;
  var toList = kotlin_kotlin.$_$.g8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.k3;
  var toHashSet = kotlin_kotlin.$_$.d8;
  var toBooleanArray = kotlin_kotlin.$_$.b8;
  var withIndex = kotlin_kotlin.$_$.m8;
  var to = kotlin_kotlin.$_$.ch;
  var toMap = kotlin_kotlin.$_$.i8;
  var lazy_0 = kotlin_kotlin.$_$.xg;
  var contentEquals = kotlin_kotlin.$_$.a6;
  var initMetadataForObject = kotlin_kotlin.$_$.eb;
  var getKClassFromExpression = kotlin_kotlin.$_$.qc;
  var Char = kotlin_kotlin.$_$.lf;
  var Companion_getInstance = kotlin_kotlin.$_$.o2;
  var Duration = kotlin_kotlin.$_$.ff;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.p2;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.q2;
  var toIntOrNull = kotlin_kotlin.$_$.se;
  var hashCode = kotlin_kotlin.$_$.xa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.s4;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.f3;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.l3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q3;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.r3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.h3;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.i3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.o3;
  var isArray = kotlin_kotlin.$_$.fb;
  var coerceAtLeast = kotlin_kotlin.$_$.fc;
  var addAll = kotlin_kotlin.$_$.t5;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.j3;
  var LinkedHashSet_init_$Create$_1 = kotlin_kotlin.$_$.p3;
  var until = kotlin_kotlin.$_$.lc;
  var step = kotlin_kotlin.$_$.kc;
  var getValue = kotlin_kotlin.$_$.z6;
  var HashMap_init_$Create$_1 = kotlin_kotlin.$_$.g3;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.m3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.za;
  var get_lastIndex = kotlin_kotlin.$_$.f7;
  var shiftLeft = kotlin_kotlin.$_$.z9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.pg;
  var joinToString = kotlin_kotlin.$_$.d7;
  var toString_0 = kotlin_kotlin.$_$.bh;
  var KTypeParameter = kotlin_kotlin.$_$.xc;
  var booleanArray = kotlin_kotlin.$_$.ga;
  var emptyMap = kotlin_kotlin.$_$.s6;
  var contentHashCode = kotlin_kotlin.$_$.d6;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.r2;
  var isCharArray = kotlin_kotlin.$_$.ib;
  var copyOf = kotlin_kotlin.$_$.i6;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.g2;
  var isDoubleArray = kotlin_kotlin.$_$.kb;
  var copyOf_0 = kotlin_kotlin.$_$.k6;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.h2;
  var isFloatArray = kotlin_kotlin.$_$.lb;
  var copyOf_1 = kotlin_kotlin.$_$.l6;
  var Companion_instance = kotlin_kotlin.$_$.t2;
  var isLongArray = kotlin_kotlin.$_$.u9;
  var copyOf_2 = kotlin_kotlin.$_$.g6;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.x2;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.m1;
  var ULongArray = kotlin_kotlin.$_$.gg;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.n1;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.k1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.h1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.i2;
  var isIntArray = kotlin_kotlin.$_$.mb;
  var copyOf_3 = kotlin_kotlin.$_$.n6;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.w2;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.f1;
  var UIntArray = kotlin_kotlin.$_$.eg;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.g1;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.d1;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.a1;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.j2;
  var isShortArray = kotlin_kotlin.$_$.pb;
  var copyOf_4 = kotlin_kotlin.$_$.f6;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.y2;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.t1;
  var UShortArray = kotlin_kotlin.$_$.ig;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.u1;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.r1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.o1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.f2;
  var isByteArray = kotlin_kotlin.$_$.hb;
  var copyOf_5 = kotlin_kotlin.$_$.j6;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.v2;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.y;
  var UByteArray = kotlin_kotlin.$_$.cg;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.z;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.v;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.t;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.e2;
  var isBooleanArray = kotlin_kotlin.$_$.gb;
  var copyOf_6 = kotlin_kotlin.$_$.h6;
  var charArray = kotlin_kotlin.$_$.ja;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.j1;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.l1;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.c1;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.e1;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.q1;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.s1;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.w;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.x;
  var trimIndent = kotlin_kotlin.$_$.cf;
  var charSequenceLength = kotlin_kotlin.$_$.ma;
  var lastOrNull = kotlin_kotlin.$_$.h7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.g7;
  var ULong = kotlin_kotlin.$_$.hg;
  var UInt = kotlin_kotlin.$_$.fg;
  var UByte = kotlin_kotlin.$_$.dg;
  var UShort = kotlin_kotlin.$_$.jg;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yg;
  var get_js = kotlin_kotlin.$_$.rb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.m2;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.b7;
  var get_indices_0 = kotlin_kotlin.$_$.a7;
  var Unit = kotlin_kotlin.$_$.kg;
  var Instant = kotlin_kotlin.$_$.gf;
  var Uuid = kotlin_kotlin.$_$.if;
  var mapOf = kotlin_kotlin.$_$.o7;
  var Companion_instance_0 = kotlin_kotlin.$_$.u2;
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
    return deserializer.fq(this);
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
    return $super === VOID ? this.pt(descriptor, index, deserializer, previousValue) : $super.pt.call(this, descriptor, index, deserializer, previousValue);
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
    return this.h16(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.oq('type', serializer_0(StringCompanionObject_instance).eq());
      $this$buildSerialDescriptor.oq('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.pq_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.iq_1 = this$0.qq_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.pq_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return constructCallableReference(function (p0) {
      return p0.eq();
    }, 1, 0, 1);
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.pq_1 = baseClass;
    this.qq_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.rq_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).sq = function () {
    return this.pq_1;
  };
  protoOf(PolymorphicSerializer).eq = function () {
    var tmp0 = this.rq_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.n1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.pq_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.tq(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.sq());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
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
    this.uq_1 = missingFields;
    this.vq_1 = serialName;
  }
  protoOf(MissingFieldException).wq = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.uq_1, this.vq_1);
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
      destination.c1(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.r()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.yq(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.xq()) {
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
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.yq(rootClass) : tmp0_elvis_lhs;
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
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.zq(rootClass, serializers) : tmp3_elvis_lhs;
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
        destination.c1(tmp$ret$2);
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
        destination_0.c1(tmp$ret$5);
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().ar(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().ar(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().br(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().br(clazz, types);
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
    if (_this__u8e3s4.eq().cr()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.yq(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.eq();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.hr_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.dr_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.gr_1 = original;
    this.hr_1 = kClass;
    this.ir_1 = this.gr_1.jr() + '<' + this.hr_1.o() + '>';
  }
  protoOf(ContextDescriptor).jr = function () {
    return this.ir_1;
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
    return equals(this.gr_1, another.gr_1) && another.hr_1.equals(this.hr_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.hr_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.ir_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.hr_1) + ', original: ' + toString(this.gr_1) + ')';
  };
  protoOf(ContextDescriptor).kr = function () {
    return this.gr_1.kr();
  };
  protoOf(ContextDescriptor).cr = function () {
    return this.gr_1.cr();
  };
  protoOf(ContextDescriptor).lr = function () {
    return this.gr_1.lr();
  };
  protoOf(ContextDescriptor).mr = function () {
    return this.gr_1.mr();
  };
  protoOf(ContextDescriptor).nr = function () {
    return this.gr_1.nr();
  };
  protoOf(ContextDescriptor).or = function (index) {
    return this.gr_1.or(index);
  };
  protoOf(ContextDescriptor).pr = function (name) {
    return this.gr_1.pr(name);
  };
  protoOf(ContextDescriptor).qr = function (index) {
    return this.gr_1.qr(index);
  };
  protoOf(ContextDescriptor).rr = function (index) {
    return this.gr_1.rr(index);
  };
  protoOf(ContextDescriptor).sr = function (index) {
    return this.gr_1.sr(index);
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
    this.ur_1 = $this_elementNames;
    this.tr_1 = $this_elementNames.mr();
  }
  protoOf(elementNames$1).u = function () {
    return this.tr_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.ur_1.mr();
    var _unary__edvuaz = this.tr_1;
    this.tr_1 = _unary__edvuaz - 1 | 0;
    return this.ur_1.or(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.vr_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.vr_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.xr_1 = $this_elementDescriptors;
    this.wr_1 = $this_elementDescriptors.mr();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.wr_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.xr_1.mr();
    var _unary__edvuaz = this.wr_1;
    this.wr_1 = _unary__edvuaz - 1 | 0;
    return this.xr_1.rr(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.yr_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.yr_1);
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.jq_1.e1(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.gq_1 = serialName;
    this.hq_1 = false;
    this.iq_1 = emptyList();
    this.jq_1 = ArrayList_init_$Create$_0();
    this.kq_1 = HashSet_init_$Create$();
    this.lq_1 = ArrayList_init_$Create$_0();
    this.mq_1 = ArrayList_init_$Create$_0();
    this.nq_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).zr = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.kq_1.c1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.gq_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.jq_1.c1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.lq_1.c1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.mq_1.c1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.nq_1.c1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).oq = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.zr(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.zr.call(this, elementName, descriptor, annotations, isOptional);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.jq_1.e1(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.ls_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.n1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.ks_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef(p0);
    }, 1, 0, 2);
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.as_1 = serialName;
    this.bs_1 = kind;
    this.cs_1 = elementsCount;
    this.ds_1 = builder.iq_1;
    this.es_1 = toHashSet(builder.jq_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.jq_1;
    tmp.fs_1 = copyToArray(this_0);
    this.gs_1 = compactArray(builder.lq_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.mq_1;
    tmp_0.hs_1 = copyToArray(this_1);
    this.is_1 = toBooleanArray(builder.nq_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.fs_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$4 = to(item.ag_1, item.zf_1);
      destination.c1(tmp$ret$4);
    }
    tmp_1.js_1 = toMap(destination);
    this.ks_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.ls_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).jr = function () {
    return this.as_1;
  };
  protoOf(SerialDescriptorImpl).kr = function () {
    return this.bs_1;
  };
  protoOf(SerialDescriptorImpl).mr = function () {
    return this.cs_1;
  };
  protoOf(SerialDescriptorImpl).nr = function () {
    return this.ds_1;
  };
  protoOf(SerialDescriptorImpl).ms = function () {
    return this.es_1;
  };
  protoOf(SerialDescriptorImpl).or = function (index) {
    return getChecked(this.fs_1, index);
  };
  protoOf(SerialDescriptorImpl).pr = function (name) {
    var tmp0_elvis_lhs = this.js_1.t2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).qr = function (index) {
    return getChecked(this.hs_1, index);
  };
  protoOf(SerialDescriptorImpl).rr = function (index) {
    return getChecked(this.gs_1, index);
  };
  protoOf(SerialDescriptorImpl).sr = function (index) {
    return getChecked_0(this.is_1, index);
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
      if (!(this.jr() === other.jr())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.ks_1, other.ks_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.mr() === other.mr())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.mr();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.rr(index).jr() === other.rr(index).jr())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.rr(index).kr(), other.rr(index).kr())) {
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
  protoOf(AbstractDecoder).ns = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).os = function () {
    return true;
  };
  protoOf(AbstractDecoder).ps = function () {
    return null;
  };
  protoOf(AbstractDecoder).qs = function () {
    var tmp = this.ns();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).rs = function () {
    var tmp = this.ns();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ss = function () {
    var tmp = this.ns();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ts = function () {
    var tmp = this.ns();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).us = function () {
    var tmp = this.ns();
    return typeof tmp === 'bigint' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).vs = function () {
    var tmp = this.ns();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ws = function () {
    var tmp = this.ns();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xs = function () {
    var tmp = this.ns();
    return tmp instanceof Char ? tmp.x1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).ys = function () {
    var tmp = this.ns();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zs = function (enumDescriptor) {
    var tmp = this.ns();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).at = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).bt = function (deserializer, previousValue) {
    return this.ct(deserializer);
  };
  protoOf(AbstractDecoder).dt = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).et = function (descriptor) {
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
    return this.vs();
  };
  protoOf(AbstractDecoder).lt = function (descriptor, index) {
    return this.ws();
  };
  protoOf(AbstractDecoder).mt = function (descriptor, index) {
    return this.xs();
  };
  protoOf(AbstractDecoder).nt = function (descriptor, index) {
    return this.ys();
  };
  protoOf(AbstractDecoder).ot = function (descriptor, index) {
    return this.at(descriptor.rr(index));
  };
  protoOf(AbstractDecoder).pt = function (descriptor, index, deserializer, previousValue) {
    return this.bt(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).rt = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.eq().cr();
    var tmp;
    if (isNullabilitySupported || this.os()) {
      tmp = this.bt(deserializer, previousValue);
    } else {
      tmp = this.ps();
    }
    return tmp;
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.nt($this.eq(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.qt($this.eq(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).fq = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.eq();
    var composite = decoder.dt(descriptor);
    var tmp$ret$1;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.tt()) {
        tmp$ret$1 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.ut(this.eq());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.nt(this.eq(), index);
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
            value = composite.qt(this.eq(), index, serializer);
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
    composite.et(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).tq = function (decoder, klassName) {
    return decoder.st().wt(this.sq(), klassName);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.xt_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).eq = function () {
    return this.xt_1;
  };
  protoOf(NothingSerializer_0).fq = function (decoder) {
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
    this.yt_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).eq = function () {
    return this.yt_1;
  };
  protoOf(DurationSerializer).zt = function (decoder) {
    return Companion_getInstance().tm(decoder.ys());
  };
  protoOf(DurationSerializer).fq = function (decoder) {
    return new Duration(this.zt(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.au_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).eq = function () {
    return this.au_1;
  };
  protoOf(InstantSerializer).fq = function (decoder) {
    return Companion_getInstance_0().en(decoder.ys());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.bu_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).eq = function () {
    return this.bu_1;
  };
  protoOf(UuidSerializer).fq = function (decoder) {
    return Companion_getInstance_1().lo(decoder.ys());
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
  protoOf(ArrayListClassDesc).jr = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).jr = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).jr = function () {
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
  protoOf(ArrayClassDesc).jr = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.eu_1 = elementDescriptor;
    this.fu_1 = 1;
  }
  protoOf(ListLikeDescriptor).kr = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).mr = function () {
    return this.fu_1;
  };
  protoOf(ListLikeDescriptor).or = function (index) {
    requireNonNegativeIndex(index, this.jr());
    return index.toString();
  };
  protoOf(ListLikeDescriptor).pr = function (name) {
    var tmp0_safe_receiver = toIntOrNull(name);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver >= 0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? -3 : tmp1_elvis_lhs;
  };
  protoOf(ListLikeDescriptor).sr = function (index) {
    requireNonNegativeIndex(index, this.jr());
    return false;
  };
  protoOf(ListLikeDescriptor).qr = function (index) {
    requireNonNegativeIndex(index, this.jr());
    return emptyList();
  };
  protoOf(ListLikeDescriptor).rr = function (index) {
    requireNonNegativeIndex(index, this.jr());
    return this.eu_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.eu_1, other.eu_1) && this.jr() === other.jr())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.eu_1), 31) + getStringHashCode(this.jr()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.jr() + '(' + toString(this.eu_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.ku_1 = serialName;
    this.lu_1 = keyDescriptor;
    this.mu_1 = valueDescriptor;
    this.nu_1 = 2;
  }
  protoOf(MapLikeDescriptor).jr = function () {
    return this.ku_1;
  };
  protoOf(MapLikeDescriptor).kr = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).mr = function () {
    return this.nu_1;
  };
  protoOf(MapLikeDescriptor).or = function (index) {
    requireNonNegativeIndex(index, this.jr());
    return index.toString();
  };
  protoOf(MapLikeDescriptor).pr = function (name) {
    var tmp0_safe_receiver = toIntOrNull(name);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver >= 0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? -3 : tmp1_elvis_lhs;
  };
  protoOf(MapLikeDescriptor).sr = function (index) {
    requireNonNegativeIndex(index, this.jr());
    return false;
  };
  protoOf(MapLikeDescriptor).qr = function (index) {
    requireNonNegativeIndex(index, this.jr());
    return emptyList();
  };
  protoOf(MapLikeDescriptor).rr = function (index) {
    requireNonNegativeIndex(index, this.jr());
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.lu_1;
        break;
      case 1:
        tmp = this.mu_1;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.jr() === other.jr()))
      return false;
    if (!equals(this.lu_1, other.lu_1))
      return false;
    if (!equals(this.mu_1, other.mu_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.jr());
    result = imul(31, result) + hashCode(this.lu_1) | 0;
    result = imul(31, result) + hashCode(this.mu_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.jr() + '(' + toString(this.lu_1) + ', ' + toString(this.mu_1) + ')';
  };
  function requireNonNegativeIndex(index, name) {
    if (index < 0)
      throw IndexOutOfBoundsException_init_$Create$('Illegal index ' + index + ', ' + name + ' expects only non-negative indices');
  }
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.su_1 = primitive.jr() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).jr = function () {
    return this.su_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.uu_1 = new ArrayListClassDesc(element.eq());
  }
  protoOf(ArrayListSerializer).eq = function () {
    return this.uu_1;
  };
  protoOf(ArrayListSerializer).vu = function (initialCapacityHint) {
    if (initialCapacityHint === -1) {
      // Inline function 'kotlin.collections.arrayListOf' call
      return ArrayList_init_$Create$_0();
    }
    return ArrayList_init_$Create$(initialCapacityHint);
  };
  protoOf(ArrayListSerializer).wu = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ArrayListSerializer).xu = function (_this__u8e3s4) {
    return this.wu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).yu = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).zu = function (_this__u8e3s4) {
    return this.yu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).av = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof ArrayList) {
      // Inline function 'kotlin.also' call
      _this__u8e3s4.q5(expectedSize);
      return _this__u8e3s4;
    }
    if (expectedSize === _this__u8e3s4.e1())
      return ArrayList_init_$Create$_1(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList_init_$Create$(expectedSize);
    this_0.j1(_this__u8e3s4);
    return this_0;
  };
  protoOf(ArrayListSerializer).bv = function (_this__u8e3s4, expectedSize) {
    return this.av((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ArrayListSerializer).cv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.y2(index, element);
  };
  protoOf(ArrayListSerializer).dv = function (_this__u8e3s4, index, element) {
    return this.cv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.mv_1 = new HashSetClassDesc(eSerializer.eq());
  }
  protoOf(HashSetSerializer).eq = function () {
    return this.mv_1;
  };
  protoOf(HashSetSerializer).vu = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return HashSet_init_$Create$();
    return newHashSet(initialCapacityHint);
  };
  protoOf(HashSetSerializer).nv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashSetSerializer).xu = function (_this__u8e3s4) {
    return this.nv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).ov = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).zu = function (_this__u8e3s4) {
    return this.ov(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).pv = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof HashSet)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return HashSet_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newHashSet(expectedSize);
    this_0.j1(_this__u8e3s4);
    return this_0;
  };
  protoOf(HashSetSerializer).bv = function (_this__u8e3s4, expectedSize) {
    return this.pv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(HashSetSerializer).qv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(HashSetSerializer).dv = function (_this__u8e3s4, index, element) {
    return this.qv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.sv_1 = new LinkedHashSetClassDesc(eSerializer.eq());
  }
  protoOf(LinkedHashSetSerializer).eq = function () {
    return this.sv_1;
  };
  protoOf(LinkedHashSetSerializer).vu = function (initialCapacityHint) {
    if (initialCapacityHint === -1) {
      // Inline function 'kotlin.collections.linkedSetOf' call
      return LinkedHashSet_init_$Create$();
    }
    return newLinkedHashSet(initialCapacityHint);
  };
  protoOf(LinkedHashSetSerializer).tv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashSetSerializer).xu = function (_this__u8e3s4) {
    return this.tv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).uv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).zu = function (_this__u8e3s4) {
    return this.uv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).pv = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof LinkedHashSet)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return LinkedHashSet_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newLinkedHashSet(expectedSize);
    this_0.j1(_this__u8e3s4);
    return this_0;
  };
  protoOf(LinkedHashSetSerializer).bv = function (_this__u8e3s4, expectedSize) {
    return this.pv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(LinkedHashSetSerializer).vv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(LinkedHashSetSerializer).dv = function (_this__u8e3s4, index, element) {
    return this.vv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.yv_1 = new HashMapClassDesc(kSerializer.eq(), vSerializer.eq());
  }
  protoOf(HashMapSerializer).eq = function () {
    return this.yv_1;
  };
  protoOf(HashMapSerializer).zv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashMapSerializer).aw = function (_this__u8e3s4) {
    return this.zv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).vu = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return HashMap_init_$Create$();
    return newHashMap(initialCapacityHint);
  };
  protoOf(HashMapSerializer).bw = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(HashMapSerializer).xu = function (_this__u8e3s4) {
    return this.bw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).cw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).zu = function (_this__u8e3s4) {
    return this.cw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).dw = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof HashMap)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return HashMap_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newHashMap(expectedSize);
    this_0.c3(_this__u8e3s4);
    return this_0;
  };
  protoOf(HashMapSerializer).bv = function (_this__u8e3s4, expectedSize) {
    return this.dw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.kw_1 = new LinkedHashMapClassDesc(kSerializer.eq(), vSerializer.eq());
  }
  protoOf(LinkedHashMapSerializer).eq = function () {
    return this.kw_1;
  };
  protoOf(LinkedHashMapSerializer).zv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashMapSerializer).aw = function (_this__u8e3s4) {
    return this.zv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).vu = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return LinkedHashMap_init_$Create$();
    return newLinkedHashMap(initialCapacityHint);
  };
  protoOf(LinkedHashMapSerializer).lw = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(LinkedHashMapSerializer).xu = function (_this__u8e3s4) {
    return this.lw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).mw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).zu = function (_this__u8e3s4) {
    return this.mw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).dw = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof LinkedHashMap)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return LinkedHashMap_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newLinkedHashMap(expectedSize);
    this_0.c3(_this__u8e3s4);
    return this_0;
  };
  protoOf(LinkedHashMapSerializer).bv = function (_this__u8e3s4, expectedSize) {
    return this.dw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.ow_1 = kClass;
    this.pw_1 = new ArrayClassDesc(eSerializer.eq());
  }
  protoOf(ReferenceArraySerializer).eq = function () {
    return this.pw_1;
  };
  protoOf(ReferenceArraySerializer).qw = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).aw = function (_this__u8e3s4) {
    return this.qw((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).vu = function (initialCapacityHint) {
    if (initialCapacityHint === -1) {
      // Inline function 'kotlin.collections.arrayListOf' call
      return ArrayList_init_$Create$_0();
    }
    return ArrayList_init_$Create$(initialCapacityHint);
  };
  protoOf(ReferenceArraySerializer).rw = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ReferenceArraySerializer).xu = function (_this__u8e3s4) {
    return this.rw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).sw = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.ow_1);
  };
  protoOf(ReferenceArraySerializer).zu = function (_this__u8e3s4) {
    return this.sw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).tw = function (_this__u8e3s4, expectedSize) {
    var expectedCapacity = coerceAtLeast(expectedSize, 0);
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList_init_$Create$(expectedCapacity);
    addAll(this_0, _this__u8e3s4);
    return this_0;
  };
  protoOf(ReferenceArraySerializer).bv = function (_this__u8e3s4, expectedSize) {
    return this.tw((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ReferenceArraySerializer).uw = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.y2(index, element);
  };
  protoOf(ReferenceArraySerializer).dv = function (_this__u8e3s4, index, element) {
    return this.uw(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).fv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(CollectionSerializer).aw = function (_this__u8e3s4) {
    return this.fv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function newHashSet(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return HashSet_init_$Create$_1(capacity);
  }
  function newLinkedHashSet(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return LinkedHashSet_init_$Create$_1(capacity);
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.ew_1 = keySerializer;
    this.fw_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).gw = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.q1_1;
    var last = progression.r1_1;
    var step_0 = progression.s1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.hw(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).hv = function (decoder, builder, startIndex, size) {
    return this.gw(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).hw = function (decoder, index, builder, checkIndex) {
    var key = decoder.qt(this.eq(), index, this.ew_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.ut(this.eq());
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
    if (builder.r2(key)) {
      var tmp_2 = this.fw_1.eq().kr();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.pt(this.eq(), vIndex, this.fw_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.qt(this.eq(), vIndex, this.fw_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.a3(key, value);
  };
  protoOf(MapLikeSerializer).iv = function (decoder, index, builder, checkIndex) {
    return this.hw(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  function newHashMap(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return HashMap_init_$Create$_1(capacity);
  }
  function newLinkedHashMap(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return LinkedHashMap_init_$Create$_1(capacity);
  }
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.gv_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).hv = function (decoder, builder, startIndex, size) {
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
        this.iv(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).iv = function (decoder, index, builder, checkIndex) {
    this.dv(builder, index, decoder.qt(this.eq(), index, this.gv_1));
  };
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).kv = function (decoder, previous) {
    var compositeDecoder = decoder.dt(this.eq());
    var expectedSize = compositeDecoder.vt(this.eq());
    // Inline function 'kotlin.require' call
    if (!(expectedSize >= -1)) {
      var message = 'Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: ' + expectedSize;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    if (!(previous == null)) {
      tmp = this.bv(previous, this.aw(previous) + coerceAtLeast(expectedSize, 0) | 0);
    } else {
      tmp = this.vu(expectedSize);
    }
    var builder = tmp;
    var startIndex = this.xu(builder);
    if (compositeDecoder.tt()) {
      this.hv(compositeDecoder, builder, startIndex, expectedSize);
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.ut(this.eq());
        if (index === -1)
          break $l$loop;
        this.jv(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.et(this.eq());
    return this.zu(builder);
  };
  protoOf(AbstractCollectionSerializer).fq = function (decoder) {
    return this.kv(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).jv = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.iv(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.iv.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.ww_1 = new PrimitiveArrayDescriptor(primitiveSerializer.eq());
  }
  protoOf(PrimitiveArraySerializer).eq = function () {
    return this.ww_1;
  };
  protoOf(PrimitiveArraySerializer).xw = function (_this__u8e3s4) {
    return _this__u8e3s4.yw();
  };
  protoOf(PrimitiveArraySerializer).xu = function (_this__u8e3s4) {
    return this.xw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).zw = function (_this__u8e3s4) {
    return _this__u8e3s4.ax();
  };
  protoOf(PrimitiveArraySerializer).zu = function (_this__u8e3s4) {
    return this.zw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).bx = function (_this__u8e3s4, index, element) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).dv = function (_this__u8e3s4, index, element) {
    return this.bx(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  protoOf(PrimitiveArraySerializer).vu = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return this.cx();
    return this.dx(initialCapacityHint);
  };
  protoOf(PrimitiveArraySerializer).fq = function (decoder) {
    return this.kv(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).gx = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.yw() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.fx(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.fx.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_1 = this;
    this.hx_1 = new BigInt64Array(0);
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
    $this.lx_1[slot] = $this.lx_1[slot] | shiftLeft(1n, offsetInSlot);
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.lx_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.lx_1[slot];
        while (!(slotMarks === -1n)) {
          var indexInSlot = countTrailingZeroBits(~slotMarks);
          slotMarks = slotMarks | shiftLeft(1n, indexInSlot);
          var index = slotOffset + indexInSlot | 0;
          if ($this.jx_1($this.ix_1, index)) {
            $this.lx_1[slot] = slotMarks;
            return index;
          }
        }
        $this.lx_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.ix_1 = descriptor;
    this.jx_1 = readIfAbsent;
    var elementsCount = this.ix_1.mr();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = 0n;
      } else {
        tmp_0 = shiftLeft(-1n, elementsCount);
      }
      tmp.kx_1 = tmp_0;
      this.lx_1 = Companion_getInstance_7().hx_1;
    } else {
      this.kx_1 = 0n;
      this.lx_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).mx = function (index) {
    if (index < 64) {
      this.kx_1 = this.kx_1 | shiftLeft(1n, index);
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).nx = function () {
    var elementsCount = this.ix_1.mr();
    while (!(this.kx_1 === -1n)) {
      var index = countTrailingZeroBits(~this.kx_1);
      this.kx_1 = this.kx_1 | shiftLeft(1n, index);
      if (this.jx_1(this.ix_1, index)) {
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
    var d = new EnumDescriptor(serialName, $this.ox_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.ox_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.dy(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.px_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return constructCallableReference(function (p0) {
      return p0.eq();
    }, 1, 0, 3);
  }
  function EnumSerializer(serialName, values) {
    this.ox_1 = values;
    this.px_1 = null;
    var tmp = this;
    tmp.qx_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).eq = function () {
    var tmp0 = this.qx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.n1();
  };
  protoOf(EnumSerializer).fq = function (decoder) {
    var index = decoder.zs(this.eq());
    if (!(0 <= index ? index <= (this.ox_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.eq().jr() + ' enum values, ' + ('values size is ' + this.ox_1.length));
    }
    return this.ox_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.eq().jr() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.ry_1;
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
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.or(tmp_2), OBJECT_getInstance(), []);
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
    this.qy_1 = ENUM_getInstance();
    var tmp = this;
    tmp.ry_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).kr = function () {
    return this.qy_1;
  };
  protoOf(EnumDescriptor).rr = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!isInterface(other, SerialDescriptor))
      return false;
    if (!(other.kr() === ENUM_getInstance()))
      return false;
    if (!(this.jr() === other.jr()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.jr() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.jr());
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
    this.gz_1 = true;
  }
  protoOf(InlineClassDescriptor).lr = function () {
    return this.gz_1;
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
      if (!(this.jr() === other.jr())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.gz_1 && contentEquals(this.sy(), other.sy()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.mr() === other.mr())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.mr();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.rr(index).jr() === other.rr(index).jr())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.rr(index).kr(), other.rr(index).kr())) {
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
    this.hz_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).iz = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.hz_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).eq = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).fq = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.wq(message);
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.kz_1 = OBJECT_getInstance();
    this.lz_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).kr = function () {
    return this.kz_1;
  };
  protoOf(NothingSerialDescriptor).jr = function () {
    return this.lz_1;
  };
  protoOf(NothingSerialDescriptor).mr = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).or = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).pr = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).sr = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).rr = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).qr = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.lz_1) + imul(31, this.kz_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.mz_1 = serializer;
    this.nz_1 = new SerialDescriptorForNullable(this.mz_1.eq());
  }
  protoOf(NullableSerializer).eq = function () {
    return this.nz_1;
  };
  protoOf(NullableSerializer).fq = function (decoder) {
    return decoder.os() ? decoder.ct(this.mz_1) : decoder.ps();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.mz_1, other.mz_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.mz_1);
  };
  function SerialDescriptorForNullable(original) {
    this.dr_1 = original;
    this.er_1 = this.dr_1.jr() + '?';
    this.fr_1 = cachedSerialNames(this.dr_1);
  }
  protoOf(SerialDescriptorForNullable).jr = function () {
    return this.er_1;
  };
  protoOf(SerialDescriptorForNullable).ms = function () {
    return this.fr_1;
  };
  protoOf(SerialDescriptorForNullable).cr = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.dr_1, other.dr_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.dr_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.dr_1), 31);
  };
  protoOf(SerialDescriptorForNullable).kr = function () {
    return this.dr_1.kr();
  };
  protoOf(SerialDescriptorForNullable).lr = function () {
    return this.dr_1.lr();
  };
  protoOf(SerialDescriptorForNullable).mr = function () {
    return this.dr_1.mr();
  };
  protoOf(SerialDescriptorForNullable).nr = function () {
    return this.dr_1.nr();
  };
  protoOf(SerialDescriptorForNullable).or = function (index) {
    return this.dr_1.or(index);
  };
  protoOf(SerialDescriptorForNullable).pr = function (name) {
    return this.dr_1.pr(name);
  };
  protoOf(SerialDescriptorForNullable).qr = function (index) {
    return this.dr_1.qr(index);
  };
  protoOf(SerialDescriptorForNullable).rr = function (index) {
    return this.dr_1.rr(index);
  };
  protoOf(SerialDescriptorForNullable).sr = function (index) {
    return this.dr_1.sr(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.iq_1 = this$0.pz_1;
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
      return p0.eq();
    }, 1, 0, 5);
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.oz_1 = objectInstance;
    this.pz_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.qz_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).eq = function () {
    var tmp0 = this.qz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.n1();
  };
  protoOf(ObjectSerializer).fq = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.eq();
    var composite = decoder.dt(descriptor);
    var tmp$ret$1;
    $l$block_0: {
      if (composite.tt()) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.ut(this.eq());
      if (index === -1) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$1;
    composite.et(descriptor);
    return this.oz_1;
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
    var tmp0 = _this__u8e3s4.rk_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.rk_1);
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
      return _this__u8e3s4.ms();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.mr());
    var inductionVariable = 0;
    var last = _this__u8e3s4.mr();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.or(i);
        result.c1(element);
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
          var element = descriptor.or(i);
          missingFields.c1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.jr());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.ay_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.n1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.cy_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.n1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.vx_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.vx_1[i];
        indices.a3(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.sx_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.iz();
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
      var tmp0_safe_receiver = this$0.sx_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jz();
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
          var tmp$ret$2 = item.eq();
          destination.c1(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return constructCallableReference(function (p0) {
      return p0.sy();
    }, 1, 0, 7);
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.sy());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    }, 1, 0, 8);
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.rx_1 = serialName;
    this.sx_1 = generatedSerializer;
    this.tx_1 = elementsCount;
    this.ux_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.tx_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.vx_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.tx_1;
    tmp_3.wx_1 = Array(size);
    this.xx_1 = null;
    this.yx_1 = booleanArray(this.tx_1);
    this.zx_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.ay_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.by_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.cy_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).jr = function () {
    return this.rx_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).mr = function () {
    return this.tx_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).kr = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).nr = function () {
    var tmp0_elvis_lhs = this.xx_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).ms = function () {
    return this.zx_1.u2();
  };
  protoOf(PluginGeneratedSerialDescriptor).sy = function () {
    var tmp0 = this.by_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.n1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ty = function (name, isOptional) {
    this.ux_1 = this.ux_1 + 1 | 0;
    this.vx_1[this.ux_1] = name;
    this.yx_1[this.ux_1] = isOptional;
    this.wx_1[this.ux_1] = null;
    if (this.ux_1 === (this.tx_1 - 1 | 0)) {
      this.zx_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).dy = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.ty(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.ty.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).rr = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).eq();
  };
  protoOf(PluginGeneratedSerialDescriptor).sr = function (index) {
    return getChecked_0(this.yx_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).qr = function (index) {
    var tmp0_elvis_lhs = getChecked(this.wx_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).or = function (index) {
    return getChecked(this.vx_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).pr = function (name) {
    var tmp0_elvis_lhs = this.zx_1.t2(name);
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
      if (!(this.jr() === other.jr())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.sy(), other.sy())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.mr() === other.mr())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.mr();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.rr(index).jr() === other.rr(index).jr())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.rr(index).kr(), other.rr(index).kr())) {
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
    var result = getStringHashCode(_this__u8e3s4.jr());
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
      var tmp0_safe_receiver = element.jr();
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
      var tmp0_safe_receiver_0 = element_0.kr();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.mr());
    var tmp_0 = _this__u8e3s4.jr() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.or(i) + ': ' + $this_toStringImpl.rr(i).jr();
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
  protoOf(CharArraySerializer_0).uz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).aw = function (_this__u8e3s4) {
    return this.uz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).vz = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return CharArrayBuilder_init_$Create$(_this__u8e3s4);
    return new CharArrayBuilder(copyOf(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(CharArraySerializer_0).bv = function (_this__u8e3s4, expectedSize) {
    return this.vz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(CharArraySerializer_0).dx = function (size) {
    return CharArrayBuilder_init_$Create$_0(size);
  };
  protoOf(CharArraySerializer_0).cx = function () {
    return CharArrayBuilder_init_$Create$_1();
  };
  protoOf(CharArraySerializer_0).wz = function (decoder, index, builder, checkIndex) {
    builder.zz(decoder.mt(this.ww_1, index));
  };
  protoOf(CharArraySerializer_0).iv = function (decoder, index, builder, checkIndex) {
    return this.wz(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.wz(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(DoubleArraySerializer_0).c10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).aw = function (_this__u8e3s4) {
    return this.c10((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).d10 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return DoubleArrayBuilder_init_$Create$(_this__u8e3s4);
    return new DoubleArrayBuilder(copyOf_0(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(DoubleArraySerializer_0).bv = function (_this__u8e3s4, expectedSize) {
    return this.d10((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(DoubleArraySerializer_0).dx = function (size) {
    return DoubleArrayBuilder_init_$Create$_0(size);
  };
  protoOf(DoubleArraySerializer_0).cx = function () {
    return DoubleArrayBuilder_init_$Create$_1();
  };
  protoOf(DoubleArraySerializer_0).e10 = function (decoder, index, builder, checkIndex) {
    builder.h10(decoder.lt(this.ww_1, index));
  };
  protoOf(DoubleArraySerializer_0).iv = function (decoder, index, builder, checkIndex) {
    return this.e10(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.e10(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(FloatArraySerializer_0).k10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).aw = function (_this__u8e3s4) {
    return this.k10((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).l10 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return FloatArrayBuilder_init_$Create$(_this__u8e3s4);
    return new FloatArrayBuilder(copyOf_1(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(FloatArraySerializer_0).bv = function (_this__u8e3s4, expectedSize) {
    return this.l10((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(FloatArraySerializer_0).dx = function (size) {
    return FloatArrayBuilder_init_$Create$_0(size);
  };
  protoOf(FloatArraySerializer_0).cx = function () {
    return FloatArrayBuilder_init_$Create$_1();
  };
  protoOf(FloatArraySerializer_0).m10 = function (decoder, index, builder, checkIndex) {
    builder.p10(decoder.kt(this.ww_1, index));
  };
  protoOf(FloatArraySerializer_0).iv = function (decoder, index, builder, checkIndex) {
    return this.m10(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.m10(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(LongArraySerializer_0).s10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).aw = function (_this__u8e3s4) {
    return this.s10((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).t10 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return LongArrayBuilder_init_$Create$(_this__u8e3s4);
    return new LongArrayBuilder(copyOf_2(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(LongArraySerializer_0).bv = function (_this__u8e3s4, expectedSize) {
    return this.t10((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(LongArraySerializer_0).dx = function (size) {
    return LongArrayBuilder_init_$Create$_0(size);
  };
  protoOf(LongArraySerializer_0).cx = function () {
    return LongArrayBuilder_init_$Create$_1();
  };
  protoOf(LongArraySerializer_0).u10 = function (decoder, index, builder, checkIndex) {
    builder.x10(decoder.jt(this.ww_1, index));
  };
  protoOf(LongArraySerializer_0).iv = function (decoder, index, builder, checkIndex) {
    return this.u10(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.u10(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(ULongArraySerializer_0).a11 = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).aw = function (_this__u8e3s4) {
    return this.a11(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.tp_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).b11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4))
      return ULongArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _ULongArray___init__impl__twm1l3(copyOf_2(_ULongArray___get_storage__impl__28e64j(_this__u8e3s4), expectedSize));
    return new ULongArrayBuilder(tmp$ret$0, _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4));
  };
  protoOf(ULongArraySerializer_0).bv = function (_this__u8e3s4, expectedSize) {
    return this.b11(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.tp_1 : THROW_CCE(), expectedSize);
  };
  protoOf(ULongArraySerializer_0).dx = function (size) {
    return ULongArrayBuilder_init_$Create$_0(size);
  };
  protoOf(ULongArraySerializer_0).cx = function () {
    return ULongArrayBuilder_init_$Create$_1();
  };
  protoOf(ULongArraySerializer_0).c11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.ot(this.ww_1, index).us();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.f11(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).iv = function (decoder, index, builder, checkIndex) {
    return this.c11(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.c11(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(IntArraySerializer_0).i11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).aw = function (_this__u8e3s4) {
    return this.i11((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).j11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return IntArrayBuilder_init_$Create$(_this__u8e3s4);
    return new IntArrayBuilder(copyOf_3(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(IntArraySerializer_0).bv = function (_this__u8e3s4, expectedSize) {
    return this.j11((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(IntArraySerializer_0).dx = function (size) {
    return IntArrayBuilder_init_$Create$_0(size);
  };
  protoOf(IntArraySerializer_0).cx = function () {
    return IntArrayBuilder_init_$Create$_1();
  };
  protoOf(IntArraySerializer_0).k11 = function (decoder, index, builder, checkIndex) {
    builder.n11(decoder.it(this.ww_1, index));
  };
  protoOf(IntArraySerializer_0).iv = function (decoder, index, builder, checkIndex) {
    return this.k11(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.k11(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(UIntArraySerializer_0).q11 = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).aw = function (_this__u8e3s4) {
    return this.q11(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.jp_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).r11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4))
      return UIntArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _UIntArray___init__impl__ghjpc6(copyOf_3(_UIntArray___get_storage__impl__92a0v0(_this__u8e3s4), expectedSize));
    return new UIntArrayBuilder(tmp$ret$0, _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4));
  };
  protoOf(UIntArraySerializer_0).bv = function (_this__u8e3s4, expectedSize) {
    return this.r11(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.jp_1 : THROW_CCE(), expectedSize);
  };
  protoOf(UIntArraySerializer_0).dx = function (size) {
    return UIntArrayBuilder_init_$Create$_0(size);
  };
  protoOf(UIntArraySerializer_0).cx = function () {
    return UIntArrayBuilder_init_$Create$_1();
  };
  protoOf(UIntArraySerializer_0).s11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.ot(this.ww_1, index).ts();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.v11(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).iv = function (decoder, index, builder, checkIndex) {
    return this.s11(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.s11(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(ShortArraySerializer_0).y11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).aw = function (_this__u8e3s4) {
    return this.y11((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).z11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return ShortArrayBuilder_init_$Create$(_this__u8e3s4);
    return new ShortArrayBuilder(copyOf_4(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(ShortArraySerializer_0).bv = function (_this__u8e3s4, expectedSize) {
    return this.z11((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ShortArraySerializer_0).dx = function (size) {
    return ShortArrayBuilder_init_$Create$_0(size);
  };
  protoOf(ShortArraySerializer_0).cx = function () {
    return ShortArrayBuilder_init_$Create$_1();
  };
  protoOf(ShortArraySerializer_0).a12 = function (decoder, index, builder, checkIndex) {
    builder.d12(decoder.ht(this.ww_1, index));
  };
  protoOf(ShortArraySerializer_0).iv = function (decoder, index, builder, checkIndex) {
    return this.a12(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.a12(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(UShortArraySerializer_0).g12 = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).aw = function (_this__u8e3s4) {
    return this.g12(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.dq_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).h12 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _UShortArray___get_size__impl__jqto1b(_this__u8e3s4))
      return UShortArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _UShortArray___init__impl__9b26ef(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(_this__u8e3s4), expectedSize));
    return new UShortArrayBuilder(tmp$ret$0, _UShortArray___get_size__impl__jqto1b(_this__u8e3s4));
  };
  protoOf(UShortArraySerializer_0).bv = function (_this__u8e3s4, expectedSize) {
    return this.h12(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.dq_1 : THROW_CCE(), expectedSize);
  };
  protoOf(UShortArraySerializer_0).dx = function (size) {
    return UShortArrayBuilder_init_$Create$_0(size);
  };
  protoOf(UShortArraySerializer_0).cx = function () {
    return UShortArrayBuilder_init_$Create$_1();
  };
  protoOf(UShortArraySerializer_0).i12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.ot(this.ww_1, index).ss();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.l12(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).iv = function (decoder, index, builder, checkIndex) {
    return this.i12(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.i12(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(ByteArraySerializer_0).o12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).aw = function (_this__u8e3s4) {
    return this.o12((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).p12 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return ByteArrayBuilder_init_$Create$(_this__u8e3s4);
    return new ByteArrayBuilder(copyOf_5(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(ByteArraySerializer_0).bv = function (_this__u8e3s4, expectedSize) {
    return this.p12((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ByteArraySerializer_0).dx = function (size) {
    return ByteArrayBuilder_init_$Create$_0(size);
  };
  protoOf(ByteArraySerializer_0).cx = function () {
    return ByteArrayBuilder_init_$Create$_1();
  };
  protoOf(ByteArraySerializer_0).q12 = function (decoder, index, builder, checkIndex) {
    builder.t12(decoder.gt(this.ww_1, index));
  };
  protoOf(ByteArraySerializer_0).iv = function (decoder, index, builder, checkIndex) {
    return this.q12(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.q12(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(UByteArraySerializer_0).w12 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).aw = function (_this__u8e3s4) {
    return this.w12(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.zo_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).x12 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4))
      return UByteArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _UByteArray___init__impl__ip4y9n(copyOf_5(_UByteArray___get_storage__impl__d4kctt(_this__u8e3s4), expectedSize));
    return new UByteArrayBuilder(tmp$ret$0, _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4));
  };
  protoOf(UByteArraySerializer_0).bv = function (_this__u8e3s4, expectedSize) {
    return this.x12(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.zo_1 : THROW_CCE(), expectedSize);
  };
  protoOf(UByteArraySerializer_0).dx = function (size) {
    return UByteArrayBuilder_init_$Create$_0(size);
  };
  protoOf(UByteArraySerializer_0).cx = function () {
    return UByteArrayBuilder_init_$Create$_1();
  };
  protoOf(UByteArraySerializer_0).y12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.ot(this.ww_1, index).rs();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.b13(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).iv = function (decoder, index, builder, checkIndex) {
    return this.y12(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.y12(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(BooleanArraySerializer_0).e13 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).aw = function (_this__u8e3s4) {
    return this.e13((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).f13 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return BooleanArrayBuilder_init_$Create$(_this__u8e3s4);
    return new BooleanArrayBuilder(copyOf_6(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(BooleanArraySerializer_0).bv = function (_this__u8e3s4, expectedSize) {
    return this.f13((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(BooleanArraySerializer_0).dx = function (size) {
    return BooleanArrayBuilder_init_$Create$_0(size);
  };
  protoOf(BooleanArraySerializer_0).cx = function () {
    return BooleanArrayBuilder_init_$Create$_1();
  };
  protoOf(BooleanArraySerializer_0).g13 = function (decoder, index, builder, checkIndex) {
    builder.j13(decoder.ft(this.ww_1, index));
  };
  protoOf(BooleanArraySerializer_0).iv = function (decoder, index, builder, checkIndex) {
    return this.g13(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).ex = function (decoder, index, builder, checkIndex) {
    return this.g13(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder_init_$Init$(bufferWithData, $this) {
    CharArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function CharArrayBuilder_init_$Create$(bufferWithData) {
    return CharArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(CharArrayBuilder)));
  }
  function CharArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    CharArrayBuilder.call($this, charArray(initialCapacity), 0);
    return $this;
  }
  function CharArrayBuilder_init_$Create$_0(initialCapacity) {
    return CharArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(CharArrayBuilder)));
  }
  function CharArrayBuilder_init_$Init$_1($this) {
    CharArrayBuilder.call($this, charArray(10), 0);
    return $this;
  }
  function CharArrayBuilder_init_$Create$_1() {
    return CharArrayBuilder_init_$Init$_1(objectCreate(protoOf(CharArrayBuilder)));
  }
  function CharArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.xz_1 = bufferWithData;
    this.yz_1 = initialPosition;
  }
  protoOf(CharArrayBuilder).yw = function () {
    return this.yz_1;
  };
  protoOf(CharArrayBuilder).fx = function (requiredCapacity) {
    if (this.xz_1.length < requiredCapacity)
      this.xz_1 = copyOf(this.xz_1, coerceAtLeast(requiredCapacity, imul(this.xz_1.length, 2)));
  };
  protoOf(CharArrayBuilder).zz = function (c) {
    this.gx();
    var tmp = this.xz_1;
    var _unary__edvuaz = this.yz_1;
    this.yz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).ax = function () {
    return copyOf(this.xz_1, this.yz_1);
  };
  function DoubleArrayBuilder_init_$Init$(bufferWithData, $this) {
    DoubleArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function DoubleArrayBuilder_init_$Create$(bufferWithData) {
    return DoubleArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(DoubleArrayBuilder)));
  }
  function DoubleArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    DoubleArrayBuilder.call($this, new Float64Array(initialCapacity), 0);
    return $this;
  }
  function DoubleArrayBuilder_init_$Create$_0(initialCapacity) {
    return DoubleArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(DoubleArrayBuilder)));
  }
  function DoubleArrayBuilder_init_$Init$_1($this) {
    DoubleArrayBuilder.call($this, new Float64Array(10), 0);
    return $this;
  }
  function DoubleArrayBuilder_init_$Create$_1() {
    return DoubleArrayBuilder_init_$Init$_1(objectCreate(protoOf(DoubleArrayBuilder)));
  }
  function DoubleArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.f10_1 = bufferWithData;
    this.g10_1 = initialPosition;
  }
  protoOf(DoubleArrayBuilder).yw = function () {
    return this.g10_1;
  };
  protoOf(DoubleArrayBuilder).fx = function (requiredCapacity) {
    if (this.f10_1.length < requiredCapacity)
      this.f10_1 = copyOf_0(this.f10_1, coerceAtLeast(requiredCapacity, imul(this.f10_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).h10 = function (c) {
    this.gx();
    var tmp = this.f10_1;
    var _unary__edvuaz = this.g10_1;
    this.g10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).ax = function () {
    return copyOf_0(this.f10_1, this.g10_1);
  };
  function FloatArrayBuilder_init_$Init$(bufferWithData, $this) {
    FloatArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function FloatArrayBuilder_init_$Create$(bufferWithData) {
    return FloatArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(FloatArrayBuilder)));
  }
  function FloatArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    FloatArrayBuilder.call($this, new Float32Array(initialCapacity), 0);
    return $this;
  }
  function FloatArrayBuilder_init_$Create$_0(initialCapacity) {
    return FloatArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(FloatArrayBuilder)));
  }
  function FloatArrayBuilder_init_$Init$_1($this) {
    FloatArrayBuilder.call($this, new Float32Array(10), 0);
    return $this;
  }
  function FloatArrayBuilder_init_$Create$_1() {
    return FloatArrayBuilder_init_$Init$_1(objectCreate(protoOf(FloatArrayBuilder)));
  }
  function FloatArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.n10_1 = bufferWithData;
    this.o10_1 = initialPosition;
  }
  protoOf(FloatArrayBuilder).yw = function () {
    return this.o10_1;
  };
  protoOf(FloatArrayBuilder).fx = function (requiredCapacity) {
    if (this.n10_1.length < requiredCapacity)
      this.n10_1 = copyOf_1(this.n10_1, coerceAtLeast(requiredCapacity, imul(this.n10_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).p10 = function (c) {
    this.gx();
    var tmp = this.n10_1;
    var _unary__edvuaz = this.o10_1;
    this.o10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).ax = function () {
    return copyOf_1(this.n10_1, this.o10_1);
  };
  function LongArrayBuilder_init_$Init$(bufferWithData, $this) {
    LongArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function LongArrayBuilder_init_$Create$(bufferWithData) {
    return LongArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(LongArrayBuilder)));
  }
  function LongArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    LongArrayBuilder.call($this, new BigInt64Array(initialCapacity), 0);
    return $this;
  }
  function LongArrayBuilder_init_$Create$_0(initialCapacity) {
    return LongArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(LongArrayBuilder)));
  }
  function LongArrayBuilder_init_$Init$_1($this) {
    LongArrayBuilder.call($this, new BigInt64Array(10), 0);
    return $this;
  }
  function LongArrayBuilder_init_$Create$_1() {
    return LongArrayBuilder_init_$Init$_1(objectCreate(protoOf(LongArrayBuilder)));
  }
  function LongArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.v10_1 = bufferWithData;
    this.w10_1 = initialPosition;
  }
  protoOf(LongArrayBuilder).yw = function () {
    return this.w10_1;
  };
  protoOf(LongArrayBuilder).fx = function (requiredCapacity) {
    if (this.v10_1.length < requiredCapacity)
      this.v10_1 = copyOf_2(this.v10_1, coerceAtLeast(requiredCapacity, imul(this.v10_1.length, 2)));
  };
  protoOf(LongArrayBuilder).x10 = function (c) {
    this.gx();
    var tmp = this.v10_1;
    var _unary__edvuaz = this.w10_1;
    this.w10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).ax = function () {
    return copyOf_2(this.v10_1, this.w10_1);
  };
  function ULongArrayBuilder_init_$Init$(bufferWithData, $this) {
    ULongArrayBuilder.call($this, bufferWithData, _ULongArray___get_size__impl__ju6dtr(bufferWithData));
    return $this;
  }
  function ULongArrayBuilder_init_$Create$(bufferWithData) {
    return ULongArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(ULongArrayBuilder)));
  }
  function ULongArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    ULongArrayBuilder.call($this, _ULongArray___init__impl__twm1l3_0(initialCapacity), 0);
    return $this;
  }
  function ULongArrayBuilder_init_$Create$_0(initialCapacity) {
    return ULongArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(ULongArrayBuilder)));
  }
  function ULongArrayBuilder_init_$Init$_1($this) {
    ULongArrayBuilder.call($this, _ULongArray___init__impl__twm1l3_0(10), 0);
    return $this;
  }
  function ULongArrayBuilder_init_$Create$_1() {
    return ULongArrayBuilder_init_$Init$_1(objectCreate(protoOf(ULongArrayBuilder)));
  }
  function ULongArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.d11_1 = bufferWithData;
    this.e11_1 = initialPosition;
  }
  protoOf(ULongArrayBuilder).yw = function () {
    return this.e11_1;
  };
  protoOf(ULongArrayBuilder).fx = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.d11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.d11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.d11_1), 2));
      tmp.d11_1 = _ULongArray___init__impl__twm1l3(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).f11 = function (c) {
    this.gx();
    var tmp = this.d11_1;
    var _unary__edvuaz = this.e11_1;
    this.e11_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).k13 = function () {
    var tmp0 = this.d11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.e11_1;
    return _ULongArray___init__impl__twm1l3(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).ax = function () {
    return new ULongArray(this.k13());
  };
  function IntArrayBuilder_init_$Init$(bufferWithData, $this) {
    IntArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function IntArrayBuilder_init_$Create$(bufferWithData) {
    return IntArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(IntArrayBuilder)));
  }
  function IntArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    IntArrayBuilder.call($this, new Int32Array(initialCapacity), 0);
    return $this;
  }
  function IntArrayBuilder_init_$Create$_0(initialCapacity) {
    return IntArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(IntArrayBuilder)));
  }
  function IntArrayBuilder_init_$Init$_1($this) {
    IntArrayBuilder.call($this, new Int32Array(10), 0);
    return $this;
  }
  function IntArrayBuilder_init_$Create$_1() {
    return IntArrayBuilder_init_$Init$_1(objectCreate(protoOf(IntArrayBuilder)));
  }
  function IntArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.l11_1 = bufferWithData;
    this.m11_1 = initialPosition;
  }
  protoOf(IntArrayBuilder).yw = function () {
    return this.m11_1;
  };
  protoOf(IntArrayBuilder).fx = function (requiredCapacity) {
    if (this.l11_1.length < requiredCapacity)
      this.l11_1 = copyOf_3(this.l11_1, coerceAtLeast(requiredCapacity, imul(this.l11_1.length, 2)));
  };
  protoOf(IntArrayBuilder).n11 = function (c) {
    this.gx();
    var tmp = this.l11_1;
    var _unary__edvuaz = this.m11_1;
    this.m11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).ax = function () {
    return copyOf_3(this.l11_1, this.m11_1);
  };
  function UIntArrayBuilder_init_$Init$(bufferWithData, $this) {
    UIntArrayBuilder.call($this, bufferWithData, _UIntArray___get_size__impl__r6l8ci(bufferWithData));
    return $this;
  }
  function UIntArrayBuilder_init_$Create$(bufferWithData) {
    return UIntArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(UIntArrayBuilder)));
  }
  function UIntArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    UIntArrayBuilder.call($this, _UIntArray___init__impl__ghjpc6_0(initialCapacity), 0);
    return $this;
  }
  function UIntArrayBuilder_init_$Create$_0(initialCapacity) {
    return UIntArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(UIntArrayBuilder)));
  }
  function UIntArrayBuilder_init_$Init$_1($this) {
    UIntArrayBuilder.call($this, _UIntArray___init__impl__ghjpc6_0(10), 0);
    return $this;
  }
  function UIntArrayBuilder_init_$Create$_1() {
    return UIntArrayBuilder_init_$Init$_1(objectCreate(protoOf(UIntArrayBuilder)));
  }
  function UIntArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.t11_1 = bufferWithData;
    this.u11_1 = initialPosition;
  }
  protoOf(UIntArrayBuilder).yw = function () {
    return this.u11_1;
  };
  protoOf(UIntArrayBuilder).fx = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.t11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.t11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.t11_1), 2));
      tmp.t11_1 = _UIntArray___init__impl__ghjpc6(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).v11 = function (c) {
    this.gx();
    var tmp = this.t11_1;
    var _unary__edvuaz = this.u11_1;
    this.u11_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).l13 = function () {
    var tmp0 = this.t11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.u11_1;
    return _UIntArray___init__impl__ghjpc6(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).ax = function () {
    return new UIntArray(this.l13());
  };
  function ShortArrayBuilder_init_$Init$(bufferWithData, $this) {
    ShortArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function ShortArrayBuilder_init_$Create$(bufferWithData) {
    return ShortArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(ShortArrayBuilder)));
  }
  function ShortArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    ShortArrayBuilder.call($this, new Int16Array(initialCapacity), 0);
    return $this;
  }
  function ShortArrayBuilder_init_$Create$_0(initialCapacity) {
    return ShortArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(ShortArrayBuilder)));
  }
  function ShortArrayBuilder_init_$Init$_1($this) {
    ShortArrayBuilder.call($this, new Int16Array(10), 0);
    return $this;
  }
  function ShortArrayBuilder_init_$Create$_1() {
    return ShortArrayBuilder_init_$Init$_1(objectCreate(protoOf(ShortArrayBuilder)));
  }
  function ShortArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.b12_1 = bufferWithData;
    this.c12_1 = initialPosition;
  }
  protoOf(ShortArrayBuilder).yw = function () {
    return this.c12_1;
  };
  protoOf(ShortArrayBuilder).fx = function (requiredCapacity) {
    if (this.b12_1.length < requiredCapacity)
      this.b12_1 = copyOf_4(this.b12_1, coerceAtLeast(requiredCapacity, imul(this.b12_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).d12 = function (c) {
    this.gx();
    var tmp = this.b12_1;
    var _unary__edvuaz = this.c12_1;
    this.c12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).ax = function () {
    return copyOf_4(this.b12_1, this.c12_1);
  };
  function UShortArrayBuilder_init_$Init$(bufferWithData, $this) {
    UShortArrayBuilder.call($this, bufferWithData, _UShortArray___get_size__impl__jqto1b(bufferWithData));
    return $this;
  }
  function UShortArrayBuilder_init_$Create$(bufferWithData) {
    return UShortArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(UShortArrayBuilder)));
  }
  function UShortArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    UShortArrayBuilder.call($this, _UShortArray___init__impl__9b26ef_0(initialCapacity), 0);
    return $this;
  }
  function UShortArrayBuilder_init_$Create$_0(initialCapacity) {
    return UShortArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(UShortArrayBuilder)));
  }
  function UShortArrayBuilder_init_$Init$_1($this) {
    UShortArrayBuilder.call($this, _UShortArray___init__impl__9b26ef_0(10), 0);
    return $this;
  }
  function UShortArrayBuilder_init_$Create$_1() {
    return UShortArrayBuilder_init_$Init$_1(objectCreate(protoOf(UShortArrayBuilder)));
  }
  function UShortArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.j12_1 = bufferWithData;
    this.k12_1 = initialPosition;
  }
  protoOf(UShortArrayBuilder).yw = function () {
    return this.k12_1;
  };
  protoOf(UShortArrayBuilder).fx = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.j12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.j12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.j12_1), 2));
      tmp.j12_1 = _UShortArray___init__impl__9b26ef(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).l12 = function (c) {
    this.gx();
    var tmp = this.j12_1;
    var _unary__edvuaz = this.k12_1;
    this.k12_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).m13 = function () {
    var tmp0 = this.j12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.k12_1;
    return _UShortArray___init__impl__9b26ef(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).ax = function () {
    return new UShortArray(this.m13());
  };
  function ByteArrayBuilder_init_$Init$(bufferWithData, $this) {
    ByteArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$(bufferWithData) {
    return ByteArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ByteArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    ByteArrayBuilder.call($this, new Int8Array(initialCapacity), 0);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$_0(initialCapacity) {
    return ByteArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ByteArrayBuilder_init_$Init$_1($this) {
    ByteArrayBuilder.call($this, new Int8Array(10), 0);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$_1() {
    return ByteArrayBuilder_init_$Init$_1(objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ByteArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.r12_1 = bufferWithData;
    this.s12_1 = initialPosition;
  }
  protoOf(ByteArrayBuilder).yw = function () {
    return this.s12_1;
  };
  protoOf(ByteArrayBuilder).fx = function (requiredCapacity) {
    if (this.r12_1.length < requiredCapacity)
      this.r12_1 = copyOf_5(this.r12_1, coerceAtLeast(requiredCapacity, imul(this.r12_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).t12 = function (c) {
    this.gx();
    var tmp = this.r12_1;
    var _unary__edvuaz = this.s12_1;
    this.s12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).ax = function () {
    return copyOf_5(this.r12_1, this.s12_1);
  };
  function UByteArrayBuilder_init_$Init$(bufferWithData, $this) {
    UByteArrayBuilder.call($this, bufferWithData, _UByteArray___get_size__impl__h6pkdv(bufferWithData));
    return $this;
  }
  function UByteArrayBuilder_init_$Create$(bufferWithData) {
    return UByteArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(UByteArrayBuilder)));
  }
  function UByteArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    UByteArrayBuilder.call($this, _UByteArray___init__impl__ip4y9n_0(initialCapacity), 0);
    return $this;
  }
  function UByteArrayBuilder_init_$Create$_0(initialCapacity) {
    return UByteArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(UByteArrayBuilder)));
  }
  function UByteArrayBuilder_init_$Init$_1($this) {
    UByteArrayBuilder.call($this, _UByteArray___init__impl__ip4y9n_0(10), 0);
    return $this;
  }
  function UByteArrayBuilder_init_$Create$_1() {
    return UByteArrayBuilder_init_$Init$_1(objectCreate(protoOf(UByteArrayBuilder)));
  }
  function UByteArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.z12_1 = bufferWithData;
    this.a13_1 = initialPosition;
  }
  protoOf(UByteArrayBuilder).yw = function () {
    return this.a13_1;
  };
  protoOf(UByteArrayBuilder).fx = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.z12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.z12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.z12_1), 2));
      tmp.z12_1 = _UByteArray___init__impl__ip4y9n(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).b13 = function (c) {
    this.gx();
    var tmp = this.z12_1;
    var _unary__edvuaz = this.a13_1;
    this.a13_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).n13 = function () {
    var tmp0 = this.z12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.a13_1;
    return _UByteArray___init__impl__ip4y9n(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).ax = function () {
    return new UByteArray(this.n13());
  };
  function BooleanArrayBuilder_init_$Init$(bufferWithData, $this) {
    BooleanArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function BooleanArrayBuilder_init_$Create$(bufferWithData) {
    return BooleanArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(BooleanArrayBuilder)));
  }
  function BooleanArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    BooleanArrayBuilder.call($this, booleanArray(initialCapacity), 0);
    return $this;
  }
  function BooleanArrayBuilder_init_$Create$_0(initialCapacity) {
    return BooleanArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(BooleanArrayBuilder)));
  }
  function BooleanArrayBuilder_init_$Init$_1($this) {
    BooleanArrayBuilder.call($this, booleanArray(10), 0);
    return $this;
  }
  function BooleanArrayBuilder_init_$Create$_1() {
    return BooleanArrayBuilder_init_$Init$_1(objectCreate(protoOf(BooleanArrayBuilder)));
  }
  function BooleanArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.h13_1 = bufferWithData;
    this.i13_1 = initialPosition;
  }
  protoOf(BooleanArrayBuilder).yw = function () {
    return this.i13_1;
  };
  protoOf(BooleanArrayBuilder).fx = function (requiredCapacity) {
    if (this.h13_1.length < requiredCapacity)
      this.h13_1 = copyOf_6(this.h13_1, coerceAtLeast(requiredCapacity, imul(this.h13_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).j13 = function (c) {
    this.gx();
    var tmp = this.h13_1;
    var _unary__edvuaz = this.i13_1;
    this.i13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).ax = function () {
    return copyOf_6(this.h13_1, this.i13_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.o13_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).eq = function () {
    return this.o13_1;
  };
  protoOf(StringSerializer).fq = function (decoder) {
    return decoder.ys();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.p13_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).eq = function () {
    return this.p13_1;
  };
  protoOf(IntSerializer).fq = function (decoder) {
    return decoder.ts();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.q13_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).eq = function () {
    return this.q13_1;
  };
  protoOf(BooleanSerializer).fq = function (decoder) {
    return decoder.qs();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.r13_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).eq = function () {
    return this.r13_1;
  };
  protoOf(LongSerializer).fq = function (decoder) {
    return decoder.us();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().t2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.s13_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.s13_1 = serialName;
    this.t13_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).jr = function () {
    return this.s13_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).kr = function () {
    return this.t13_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).mr = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).or = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).pr = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).sr = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).rr = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).qr = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.s13_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.s13_1 === other.s13_1 && equals(this.t13_1, other.t13_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.s13_1) + imul(31, this.t13_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().v2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.eq().jr();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.u13_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).eq = function () {
    return this.u13_1;
  };
  protoOf(ByteSerializer).fq = function (decoder) {
    return decoder.rs();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.v13_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).eq = function () {
    return this.v13_1;
  };
  protoOf(ShortSerializer).fq = function (decoder) {
    return decoder.ss();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.w13_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).eq = function () {
    return this.w13_1;
  };
  protoOf(CharSerializer).x13 = function (decoder) {
    return decoder.xs();
  };
  protoOf(CharSerializer).fq = function (decoder) {
    return new Char(this.x13(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.y13_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).eq = function () {
    return this.y13_1;
  };
  protoOf(DoubleSerializer).fq = function (decoder) {
    return decoder.ws();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.z13_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).eq = function () {
    return this.z13_1;
  };
  protoOf(FloatSerializer).fq = function (decoder) {
    return decoder.vs();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.a14_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).eq = function () {
    return this.a14_1.eq();
  };
  protoOf(UnitSerializer).b14 = function (decoder) {
    this.a14_1.fq(decoder);
  };
  protoOf(UnitSerializer).fq = function (decoder) {
    this.b14(decoder);
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
  protoOf(NamedValueDecoder).e14 = function (_this__u8e3s4, index) {
    return this.g14(this.f14(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).g14 = function (nestedName) {
    var tmp0_elvis_lhs = this.j14();
    return this.k14(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).f14 = function (descriptor, index) {
    return descriptor.or(index);
  };
  protoOf(NamedValueDecoder).k14 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).l14 = function () {
    return this.h14_1.r() ? '$' : joinToString(this.h14_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.z14(tag);
    var r = block();
    if (!$this.i14_1) {
      $this.a15();
    }
    $this.i14_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.bt($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.eq().cr();
      var tmp;
      if (isNullabilitySupported || tmp0.os()) {
        tmp = this$0.bt($deserializer, $previousValue);
      } else {
        tmp = tmp0.ps();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.h14_1 = ArrayList_init_$Create$_0();
    this.i14_1 = false;
  }
  protoOf(TaggedDecoder).st = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).m14 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).n14 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).o14 = function (tag) {
    var tmp = this.m14(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).p14 = function (tag) {
    var tmp = this.m14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).q14 = function (tag) {
    var tmp = this.m14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).r14 = function (tag) {
    var tmp = this.m14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).s14 = function (tag) {
    var tmp = this.m14(tag);
    return typeof tmp === 'bigint' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t14 = function (tag) {
    var tmp = this.m14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u14 = function (tag) {
    var tmp = this.m14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).v14 = function (tag) {
    var tmp = this.m14(tag);
    return tmp instanceof Char ? tmp.x1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).w14 = function (tag) {
    var tmp = this.m14(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x14 = function (tag, enumDescriptor) {
    var tmp = this.m14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y14 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.z14(tag);
    return this;
  };
  protoOf(TaggedDecoder).bt = function (deserializer, previousValue) {
    return this.ct(deserializer);
  };
  protoOf(TaggedDecoder).at = function (descriptor) {
    return this.y14(this.a15(), descriptor);
  };
  protoOf(TaggedDecoder).os = function () {
    var tmp0_elvis_lhs = this.j14();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.n14(currentTag);
  };
  protoOf(TaggedDecoder).ps = function () {
    return null;
  };
  protoOf(TaggedDecoder).qs = function () {
    return this.o14(this.a15());
  };
  protoOf(TaggedDecoder).rs = function () {
    return this.p14(this.a15());
  };
  protoOf(TaggedDecoder).ss = function () {
    return this.q14(this.a15());
  };
  protoOf(TaggedDecoder).ts = function () {
    return this.r14(this.a15());
  };
  protoOf(TaggedDecoder).us = function () {
    return this.s14(this.a15());
  };
  protoOf(TaggedDecoder).vs = function () {
    return this.t14(this.a15());
  };
  protoOf(TaggedDecoder).ws = function () {
    return this.u14(this.a15());
  };
  protoOf(TaggedDecoder).xs = function () {
    return this.v14(this.a15());
  };
  protoOf(TaggedDecoder).ys = function () {
    return this.w14(this.a15());
  };
  protoOf(TaggedDecoder).zs = function (enumDescriptor) {
    return this.x14(this.a15(), enumDescriptor);
  };
  protoOf(TaggedDecoder).dt = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).et = function (descriptor) {
  };
  protoOf(TaggedDecoder).ft = function (descriptor, index) {
    return this.o14(this.e14(descriptor, index));
  };
  protoOf(TaggedDecoder).gt = function (descriptor, index) {
    return this.p14(this.e14(descriptor, index));
  };
  protoOf(TaggedDecoder).ht = function (descriptor, index) {
    return this.q14(this.e14(descriptor, index));
  };
  protoOf(TaggedDecoder).it = function (descriptor, index) {
    return this.r14(this.e14(descriptor, index));
  };
  protoOf(TaggedDecoder).jt = function (descriptor, index) {
    return this.s14(this.e14(descriptor, index));
  };
  protoOf(TaggedDecoder).kt = function (descriptor, index) {
    return this.t14(this.e14(descriptor, index));
  };
  protoOf(TaggedDecoder).lt = function (descriptor, index) {
    return this.u14(this.e14(descriptor, index));
  };
  protoOf(TaggedDecoder).mt = function (descriptor, index) {
    return this.v14(this.e14(descriptor, index));
  };
  protoOf(TaggedDecoder).nt = function (descriptor, index) {
    return this.w14(this.e14(descriptor, index));
  };
  protoOf(TaggedDecoder).ot = function (descriptor, index) {
    return this.y14(this.e14(descriptor, index), descriptor.rr(index));
  };
  protoOf(TaggedDecoder).pt = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.e14(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).rt = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.e14(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).j14 = function () {
    return lastOrNull(this.h14_1);
  };
  protoOf(TaggedDecoder).z14 = function (name) {
    this.h14_1.c1(name);
  };
  protoOf(TaggedDecoder).a15 = function () {
    var r = this.h14_1.z2(get_lastIndex_0(this.h14_1));
    this.i14_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.b15_1 = key;
    this.c15_1 = value;
  }
  protoOf(MapEntry).m1 = function () {
    return this.b15_1;
  };
  protoOf(MapEntry).n1 = function () {
    return this.c15_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.b15_1) + ', value=' + toString_0(this.c15_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.b15_1 == null ? 0 : hashCode(this.b15_1);
    result = imul(result, 31) + (this.c15_1 == null ? 0 : hashCode(this.c15_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.b15_1, other.b15_1))
      return false;
    if (!equals(this.c15_1, other.c15_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.oq('key', $keySerializer.eq());
      $this$buildSerialDescriptor.oq('value', $valueSerializer.eq());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.f15_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).eq = function () {
    return this.f15_1;
  };
  protoOf(MapEntrySerializer_0).g15 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.oq('first', $keySerializer.eq());
      $this$buildClassSerialDescriptor.oq('second', $valueSerializer.eq());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.l15_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).eq = function () {
    return this.l15_1;
  };
  protoOf(PairSerializer_0).g15 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.qt($this.p15_1, 0, $this.m15_1);
    var b = composite.qt($this.p15_1, 1, $this.n15_1);
    var c = composite.qt($this.p15_1, 2, $this.o15_1);
    composite.et($this.p15_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.ut($this.p15_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.qt($this.p15_1, 0, $this.m15_1);
          break;
        case 1:
          b = composite.qt($this.p15_1, 1, $this.n15_1);
          break;
        case 2:
          c = composite.qt($this.p15_1, 2, $this.o15_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.et($this.p15_1);
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
      $this$buildClassSerialDescriptor.oq('first', this$0.m15_1.eq());
      $this$buildClassSerialDescriptor.oq('second', this$0.n15_1.eq());
      $this$buildClassSerialDescriptor.oq('third', this$0.o15_1.eq());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.m15_1 = aSerializer;
    this.n15_1 = bSerializer;
    this.o15_1 = cSerializer;
    var tmp = this;
    tmp.p15_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).eq = function () {
    return this.p15_1;
  };
  protoOf(TripleSerializer_0).fq = function (decoder) {
    var composite = decoder.dt(this.p15_1);
    if (composite.tt()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.h15_1 = keySerializer;
    this.i15_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).fq = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.eq();
    var composite = decoder.dt(descriptor);
    var tmp$ret$1;
    $l$block: {
      if (composite.tt()) {
        var key = composite.qt(this.eq(), 0, this.h15_1);
        var value = composite.qt(this.eq(), 1, this.i15_1);
        tmp$ret$1 = this.g15(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.ut(this.eq());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.qt(this.eq(), 0, this.h15_1);
            break;
          case 1:
            value_0 = composite.qt(this.eq(), 1, this.i15_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      tmp$ret$1 = this.g15(key_0, value_0);
    }
    var result = tmp$ret$1;
    composite.et(descriptor);
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
    this.q15_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_instance));
  }
  protoOf(ULongSerializer).eq = function () {
    return this.q15_1;
  };
  protoOf(ULongSerializer).r15 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.at(this.q15_1).us();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).fq = function (decoder) {
    return new ULong(this.r15(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.s15_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).eq = function () {
    return this.s15_1;
  };
  protoOf(UIntSerializer).t15 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.at(this.s15_1).ts();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).fq = function (decoder) {
    return new UInt(this.t15(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.u15_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_7(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).eq = function () {
    return this.u15_1;
  };
  protoOf(UByteSerializer).v15 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.at(this.u15_1).rs();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).fq = function (decoder) {
    return new UByte(this.v15(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.w15_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).eq = function () {
    return this.w15_1;
  };
  protoOf(UShortSerializer).x15 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.at(this.w15_1).ss();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).fq = function (decoder) {
    return new UShort(this.x15(decoder));
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
  protoOf(SerializersModule).yq = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.zq(kClass, typeArgumentsSerializers) : $super.zq.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.z15_1 = class2ContextualFactory;
    this.a16_1 = polyBase2Serializers;
    this.b16_1 = polyBase2DefaultSerializerProvider;
    this.c16_1 = polyBase2NamedSerializers;
    this.d16_1 = polyBase2DefaultDeserializerProvider;
    this.e16_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).xq = function () {
    return this.e16_1;
  };
  protoOf(SerialModuleImpl).wt = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.c16_1.t2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).t2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.d16_1.t2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).zq = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.z15_1.t2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f16(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).y15 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.z15_1.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.n1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.i16_1;
        collector.j16(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.h16(kclass, serial.g16_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.a16_1.l1().t();
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
        collector.k16(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.b16_1.l1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.n1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.l16(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.d16_1.l1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.n1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.m16(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
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
    this.n16_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.n16_1.equals(tmp0_other_with_cast.n16_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.n16_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.n16_1) + ')';
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
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().ob()) {
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
    return rootClass.equals(PrimitiveClasses_getInstance().wb());
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
          var tmp_1 = assocObject.rz(args.slice());
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
  function estimateCapacityForHashMap(requiredCapacity) {
    return requiredCapacity;
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().xb(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().ac(), CharArraySerializer()), to(PrimitiveClasses_getInstance().vb(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().hc(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().ub(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().gc(), FloatArraySerializer()), to(PrimitiveClasses_getInstance().tb(), serializer_5(Companion_instance)), to(PrimitiveClasses_getInstance().fc(), LongArraySerializer()), to(getKClass(ULong), serializer_1(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().sb(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().dc(), IntArraySerializer()), to(getKClass(UInt), serializer_2(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().rb(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().cc(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().qb(), serializer_7(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().bc(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().pb(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().zb(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().ob(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().ob())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.o16_1 = $factory;
  }
  protoOf(createCache$1).ar = function (key) {
    return this.o16_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.p16_1 = $factory;
  }
  protoOf(createParametrizedCache$1).br = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.p16_1(key, types);
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
  protoOf(SerialDescriptorImpl).cr = get_isNullable;
  protoOf(SerialDescriptorImpl).lr = get_isInline;
  protoOf(AbstractDecoder).qt = decodeSerializableElement$default;
  protoOf(AbstractDecoder).ct = decodeSerializableValue;
  protoOf(AbstractDecoder).tt = decodeSequentially;
  protoOf(AbstractDecoder).vt = decodeCollectionSize;
  protoOf(ListLikeDescriptor).cr = get_isNullable;
  protoOf(ListLikeDescriptor).lr = get_isInline;
  protoOf(ListLikeDescriptor).nr = get_annotations;
  protoOf(MapLikeDescriptor).cr = get_isNullable;
  protoOf(MapLikeDescriptor).lr = get_isInline;
  protoOf(MapLikeDescriptor).nr = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).cr = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).lr = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).jz = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).cr = get_isNullable;
  protoOf(NothingSerialDescriptor).lr = get_isInline;
  protoOf(NothingSerialDescriptor).nr = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).cr = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).lr = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).nr = get_annotations;
  protoOf(TaggedDecoder).qt = decodeSerializableElement$default;
  protoOf(TaggedDecoder).ct = decodeSerializableValue;
  protoOf(TaggedDecoder).tt = decodeSequentially;
  protoOf(TaggedDecoder).vt = decodeCollectionSize;
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
  _.$_$.l = SerializationException_init_$Create$_0;
  _.$_$.m = SerializationException_init_$Init$_1;
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
  _.$_$.t1 = missingFieldExceptionWithNewMessage;
  _.$_$.u1 = throwMissingFieldException;
  _.$_$.v1 = EmptySerializersModule_0;
  _.$_$.w1 = contextual;
  _.$_$.x1 = SerializersModuleCollector;
  _.$_$.y1 = DeserializationStrategy;
  _.$_$.z1 = KSerializer;
  _.$_$.a2 = MissingFieldException;
  _.$_$.b2 = SerializableWith;
  _.$_$.c2 = SerializationException;
  _.$_$.d2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
