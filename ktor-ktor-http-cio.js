(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-http.js', './kotlinx-coroutines-core.js', './ktor-ktor-io.js', './kotlinx-io-kotlinx-io-bytestring.js', './kotlinx-io-kotlinx-io-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-http.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-io.js'), require('./kotlinx-io-kotlinx-io-bytestring.js'), require('./kotlinx-io-kotlinx-io-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-http-cio'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-http-cio'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-http-cio'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-http-cio'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio'. Its dependency 'kotlinx-io-kotlinx-io-bytestring' was not found. Please, check whether 'kotlinx-io-kotlinx-io-bytestring' is loaded prior to 'ktor-ktor-http-cio'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-http-cio'.");
    }
    globalThis['ktor-ktor-http-cio'] = factory(typeof globalThis['ktor-ktor-http-cio'] === 'undefined' ? {} : globalThis['ktor-ktor-http-cio'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-http'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-io'], globalThis['kotlinx-io-kotlinx-io-bytestring'], globalThis['kotlinx-io-kotlinx-io-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring, kotlin_org_jetbrains_kotlinx_kotlinx_io_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.d;
  var protoOf = kotlin_kotlin.$_$.wb;
  var MultiPartData = kotlin_io_ktor_ktor_http.$_$.p;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var initMetadataForClass = kotlin_kotlin.$_$.xa;
  var Unit_instance = kotlin_kotlin.$_$.s2;
  var toString = kotlin_kotlin.$_$.zb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j4;
  var abs = kotlin_kotlin.$_$.ac;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.y3;
  var CoroutineImpl = kotlin_kotlin.$_$.g9;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var SequenceScope = kotlin_kotlin.$_$.xc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o8;
  var initMetadataForLambda = kotlin_kotlin.$_$.cb;
  var constructCallableReference = kotlin_kotlin.$_$.oa;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d3;
  var sequence = kotlin_kotlin.$_$.zc;
  var DefaultPool = kotlin_io_ktor_ktor_io.$_$.g1;
  var fill = kotlin_kotlin.$_$.r6;
  var isIntArray = kotlin_kotlin.$_$.lb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var endsWith = kotlin_kotlin.$_$.jd;
  var charSequenceLength = kotlin_kotlin.$_$.la;
  var charSequenceGet = kotlin_kotlin.$_$.ka;
  var Char = kotlin_kotlin.$_$.lf;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.i;
  var contains = kotlin_kotlin.$_$.ed;
  var charSequenceSubSequence = kotlin_kotlin.$_$.ma;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.n;
  var IllegalStateException = kotlin_kotlin.$_$.uf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.m4;
  var captureStack = kotlin_kotlin.$_$.ga;
  var readLineStrictTo = kotlin_io_ktor_ktor_io.$_$.h;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n4;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.za;
  var setOf = kotlin_kotlin.$_$.w7;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.d;
  var LineEndingMode__plus_impl_ttpz2j = kotlin_io_ktor_ktor_io.$_$.a;
  var listOf = kotlin_kotlin.$_$.i7;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var ByteString_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.b;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var toString_0 = kotlin_kotlin.$_$.we;
  var toByte = kotlin_kotlin.$_$.xb;
  var copyOfRange = kotlin_kotlin.$_$.b6;
  var produce = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var startsWith = kotlin_kotlin.$_$.he;
  var readUntil = kotlin_io_ktor_ktor_io.$_$.k;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.m1;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var isInterface = kotlin_kotlin.$_$.mb;
  var counted = kotlin_io_ktor_ktor_io.$_$.q1;
  var writer = kotlin_io_ktor_ktor_io.$_$.v1;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.j;
  var get_remaining = kotlin_io_ktor_ktor_io.$_$.z;
  var skipIfFound = kotlin_io_ktor_ktor_io.$_$.l;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.i1;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.r3;
  var close = kotlin_io_ktor_ktor_io.$_$.p1;
  var subtract = kotlin_kotlin.$_$.ba;
  var convertToInt = kotlin_kotlin.$_$.o9;
  var readPacket = kotlin_io_ktor_ktor_io.$_$.i;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.e;
  var add = kotlin_kotlin.$_$.m9;
  var fromInt = kotlin_kotlin.$_$.r9;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.c1;
  var ByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.c;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m3;
  var compareTo = kotlin_kotlin.$_$.na;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.t4;
  var Collection = kotlin_kotlin.$_$.d5;
  var emptyList = kotlin_kotlin.$_$.o6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ya;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.x3;
  var isCharSequence = kotlin_kotlin.$_$.ib;
  var getStringHashCode = kotlin_kotlin.$_$.va;
  var CharSequence = kotlin_kotlin.$_$.kf;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.q4;
  var NoPoolImpl = kotlin_io_ktor_ktor_io.$_$.h1;
  var charArray = kotlin_kotlin.$_$.ia;
  var shiftLeft = kotlin_kotlin.$_$.y9;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.u4;
  var toString_1 = kotlin_kotlin.$_$.o;
  var charCodeAt = kotlin_kotlin.$_$.ja;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.j;
  var numberRangeToNumber = kotlin_kotlin.$_$.sb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.c3;
  var numberToLong = kotlin_kotlin.$_$.x9;
  var toLongArray = kotlin_kotlin.$_$.f8;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.l;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.k;
  var toByteArray_0 = kotlin_kotlin.$_$.a8;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var isWhitespace = kotlin_kotlin.$_$.sd;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(CIOMultipartDataBase, 'CIOMultipartDataBase', VOID, VOID, [MultiPartData, CoroutineScope], [0, 1]);
  initMetadataForClass(HttpHeadersMap, 'HttpHeadersMap');
  initMetadataForLambda(HeadersData$headersStarts$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(HeadersData, 'HeadersData', HeadersData);
  initMetadataForClass(IntArrayPool$1, VOID, VOID, DefaultPool);
  initMetadataForClass(HeadersDataPool$1, VOID, VOID, DefaultPool);
  initMetadataForClass(ParserException, 'ParserException', VOID, IllegalStateException);
  initMetadataForCoroutine($parseHeadersCOROUTINE$, CoroutineImpl);
  initMetadataForClass(MultipartEvent, 'MultipartEvent', VOID, VOID, VOID, [0]);
  initMetadataForClass(Preamble, 'Preamble', VOID, MultipartEvent, VOID, [0]);
  initMetadataForClass(MultipartPart, 'MultipartPart', VOID, MultipartEvent, VOID, [0]);
  initMetadataForClass(Epilogue, 'Epilogue', VOID, MultipartEvent, VOID, [0]);
  initMetadataForLambda(parseMultipart$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(parseMultipart$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($parsePartHeadersImplCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($parsePartBodyImplCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($skipIfFoundReadCountCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Node, 'Node');
  initMetadataForCompanion(Companion);
  initMetadataForClass(AsciiCharTree, 'AsciiCharTree');
  initMetadataForClass(SubSequenceImpl, 'SubSequenceImpl', VOID, VOID, [CharSequence]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', CharArrayBuilder, VOID, [CharSequence]);
  initMetadataForClass(CharArrayPool$1, VOID, VOID, NoPoolImpl);
  initMetadataForClass(CharArrayPool$2, VOID, VOID, DefaultPool);
  initMetadataForClass(UnsupportedMediaTypeExceptionCIO, 'UnsupportedMediaTypeExceptionCIO', VOID, IOException);
  initMetadataForClass(MutableRange, 'MutableRange');
  //endregion
  function CIOMultipartDataBase(coroutineContext, channel, contentType, contentLength, formFieldLimit) {
    formFieldLimit = formFieldLimit === VOID ? 65536n : formFieldLimit;
    this.c37_1 = coroutineContext;
    this.d37_1 = null;
    this.e37_1 = parseMultipart(this, channel, contentType, contentLength, formFieldLimit);
  }
  protoOf(CIOMultipartDataBase).l1k = function () {
    return this.c37_1;
  };
  function get_IntArrayPool() {
    _init_properties_HttpHeadersMap_kt__hwatby();
    return IntArrayPool;
  }
  var IntArrayPool;
  function get_HeadersDataPool() {
    _init_properties_HttpHeadersMap_kt__hwatby();
    return HeadersDataPool;
  }
  var HeadersDataPool;
  function thresholdReached($this) {
    return $this.g37_1 >= $this.h37_1 * 0.75;
  }
  function resize($this) {
    var prevSize = $this.g37_1;
    var prevData = $this.i37_1;
    $this.g37_1 = 0;
    $this.h37_1 = imul($this.h37_1, 2) | 128;
    var tmp = $this;
    // Inline function 'kotlin.apply' call
    var this_0 = get_HeadersDataPool().p2j();
    this_0.l37(imul(prevData.k37(), 2) | 1);
    tmp.i37_1 = this_0;
    var _iterator__ex2g4s = prevData.m37().t();
    while (_iterator__ex2g4s.u()) {
      var headerOffset = _iterator__ex2g4s.v();
      $this.o37(prevData.n37(headerOffset + 1 | 0), prevData.n37(headerOffset + 2 | 0), prevData.n37(headerOffset + 3 | 0), prevData.n37(headerOffset + 4 | 0));
    }
    get_HeadersDataPool().q2j(prevData);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(prevSize === $this.g37_1)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function headerHasName($this, name, headerOffset) {
    var nameStartIndex = $this.i37_1.n37(headerOffset + 1 | 0);
    var nameEndIndex = $this.i37_1.n37(headerOffset + 2 | 0);
    return equalsLowerCase($this.f37_1, nameStartIndex, nameEndIndex, name);
  }
  function HttpHeadersMap(builder) {
    this.f37_1 = builder;
    this.g37_1 = 0;
    this.h37_1 = 0;
    this.i37_1 = get_HeadersDataPool().p2j();
  }
  protoOf(HttpHeadersMap).rd = function (name) {
    if (this.g37_1 === 0)
      return null;
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = hashCodeLowerCase(name);
    var hash = abs(this_0);
    var headerIndex = hash % this.h37_1 | 0;
    while (!(this.i37_1.n37(imul(headerIndex, 6) + 0 | 0) === -1)) {
      if (headerHasName(this, name, imul(headerIndex, 6))) {
        return this.p37(imul(headerIndex, 6));
      }
      headerIndex = (headerIndex + 1 | 0) % this.h37_1 | 0;
    }
    return null;
  };
  protoOf(HttpHeadersMap).q37 = function () {
    return this.i37_1.m37();
  };
  protoOf(HttpHeadersMap).o37 = function (nameStartIndex, nameEndIndex, valueStartIndex, valueEndIndex) {
    if (thresholdReached(this)) {
      resize(this);
    }
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = hashCodeLowerCase(this.f37_1, nameStartIndex, nameEndIndex);
    var hash = abs(this_0);
    var name = this.f37_1.c(nameStartIndex, nameEndIndex);
    var headerIndex = hash % this.h37_1 | 0;
    var sameNameHeaderIndex = -1;
    while (!(this.i37_1.n37(imul(headerIndex, 6) + 0 | 0) === -1)) {
      if (headerHasName(this, name, imul(headerIndex, 6))) {
        sameNameHeaderIndex = headerIndex;
      }
      headerIndex = (headerIndex + 1 | 0) % this.h37_1 | 0;
    }
    var headerOffset = imul(headerIndex, 6);
    this.i37_1.y37(headerOffset + 0 | 0, hash);
    this.i37_1.y37(headerOffset + 1 | 0, nameStartIndex);
    this.i37_1.y37(headerOffset + 2 | 0, nameEndIndex);
    this.i37_1.y37(headerOffset + 3 | 0, valueStartIndex);
    this.i37_1.y37(headerOffset + 4 | 0, valueEndIndex);
    this.i37_1.y37(headerOffset + 5 | 0, -1);
    if (!(sameNameHeaderIndex === -1)) {
      this.i37_1.y37(imul(sameNameHeaderIndex, 6) + 5 | 0, headerIndex);
    }
    this.g37_1 = this.g37_1 + 1 | 0;
  };
  protoOf(HttpHeadersMap).z37 = function (headerOffset) {
    var nameStartIndex = this.i37_1.n37(headerOffset + 1 | 0);
    var nameEndIndex = this.i37_1.n37(headerOffset + 2 | 0);
    return this.f37_1.c(nameStartIndex, nameEndIndex);
  };
  protoOf(HttpHeadersMap).p37 = function (headerOffset) {
    var valueStartIndex = this.i37_1.n37(headerOffset + 3 | 0);
    var valueEndIndex = this.i37_1.n37(headerOffset + 4 | 0);
    return this.f37_1.c(valueStartIndex, valueEndIndex);
  };
  protoOf(HttpHeadersMap).j24 = function () {
    this.g37_1 = 0;
    this.h37_1 = 0;
    get_HeadersDataPool().q2j(this.i37_1);
    this.i37_1 = get_HeadersDataPool().p2j();
  };
  protoOf(HttpHeadersMap).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    dumpTo(this, '', this_0);
    return this_0.toString();
  };
  function HeadersData$headersStarts$slambda(this$0, resultContinuation) {
    this.i38_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HeadersData$headersStarts$slambda).o38 = function ($this$sequence, $completion) {
    var tmp = this.p38($this$sequence, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HeadersData$headersStarts$slambda).k9 = function (p1, $completion) {
    return this.o38(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HeadersData$headersStarts$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 7;
            this.k38_1 = 0;
            this.n38_1 = this.i38_1.j37_1.t();
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!this.n38_1.u()) {
              this.p8_1 = 6;
              continue $sm;
            }

            this.m38_1 = this.n38_1.v();
            this.l38_1 = 0;
            this.p8_1 = 2;
            continue $sm;
          case 2:
            if (!(this.l38_1 < this.m38_1.length)) {
              this.p8_1 = 5;
              continue $sm;
            }

            if (!(this.i38_1.n37(this.k38_1 + 0 | 0) === -1)) {
              this.p8_1 = 3;
              suspendResult = this.j38_1.og(this.k38_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.p8_1 = 4;
              continue $sm;
            }

          case 3:
            this.p8_1 = 4;
            continue $sm;
          case 4:
            this.l38_1 = this.l38_1 + 6 | 0;
            this.k38_1 = this.k38_1 + 6 | 0;
            this.p8_1 = 2;
            continue $sm;
          case 5:
            this.p8_1 = 1;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 7) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HeadersData$headersStarts$slambda).p38 = function ($this$sequence, completion) {
    var i = new HeadersData$headersStarts$slambda(this.i38_1, completion);
    i.j38_1 = $this$sequence;
    return i;
  };
  function HeadersData$headersStarts$slambda_0(this$0, resultContinuation) {
    var i = new HeadersData$headersStarts$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$sequence, $completion) {
      return i.o38($this$sequence, $completion);
    }, 1);
  }
  function HeadersData() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.j37_1 = ArrayList_init_$Create$();
  }
  protoOf(HeadersData).k37 = function () {
    return this.j37_1.e1();
  };
  protoOf(HeadersData).l37 = function (subArraysCount) {
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < subArraysCount)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.j37_1.b1(get_IntArrayPool().p2j());
      }
       while (inductionVariable < subArraysCount);
  };
  protoOf(HeadersData).n37 = function (index) {
    return this.j37_1.d1(index / 768 | 0)[index % 768 | 0];
  };
  protoOf(HeadersData).y37 = function (index, value) {
    this.j37_1.d1(index / 768 | 0)[index % 768 | 0] = value;
  };
  protoOf(HeadersData).m37 = function () {
    return sequence(HeadersData$headersStarts$slambda_0(this, null));
  };
  protoOf(HeadersData).j24 = function () {
    var _iterator__ex2g4s = this.j37_1.t();
    while (_iterator__ex2g4s.u()) {
      var array = _iterator__ex2g4s.v();
      get_IntArrayPool().q2j(array);
    }
    this.j37_1.y2();
  };
  function dumpTo(_this__u8e3s4, indent, out) {
    _init_properties_HttpHeadersMap_kt__hwatby();
    var _iterator__ex2g4s = _this__u8e3s4.q37().t();
    while (_iterator__ex2g4s.u()) {
      var offset = _iterator__ex2g4s.v();
      out.c1(indent);
      out.c1(_this__u8e3s4.z37(offset));
      out.c1(' => ');
      out.c1(_this__u8e3s4.p37(offset));
      out.c1('\n');
    }
  }
  function IntArrayPool$1() {
    DefaultPool.call(this, 1000);
  }
  protoOf(IntArrayPool$1).i2j = function () {
    var tmp = 0;
    var tmp_0 = new Int32Array(768);
    while (tmp < 768) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    return tmp_0;
  };
  protoOf(IntArrayPool$1).t38 = function (instance) {
    fill(instance, -1);
    return protoOf(DefaultPool).n2j.call(this, instance);
  };
  protoOf(IntArrayPool$1).n2j = function (instance) {
    return this.t38(isIntArray(instance) ? instance : THROW_CCE());
  };
  function HeadersDataPool$1() {
    DefaultPool.call(this, 1000);
  }
  protoOf(HeadersDataPool$1).i2j = function () {
    return new HeadersData();
  };
  protoOf(HeadersDataPool$1).x38 = function (instance) {
    instance.j24();
    return protoOf(DefaultPool).n2j.call(this, instance);
  };
  protoOf(HeadersDataPool$1).n2j = function (instance) {
    return this.x38(instance instanceof HeadersData ? instance : THROW_CCE());
  };
  var properties_initialized_HttpHeadersMap_kt_kotj4w;
  function _init_properties_HttpHeadersMap_kt__hwatby() {
    if (!properties_initialized_HttpHeadersMap_kt_kotj4w) {
      properties_initialized_HttpHeadersMap_kt_kotj4w = true;
      IntArrayPool = new IntArrayPool$1();
      HeadersDataPool = new HeadersDataPool$1();
    }
  }
  function get_hostForbiddenSymbols() {
    _init_properties_HttpParser_kt__gbdom1();
    return hostForbiddenSymbols;
  }
  var hostForbiddenSymbols;
  var httpLineEndings;
  var versions;
  function parseHeaders(input, builder, range, $completion) {
    range = range === VOID ? new MutableRange(0, 0) : range;
    var tmp = new $parseHeadersCOROUTINE$(input, builder, range, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function parseHeaderName(text, range) {
    _init_properties_HttpParser_kt__gbdom1();
    var index = range.l39_1;
    var end = range.m39_1;
    while (index < end) {
      var ch = text.b(index);
      if (ch === _Char___init__impl__6a9atx(58) && !(index === range.l39_1)) {
        range.l39_1 = index + 1 | 0;
        return index;
      }
      if (isDelimiter(ch)) {
        parseHeaderNameFailed(text, index, range.l39_1, ch);
      }
      index = index + 1 | 0;
    }
    noColonFound(text, range);
  }
  function parseHeaderValue(text, range) {
    _init_properties_HttpParser_kt__gbdom1();
    var start = range.l39_1;
    var end = range.m39_1;
    var index = start;
    index = skipSpacesAndHorizontalTabs(text, index, end);
    if (index >= end) {
      range.l39_1 = end;
      return Unit_instance;
    }
    var valueStart = index;
    var valueLastIndex = index;
    while (index < end) {
      var ch = text.b(index);
      if (ch !== _Char___init__impl__6a9atx(9) && ch !== _Char___init__impl__6a9atx(32))
        if (ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(10)) {
          characterIsNotAllowed(text, ch);
        } else
          valueLastIndex = index;
      index = index + 1 | 0;
    }
    range.l39_1 = valueStart;
    range.m39_1 = valueLastIndex + 1 | 0;
  }
  function validateHostHeader(host) {
    _init_properties_HttpParser_kt__gbdom1();
    if (endsWith(host, ':')) {
      throw new ParserException("Host header with ':' should contains port: " + toString(host));
    }
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.text.any' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(host)) {
        var element = charSequenceGet(host, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (get_hostForbiddenSymbols().j2(new Char(element))) {
          tmp$ret$0 = true;
          break $l$block;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      throw new ParserException('Host cannot contain any of the following symbols: ' + toString(get_hostForbiddenSymbols()));
    }
  }
  function isDelimiter(ch) {
    _init_properties_HttpParser_kt__gbdom1();
    return Char__compareTo_impl_ypi4mb(ch, _Char___init__impl__6a9atx(32)) <= 0 || contains('"(),/:;<=>?@[\\]{}', ch);
  }
  function parseHeaderNameFailed(text, index, start, ch) {
    _init_properties_HttpParser_kt__gbdom1();
    if (ch === _Char___init__impl__6a9atx(58)) {
      throw new ParserException('Empty header names are not allowed as per RFC7230.');
    }
    if (index === start) {
      throw new ParserException('Multiline headers via line folding is not supported since it is deprecated as per RFC7230.');
    }
    characterIsNotAllowed(text, ch);
  }
  function noColonFound(text, range) {
    _init_properties_HttpParser_kt__gbdom1();
    var tmp2 = range.l39_1;
    // Inline function 'kotlin.text.substring' call
    var endIndex = range.m39_1;
    var tmp$ret$0 = toString(charSequenceSubSequence(text, tmp2, endIndex));
    throw new ParserException('No colon in HTTP header in ' + tmp$ret$0 + ' in builder: \n' + toString(text));
  }
  function characterIsNotAllowed(text, ch) {
    _init_properties_HttpParser_kt__gbdom1();
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(ch);
    throw new ParserException('Character with code ' + (tmp$ret$0 & 255) + ' is not allowed in header names, \n' + toString(text));
  }
  function ParserException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ParserException);
  }
  function $parseHeadersCOROUTINE$(input, builder, range, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g39_1 = input;
    this.h39_1 = builder;
    this.i39_1 = range;
  }
  protoOf($parseHeadersCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 7;
            this.j39_1 = new HttpHeadersMap(this.h39_1);
            this.q8_1 = 6;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.p8_1 = 5;
              continue $sm;
            }

            this.p8_1 = 2;
            suspendResult = readLineStrictTo(this.g39_1, this.h39_1, 8192n, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (suspendResult === -1n) {
              this.j39_1.j24();
              return null;
            } else {
              this.p8_1 = 3;
              continue $sm;
            }

          case 3:
            this.i39_1.m39_1 = this.h39_1.x37_1;
            this.k39_1 = this.i39_1.m39_1 - this.i39_1.l39_1 | 0;
            if (this.k39_1 === 0) {
              this.p8_1 = 5;
              continue $sm;
            } else {
              this.p8_1 = 4;
              continue $sm;
            }

          case 4:
            if (this.k39_1 >= 8192) {
              var message = 'Header line length limit exceeded';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var nameStart = this.i39_1.l39_1;
            var nameEnd = parseHeaderName(this.h39_1, this.i39_1);
            var headerEnd = this.i39_1.m39_1;
            parseHeaderValue(this.h39_1, this.i39_1);
            var valueStart = this.i39_1.l39_1;
            var valueEnd = this.i39_1.m39_1;
            this.i39_1.l39_1 = headerEnd;
            this.j39_1.o37(nameStart, nameEnd, valueStart, valueEnd);
            this.p8_1 = 1;
            continue $sm;
          case 5:
            var host = this.j39_1.rd('Host');
            if (!(host == null)) {
              validateHostHeader(host);
            }

            return this.j39_1;
          case 6:
            this.q8_1 = 7;
            var tmp_0 = this.s8_1;
            if (tmp_0 instanceof Error) {
              var t = this.s8_1;
              this.j39_1.j24();
              throw t;
            } else {
              throw this.s8_1;
            }

          case 7:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 7) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_HttpParser_kt_uedryv;
  function _init_properties_HttpParser_kt__gbdom1() {
    if (!properties_initialized_HttpParser_kt_uedryv) {
      properties_initialized_HttpParser_kt_uedryv = true;
      hostForbiddenSymbols = setOf([new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(64))]);
      httpLineEndings = LineEndingMode__plus_impl_ttpz2j(Companion_getInstance().u2i_1, Companion_getInstance().t2i_1);
      versions = Companion_instance.n39(listOf(['HTTP/1.0', 'HTTP/1.1']));
    }
  }
  function get_CrLf() {
    _init_properties_Multipart_kt__ato98a();
    return CrLf;
  }
  var CrLf;
  function get_PrefixString() {
    _init_properties_Multipart_kt__ato98a();
    return PrefixString;
  }
  var PrefixString;
  function Preamble(body) {
    MultipartEvent.call(this);
    this.o39_1 = body;
  }
  function MultipartPart(headers, body) {
    MultipartEvent.call(this);
    this.p39_1 = headers;
    this.q39_1 = body;
  }
  function Epilogue(body) {
    MultipartEvent.call(this);
    this.r39_1 = body;
  }
  function MultipartEvent() {
  }
  function parseMultipart(_this__u8e3s4, input, contentType, contentLength, maxPartSize) {
    maxPartSize = maxPartSize === VOID ? 9223372036854775807n : maxPartSize;
    _init_properties_Multipart_kt__ato98a();
    if (!MultiPart_getInstance().u2t(contentType)) {
      throw new UnsupportedMediaTypeExceptionCIO('Failed to parse multipart: Content-Type should be multipart/* but it is ' + toString(contentType));
    }
    var boundaryByteBuffer = parseBoundaryInternal(contentType);
    var boundaryBytes = ByteString_init_$Create$(boundaryByteBuffer);
    return parseMultipart_0(_this__u8e3s4, boundaryBytes, input, contentLength, maxPartSize);
  }
  function parseBoundaryInternal(contentType) {
    _init_properties_Multipart_kt__ato98a();
    var boundaryParameter = findBoundary(contentType);
    if (boundaryParameter === -1) {
      throw IOException_init_$Create$("Failed to parse multipart: Content-Type's boundary parameter is missing");
    }
    var boundaryStart = boundaryParameter + 9 | 0;
    var boundaryBytes = new Int8Array(74);
    var position = {_v: 0};
    parseBoundaryInternal$put(position, boundaryBytes, 13);
    parseBoundaryInternal$put(position, boundaryBytes, 10);
    parseBoundaryInternal$put(position, boundaryBytes, 45);
    parseBoundaryInternal$put(position, boundaryBytes, 45);
    var state = 0;
    var inductionVariable = boundaryStart;
    var last = charSequenceLength(contentType);
    if (inductionVariable < last)
      loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(contentType, i);
        // Inline function 'kotlin.code' call
        var v = Char__toInt_impl_vasixd(ch) & 65535;
        if ((v & 65535) > 127) {
          throw IOException_init_$Create$('Failed to parse multipart: wrong boundary byte 0x' + toString_0(v, 16) + ' - should be 7bit character');
        }
        switch (state) {
          case 0:
            if (ch !== _Char___init__impl__6a9atx(32))
              if (ch === _Char___init__impl__6a9atx(34)) {
                state = 2;
              } else if (ch === _Char___init__impl__6a9atx(59) || ch === _Char___init__impl__6a9atx(44)) {
                break loop;
              } else {
                state = 1;
                parseBoundaryInternal$put(position, boundaryBytes, toByte(v));
              }

            break;
          case 1:
            if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(44) || ch === _Char___init__impl__6a9atx(59)) {
              break loop;
            } else {
              parseBoundaryInternal$put(position, boundaryBytes, toByte(v));
            }

            break;
          case 2:
            if (ch === _Char___init__impl__6a9atx(92)) {
              state = 3;
            } else if (ch === _Char___init__impl__6a9atx(34)) {
              break loop;
            } else {
              parseBoundaryInternal$put(position, boundaryBytes, toByte(v));
            }

            break;
          case 3:
            parseBoundaryInternal$put(position, boundaryBytes, toByte(v));
            state = 2;
            break;
        }
      }
       while (inductionVariable < last);
    if (position._v === 4) {
      throw IOException_init_$Create$('Empty multipart boundary is not allowed');
    }
    return copyOfRange(boundaryBytes, 0, position._v);
  }
  function parseMultipart_0(_this__u8e3s4, boundaryPrefixed, input, totalLength, maxPartSize) {
    _init_properties_Multipart_kt__ato98a();
    return produce(_this__u8e3s4, VOID, VOID, parseMultipart$slambda_0(input, boundaryPrefixed, maxPartSize, totalLength, null));
  }
  function findBoundary(contentType) {
    _init_properties_Multipart_kt__ato98a();
    var state = 0;
    var paramNameCount = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(contentType) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(contentType, i);
        switch (state) {
          case 0:
            if (ch === _Char___init__impl__6a9atx(59)) {
              state = 1;
              paramNameCount = 0;
            }

            break;
          case 1:
            if (ch === _Char___init__impl__6a9atx(61)) {
              state = 2;
            } else if (ch === _Char___init__impl__6a9atx(59)) {
              paramNameCount = 0;
            } else if (ch === _Char___init__impl__6a9atx(44)) {
              state = 0;
            } else if (ch !== _Char___init__impl__6a9atx(32))
              if (paramNameCount === 0 && startsWith(contentType, 'boundary=', i, true)) {
                return i;
              } else {
                paramNameCount = paramNameCount + 1 | 0;
              }

            break;
          case 2:
            if (ch === _Char___init__impl__6a9atx(34))
              state = 3;
            else if (ch === _Char___init__impl__6a9atx(44))
              state = 0;
            else if (ch === _Char___init__impl__6a9atx(59)) {
              state = 1;
              paramNameCount = 0;
            }

            break;
          case 3:
            if (ch === _Char___init__impl__6a9atx(34)) {
              state = 1;
              paramNameCount = 0;
            } else if (ch === _Char___init__impl__6a9atx(92)) {
              state = 4;
            }

            break;
          case 4:
            state = 3;
            break;
        }
      }
       while (inductionVariable <= last);
    return -1;
  }
  function parsePreambleImpl(boundary, input, output, limit, $completion) {
    limit = limit === VOID ? 9223372036854775807n : limit;
    return readUntil(input, boundary, output, limit, true, $completion);
  }
  function parsePartHeadersImpl(input, $completion) {
    var tmp = new $parsePartHeadersImplCOROUTINE$(input, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function parsePartBodyImpl(boundaryPrefixed, input, output, headers, limit, $completion) {
    var tmp = new $parsePartBodyImplCOROUTINE$(boundaryPrefixed, input, output, headers, limit, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function skipIfFoundReadCount(_this__u8e3s4, prefix, $completion) {
    var tmp = new $skipIfFoundReadCountCOROUTINE$(_this__u8e3s4, prefix, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function throwLimitExceeded(actual, limit) {
    _init_properties_Multipart_kt__ato98a();
    throw IOException_init_$Create$('Multipart content length exceeds limit ' + actual.toString() + ' > ' + limit.toString() + '; ' + "limit is defined using 'formFieldLimit' argument");
  }
  function parseBoundaryInternal$put(position, boundaryBytes, value) {
    if (position._v >= boundaryBytes.length) {
      throw IOException_init_$Create$("Failed to parse multipart: boundary shouldn't be longer than 70 characters");
    }
    var _unary__edvuaz = position._v;
    position._v = _unary__edvuaz + 1 | 0;
    boundaryBytes[_unary__edvuaz] = value;
  }
  function parseMultipart$slambda$slambda($firstBoundary, $countedInput, resultContinuation) {
    this.l3b_1 = $firstBoundary;
    this.m3b_1 = $countedInput;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(parseMultipart$slambda$slambda).o3b = function ($this$writer, $completion) {
    var tmp = this.p3b($this$writer, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(parseMultipart$slambda$slambda).k9 = function (p1, $completion) {
    return this.o3b(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(parseMultipart$slambda$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            this.p8_1 = 1;
            suspendResult = parsePreambleImpl(this.l3b_1, this.m3b_1, this.n3b_1.w2g_1, 8193n, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p8_1 = 2;
            suspendResult = this.n3b_1.w2g_1.c29(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 3) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  protoOf(parseMultipart$slambda$slambda).p3b = function ($this$writer, completion) {
    var i = new parseMultipart$slambda$slambda(this.l3b_1, this.m3b_1, completion);
    i.n3b_1 = $this$writer;
    return i;
  };
  function parseMultipart$slambda$slambda_0($firstBoundary, $countedInput, resultContinuation) {
    var i = new parseMultipart$slambda$slambda($firstBoundary, $countedInput, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.o3b($this$writer, $completion);
    }, 1);
  }
  function parseMultipart$slambda($input, $boundaryPrefixed, $maxPartSize, $totalLength, resultContinuation) {
    this.y3b_1 = $input;
    this.z3b_1 = $boundaryPrefixed;
    this.a3c_1 = $maxPartSize;
    this.b3c_1 = $totalLength;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(parseMultipart$slambda).k3c = function ($this$produce, $completion) {
    var tmp = this.l3c($this$produce, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(parseMultipart$slambda).k9 = function (p1, $completion) {
    return this.k3c((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(parseMultipart$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 25;
            this.d3c_1 = counted(this.y3b_1);
            this.e3c_1 = this.d3c_1.r2i();
            this.i3c_1 = this.z3b_1.s1g(get_PrefixString().e1());
            this.p8_1 = 1;
            suspendResult = readRemaining(writer(this.c3c_1, VOID, VOID, parseMultipart$slambda$slambda_0(this.i3c_1, this.d3c_1, null)).v2a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var preambleData = suspendResult;
            if (get_remaining(preambleData) > 0n) {
              this.p8_1 = 2;
              suspendResult = this.c3c_1.k21(new Preamble(preambleData), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.p8_1 = 3;
              continue $sm;
            }

          case 2:
            this.p8_1 = 3;
            continue $sm;
          case 3:
            this.p8_1 = 4;
            continue $sm;
          case 4:
            if (!this.d3c_1.z28()) {
              this.p8_1 = 5;
              suspendResult = skipIfFound(this.d3c_1, get_PrefixString(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.j3c_1 = false;
              this.p8_1 = 6;
              continue $sm;
            }

          case 5:
            this.j3c_1 = !suspendResult;
            this.p8_1 = 6;
            continue $sm;
          case 6:
            if (!this.j3c_1) {
              this.p8_1 = 15;
              continue $sm;
            }

            this.p8_1 = 7;
            suspendResult = skipIfFound(this.d3c_1, get_CrLf(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.p8_1 = 8;
            suspendResult = skipIfFound(this.d3c_1, this.i3c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            if (suspendResult) {
              this.p8_1 = 4;
              continue $sm;
            } else {
              this.p8_1 = 9;
              continue $sm;
            }

          case 9:
            this.f3c_1 = new ByteChannel();
            this.h3c_1 = CompletableDeferred();
            var part = new MultipartPart(this.h3c_1, this.f3c_1);
            this.p8_1 = 10;
            suspendResult = this.c3c_1.k21(part, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.g3c_1 = null;
            this.q8_1 = 14;
            this.p8_1 = 11;
            suspendResult = parsePartHeadersImpl(this.d3c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            this.g3c_1 = suspendResult;
            if (!this.h3c_1.c1r(this.g3c_1)) {
              this.g3c_1.j24();
              throw CancellationException_init_$Create$('Multipart processing has been cancelled');
            }

            this.p8_1 = 12;
            suspendResult = parsePartBodyImpl(this.z3b_1, this.d3c_1, this.f3c_1, this.g3c_1, this.a3c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 12:
            this.f3c_1.f4();
            this.q8_1 = 25;
            this.p8_1 = 13;
            continue $sm;
          case 13:
            this.q8_1 = 25;
            this.p8_1 = 4;
            continue $sm;
          case 14:
            this.q8_1 = 25;
            var tmp_0 = this.s8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.s8_1;
              if (this.h3c_1.d1r(cause)) {
                var tmp0_safe_receiver = this.g3c_1;
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.j24();
                }
              }
              close(this.f3c_1, cause);
              throw cause;
            } else {
              throw this.s8_1;
            }

          case 15:
            this.p8_1 = 16;
            suspendResult = skipIfFound(this.d3c_1, get_CrLf(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 16:
            this.p8_1 = 17;
            suspendResult = skipIfFound(this.d3c_1, get_CrLf(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 17:
            if (!(this.b3c_1 == null)) {
              var consumedExceptEpilogue = subtract(this.d3c_1.r2i(), this.e3c_1);
              var size = subtract(this.b3c_1, consumedExceptEpilogue);
              if (size > 2147483647n)
                throw IOException_init_$Create$('Failed to parse multipart: prologue is too long');
              if (size > 0n) {
                this.p8_1 = 21;
                suspendResult = readPacket(this.d3c_1, convertToInt(size), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.p8_1 = 23;
                continue $sm;
              }
            } else {
              this.p8_1 = 18;
              suspendResult = readRemaining(this.d3c_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 18:
            var epilogueContent = suspendResult;
            if (!epilogueContent.a1h()) {
              this.p8_1 = 19;
              suspendResult = this.c3c_1.k21(new Epilogue(epilogueContent), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.p8_1 = 20;
              continue $sm;
            }

          case 19:
            this.p8_1 = 20;
            continue $sm;
          case 20:
            this.p8_1 = 24;
            continue $sm;
          case 21:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new Epilogue(ARGUMENT);
            this.p8_1 = 22;
            suspendResult = this.c3c_1.k21(ARGUMENT_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 22:
            this.p8_1 = 23;
            continue $sm;
          case 23:
            this.p8_1 = 24;
            continue $sm;
          case 24:
            return Unit_instance;
          case 25:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 25) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  protoOf(parseMultipart$slambda).l3c = function ($this$produce, completion) {
    var i = new parseMultipart$slambda(this.y3b_1, this.z3b_1, this.a3c_1, this.b3c_1, completion);
    i.c3c_1 = $this$produce;
    return i;
  };
  function parseMultipart$slambda_0($input, $boundaryPrefixed, $maxPartSize, $totalLength, resultContinuation) {
    var i = new parseMultipart$slambda($input, $boundaryPrefixed, $maxPartSize, $totalLength, resultContinuation);
    return constructCallableReference(function ($this$produce, $completion) {
      return i.k3c($this$produce, $completion);
    }, 1);
  }
  function $parsePartHeadersImplCOROUTINE$(input, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a3a_1 = input;
  }
  protoOf($parsePartHeadersImplCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            this.b3a_1 = new CharArrayBuilder();
            this.q8_1 = 2;
            this.p8_1 = 1;
            suspendResult = parseHeaders(this.a3a_1, this.b3a_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              throw EOFException_init_$Create$('Failed to parse multipart headers: unexpected end of stream');
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            return tmp_0;
          case 2:
            this.q8_1 = 3;
            var tmp_1 = this.s8_1;
            if (tmp_1 instanceof Error) {
              var t = this.s8_1;
              this.b3a_1.j24();
              throw t;
            } else {
              throw this.s8_1;
            }

          case 3:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 3) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function $parsePartBodyImplCOROUTINE$(boundaryPrefixed, input, output, headers, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k3a_1 = boundaryPrefixed;
    this.l3a_1 = input;
    this.m3a_1 = output;
    this.n3a_1 = headers;
    this.o3a_1 = limit;
  }
  protoOf($parsePartBodyImplCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 6;
            var tmp0_safe_receiver = this.n3a_1.rd('Content-Length');
            var contentLength = tmp0_safe_receiver == null ? null : parseDecLong(tmp0_safe_receiver);
            if (contentLength == null) {
              this.p8_1 = 3;
              suspendResult = readUntil(this.l3a_1, this.k3a_1, this.m3a_1, this.o3a_1, true, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var containsUpper = this.o3a_1;
              if (0n <= contentLength ? contentLength <= containsUpper : false) {
                this.p8_1 = 1;
                suspendResult = copyTo(this.l3a_1, this.m3a_1, contentLength, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_0 = this;
                throwLimitExceeded(contentLength, this.o3a_1);
              }
            }

            break;
          case 1:
            this.r3a_1 = suspendResult;
            this.p8_1 = 2;
            suspendResult = skipIfFoundReadCount(this.l3a_1, this.k3a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.q3a_1 = add(this.r3a_1, ARGUMENT);
            this.p8_1 = 4;
            continue $sm;
          case 3:
            this.q3a_1 = suspendResult;
            this.p8_1 = 4;
            continue $sm;
          case 4:
            this.p3a_1 = this.q3a_1;
            this.p8_1 = 5;
            suspendResult = this.m3a_1.t28(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            return this.p3a_1;
          case 6:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 6) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function $skipIfFoundReadCountCOROUTINE$(_this__u8e3s4, prefix, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a3b_1 = _this__u8e3s4;
    this.b3b_1 = prefix;
  }
  protoOf($skipIfFoundReadCountCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            this.p8_1 = 1;
            suspendResult = skipIfFound(this.a3b_1, this.b3b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_0 = this;
              tmp_0.c3b_1 = fromInt(this.b3b_1.e1());
              this.p8_1 = 2;
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.c3b_1 = 0n;
              this.p8_1 = 2;
              continue $sm;
            }

          case 2:
            return this.c3b_1;
          case 3:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 3) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_Multipart_kt_wu0sh0;
  function _init_properties_Multipart_kt__ato98a() {
    if (!properties_initialized_Multipart_kt_wu0sh0) {
      properties_initialized_Multipart_kt_wu0sh0 = true;
      CrLf = ByteString_init_$Create$(toByteArray('\r\n'));
      PrefixString = ByteString(new Int8Array([45, 45]));
    }
  }
  function build($this, resultList, from, maxLength, idx, length, charAt) {
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = from.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var key = charAt(element, idx);
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.s2(key);
      var tmp;
      if (value == null) {
        var answer = ArrayList_init_$Create$();
        destination.v2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.b1(element);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = destination.l1().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.collections.component1' call
      var ch = element_0.m1().w1_1;
      // Inline function 'kotlin.collections.component2' call
      var list_0 = element_0.n1();
      var nextIdx = idx + 1 | 0;
      var children = ArrayList_init_$Create$();
      var tmp_0 = Companion_instance;
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_1 = list_0.t();
      while (_iterator__ex2g4s_1.u()) {
        var element_1 = _iterator__ex2g4s_1.v();
        if (length(element_1) > nextIdx) {
          destination_0.b1(element_1);
        }
      }
      build(tmp_0, children, destination_0, maxLength, nextIdx, length, charAt);
      children.o5();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_2 = list_0.t();
      while (_iterator__ex2g4s_2.u()) {
        var element_2 = _iterator__ex2g4s_2.v();
        if (length(element_2) === nextIdx) {
          destination_1.b1(element_2);
        }
      }
      resultList.b1(new Node(ch, destination_1, children));
    }
  }
  function AsciiCharTree$Companion$build$lambda(it) {
    return charSequenceLength(it);
  }
  function AsciiCharTree$Companion$build$lambda_0(s, idx) {
    return new Char(charSequenceGet(s, idx));
  }
  function Node(ch, exact, children) {
    this.m3c_1 = ch;
    this.n3c_1 = exact;
    this.o3c_1 = children;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(256);
    while (tmp_0 < 256) {
      var tmp_2 = tmp_0;
      var tmp0 = this.o3c_1;
      var tmp$ret$2;
      $l$block_0: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single = null;
        var found = false;
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          // Inline function 'kotlin.code' call
          var this_0 = element.m3c_1;
          if (Char__toInt_impl_vasixd(this_0) === tmp_2) {
            if (found) {
              tmp$ret$2 = null;
              break $l$block_0;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$2 = null;
          break $l$block_0;
        }
        tmp$ret$2 = single;
      }
      tmp_1[tmp_2] = tmp$ret$2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.p3c_1 = tmp_1;
  }
  function Companion() {
  }
  protoOf(Companion).n39 = function (from) {
    var tmp = AsciiCharTree$Companion$build$lambda;
    return this.q3c(from, tmp, AsciiCharTree$Companion$build$lambda_0);
  };
  protoOf(Companion).q3c = function (from, length, charAt) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var iterator = from.t();
      if (!iterator.u()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var maxElem = iterator.v();
      if (!iterator.u()) {
        tmp$ret$0 = maxElem;
        break $l$block_0;
      }
      var maxValue = length(maxElem);
      do {
        var e = iterator.v();
        var v = length(e);
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.u());
      tmp$ret$0 = maxElem;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = length(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$('Unable to build char tree from an empty list');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var maxLen = tmp_0;
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlin.collections.any' call
      var tmp_1;
      if (isInterface(from, Collection)) {
        tmp_1 = from.r();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$2 = false;
        break $l$block_2;
      }
      var _iterator__ex2g4s = from.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (length(element) === 0) {
          tmp$ret$2 = true;
          break $l$block_2;
        }
      }
      tmp$ret$2 = false;
    }
    if (tmp$ret$2)
      throw IllegalArgumentException_init_$Create$('There should be no empty entries');
    var root = ArrayList_init_$Create$();
    build(this, root, from, maxLen, 0, length, charAt);
    root.o5();
    return new AsciiCharTree(new Node(_Char___init__impl__6a9atx(0), emptyList(), root));
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    return Companion_instance;
  }
  function AsciiCharTree(root) {
    this.r3c_1 = root;
  }
  function getImpl($this, index) {
    return bufferForIndex($this, index)[index % ensureNotNull($this.t37_1).length | 0];
  }
  function copy($this, startIndex, endIndex) {
    if (startIndex === endIndex)
      return '';
    var builder = StringBuilder_init_$Create$_0(endIndex - startIndex | 0);
    var buffer;
    var base = startIndex - (startIndex % 2048 | 0) | 0;
    while (base < endIndex) {
      buffer = bufferForIndex($this, base);
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = startIndex - base | 0;
      var innerStartIndex = Math.max(0, b);
      // Inline function 'kotlin.comparisons.minOf' call
      var a = endIndex - base | 0;
      var innerEndIndex = Math.min(a, 2048);
      var inductionVariable = innerStartIndex;
      if (inductionVariable < innerEndIndex)
        do {
          var innerIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          builder.s(buffer[innerIndex]);
        }
         while (inductionVariable < innerEndIndex);
      base = base + 2048 | 0;
    }
    return builder;
  }
  function SubSequenceImpl($outer, start, end) {
    this.v3c_1 = $outer;
    this.s3c_1 = start;
    this.t3c_1 = end;
    this.u3c_1 = null;
  }
  protoOf(SubSequenceImpl).a = function () {
    return this.t3c_1 - this.s3c_1 | 0;
  };
  protoOf(SubSequenceImpl).b = function (index) {
    var withOffset = index + this.s3c_1 | 0;
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'index is negative: ' + index;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(withOffset < this.t3c_1)) {
      var message_0 = 'index (' + index + ') should be less than length (' + this.a() + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return getImpl(this.v3c_1, withOffset);
  };
  protoOf(SubSequenceImpl).c = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    if (!(startIndex >= 0)) {
      var message = 'start is negative: ' + startIndex;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(startIndex <= endIndex)) {
      var message_0 = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(endIndex <= (this.t3c_1 - this.s3c_1 | 0))) {
      var message_1 = 'end should be less than length (' + this.a() + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    if (startIndex === endIndex)
      return '';
    return new SubSequenceImpl(this.v3c_1, this.s3c_1 + startIndex | 0, this.s3c_1 + endIndex | 0);
  };
  protoOf(SubSequenceImpl).toString = function () {
    var tmp0_elvis_lhs = this.u3c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = toString(copy(this.v3c_1, this.s3c_1, this.t3c_1));
      this.u3c_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SubSequenceImpl).equals = function (other) {
    if (!(!(other == null) ? isCharSequence(other) : false))
      return false;
    if (!(charSequenceLength(other) === this.a()))
      return false;
    return rangeEqualsImpl(this.v3c_1, this.s3c_1, other, 0, this.a());
  };
  protoOf(SubSequenceImpl).hashCode = function () {
    var tmp0_safe_receiver = this.u3c_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? hashCodeImpl(this.v3c_1, this.s3c_1, this.t3c_1) : tmp1_elvis_lhs;
  };
  function bufferForIndex($this, index) {
    var list = $this.s37_1;
    if (list == null) {
      if (index >= 2048) {
        throwSingleBuffer($this, index);
      }
      var tmp0_elvis_lhs = $this.t37_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throwSingleBuffer($this, index);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    }
    return list.d1(index / ensureNotNull($this.t37_1).length | 0);
  }
  function throwSingleBuffer($this, index) {
    if ($this.v37_1)
      throw IllegalStateException_init_$Create$('Buffer is already released');
    throw IndexOutOfBoundsException_init_$Create$('' + index + ' is not in range [0; ' + currentPosition($this) + ')');
  }
  function nonFullBuffer($this) {
    return $this.w37_1 === 0 ? appendNewArray($this) : ensureNotNull($this.t37_1);
  }
  function appendNewArray($this) {
    var newBuffer = $this.r37_1.p2j();
    var existing = $this.t37_1;
    $this.t37_1 = newBuffer;
    $this.w37_1 = newBuffer.length;
    $this.v37_1 = false;
    if (!(existing == null)) {
      var tmp0_elvis_lhs = $this.s37_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = ArrayList_init_$Create$();
        $this.s37_1 = this_0;
        this_0.b1(existing);
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var list = tmp;
      list.b1(newBuffer);
    }
    return newBuffer;
  }
  function rangeEqualsImpl($this, start, other, otherStart, length) {
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(getImpl($this, start + i | 0) === charSequenceGet(other, otherStart + i | 0)))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function hashCodeImpl($this, start, end) {
    var hc = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = imul(31, hc);
        // Inline function 'kotlin.code' call
        var this_0 = getImpl($this, i);
        hc = tmp + Char__toInt_impl_vasixd(this_0) | 0;
      }
       while (inductionVariable < end);
    return hc;
  }
  function currentPosition($this) {
    return ensureNotNull($this.t37_1).length - $this.w37_1 | 0;
  }
  function CharArrayBuilder(pool) {
    pool = pool === VOID ? get_CharArrayPool() : pool;
    this.r37_1 = pool;
    this.s37_1 = null;
    this.t37_1 = null;
    this.u37_1 = null;
    this.v37_1 = false;
    this.w37_1 = 0;
    this.x37_1 = 0;
  }
  protoOf(CharArrayBuilder).a = function () {
    return this.x37_1;
  };
  protoOf(CharArrayBuilder).b = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'index is negative: ' + index;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(index < this.x37_1)) {
      var message_0 = 'index ' + index + ' is not in range [0, ' + this.x37_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return getImpl(this, index);
  };
  protoOf(CharArrayBuilder).c = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    if (!(startIndex <= endIndex)) {
      var message = 'startIndex (' + startIndex + ') should be less or equal to endIndex (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(startIndex >= 0)) {
      var message_0 = 'startIndex is negative: ' + startIndex;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(endIndex <= this.x37_1)) {
      var message_1 = 'endIndex (' + endIndex + ') is greater than length (' + this.x37_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return new SubSequenceImpl(this, startIndex, endIndex);
  };
  protoOf(CharArrayBuilder).toString = function () {
    var tmp0_elvis_lhs = this.u37_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = toString(copy(this, 0, this.x37_1));
      this.u37_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CharArrayBuilder).equals = function (other) {
    if (!(!(other == null) ? isCharSequence(other) : false))
      return false;
    if (!(this.x37_1 === charSequenceLength(other)))
      return false;
    return rangeEqualsImpl(this, 0, other, 0, this.x37_1);
  };
  protoOf(CharArrayBuilder).hashCode = function () {
    var tmp0_safe_receiver = this.u37_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? hashCodeImpl(this, 0, this.x37_1) : tmp1_elvis_lhs;
  };
  protoOf(CharArrayBuilder).s = function (value) {
    nonFullBuffer(this)[ensureNotNull(this.t37_1).length - this.w37_1 | 0] = value;
    this.u37_1 = null;
    this.w37_1 = this.w37_1 - 1 | 0;
    this.x37_1 = this.x37_1 + 1 | 0;
    return this;
  };
  protoOf(CharArrayBuilder).gc = function (value, startIndex, endIndex) {
    if (value == null)
      return this;
    var current = startIndex;
    while (current < endIndex) {
      var buffer = nonFullBuffer(this);
      var offset = buffer.length - this.w37_1 | 0;
      var tmp0 = endIndex - current | 0;
      // Inline function 'kotlin.math.min' call
      var b = this.w37_1;
      var bytesToCopy = Math.min(tmp0, b);
      var inductionVariable = 0;
      if (inductionVariable < bytesToCopy)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffer[offset + i | 0] = charSequenceGet(value, current + i | 0);
        }
         while (inductionVariable < bytesToCopy);
      current = current + bytesToCopy | 0;
      this.w37_1 = this.w37_1 - bytesToCopy | 0;
    }
    this.u37_1 = null;
    this.x37_1 = this.x37_1 + (endIndex - startIndex | 0) | 0;
    return this;
  };
  protoOf(CharArrayBuilder).c1 = function (value) {
    if (value == null)
      return this;
    return this.gc(value, 0, charSequenceLength(value));
  };
  protoOf(CharArrayBuilder).j24 = function () {
    var list = this.s37_1;
    if (!(list == null)) {
      this.t37_1 = null;
      var inductionVariable = 0;
      var last = list.e1();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.r37_1.q2j(list.d1(i));
        }
         while (inductionVariable < last);
    } else {
      var tmp0_safe_receiver = this.t37_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        this.r37_1.q2j(tmp0_safe_receiver);
      }
      this.t37_1 = null;
    }
    this.v37_1 = true;
    this.s37_1 = null;
    this.u37_1 = null;
    this.x37_1 = 0;
    this.w37_1 = 0;
  };
  function get_CharArrayPool() {
    _init_properties_CharArrayPool_kt__u4nq0d();
    return CharArrayPool;
  }
  var CharArrayPool;
  function CharArrayPool$1() {
    NoPoolImpl.call(this);
  }
  protoOf(CharArrayPool$1).p2j = function () {
    return charArray(2048);
  };
  function CharArrayPool$2() {
    DefaultPool.call(this, 4096);
  }
  protoOf(CharArrayPool$2).i2j = function () {
    return charArray(2048);
  };
  var properties_initialized_CharArrayPool_kt_aq0u0f;
  function _init_properties_CharArrayPool_kt__u4nq0d() {
    if (!properties_initialized_CharArrayPool_kt_aq0u0f) {
      properties_initialized_CharArrayPool_kt_aq0u0f = true;
      var tmp;
      if (isPoolingDisabled()) {
        tmp = new CharArrayPool$1();
      } else {
        tmp = new CharArrayPool$2();
      }
      CharArrayPool = tmp;
    }
  }
  var DefaultHttpMethods;
  var HexTable;
  var HexLetterTable;
  function hashCodeLowerCase(_this__u8e3s4, start, end) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? charSequenceLength(_this__u8e3s4) : end;
    _init_properties_Chars_kt__d3i39x();
    var hashCode = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var pos = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(_this__u8e3s4, pos);
        // Inline function 'io.ktor.http.cio.internals.toLowerCase' call
        var this_1 = Char__toInt_impl_vasixd(this_0);
        var tmp;
        // Inline function 'kotlin.code' call
        var this_2 = _Char___init__impl__6a9atx(65);
        var containsLower = Char__toInt_impl_vasixd(this_2);
        var tmp_0;
        // Inline function 'kotlin.code' call
        var this_3 = _Char___init__impl__6a9atx(90);
        if (this_1 <= Char__toInt_impl_vasixd(this_3)) {
          tmp_0 = containsLower <= this_1;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          // Inline function 'kotlin.code' call
          var this_4 = _Char___init__impl__6a9atx(97);
          var tmp_1 = Char__toInt_impl_vasixd(this_4);
          // Inline function 'kotlin.code' call
          var this_5 = _Char___init__impl__6a9atx(65);
          tmp = tmp_1 + (this_1 - Char__toInt_impl_vasixd(this_5) | 0) | 0;
        } else {
          tmp = this_1;
        }
        var v = tmp;
        hashCode = imul(31, hashCode) + v | 0;
      }
       while (inductionVariable < end);
    return hashCode;
  }
  function equalsLowerCase(_this__u8e3s4, start, end, other) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? charSequenceLength(_this__u8e3s4) : end;
    _init_properties_Chars_kt__d3i39x();
    if (!((end - start | 0) === charSequenceLength(other)))
      return false;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var pos = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(_this__u8e3s4, pos);
        // Inline function 'io.ktor.http.cio.internals.toLowerCase' call
        var this_1 = Char__toInt_impl_vasixd(this_0);
        var tmp;
        // Inline function 'kotlin.code' call
        var this_2 = _Char___init__impl__6a9atx(65);
        var containsLower = Char__toInt_impl_vasixd(this_2);
        var tmp_0;
        // Inline function 'kotlin.code' call
        var this_3 = _Char___init__impl__6a9atx(90);
        if (this_1 <= Char__toInt_impl_vasixd(this_3)) {
          tmp_0 = containsLower <= this_1;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          // Inline function 'kotlin.code' call
          var this_4 = _Char___init__impl__6a9atx(97);
          var tmp_1 = Char__toInt_impl_vasixd(this_4);
          // Inline function 'kotlin.code' call
          var this_5 = _Char___init__impl__6a9atx(65);
          tmp = tmp_1 + (this_1 - Char__toInt_impl_vasixd(this_5) | 0) | 0;
        } else {
          tmp = this_1;
        }
        var tmp_2 = tmp;
        // Inline function 'kotlin.code' call
        var this_6 = charSequenceGet(other, pos - start | 0);
        // Inline function 'io.ktor.http.cio.internals.toLowerCase' call
        var this_7 = Char__toInt_impl_vasixd(this_6);
        var tmp_3;
        // Inline function 'kotlin.code' call
        var this_8 = _Char___init__impl__6a9atx(65);
        var containsLower_0 = Char__toInt_impl_vasixd(this_8);
        var tmp_4;
        // Inline function 'kotlin.code' call
        var this_9 = _Char___init__impl__6a9atx(90);
        if (this_7 <= Char__toInt_impl_vasixd(this_9)) {
          tmp_4 = containsLower_0 <= this_7;
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          // Inline function 'kotlin.code' call
          var this_10 = _Char___init__impl__6a9atx(97);
          var tmp_5 = Char__toInt_impl_vasixd(this_10);
          // Inline function 'kotlin.code' call
          var this_11 = _Char___init__impl__6a9atx(65);
          tmp_3 = tmp_5 + (this_7 - Char__toInt_impl_vasixd(this_11) | 0) | 0;
        } else {
          tmp_3 = this_7;
        }
        if (!(tmp_2 === tmp_3))
          return false;
      }
       while (inductionVariable < end);
    return true;
  }
  function parseDecLong(_this__u8e3s4) {
    _init_properties_Chars_kt__d3i39x();
    var length = charSequenceLength(_this__u8e3s4);
    if (length > 19) {
      numberFormatException(_this__u8e3s4);
    }
    if (length === 19)
      return parseDecLongWithCheck(_this__u8e3s4);
    var result = 0n;
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(_this__u8e3s4, i);
        var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
        var digit = subtract(fromInt(tmp$ret$0), 48n);
        if (digit < 0n || digit > 9n) {
          numberFormatException_0(_this__u8e3s4, i);
        }
        result = add(add(shiftLeft(result, 3), shiftLeft(result, 1)), digit);
      }
       while (inductionVariable < length);
    return result;
  }
  function numberFormatException(cs) {
    _init_properties_Chars_kt__d3i39x();
    throw NumberFormatException_init_$Create$('Invalid number ' + toString(cs) + ': too large for Long type');
  }
  function parseDecLongWithCheck(_this__u8e3s4) {
    _init_properties_Chars_kt__d3i39x();
    var result = 0n;
    var inductionVariable = 0;
    var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(_this__u8e3s4, i);
        var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
        var digit = subtract(fromInt(tmp$ret$0), 48n);
        if (digit < 0n || digit > 9n) {
          numberFormatException_0(_this__u8e3s4, i);
        }
        result = add(add(shiftLeft(result, 3), shiftLeft(result, 1)), digit);
        if (result < 0n) {
          numberFormatException(_this__u8e3s4);
        }
      }
       while (inductionVariable <= last);
    return result;
  }
  function numberFormatException_0(cs, idx) {
    _init_properties_Chars_kt__d3i39x();
    throw NumberFormatException_init_$Create$('Invalid number: ' + toString(cs) + ', wrong digit: ' + toString_1(charSequenceGet(cs, idx)) + ' at position ' + idx);
  }
  function DefaultHttpMethods$lambda(it) {
    _init_properties_Chars_kt__d3i39x();
    return it.l2z_1.length;
  }
  function DefaultHttpMethods$lambda_0(m, idx) {
    _init_properties_Chars_kt__d3i39x();
    return new Char(charCodeAt(m.l2z_1, idx));
  }
  var properties_initialized_Chars_kt_phjfhp;
  function _init_properties_Chars_kt__d3i39x() {
    if (!properties_initialized_Chars_kt_phjfhp) {
      properties_initialized_Chars_kt_phjfhp = true;
      var tmp = Companion_instance;
      var tmp_0 = Companion_getInstance_0().k2z_1;
      var tmp_1 = DefaultHttpMethods$lambda;
      DefaultHttpMethods = tmp.q3c(tmp_0, tmp_1, DefaultHttpMethods$lambda_0);
      // Inline function 'kotlin.collections.map' call
      var this_0 = numberRangeToNumber(0, 255);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var inductionVariable = this_0.p1_1;
      var last = this_0.q1_1;
      if (inductionVariable <= last)
        do {
          var item = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var v = item;
          var tmp_2;
          if (48 <= v ? v <= 57 : false) {
            tmp_2 = subtract(numberToLong(v), 48n);
          } else {
            var tmp_3;
            var tmp_4 = fromInt(v);
            // Inline function 'kotlin.code' call
            var this_1 = _Char___init__impl__6a9atx(97);
            var tmp$ret$3 = Char__toInt_impl_vasixd(this_1);
            if (tmp_4 >= fromInt(tmp$ret$3)) {
              var tmp_5 = fromInt(v);
              // Inline function 'kotlin.code' call
              var this_2 = _Char___init__impl__6a9atx(102);
              var tmp$ret$4 = Char__toInt_impl_vasixd(this_2);
              tmp_3 = tmp_5 <= fromInt(tmp$ret$4);
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              // Inline function 'kotlin.code' call
              var this_3 = _Char___init__impl__6a9atx(97);
              var tmp$ret$5 = Char__toInt_impl_vasixd(this_3);
              // Inline function 'kotlin.Long.plus' call
              var this_4 = subtract(numberToLong(v), fromInt(tmp$ret$5));
              tmp_2 = add(this_4, fromInt(10));
            } else {
              var tmp_6;
              var tmp_7 = fromInt(v);
              // Inline function 'kotlin.code' call
              var this_5 = _Char___init__impl__6a9atx(65);
              var tmp$ret$7 = Char__toInt_impl_vasixd(this_5);
              if (tmp_7 >= fromInt(tmp$ret$7)) {
                var tmp_8 = fromInt(v);
                // Inline function 'kotlin.code' call
                var this_6 = _Char___init__impl__6a9atx(70);
                var tmp$ret$8 = Char__toInt_impl_vasixd(this_6);
                tmp_6 = tmp_8 <= fromInt(tmp$ret$8);
              } else {
                tmp_6 = false;
              }
              if (tmp_6) {
                // Inline function 'kotlin.code' call
                var this_7 = _Char___init__impl__6a9atx(65);
                var tmp$ret$9 = Char__toInt_impl_vasixd(this_7);
                // Inline function 'kotlin.Long.plus' call
                var this_8 = subtract(numberToLong(v), fromInt(tmp$ret$9));
                tmp_2 = add(this_8, fromInt(10));
              } else {
                tmp_2 = -1n;
              }
            }
          }
          var tmp$ret$2 = tmp_2;
          destination.b1(tmp$ret$2);
        }
         while (!(item === last));
      HexTable = toLongArray(destination);
      // Inline function 'kotlin.collections.map' call
      var this_9 = numberRangeToNumber(0, 15);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_9, 10));
      var inductionVariable_0 = this_9.p1_1;
      var last_0 = this_9.q1_1;
      if (inductionVariable_0 <= last_0)
        do {
          var item_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var it = item_0;
          var tmp_9;
          if (it < 10) {
            tmp_9 = toByte(48 + it | 0);
          } else {
            // Inline function 'kotlin.code' call
            var this_10 = Char__minus_impl_a2frrh(Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(97), it), 10);
            var tmp$ret$3_0 = Char__toInt_impl_vasixd(this_10);
            tmp_9 = toByte(tmp$ret$3_0);
          }
          var tmp$ret$2_0 = tmp_9;
          destination_0.b1(tmp$ret$2_0);
        }
         while (!(item_0 === last_0));
      HexLetterTable = toByteArray_0(destination_0);
    }
  }
  function UnsupportedMediaTypeExceptionCIO(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, UnsupportedMediaTypeExceptionCIO);
  }
  function MutableRange(start, end) {
    this.l39_1 = start;
    this.m39_1 = end;
  }
  protoOf(MutableRange).toString = function () {
    return 'MutableRange(start=' + this.l39_1 + ', end=' + this.m39_1 + ')';
  };
  function skipSpacesAndHorizontalTabs(text, start, end) {
    var index = start;
    $l$loop: while (index < end) {
      var ch = text.b(index);
      if (!isWhitespace(ch) && !(ch === _Char___init__impl__6a9atx(9)))
        break $l$loop;
      index = index + 1 | 0;
    }
    return index;
  }
  function isPoolingDisabled() {
    return false;
  }
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CIOMultipartDataBase;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-http-cio.js.map
