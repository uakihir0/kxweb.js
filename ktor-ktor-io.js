(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-io-kotlinx-io-core.js', './kotlinx-atomicfu.js', './kotlinx-io-kotlinx-io-bytestring.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./kotlinx-atomicfu.js'), require('./kotlinx-io-kotlinx-io-bytestring.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-io-kotlinx-io-bytestring' was not found. Please, check whether 'kotlinx-io-kotlinx-io-bytestring' is loaded prior to 'ktor-ktor-io'.");
    }
    globalThis['ktor-ktor-io'] = factory(typeof globalThis['ktor-ktor-io'] === 'undefined' ? {} : globalThis['ktor-ktor-io'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlinx-atomicfu'], globalThis['kotlinx-io-kotlinx-io-bytestring']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring) {
  'use strict';
  //region block: imports
  var Companion_instance = kotlin_kotlin.$_$.n2;
  var Unit_instance = kotlin_kotlin.$_$.s2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var protoOf = kotlin_kotlin.$_$.wb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ya;
  var initMetadataForObject = kotlin_kotlin.$_$.db;
  var toString = kotlin_kotlin.$_$.bh;
  var hashCode = kotlin_kotlin.$_$.wa;
  var equals = kotlin_kotlin.$_$.qa;
  var initMetadataForClass = kotlin_kotlin.$_$.xa;
  var createFailure = kotlin_kotlin.$_$.qg;
  var Result = kotlin_kotlin.$_$.xf;
  var initMetadataForInterface = kotlin_kotlin.$_$.bb;
  var toString_0 = kotlin_kotlin.$_$.we;
  var newThrowable = kotlin_kotlin.$_$.rb;
  var stackTraceToString = kotlin_kotlin.$_$.ah;
  var VOID = kotlin_kotlin.$_$.d;
  var isInterface = kotlin_kotlin.$_$.mb;
  var FunctionAdapter = kotlin_kotlin.$_$.da;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var CoroutineImpl = kotlin_kotlin.$_$.g9;
  var fromInt = kotlin_kotlin.$_$.r9;
  var numberToLong = kotlin_kotlin.$_$.x9;
  var add = kotlin_kotlin.$_$.m9;
  var intercepted = kotlin_kotlin.$_$.r8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yg;
  var returnIfSuspended = kotlin_kotlin.$_$.a3;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.za;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.t3;
  var CancellationException = kotlin_kotlin.$_$.n8;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var convertToInt = kotlin_kotlin.$_$.o9;
  var toString_1 = kotlin_kotlin.$_$.zb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n4;
  var IllegalStateException = kotlin_kotlin.$_$.uf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.o4;
  var captureStack = kotlin_kotlin.$_$.ga;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var decodeToString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.d;
  var replace = kotlin_kotlin.$_$.zd;
  var indexOf = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.i;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var get_ONE = kotlin_kotlin.$_$.l9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j4;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var readString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.n;
  var subtract = kotlin_kotlin.$_$.ba;
  var readByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var constructCallableReference = kotlin_kotlin.$_$.oa;
  var EmptyCoroutineContext_instance = kotlin_kotlin.$_$.w1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var startCoroutineCancellable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var Continuation = kotlin_kotlin.$_$.a9;
  var KFunctionImpl = kotlin_kotlin.$_$.lc;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.ab;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var initMetadataForLambda = kotlin_kotlin.$_$.cb;
  var readString_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.m;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var Enum = kotlin_kotlin.$_$.qf;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d3;
  var listOf = kotlin_kotlin.$_$.i7;
  var IOException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x3;
  var charSequenceLength = kotlin_kotlin.$_$.la;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var encodeToByteArray = kotlin_kotlin.$_$.hd;
  var writeString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.o;
  var AutoCloseable = kotlin_kotlin.$_$.jf;
  var IOException_init_$Init$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var replace_0 = kotlin_kotlin.$_$.ae;
  var getStringHashCode = kotlin_kotlin.$_$.va;
  var charSequenceSubSequence = kotlin_kotlin.$_$.ma;
  var readByteArray_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var isCharSequence = kotlin_kotlin.$_$.ib;
  var trim = kotlin_kotlin.$_$.ef;
  var toByte = kotlin_kotlin.$_$.xb;
  var decodeToString_0 = kotlin_kotlin.$_$.fd;
  var setOf = kotlin_kotlin.$_$.w7;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var charSequenceGet = kotlin_kotlin.$_$.ka;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.n;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject(Empty, 'Empty');
  initMetadataForClass(Closed, 'Closed');
  function resume() {
    return this.t26().a9(Companion_getInstance().q26_1);
  }
  function resume_0(throwable) {
    var tmp = this.t26();
    var tmp_0;
    if (throwable == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(throwable));
      tmp_0 = new Result(tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp.a9(tmp1_elvis_lhs == null ? Companion_getInstance().q26_1 : tmp1_elvis_lhs.do_1);
  }
  initMetadataForInterface(Task, 'Task');
  initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
  initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForCoroutine($awaitContentCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushAndCloseCOROUTINE$, CoroutineImpl);
  function awaitContent$default(min, $completion, $super) {
    min = min === VOID ? 1 : min;
    return $super === VOID ? this.a29(min, $completion) : $super.a29.call(this, min, $completion);
  }
  initMetadataForInterface(ByteReadChannel_1, 'ByteReadChannel', VOID, VOID, VOID, [1]);
  function get_autoFlush() {
    return false;
  }
  initMetadataForInterface(ByteWriteChannel, 'ByteWriteChannel', VOID, VOID, VOID, [0]);
  initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel_1, ByteWriteChannel], [1, 0]);
  initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException', VOID, IllegalStateException);
  initMetadataForCoroutine($findNextCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($advanceToNextPotentialMatchCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($checkFullMatchCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ByteChannelScanner, 'ByteChannelScanner', VOID, VOID, VOID, [1, 0]);
  initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForCompanion(Companion_0);
  initMetadataForCoroutine($readRemainingCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($toByteArrayCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($discardCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$_0, CoroutineImpl);
  initMetadataForCoroutine($readAvailableCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($skipIfFoundCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readPacketCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readBufferCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($peekCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineTo$discardCrlfOrCrCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushIfNeededCOROUTINE$, CoroutineImpl);
  initMetadataForClass(WriterJob, 'WriterJob');
  initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
  initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref_0, KFunctionImpl, VOID, [0]);
  initMetadataForLambda(writer$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($writePacketCOROUTINE$, CoroutineImpl);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CloseToken, 'CloseToken');
  initMetadataForCoroutine($awaitContentCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(CountedByteReadChannel, 'CountedByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(ClosedByteChannelException, 'ClosedByteChannelException', ClosedByteChannelException, IOException);
  initMetadataForClass(ClosedReadChannelException, 'ClosedReadChannelException', ClosedReadChannelException, ClosedByteChannelException);
  initMetadataForClass(ClosedWriteChannelException, 'ClosedWriteChannelException', ClosedWriteChannelException, ClosedByteChannelException);
  initMetadataForClass(LineEnding, 'LineEnding', VOID, Enum);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(LineEndingMode, 'LineEndingMode');
  initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(MalformedInputException, 'MalformedInputException', VOID, IOException);
  initMetadataForClass(TooLongLineException, 'TooLongLineException', VOID, MalformedInputException);
  function close() {
    this.x1n();
  }
  initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
  initMetadataForClass(ByteArrayPool$1, VOID, VOID, DefaultPool);
  initMetadataForClass(NoPoolImpl, 'NoPoolImpl', VOID, VOID, [ObjectPool]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Charset, 'Charset');
  initMetadataForObject(Charsets, 'Charsets');
  initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
  initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
  initMetadataForClass(CharsetImpl, 'CharsetImpl', VOID, Charset);
  initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl', VOID, CharsetEncoder);
  initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl', VOID, CharsetDecoder);
  initMetadataForClass(toKtor$1);
  initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback');
  //endregion
  function Companion() {
    Companion_instance_0 = this;
    this.p26_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.q26_1 = _Result___init__impl__xyqfz8(Unit_instance);
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Empty() {
  }
  protoOf(Empty).toString = function () {
    return 'Empty';
  };
  protoOf(Empty).hashCode = function () {
    return -231472095;
  };
  protoOf(Empty).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    return true;
  };
  var Empty_instance;
  function Empty_getInstance() {
    return Empty_instance;
  }
  function Closed(cause) {
    this.r26_1 = cause;
  }
  protoOf(Closed).toString = function () {
    return 'Closed(cause=' + toString(this.r26_1) + ')';
  };
  protoOf(Closed).hashCode = function () {
    return this.r26_1 == null ? 0 : hashCode(this.r26_1);
  };
  protoOf(Closed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.r26_1, other.r26_1))
      return false;
    return true;
  };
  function Task() {
  }
  function Read(continuation) {
    this.x26_1 = continuation;
    this.y26_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.x26_1), 16));
      stackTraceToString(this_0);
      tmp.y26_1 = this_0;
    }
  }
  protoOf(Read).t26 = function () {
    return this.x26_1;
  };
  protoOf(Read).s26 = function () {
    return this.y26_1;
  };
  protoOf(Read).u26 = function () {
    return 'read';
  };
  function Write(continuation) {
    this.z26_1 = continuation;
    this.a27_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.z26_1), 16));
      stackTraceToString(this_0);
      tmp.a27_1 = this_0;
    }
  }
  protoOf(Write).t26 = function () {
    return this.z26_1;
  };
  protoOf(Write).s26 = function () {
    return this.a27_1;
  };
  protoOf(Write).u26 = function () {
    return 'write';
  };
  function moveFlushToReadBuffer($this) {
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    $this.e27_1;
    $this.c27_1.d1i($this.g27_1);
    $this.d27_1 = 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = $this.f27_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Write) {
      tmp = $this.f27_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.v26();
    }
  }
  function closeSlot($this, cause) {
    var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().p26_1;
    var continuation = $this.f27_1.atomicfu$getAndSet(closeContinuation);
    if (isInterface(continuation, Task)) {
      continuation.w26(cause);
    }
    var tmp0_safe_receiver = $this.j27_1.atomicfu$getAndSet(null);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(cause);
  }
  function sam$kotlinx_coroutines_DisposableHandle$0(function_0) {
    this.k27_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).x1n = function () {
    return this.k27_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).i3 = function () {
    return this.k27_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.i3(), other.i3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).hashCode = function () {
    return hashCode(this.i3());
  };
  function ByteChannel$invokeOnClose$lambda() {
    return Unit_instance;
  }
  function ByteChannel$invokeOnClose$lambda_0() {
    return Unit_instance;
  }
  function ByteChannel$invokeOnClose$lambda_1(this$0, $handler) {
    return function () {
      this$0.j27_1.atomicfu$compareAndSet($handler, null);
      return Unit_instance;
    };
  }
  function $awaitContentCOROUTINE$(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t27_1 = _this__u8e3s4;
    this.u27_1 = min;
  }
  protoOf($awaitContentCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 4;
            rethrowCloseCauseIfNeeded_0(this.t27_1);
            if (this.t27_1.g27_1.e1() >= fromInt(this.u27_1))
              return true;
            this.v27_1 = this.t27_1;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!(add(numberToLong(this.t27_1.d27_1), this.t27_1.g27_1.e1()) < fromInt(this.u27_1) && this.t27_1.i27_1.kotlinx$atomicfu$value == null)) {
              this.p8_1 = 3;
              continue $sm;
            }

            this.p8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.a1p();
            var tmp0 = this.v27_1;
            var tmp2 = new Read(cancellable);
            l$ret$1: do {
              var previous = tmp0.f27_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.f27_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.v26();
                  break l$ret$1;
                }
              }
              if (previous instanceof Read) {
                previous.w26(new ConcurrentIOException(tmp2.u26(), previous.s26()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.v26();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.w26(previous.r26_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(add(numberToLong(this.t27_1.d27_1), this.t27_1.g27_1.e1()) < fromInt(this.u27_1) && this.t27_1.i27_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.f27_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Read) {
                  tmp_0 = tmp0.f27_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.v26();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.i1p(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.p8_1 = 1;
            continue $sm;
          case 3:
            if (this.t27_1.g27_1.e1() < 1048576n) {
              moveFlushToReadBuffer(this.t27_1);
            }

            return this.t27_1.g27_1.e1() >= fromInt(this.u27_1);
          case 4:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 4) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function $flushCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e28_1 = _this__u8e3s4;
  }
  protoOf($flushCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 4;
            rethrowCloseCauseIfNeeded_0(this.e28_1);
            this.e28_1.g28();
            if (this.e28_1.h28())
              return Unit_instance;
            this.f28_1 = this.e28_1;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!(!this.e28_1.h28() && this.e28_1.i27_1.kotlinx$atomicfu$value == null)) {
              this.p8_1 = 3;
              continue $sm;
            }

            this.p8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.a1p();
            var tmp0 = this.f28_1;
            var tmp2 = new Write(cancellable);
            l$ret$1: do {
              var previous = tmp0.f27_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.f27_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.v26();
                  break l$ret$1;
                }
              }
              if (previous instanceof Write) {
                previous.w26(new ConcurrentIOException(tmp2.u26(), previous.s26()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.v26();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.w26(previous.r26_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(!this.e28_1.h28() && this.e28_1.i27_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.f27_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Write) {
                  tmp_0 = tmp0.f27_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.v26();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.i1p(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.p8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 4) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function $flushAndCloseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q28_1 = _this__u8e3s4;
  }
  protoOf($flushAndCloseCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 4;
            var this_0 = this.q28_1;
            this.q8_1 = 2;
            this.s28_1 = Companion_instance;
            this.p8_1 = 1;
            suspendResult = this_0.t28(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            this.s28_1;
            tmp_0.r28_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.q8_1 = 4;
            this.p8_1 = 3;
            continue $sm;
          case 2:
            this.q8_1 = 4;
            var tmp_1 = this.s8_1;
            if (tmp_1 instanceof Error) {
              var e = this.s8_1;
              var tmp_2 = this;
              tmp_2.r28_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.p8_1 = 3;
              continue $sm;
            } else {
              throw this.s8_1;
            }

          case 3:
            this.q8_1 = 4;
            if (!this.q28_1.i27_1.atomicfu$compareAndSet(null, get_CLOSED()))
              return Unit_instance;
            closeSlot(this.q28_1, null);
            return Unit_instance;
          case 4:
            throw this.s8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.q8_1 === 4) {
          throw e_0;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e_0;
        }
      }
     while (true);
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.b27_1 = autoFlush;
    this.c27_1 = new Buffer();
    this.d27_1 = 0;
    this.e27_1 = new Object();
    this.f27_1 = atomic$ref$1(Empty_instance);
    this.g27_1 = new Buffer();
    this.h27_1 = new Buffer();
    this.i27_1 = atomic$ref$1(null);
    this.j27_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannel).u28 = function () {
    return this.b27_1;
  };
  protoOf(ByteChannel).h28 = function () {
    return this.d27_1 < 1048576;
  };
  protoOf(ByteChannel).v28 = function () {
    var tmp0_safe_receiver = this.i27_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'io.ktor.utils.io.Companion.throwOrNull' call
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp;
      if (tmp0_subject == null) {
        tmp = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp = access$_get_origin__hdh1qz(tmp0_safe_receiver).n1r();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp = new ClosedReadChannelException(p0);
          }
        }
      }
      var tmp0_safe_receiver_0 = tmp;
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        throw tmp0_safe_receiver_0;
      }
    }
    if (this.g27_1.a1h()) {
      moveFlushToReadBuffer(this);
    }
    return this.g27_1;
  };
  protoOf(ByteChannel).w28 = function () {
    if (this.x28()) {
      var tmp0_safe_receiver = this.i27_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'io.ktor.utils.io.Companion.throwOrNull' call
        // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
        var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
        var tmp_0;
        if (tmp0_subject == null) {
          tmp_0 = null;
        } else {
          if (isInterface(tmp0_subject, CopyableThrowable)) {
            tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).n1r();
          } else {
            if (tmp0_subject instanceof CancellationException) {
              tmp_0 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
            } else {
              var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
              tmp_0 = new ClosedWriteChannelException(p0);
            }
          }
        }
        var tmp0_safe_receiver_0 = tmp_0;
        var tmp_1;
        if (tmp0_safe_receiver_0 == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          throw tmp0_safe_receiver_0;
        }
        tmp = tmp_1;
      }
      if (tmp == null)
        throw new ClosedWriteChannelException();
    }
    return this.h27_1;
  };
  protoOf(ByteChannel).y28 = function () {
    var tmp0_safe_receiver = this.i27_1.kotlinx$atomicfu$value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp_0;
      if (tmp0_subject == null) {
        tmp_0 = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).n1r();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp_0 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp_0 = new ClosedByteChannelException(p0);
          }
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ByteChannel).x28 = function () {
    return !(this.i27_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannel).z28 = function () {
    return !(this.y28() == null) || (this.x28() && this.d27_1 === 0 && this.g27_1.a1h());
  };
  protoOf(ByteChannel).a29 = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$(this, min, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(ByteChannel).t28 = function ($completion) {
    var tmp = new $flushCOROUTINE$(this, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(ByteChannel).g28 = function () {
    if (this.h27_1.a1h())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.e27_1;
    var count = convertToInt(this.h27_1.e1());
    this.c27_1.s1i(this.h27_1);
    this.d27_1 = this.d27_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.f27_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.f27_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.v26();
    }
  };
  protoOf(ByteChannel).f4 = function () {
    this.g28();
    if (!this.i27_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  };
  protoOf(ByteChannel).c29 = function ($completion) {
    var tmp = new $flushAndCloseCOROUTINE$(this, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(ByteChannel).d29 = function (cause) {
    if (!(this.i27_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.i27_1.atomicfu$compareAndSet(null, closedToken);
    // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
    var tmp0_subject = access$_get_origin__hdh1qz(closedToken);
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = access$_get_origin__hdh1qz(closedToken).n1r();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException_init_$Create$(access$_get_origin__hdh1qz(closedToken).message, access$_get_origin__hdh1qz(closedToken));
        } else {
          var p0 = access$_get_origin__hdh1qz(closedToken);
          tmp = new ClosedByteChannelException(p0);
        }
      }
    }
    var wrappedCause = tmp;
    closeSlot(this, wrappedCause);
  };
  protoOf(ByteChannel).e29 = function (handler) {
    var existingCause = this.i27_1.kotlinx$atomicfu$value;
    if (!(existingCause == null)) {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(existingCause);
      var tmp;
      if (tmp0_subject == null) {
        tmp = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp = access$_get_origin__hdh1qz(existingCause).n1r();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp = CancellationException_init_$Create$(access$_get_origin__hdh1qz(existingCause).message, access$_get_origin__hdh1qz(existingCause));
          } else {
            var p0 = access$_get_origin__hdh1qz(existingCause);
            tmp = new ClosedByteChannelException(p0);
          }
        }
      }
      handler(tmp);
      var tmp_0 = ByteChannel$invokeOnClose$lambda;
      return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_0);
    }
    if (!this.j27_1.atomicfu$compareAndSet(null, handler)) {
      // Inline function 'kotlin.error' call
      var message = 'Only one invokeOnClose handler is supported per channel';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
    var cause = this.i27_1.kotlinx$atomicfu$value;
    if (!(cause == null) && this.j27_1.atomicfu$compareAndSet(handler, null)) {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject_0 = access$_get_origin__hdh1qz(cause);
      var tmp_1;
      if (tmp0_subject_0 == null) {
        tmp_1 = null;
      } else {
        if (isInterface(tmp0_subject_0, CopyableThrowable)) {
          tmp_1 = access$_get_origin__hdh1qz(cause).n1r();
        } else {
          if (tmp0_subject_0 instanceof CancellationException) {
            tmp_1 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(cause).message, access$_get_origin__hdh1qz(cause));
          } else {
            var p0_0 = access$_get_origin__hdh1qz(cause);
            tmp_1 = new ClosedByteChannelException(p0_0);
          }
        }
      }
      handler(tmp_1);
      var tmp_2 = ByteChannel$invokeOnClose$lambda_0;
      return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_2);
    }
    var tmp_3 = ByteChannel$invokeOnClose$lambda_1(this, handler);
    return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_3);
  };
  protoOf(ByteChannel).toString = function () {
    return 'ByteChannel[' + hashCode(this) + ']';
  };
  function ConcurrentIOException(taskName, cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$('Concurrent ' + taskName + ' attempts', cause, this);
    captureStack(this, ConcurrentIOException);
  }
  function ByteReadChannel(content, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? content.length : length;
    // Inline function 'kotlin.also' call
    var this_0 = new Buffer();
    this_0.j1i(content, offset, offset + length | 0);
    var source = this_0;
    return ByteReadChannel_0(source);
  }
  function ByteReadChannel_0(source) {
    return new SourceByteReadChannel(source);
  }
  function buildPartialMatchTable($this) {
    var table = new Int32Array($this.g29_1.e1());
    var j = 0;
    var inductionVariable = 1;
    var last = $this.g29_1.e1();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        while (j > 0 && !($this.g29_1.d1(i) === $this.g29_1.d1(j))) {
          j = table[j - 1 | 0];
        }
        if ($this.g29_1.d1(i) === $this.g29_1.d1(j)) {
          j = j + 1 | 0;
        }
        table[i] = j;
      }
       while (inductionVariable < last);
    return table;
  }
  function advanceToNextPotentialMatch($this, $completion) {
    var tmp = new $advanceToNextPotentialMatchCOROUTINE$($this, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function checkFullMatch($this, $completion) {
    var tmp = new $checkFullMatchCOROUTINE$($this, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function checkBounds($this, extra) {
    if (add($this.m29_1, extra) > $this.i29_1) {
      throw IOException_init_$Create$('Limit of ' + $this.i29_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.g29_1) + '"'));
    }
  }
  function toSingleLineString($this, $receiver) {
    return replace(decodeToString($receiver), '\n', '\\n');
  }
  function $findNextCOROUTINE$(_this__u8e3s4, ignoreMissing, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r2a_1 = _this__u8e3s4;
    this.s2a_1 = ignoreMissing;
  }
  protoOf($findNextCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 9;
            this.r2a_1.m29_1 = 0n;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!this.r2a_1.j29_1.a1h()) {
              this.t2a_1 = true;
              this.p8_1 = 3;
              continue $sm;
            } else {
              this.p8_1 = 2;
              suspendResult = this.r2a_1.f29_1.b29(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.t2a_1 = suspendResult;
            this.p8_1 = 3;
            continue $sm;
          case 3:
            if (!this.t2a_1) {
              this.p8_1 = 7;
              continue $sm;
            }

            this.p8_1 = 4;
            suspendResult = advanceToNextPotentialMatch(this.r2a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.p8_1 = 5;
            suspendResult = checkFullMatch(this.r2a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (suspendResult) {
              return this.r2a_1.m29_1;
            } else {
              this.p8_1 = 6;
              continue $sm;
            }

          case 6:
            this.p8_1 = 1;
            continue $sm;
          case 7:
            if (!this.s2a_1) {
              throw IOException_init_$Create$('Expected "' + toSingleLineString(this.r2a_1, this.r2a_1.g29_1) + '" but encountered end of input');
            }

            this.r2a_1.m29_1 = add(this.r2a_1.m29_1, this.r2a_1.l29_1.d1i(this.r2a_1.h29_1.w28()));
            this.p8_1 = 8;
            suspendResult = this.r2a_1.h29_1.t28(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return this.r2a_1.m29_1;
          case 9:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 9) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function $advanceToNextPotentialMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w29_1 = _this__u8e3s4;
  }
  protoOf($advanceToNextPotentialMatchCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 8;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!this.w29_1.j29_1.a1h()) {
              this.x29_1 = true;
              this.p8_1 = 3;
              continue $sm;
            } else {
              this.p8_1 = 2;
              suspendResult = this.w29_1.f29_1.b29(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.x29_1 = suspendResult;
            this.p8_1 = 3;
            continue $sm;
          case 3:
            if (!this.x29_1) {
              this.p8_1 = 7;
              continue $sm;
            }

            var nextMatch = indexOf(this.w29_1.j29_1, this.w29_1.g29_1.d1(0));
            if (nextMatch === -1n) {
              var tmp_0 = this.w29_1.j29_1;
              checkBounds(this.w29_1, (tmp_0 instanceof Buffer ? tmp_0 : THROW_CCE()).e1());
              this.w29_1.m29_1 = add(this.w29_1.m29_1, this.w29_1.j29_1.d1i(this.w29_1.h29_1.w28()));
              this.p8_1 = 5;
              suspendResult = flushIfNeeded(this.w29_1.h29_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              checkBounds(this.w29_1, nextMatch);
              var tmp_1 = this.w29_1;
              var tmp_2 = this.w29_1.m29_1;
              var tmp_3 = this.w29_1.h29_1.w28();
              tmp_1.m29_1 = add(tmp_2, this.w29_1.j29_1.a1i(tmp_3 instanceof Buffer ? tmp_3 : THROW_CCE(), nextMatch));
              this.p8_1 = 4;
              suspendResult = flushIfNeeded(this.w29_1.h29_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 4:
            return Unit_instance;
          case 5:
            this.p8_1 = 6;
            continue $sm;
          case 6:
            this.p8_1 = 1;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 8) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function $checkFullMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g2a_1 = _this__u8e3s4;
  }
  protoOf($checkFullMatchCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 8;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!this.g2a_1.j29_1.a1h()) {
              this.i2a_1 = true;
              this.p8_1 = 3;
              continue $sm;
            } else {
              this.p8_1 = 2;
              suspendResult = this.g2a_1.f29_1.b29(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.i2a_1 = suspendResult;
            this.p8_1 = 3;
            continue $sm;
          case 3:
            if (!this.i2a_1) {
              this.p8_1 = 7;
              continue $sm;
            }

            this.h2a_1 = this.g2a_1.j29_1.d1h();
            if (this.g2a_1.n29_1 > 0 && !(this.h2a_1 === this.g2a_1.g29_1.d1(this.g2a_1.n29_1))) {
              var oldMatchIndex = this.g2a_1.n29_1;
              while (this.g2a_1.n29_1 > 0 && !(this.h2a_1 === this.g2a_1.g29_1.d1(this.g2a_1.n29_1))) {
                this.g2a_1.n29_1 = this.g2a_1.k29_1[this.g2a_1.n29_1 - 1 | 0];
              }
              var retained = fromInt(oldMatchIndex - this.g2a_1.n29_1 | 0);
              checkBounds(this.g2a_1, retained);
              var tmp_0 = this.g2a_1;
              var tmp_1 = this.g2a_1.m29_1;
              var tmp_2 = this.g2a_1.h29_1.w28();
              tmp_0.m29_1 = add(tmp_1, this.g2a_1.l29_1.a1i(tmp_2 instanceof Buffer ? tmp_2 : THROW_CCE(), retained));
              if (this.g2a_1.n29_1 === 0 && !(this.h2a_1 === this.g2a_1.g29_1.d1(this.g2a_1.n29_1))) {
                this.p8_1 = 6;
                suspendResult = writeByte(this.g2a_1.h29_1, this.h2a_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.p8_1 = 4;
                continue $sm;
              }
            } else {
              this.p8_1 = 5;
              continue $sm;
            }

          case 4:
            this.p8_1 = 5;
            continue $sm;
          case 5:
            this.g2a_1.n29_1 = this.g2a_1.n29_1 + 1 | 0;
            if (this.g2a_1.n29_1 === this.g2a_1.g29_1.e1()) {
              return true;
            }

            this.g2a_1.l29_1.t1i(this.h2a_1);
            this.p8_1 = 1;
            continue $sm;
          case 6:
            var _unary__edvuaz = this.g2a_1.m29_1;
            this.g2a_1.m29_1 = add(_unary__edvuaz, get_ONE());
            return false;
          case 7:
            return false;
          case 8:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 8) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function ByteChannelScanner(channel, matchString, writeChannel, limit) {
    limit = limit === VOID ? 9223372036854775807n : limit;
    this.f29_1 = channel;
    this.g29_1 = matchString;
    this.h29_1 = writeChannel;
    this.i29_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.g29_1.e1() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    this.j29_1 = this.f29_1.v28();
    this.k29_1 = buildPartialMatchTable(this);
    this.l29_1 = new Buffer();
    this.m29_1 = 0n;
    this.n29_1 = 0;
  }
  protoOf(ByteChannelScanner).u2a = function (ignoreMissing, $completion) {
    var tmp = new $findNextCOROUTINE$(this, ignoreMissing, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  function attachWriterJob(_this__u8e3s4, writerJob) {
    var tmp = writerJob.v2a_1;
    var tmp0_safe_receiver = tmp instanceof ByteChannel ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e29(attachWriterJob$lambda(_this__u8e3s4));
    }
  }
  function attachWriterJob$lambda($this_attachWriterJob) {
    return function (cause) {
      var tmp;
      if (!(cause == null)) {
        $this_attachWriterJob.d29(cause);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ByteReadChannel$Companion$Empty$1() {
    this.x2a_1 = null;
    this.y2a_1 = new Buffer();
  }
  protoOf(ByteReadChannel$Companion$Empty$1).y28 = function () {
    return this.x2a_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).z28 = function () {
    return true;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).v28 = function () {
    return this.y2a_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).a29 = function (min, $completion) {
    return false;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).d29 = function (cause) {
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.z2a_1 = new ByteReadChannel$Companion$Empty$1();
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function ByteReadChannel_1() {
  }
  function cancel_0(_this__u8e3s4) {
    _this__u8e3s4.d29(IOException_init_$Create$('Channel was cancelled'));
  }
  function readRemaining(_this__u8e3s4, $completion) {
    var tmp = new $readRemainingCOROUTINE$(_this__u8e3s4, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$(_this__u8e3s4, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function copyTo(_this__u8e3s4, channel, limit, $completion) {
    var tmp = new $copyToCOROUTINE$(_this__u8e3s4, channel, limit, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.y28();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function discard(_this__u8e3s4, max, $completion) {
    max = max === VOID ? 9223372036854775807n : max;
    var tmp = new $discardCOROUTINE$(_this__u8e3s4, max, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function copyTo_0(_this__u8e3s4, channel, $completion) {
    var tmp = new $copyToCOROUTINE$_0(_this__u8e3s4, channel, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var tmp = new $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function skipIfFound(_this__u8e3s4, byteString, $completion) {
    var tmp = new $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function readPacket(_this__u8e3s4, packet, $completion) {
    var tmp = new $readPacketCOROUTINE$(_this__u8e3s4, packet, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
    limit = limit === VOID ? 9223372036854775807n : limit;
    ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
    return (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).u2a(ignoreMissing, $completion);
  }
  function readLineStrictTo(_this__u8e3s4, out, limit, lineEnding, $completion) {
    limit = limit === VOID ? 9223372036854775807n : limit;
    lineEnding = lineEnding === VOID ? LineEnding_Default_getInstance() : lineEnding;
    // Inline function 'kotlin.require' call
    if (!(limit >= 0n)) {
      var message = 'Limit (' + limit.toString() + ') should be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    return internalReadLineTo(_this__u8e3s4, out, limit, lineEnding.equals(LineEnding_Lenient_getInstance()), true, $completion);
  }
  function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.y28();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function readBuffer(_this__u8e3s4, $completion) {
    var tmp = new $readBufferCOROUTINE$(_this__u8e3s4, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function get_availableForRead(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.v28().z1g().e1());
  }
  function peek(_this__u8e3s4, count, $completion) {
    var tmp = new $peekCOROUTINE$(_this__u8e3s4, count, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function internalReadLineTo(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion) {
    var tmp = new $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function throwEndOfStreamException(consumed) {
    throw EOFException_init_$Create$('Unexpected end of stream after reading ' + consumed.toString() + ' characters');
  }
  function throwTooLongLineException(limit) {
    throw new TooLongLineException('Line exceeds limit of ' + limit.toString() + ' characters');
  }
  function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.y28();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function internalReadLineTo$transferString(readBuffer, $out, consumed, count) {
    if (count > 0n) {
      var string = readString(readBuffer, count);
      $out.c1(string);
      var tmp0 = consumed._v;
      // Inline function 'kotlin.Long.plus' call
      var other = string.length;
      consumed._v = add(tmp0, fromInt(other));
    }
  }
  function internalReadLineTo$scanForSoleCr(_this__u8e3s4, $lenientLineEnding, lfIndex, limitLeft) {
    if (!$lenientLineEnding)
      return -1n;
    var tmp;
    if (lfIndex === -1n) {
      // Inline function 'kotlin.Long.minus' call
      var this_0 = get_remaining(_this__u8e3s4);
      // Inline function 'kotlin.comparisons.minOf' call
      var b = subtract(this_0, fromInt(1));
      tmp = limitLeft <= b ? limitLeft : b;
    } else if (lfIndex === 0n) {
      tmp = 0n;
    } else {
      // Inline function 'kotlin.Long.minus' call
      tmp = subtract(lfIndex, fromInt(1));
    }
    var endIndex = tmp;
    return indexOf(_this__u8e3s4, 13, VOID, endIndex);
  }
  function internalReadLineTo$discardCrlfOrCr(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion) {
    var tmp = new $internalReadLineTo$discardCrlfOrCrCOROUTINE$(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function $readRemainingCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i2b_1 = _this__u8e3s4;
  }
  protoOf($readRemainingCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 4;
            this.j2b_1 = BytePacketBuilder();
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.i2b_1.z28()) {
              this.p8_1 = 3;
              continue $sm;
            }

            this.j2b_1.s1i(this.i2b_1.v28());
            this.p8_1 = 2;
            suspendResult = this.i2b_1.b29(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.p8_1 = 1;
            continue $sm;
          case 3:
            rethrowCloseCauseIfNeeded(this.i2b_1);
            return this.j2b_1.z1g();
          case 4:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 4) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function $toByteArrayCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s2b_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            this.p8_1 = 1;
            suspendResult = readBuffer(this.s2b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
          case 2:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 2) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function $copyToCOROUTINE$(_this__u8e3s4, channel, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b2c_1 = _this__u8e3s4;
    this.c2c_1 = channel;
    this.d2c_1 = limit;
  }
  protoOf($copyToCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 12;
            this.e2c_1 = this.d2c_1;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            this.q8_1 = 8;
            this.q8_1 = 7;
            this.p8_1 = 2;
            continue $sm;
          case 2:
            if (!(!this.b2c_1.z28() && this.e2c_1 > 0n)) {
              this.p8_1 = 6;
              continue $sm;
            }

            if (this.b2c_1.v28().a1h()) {
              this.p8_1 = 3;
              suspendResult = this.b2c_1.b29(VOID, this);
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
            var tmp0 = this.e2c_1;
            var b = get_remaining(this.b2c_1.v28());
            var count = tmp0 <= b ? tmp0 : b;
            this.b2c_1.v28().c1i(this.c2c_1.w28(), count);
            this.e2c_1 = subtract(this.e2c_1, count);
            this.p8_1 = 5;
            suspendResult = this.c2c_1.t28(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.p8_1 = 2;
            continue $sm;
          case 6:
            this.q8_1 = 12;
            this.p8_1 = 10;
            continue $sm;
          case 7:
            this.q8_1 = 8;
            var tmp_0 = this.s8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.s8_1;
              this.b2c_1.d29(cause);
              close_0(this.c2c_1, cause);
              throw cause;
            } else {
              throw this.s8_1;
            }

          case 8:
            this.q8_1 = 12;
            this.f2c_1 = this.s8_1;
            this.p8_1 = 9;
            suspendResult = this.c2c_1.t28(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            throw this.f2c_1;
          case 10:
            this.q8_1 = 12;
            this.p8_1 = 11;
            suspendResult = this.c2c_1.t28(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            return subtract(this.d2c_1, this.e2c_1);
          case 12:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 12) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function $discardCOROUTINE$(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o2c_1 = _this__u8e3s4;
    this.p2c_1 = max;
  }
  protoOf($discardCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 5;
            this.q2c_1 = this.p2c_1;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!(this.q2c_1 > 0n && !this.o2c_1.z28())) {
              this.p8_1 = 4;
              continue $sm;
            }

            if (get_availableForRead(this.o2c_1) === 0) {
              this.p8_1 = 2;
              suspendResult = this.o2c_1.b29(VOID, this);
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
            var tmp0 = this.q2c_1;
            var b = get_remaining(this.o2c_1.v28());
            var count = tmp0 <= b ? tmp0 : b;
            discard_0(this.o2c_1.v28(), count);
            this.q2c_1 = subtract(this.q2c_1, count);
            this.p8_1 = 1;
            continue $sm;
          case 4:
            return subtract(this.p2c_1, this.q2c_1);
          case 5:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 5) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function $copyToCOROUTINE$_0(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z2c_1 = _this__u8e3s4;
    this.a2d_1 = channel;
  }
  protoOf($copyToCOROUTINE$_0).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 11;
            this.b2d_1 = 0n;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            this.q8_1 = 7;
            this.q8_1 = 6;
            this.p8_1 = 2;
            continue $sm;
          case 2:
            if (!!this.z2c_1.z28()) {
              this.p8_1 = 5;
              continue $sm;
            }

            this.b2d_1 = add(this.b2d_1, this.z2c_1.v28().d1i(this.a2d_1.w28()));
            this.p8_1 = 3;
            suspendResult = this.a2d_1.t28(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.p8_1 = 4;
            suspendResult = this.z2c_1.b29(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.p8_1 = 2;
            continue $sm;
          case 5:
            this.q8_1 = 11;
            this.p8_1 = 9;
            continue $sm;
          case 6:
            this.q8_1 = 7;
            var tmp_0 = this.s8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.s8_1;
              this.z2c_1.d29(cause);
              close_0(this.a2d_1, cause);
              throw cause;
            } else {
              throw this.s8_1;
            }

          case 7:
            this.q8_1 = 11;
            this.c2d_1 = this.s8_1;
            this.p8_1 = 8;
            suspendResult = this.a2d_1.t28(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            throw this.c2d_1;
          case 9:
            this.q8_1 = 11;
            this.p8_1 = 10;
            suspendResult = this.a2d_1.t28(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.b2d_1;
          case 11:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 11) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l2d_1 = _this__u8e3s4;
    this.m2d_1 = buffer;
    this.n2d_1 = offset;
    this.o2d_1 = length;
  }
  protoOf($readAvailableCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            if (this.l2d_1.z28())
              return -1;
            if (this.l2d_1.v28().a1h()) {
              this.p8_1 = 1;
              suspendResult = this.l2d_1.b29(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.p8_1 = 2;
              continue $sm;
            }

          case 1:
            this.p8_1 = 2;
            continue $sm;
          case 2:
            if (this.l2d_1.z28())
              return -1;
            return readAvailable_0(this.l2d_1.v28(), this.m2d_1, this.n2d_1, this.o2d_1);
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
  function $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x2d_1 = _this__u8e3s4;
    this.y2d_1 = byteString;
  }
  protoOf($skipIfFoundCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 4;
            this.p8_1 = 1;
            suspendResult = peek(this.x2d_1, this.y2d_1.e1(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (equals(ARGUMENT, this.y2d_1)) {
              this.p8_1 = 3;
              suspendResult = discard(this.x2d_1, fromInt(this.y2d_1.e1()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.p8_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
          case 3:
            return true;
          case 4:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 4) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function $readPacketCOROUTINE$(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h2e_1 = _this__u8e3s4;
    this.i2e_1 = packet;
  }
  protoOf($readPacketCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 6;
            this.j2e_1 = new Buffer();
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!(this.j2e_1.e1() < fromInt(this.i2e_1))) {
              this.p8_1 = 5;
              continue $sm;
            }

            if (this.h2e_1.v28().a1h()) {
              this.p8_1 = 2;
              suspendResult = this.h2e_1.b29(VOID, this);
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
            if (this.h2e_1.z28()) {
              this.p8_1 = 5;
              continue $sm;
            } else {
              this.p8_1 = 4;
              continue $sm;
            }

          case 4:
            if (get_remaining(this.h2e_1.v28()) > subtract(numberToLong(this.i2e_1), this.j2e_1.e1())) {
              this.h2e_1.v28().c1i(this.j2e_1, subtract(numberToLong(this.i2e_1), this.j2e_1.e1()));
            } else {
              this.h2e_1.v28().d1i(this.j2e_1);
            }

            this.p8_1 = 1;
            continue $sm;
          case 5:
            if (this.j2e_1.e1() < fromInt(this.i2e_1)) {
              throw EOFException_init_$Create$('Not enough data available, required ' + this.i2e_1 + ' bytes but only ' + this.j2e_1.e1().toString() + ' available');
            }

            return this.j2e_1;
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
  function $readBufferCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s2e_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 4;
            this.t2e_1 = new Buffer();
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.s2e_1.z28()) {
              this.p8_1 = 3;
              continue $sm;
            }

            this.t2e_1.s1i(this.s2e_1.v28());
            this.p8_1 = 2;
            suspendResult = this.s2e_1.b29(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.p8_1 = 1;
            continue $sm;
          case 3:
            var tmp0_safe_receiver = this.s2e_1.y28();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return this.t2e_1;
          case 4:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 4) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function $peekCOROUTINE$(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c2f_1 = _this__u8e3s4;
    this.d2f_1 = count;
  }
  protoOf($peekCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            if (this.c2f_1.z28())
              return null;
            this.p8_1 = 1;
            suspendResult = this.c2f_1.a29(this.d2f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!suspendResult) {
              return null;
            } else {
              this.p8_1 = 2;
              continue $sm;
            }

          case 2:
            return readByteString(this.c2f_1.v28().e1i(), this.d2f_1);
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
  function $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m2f_1 = _this__u8e3s4;
    this.n2f_1 = out;
    this.o2f_1 = limit;
    this.p2f_1 = lenientLineEnding;
    this.q2f_1 = throwOnIncompleteLine;
  }
  protoOf($internalReadLineToCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 18;
            this.s2f_1 = this.m2f_1.v28();
            if (this.s2f_1.a1h()) {
              this.p8_1 = 1;
              suspendResult = this.m2f_1.b29(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.p8_1 = 2;
              continue $sm;
            }

          case 1:
            this.p8_1 = 2;
            continue $sm;
          case 2:
            if (this.m2f_1.z28())
              return -1n;
            this.r2f_1 = {_v: 0n};
            this.p8_1 = 3;
            continue $sm;
          case 3:
            if (!(this.r2f_1._v < this.o2f_1 && !this.m2f_1.z28())) {
              this.p8_1 = 10;
              continue $sm;
            }

            var limitLeft = subtract(this.o2f_1, this.r2f_1._v);
            var lfIndex = indexOf(this.s2f_1, 10, VOID, limitLeft);
            var crIndex = internalReadLineTo$scanForSoleCr(this.s2f_1, this.p2f_1, lfIndex, limitLeft);
            if (crIndex >= 0n) {
              internalReadLineTo$transferString(this.s2f_1, this.n2f_1, this.r2f_1, crIndex);
              discard_0(this.s2f_1, 1n);
              return this.r2f_1._v;
            }

            if (lfIndex === 0n) {
              discard_0(this.s2f_1, 1n);
              return this.r2f_1._v;
            }

            if (lfIndex > 0n) {
              var tmp_0;
              var tmp_1 = this.s2f_1.z1g();
              if (tmp_1.v1h(subtract(lfIndex, fromInt(1))) === 13) {
                tmp_0 = 1n;
              } else {
                tmp_0 = 0n;
              }
              var isCrlf = tmp_0;
              internalReadLineTo$transferString(this.s2f_1, this.n2f_1, this.r2f_1, subtract(lfIndex, isCrlf));
              discard_0(this.s2f_1, add(numberToLong(1), isCrlf));
              return this.r2f_1._v;
            }

            var b = get_remaining(this.s2f_1);
            var count = limitLeft <= b ? limitLeft : b;
            var tmp_2 = this.s2f_1.z1g();
            if (tmp_2.v1h(subtract(count, fromInt(1))) === 13) {
              internalReadLineTo$transferString(this.s2f_1, this.n2f_1, this.r2f_1, subtract(count, fromInt(1)));
              this.p8_1 = 4;
              suspendResult = internalReadLineTo$discardCrlfOrCr(this.s2f_1, this.m2f_1, this.p2f_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              internalReadLineTo$transferString(this.s2f_1, this.n2f_1, this.r2f_1, count);
              this.p8_1 = 6;
              continue $sm;
            }

          case 4:
            if (suspendResult) {
              return this.r2f_1._v;
            } else {
              this.p8_1 = 5;
              continue $sm;
            }

          case 5:
            internalReadLineTo$transferString(this.s2f_1, this.n2f_1, this.r2f_1, 1n);
            this.p8_1 = 6;
            continue $sm;
          case 6:
            if (this.r2f_1._v < this.o2f_1 && get_remaining(this.s2f_1) === 0n) {
              this.p8_1 = 7;
              suspendResult = this.m2f_1.b29(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.u2f_1 = false;
              this.p8_1 = 8;
              continue $sm;
            }

          case 7:
            this.u2f_1 = !suspendResult;
            this.p8_1 = 8;
            continue $sm;
          case 8:
            if (this.u2f_1) {
              this.p8_1 = 10;
              continue $sm;
            } else {
              this.p8_1 = 9;
              continue $sm;
            }

          case 9:
            this.p8_1 = 3;
            continue $sm;
          case 10:
            if (this.r2f_1._v === 0n && this.m2f_1.z28())
              return -1n;
            if (!(this.r2f_1._v <= this.o2f_1)) {
              var message = 'Consumed bytes exceed the limit: ' + this.r2f_1._v.toString() + ' > ' + this.o2f_1.toString() + ". It's an implementation bug, please report it.";
              throw IllegalStateException_init_$Create$(toString_1(message));
            }

            if (this.r2f_1._v === this.o2f_1) {
              if (this.o2f_1 === 9223372036854775807n)
                throw new TooLongLineException('Max line length exceeded');
              if (get_remaining(this.s2f_1) === 0n) {
                this.p8_1 = 12;
                suspendResult = this.m2f_1.b29(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.t2f_1 = false;
                this.p8_1 = 13;
                continue $sm;
              }
            } else {
              this.p8_1 = 11;
              continue $sm;
            }

          case 11:
            if (this.q2f_1) {
              throwEndOfStreamException(this.r2f_1._v);
            }

            return this.r2f_1._v;
          case 12:
            this.t2f_1 = !suspendResult;
            this.p8_1 = 13;
            continue $sm;
          case 13:
            if (this.t2f_1) {
              throwEndOfStreamException(this.r2f_1._v);
            } else {
              this.p8_1 = 14;
              continue $sm;
            }

            break;
          case 14:
            var tmp0_subject = this.s2f_1.z1g().v1h(0n);
            if (tmp0_subject === 10) {
              discard_0(this.s2f_1, 1n);
              return this.r2f_1._v;
            } else {
              if (tmp0_subject === 13) {
                this.p8_1 = 15;
                suspendResult = internalReadLineTo$discardCrlfOrCr(this.s2f_1, this.m2f_1, this.p2f_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.p8_1 = 17;
                continue $sm;
              }
            }

          case 15:
            if (suspendResult) {
              return this.r2f_1._v;
            } else {
              this.p8_1 = 16;
              continue $sm;
            }

          case 16:
            this.p8_1 = 17;
            continue $sm;
          case 17:
            throwTooLongLineException(this.o2f_1);
            break;
          case 18:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 18) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function $internalReadLineTo$discardCrlfOrCrCOROUTINE$(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d2g_1 = _this__u8e3s4;
    this.e2g_1 = $this_internalReadLineTo;
    this.f2g_1 = $lenientLineEnding;
  }
  protoOf($internalReadLineTo$discardCrlfOrCrCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 5;
            if (get_remaining(this.d2g_1) >= 2n) {
              this.h2g_1 = true;
              this.p8_1 = 2;
              continue $sm;
            } else {
              this.p8_1 = 1;
              suspendResult = this.e2g_1.a29(2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.h2g_1 = suspendResult;
            this.p8_1 = 2;
            continue $sm;
          case 2:
            if (this.h2g_1) {
              this.g2g_1 = this.d2g_1.z1g().v1h(1n) === 10;
              this.p8_1 = 3;
              continue $sm;
            } else {
              this.g2g_1 = false;
              this.p8_1 = 3;
              continue $sm;
            }

          case 3:
            if (this.g2g_1) {
              discard_0(this.d2g_1, 2n);
              return true;
            } else {
              this.p8_1 = 4;
              continue $sm;
            }

          case 4:
            if (this.f2g_1) {
              discard_0(this.d2g_1, 1n);
              return true;
            }

            return false;
          case 5:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 5) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function ByteWriteChannel() {
  }
  function flushIfNeeded(_this__u8e3s4, $completion) {
    var tmp = new $flushIfNeededCOROUTINE$(_this__u8e3s4, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function $flushIfNeededCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q2g_1 = _this__u8e3s4;
  }
  protoOf($flushIfNeededCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            rethrowCloseCauseIfNeeded_1(this.q2g_1);
            if (this.q2g_1.u28() || get_size(this.q2g_1.w28()) >= 1048576) {
              this.p8_1 = 1;
              suspendResult = this.q2g_1.t28(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.p8_1 = 2;
              continue $sm;
            }

          case 1:
            this.p8_1 = 2;
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
  function ByteWriteChannel$flushAndClose$ref(p0) {
    var i = new ByteWriteChannel$flushAndClose$ref_0(p0);
    return constructCallableReference(function ($completion) {
      return i.v2g($completion);
    }, 0, 1, 17, 'flushAndClose', [p0]);
  }
  function get_NO_CALLBACK() {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return NO_CALLBACK;
  }
  var NO_CALLBACK;
  function WriterJob(channel, job) {
    this.v2a_1 = channel;
    this.w2a_1 = job;
  }
  protoOf(WriterJob).j1q = function () {
    return this.w2a_1;
  };
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_instance : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
  }
  function WriterScope(channel, coroutineContext) {
    this.w2g_1 = channel;
    this.x2g_1 = coroutineContext;
  }
  protoOf(WriterScope).l1k = function () {
    return this.x2g_1;
  };
  function invokeOnCompletion(_this__u8e3s4, block) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return _this__u8e3s4.j1q().n1l(block);
  }
  function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? value.length : endIndex;
    _this__u8e3s4.w28().j1i(value, startIndex, endIndex);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function close_0(_this__u8e3s4, cause) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    if (cause == null) {
      fireAndForget(ByteWriteChannel$flushAndClose$ref(_this__u8e3s4));
    } else {
      _this__u8e3s4.d29(cause);
    }
  }
  function writePacket(_this__u8e3s4, source, $completion) {
    var tmp = new $writePacketCOROUTINE$(_this__u8e3s4, source, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_instance : coroutineContext;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    // Inline function 'kotlin.apply' call
    var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
    this_0.n1l(writer$lambda(channel));
    var job = this_0;
    return new WriterJob(channel, job);
  }
  function fireAndForget(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
  }
  function writeByte(_this__u8e3s4, value, $completion) {
    _this__u8e3s4.w28().t1i(value);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function NO_CALLBACK$1() {
    this.i2h_1 = EmptyCoroutineContext_instance;
  }
  protoOf(NO_CALLBACK$1).v8 = function () {
    return this.i2h_1;
  };
  protoOf(NO_CALLBACK$1).w8 = function (result) {
    return Unit_instance;
  };
  protoOf(NO_CALLBACK$1).a9 = function (result) {
    return this.w8(result);
  };
  function ByteWriteChannel$flushAndClose$ref_0(p0) {
    KFunctionImpl.call(this, 1, 1, 17);
    this.u2g_1 = p0;
  }
  protoOf(ByteWriteChannel$flushAndClose$ref_0).v2g = function ($completion) {
    return this.u2g_1.c29($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref_0).j9 = function ($completion) {
    return this.v2g($completion);
  };
  function writer$slambda($block, $channel, resultContinuation) {
    this.r2h_1 = $block;
    this.s2h_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(writer$slambda).a2i = function ($this$launch, $completion) {
    var tmp = this.b2i($this$launch, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(writer$slambda).k9 = function (p1, $completion) {
    return this.a2i((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(writer$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 14;
            this.w2h_1 = Job(get_job(this.t2h_1.l1k()));
            this.p8_1 = 1;
            continue $sm;
          case 1:
            this.q8_1 = 4;
            this.q8_1 = 3;
            this.p8_1 = 2;
            suspendResult = this.r2h_1(new WriterScope(this.s2h_1, this.t2h_1.l1k().ph(this.w2h_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w2h_1.e1r();
            var tmp_0;
            if (get_job(this.t2h_1.l1k()).h1l()) {
              this.s2h_1.d29(get_job(this.t2h_1.l1k()).k1l());
              tmp_0 = Unit_instance;
            }

            this.q8_1 = 14;
            this.p8_1 = 9;
            continue $sm;
          case 3:
            this.q8_1 = 4;
            var tmp_1 = this.s8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.s8_1;
              cancel(this.w2h_1, 'Exception thrown while writing to channel', cause);
              this.s2h_1.d29(cause);
              this.q8_1 = 14;
              this.p8_1 = 9;
              continue $sm;
            } else {
              throw this.s8_1;
            }

          case 4:
            this.q8_1 = 14;
            this.x2h_1 = this.s8_1;
            this.p8_1 = 5;
            suspendResult = this.w2h_1.r1l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.t2h_1;
            this.q8_1 = 7;
            this.z2h_1 = Companion_instance;
            this.p8_1 = 6;
            suspendResult = this.s2h_1.c29(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            this.z2h_1;
            tmp_2.y2h_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.q8_1 = 14;
            this.p8_1 = 8;
            continue $sm;
          case 7:
            this.q8_1 = 14;
            var tmp_3 = this.s8_1;
            if (tmp_3 instanceof Error) {
              var e = this.s8_1;
              var tmp_4 = this;
              tmp_4.y2h_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.p8_1 = 8;
              continue $sm;
            } else {
              throw this.s8_1;
            }

          case 8:
            this.q8_1 = 14;
            throw this.x2h_1;
          case 9:
            this.q8_1 = 14;
            this.p8_1 = 10;
            suspendResult = this.w2h_1.r1l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.t2h_1;
            this.q8_1 = 12;
            this.v2h_1 = Companion_instance;
            this.p8_1 = 11;
            suspendResult = this.s2h_1.c29(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var tmp_5 = this;
            this.v2h_1;
            tmp_5.u2h_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.q8_1 = 14;
            this.p8_1 = 13;
            continue $sm;
          case 12:
            this.q8_1 = 14;
            var tmp_6 = this.s8_1;
            if (tmp_6 instanceof Error) {
              var e_0 = this.s8_1;
              var tmp_7 = this;
              tmp_7.u2h_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
              this.p8_1 = 13;
              continue $sm;
            } else {
              throw this.s8_1;
            }

          case 13:
            this.q8_1 = 14;
            return Unit_instance;
          case 14:
            throw this.s8_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.q8_1 === 14) {
          throw e_1;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(writer$slambda).b2i = function ($this$launch, completion) {
    var i = new writer$slambda(this.r2h_1, this.s2h_1, completion);
    i.t2h_1 = $this$launch;
    return i;
  };
  function writer$slambda_0($block, $channel, resultContinuation) {
    var i = new writer$slambda($block, $channel, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.a2i($this$launch, $completion);
    }, 1);
  }
  function writer$lambda($channel) {
    return function (it) {
      var tmp;
      if (!(it == null) && !$channel.x28()) {
        $channel.d29(it);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function $writePacketCOROUTINE$(_this__u8e3s4, source, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g2h_1 = _this__u8e3s4;
    this.h2h_1 = source;
  }
  protoOf($writePacketCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 4;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.h2h_1.a1h()) {
              this.p8_1 = 3;
              continue $sm;
            }

            this.g2h_1.w28().n1i(this.h2h_1, get_remaining(this.h2h_1));
            this.p8_1 = 2;
            suspendResult = flushIfNeeded(this.g2h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.p8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 4) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_ByteWriteChannelOperations_kt_acrf6u;
  function _init_properties_ByteWriteChannelOperations_kt__i7slrs() {
    if (!properties_initialized_ByteWriteChannelOperations_kt_acrf6u) {
      properties_initialized_ByteWriteChannelOperations_kt_acrf6u = true;
      NO_CALLBACK = new NO_CALLBACK$1();
    }
  }
  function get_CLOSED() {
    _init_properties_CloseToken_kt__9ucr41();
    return CLOSED;
  }
  var CLOSED;
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function access$_get_origin__hdh1qz($this) {
    return $this.c2i_1;
  }
  function CloseToken(origin) {
    this.c2i_1 = origin;
  }
  var properties_initialized_CloseToken_kt_lgg8zn;
  function _init_properties_CloseToken_kt__9ucr41() {
    if (!properties_initialized_CloseToken_kt_lgg8zn) {
      properties_initialized_CloseToken_kt_lgg8zn = true;
      CLOSED = new CloseToken(null);
    }
  }
  function transferFromDelegate($this) {
    updateConsumed($this);
    var appended = $this.e2i_1.s1i($this.d2i_1.v28());
    $this.f2i_1 = add($this.f2i_1, appended);
  }
  function updateConsumed($this) {
    $this.g2i_1 = add($this.g2i_1, subtract($this.f2i_1, $this.e2i_1.e1()));
    $this.f2i_1 = $this.e2i_1.e1();
  }
  function $awaitContentCOROUTINE$_0(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p2i_1 = _this__u8e3s4;
    this.q2i_1 = min;
  }
  protoOf($awaitContentCOROUTINE$_0).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            if (this.p2i_1.v28().e1() >= fromInt(this.q2i_1)) {
              return true;
            }

            this.p8_1 = 1;
            suspendResult = this.p2i_1.d2i_1.a29(this.q2i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              transferFromDelegate(this.p2i_1);
              return true;
            } else {
              this.p8_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
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
  function CountedByteReadChannel(delegate) {
    this.d2i_1 = delegate;
    this.e2i_1 = new Buffer();
    this.f2i_1 = 0n;
    this.g2i_1 = 0n;
  }
  protoOf(CountedByteReadChannel).r2i = function () {
    updateConsumed(this);
    return this.g2i_1;
  };
  protoOf(CountedByteReadChannel).y28 = function () {
    return this.d2i_1.y28();
  };
  protoOf(CountedByteReadChannel).z28 = function () {
    return this.e2i_1.a1h() && this.d2i_1.z28();
  };
  protoOf(CountedByteReadChannel).v28 = function () {
    transferFromDelegate(this);
    return this.e2i_1;
  };
  protoOf(CountedByteReadChannel).a29 = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$_0(this, min, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(CountedByteReadChannel).d29 = function (cause) {
    this.d2i_1.d29(cause);
    this.e2i_1.f4();
  };
  function counted(_this__u8e3s4) {
    return new CountedByteReadChannel(_this__u8e3s4);
  }
  function readText(_this__u8e3s4) {
    return readString_0(_this__u8e3s4);
  }
  function ClosedByteChannelException(cause) {
    cause = cause === VOID ? null : cause;
    IOException_init_$Init$(cause == null ? null : cause.message, cause, this);
    captureStack(this, ClosedByteChannelException);
  }
  function ClosedReadChannelException(cause) {
    cause = cause === VOID ? null : cause;
    ClosedByteChannelException.call(this, cause);
    captureStack(this, ClosedReadChannelException);
  }
  function ClosedWriteChannelException(cause) {
    cause = cause === VOID ? null : cause;
    ClosedByteChannelException.call(this, cause);
    captureStack(this, ClosedWriteChannelException);
  }
  var LineEnding_Default_instance;
  var LineEnding_Lenient_instance;
  var LineEnding_entriesInitialized;
  function LineEnding_initEntries() {
    if (LineEnding_entriesInitialized)
      return Unit_instance;
    LineEnding_entriesInitialized = true;
    LineEnding_Default_instance = new LineEnding('Default', 0);
    LineEnding_Lenient_instance = new LineEnding('Lenient', 1);
  }
  function LineEnding(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LineEnding_Default_getInstance() {
    LineEnding_initEntries();
    return LineEnding_Default_instance;
  }
  function LineEnding_Lenient_getInstance() {
    LineEnding_initEntries();
    return LineEnding_Lenient_instance;
  }
  function _LineEndingMode___init__impl__jo5bul(mode) {
    return mode;
  }
  function _get_mode__dah3bc($this) {
    return $this;
  }
  function LineEndingMode__contains_impl_q5pr68($this, other) {
    return (_get_mode__dah3bc($this) | _get_mode__dah3bc(other)) === _get_mode__dah3bc($this);
  }
  function LineEndingMode__plus_impl_ttpz2j($this, other) {
    return _LineEndingMode___init__impl__jo5bul(_get_mode__dah3bc($this) | _get_mode__dah3bc(other));
  }
  function LineEndingMode__toString_impl_j4h76r($this) {
    var tmp;
    if ($this === Companion_getInstance_2().s2i_1) {
      tmp = 'CR';
    } else if ($this === Companion_getInstance_2().t2i_1) {
      tmp = 'LF';
    } else if ($this === Companion_getInstance_2().u2i_1) {
      tmp = 'CRLF';
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = Companion_getInstance_2().w2i_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var it = element.x2i_1;
        if (LineEndingMode__contains_impl_q5pr68($this, it)) {
          destination.b1(element);
        }
      }
      tmp = toString_1(destination);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.s2i_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.t2i_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.u2i_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.v2i_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.w2i_1 = listOf([new LineEndingMode(this.s2i_1), new LineEndingMode(this.t2i_1), new LineEndingMode(this.u2i_1)]);
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function LineEndingMode__hashCode_impl_2mopm4($this) {
    return $this;
  }
  function LineEndingMode__equals_impl_qyr4nk($this, other) {
    if (!(other instanceof LineEndingMode))
      return false;
    if (!($this === other.x2i_1))
      return false;
    return true;
  }
  function LineEndingMode(mode) {
    Companion_getInstance_2();
    this.x2i_1 = mode;
  }
  protoOf(LineEndingMode).toString = function () {
    return LineEndingMode__toString_impl_j4h76r(this.x2i_1);
  };
  protoOf(LineEndingMode).hashCode = function () {
    return LineEndingMode__hashCode_impl_2mopm4(this.x2i_1);
  };
  protoOf(LineEndingMode).equals = function (other) {
    return LineEndingMode__equals_impl_qyr4nk(this.x2i_1, other);
  };
  function SourceByteReadChannel(source) {
    this.y2i_1 = source;
    this.z2i_1 = null;
  }
  protoOf(SourceByteReadChannel).y28 = function () {
    var tmp0_safe_receiver = this.z2i_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp_0;
      if (tmp0_subject == null) {
        tmp_0 = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).n1r();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp_0 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp_0 = new ClosedByteChannelException(p0);
          }
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SourceByteReadChannel).z28 = function () {
    return this.y2i_1.a1h();
  };
  protoOf(SourceByteReadChannel).v28 = function () {
    var tmp0_safe_receiver = this.y28();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.y2i_1.z1g();
  };
  protoOf(SourceByteReadChannel).a29 = function (min, $completion) {
    var tmp0_safe_receiver = this.y28();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.y2i_1.c1h(fromInt(min));
  };
  protoOf(SourceByteReadChannel).d29 = function (cause) {
    if (!(this.z2i_1 == null))
      return Unit_instance;
    this.y2i_1.f4();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.z2i_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  };
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? 2147483647 : max;
    var tmp0 = fromInt(max);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = input.z1g().e1();
    var tmp$ret$0 = tmp0 <= b ? tmp0 : b;
    // Inline function 'kotlin.text.buildString' call
    var capacity = convertToInt(tmp$ret$0);
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    decode_0(_this__u8e3s4, input, this_0, max);
    return this_0.toString();
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
    return builder;
  }
  function TooLongLineException(message) {
    MalformedInputException.call(this, message);
    captureStack(this, TooLongLineException);
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return Unit_instance;
    $l$loop: while (true) {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, destination);
      // Inline function 'kotlin.check' call
      if (!(rc >= 0)) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      start = start + rc | 0;
      if (start >= toIndex)
        break $l$loop;
    }
  }
  function canRead(_this__u8e3s4) {
    return !_this__u8e3s4.a1h();
  }
  function readBytes(_this__u8e3s4, count) {
    count = count === VOID ? convertToInt(_this__u8e3s4.e1()) : count;
    return readByteArray(_this__u8e3s4, count);
  }
  function BytePacketBuilder() {
    return new Buffer();
  }
  function writeFully_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    _this__u8e3s4.j1i(buffer, offset, offset + length | 0);
  }
  function build(_this__u8e3s4) {
    return _this__u8e3s4.z1g();
  }
  function get_size(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.z1g().e1());
  }
  var ByteReadPacketEmpty;
  function ByteReadPacket(array, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? array.length : length;
    _init_properties_ByteReadPacket_kt__28475y();
    // Inline function 'kotlin.apply' call
    var this_0 = new Buffer();
    this_0.j1i(array, offset, offset + length | 0);
    return this_0;
  }
  function get_remaining(_this__u8e3s4) {
    _init_properties_ByteReadPacket_kt__28475y();
    return _this__u8e3s4.z1g().e1();
  }
  function takeWhile(_this__u8e3s4, block) {
    _init_properties_ByteReadPacket_kt__28475y();
    while (!_this__u8e3s4.a1h() && block(_this__u8e3s4.z1g())) {
    }
  }
  function discard_0(_this__u8e3s4, count) {
    count = count === VOID ? 9223372036854775807n : count;
    _init_properties_ByteReadPacket_kt__28475y();
    _this__u8e3s4.c1h(count);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4);
    var countToDiscard = count <= b ? count : b;
    _this__u8e3s4.z1g().x1h(countToDiscard);
    return countToDiscard;
  }
  var properties_initialized_ByteReadPacket_kt_hw4st4;
  function _init_properties_ByteReadPacket_kt__28475y() {
    if (!properties_initialized_ByteReadPacket_kt_hw4st4) {
      properties_initialized_ByteReadPacket_kt_hw4st4 = true;
      ByteReadPacketEmpty = new Buffer();
    }
  }
  function readAvailable_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var result = _this__u8e3s4.y1h(buffer, offset, offset + length | 0);
    return result === -1 ? 0 : result;
  }
  function toByteArray_0(_this__u8e3s4, charset) {
    charset = charset === VOID ? Charsets_getInstance().a2j_1 : charset;
    if (charset.equals(Charsets_getInstance().a2j_1))
      return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
    return encodeToByteArray_0(charset.d2j(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function readText_0(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().a2j_1 : charset;
    max = max === VOID ? 2147483647 : max;
    if (charset.equals(Charsets_getInstance().a2j_1)) {
      if (max === 2147483647)
        return readString_0(_this__u8e3s4);
      var tmp0 = _this__u8e3s4.z1g().e1();
      // Inline function 'kotlin.math.min' call
      var b = fromInt(max);
      var count = tmp0 <= b ? tmp0 : b;
      return readString(_this__u8e3s4, count);
    }
    return decode(charset.e2j(), _this__u8e3s4, max);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().a2j_1 : charset;
    if (charset === Charsets_getInstance().a2j_1) {
      return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
    }
    encodeToImpl(charset.d2j(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).i2j = function () {
    return new Int8Array(4096);
  };
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function _init_properties_ByteArrayPool_kt__kfi3uj() {
    if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function ObjectPool() {
  }
  function NoPoolImpl() {
  }
  protoOf(NoPoolImpl).q2j = function (instance) {
    return Unit_instance;
  };
  protoOf(NoPoolImpl).x1n = function () {
    return Unit_instance;
  };
  function MalformedInputException(message) {
    IOException_init_$Init$_0(message, this);
    captureStack(this, MalformedInputException);
  }
  function Companion_3() {
  }
  protoOf(Companion_3).r2j = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().a2j_1;
    }
    var tmp;
    var tmp_0;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_0 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        var it = replace_0(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_1;
        if (it === 'iso-8859-1') {
          tmp_1 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_1 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_0 = tmp_1;
        break;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'latin1' || name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().b2j_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function Charset(_name) {
    this.c2j_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.c2j_1 === other.c2j_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.c2j_1);
  };
  protoOf(Charset).toString = function () {
    return this.c2j_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.c2j_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.a2j_1 = new CharsetImpl('UTF-8');
    this.b2j_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function CharsetDecoder(_charset) {
    this.s2j_1 = _charset;
  }
  function forName(_this__u8e3s4, name) {
    return Companion_instance_4.r2j(name);
  }
  function CharsetEncoder(_charset) {
    this.t2j_1 = _charset;
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    var tmp0 = input.z1g().e1();
    // Inline function 'kotlin.comparisons.minOf' call
    var b = fromInt(max);
    var count = tmp0 <= b ? tmp0 : b;
    var array = readByteArray(input, convertToInt(count));
    var tmp;
    try {
      // Inline function 'org.khronos.webgl.toInt8Array' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = decoder.u2j(array);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        var tmp0_elvis_lhs = cause.message;
        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
      } else {
        throw $p;
      }
    }
    var result = tmp;
    dst.c1(result);
    return result.length;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(fromIndex <= toIndex)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().b2j_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().a2j_1)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString_1(message_0));
    }
    var encoder = new TextEncoder();
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
    var result = encoder.encode(tmp$ret$5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    dst.m1i(result);
    return result.length;
  }
  function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
  }
  protoOf(CharsetImpl).d2j = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).e2j = function () {
    return new CharsetDecoderImpl(this);
  };
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.s2j_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.t2j_1;
  }
  function encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var start = fromIndex;
    if (start >= toIndex)
      return new Int8Array(0);
    var dst = new Buffer();
    var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, dst);
    start = start + rc | 0;
    if (start === toIndex) {
      return readByteArray_0(dst);
    }
    encodeToImpl(_this__u8e3s4, dst, input, start, toIndex);
    return readByteArray_0(dst);
  }
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.x2j_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.x2j_1.toString() + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.x2j_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.x2j_1.equals(other.x2j_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.z2j_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.z2j_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.z2j_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.z2j_1.equals(other.z2j_1))
      return false;
    return true;
  };
  function Decoder(encoding, fatal) {
    fatal = fatal === VOID ? true : fatal;
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    fatal = fatal === VOID ? false : fatal;
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.with' call
    this_0.fatal = fatal;
    return this_0;
  }
  function toKtor$1($this_toKtor) {
    this.a2k_1 = $this_toKtor;
  }
  protoOf(toKtor$1).u2j = function (buffer) {
    return this.a2k_1.decode(buffer);
  };
  function get_ENCODING_ALIASES() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.b2k_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().j2(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
  }
  protoOf(TextDecoderFallback).u2j = function (buffer) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
    var inductionVariable = 0;
    var last = bytes.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var byte = bytes[index];
        var point = toCodePoint(byte);
        if (point < 0) {
          // Inline function 'kotlin.check' call
          if (!!this.b2k_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException_init_$Create$(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.t1i(toByte(point >> 8));
        }
        builder.t1i(toByte(point & 255));
      }
       while (inductionVariable < last);
    return decodeToString_0(readByteArray_0(builder));
  };
  function toCodePoint(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_js_kt_6rekzk;
  function _init_properties_TextDecoderFallback_js_kt__an7r6m() {
    if (!properties_initialized_TextDecoderFallback_js_kt_6rekzk) {
      properties_initialized_TextDecoderFallback_js_kt_6rekzk = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      // Inline function 'kotlin.byteArrayOf' call
      REPLACEMENT = new Int8Array([-17, -65, -67]);
    }
  }
  function get_DEVELOPMENT_MODE() {
    return false;
  }
  function ioDispatcher() {
    return Dispatchers_getInstance().b1v_1;
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(input, index);
        var character = Char__toInt_impl_vasixd(this_0);
        if (character > 255) {
          failedToMapError(character);
        }
        dst.t1i(toByte(character));
      }
       while (inductionVariable < toIndex);
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function get_WIN1252_TABLE() {
    _init_properties_Win1252Table_kt__tl0v64();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function _init_properties_Win1252Table_kt__tl0v64() {
    if (!properties_initialized_Win1252Table_kt_pkmjoq) {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      // Inline function 'kotlin.intArrayOf' call
      WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
    }
  }
  function DefaultPool(capacity) {
    this.j2j_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.j2j_1;
    tmp.k2j_1 = Array(size);
    this.l2j_1 = 0;
  }
  protoOf(DefaultPool).m2j = function (instance) {
  };
  protoOf(DefaultPool).n2j = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).o2j = function (instance) {
  };
  protoOf(DefaultPool).p2j = function () {
    if (this.l2j_1 === 0)
      return this.i2j();
    this.l2j_1 = this.l2j_1 - 1 | 0;
    var idx = this.l2j_1;
    var tmp = this.k2j_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.k2j_1[idx] = null;
    return this.n2j(instance);
  };
  protoOf(DefaultPool).q2j = function (instance) {
    this.o2j(instance);
    if (this.l2j_1 === this.j2j_1) {
      this.m2j(instance);
    } else {
      var _unary__edvuaz = this.l2j_1;
      this.l2j_1 = _unary__edvuaz + 1 | 0;
      this.k2j_1[_unary__edvuaz] = instance;
    }
  };
  protoOf(DefaultPool).x1n = function () {
    var inductionVariable = 0;
    var last = this.l2j_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.k2j_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.k2j_1[i] = null;
        this.m2j(instance);
      }
       while (inductionVariable < last);
    this.l2j_1 = 0;
  };
  //region block: post-declaration
  protoOf(Read).v26 = resume;
  protoOf(Read).w26 = resume_0;
  protoOf(Write).v26 = resume;
  protoOf(Write).w26 = resume_0;
  protoOf(ByteChannel).b29 = awaitContent$default;
  protoOf(ByteReadChannel$Companion$Empty$1).b29 = awaitContent$default;
  protoOf(CountedByteReadChannel).b29 = awaitContent$default;
  protoOf(SourceByteReadChannel).b29 = awaitContent$default;
  protoOf(DefaultPool).f4 = close;
  protoOf(NoPoolImpl).f4 = close;
  //endregion
  //region block: init
  Empty_instance = new Empty();
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LineEndingMode__plus_impl_ttpz2j;
  _.$_$.b = Charsets_getInstance;
  _.$_$.c = Companion_getInstance_0;
  _.$_$.d = Companion_getInstance_2;
  _.$_$.e = copyTo;
  _.$_$.f = copyTo_0;
  _.$_$.g = readAvailable;
  _.$_$.h = readLineStrictTo;
  _.$_$.i = readPacket;
  _.$_$.j = readRemaining;
  _.$_$.k = readUntil;
  _.$_$.l = skipIfFound;
  _.$_$.m = toByteArray;
  _.$_$.n = writeFully;
  _.$_$.o = writePacket;
  _.$_$.p = MalformedInputException;
  _.$_$.q = decode;
  _.$_$.r = encode;
  _.$_$.s = forName;
  _.$_$.t = get_name;
  _.$_$.u = BytePacketBuilder;
  _.$_$.v = ByteReadPacket;
  _.$_$.w = build;
  _.$_$.x = canRead;
  _.$_$.y = readText_0;
  _.$_$.z = get_remaining;
  _.$_$.a1 = get_size;
  _.$_$.b1 = takeWhile;
  _.$_$.c1 = toByteArray_0;
  _.$_$.d1 = writeFully_0;
  _.$_$.e1 = writeText;
  _.$_$.f1 = get_ByteArrayPool;
  _.$_$.g1 = DefaultPool;
  _.$_$.h1 = NoPoolImpl;
  _.$_$.i1 = ByteChannel;
  _.$_$.j1 = ByteReadChannel;
  _.$_$.k1 = ByteReadChannel_1;
  _.$_$.l1 = ClosedByteChannelException;
  _.$_$.m1 = WriterScope;
  _.$_$.n1 = attachWriterJob;
  _.$_$.o1 = cancel_0;
  _.$_$.p1 = close_0;
  _.$_$.q1 = counted;
  _.$_$.r1 = invokeOnCompletion;
  _.$_$.s1 = ioDispatcher;
  _.$_$.t1 = readText;
  _.$_$.u1 = rethrowCloseCauseIfNeeded;
  _.$_$.v1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io.js.map
