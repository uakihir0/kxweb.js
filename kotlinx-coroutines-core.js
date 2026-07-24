(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.s2;
  var protoOf = kotlin_kotlin.$_$.wb;
  var Continuation = kotlin_kotlin.$_$.a9;
  var initMetadataForClass = kotlin_kotlin.$_$.xa;
  var VOID = kotlin_kotlin.$_$.d;
  var EmptyCoroutineContext_instance = kotlin_kotlin.$_$.w1;
  var CoroutineImpl = kotlin_kotlin.$_$.g9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.za;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.q8;
  var initMetadataForInterface = kotlin_kotlin.$_$.bb;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.z4;
  var toString = kotlin_kotlin.$_$.zb;
  var isInterface = kotlin_kotlin.$_$.mb;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n4;
  var toString_0 = kotlin_kotlin.$_$.bh;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.db;
  var hashCode = kotlin_kotlin.$_$.wa;
  var equals = kotlin_kotlin.$_$.qa;
  var Companion_instance = kotlin_kotlin.$_$.n2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.qg;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.r3;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.q;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.s;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.w8;
  var Key_instance = kotlin_kotlin.$_$.v1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.v8;
  var get = kotlin_kotlin.$_$.x8;
  var minusKey = kotlin_kotlin.$_$.y8;
  var ContinuationInterceptor = kotlin_kotlin.$_$.z8;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.x4;
  var addSuppressed = kotlin_kotlin.$_$.mg;
  var getStringHashCode = kotlin_kotlin.$_$.va;
  var Enum = kotlin_kotlin.$_$.qf;
  var startCoroutine = kotlin_kotlin.$_$.h9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yg;
  var intercepted = kotlin_kotlin.$_$.r8;
  var Duration__isPositive_impl_tvkkt2 = kotlin_kotlin.$_$.f;
  var Companion_getInstance = kotlin_kotlin.$_$.i2;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.v2;
  var toDuration = kotlin_kotlin.$_$.hf;
  var Duration__plus_impl_yu9v8f = kotlin_kotlin.$_$.g;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.e;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.b3;
  var add = kotlin_kotlin.$_$.m9;
  var subtract = kotlin_kotlin.$_$.ba;
  var RuntimeException = kotlin_kotlin.$_$.yf;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.w4;
  var captureStack = kotlin_kotlin.$_$.ga;
  var Error_0 = kotlin_kotlin.$_$.rf;
  var Error_init_$Init$ = kotlin_kotlin.$_$.z3;
  var Element = kotlin_kotlin.$_$.e9;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.k9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.c3;
  var CancellationException = kotlin_kotlin.$_$.n8;
  var ArrayList = kotlin_kotlin.$_$.c5;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.p4;
  var plus = kotlin_kotlin.$_$.f9;
  var get_0 = kotlin_kotlin.$_$.c9;
  var fold = kotlin_kotlin.$_$.b9;
  var minusKey_0 = kotlin_kotlin.$_$.d9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.y3;
  var anyToString = kotlin_kotlin.$_$.ea;
  var constructCallableReference = kotlin_kotlin.$_$.oa;
  var UnsupportedOperationException = kotlin_kotlin.$_$.lg;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.q3;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.u2;
  var charSequenceLength = kotlin_kotlin.$_$.la;
  var charCodeAt = kotlin_kotlin.$_$.ja;
  var toString_1 = kotlin_kotlin.$_$.o;
  var substring = kotlin_kotlin.$_$.le;
  var returnIfSuspended = kotlin_kotlin.$_$.a3;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var fromInt = kotlin_kotlin.$_$.r9;
  var multiply = kotlin_kotlin.$_$.v9;
  var divide = kotlin_kotlin.$_$.q9;
  var modulo = kotlin_kotlin.$_$.u9;
  var convertToInt = kotlin_kotlin.$_$.o9;
  var shiftRight = kotlin_kotlin.$_$.aa;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j4;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.i7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.d3;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.r4;
  var compareTo = kotlin_kotlin.$_$.na;
  var last = kotlin_kotlin.$_$.vd;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var shiftLeft = kotlin_kotlin.$_$.y9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ya;
  var NoSuchElementException = kotlin_kotlin.$_$.vf;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.s4;
  var IllegalStateException = kotlin_kotlin.$_$.uf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.m4;
  var getKClass = kotlin_kotlin.$_$.qc;
  var Unit = kotlin_kotlin.$_$.kg;
  var Exception = kotlin_kotlin.$_$.sf;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.f4;
  var defineProp = kotlin_kotlin.$_$.pa;
  var toLongOrNull = kotlin_kotlin.$_$.ue;
  var createCoroutineUnintercepted_0 = kotlin_kotlin.$_$.p8;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.t8;
  var plus_0 = kotlin_kotlin.$_$.q7;
  var KtList = kotlin_kotlin.$_$.i5;
  var listOf_0 = kotlin_kotlin.$_$.h7;
  var getKClassFromExpression = kotlin_kotlin.$_$.pc;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.e4;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.t3;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.s3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.i3;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.v4;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o3;
  var stackTraceToString = kotlin_kotlin.$_$.ah;
  var removeFirstOrNull = kotlin_kotlin.$_$.s7;
  var KtMutableList = kotlin_kotlin.$_$.m5;
  var coerceIn = kotlin_kotlin.$_$.hc;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.u1l(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.u1l.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.o1l(onCancelling, invokeImmediately, handler) : $super.o1l.call(this, onCancelling, invokeImmediately, handler);
  }
  initMetadataForInterface(Job, 'Job', VOID, VOID, [Element], [0]);
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Job, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [Job, Continuation, CoroutineScope], [0]);
  initMetadataForCoroutine($awaitCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DeferredCoroutine, 'DeferredCoroutine', VOID, AbstractCoroutine, [Job], [0]);
  initMetadataForClass(LazyDeferredCoroutine, 'LazyDeferredCoroutine', VOID, DeferredCoroutine, VOID, [0]);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForInterface(CancelHandler, 'CancelHandler', VOID, VOID, [NotCompleted]);
  initMetadataForClass(DisposeOnCancel, 'DisposeOnCancel', VOID, VOID, [CancelHandler]);
  initMetadataForClass(UserSupplied, 'UserSupplied', VOID, VOID, [CancelHandler]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForInterface(Waiter, 'Waiter');
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [CancellableContinuation, Waiter]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode', LockFreeLinkedListNode);
  initMetadataForInterface(DisposableHandle, 'DisposableHandle');
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(JobNode, 'JobNode', VOID, LockFreeLinkedListNode, [DisposableHandle, Incomplete]);
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobNode);
  initMetadataForCoroutine($awaitCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(CompletableDeferredImpl, 'CompletableDeferredImpl', VOID, JobSupport, [Job], [0]);
  initMetadataForInterface(CompletableJob, 'CompletableJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForObject(Key_1, 'Key');
  initMetadataForClass(CoroutineName, 'CoroutineName', VOID, AbstractCoroutineContextElement);
  initMetadataForObject(GlobalScope, 'GlobalScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  initMetadataForInterface(CopyableThrowable, 'CopyableThrowable');
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().p1r(timeMillis, block, context);
  }
  initMetadataForInterface(Delay, 'Delay', VOID, VOID, VOID, [1]);
  initMetadataForInterface(DelayWithTimeoutDiagnostics, 'DelayWithTimeoutDiagnostics', VOID, VOID, [Delay], [1]);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [DisposableHandle]);
  initMetadataForClass(DisposeOnCompletion, 'DisposeOnCompletion', VOID, JobNode);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForClass(AwaitContinuation, 'AwaitContinuation', VOID, CancellableContinuationImpl);
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [CompletableJob], [0]);
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(LockFreeLinkedListHead, 'LockFreeLinkedListHead', LockFreeLinkedListHead, LockFreeLinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LockFreeLinkedListHead, [Incomplete]);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobNode);
  initMetadataForClass(ResumeOnCompletion, 'ResumeOnCompletion', VOID, JobNode);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobNode, [DisposableHandle]);
  initMetadataForClass(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', VOID, JobNode);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException, [CopyableThrowable]);
  initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(TimeoutCoroutine, 'TimeoutCoroutine', VOID, ScopeCoroutine, [Runnable], [0]);
  initMetadataForCoroutine($withTimeoutOrNullCOROUTINE$, CoroutineImpl);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForObject(Key_3, 'Key');
  initMetadataForClass(BufferOverflow, 'BufferOverflow', VOID, Enum);
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [NotCompleted]);
  initMetadataForClass(ChannelSegment, 'ChannelSegment', VOID, Segment);
  initMetadataForCoroutine($hasNextCOROUTINE$, CoroutineImpl);
  initMetadataForClass(SendBroadcast, 'SendBroadcast', VOID, VOID, [Waiter]);
  initMetadataForClass(BufferedChannelIterator, 'BufferedChannelIterator', VOID, VOID, [Waiter], [0, 3]);
  initMetadataForCoroutine($sendCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($receiveCOROUTINE$, CoroutineImpl);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.u1l(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.u1l.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(ReceiveChannel, 'ReceiveChannel', VOID, VOID, VOID, [0]);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.p21(cause) : $super.p21.call(this, cause);
  }
  initMetadataForInterface(SendChannel, 'SendChannel', VOID, VOID, VOID, [1]);
  initMetadataForClass(BufferedChannel, 'BufferedChannel', VOID, VOID, [ReceiveChannel, SendChannel], [1, 4, 0, 3]);
  initMetadataForClass(WaiterEB, 'WaiterEB');
  initMetadataForClass(ReceiveCatching, 'ReceiveCatching', VOID, VOID, [Waiter]);
  initMetadataForObject(Factory, 'Factory');
  initMetadataForClass(Failed, 'Failed', Failed);
  initMetadataForClass(Closed, 'Closed', VOID, Failed);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ChannelResult, 'ChannelResult');
  initMetadataForClass(ClosedReceiveChannelException, 'ClosedReceiveChannelException', VOID, NoSuchElementException);
  initMetadataForClass(ClosedSendChannelException, 'ClosedSendChannelException', VOID, IllegalStateException);
  initMetadataForClass(ChannelCoroutine, 'ChannelCoroutine', VOID, AbstractCoroutine, [ReceiveChannel, SendChannel], [1, 0]);
  initMetadataForClass(ConflatedBufferedChannel, 'ConflatedBufferedChannel', VOID, BufferedChannel, VOID, [1, 0]);
  initMetadataForInterface(ProducerScope, 'ProducerScope', VOID, VOID, [CoroutineScope, SendChannel], [1]);
  initMetadataForClass(ProducerCoroutine, 'ProducerCoroutine', VOID, ChannelCoroutine, [ProducerScope], [1, 0]);
  initMetadataForClass(SegmentOrClosed, 'SegmentOrClosed');
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [Continuation]);
  initMetadataForClass(DispatchException, 'DispatchException', VOID, Exception);
  initMetadataForClass(UndeliveredElementException, 'UndeliveredElementException', VOID, RuntimeException);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForInterface(SelectInstance, 'SelectInstance');
  initMetadataForClass(ClauseData, 'ClauseData', VOID, VOID, VOID, [1]);
  initMetadataForClass(SelectImplementation, 'SelectImplementation', VOID, VOID, [CancelHandler, SelectInstance, Waiter], [0, 2]);
  initMetadataForClass(TrySelectDetailedResult, 'TrySelectDetailedResult', VOID, Enum);
  initMetadataForClass(CancellableContinuationWithOwner, 'CancellableContinuationWithOwner', VOID, VOID, [CancellableContinuation, Waiter]);
  initMetadataForClass(SemaphoreAndMutexImpl, 'SemaphoreAndMutexImpl', VOID, VOID, VOID, [0]);
  initMetadataForClass(MutexImpl, 'MutexImpl', VOID, SemaphoreAndMutexImpl, VOID, [1, 0]);
  initMetadataForClass(SemaphoreSegment, 'SemaphoreSegment', VOID, Segment);
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, [Delay], [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForClass(ListClosed, 'ListClosed', VOID, LockFreeLinkedListNode);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(ClearTimeout, 'ClearTimeout', VOID, VOID, [CancelHandler, DisposableHandle]);
  initMetadataForClass(WindowClearTimeout, 'WindowClearTimeout', VOID, ClearTimeout);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, [Delay], [1]);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.h1k(parentContext.c9(Key_instance_3));
    }
    this.k1k_1 = parentContext.ph(this);
  }
  protoOf(AbstractCoroutine).v8 = function () {
    return this.k1k_1;
  };
  protoOf(AbstractCoroutine).l1k = function () {
    return this.k1k_1;
  };
  protoOf(AbstractCoroutine).m1k = function () {
    return protoOf(JobSupport).m1k.call(this);
  };
  protoOf(AbstractCoroutine).n1k = function (value) {
  };
  protoOf(AbstractCoroutine).o1k = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).p1k = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).q1k = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.o1k(state.r1k_1, state.t1k());
    } else {
      this.n1k(state);
    }
  };
  protoOf(AbstractCoroutine).a9 = function (result) {
    var state = this.u1k(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.v1k(state);
  };
  protoOf(AbstractCoroutine).v1k = function (state) {
    return this.w1k(state);
  };
  protoOf(AbstractCoroutine).x1k = function (exception) {
    handleCoroutineException(this.k1k_1, exception);
  };
  protoOf(AbstractCoroutine).y1k = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.k1k_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).y1k.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).y1k.call(this);
  };
  protoOf(AbstractCoroutine).z1k = function (start, receiver, block) {
    start.c1l(block, receiver, this);
  };
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_instance : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.k1m() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.z1k(start, coroutine, block);
    return coroutine;
  }
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_instance : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.k1m() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.z1k(start, coroutine, block);
    return coroutine;
  }
  function $awaitCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1m_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            this.p8_1 = 1;
            suspendResult = this.t1m_1.j1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).x1m = function ($completion) {
    var tmp = new $awaitCOROUTINE$(this, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.b1n_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).j1l = function () {
    startCoroutineCancellable_1(this.b1n_1, this);
  };
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).h1m = function (exception) {
    handleCoroutineException(this.k1k_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.i1n_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).j1l = function () {
    startCoroutineCancellable_1(this.i1n_1, this);
  };
  function CancellableContinuation() {
  }
  function invokeOnCancellation(_this__u8e3s4, handler) {
    var tmp;
    if (_this__u8e3s4 instanceof CancellableContinuationImpl) {
      _this__u8e3s4.u1n(handler);
      tmp = Unit_instance;
    } else {
      throw UnsupportedOperationException_init_$Create$('third-party implementation of CancellableContinuation is not supported');
    }
    return tmp;
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    return invokeOnCancellation(_this__u8e3s4, new DisposeOnCancel(handle));
  }
  function DisposeOnCancel(handle) {
    this.v1n_1 = handle;
  }
  protoOf(DisposeOnCancel).w1n = function (cause) {
    return this.v1n_1.x1n();
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + toString(this.v1n_1) + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 1);
    }
    var tmp0_safe_receiver = delegate.e1o();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver.f1o()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, 2);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function UserSupplied(handler) {
    this.g1o_1 = handler;
  }
  protoOf(UserSupplied).w1n = function (cause) {
    this.g1o_1(cause);
  };
  protoOf(UserSupplied).toString = function () {
    return 'CancelHandler.UserSupplied[' + get_classSimpleName(this.g1o_1) + '@' + get_hexAddress(this) + ']';
  };
  function CancelHandler() {
  }
  function _get_parentHandle__f8dcex($this) {
    return $this.t1n_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.f1l();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.i1o_1)) {
      var tmp_0 = $this.p1n_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).h1o();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.p1n_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.j1o(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.r1n_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    if (!!(index === 536870911)) {
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      segment.o1o(index, cause, $this.v8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.v8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.r1n_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$4 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.r1n_1.atomicfu$compareAndSet(cur, tmp$ret$4))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.r1n_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$4 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.r1n_1.atomicfu$compareAndSet(cur, tmp$ret$4))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.v8().c9(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, VOID, new ChildContinuation($this));
    $this.t1n_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.s1n_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.s1n_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (!(state == null) ? isInterface(state, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.x1o()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.r1k_1;
              if (isInterface(handler, CancelHandler)) {
                $this.u1o(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.q1o_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.v1o()) {
                $this.u1o(handler, state.t1o_1);
                return Unit_instance;
              }
              var update = state.w1o(VOID, handler);
              if ($this.s1n_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.s1n_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = isInterface(state, CancelHandler);
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, isInterface(state, CancelHandler) ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.s1n_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState($this, tmp0, proposedUpdate, $this.i1o_1, onCancellation, idempotent);
          if (!$this.s1n_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonReusable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0 instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) && tmp0.s1o_1 === idempotent) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonReusable($this) {
    if (!isReusable($this)) {
      $this.y1o();
    }
  }
  function CancellableContinuationImpl$resume$lambda($onCancellation) {
    return function (cause, _unused_var__etf5q3, _unused_var__etf5q3_0) {
      $onCancellation(cause);
      return Unit_instance;
    };
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.p1n_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.q1n_1 = this.p1n_1.v8();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$1 = (0 << 29) + 536870911 | 0;
    tmp.r1n_1 = atomic$int$1(tmp$ret$1);
    this.s1n_1 = atomic$ref$1(Active_instance);
    this.t1n_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).z1o = function () {
    return this.p1n_1;
  };
  protoOf(CancellableContinuationImpl).v8 = function () {
    return this.q1n_1;
  };
  protoOf(CancellableContinuationImpl).f1l = function () {
    return this.s1n_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).g1l = function () {
    var tmp = this.f1l();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).h1l = function () {
    var tmp = this.f1l();
    return tmp instanceof CancelledContinuation;
  };
  protoOf(CancellableContinuationImpl).a1p = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.g1l()) {
      handle.x1n();
      this.t1n_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).f1o = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.s1n_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.s1o_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.y1o();
      return false;
    }
    var tmp_0 = this.r1n_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << 29) + 536870911 | 0;
    this.s1n_1.kotlinx$atomicfu$value = Active_instance;
    return true;
  };
  protoOf(CancellableContinuationImpl).b1p = function () {
    return this.f1l();
  };
  protoOf(CancellableContinuationImpl).c1p = function (takenState, cause) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.s1n_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            if (!!state.v1o()) {
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.w1o(VOID, VOID, VOID, VOID, cause);
            if (this.s1n_1.atomicfu$compareAndSet(state, update)) {
              state.d1p(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.s1n_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(CancellableContinuationImpl).e1p = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.s1n_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false))
          return false;
        var tmp;
        if (isInterface(tmp0, CancelHandler)) {
          tmp = true;
        } else {
          tmp = tmp0 instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.s1n_1.atomicfu$compareAndSet(tmp0, update)) {
          break $l$block;
        }
        if (isInterface(tmp0, CancelHandler)) {
          this.u1o(tmp0, cause);
        } else {
          if (tmp0 instanceof Segment) {
            callSegmentOnCancellation(this, tmp0, cause);
          }
        }
        detachChildIfNonReusable(this);
        dispatchResume(this, this.i1o_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).f1p = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.e1p(cause);
    detachChildIfNonReusable(this);
  };
  protoOf(CancellableContinuationImpl).u1o = function (handler, cause) {
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      handler.w1n(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.v8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).g1p = function (onCancellation, cause, value) {
    try {
      onCancellation(cause, value, this.v8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.v8(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).h1p = function (parent) {
    return parent.k1l();
  };
  protoOf(CancellableContinuationImpl).i1p = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.j1p();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.j1p();
    }
    var state = this.f1l();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.r1k_1, this);
    if (get_isCancellableMode(this.i1o_1)) {
      var job = this.v8().c9(Key_instance_3);
      if (!(job == null) && !job.m1k()) {
        var cause = job.k1l();
        this.c1p(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.k1p(state);
  };
  protoOf(CancellableContinuationImpl).j1p = function () {
    var tmp = this.p1n_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1p(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.y1o();
    this.e1p(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).a9 = function (result) {
    return this.m1p(toState(result, this), this.i1o_1);
  };
  protoOf(CancellableContinuationImpl).n1p = function (value, onCancellation) {
    var tmp = this.i1o_1;
    var tmp_0;
    if (onCancellation == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = CancellableContinuationImpl$resume$lambda(onCancellation);
    }
    return this.o1p(value, tmp, tmp_0);
  };
  protoOf(CancellableContinuationImpl).n1n = function (value, onCancellation) {
    return this.o1p(value, this.i1o_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).p1p = function (segment, index) {
    var tmp0 = this.r1n_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.index' call
        // Inline function 'kotlin.check' call
        if (!((cur & 536870911) === 536870911)) {
          var message = 'invokeOnCancellation should be called at most once';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlinx.coroutines.decision' call
        // Inline function 'kotlinx.coroutines.decisionAndIndex' call
        var upd = (cur >> 29 << 29) + index | 0;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    invokeOnCancellationImpl(this, segment);
  };
  protoOf(CancellableContinuationImpl).l1n = function (handler) {
    return invokeOnCancellation(this, new UserSupplied(handler));
  };
  protoOf(CancellableContinuationImpl).u1n = function (handler) {
    return invokeOnCancellationImpl(this, handler);
  };
  protoOf(CancellableContinuationImpl).o1p = function (proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.s1n_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState(this, tmp0, proposedUpdate, resumeMode, onCancellation, null);
          if (!this.s1n_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonReusable(this);
          dispatchResume(this, resumeMode);
          return Unit_instance;
        } else {
          if (tmp0 instanceof CancelledContinuation) {
            if (tmp0.t1p()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                this.g1p(onCancellation, tmp0.r1k_1, proposedUpdate);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError(this, proposedUpdate);
      }
    }
  };
  protoOf(CancellableContinuationImpl).m1p = function (proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    if ($super === VOID) {
      this.o1p(proposedUpdate, resumeMode, onCancellation);
      tmp = Unit_instance;
    } else {
      tmp = $super.o1p.call(this, proposedUpdate, resumeMode, onCancellation);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).y1o = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.x1n();
    this.t1n_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).j1n = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).k1n = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.i1o_1);
  };
  protoOf(CancellableContinuationImpl).m1n = function (_this__u8e3s4, value) {
    var tmp = this.p1n_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.z1n_1) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.i1o_1;
    }
    this.m1p(value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).k1p = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = state.p1o_1;
    } else {
      tmp = state;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).u1p = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).u1p.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.p1n_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.v1p() + '(' + toDebugString(this.p1n_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).v1p = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.p1o_1 = result;
    this.q1o_1 = cancelHandler;
    this.r1o_1 = onCancellation;
    this.s1o_1 = idempotentResume;
    this.t1o_1 = cancelCause;
  }
  protoOf(CompletedContinuation).v1o = function () {
    return !(this.t1o_1 == null);
  };
  protoOf(CompletedContinuation).d1p = function (cont, cause) {
    var tmp0_safe_receiver = this.q1o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.u1o(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.r1o_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.g1p(tmp1_safe_receiver, cause, this.p1o_1);
    }
  };
  protoOf(CompletedContinuation).y1p = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).w1o = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.p1o_1 : result;
    cancelHandler = cancelHandler === VOID ? this.q1o_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.r1o_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.s1o_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.t1o_1 : cancelCause;
    return $super === VOID ? this.y1p(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.y1p.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.p1o_1) + ', cancelHandler=' + toString_0(this.q1o_1) + ', onCancellation=' + toString_0(this.r1o_1) + ', idempotentResume=' + toString_0(this.s1o_1) + ', cancelCause=' + toString_0(this.t1o_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.p1o_1 == null ? 0 : hashCode(this.p1o_1);
    result = imul(result, 31) + (this.q1o_1 == null ? 0 : hashCode(this.q1o_1)) | 0;
    result = imul(result, 31) + (this.r1o_1 == null ? 0 : hashCode(this.r1o_1)) | 0;
    result = imul(result, 31) + (this.s1o_1 == null ? 0 : hashCode(this.s1o_1)) | 0;
    result = imul(result, 31) + (this.t1o_1 == null ? 0 : hashCode(this.t1o_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    if (!equals(this.p1o_1, other.p1o_1))
      return false;
    if (!equals(this.q1o_1, other.q1o_1))
      return false;
    if (!equals(this.r1o_1, other.r1o_1))
      return false;
    if (!equals(this.s1o_1, other.s1o_1))
      return false;
    if (!equals(this.t1o_1, other.t1o_1))
      return false;
    return true;
  };
  function ChildContinuation(child) {
    JobNode.call(this);
    this.d1q_1 = child;
  }
  protoOf(ChildContinuation).e1q = function () {
    return true;
  };
  protoOf(ChildContinuation).w1n = function (cause) {
    this.d1q_1.f1p(this.d1q_1.h1p(this.j1q()));
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$_0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z1q_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$_0).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            this.p8_1 = 1;
            suspendResult = this.z1q_1.j1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.h1k(parent);
  }
  protoOf(CompletableDeferredImpl).t1l = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).x1m = function ($completion) {
    var tmp = new $awaitCOROUTINE$_0(this, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(CompletableDeferredImpl).c1r = function (value) {
    return this.c1m(value);
  };
  protoOf(CompletableDeferredImpl).d1r = function (exception) {
    return this.c1m(new CompletedExceptionally(exception));
  };
  function CompletableJob() {
  }
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.r1k_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      tmp = _Result___init__impl__xyqfz8(state);
    }
    return tmp;
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.r1k_1 = cause;
    this.s1k_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).t1k = function () {
    return this.s1k_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).x1o = function () {
    return this.s1k_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.r1k_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.s1p_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).t1p = function () {
    return this.s1p_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      tmp = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
    } else {
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      tmp = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
    } else {
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).g1r = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).d9 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).e9 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.i1r();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handleCoroutineException(context, exception) {
    var tmp;
    if (exception instanceof DispatchException) {
      tmp = exception.j1r_1;
    } else {
      tmp = exception;
    }
    var reportException = tmp;
    try {
      var tmp0_safe_receiver = context.c9(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp0_safe_receiver.k1r(context, reportException);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(reportException, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, reportException);
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function CoroutineName(name) {
    AbstractCoroutineContextElement.call(this, Key_instance_2);
    this.m1r_1 = name;
  }
  protoOf(CoroutineName).toString = function () {
    return 'CoroutineName(' + this.m1r_1 + ')';
  };
  protoOf(CoroutineName).hashCode = function () {
    return getStringHashCode(this.m1r_1);
  };
  protoOf(CoroutineName).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    if (!(this.m1r_1 === other.m1r_1))
      return false;
    return true;
  };
  function CoroutineScope() {
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.l1k().c9(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Scope cannot be cancelled because it does not have a job: ' + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.u1l(cause);
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return cancel(_this__u8e3s4, CancellationException_0(message, cause));
  }
  function GlobalScope() {
  }
  protoOf(GlobalScope).l1k = function () {
    return EmptyCoroutineContext_instance;
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    return GlobalScope_instance;
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.c9(Key_instance_3) == null) ? context : context.ph(Job_0()));
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).c1l = function (block, receiver, completion) {
    var tmp;
    switch (this.a1_1) {
      case 0:
        startCoroutineCancellable_0(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).k1m = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function CopyableThrowable() {
  }
  function delay(timeMillis, $completion) {
    if (timeMillis <= 0n)
      return Unit_instance;
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.a1p();
    if (timeMillis < 9223372036854775807n) {
      get_delay(cancellable.v8()).o1r(timeMillis, cancellable);
    }
    return cancellable.i1p();
  }
  function delay_0(duration, $completion) {
    return delay(toDelayMillis(duration), $completion);
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.c9(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function toDelayMillis(_this__u8e3s4) {
    var tmp;
    switch (Duration__isPositive_impl_tvkkt2(_this__u8e3s4)) {
      case true:
        // Inline function 'kotlin.time.Companion.nanoseconds' call

        Companion_getInstance();
        var tmp$ret$0 = toDuration(999999n, DurationUnit_NANOSECONDS_getInstance());
        tmp = _Duration___get_inWholeMilliseconds__impl__msfiry(Duration__plus_impl_yu9v8f(_this__u8e3s4, tmp$ret$0));
        break;
      case false:
        tmp = 0n;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function DelayWithTimeoutDiagnostics() {
  }
  function delta($this, unconfined) {
    return unconfined ? 4294967296n : 1n;
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.s1r_1 = 0n;
    this.t1r_1 = false;
    this.u1r_1 = null;
  }
  protoOf(EventLoop).v1r = function () {
    var tmp0_elvis_lhs = this.u1r_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.pf();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.w1p();
    return true;
  };
  protoOf(EventLoop).w1r = function (task) {
    var tmp0_elvis_lhs = this.u1r_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      this.u1r_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.nf(task);
  };
  protoOf(EventLoop).x1r = function () {
    return this.s1r_1 >= delta(this, true);
  };
  protoOf(EventLoop).y1r = function () {
    var tmp0_safe_receiver = this.u1r_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).z1r = function (unconfined) {
    this.s1r_1 = add(this.s1r_1, delta(this, unconfined));
    if (!unconfined)
      this.t1r_1 = true;
  };
  protoOf(EventLoop).a1s = function (unconfined) {
    this.s1r_1 = subtract(this.s1r_1, delta(this, unconfined));
    if (this.s1r_1 > 0n)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.t1r_1) {
      this.b1s();
    }
  };
  protoOf(EventLoop).b1s = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.c1s_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).d1s = function () {
    var tmp0_elvis_lhs = this.c1s_1.f1s();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      ThreadLocalEventLoop_getInstance().c1s_1.g1s(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function DisposableHandle() {
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function Job() {
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.c9(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = "Current context doesn't contain Job in it: " + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.u1l(CancellationException_0(message, cause));
  }
  function cancel_2(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_safe_receiver = _this__u8e3s4.c9(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.u1l(cause);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, invokeImmediately, handler) {
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.q1l(invokeImmediately, handler);
    } else {
      var tmp_0 = handler.e1q();
      tmp = _this__u8e3s4.o1l(tmp_0, invokeImmediately, JobNode$invoke$ref(handler));
    }
    return tmp;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.c9(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).x1n = function () {
  };
  protoOf(NonDisposableHandle).y1l = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.m1k())
      throw _this__u8e3s4.k1l();
  }
  function ParentJob() {
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    return invokeOnCompletion(_this__u8e3s4, VOID, new DisposeOnCompletion(handle));
  }
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.l1s_1 = handle;
  }
  protoOf(DisposeOnCompletion).e1q = function () {
    return false;
  };
  protoOf(DisposeOnCompletion).w1n = function (cause) {
    return this.l1s_1.x1n();
  };
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function JobNode() {
    LockFreeLinkedListNode.call(this);
  }
  protoOf(JobNode).j1q = function () {
    var tmp = this.i1q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).m1k = function () {
    return true;
  };
  protoOf(JobNode).k1q = function () {
    return null;
  };
  protoOf(JobNode).x1n = function () {
    return this.j1q().s1l(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.j1q()) + ']';
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1s_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.q1s_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.q1s_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r1k_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    wasCancelling = state.r1s();
    var exceptions = state.s1s(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.h1m(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).x1o();
      }
    }
    if (!wasCancelling) {
      $this.e1m(finalException);
    }
    $this.q1k(finalState);
    var casSuccess = $this.f1k_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.r()) {
      if (state.r1s()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.p1k() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = exceptions.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (!(element instanceof CancellationException)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var firstNonCancellation = tmp$ret$1;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.d1(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = exceptions.t();
        while (_iterator__ex2g4s_0.u()) {
          var element_0 = _iterator__ex2g4s_0.v();
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$3 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$3 = null;
      }
      var detailedTimeoutException = tmp$ret$3;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.e1() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.e1());
    var unwrappedCause = unwrap(rootCause);
    var _iterator__ex2g4s = exceptions.t();
    while (_iterator__ex2g4s.u()) {
      var exception = _iterator__ex2g4s.v();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.b1(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.f1k_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.e1m(null);
    $this.q1k(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.e1l();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      tmp0_safe_receiver.x1n();
      $this.d1l(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.r1k_1;
    if (state instanceof JobNode) {
      try {
        state.w1n(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.x1k(new CompletionHandlerException('Exception in completion handler ' + state.toString() + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.k1q();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion($this, tmp2_safe_receiver, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.e1m(cause);
    list.t1s(4);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = list.l1q_1;
    while (!equals(cur, list)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = node.e1q();
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.w1n(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp_0 = tmp0_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.l1q_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.x1k(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.f1m())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.e1l();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.y1l(cause) || isCancellation;
  }
  function notifyCompletion($this, $receiver, cause) {
    $receiver.t1s(1);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = $receiver.l1q_1;
    while (!equals(cur, $receiver)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = true;
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.w1n(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp_0 = tmp0_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.l1q_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.x1k(tmp0_safe_receiver_0);
    }
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.v1s_1)
        return 0;
      if (!$this.f1k_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.j1l();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.f1k_1.atomicfu$compareAndSet(state, state.u1s_1))
          return -1;
        $this.j1l();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.v1s_1 ? list : new InactiveNodeList(list);
    $this.f1k_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.q1q(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
    var list = state.l1q_1;
    $this.f1k_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.f1l();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false))
        return false;
      if (startInternal($this, state) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.a1p();
    disposeOnCancellation(cancellable, invokeOnCompletion($this, VOID, new ResumeOnCompletion(cancellable)));
    return cancellable.i1p();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.f1l();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.w1s();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.p1k() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = (isInterface(cause, ParentJob) ? cause : THROW_CCE()).b1m();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = $this.f1l();
      $l$block: {
        if (tmp0 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          if (tmp0.x1s())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0.r1s();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0.y1s(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp0.z1s();
          var tmp_0;
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            notifyCancelling($this, tmp0.n1s_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0 == null) ? isInterface(tmp0, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0.m1k()) {
              if (tryMakeCancelling($this, tmp0, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString(tmp0);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp0_elvis_lhs = state.k1q();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.f1k_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.w1s())
      return get_COMPLETING_ALREADY();
    finishing.a1t(true);
    if (!(finishing === state)) {
      if (!$this.f1k_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.r1s();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      finishing.y1s(tmp0_safe_receiver.r1k_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.z1s();
    var tmp_0;
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    if (notifyRootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      notifyCancelling($this, list, notifyRootCause);
    }
    var child = nextChild($this, list);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    list.t1s(2);
    var anotherChild = nextChild($this, list);
    if (!(anotherChild == null) && tryWaitForChild($this, finishing, anotherChild, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js($this, $receiver) {
    var tmp0_safe_receiver = $receiver instanceof CompletedExceptionally ? $receiver : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r1k_1;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.f1t_1, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild($this_0, child_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = nextChild_0;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild($this, lastChild);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    state.n1s_1.t1s(2);
    var waitChildAgain = nextChild($this, lastChild);
    if (!(waitChildAgain == null) && tryWaitForChild($this, state, waitChildAgain, proposedUpdate)) {
      return Unit_instance;
    }
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.w1k(finalState);
  }
  function nextChild($this, $receiver) {
    var cur = $receiver;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (!cur.n1q_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.prevNode' call
      cur = cur.m1q_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
      cur = cur.l1q_1;
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (cur.n1q_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.r1s() ? 'Cancelling' : state.w1s() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.m1k() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.n1s_1 = list;
    this.o1s_1 = atomic$boolean$1(isCompleting);
    this.p1s_1 = atomic$ref$1(rootCause);
    this.q1s_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).k1q = function () {
    return this.n1s_1;
  };
  protoOf(Finishing).a1t = function (value) {
    this.o1s_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).w1s = function () {
    return this.o1s_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).g1t = function (value) {
    this.p1s_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).z1s = function () {
    return this.p1s_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).x1s = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).r1s = function () {
    return !(this.z1s() == null);
  };
  protoOf(Finishing).m1k = function () {
    return this.z1s() == null;
  };
  protoOf(Finishing).s1s = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        this_0.b1(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.z1s();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      list.a3(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.b1(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).y1s = function (exception) {
    var rootCause = this.z1s();
    if (rootCause == null) {
      this.g1t(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        this_0.b1(eh);
        this_0.b1(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).b1(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.r1s() + ', completing=' + this.w1s() + ', rootCause=' + toString_0(this.z1s()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.n1s_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.l1t_1 = parent;
    this.m1t_1 = state;
    this.n1t_1 = child;
    this.o1t_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).e1q = function () {
    return false;
  };
  protoOf(ChildCompletion).w1n = function (cause) {
    continueCompleting(this.l1t_1, this.m1t_1, this.n1t_1, this.o1t_1);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, 1);
    this.v1t_1 = job;
  }
  protoOf(AwaitContinuation).h1p = function (parent) {
    var state = this.v1t_1.f1l();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.z1s();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.r1k_1;
    return parent.k1l();
  };
  protoOf(AwaitContinuation).v1p = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.a1p();
    disposeOnCancellation(cont, invokeOnCompletion($this, VOID, new ResumeAwaitOnCompletion(cont)));
    return cont.i1p();
  }
  function JobSupport(active) {
    this.f1k_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.g1k_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).m1 = function () {
    return Key_instance_3;
  };
  protoOf(JobSupport).d1l = function (value) {
    this.g1k_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).e1l = function () {
    return this.g1k_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).h1k = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.d1l(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.i1l();
    var handle = parent.d1m(this);
    this.d1l(handle);
    if (this.g1l()) {
      handle.x1n();
      this.d1l(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).f1l = function () {
    return this.f1k_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).m1k = function () {
    var state = this.f1l();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.m1k();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).g1l = function () {
    var tmp = this.f1l();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).h1l = function () {
    var state = this.f1l();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.r1s();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).i1l = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.f1l();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).j1l = function () {
  };
  protoOf(JobSupport).k1l = function () {
    var state = this.f1l();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.z1s();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.l1l(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.error' call
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        // Inline function 'kotlin.error' call
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.m1l(state.r1k_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).l1l = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.p1k() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).m1l = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.l1l(_this__u8e3s4, message) : $super.l1l.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).n1l = function (handler) {
    return this.q1l(true, new InvokeOnCompletion(handler));
  };
  protoOf(JobSupport).o1l = function (onCancelling, invokeImmediately, handler) {
    var tmp;
    if (onCancelling) {
      tmp = new InvokeOnCancelling(handler);
    } else {
      tmp = new InvokeOnCompletion(handler);
    }
    return this.q1l(invokeImmediately, tmp);
  };
  protoOf(JobSupport).q1l = function (invokeImmediately, node) {
    node.i1q_1 = this;
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.f1l();
        if (state instanceof Empty) {
          if (state.v1s_1) {
            if (this.f1k_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.k1q();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var tmp;
              if (node.e1q()) {
                var tmp0_safe_receiver = state instanceof Finishing ? state : null;
                var rootCause = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1s();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = list.o1q(node, 5);
                } else {
                  if (invokeImmediately) {
                    node.w1n(rootCause);
                  }
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_0;
              } else {
                tmp = list.o1q(node, 1);
              }
              if (tmp) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$0 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$0;
    if (added)
      return node;
    else if (invokeImmediately) {
      var tmp_1 = this.f1l();
      var tmp0_safe_receiver_0 = tmp_1 instanceof CompletedExceptionally ? tmp_1 : null;
      node.w1n(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.r1k_1);
    }
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).r1l = function ($completion) {
    if (!joinInternal(this)) {
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp$ret$0 = $completion.v8();
      ensureActive(tmp$ret$0);
      return Unit_instance;
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).s1l = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.f1l();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.f1k_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.k1q() == null)) {
            node.p1q();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).t1l = function () {
    return false;
  };
  protoOf(JobSupport).u1l = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.p1k() : null, null, this);
    } else {
      tmp = cause;
    }
    this.w1l(tmp);
  };
  protoOf(JobSupport).p1k = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).w1l = function (cause) {
    this.a1m(cause);
  };
  protoOf(JobSupport).x1l = function (parentJob) {
    this.a1m(parentJob);
  };
  protoOf(JobSupport).y1l = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.a1m(cause) && this.g1m();
  };
  protoOf(JobSupport).z1l = function (cause) {
    return this.a1m(cause);
  };
  protoOf(JobSupport).a1m = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.t1l()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.w1k(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).b1m = function () {
    var state = this.f1l();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.z1s();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.r1k_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          // Inline function 'kotlin.error' call
          var message = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).c1m = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.f1l();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.w1k(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).u1k = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.f1l();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(this, proposedUpdate));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).d1m = function (child) {
    // Inline function 'kotlin.also' call
    var this_0 = new ChildHandleNode(child);
    this_0.i1q_1 = this;
    var node = this_0;
    var tmp$ret$2;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.f1l();
        if (state instanceof Empty) {
          if (state.v1s_1) {
            if (this.f1k_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$2 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.k1q();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var addedBeforeCancellation = list.o1q(node, 7);
              var tmp;
              if (addedBeforeCancellation) {
                tmp = true;
              } else {
                var addedBeforeCompletion = list.o1q(node, 3);
                var latestState = this.f1l();
                var tmp_0;
                if (latestState instanceof Finishing) {
                  tmp_0 = latestState.z1s();
                } else {
                  // Inline function 'kotlinx.coroutines.assert' call
                  var tmp0_safe_receiver = latestState instanceof CompletedExceptionally ? latestState : null;
                  tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r1k_1;
                }
                var rootCause = tmp_0;
                node.w1n(rootCause);
                var tmp_1;
                if (addedBeforeCompletion) {
                  // Inline function 'kotlinx.coroutines.assert' call
                  tmp_1 = true;
                } else {
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_1;
              }
              if (tmp) {
                tmp$ret$2 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$2 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$2;
    if (added)
      return node;
    var tmp_2 = this.f1l();
    var tmp0_safe_receiver_0 = tmp_2 instanceof CompletedExceptionally ? tmp_2 : null;
    node.w1n(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.r1k_1);
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).x1k = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).e1m = function (cause) {
  };
  protoOf(JobSupport).f1m = function () {
    return false;
  };
  protoOf(JobSupport).g1m = function () {
    return true;
  };
  protoOf(JobSupport).h1m = function (exception) {
    return false;
  };
  protoOf(JobSupport).q1k = function (state) {
  };
  protoOf(JobSupport).w1k = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.i1m() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).i1m = function () {
    return this.y1k() + '{' + stateString(this, this.f1l()) + '}';
  };
  protoOf(JobSupport).y1k = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).j1m = function ($completion) {
    $l$loop: while (true) {
      var state = this.f1l();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.r1k_1;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  function handlesExceptionF($this) {
    var tmp = $this.e1l();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1q();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.g1m())
        return true;
      var tmp_1 = parentJob.e1l();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.j1q();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.h1k(parent);
    this.y1t_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).t1l = function () {
    return true;
  };
  protoOf(JobImpl).g1m = function () {
    return this.y1t_1;
  };
  protoOf(JobImpl).e1r = function () {
    return this.c1m(Unit_instance);
  };
  protoOf(JobImpl).d1r = function (exception) {
    return this.c1m(new CompletedExceptionally(exception));
  };
  function Empty(isActive) {
    this.v1s_1 = isActive;
  }
  protoOf(Empty).m1k = function () {
    return this.v1s_1;
  };
  protoOf(Empty).k1q = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.v1s_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LockFreeLinkedListHead.call(this);
  }
  protoOf(NodeList).m1k = function () {
    return true;
  };
  protoOf(NodeList).k1q = function () {
    return this;
  };
  protoOf(NodeList).c1u = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('List{');
    this_0.q(state);
    this_0.q('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = this.l1q_1;
    while (!equals(cur, this)) {
      var node = cur;
      if (node instanceof JobNode) {
        if (first) {
          first = false;
        } else
          this_0.q(', ');
        this_0.w(node);
      }
      cur = cur.l1q_1;
    }
    this_0.q(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.c1u('Active') : protoOf(LockFreeLinkedListHead).toString.call(this);
  };
  function IncompleteStateBox(state) {
    this.m1s_1 = state;
  }
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function InactiveNodeList(list) {
    this.u1s_1 = list;
  }
  protoOf(InactiveNodeList).k1q = function () {
    return this.u1s_1;
  };
  protoOf(InactiveNodeList).m1k = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.u1s_1.c1u('New') : anyToString(this);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.h1u_1 = handler;
  }
  protoOf(InvokeOnCompletion).e1q = function () {
    return false;
  };
  protoOf(InvokeOnCompletion).w1n = function (cause) {
    return this.h1u_1(cause);
  };
  function InvokeOnCancelling(handler) {
    JobNode.call(this);
    this.m1u_1 = handler;
    this.n1u_1 = atomic$boolean$1(false);
  }
  protoOf(InvokeOnCancelling).e1q = function () {
    return true;
  };
  protoOf(InvokeOnCancelling).w1n = function (cause) {
    if (this.n1u_1.atomicfu$compareAndSet(false, true))
      this.m1u_1(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.s1u_1 = continuation;
  }
  protoOf(ResumeOnCompletion).e1q = function () {
    return false;
  };
  protoOf(ResumeOnCompletion).w1n = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = this.s1u_1;
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_instance);
    this_0.a9(tmp$ret$1);
    return Unit_instance;
  };
  function ChildHandleNode(childJob) {
    JobNode.call(this);
    this.f1t_1 = childJob;
  }
  protoOf(ChildHandleNode).e1q = function () {
    return true;
  };
  protoOf(ChildHandleNode).w1n = function (cause) {
    return this.f1t_1.x1l(this.j1q());
  };
  protoOf(ChildHandleNode).y1l = function (cause) {
    return this.j1q().y1l(cause);
  };
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.x1u_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).e1q = function () {
    return false;
  };
  protoOf(ResumeAwaitOnCompletion).w1n = function (cause) {
    var state = this.j1q().f1l();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp0 = this.x1u_1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = state.r1k_1;
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.a9(tmp$ret$2);
    } else {
      var tmp0_0 = this.x1u_1;
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value = unboxState(state);
      var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
      tmp0_0.a9(tmp$ret$4);
    }
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function JobNode$invoke$ref(p0) {
    return constructCallableReference(function (p0_0) {
      p0.w1n(p0_0);
      return Unit_instance;
    }, 1, 0, 11, 'invoke', [p0]);
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.a1v();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).a1v = function () {
    var main = Dispatchers_getInstance().f1v();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.z1u();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).y1l = function (cause) {
    return false;
  };
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$(timeMillis, block, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.u1v_1 = coroutine;
  }
  protoOf(TimeoutCancellationException).n1r = function () {
    var tmp0_elvis_lhs = this.message;
    // Inline function 'kotlin.also' call
    var this_0 = new TimeoutCancellationException(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, this.u1v_1);
    initCause(this_0, this);
    return this_0;
  };
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.v8(), uCont);
    this.z1v_1 = time;
  }
  protoOf(TimeoutCoroutine).w1p = function () {
    var delay = get_delay(this.k1k_1);
    var tmp0_safe_receiver = this.k1k_1.c9(Key_instance_2);
    var name = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1r_1;
    this.z1l(TimeoutCancellationException_0(this.z1v_1, delay, this, name));
  };
  protoOf(TimeoutCoroutine).y1k = function () {
    return protoOf(ScopeCoroutine).y1k.call(this) + '(timeMillis=' + this.z1v_1.toString() + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.d1w_1;
    var context = cont.v8();
    disposeOnCompletion(coroutine, get_delay(context).p1r(coroutine.z1v_1, coroutine, coroutine.k1k_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCancellationException_0(time, delay, coroutine, coroutineName) {
    var tmp0_safe_receiver = isInterface(delay, DelayWithTimeoutDiagnostics) ? delay : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.time.Companion.milliseconds' call
      Companion_getInstance();
      var tmp$ret$0 = toDuration(time, DurationUnit_MILLISECONDS_getInstance());
      tmp = tmp0_safe_receiver.q1r(tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp;
    var baseMessage = tmp1_elvis_lhs == null ? 'Timed out waiting for ' + time.toString() + ' ms' : tmp1_elvis_lhs;
    var tmp_0;
    if (!(coroutineName == null)) {
      // Inline function 'kotlin.text.replaceFirstChar' call
      var tmp_1;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(baseMessage) > 0) {
        // Inline function 'kotlin.text.lowercaseChar' call
        // Inline function 'kotlin.text.lowercase' call
        var this_0 = charCodeAt(baseMessage, 0);
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$5 = toString_1(this_0).toLowerCase();
        var tmp0 = charCodeAt(tmp$ret$5, 0);
        // Inline function 'kotlin.text.plus' call
        var other = substring(baseMessage, 1);
        tmp_1 = toString_1(tmp0) + other;
      } else {
        tmp_1 = baseMessage;
      }
      tmp_0 = 'Coroutine "' + coroutineName + '" ' + tmp_1;
    } else {
      tmp_0 = baseMessage;
    }
    var message = tmp_0;
    return new TimeoutCancellationException(message, coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r1v_1 = timeMillis;
    this.s1v_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            if (this.r1v_1 <= 0n)
              return null;
            this.t1v_1 = {_v: null};
            this.q8_1 = 2;
            this.p8_1 = 1;
            var timeoutCoroutine = new TimeoutCoroutine(this.r1v_1, this);
            this.t1v_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.s1v_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.q8_1 = 3;
            var tmp_0 = this.s8_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.s8_1;
              if (e.u1v_1 === this.t1v_1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.s8_1;
            }

          case 3:
            throw this.s8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.q8_1 === 3) {
          throw e_0;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e_0;
        }
      }
     while (true);
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).g1r = function (context) {
    return false;
  };
  protoOf(Unconfined).h1r = function (context, block) {
    var yieldContext = context.c9(Key_instance_4);
    if (!(yieldContext == null)) {
      yieldContext.h1w_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
  }
  var Key_instance_4;
  function Key_getInstance_3() {
    return Key_instance_4;
  }
  function Waiter() {
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_instance;
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function get_NULL_SEGMENT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NULL_SEGMENT;
  }
  var NULL_SEGMENT;
  function get_SEGMENT_SIZE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  }
  var EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  function get_BUFFERED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return BUFFERED;
  }
  var BUFFERED;
  function get_IN_BUFFER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return IN_BUFFER;
  }
  var IN_BUFFER;
  function get_RESUMING_BY_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_RCV;
  }
  var RESUMING_BY_RCV;
  function get_RESUMING_BY_EB() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_EB;
  }
  var RESUMING_BY_EB;
  function get_POISONED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return POISONED;
  }
  var POISONED;
  function get_DONE_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return DONE_RCV;
  }
  var DONE_RCV;
  function get_INTERRUPTED_SEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_SEND;
  }
  var INTERRUPTED_SEND;
  function get_INTERRUPTED_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_RCV;
  }
  var INTERRUPTED_RCV;
  function get_CHANNEL_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CHANNEL_CLOSED;
  }
  var CHANNEL_CLOSED;
  function get_SUSPEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND;
  }
  var SUSPEND;
  function get_SUSPEND_NO_WAITER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND_NO_WAITER;
  }
  var SUSPEND_NO_WAITER;
  function get_FAILED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return FAILED;
  }
  var FAILED;
  function get_NO_RECEIVE_RESULT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_RECEIVE_RESULT;
  }
  var NO_RECEIVE_RESULT;
  function get_CLOSE_HANDLER_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_CLOSED;
  }
  var CLOSE_HANDLER_CLOSED;
  function get_CLOSE_HANDLER_INVOKED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_INVOKED;
  }
  var CLOSE_HANDLER_INVOKED;
  function get_NO_CLOSE_CAUSE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_CLOSE_CAUSE;
  }
  var NO_CLOSE_CAUSE;
  function setElementLazy($this, index, value) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    $this.n1w_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.m1w_1 = channel;
    this.n1w_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).o1w = function () {
    return ensureNotNull(this.m1w_1);
  };
  protoOf(ChannelSegment).p1w = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).q1w = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).r1w = function (index) {
    return this.n1w_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).s1w = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.r1w(index);
    this.t1w(index);
    return this_0;
  };
  protoOf(ChannelSegment).t1w = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).u1w = function (index) {
    return this.n1w_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).v1w = function (index, value) {
    this.n1w_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).w1w = function (index, from, to) {
    return this.n1w_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).x1w = function (index, update) {
    return this.n1w_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).o1o = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.r1w(index_0);
    $l$loop: while (true) {
      var cur = this.u1w(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.w1w(index_0, cur, update)) {
          this.t1w(index_0);
          this.k1x(index_0, !isSender);
          if (isSender) {
            var tmp0_safe_receiver = this.o1w().z1w_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp0_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        }
      } else {
        if (cur === get_INTERRUPTED_SEND() || cur === get_INTERRUPTED_RCV()) {
          this.t1w(index_0);
          if (isSender) {
            var tmp1_safe_receiver = this.o1w().z1w_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp1_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        } else {
          if (cur === get_RESUMING_BY_EB() || cur === get_RESUMING_BY_RCV())
            continue $l$loop;
          else {
            if (cur === get_DONE_RCV() || cur === get_BUFFERED())
              return Unit_instance;
            else {
              if (cur === get_CHANNEL_CLOSED())
                return Unit_instance;
              else {
                // Inline function 'kotlin.error' call
                var message = 'unexpected state: ' + toString_0(cur);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  };
  protoOf(ChannelSegment).k1x = function (index, receiver) {
    if (receiver) {
      var tmp = this.o1w();
      var tmp0 = this.m1o_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      // Inline function 'kotlin.Long.plus' call
      var this_0 = multiply(tmp0, fromInt(other));
      var tmp$ret$1 = add(this_0, fromInt(index));
      tmp.l1x(tmp$ret$1);
    }
    this.m1x();
  };
  function onClosedHasNext($this) {
    $this.y1x_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.a1y_1.b1y();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var cause = tmp;
    throw recoverStackTrace_0(cause);
  }
  function hasNextOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      $this.z1x_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.a1y_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension(this_0, $this, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (r < this_0.c1y()) {
          segment.w1x();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.f1x_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if (this_0.d1y()) {
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.b1x_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = divide(r_0, fromInt(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var tmp$ret$6 = modulo(r_0, fromInt(other_0));
            var i = convertToInt(tmp$ret$6);
            if (!(segment_0.m1o_1 === id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this_0, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive(this_0, segment_0, i, r_0, $this);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!($this == null) ? isInterface($this, Waiter) : false) ? $this : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this_0, tmp1_safe_receiver, segment_0, i);
              }
            } else if (updCellResult_0 === get_FAILED()) {
              if (r_0 < this_0.c1y()) {
                segment_0.w1x();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlin.error' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.w1x();
              $this.y1x_1 = updCellResult_0;
              $this.z1x_1 = null;
              var tmp0_safe_receiver = $this.a1y_1.z1w_1;
              cancellable.n1n(true, tmp0_safe_receiver == null ? null : bindCancellationFun($this.a1y_1, tmp0_safe_receiver, updCellResult_0));
            }
            break $l$block_0;
          }
        }
      } else {
        segment.w1x();
        $this.y1x_1 = updCellResult;
        $this.z1x_1 = null;
        var tmp0_safe_receiver_0 = $this.a1y_1.z1w_1;
        cancellable.n1n(true, tmp0_safe_receiver_0 == null ? null : bindCancellationFun($this.a1y_1, tmp0_safe_receiver_0, updCellResult));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.j1p();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.i1p();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.z1x_1);
    $this.z1x_1 = null;
    $this.y1x_1 = get_CHANNEL_CLOSED();
    var cause = $this.a1y_1.b1y();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
      cont.a9(tmp$ret$1);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.a9(tmp$ret$3);
    }
  }
  function $hasNextCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1y_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 8;
            if (!(this.m1y_1.y1x_1 === get_NO_RECEIVE_RESULT()) && !(this.m1y_1.y1x_1 === get_CHANNEL_CLOSED())) {
              var tmp_0 = this;
              tmp_0.n1y_1 = true;
              this.p8_1 = 11;
              continue $sm;
            } else {
              this.x1y_1 = this.m1y_1.a1y_1;
              this.w1y_1 = null;
              this.p8_1 = 1;
              continue $sm;
            }

          case 1:
            this.t1y_1 = this.x1y_1;
            this.u1y_1 = this.w1y_1;
            this.q1y_1 = this.t1y_1.f1x_1.kotlinx$atomicfu$value;
            this.p8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.p8_1 = 9;
              continue $sm;
            }

            if (this.t1y_1.d1y()) {
              var tmp_1 = this;
              tmp_1.o1y_1 = onClosedHasNext(this.m1y_1);
              this.p8_1 = 10;
              continue $sm;
            } else {
              this.p8_1 = 3;
              continue $sm;
            }

          case 3:
            this.r1y_1 = this.t1y_1.b1x_1.atomicfu$getAndIncrement$long();
            var tmp0 = this.r1y_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_2 = this;
            var tmp0_0 = this.r1y_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_2.s1y_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!(this.q1y_1.m1o_1 === id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this.t1y_1, id, this.q1y_1);
              if (tmp0_elvis_lhs == null) {
                this.p8_1 = 2;
                var tmp_3 = this;
                continue $sm;
              } else {
                this.v1y_1 = tmp0_elvis_lhs;
                this.p8_1 = 4;
                continue $sm;
              }
            } else {
              this.p8_1 = 5;
              continue $sm;
            }

          case 4:
            this.q1y_1 = this.v1y_1;
            this.p8_1 = 5;
            continue $sm;
          case 5:
            var updCellResult = updateCellReceive(this.t1y_1, this.q1y_1, this.s1y_1, this.r1y_1, this.u1y_1);
            if (updCellResult === get_SUSPEND()) {
              var tmp_4 = this;
              var tmp_5 = this.u1y_1;
              var tmp1_safe_receiver = (!(tmp_5 == null) ? isInterface(tmp_5, Waiter) : false) ? tmp_5 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.t1y_1, tmp1_safe_receiver, this.q1y_1, this.s1y_1);
              }
              this.q1y_1;
              this.s1y_1;
              this.r1y_1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (updCellResult === get_FAILED()) {
                if (this.r1y_1 < this.t1y_1.c1y()) {
                  this.q1y_1.w1x();
                }
                this.p8_1 = 2;
                var tmp_6 = this;
                continue $sm;
              } else {
                if (updCellResult === get_SUSPEND_NO_WAITER()) {
                  var tmp0_1 = this.q1y_1;
                  var tmp2 = this.s1y_1;
                  var r = this.r1y_1;
                  this.p8_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.m1y_1, tmp0_1, tmp2, r, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_7 = this;
                  this.q1y_1.w1x();
                  this.m1y_1.y1x_1 = updCellResult;
                  tmp_7.p1y_1 = true;
                  this.p8_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_8 = this;
            return suspendResult;
          case 7:
            this.o1y_1 = this.p1y_1;
            this.p8_1 = 10;
            continue $sm;
          case 8:
            throw this.s8_1;
          case 9:
            if (false) {
              this.p8_1 = 1;
              continue $sm;
            }

            this.p8_1 = 10;
            continue $sm;
          case 10:
            this.n1y_1 = this.o1y_1;
            this.p8_1 = 11;
            continue $sm;
          case 11:
            return this.n1y_1;
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
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.c1x_1.kotlinx$atomicfu$value;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    var it = _get_bufferEndCounter__2d4hee($this);
    return it === 0n || it === 9223372036854775807n;
  }
  function onClosedSend($this, element, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.a1p();
    $l$block: {
      var tmp0_safe_receiver = $this.z1w_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, $this.y1y());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp1_safe_receiver, cancellable);
        var tmp$ret$5 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.a9(tmp$ret$5);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.y1y();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.a9(tmp$ret$7);
    }
    return cancellable.i1p();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      switch (updateCellSend($this, segment, index, element, s, cancellable, false)) {
        case 0:
          segment.w1x();
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$5 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.a9(tmp$ret$5);
          break;
        case 1:
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.a9(tmp$ret$8);
          break;
        case 2:
          prepareSenderForSuspension($this, cancellable, segment, index);
          break;
        case 4:
          if (s < $this.z1y()) {
            segment.w1x();
          }

          onClosedSendOnNoWaiterSuspend($this, element, cancellable);
          break;
        case 5:
          segment.w1x();
          $l$block_5: {
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
            var segment_0 = access$_get_sendSegment__111kgq($this).kotlinx$atomicfu$value;
            $l$loop_0: while (true) {
              var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s($this).atomicfu$getAndIncrement$long();
              // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
              var s_0 = sendersAndCloseStatusCur & 1152921504606846975n;
              var closed = access$_get_isClosedForSend0__sm8f7a($this, sendersAndCloseStatusCur);
              // Inline function 'kotlin.Long.div' call
              var other = get_SEGMENT_SIZE();
              var id = divide(s_0, fromInt(other));
              // Inline function 'kotlin.Long.rem' call
              var other_0 = get_SEGMENT_SIZE();
              var tmp$ret$13 = modulo(s_0, fromInt(other_0));
              var i = convertToInt(tmp$ret$13);
              if (!(segment_0.m1o_1 === id)) {
                var tmp0_elvis_lhs = access$findSegmentSend($this, id, segment_0);
                var tmp;
                if (tmp0_elvis_lhs == null) {
                  var tmp_0;
                  if (closed) {
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  } else {
                    continue $l$loop_0;
                  }
                } else {
                  tmp = tmp0_elvis_lhs;
                }
                segment_0 = tmp;
              }
              switch (access$updateCellSend($this, segment_0, i, element, s_0, cancellable, closed)) {
                case 0:
                  segment_0.w1x();
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$17 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.a9(tmp$ret$17);
                  break $l$block_5;
                case 1:
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$20 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.a9(tmp$ret$20);
                  break $l$block_5;
                case 2:
                  if (closed) {
                    segment_0.m1x();
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  }

                  var tmp2_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
                  if (tmp2_safe_receiver == null)
                    null;
                  else {
                    access$prepareSenderForSuspension($this, tmp2_safe_receiver, segment_0, i);
                  }

                  break $l$block_5;
                case 4:
                  if (s_0 < $this.z1y()) {
                    segment_0.w1x();
                  }

                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_5;
                case 5:
                  segment_0.w1x();
                  continue $l$loop_0;
                case 3:
                  // Inline function 'kotlin.error' call

                  var message = 'unexpected';
                  throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }

          break;
        default:
          // Inline function 'kotlin.error' call

          var message_0 = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.j1p();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.i1p();
  }
  function prepareSenderForSuspension($this, $receiver, segment, index) {
    $receiver.p1p(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp0_safe_receiver = $this.z1w_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, cont.v8());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace($this.y1y(), cont);
    var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.a9(tmp$ret$1);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.q1w(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.u1w(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.w1w(index, null, get_BUFFERED())) {
          return 1;
        }
      } else {
        if (waiter == null) {
          return 3;
        } else {
          if (segment.w1w(index, null, waiter))
            return 2;
        }
      }
    } else {
      if (isInterface(state, Waiter)) {
        segment.t1w(index);
        var tmp;
        if (tryResumeReceiver($this, state, element)) {
          segment.v1w(index, get_DONE_RCV());
          $this.a1z();
          tmp = 0;
        } else {
          if (!(segment.x1w(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.k1x(index, true);
          }
          tmp = 5;
        }
        return tmp;
      }
    }
    return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
  }
  function updateCellSendSlow($this, segment, index, element, s, waiter, closed) {
    while (true) {
      var state = segment.u1w(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) && !closed) {
          if (segment.w1w(index, null, get_BUFFERED())) {
            return 1;
          }
        } else {
          if (closed) {
            if (segment.w1w(index, null, get_INTERRUPTED_SEND())) {
              segment.k1x(index, false);
              return 4;
            }
          } else if (waiter == null)
            return 3;
          else if (segment.w1w(index, null, waiter))
            return 2;
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.w1w(index, state, get_BUFFERED())) {
          return 1;
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.t1w(index);
        return 5;
      } else if (state === get_POISONED()) {
        segment.t1w(index);
        return 5;
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.t1w(index);
        completeCloseOrCancel($this);
        return 4;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.t1w(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.b1z_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver($this, receiver, element)) {
          segment.v1w(index, get_DONE_RCV());
          $this.a1z();
          tmp_0 = 0;
        } else {
          if (!(segment.x1w(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.k1x(index, true);
          }
          tmp_0 = 5;
        }
        return tmp_0;
      }
    }
  }
  function shouldSendSuspend0($this, curSendersAndCloseStatus) {
    if (_get_isClosedForSend0__kxgf9m($this, curSendersAndCloseStatus))
      return false;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var tmp$ret$0 = curSendersAndCloseStatus & 1152921504606846975n;
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (curSenders < _get_bufferEndCounter__2d4hee($this)) {
      tmp = true;
    } else {
      var tmp0 = $this.z1y();
      // Inline function 'kotlin.Long.plus' call
      var other = $this.y1w_1;
      tmp = curSenders < add(tmp0, fromInt(other));
    }
    return tmp;
  }
  function tryResumeReceiver($this, $receiver, element) {
    var tmp;
    if (isInterface($receiver, SelectInstance)) {
      tmp = $receiver.g1z($this, element);
    } else {
      if ($receiver instanceof ReceiveCatching) {
        if (!($receiver instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance_0().e1z(element);
        var tmp1_safe_receiver = $this.z1w_1;
        tmp = tryResume0($receiver.f1z_1, new ChannelResult(tmp_0), tmp1_safe_receiver == null ? null : bindCancellationFunResult($this, tmp1_safe_receiver));
      } else {
        if ($receiver instanceof BufferedChannelIterator) {
          if (!($receiver instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = $receiver.c1z(element);
        } else {
          if (isInterface($receiver, CancellableContinuation)) {
            if (!isInterface($receiver, CancellableContinuation))
              THROW_CCE();
            var tmp2_safe_receiver = $this.z1w_1;
            tmp = tryResume0($receiver, element, tmp2_safe_receiver == null ? null : bindCancellationFun_0($this, tmp2_safe_receiver));
          } else {
            // Inline function 'kotlin.error' call
            var message = 'Unexpected receiver type: ' + toString($receiver);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
    return tmp;
  }
  function receiveOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, cancellable);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension($this, cancellable, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (r < $this.c1y()) {
          segment.w1x();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.f1x_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if ($this.d1y()) {
              onClosedReceiveOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.b1x_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = divide(r_0, fromInt(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var tmp$ret$6 = modulo(r_0, fromInt(other_0));
            var i = convertToInt(tmp$ret$6);
            if (!(segment_0.m1o_1 === id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, cancellable);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension($this, tmp1_safe_receiver, segment_0, i);
              }
            } else if (updCellResult_0 === get_FAILED()) {
              if (r_0 < $this.c1y()) {
                segment_0.w1x();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlin.error' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.w1x();
              var tmp0_safe_receiver = $this.z1w_1;
              var onCancellation = tmp0_safe_receiver == null ? null : bindCancellationFun_0($this, tmp0_safe_receiver);
              cancellable.n1n(updCellResult_0, onCancellation);
            }
            break $l$block_0;
          }
        }
      } else {
        segment.w1x();
        var tmp0_safe_receiver_0 = $this.z1w_1;
        var onCancellation_0 = tmp0_safe_receiver_0 == null ? null : bindCancellationFun_0($this, tmp0_safe_receiver_0);
        cancellable.n1n(updCellResult, onCancellation_0);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.j1p();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.i1p();
  }
  function prepareReceiverForSuspension($this, $receiver, segment, index) {
    $this.h1z();
    $receiver.p1p(segment, index);
  }
  function onClosedReceiveOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = _get_receiveException__foorc1($this);
    var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.a9(tmp$ret$1);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.u1w(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var senders = $this.a1x_1.kotlinx$atomicfu$value & 1152921504606846975n;
      if (r >= senders) {
        if (waiter === null) {
          return get_SUSPEND_NO_WAITER();
        }
        if (segment.w1w(index, state, waiter)) {
          expandBuffer($this);
          return get_SUSPEND();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.w1w(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.s1w(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.u1w(index);
      if (state === null || state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var senders = $this.a1x_1.kotlinx$atomicfu$value & 1152921504606846975n;
        if (r < senders) {
          if (segment.w1w(index, state, get_POISONED())) {
            expandBuffer($this);
            return get_FAILED();
          }
        } else {
          if (waiter === null) {
            return get_SUSPEND_NO_WAITER();
          }
          if (segment.w1w(index, state, waiter)) {
            expandBuffer($this);
            return get_SUSPEND();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.w1w(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.s1w(index);
        }
      } else if (state === get_INTERRUPTED_SEND())
        return get_FAILED();
      else if (state === get_POISONED())
        return get_FAILED();
      else if (state === get_CHANNEL_CLOSED()) {
        expandBuffer($this);
        return get_FAILED();
      } else if (state === get_RESUMING_BY_EB())
        continue $l$loop;
      else {
        if (segment.w1w(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.b1z_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender($this, sender, segment, index)) {
            segment.v1w(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.s1w(index);
          } else {
            segment.v1w(index, get_INTERRUPTED_SEND());
            segment.k1x(index, false);
            if (helpExpandBuffer) {
              expandBuffer($this);
            }
            tmp_0 = get_FAILED();
          }
          return tmp_0;
        }
      }
    }
  }
  function tryResumeSender($this, $receiver, segment, index) {
    var tmp;
    if (isInterface($receiver, CancellableContinuation)) {
      if (!isInterface($receiver, CancellableContinuation))
        THROW_CCE();
      tmp = tryResume0($receiver, Unit_instance);
    } else {
      if (isInterface($receiver, SelectInstance)) {
        if (!($receiver instanceof SelectImplementation))
          THROW_CCE();
        var trySelectResult = $receiver.m1z($this, Unit_instance);
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.t1w(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if ($receiver instanceof SendBroadcast) {
          tmp = tryResume0($receiver.i1z_1, true);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'Unexpected waiter: ' + toString($receiver);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp;
  }
  function expandBuffer($this) {
    if (_get_isRendezvousOrUnlimited__3mdufi($this))
      return Unit_instance;
    var segment = $this.g1x_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.c1x_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = divide(b, fromInt(other));
      var s = $this.c1y();
      if (s <= b) {
        if (segment.m1o_1 < id && !(segment.s1x() == null)) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts($this);
        return Unit_instance;
      }
      if (!(segment.m1o_1 === id)) {
        var tmp0_elvis_lhs = findSegmentBufferEnd($this, id, segment, b);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue try_again;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var tmp$ret$1 = modulo(b, fromInt(other_0));
      var i = convertToInt(tmp$ret$1);
      if (updateCellExpandBuffer($this, segment, i, b)) {
        incCompletedExpandBufferAttempts($this);
        return Unit_instance;
      } else {
        incCompletedExpandBufferAttempts($this);
        continue try_again;
      }
    }
  }
  function updateCellExpandBuffer($this, segment, index, b) {
    var state = segment.u1w(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (b >= $this.b1x_1.kotlinx$atomicfu$value) {
        if (segment.w1w(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender($this, state, segment, index)) {
            segment.v1w(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.v1w(index, get_INTERRUPTED_SEND());
            segment.k1x(index, false);
            tmp = false;
          }
          return tmp;
        }
      }
    }
    return updateCellExpandBufferSlow($this, segment, index, b);
  }
  function updateCellExpandBufferSlow($this, segment, index, b) {
    $l$loop: while (true) {
      var state = segment.u1w(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (b < $this.b1x_1.kotlinx$atomicfu$value) {
          if (segment.w1w(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.w1w(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender($this, state, segment, index)) {
              segment.v1w(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.v1w(index, get_INTERRUPTED_SEND());
              segment.k1x(index, false);
              tmp = false;
            }
            return tmp;
          }
        }
      } else {
        if (state === get_INTERRUPTED_SEND())
          return false;
        else {
          if (state === null) {
            if (segment.w1w(index, state, get_IN_BUFFER()))
              return true;
          } else {
            if (state === get_BUFFERED())
              return true;
            else {
              if (state === get_POISONED() || state === get_DONE_RCV() || state === get_INTERRUPTED_RCV())
                return true;
              else {
                if (state === get_CHANNEL_CLOSED())
                  return true;
                else {
                  if (state === get_RESUMING_BY_RCV())
                    continue $l$loop;
                  else {
                    // Inline function 'kotlin.error' call
                    var message = 'Unexpected cell state: ' + toString(state);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts($this, nAttempts) {
    nAttempts = nAttempts === VOID ? 1n : nAttempts;
    // Inline function 'kotlin.also' call
    // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
    if (!(($this.d1x_1.atomicfu$addAndGet$long(nAttempts) & 4611686018427387904n) === 0n)) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        if (!!(($this.d1x_1.kotlinx$atomicfu$value & 4611686018427387904n) === 0n)) {
          break $l$loop;
        }
      }
    }
  }
  function BufferedChannelIterator($outer) {
    this.a1y_1 = $outer;
    this.y1x_1 = get_NO_RECEIVE_RESULT();
    this.z1x_1 = null;
  }
  protoOf(BufferedChannelIterator).n1z = function ($completion) {
    var tmp = new $hasNextCOROUTINE$(this, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(BufferedChannelIterator).p1p = function (segment, index) {
    var tmp0_safe_receiver = this.z1x_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1p(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).v = function () {
    var result = this.y1x_1;
    // Inline function 'kotlin.check' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.y1x_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.a1y_1));
    return result;
  };
  protoOf(BufferedChannelIterator).c1z = function (element) {
    var cont = ensureNotNull(this.z1x_1);
    this.z1x_1 = null;
    this.y1x_1 = element;
    var tmp0_safe_receiver = this.a1y_1.z1w_1;
    return tryResume0(cont, true, tmp0_safe_receiver == null ? null : bindCancellationFun(this.a1y_1, tmp0_safe_receiver, element));
  };
  protoOf(BufferedChannelIterator).o1z = function () {
    var cont = ensureNotNull(this.z1x_1);
    this.z1x_1 = null;
    this.y1x_1 = get_CHANNEL_CLOSED();
    var cause = this.a1y_1.b1y();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
      cont.a9(tmp$ret$1);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.a9(tmp$ret$3);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.b1y();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException('Channel was closed') : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp0 = $this.j1x_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        var tmp;
        if (cur === null) {
          tmp = get_CLOSE_HANDLER_CLOSED();
        } else {
          tmp = get_CLOSE_HANDLER_INVOKED();
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = cur;
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var closeHandler = tmp_0;
    if (typeof closeHandler !== 'function')
      THROW_CCE();
    closeHandler($this.b1y());
  }
  function markClosed($this) {
    var tmp0 = $this.a1x_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (convertToInt(shiftRight(cur, 60))) {
          case 0:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$3 = cur & 1152921504606846975n;
            tmp = constructSendersAndCloseStatus(tmp$ret$3, 2);
            break;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$4 = cur & 1152921504606846975n;
            tmp = constructSendersAndCloseStatus(tmp$ret$4, 3);
            break;
          default:
            return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  }
  function markCancelled($this) {
    var tmp0 = $this.a1x_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp$ret$2 = cur & 1152921504606846975n;
        var upd = constructSendersAndCloseStatus(tmp$ret$2, 3);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  }
  function markCancellationStarted($this) {
    var tmp0 = $this.a1x_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (convertToInt(shiftRight(cur, 60)) === 0) {
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          var tmp$ret$3 = cur & 1152921504606846975n;
          tmp = constructSendersAndCloseStatus(tmp$ret$3, 1);
        } else {
          return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  }
  function completeCloseOrCancel($this) {
    $this.p1z();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.r1z()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!(lastBufferedCellGlobalIndex === -1n)) {
        $this.q1z(lastBufferedCellGlobalIndex);
      }
    }
    cancelSuspendedReceiveRequests($this, lastSegment, sendersCur);
    return lastSegment;
  }
  function completeCancel($this, sendersCur) {
    var lastSegment = completeClose($this, sendersCur);
    removeUnprocessedElements($this, lastSegment);
  }
  function closeLinkedList($this) {
    var lastSegment = $this.g1x_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    var it = $this.e1x_1.kotlinx$atomicfu$value;
    if (it.m1o_1 > lastSegment.m1o_1)
      lastSegment = it;
    // Inline function 'kotlin.let' call
    var it_0 = $this.f1x_1.kotlinx$atomicfu$value;
    if (it_0.m1o_1 > lastSegment.m1o_1)
      lastSegment = it_0;
    return close(lastSegment);
  }
  function markAllEmptyCellsAsClosed($this, lastSegment) {
    var segment = lastSegment;
    while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.m1o_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var globalIndex = add(this_0, fromInt(index));
          if (globalIndex < $this.z1y())
            return -1n;
          cell_update: while (true) {
            var state = segment.u1w(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.w1w(index, state, get_CHANNEL_CLOSED())) {
                segment.m1x();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.v1x();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return -1n;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
  }
  function removeUnprocessedElements($this, lastSegment) {
    var onUndeliveredElement = $this.z1w_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.m1o_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var globalIndex = add(this_0, fromInt(index));
          update_cell: while (true) {
            var state = segment.u1w(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (globalIndex < $this.z1y())
                  break process_segments;
                if (segment.w1w(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.r1w(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.t1w(index);
                  segment.m1x();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() || state === null) {
                  if (segment.w1w(index, state, get_CHANNEL_CLOSED())) {
                    segment.m1x();
                    break update_cell;
                  }
                } else {
                  var tmp;
                  if (isInterface(state, Waiter)) {
                    tmp = true;
                  } else {
                    tmp = state instanceof WaiterEB;
                  }
                  if (tmp) {
                    if (globalIndex < $this.z1y())
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.b1z_1;
                    } else {
                      tmp_0 = isInterface(state, Waiter) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.w1w(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.r1w(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.t1w(index);
                      segment.m1x();
                      break update_cell;
                    }
                  } else {
                    if (state === get_RESUMING_BY_EB() || state === get_RESUMING_BY_RCV())
                      break process_segments;
                    else {
                      if (state === get_RESUMING_BY_EB())
                        continue update_cell;
                      else {
                        break update_cell;
                      }
                    }
                  }
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.v1x();
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        break process_segments;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      segment = tmp_1;
    }
    var tmp0_0 = suspendedSenders;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp0_0);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp_2 = access$_get_holder__kkflen(tmp0_0);
          var it = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
          resumeSenderOnCancelledChannel($this, it);
        } else {
          var tmp_3 = access$_get_holder__kkflen(tmp0_0);
          var list = tmp_3 instanceof ArrayList ? tmp_3 : THROW_CCE();
          var inductionVariable_0 = list.e1() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.d1(i);
              resumeSenderOnCancelledChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    var tmp1_safe_receiver = undeliveredElementException;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp1_safe_receiver;
    }
  }
  function cancelSuspendedReceiveRequests($this, lastSegment, sendersCounter) {
    var suspendedReceivers = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (!(segment == null)) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.m1o_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          if (add(this_0, fromInt(index)) < sendersCounter)
            break process_segments;
          cell_update: while (true) {
            var state = segment.u1w(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.w1w(index, state, get_CHANNEL_CLOSED())) {
                segment.m1x();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.w1w(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.b1z_1);
                  segment.k1x(index, true);
                  break cell_update;
                }
              } else {
                if (isInterface(state, Waiter)) {
                  if (segment.w1w(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.k1x(index, true);
                    break cell_update;
                  }
                } else {
                  break cell_update;
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      segment = segment.v1x();
    }
    var tmp0_0 = suspendedReceivers;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp0_0);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp = access$_get_holder__kkflen(tmp0_0);
          var it = !(tmp == null) ? tmp : THROW_CCE();
          resumeReceiverOnClosedChannel($this, it);
        } else {
          var tmp_0 = access$_get_holder__kkflen(tmp0_0);
          var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable_0 = list.e1() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.d1(i);
              resumeReceiverOnClosedChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function resumeReceiverOnClosedChannel($this, $receiver) {
    return resumeWaiterOnClosedChannel($this, $receiver, true);
  }
  function resumeSenderOnCancelledChannel($this, $receiver) {
    return resumeWaiterOnClosedChannel($this, $receiver, false);
  }
  function resumeWaiterOnClosedChannel($this, $receiver, receiver) {
    if ($receiver instanceof SendBroadcast) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $receiver.i1z_1;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
      this_0.a9(tmp$ret$1);
    } else {
      if (isInterface($receiver, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.y1y();
        var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
        $receiver.a9(tmp$ret$3);
      } else {
        if ($receiver instanceof ReceiveCatching) {
          var tmp0 = $receiver.f1z_1;
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = new ChannelResult(Companion_getInstance_0().s1z($this.b1y()));
          var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
          tmp0.a9(tmp$ret$5);
        } else {
          if ($receiver instanceof BufferedChannelIterator) {
            $receiver.o1z();
          } else {
            if (isInterface($receiver, SelectInstance))
              $receiver.g1z($this, get_CHANNEL_CLOSED());
            else {
              // Inline function 'kotlin.error' call
              var message = 'Unexpected waiter: ' + toString($receiver);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  }
  function _get_isClosedForSend0__kxgf9m($this, $receiver) {
    return isClosed($this, $receiver, false);
  }
  function _get_isClosedForReceive0__f7qknl($this, $receiver) {
    return isClosed($this, $receiver, true);
  }
  function isClosed($this, sendersAndCloseStatusCur, isClosedForReceive) {
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp;
    switch (convertToInt(shiftRight(sendersAndCloseStatusCur, 60))) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$1 = sendersAndCloseStatusCur & 1152921504606846975n;
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.t1z() : true;
        break;
      case 3:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$2 = sendersAndCloseStatusCur & 1152921504606846975n;
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        // Inline function 'kotlin.error' call

        var message = 'unexpected close status: ' + convertToInt(shiftRight(sendersAndCloseStatusCur, 60));
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.u1w(index);
      if (state === null || state === get_IN_BUFFER()) {
        if (segment.w1w(index, state, get_POISONED())) {
          expandBuffer($this);
          return false;
        }
      } else if (state === get_BUFFERED())
        return true;
      else if (state === get_INTERRUPTED_SEND())
        return false;
      else if (state === get_CHANNEL_CLOSED())
        return false;
      else if (state === get_DONE_RCV())
        return false;
      else if (state === get_POISONED())
        return false;
      else if (state === get_RESUMING_BY_EB())
        return true;
      else if (state === get_RESUMING_BY_RCV())
        return false;
      else
        return globalIndex === $this.z1y();
    }
  }
  function findSegmentSend($this, id, startFrom) {
    var tmp0 = $this.e1x_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$2;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (cur.m1o_1 >= tmp2.m1o_1) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.o1x()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.p1x()) {
                  cur.h4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.p1x()) {
                tmp2.h4();
              }
            }
            tmp$ret$1 = tmp$ret$2;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$0 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$0;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.m1o_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      if (multiply(tmp0_0, fromInt(other)) < $this.z1y()) {
        startFrom.w1x();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.m1o_1 > id) {
        var tmp0_1 = segment.m1o_1;
        // Inline function 'kotlin.Long.times' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$7 = multiply(tmp0_1, fromInt(other_0));
        updateSendersCounterIfLower($this, tmp$ret$7);
        var tmp0_2 = segment.m1o_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        if (multiply(tmp0_2, fromInt(other_1)) < $this.z1y()) {
          segment.w1x();
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function findSegmentReceive($this, id, startFrom) {
    var tmp0 = $this.f1x_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$2;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (cur.m1o_1 >= tmp2.m1o_1) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.o1x()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.p1x()) {
                  cur.h4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.p1x()) {
                tmp2.h4();
              }
            }
            tmp$ret$1 = tmp$ret$2;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$0 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$0;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.m1o_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      if (multiply(tmp0_0, fromInt(other)) < $this.c1y()) {
        startFrom.w1x();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        var tmp0_1 = _get_bufferEndCounter__2d4hee($this);
        // Inline function 'kotlin.Long.div' call
        var other_0 = get_SEGMENT_SIZE();
        tmp_1 = id <= divide(tmp0_1, fromInt(other_0));
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp0_2 = $this.g1x_1;
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          // Inline function 'kotlinx.atomicfu.loop' call
          while (true) {
            var cur_0 = tmp0_2.kotlinx$atomicfu$value;
            if (cur_0.m1o_1 >= segment.m1o_1) {
              break $l$block_5;
            }
            if (!segment.o1x()) {
              break $l$block_5;
            }
            if (tmp0_2.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.p1x()) {
                cur_0.h4();
              }
              break $l$block_5;
            }
            if (segment.p1x()) {
              segment.h4();
            }
          }
        }
      }
      var tmp_2;
      if (segment.m1o_1 > id) {
        var tmp0_3 = segment.m1o_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$11 = multiply(tmp0_3, fromInt(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$11);
        var tmp0_4 = segment.m1o_1;
        // Inline function 'kotlin.Long.times' call
        var other_2 = get_SEGMENT_SIZE();
        if (multiply(tmp0_4, fromInt(other_2)) < $this.c1y()) {
          segment.w1x();
        }
        tmp_2 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_2 = segment;
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function findSegmentBufferEnd($this, id, startFrom, currentBufferEndCounter) {
    var tmp0 = $this.g1x_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$2;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (cur.m1o_1 >= tmp2.m1o_1) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.o1x()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.p1x()) {
                  cur.h4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.p1x()) {
                tmp2.h4();
              }
            }
            tmp$ret$1 = tmp$ret$2;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$0 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$0;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom);
      incCompletedExpandBufferAttempts($this);
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.m1o_1 > id) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = add(currentBufferEndCounter, fromInt(1));
        var tmp0_0 = segment.m1o_1;
        // Inline function 'kotlin.Long.times' call
        var other = get_SEGMENT_SIZE();
        var tmp$ret$7 = multiply(tmp0_0, fromInt(other));
        if ($this.c1x_1.atomicfu$compareAndSet(tmp_2, tmp$ret$7)) {
          var tmp0_1 = segment.m1o_1;
          // Inline function 'kotlin.Long.times' call
          var other_0 = get_SEGMENT_SIZE();
          var tmp$ret$8 = multiply(tmp0_1, fromInt(other_0));
          incCompletedExpandBufferAttempts($this, subtract(tmp$ret$8, currentBufferEndCounter));
        } else {
          incCompletedExpandBufferAttempts($this);
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom) {
    var segment = startFrom;
    $l$loop: while (segment.m1o_1 < id) {
      var tmp0_elvis_lhs = segment.s1x();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.n1x()) {
        var tmp1_elvis_lhs = segment.s1x();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp0 = $this.g1x_1;
      var tmp2 = segment;
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        var tmp$ret$1;
        // Inline function 'kotlinx.atomicfu.loop' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          if (cur.m1o_1 >= tmp2.m1o_1) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!tmp2.o1x()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
            if (cur.p1x()) {
              cur.h4();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (tmp2.p1x()) {
            tmp2.h4();
          }
        }
        tmp$ret$0 = tmp$ret$1;
      }
      if (tmp$ret$0)
        return Unit_instance;
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.a1x_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = cur & 1152921504606846975n;
      if (curCounter >= value)
        return Unit_instance;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$3 = convertToInt(shiftRight(cur, 60));
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$3);
      if ($this.a1x_1.atomicfu$compareAndSet(cur, update))
        return Unit_instance;
    }
    return tmp$ret$0;
  }
  function updateReceiversCounterIfLower($this, value) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.b1x_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      if (cur >= value)
        return Unit_instance;
      if ($this.b1x_1.atomicfu$compareAndSet(cur, value))
        return Unit_instance;
    }
    return tmp$ret$0;
  }
  function bindCancellationFunResult($this, $receiver) {
    return BufferedChannel$onCancellationChannelResultImplDoNotCall$ref($this);
  }
  function onCancellationChannelResultImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.z1w_1), ensureNotNull(ChannelResult__getOrNull_impl_f5e07h(element)), context);
  }
  function bindCancellationFun($this, $receiver, element) {
    return BufferedChannel$bindCancellationFun$lambda($receiver, element);
  }
  function bindCancellationFun_0($this, $receiver) {
    return BufferedChannel$onCancellationImplDoNotCall$ref($this);
  }
  function onCancellationImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.z1w_1), element, context);
  }
  function access$_get_sendersAndCloseStatus__tvw29s($this) {
    return $this.a1x_1;
  }
  function access$_get_sendSegment__111kgq($this) {
    return $this.e1x_1;
  }
  function access$prepareSenderForSuspension($this, $receiver, segment, index) {
    return prepareSenderForSuspension($this, $receiver, segment, index);
  }
  function access$updateCellSend($this, segment, index, element, s, waiter, closed) {
    return updateCellSend($this, segment, index, element, s, waiter, closed);
  }
  function access$_get_isClosedForSend0__sm8f7a($this, $receiver) {
    return _get_isClosedForSend0__kxgf9m($this, $receiver);
  }
  function access$findSegmentSend($this, id, startFrom) {
    return findSegmentSend($this, id, startFrom);
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.z1w_1, $element, $select.v8());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this$0) {
    return function (select, _unused_var__etf5q3, element) {
      return BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda(element, this$0, select);
    };
  }
  function BufferedChannel$onCancellationChannelResultImplDoNotCall$ref(p0) {
    return constructCallableReference(function (p0_0, p1, p2) {
      var tmp0 = p0;
      onCancellationChannelResultImplDoNotCall(tmp0, p0_0, p1.v1z_1, p2);
      return Unit_instance;
    }, 3, 0, 12, 'onCancellationChannelResultImplDoNotCall', [p0]);
  }
  function BufferedChannel$bindCancellationFun$lambda($this_bindCancellationFun, $element) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, context) {
      callUndeliveredElement($this_bindCancellationFun, $element, context);
      return Unit_instance;
    };
  }
  function BufferedChannel$onCancellationImplDoNotCall$ref(p0) {
    return constructCallableReference(function (p0_0, p1, p2) {
      var tmp0 = p0;
      onCancellationImplDoNotCall(tmp0, p0_0, p1, p2);
      return Unit_instance;
    }, 3, 0, 13, 'onCancellationImplDoNotCall', [p0]);
  }
  function $sendCOROUTINE$(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e20_1 = _this__u8e3s4;
    this.f20_1 = element;
  }
  protoOf($sendCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 11;
            this.q20_1 = this.e20_1;
            this.p20_1 = this.f20_1;
            this.o20_1 = null;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            this.i20_1 = this.q20_1;
            this.l20_1 = this.p20_1;
            this.j20_1 = this.o20_1;
            this.h20_1 = access$_get_sendSegment__111kgq(this.i20_1).kotlinx$atomicfu$value;
            this.p8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.p8_1 = 12;
              continue $sm;
            }

            var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s(this.i20_1).atomicfu$getAndIncrement$long();
            var tmp_0 = this;
            tmp_0.k20_1 = sendersAndCloseStatusCur & 1152921504606846975n;
            this.m20_1 = access$_get_isClosedForSend0__sm8f7a(this.i20_1, sendersAndCloseStatusCur);
            var tmp0 = this.k20_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_1 = this;
            var tmp0_0 = this.k20_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_1.g20_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!(this.h20_1.m1o_1 === id)) {
              var tmp0_elvis_lhs = access$findSegmentSend(this.i20_1, id, this.h20_1);
              if (tmp0_elvis_lhs == null) {
                if (this.m20_1) {
                  this.p8_1 = 10;
                  suspendResult = onClosedSend(this.e20_1, this.f20_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.p8_1 = 2;
                  var tmp_2 = this;
                  continue $sm;
                }
              } else {
                this.n20_1 = tmp0_elvis_lhs;
                this.p8_1 = 3;
                continue $sm;
              }
            } else {
              this.p8_1 = 4;
              continue $sm;
            }

          case 3:
            this.h20_1 = this.n20_1;
            this.p8_1 = 4;
            continue $sm;
          case 4:
            var tmp1_subject = access$updateCellSend(this.i20_1, this.h20_1, this.g20_1, this.l20_1, this.k20_1, this.j20_1, this.m20_1);
            if (tmp1_subject === 0) {
              this.h20_1.w1x();
              this.p8_1 = 13;
              continue $sm;
            } else {
              if (tmp1_subject === 1) {
                this.p8_1 = 13;
                continue $sm;
              } else {
                if (tmp1_subject === 2) {
                  if (this.m20_1) {
                    this.h20_1.m1x();
                    this.p8_1 = 9;
                    suspendResult = onClosedSend(this.e20_1, this.f20_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.p8_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (tmp1_subject === 4) {
                    if (this.k20_1 < this.i20_1.z1y()) {
                      this.h20_1.w1x();
                    }
                    this.p8_1 = 7;
                    suspendResult = onClosedSend(this.e20_1, this.f20_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp1_subject === 5) {
                      this.h20_1.w1x();
                      this.p8_1 = 2;
                      continue $sm;
                    } else {
                      if (tmp1_subject === 3) {
                        var tmp0_1 = this.h20_1;
                        var tmp2 = this.g20_1;
                        var tmp4 = this.l20_1;
                        var s = this.k20_1;
                        this.p8_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.e20_1, tmp0_1, tmp2, tmp4, s, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.p8_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.p8_1 = 2;
            continue $sm;
          case 6:
            this.p8_1 = 13;
            continue $sm;
          case 7:
            this.p8_1 = 13;
            continue $sm;
          case 8:
            var tmp_3 = this.j20_1;
            var tmp2_safe_receiver = (!(tmp_3 == null) ? isInterface(tmp_3, Waiter) : false) ? tmp_3 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              access$prepareSenderForSuspension(this.i20_1, tmp2_safe_receiver, this.h20_1, this.g20_1);
            }

            this.h20_1;
            this.g20_1;
            this.p8_1 = 13;
            continue $sm;
          case 9:
            this.p8_1 = 13;
            continue $sm;
          case 10:
            this.p8_1 = 13;
            continue $sm;
          case 11:
            throw this.s8_1;
          case 12:
            if (false) {
              this.p8_1 = 1;
              continue $sm;
            }

            this.p8_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
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
  function $receiveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z20_1 = _this__u8e3s4;
  }
  protoOf($receiveCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 8;
            this.j21_1 = this.z20_1;
            this.i21_1 = null;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            this.f21_1 = this.j21_1;
            this.g21_1 = this.i21_1;
            this.c21_1 = this.f21_1.f1x_1.kotlinx$atomicfu$value;
            this.p8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.p8_1 = 9;
              continue $sm;
            }

            if (this.f21_1.d1y()) {
              var tmp_0 = this;
              throw recoverStackTrace_0(_get_receiveException__foorc1(this.z20_1));
            } else {
              this.p8_1 = 3;
              continue $sm;
            }

          case 3:
            this.d21_1 = this.f21_1.b1x_1.atomicfu$getAndIncrement$long();
            var tmp0 = this.d21_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_1 = this;
            var tmp0_0 = this.d21_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_1.e21_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!(this.c21_1.m1o_1 === id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this.f21_1, id, this.c21_1);
              if (tmp0_elvis_lhs == null) {
                this.p8_1 = 2;
                var tmp_2 = this;
                continue $sm;
              } else {
                this.h21_1 = tmp0_elvis_lhs;
                this.p8_1 = 4;
                continue $sm;
              }
            } else {
              this.p8_1 = 5;
              continue $sm;
            }

          case 4:
            this.c21_1 = this.h21_1;
            this.p8_1 = 5;
            continue $sm;
          case 5:
            var updCellResult = updateCellReceive(this.f21_1, this.c21_1, this.e21_1, this.d21_1, this.g21_1);
            if (updCellResult === get_SUSPEND()) {
              var tmp_3 = this;
              var tmp_4 = this.g21_1;
              var tmp1_safe_receiver = (!(tmp_4 == null) ? isInterface(tmp_4, Waiter) : false) ? tmp_4 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.f21_1, tmp1_safe_receiver, this.c21_1, this.e21_1);
              }
              this.c21_1;
              this.e21_1;
              this.d21_1;
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (updCellResult === get_FAILED()) {
                if (this.d21_1 < this.f21_1.c1y()) {
                  this.c21_1.w1x();
                }
                this.p8_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                if (updCellResult === get_SUSPEND_NO_WAITER()) {
                  var tmp0_1 = this.c21_1;
                  var tmp2 = this.e21_1;
                  var r = this.d21_1;
                  this.p8_1 = 6;
                  suspendResult = receiveOnNoWaiterSuspend(this.z20_1, tmp0_1, tmp2, r, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_6 = this;
                  this.c21_1.w1x();
                  return updCellResult;
                }
              }
            }

          case 6:
            this.b21_1 = suspendResult;
            this.p8_1 = 7;
            continue $sm;
          case 7:
            this.a21_1 = this.b21_1;
            this.p8_1 = 10;
            continue $sm;
          case 8:
            throw this.s8_1;
          case 9:
            if (false) {
              this.p8_1 = 1;
              continue $sm;
            }

            this.p8_1 = 10;
            continue $sm;
          case 10:
            return this.a21_1;
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
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.y1w_1 = capacity;
    this.z1w_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    if (!(this.y1w_1 >= 0)) {
      var message = 'Invalid channel capacity: ' + this.y1w_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.a1x_1 = atomic$long$1(0n);
    this.b1x_1 = atomic$long$1(0n);
    this.c1x_1 = atomic$long$1(initialBufferEnd(this.y1w_1));
    this.d1x_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(0n, null, this, 3);
    this.e1x_1 = atomic$ref$1(firstSegment);
    this.f1x_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.g1x_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.z1w_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.h1x_1 = tmp_3;
    this.i1x_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.j1x_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).c1y = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    return this.a1x_1.kotlinx$atomicfu$value & 1152921504606846975n;
  };
  protoOf(BufferedChannel).z1y = function () {
    return this.b1x_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).k21 = function (element, $completion) {
    var tmp = new $sendCOROUTINE$(this, element, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(BufferedChannel).l21 = function (element) {
    if (shouldSendSuspend0(this, this.a1x_1.kotlinx$atomicfu$value))
      return Companion_getInstance_0().m21();
    var tmp4 = get_INTERRUPTED_SEND();
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = access$_get_sendSegment__111kgq(this).kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s(this).atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur & 1152921504606846975n;
        var closed = access$_get_isClosedForSend0__sm8f7a(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(s, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = modulo(s, fromInt(other_0));
        var i = convertToInt(tmp$ret$3);
        if (!(segment.m1o_1 === id)) {
          var tmp0_elvis_lhs = access$findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              tmp$ret$0 = Companion_getInstance_0().s1z(this.y1y());
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (access$updateCellSend(this, segment, i, element, s, tmp4, closed)) {
          case 0:
            segment.w1x();
            tmp$ret$0 = Companion_getInstance_0().e1z(Unit_instance);
            break $l$block_5;
          case 1:
            tmp$ret$0 = Companion_getInstance_0().e1z(Unit_instance);
            break $l$block_5;
          case 2:
            if (closed) {
              segment.m1x();
              tmp$ret$0 = Companion_getInstance_0().s1z(this.y1y());
              break $l$block_5;
            }

            var tmp2_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              access$prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
            }

            segment.m1x();
            tmp$ret$0 = Companion_getInstance_0().m21();
            break $l$block_5;
          case 4:
            if (s < this.z1y()) {
              segment.w1x();
            }

            tmp$ret$0 = Companion_getInstance_0().s1z(this.y1y());
            break $l$block_5;
          case 5:
            segment.w1x();
            continue $l$loop_0;
          case 3:
            // Inline function 'kotlin.error' call

            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(BufferedChannel).h1z = function () {
  };
  protoOf(BufferedChannel).a1z = function () {
  };
  protoOf(BufferedChannel).n21 = function ($completion) {
    var tmp = new $receiveCOROUTINE$(this, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(BufferedChannel).q1z = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.f1x_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.b1x_1.kotlinx$atomicfu$value;
      // Inline function 'kotlin.Long.plus' call
      var other = this.y1w_1;
      var tmp0 = add(r, fromInt(other));
      // Inline function 'kotlin.math.max' call
      var b = _get_bufferEndCounter__2d4hee(this);
      if (globalCellIndex < (tmp0 >= b ? tmp0 : b))
        return Unit_instance;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$3 = add(r, fromInt(1));
      if (!this.b1x_1.atomicfu$compareAndSet(r, tmp$ret$3))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = divide(r, fromInt(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var tmp$ret$5 = modulo(r, fromInt(other_1));
      var i = convertToInt(tmp$ret$5);
      if (!(segment.m1o_1 === id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive(this, segment, i, r, null);
      if (updCellResult === get_FAILED()) {
        if (r < this.c1y()) {
          segment.w1x();
        }
      } else {
        segment.w1x();
        var tmp1_safe_receiver = this.z1w_1;
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp1_safe_receiver, updCellResult);
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          throw tmp2_safe_receiver;
        }
      }
    }
  };
  protoOf(BufferedChannel).l1x = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_instance;
    while (_get_bufferEndCounter__2d4hee(this) <= globalIndex) {
    }
    // Inline function 'kotlin.repeat' call
    var times = get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS();
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = _get_bufferEndCounter__2d4hee(this);
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var ebCompleted = this.d1x_1.kotlinx$atomicfu$value & 4611686018427387903n;
        if (b === ebCompleted && b === _get_bufferEndCounter__2d4hee(this))
          return Unit_instance;
      }
       while (inductionVariable < times);
    var tmp0 = this.d1x_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp$ret$5 = cur & 4611686018427387903n;
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$5, true);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.d1x_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = ebCompletedAndBit & 4611686018427387903n;
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !((ebCompletedAndBit & 4611686018427387904n) === 0n);
      if (b_0 === ebCompleted_0 && b_0 === _get_bufferEndCounter__2d4hee(this)) {
        var tmp0_0 = this.d1x_1;
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          while (true) {
            var cur_0 = tmp0_0.kotlinx$atomicfu$value;
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            var tmp$ret$10 = cur_0 & 4611686018427387903n;
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$10, false);
            if (tmp0_0.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_instance;
      }
      if (!pauseExpandBuffers) {
        this.d1x_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).t = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).b1y = function () {
    var tmp = this.i1x_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).y1y = function () {
    var tmp0_elvis_lhs = this.b1y();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).o21 = function () {
  };
  protoOf(BufferedChannel).p21 = function (cause) {
    return this.q21(cause, false);
  };
  protoOf(BufferedChannel).u1l = function (cause) {
    this.s21(cause);
  };
  protoOf(BufferedChannel).s21 = function (cause) {
    return this.q21(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).q21 = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.i1x_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    this.o21();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).r1z = function () {
    return false;
  };
  protoOf(BufferedChannel).p1z = function () {
    return _get_isClosedForSend0__kxgf9m(this, this.a1x_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).d1y = function () {
    return _get_isClosedForReceive0__f7qknl(this, this.a1x_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).t1z = function () {
    $l$loop: while (true) {
      var segment = this.f1x_1.kotlinx$atomicfu$value;
      var r = this.z1y();
      var s = this.c1y();
      if (s <= r)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = divide(r, fromInt(other));
      if (!(segment.m1o_1 === id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (this.f1x_1.kotlinx$atomicfu$value.m1o_1 < id) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.w1x();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var tmp$ret$1 = modulo(r, fromInt(other_0));
      var i = convertToInt(tmp$ret$1);
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = add(r, fromInt(1));
      this.b1x_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var this_0 = this.a1x_1.kotlinx$atomicfu$value;
    var tmp0_subject = convertToInt(shiftRight(this_0, 60));
    if (tmp0_subject === 2) {
      sb.q('closed,');
    } else if (tmp0_subject === 3) {
      sb.q('cancelled,');
    }
    sb.q('capacity=' + this.y1w_1 + ',');
    sb.q('data=[');
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = listOf([this.f1x_1.kotlinx$atomicfu$value, this.e1x_1.kotlinx$atomicfu$value, this.g1x_1.kotlinx$atomicfu$value]);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (!(element === get_NULL_SEGMENT())) {
        destination.b1(element);
      }
    }
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var iterator = destination.t();
      if (!iterator.u())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.v();
      if (!iterator.u()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      var minValue = minElem.m1o_1;
      do {
        var e = iterator.v();
        var v = e.m1o_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.u());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.z1y();
    var s = this.c1y();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_0 = segment.m1o_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_1 = multiply(tmp0_0, fromInt(other));
          var globalCellIndex = add(this_1, fromInt(i));
          if (globalCellIndex >= s && globalCellIndex >= r)
            break append_elements;
          var cellState = segment.u1w(i);
          var element_0 = segment.r1w(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = (s <= globalCellIndex ? globalCellIndex < r : false) ? 'receive' : (r <= globalCellIndex ? globalCellIndex < s : false) ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = (s <= globalCellIndex ? globalCellIndex < r : false) ? 'onReceive' : (r <= globalCellIndex ? globalCellIndex < s : false) ? 'onSend' : 'select';
            } else {
              if (cellState instanceof ReceiveCatching) {
                tmp = 'receiveCatching';
              } else {
                if (cellState instanceof SendBroadcast) {
                  tmp = 'sendBroadcast';
                } else {
                  if (cellState instanceof WaiterEB) {
                    tmp = 'EB(' + cellState.toString() + ')';
                  } else {
                    if (equals(cellState, get_RESUMING_BY_RCV()) || equals(cellState, get_RESUMING_BY_EB())) {
                      tmp = 'resuming_sender';
                    } else {
                      if (cellState == null || (equals(cellState, get_IN_BUFFER()) || equals(cellState, get_DONE_RCV())) || (equals(cellState, get_POISONED()) || equals(cellState, get_INTERRUPTED_RCV()) || (equals(cellState, get_INTERRUPTED_SEND()) || equals(cellState, get_CHANNEL_CLOSED())))) {
                        continue process_cell;
                      } else {
                        tmp = toString(cellState);
                      }
                    }
                  }
                }
              }
            }
          }
          var cellStateString = tmp;
          if (!(element_0 == null)) {
            sb.q('(' + cellStateString + ',' + toString(element_0) + '),');
          } else {
            sb.q(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp4_elvis_lhs = segment.s1x();
      var tmp_0;
      if (tmp4_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp4_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.nc(sb.a() - 1 | 0);
    }
    sb.q(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.b1z_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + toString(this.b1z_1) + ')';
  };
  function initialBufferEnd(capacity) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    switch (capacity) {
      case 0:
        return 0n;
      case 2147483647:
        return 9223372036854775807n;
      default:
        return fromInt(capacity);
    }
  }
  function ReceiveCatching() {
  }
  function tryResume0(_this__u8e3s4, value, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_BufferedChannel_kt__d6uc4y();
    // Inline function 'kotlin.let' call
    var token = _this__u8e3s4.j1n(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.k1n(token);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return add(pauseEB ? 4611686018427387904n : 0n, counter);
  }
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return add(shiftLeft(fromInt(closeStatus), 60), counter);
  }
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.o1w(), 0);
  }
  function createSegment$ref() {
    return constructCallableReference(function (p0, p1) {
      return createSegment(p0, p1);
    }, 2, 0, 14, 'createSegment');
  }
  var properties_initialized_BufferedChannel_kt_58tjvw;
  function _init_properties_BufferedChannel_kt__d6uc4y() {
    if (!properties_initialized_BufferedChannel_kt_58tjvw) {
      properties_initialized_BufferedChannel_kt_58tjvw = true;
      NULL_SEGMENT = new ChannelSegment(-1n, null, null, 0);
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.bufferedChannel.segmentSize', 32);
      EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS = systemProp('kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations', 10000);
      BUFFERED = new Symbol('BUFFERED');
      IN_BUFFER = new Symbol('SHOULD_BUFFER');
      RESUMING_BY_RCV = new Symbol('S_RESUMING_BY_RCV');
      RESUMING_BY_EB = new Symbol('RESUMING_BY_EB');
      POISONED = new Symbol('POISONED');
      DONE_RCV = new Symbol('DONE_RCV');
      INTERRUPTED_SEND = new Symbol('INTERRUPTED_SEND');
      INTERRUPTED_RCV = new Symbol('INTERRUPTED_RCV');
      CHANNEL_CLOSED = new Symbol('CHANNEL_CLOSED');
      SUSPEND = new Symbol('SUSPEND');
      SUSPEND_NO_WAITER = new Symbol('SUSPEND_NO_WAITER');
      FAILED = new Symbol('FAILED');
      NO_RECEIVE_RESULT = new Symbol('NO_RECEIVE_RESULT');
      CLOSE_HANDLER_CLOSED = new Symbol('CLOSE_HANDLER_CLOSED');
      CLOSE_HANDLER_INVOKED = new Symbol('CLOSE_HANDLER_INVOKED');
      NO_CLOSE_CAUSE = new Symbol('NO_CLOSE_CAUSE');
    }
  }
  function Factory() {
    Factory_instance = this;
    this.u21_1 = 2147483647;
    this.v21_1 = 0;
    this.w21_1 = -1;
    this.x21_1 = -2;
    this.y21_1 = -3;
    this.z21_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.a22_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function ReceiveChannel() {
  }
  function SendChannel() {
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b22_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.b22_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.b22_1, other.b22_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.b22_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + toString_0(this.b22_1) + ')';
  };
  function Companion() {
    Companion_instance_0 = this;
    this.d1z_1 = new Failed();
  }
  protoOf(Companion).e1z = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).m21 = function () {
    return _ChannelResult___init__impl__siwsuf(this.d1z_1);
  };
  protoOf(Companion).s1z = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed(cause));
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed) {
      tmp = _ChannelResult___get_holder__impl__pm9gzw($this).toString();
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other.v1z_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_0();
    this.v1z_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.v1z_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.v1z_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.v1z_1, other);
  };
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp;
    switch (capacity) {
      case 0:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(0, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      case -1:
        // Inline function 'kotlin.require' call

        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }

        tmp = new ConflatedBufferedChannel(1, BufferOverflow_DROP_OLDEST_getInstance(), onUndeliveredElement);
        break;
      case 2147483647:
        tmp = new BufferedChannel(2147483647, onUndeliveredElement);
        break;
      case -2:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().a22_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.f22_1 = _channel;
  }
  protoOf(ChannelCoroutine).u1l = function (cause) {
    if (this.h1l())
      return Unit_instance;
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.p1k() : null, null, this);
    } else {
      tmp = cause;
    }
    this.w1l(tmp);
  };
  protoOf(ChannelCoroutine).t21 = function (cause, $super) {
    return this.v1l(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).w1l = function (cause) {
    var exception = this.m1l(cause);
    this.f22_1.u1l(exception);
    this.z1l(exception);
  };
  protoOf(ChannelCoroutine).p1z = function () {
    return this.f22_1.p1z();
  };
  protoOf(ChannelCoroutine).k21 = function (element, $completion) {
    return this.f22_1.k21(element, $completion);
  };
  protoOf(ChannelCoroutine).l21 = function (element) {
    return this.f22_1.l21(element);
  };
  protoOf(ChannelCoroutine).p21 = function (cause) {
    return this.f22_1.p21(cause);
  };
  protoOf(ChannelCoroutine).n21 = function ($completion) {
    return this.f22_1.n21($completion);
  };
  protoOf(ChannelCoroutine).t = function () {
    return this.f22_1.t();
  };
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.u1l(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.t22_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : trySendDropOldest($this, element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).l21.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) || _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp0_safe_receiver = $this.z1w_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        throw tmp1_safe_receiver;
      }
    }
    return Companion_getInstance_0().e1z(Unit_instance);
  }
  function trySendDropOldest($this, element) {
    var tmp4 = get_BUFFERED();
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = access$_get_sendSegment__111kgq($this).kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s($this).atomicfu$getAndIncrement$long();
        var s = sendersAndCloseStatusCur & 1152921504606846975n;
        var closed = access$_get_isClosedForSend0__sm8f7a($this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(s, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = modulo(s, fromInt(other_0));
        var i = convertToInt(tmp$ret$3);
        if (!(segment.m1o_1 === id)) {
          var tmp0_elvis_lhs = access$findSegmentSend($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              return Companion_getInstance_0().s1z($this.y1y());
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (access$updateCellSend($this, segment, i, element, s, tmp4, closed)) {
          case 0:
            segment.w1x();
            return Companion_getInstance_0().e1z(Unit_instance);
          case 1:
            return Companion_getInstance_0().e1z(Unit_instance);
          case 2:
            if (closed) {
              segment.m1x();
              return Companion_getInstance_0().s1z($this.y1y());
            }

            var tmp2_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              access$prepareSenderForSuspension($this, tmp2_safe_receiver, segment, i);
            }

            var tmp0 = segment.m1o_1;
            // Inline function 'kotlin.Long.times' call

            var other_1 = get_SEGMENT_SIZE();
            // Inline function 'kotlin.Long.plus' call

            var this_0 = multiply(tmp0, fromInt(other_1));
            var tmp$ret$10 = add(this_0, fromInt(i));
            $this.q1z(tmp$ret$10);
            return Companion_getInstance_0().e1z(Unit_instance);
          case 4:
            if (s < $this.z1y()) {
              segment.w1x();
            }

            return Companion_getInstance_0().s1z($this.y1y());
          case 5:
            segment.w1x();
            continue $l$loop_0;
          case 3:
            // Inline function 'kotlin.error' call

            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$0;
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.s22_1 = capacity;
    this.t22_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    if (!!(this.t22_1 === BufferOverflow_SUSPEND_getInstance())) {
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).o() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.s22_1 >= 1)) {
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.s22_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).r1z = function () {
    return this.t22_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).k21 = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp0_safe_receiver = this.z1w_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, this.y1y());
        throw tmp1_safe_receiver;
      }
      throw this.y1y();
    }
    return Unit_instance;
  };
  protoOf(ConflatedBufferedChannel).l21 = function (element) {
    return trySendImpl(this, element, false);
  };
  function produce(_this__u8e3s4, context, capacity, block) {
    context = context === VOID ? EmptyCoroutineContext_instance : context;
    capacity = capacity === VOID ? 0 : capacity;
    return produce_0(_this__u8e3s4, context, capacity, BufferOverflow_SUSPEND_getInstance(), CoroutineStart_DEFAULT_getInstance(), null, block);
  }
  function ProducerScope() {
  }
  function produce_0(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_instance : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.n1l(onCompletion);
    }
    coroutine.z1k(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).m1k = function () {
    return protoOf(ChannelCoroutine).m1k.call(this);
  };
  protoOf(ProducerCoroutine).y22 = function (value) {
    this.f22_1.r21();
  };
  protoOf(ProducerCoroutine).n1k = function (value) {
    return this.y22(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).o1k = function (cause, handled) {
    var processed = this.f22_1.p21(cause);
    if (!processed && !handled) {
      handleCoroutineException(this.k1k_1, cause);
    }
  };
  protoOf(ProducerCoroutine).t21 = function (cause, $super) {
    return this.v1l(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.m1o_1 = id;
    this.n1o_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).n1x = function () {
    return this.n1o_1.kotlinx$atomicfu$value === this.p1w() && !this.u1x();
  };
  protoOf(Segment).o1x = function () {
    var tmp0 = this.n1o_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        if (!(!(cur === this.p1w()) || this.u1x())) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        if (tmp0.atomicfu$compareAndSet(cur, cur + 65536 | 0)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(Segment).p1x = function () {
    return this.n1o_1.atomicfu$addAndGet(-65536) === this.p1w() && !this.u1x();
  };
  protoOf(Segment).m1x = function () {
    if (this.n1o_1.atomicfu$incrementAndGet() === this.p1w()) {
      this.h4();
    }
  };
  function close(_this__u8e3s4) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return cur;
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (next === null) {
        if (cur.x1x())
          return cur;
      } else {
        cur = next;
      }
    }
  }
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      // Inline function 'kotlin.error' call
      var message = 'Does not contain segment';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function SegmentOrClosed__toString_impl_pzb2an($this) {
    return 'SegmentOrClosed(value=' + toString_0($this) + ')';
  }
  function SegmentOrClosed__hashCode_impl_4855hs($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function SegmentOrClosed__equals_impl_6erq1g($this, other) {
    if (!(other instanceof SegmentOrClosed))
      return false;
    var tmp0_other_with_cast = other.u1z_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.u1z_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.u1z_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.u1z_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.u1z_1, other);
  };
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.q1x_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.v1x();
    while (!(cur === null) && cur.n1x())
      cur = cur.r1x_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.s1x());
    while (cur.n1x()) {
      var tmp0_elvis_lhs = cur.s1x();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return cur;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      cur = tmp;
    }
    return cur;
  }
  function access$_get_nextOrClosed__ywzond($this) {
    return _get_nextOrClosed__w0gmuv($this);
  }
  function ConcurrentLinkedListNode(prev) {
    this.q1x_1 = atomic$ref$1(null);
    this.r1x_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).s1x = function () {
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
    // Inline function 'kotlin.let' call
    var it = access$_get_nextOrClosed__ywzond(this);
    var tmp;
    if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
      return null;
    } else {
      tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
    }
    return tmp;
  };
  protoOf(ConcurrentLinkedListNode).t1x = function (value) {
    return this.q1x_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).u1x = function () {
    return this.s1x() == null;
  };
  protoOf(ConcurrentLinkedListNode).v1x = function () {
    return this.r1x_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).w1x = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.r1x_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).x1x = function () {
    return this.q1x_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).h4 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.u1x())
      return Unit_instance;
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      var tmp0 = next.r1x_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          var upd = cur === null ? null : prev;
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
      if (!(prev === null))
        prev.q1x_1.kotlinx$atomicfu$value = next;
      if (next.n1x() && !next.u1x())
        continue $l$loop_0;
      if (!(prev === null) && prev.n1x())
        continue $l$loop_0;
      return Unit_instance;
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (cur.m1o_1 < id || cur.n1x()) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      // Inline function 'kotlin.Long.plus' call
      var this_1 = cur.m1o_1;
      var newTail = createNewSegment(add(this_1, fromInt(1)), cur);
      if (cur.t1x(newTail)) {
        if (cur.n1x()) {
          cur.h4();
        }
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  function access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy() {
    return get_CLOSED();
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function handleUncaughtCoroutineException(context, exception) {
    var _iterator__ex2g4s = get_platformExceptionHandlers().t();
    while (_iterator__ex2g4s.u()) {
      var handler = _iterator__ex2g4s.v();
      try {
        handler.k1r(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _unused_var__etf5q3 = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p_0) {
      if ($p_0 instanceof Error) {
        var e = $p_0;
      } else {
        throw $p_0;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWithInternal(_this__u8e3s4, result) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith' call
      var state = toState_0(result);
      if (safeIsDispatchNeeded(_this__u8e3s4.z1n_1, _this__u8e3s4.v8())) {
        _this__u8e3s4.b1o_1 = state;
        _this__u8e3s4.i1o_1 = 1;
        safeDispatch(_this__u8e3s4.z1n_1, _this__u8e3s4.v8(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().d1s();
          if (false && eventLoop.y1r()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.x1r()) {
            _this__u8e3s4.b1o_1 = state;
            _this__u8e3s4.i1o_1 = 1;
            eventLoop.w1r(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.z1r(true);
            try {
              var tmp$ret$5;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.v8().c9(Key_instance_3);
                if (!(job == null) && !job.m1k()) {
                  var cause = job.k1l();
                  _this__u8e3s4.c1p(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.a9(tmp$ret$7);
                  tmp$ret$5 = true;
                  break $l$block_0;
                }
                tmp$ret$5 = false;
              }
              if (!tmp$ret$5) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.a1o_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.c1o_1;
                _this__u8e3s4.a1o_1.a9(result);
              }
              $l$loop: while (eventLoop.v1r()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.x1p(e);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.a1s(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_instance;
    } else {
      _this__u8e3s4.a9(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.d1o_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.z1n_1 = dispatcher;
    this.a1o_1 = continuation;
    this.b1o_1 = get_UNDEFINED();
    this.c1o_1 = threadContextElements(this.v8());
    this.d1o_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).h1o = function () {
    return !(this.d1o_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).z22 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.d1o_1;
    while (true) {
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).i1r = function () {
    this.z22();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1o();
    }
  };
  protoOf(DispatchedContinuation).e1o = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.d1o_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === null) {
        this.d1o_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this.d1o_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
            return state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          }
        } else {
          if (state !== get_REUSABLE_CLAIMED()) {
            if (!(state instanceof Error)) {
              // Inline function 'kotlin.error' call
              var message = 'Inconsistent state ' + toString(state);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).l1p = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.d1o_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.d1o_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!this.d1o_1.atomicfu$compareAndSet(state, null)) {
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          // Inline function 'kotlin.error' call
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).j1o = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.d1o_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.d1o_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.d1o_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).b1p = function () {
    var state = this.b1o_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.b1o_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).z1o = function () {
    return this;
  };
  protoOf(DispatchedContinuation).a9 = function (result) {
    var state = toState_0(result);
    if (safeIsDispatchNeeded(this.z1n_1, this.v8())) {
      this.b1o_1 = state;
      this.i1o_1 = 0;
      safeDispatch(this.z1n_1, this.v8(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().d1s();
        if (false && eventLoop.y1r()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.x1r()) {
          this.b1o_1 = state;
          this.i1o_1 = 0;
          eventLoop.w1r(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.z1r(true);
          try {
            this.v8();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.c1o_1;
            this.a1o_1.a9(result);
            $l$loop: while (eventLoop.v1r()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.x1p(e);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.a1s(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.z1n_1.toString() + ', ' + toDebugString(this.a1o_1) + ']';
  };
  protoOf(DispatchedContinuation).v8 = function () {
    return this.a1o_1.v8();
  };
  function safeDispatch(_this__u8e3s4, context, runnable) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    try {
      _this__u8e3s4.h1r(context, runnable);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        throw new DispatchException(e, _this__u8e3s4, context);
      } else {
        throw $p;
      }
    }
  }
  function safeIsDispatchNeeded(_this__u8e3s4, context) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    try {
      return _this__u8e3s4.g1r(context);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        throw new DispatchException(e, _this__u8e3s4, context);
      } else {
        throw $p;
      }
    }
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.i1o_1 = resumeMode;
  }
  protoOf(DispatchedTask).c1p = function (takenState, cause) {
  };
  protoOf(DispatchedTask).k1p = function (state) {
    return state;
  };
  protoOf(DispatchedTask).u1p = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r1k_1;
  };
  protoOf(DispatchedTask).w1p = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    try {
      var tmp = this.z1o();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.a1o_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.c1o_1;
      var context = continuation.v8();
      var state = this.b1p();
      var exception = this.u1p(state);
      var job = exception == null && get_isCancellableMode(this.i1o_1) ? context.c9(Key_instance_3) : null;
      if (!(job == null) && !job.m1k()) {
        var cause = job.k1l();
        this.c1p(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.a9(tmp$ret$4);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.a9(tmp$ret$6);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.k1p(state);
          var tmp$ret$8 = _Result___init__impl__xyqfz8(value);
          continuation.a9(tmp$ret$8);
        }
      }
    } catch ($p) {
      if ($p instanceof DispatchException) {
        var e = $p;
        handleCoroutineException(this.z1o().v8(), e.j1r_1);
      } else {
        if ($p instanceof Error) {
          var e_0 = $p;
          this.x1p(e_0);
        } else {
          throw $p;
        }
      }
    }
  };
  protoOf(DispatchedTask).x1p = function (exception) {
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", exception);
    handleCoroutineException(this.z1o().v8(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.z1o();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.i1o_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.z1n_1;
      var context = delegate.v8();
      if (safeIsDispatchNeeded(dispatcher, context)) {
        safeDispatch(dispatcher, context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function DispatchException(cause, dispatcher, context) {
    Exception_init_$Init$('Coroutine dispatcher ' + dispatcher.toString() + ' threw an exception, context = ' + toString(context), cause, this);
    captureStack(this, DispatchException);
    this.j1r_1 = cause;
    delete this.cause;
  }
  protoOf(DispatchException).f = function () {
    return this.j1r_1;
  };
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().d1s();
    if (eventLoop.x1r()) {
      eventLoop.w1r(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.z1r(true);
      try {
        resume(_this__u8e3s4, _this__u8e3s4.z1o(), true);
        $l$loop: while (eventLoop.v1r()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.x1p(e);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.a1s(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.b1p();
    var exception = _this__u8e3s4.u1p(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.k1p(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      this_0.a1o_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.c1o_1;
      this_0.a1o_1.a9(result);
    } else {
      delegate.a9(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).b1(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        list.b1(_get_holder__f6h5pd($this));
        list.b1(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function access$_get_holder__kkflen($this) {
    return _get_holder__f6h5pd($this);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      handleCoroutineException(context, tmp0_safe_receiver);
    }
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) && !(undeliveredElementException.cause === ex)) {
          addSuppressed(undeliveredElementException, ex);
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + toString_0(element), ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.d1w_1 = uCont;
  }
  protoOf(ScopeCoroutine).f1m = function () {
    return true;
  };
  protoOf(ScopeCoroutine).w1k = function (state) {
    resumeCancellableWithInternal(intercepted(this.d1w_1), recoverResult(state, this.d1w_1));
  };
  protoOf(ScopeCoroutine).e1w = function () {
  };
  protoOf(ScopeCoroutine).v1k = function (state) {
    this.d1w_1.a9(recoverResult(state, this.d1w_1));
  };
  function ContextScope(context) {
    this.a23_1 = context;
  }
  protoOf(ContextScope).l1k = function () {
    return this.a23_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.a23_1) + ')';
  };
  function Symbol(symbol) {
    this.b23_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.b23_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? 2147483647 : maxValue;
    return convertToInt(systemProp_0(propertyName, fromInt(defaultValue), fromInt(minValue), fromInt(maxValue)));
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1n : minValue;
    maxValue = maxValue === VOID ? 9223372036854775807n : maxValue;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue <= parsed ? parsed <= maxValue : false)) {
      // Inline function 'kotlin.error' call
      var message_0 = "System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, completion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(createCoroutineUnintercepted_0(_this__u8e3s4, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWithInternal(tmp, tmp$ret$2);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWithInternal(tmp, tmp$ret$2);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function startCoroutineCancellable_1(_this__u8e3s4, fatalCompletion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWithInternal(tmp, tmp$ret$2);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(fatalCompletion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function dispatcherFailure(completion, e) {
    var tmp;
    if (e instanceof DispatchException) {
      tmp = e.j1r_1;
    } else {
      tmp = e;
    }
    var reportException = tmp;
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(reportException));
    completion.a9(tmp$ret$0);
    throw reportException;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      // Inline function 'kotlinx.coroutines.withCoroutineContext' call
      actualCompletion.v8();
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineResumed' call
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_1;
        if (e instanceof DispatchException) {
          tmp_1 = e.j1r_1;
        } else {
          tmp_1 = e;
        }
        var reportException = tmp_1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(reportException));
        actualCompletion.a9(tmp$ret$6);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$8 = _Result___init__impl__xyqfz8(value);
      actualCompletion.a9(tmp$ret$8);
    }
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    return startUndispatched(_this__u8e3s4, false, receiver, block);
  }
  function startUndispatched(_this__u8e3s4, alwaysRethrow, receiver, block) {
    var tmp;
    try {
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof DispatchException) {
        var e = $p;
        dispatchExceptionAndMakeCompleting(_this__u8e3s4, e);
      } else {
        if ($p instanceof Error) {
          var e_0 = $p;
          tmp_0 = new CompletedExceptionally(e_0);
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var result = tmp;
    if (result === get_COROUTINE_SUSPENDED())
      return get_COROUTINE_SUSPENDED();
    var state = _this__u8e3s4.u1k(result);
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return get_COROUTINE_SUSPENDED();
    _this__u8e3s4.e1w();
    var tmp_1;
    if (state instanceof CompletedExceptionally) {
      var tmp_2;
      if (alwaysRethrow || notOwnTimeout(_this__u8e3s4, state.r1k_1)) {
        throw recoverStackTrace(state.r1k_1, _this__u8e3s4.d1w_1);
      } else {
        if (result instanceof CompletedExceptionally) {
          throw recoverStackTrace(result.r1k_1, _this__u8e3s4.d1w_1);
        } else {
          tmp_2 = result;
        }
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = unboxState(state);
    }
    return tmp_1;
  }
  function dispatchExceptionAndMakeCompleting(_this__u8e3s4, e) {
    _this__u8e3s4.c1m(new CompletedExceptionally(e.j1r_1));
    throw recoverStackTrace(e.j1r_1, _this__u8e3s4.d1w_1);
  }
  function notOwnTimeout(_this__u8e3s4, cause) {
    var tmp;
    if (!(cause instanceof TimeoutCancellationException)) {
      tmp = true;
    } else {
      tmp = !(cause.u1v_1 === _this__u8e3s4);
    }
    return tmp;
  }
  var DUMMY_PROCESS_RESULT_FUNCTION;
  function get_STATE_REG() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_REG;
  }
  var STATE_REG;
  function get_STATE_COMPLETED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_COMPLETED;
  }
  var STATE_COMPLETED;
  function get_STATE_CANCELLED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_CANCELLED;
  }
  var STATE_CANCELLED;
  function get_NO_RESULT() {
    _init_properties_Select_kt__zhm2jg();
    return NO_RESULT;
  }
  var NO_RESULT;
  var PARAM_CLAUSE_0;
  function SelectInstance() {
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.j1z_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.g23($this, internalResult);
        if ($this.j1z_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.l1z_1 = internalResult;
          if (tryResume_0(cont, onCancellation))
            return 0;
          $this.l1z_1 = get_NO_RESULT();
          return 2;
        }
      } else {
        var tmp_0;
        if (equals(curState, get_STATE_COMPLETED())) {
          tmp_0 = true;
        } else {
          tmp_0 = curState instanceof ClauseData;
        }
        if (tmp_0)
          return 3;
        else {
          if (equals(curState, get_STATE_CANCELLED()))
            return 2;
          else {
            if (equals(curState, get_STATE_REG())) {
              if ($this.j1z_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, KtList)) {
                if ($this.j1z_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
                  return 1;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected state: ' + toString(curState);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  }
  function findClause($this, clauseObject) {
    var tmp0_elvis_lhs = $this.k1z_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = clauses.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (element.d23_1 === clauseObject) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Clause with object ' + toString(clauseObject) + ' is not found';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function ClauseData() {
  }
  protoOf(ClauseData).g23 = function (select, internalResult) {
    var tmp0_safe_receiver = this.f23_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver(select, this.e23_1, internalResult);
  };
  function SelectImplementation() {
  }
  protoOf(SelectImplementation).m1z = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
  var TrySelectDetailedResult_entriesInitialized;
  function TrySelectDetailedResult_initEntries() {
    if (TrySelectDetailedResult_entriesInitialized)
      return Unit_instance;
    TrySelectDetailedResult_entriesInitialized = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  function TrySelectDetailedResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TrySelectDetailedResult_0(trySelectInternalResult) {
    _init_properties_Select_kt__zhm2jg();
    var tmp;
    switch (trySelectInternalResult) {
      case 0:
        tmp = TrySelectDetailedResult_SUCCESSFUL_getInstance();
        break;
      case 1:
        tmp = TrySelectDetailedResult_REREGISTER_getInstance();
        break;
      case 2:
        tmp = TrySelectDetailedResult_CANCELLED_getInstance();
        break;
      case 3:
        tmp = TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
        break;
      default:
        // Inline function 'kotlin.error' call

        var message = 'Unexpected internal result: ' + trySelectInternalResult;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function tryResume_0(_this__u8e3s4, onCancellation) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_elvis_lhs = _this__u8e3s4.j1n(Unit_instance, null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.k1n(token);
    return true;
  }
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_ALREADY_SELECTED_instance;
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      DUMMY_PROCESS_RESULT_FUNCTION = DUMMY_PROCESS_RESULT_FUNCTION$lambda;
      STATE_REG = new Symbol('STATE_REG');
      STATE_COMPLETED = new Symbol('STATE_COMPLETED');
      STATE_CANCELLED = new Symbol('STATE_CANCELLED');
      NO_RESULT = new Symbol('NO_RESULT');
      PARAM_CLAUSE_0 = new Symbol('PARAM_CLAUSE_0');
    }
  }
  function get_NO_OWNER() {
    _init_properties_Mutex_kt__jod56b();
    return NO_OWNER;
  }
  var NO_OWNER;
  var ON_LOCK_ALREADY_LOCKED_BY_OWNER;
  function Mutex(locked) {
    locked = locked === VOID ? false : locked;
    _init_properties_Mutex_kt__jod56b();
    return new MutexImpl(locked);
  }
  function MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this$0, this$1) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      // Inline function 'kotlinx.coroutines.assert' call
      this$0.o23_1.kotlinx$atomicfu$value = this$1.r23_1;
      this$0.t23(this$1.r23_1);
      return Unit_instance;
    };
  }
  function MutexImpl$CancellableContinuationWithOwner$resume$lambda(this$0, this$1) {
    return function (it) {
      this$0.t23(this$1.r23_1);
      return Unit_instance;
    };
  }
  function holdsLockImpl($this, owner) {
    $l$loop: while (true) {
      if (!$this.u23())
        return 0;
      var curOwner = $this.o23_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop;
      return curOwner === owner ? 1 : 2;
    }
  }
  function lockSuspend($this, owner, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      var contWithOwner = new CancellableContinuationWithOwner($this, cancellable, owner);
      $this.acquireCont(contWithOwner);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.j1p();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.i1p();
  }
  function tryLockImpl($this, owner) {
    $l$loop: while (true) {
      if ($this.c24()) {
        // Inline function 'kotlinx.coroutines.assert' call
        $this.o23_1.kotlinx$atomicfu$value = owner;
        return 0;
      } else {
        if (owner == null)
          return 1;
        switch (holdsLockImpl($this, owner)) {
          case 1:
            return 2;
          case 2:
            return 1;
          case 0:
            continue $l$loop;
        }
      }
    }
  }
  function CancellableContinuationWithOwner($outer, cont, owner) {
    this.s23_1 = $outer;
    this.q23_1 = cont;
    this.r23_1 = owner;
  }
  protoOf(CancellableContinuationWithOwner).d24 = function (value, idempotent, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    var token = this.q23_1.j1n(value, idempotent, MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this.s23_1, this));
    if (!(token == null)) {
      // Inline function 'kotlinx.coroutines.assert' call
      this.s23_1.o23_1.kotlinx$atomicfu$value = this.r23_1;
    }
    return token;
  };
  protoOf(CancellableContinuationWithOwner).j1n = function (value, idempotent, onCancellation) {
    return this.d24(value instanceof Unit ? value : THROW_CCE(), idempotent, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).e24 = function (value, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    this.s23_1.o23_1.kotlinx$atomicfu$value = this.r23_1;
    this.q23_1.n1p(Unit_instance, MutexImpl$CancellableContinuationWithOwner$resume$lambda(this.s23_1, this));
  };
  protoOf(CancellableContinuationWithOwner).n1n = function (value, onCancellation) {
    return this.e24(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).h1l = function () {
    return this.q23_1.h1l();
  };
  protoOf(CancellableContinuationWithOwner).k1n = function (token) {
    this.q23_1.k1n(token);
  };
  protoOf(CancellableContinuationWithOwner).l1n = function (handler) {
    this.q23_1.l1n(handler);
  };
  protoOf(CancellableContinuationWithOwner).p1p = function (segment, index) {
    this.q23_1.p1p(segment, index);
  };
  protoOf(CancellableContinuationWithOwner).f24 = function (_this__u8e3s4, value) {
    this.q23_1.m1n(_this__u8e3s4, Unit_instance);
  };
  protoOf(CancellableContinuationWithOwner).m1n = function (_this__u8e3s4, value) {
    return this.f24(_this__u8e3s4, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(CancellableContinuationWithOwner).tg = function (result) {
    this.q23_1.a9(result);
  };
  protoOf(CancellableContinuationWithOwner).a9 = function (result) {
    return this.tg(result);
  };
  protoOf(CancellableContinuationWithOwner).v8 = function () {
    return this.q23_1.v8();
  };
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, $owner) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      this$0.t23($owner);
      return Unit_instance;
    };
  }
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda(this$0) {
    return function (_unused_var__etf5q3, owner, _unused_var__etf5q3_0) {
      return MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, owner);
    };
  }
  function MutexImpl(locked) {
    SemaphoreAndMutexImpl.call(this, 1, locked ? 1 : 0);
    this.o23_1 = atomic$ref$1(locked ? null : get_NO_OWNER());
    var tmp = this;
    tmp.p23_1 = MutexImpl$onSelectCancellationUnlockConstructor$lambda(this);
  }
  protoOf(MutexImpl).u23 = function () {
    return this.g24() === 0;
  };
  protoOf(MutexImpl).h24 = function (owner, $completion) {
    if (this.i24(owner))
      return Unit_instance;
    return lockSuspend(this, owner, $completion);
  };
  protoOf(MutexImpl).i24 = function (owner) {
    var tmp;
    switch (tryLockImpl(this, owner)) {
      case 0:
        tmp = true;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlin.error' call

        var message = 'This mutex is already locked by the specified owner: ' + toString_0(owner);
        throw IllegalStateException_init_$Create$(toString(message));
      default:
        // Inline function 'kotlin.error' call

        var message_0 = 'unexpected';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MutexImpl).t23 = function (owner) {
    $l$loop_0: while (true) {
      // Inline function 'kotlin.check' call
      if (!this.u23()) {
        var message = 'This mutex is not locked';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var curOwner = this.o23_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop_0;
      // Inline function 'kotlin.check' call
      if (!(curOwner === owner || owner == null)) {
        var message_0 = 'This mutex is locked by ' + toString_0(curOwner) + ', but ' + toString_0(owner) + ' is expected';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (!this.o23_1.atomicfu$compareAndSet(curOwner, get_NO_OWNER()))
        continue $l$loop_0;
      this.j24();
      return Unit_instance;
    }
  };
  protoOf(MutexImpl).toString = function () {
    return 'Mutex@' + get_hexAddress(this) + '[isLocked=' + this.u23() + ',owner=' + toString_0(this.o23_1.kotlinx$atomicfu$value) + ']';
  };
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (!properties_initialized_Mutex_kt_yv4p3j) {
      properties_initialized_Mutex_kt_yv4p3j = true;
      NO_OWNER = new Symbol('NO_OWNER');
      ON_LOCK_ALREADY_LOCKED_BY_OWNER = new Symbol('ALREADY_LOCKED_BY_OWNER');
    }
  }
  function get_MAX_SPIN_CYCLES() {
    _init_properties_Semaphore_kt__t514r6();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    _init_properties_Semaphore_kt__t514r6();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    _init_properties_Semaphore_kt__t514r6();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE_0() {
    _init_properties_Semaphore_kt__t514r6();
    return SEGMENT_SIZE_0;
  }
  var SEGMENT_SIZE_0;
  function decPermits($this) {
    $l$loop: while (true) {
      var p = $this.a24_1.atomicfu$getAndDecrement();
      if (p > $this.v23_1)
        continue $l$loop;
      return p;
    }
  }
  function coerceAvailablePermitsAtMaximum($this) {
    $l$loop_0: while (true) {
      var cur = $this.a24_1.kotlinx$atomicfu$value;
      if (cur <= $this.v23_1)
        break $l$loop_0;
      if ($this.a24_1.atomicfu$compareAndSet(cur, $this.v23_1))
        break $l$loop_0;
    }
  }
  function addAcquireToQueue($this, waiter) {
    var curTail = $this.y23_1.kotlinx$atomicfu$value;
    var enqIdx = $this.z23_1.atomicfu$getAndIncrement$long();
    var createNewSegment = createSegment$ref_0();
    var tmp0 = $this.y23_1;
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var tmp2 = divide(enqIdx, fromInt(other));
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(curTail, tmp2, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2_0 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$2;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$3;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (cur.m1o_1 >= tmp2_0.m1o_1) {
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (!tmp2_0.o1x()) {
                tmp$ret$2 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2_0)) {
                if (cur.p1x()) {
                  cur.h4();
                }
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (tmp2_0.p1x()) {
                tmp2_0.h4();
              }
            }
            tmp$ret$2 = tmp$ret$3;
          }
          tmp = tmp$ret$2;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$1);
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var tmp$ret$5 = modulo(enqIdx, fromInt(other_0));
    var i = convertToInt(tmp$ret$5);
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    if (segment.o24_1.atomicfu$get(i).atomicfu$compareAndSet(null, waiter)) {
      waiter.p1p(segment, i);
      return true;
    }
    var tmp4 = get_PERMIT();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    var value = get_TAKEN();
    if (segment.o24_1.atomicfu$get(i).atomicfu$compareAndSet(tmp4, value)) {
      if (isInterface(waiter, CancellableContinuation)) {
        if (!isInterface(waiter, CancellableContinuation))
          THROW_CCE();
        waiter.n1n(Unit_instance, $this.b24_1);
      } else {
        if (isInterface(waiter, SelectInstance)) {
          waiter.c23(Unit_instance);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'unexpected: ' + toString(waiter);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      return true;
    }
    // Inline function 'kotlinx.coroutines.assert' call
    return false;
  }
  function tryResumeNextFromQueue($this) {
    var curHead = $this.w23_1.kotlinx$atomicfu$value;
    var deqIdx = $this.x23_1.atomicfu$getAndIncrement$long();
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var id = divide(deqIdx, fromInt(other));
    var createNewSegment = createSegment$ref_0();
    var tmp0 = $this.w23_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(curHead, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$2;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$3;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (cur.m1o_1 >= tmp2.m1o_1) {
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (!tmp2.o1x()) {
                tmp$ret$2 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.p1x()) {
                  cur.h4();
                }
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (tmp2.p1x()) {
                tmp2.h4();
              }
            }
            tmp$ret$2 = tmp$ret$3;
          }
          tmp = tmp$ret$2;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$1);
    segment.w1x();
    if (segment.m1o_1 > id)
      return false;
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var tmp$ret$5 = modulo(deqIdx, fromInt(other_0));
    var i = convertToInt(tmp$ret$5);
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.getAndSet' call
    var value = get_PERMIT();
    var cellState = segment.o24_1.atomicfu$get(i).atomicfu$getAndSet(value);
    if (cellState === null) {
      // Inline function 'kotlin.repeat' call
      var times = get_MAX_SPIN_CYCLES();
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.get' call
          if (segment.o24_1.atomicfu$get(i).kotlinx$atomicfu$value === get_TAKEN())
            return true;
        }
         while (inductionVariable < times);
      var tmp4 = get_PERMIT();
      // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
      var value_0 = get_BROKEN();
      return !segment.o24_1.atomicfu$get(i).atomicfu$compareAndSet(tmp4, value_0);
    } else if (cellState === get_CANCELLED())
      return false;
    else
      return tryResumeAcquire($this, cellState);
  }
  function tryResumeAcquire($this, $receiver) {
    var tmp;
    if (isInterface($receiver, CancellableContinuation)) {
      if (!isInterface($receiver, CancellableContinuation))
        THROW_CCE();
      var token = $receiver.j1n(Unit_instance, null, $this.b24_1);
      var tmp_0;
      if (!(token == null)) {
        $receiver.k1n(token);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (isInterface($receiver, SelectInstance)) {
        tmp = $receiver.g1z($this, Unit_instance);
      } else {
        // Inline function 'kotlin.error' call
        var message = 'unexpected: ' + toString($receiver);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function SemaphoreAndMutexImpl$onCancellationRelease$lambda(this$0) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      this$0.j24();
      return Unit_instance;
    };
  }
  function createSegment$ref_0() {
    return constructCallableReference(function (p0, p1) {
      return createSegment_0(p0, p1);
    }, 2, 0, 15, 'createSegment');
  }
  function SemaphoreAndMutexImpl(permits, acquiredPermits) {
    this.v23_1 = permits;
    this.x23_1 = atomic$long$1(0n);
    this.z23_1 = atomic$long$1(0n);
    // Inline function 'kotlin.require' call
    if (!(this.v23_1 > 0)) {
      var message = 'Semaphore should have at least 1 permit, but had ' + this.v23_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(0 <= acquiredPermits ? acquiredPermits <= this.v23_1 : false)) {
      var message_0 = 'The number of acquired permits should be in 0..' + this.v23_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var s = new SemaphoreSegment(0n, null, 2);
    this.w23_1 = atomic$ref$1(s);
    this.y23_1 = atomic$ref$1(s);
    this.a24_1 = atomic$int$1(this.v23_1 - acquiredPermits | 0);
    var tmp = this;
    tmp.b24_1 = SemaphoreAndMutexImpl$onCancellationRelease$lambda(this);
  }
  protoOf(SemaphoreAndMutexImpl).g24 = function () {
    // Inline function 'kotlin.math.max' call
    var a = this.a24_1.kotlinx$atomicfu$value;
    return Math.max(a, 0);
  };
  protoOf(SemaphoreAndMutexImpl).c24 = function () {
    $l$loop: while (true) {
      var p = this.a24_1.kotlinx$atomicfu$value;
      if (p > this.v23_1) {
        coerceAvailablePermitsAtMaximum(this);
        continue $l$loop;
      }
      if (p <= 0)
        return false;
      if (this.a24_1.atomicfu$compareAndSet(p, p - 1 | 0))
        return true;
    }
  };
  protoOf(SemaphoreAndMutexImpl).acquireCont = function (waiter) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreAndMutexImpl.acquire' call
      while (true) {
        var p = decPermits(this);
        if (p > 0) {
          waiter.n1n(Unit_instance, this.b24_1);
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
        if (addAcquireToQueue(this, isInterface(waiter, Waiter) ? waiter : THROW_CCE())) {
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  };
  protoOf(SemaphoreAndMutexImpl).j24 = function () {
    while (true) {
      var p = this.a24_1.atomicfu$getAndIncrement();
      if (p >= this.v23_1) {
        coerceAvailablePermitsAtMaximum(this);
        // Inline function 'kotlin.error' call
        var message = 'The number of released permits cannot be greater than ' + this.v23_1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      if (p >= 0)
        return Unit_instance;
      if (tryResumeNextFromQueue(this))
        return Unit_instance;
    }
  };
  function SemaphoreSegment(id, prev, pointers) {
    Segment.call(this, id, prev, pointers);
    this.o24_1 = atomicfu$AtomicRefArray$ofNulls(get_SEGMENT_SIZE_0());
  }
  protoOf(SemaphoreSegment).p1w = function () {
    return get_SEGMENT_SIZE_0();
  };
  protoOf(SemaphoreSegment).o1o = function (index, cause, context) {
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.set' call
    var value = get_CANCELLED();
    this.o24_1.atomicfu$get(index).kotlinx$atomicfu$value = value;
    this.m1x();
  };
  protoOf(SemaphoreSegment).toString = function () {
    return 'SemaphoreSegment[id=' + this.m1o_1.toString() + ', hashCode=' + hashCode(this) + ']';
  };
  function createSegment_0(id, prev) {
    _init_properties_Semaphore_kt__t514r6();
    return new SemaphoreSegment(id, prev, 0);
  }
  var properties_initialized_Semaphore_kt_uqcwok;
  function _init_properties_Semaphore_kt__t514r6() {
    if (!properties_initialized_Semaphore_kt_uqcwok) {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE_0 = systemProp('kotlinx.coroutines.semaphore.segmentSize', 16);
    }
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).o();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).r24 = function () {
    process.nextTick(this.y24_1.w24_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.c25();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.v24_1 = dispatcher;
    var tmp = this;
    tmp.w24_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).d25 = function () {
    this.v24_1.r24();
  };
  protoOf(ScheduledMessageQueue).e25 = function () {
    setTimeout(this.w24_1, 0);
  };
  protoOf(ScheduledMessageQueue).f25 = function (timeout) {
    setTimeout(this.w24_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.s25_1 && event.data == this$0.t25_1) {
        event.stopPropagation();
        this$0.c25();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.c25();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.s25_1 = window_0;
    this.t25_1 = 'dispatchCoroutine';
    this.s25_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).d25 = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).e25 = function () {
    this.s25_1.postMessage(this.t25_1, '*');
  };
  function w3cSetTimeout_0(window_0, handler, timeout) {
    return setTimeout_0(window_0, handler, timeout);
  }
  function w3cClearTimeout(window_0, handle) {
    return window_0.clearTimeout(handle);
  }
  function w3cClearTimeout_0(handle) {
    return clearTimeout(handle);
  }
  function setTimeout_0(window_0, handler, timeout) {
    return window_0.setTimeout(handler, timeout);
  }
  function toThrowable(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof Error ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? Exception_init_$Create$("Promise resolved with a non-Throwable exception '" + _this__u8e3s4.toString() + "' (type " + toString(getKClassFromExpression(_this__u8e3s4)) + ')') : tmp0_elvis_lhs;
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.l1k().ph(context);
    return !(combined === Dispatchers_getInstance().b1v_1) && combined.c9(Key_instance) == null ? combined.ph(Dispatchers_getInstance().b1v_1) : combined;
  }
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().b1v_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.b1v_1 = createDefaultDispatcher();
    this.c1v_1 = Unconfined_getInstance();
    this.d1v_1 = new JsMainDispatcher(this.b1v_1, false);
    this.e1v_1 = null;
  }
  protoOf(Dispatchers).f1v = function () {
    var tmp0_elvis_lhs = this.e1v_1;
    return tmp0_elvis_lhs == null ? this.d1v_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.v25_1 = delegate;
    this.w25_1 = invokeImmediately;
    this.x25_1 = this.w25_1 ? this : new JsMainDispatcher(this.v25_1, true);
  }
  protoOf(JsMainDispatcher).z1u = function () {
    return this.x25_1;
  };
  protoOf(JsMainDispatcher).g1r = function (context) {
    return !this.w25_1;
  };
  protoOf(JsMainDispatcher).h1r = function (context, block) {
    return this.v25_1.h1r(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.a1v();
    return tmp0_elvis_lhs == null ? this.v25_1.toString() : tmp0_elvis_lhs;
  };
  function CancellationException_0(message, cause) {
    return CancellationException_init_$Create$_0(message, cause);
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.y25_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.y25_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.y25_1, this.y25_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.y25_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function Runnable() {
  }
  function Runnable$run$ref(p0) {
    return constructCallableReference(function () {
      p0.w1p();
      return Unit_instance;
    }, 0, 0, 16, 'run', [p0]);
  }
  function SchedulerTask() {
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function LockFreeLinkedListNode() {
    this.l1q_1 = this;
    this.m1q_1 = this;
    this.n1q_1 = false;
  }
  protoOf(LockFreeLinkedListNode).o1q = function (node, permissionsBitmask) {
    var prev = this.m1q_1;
    var tmp;
    if (prev instanceof ListClosed) {
      tmp = ((prev.c26_1 & permissionsBitmask) === 0 && prev.o1q(node, permissionsBitmask));
    } else {
      node.l1q_1 = this;
      node.m1q_1 = prev;
      prev.l1q_1 = node;
      this.m1q_1 = node;
      tmp = true;
    }
    return tmp;
  };
  protoOf(LockFreeLinkedListNode).t1s = function (forbiddenElementsBit) {
    this.o1q(new ListClosed(forbiddenElementsBit), forbiddenElementsBit);
  };
  protoOf(LockFreeLinkedListNode).p1q = function () {
    if (this.n1q_1)
      return false;
    var prev = this.m1q_1;
    var next = this.l1q_1;
    prev.l1q_1 = next;
    next.m1q_1 = prev;
    this.n1q_1 = true;
    return true;
  };
  protoOf(LockFreeLinkedListNode).q1q = function (node) {
    if (!(this.l1q_1 === this))
      return false;
    this.o1q(node, -2147483648);
    return true;
  };
  function LockFreeLinkedListHead() {
    LockFreeLinkedListNode.call(this);
  }
  function ListClosed(forbiddenElementsBitmask) {
    LockFreeLinkedListNode.call(this);
    this.c26_1 = forbiddenElementsBitmask;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function unwrap(exception) {
    return exception;
  }
  function initCause(_this__u8e3s4, cause) {
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.e1s_1 = null;
  }
  protoOf(CommonThreadLocal).f1s = function () {
    return this.e1s_1;
  };
  protoOf(CommonThreadLocal).g1s = function (value) {
    this.e1s_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).h1r = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function await_0(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.a1p();
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.i1p();
  }
  function await$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(it);
      this_0.a9(tmp$ret$1);
      return null;
    };
  }
  function await$lambda_0($cont) {
    return function (it) {
      var tmp0 = $cont;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = toThrowable(it);
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.a9(tmp$ret$1);
      return null;
    };
  }
  function propagateExceptionFinalResort(exception) {
    // Inline function 'kotlin.with' call
    throwAsyncJsError(exception.message, getKClassFromExpression(exception).o(), stackTraceToString(exception));
    return Unit_instance;
  }
  function throwAsyncJsError(message, className, stack) {
    var error = new Error();
    error.message = message;
    error.name = className;
    error.stack = stack;
    if (typeof globalThis.reportError === 'function') {
      // Up-to-date browsers and some non-browser JS runtimes (Deno, Bun)
      globalThis.reportError(error);
    } else {
      // Fallback for old browsers (pre-2022), Node.js
      setTimeout(function () {
        throw error;
      }, 0);
    }
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).r24 = function () {
    this.y24_1.f25(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.w1p();
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.m1n(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.y24_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).h1r = function (context, block) {
    this.y24_1.g25(block);
  };
  protoOf(SetTimeoutBasedDispatcher).p1r = function (timeMillis, block, context) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).o1r = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new ClearTimeout(handle));
  };
  function MessageQueue() {
    this.z24_1 = ArrayDeque_init_$Create$();
    this.a25_1 = 16;
    this.b25_1 = false;
  }
  protoOf(MessageQueue).g25 = function (element) {
    this.h25(element);
    if (!this.b25_1) {
      this.b25_1 = true;
      this.d25();
    }
  };
  protoOf(MessageQueue).c25 = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.a25_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.w1p();
        }
         while (inductionVariable < times);
    }finally {
      if (this.r()) {
        this.b25_1 = false;
      } else {
        this.e25();
      }
    }
  };
  protoOf(MessageQueue).h25 = function (element) {
    return this.z24_1.b1(element);
  };
  protoOf(MessageQueue).b1 = function (element) {
    return this.h25((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).i25 = function (index, element) {
    this.z24_1.a3(index, element);
  };
  protoOf(MessageQueue).a3 = function (index, element) {
    return this.i25(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).j25 = function (elements) {
    return this.z24_1.j1(elements);
  };
  protoOf(MessageQueue).j1 = function (elements) {
    return this.j25(elements);
  };
  protoOf(MessageQueue).y2 = function () {
    this.z24_1.y2();
  };
  protoOf(MessageQueue).k25 = function (index, element) {
    return this.z24_1.z2(index, element);
  };
  protoOf(MessageQueue).z2 = function (index, element) {
    return this.k25(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).b3 = function (index) {
    return this.z24_1.b3(index);
  };
  protoOf(MessageQueue).n2 = function () {
    return this.z24_1.n2();
  };
  protoOf(MessageQueue).f1 = function (index) {
    return this.z24_1.f1(index);
  };
  protoOf(MessageQueue).o2 = function (fromIndex, toIndex) {
    return this.z24_1.o2(fromIndex, toIndex);
  };
  protoOf(MessageQueue).r = function () {
    return this.z24_1.r();
  };
  protoOf(MessageQueue).l25 = function (element) {
    return this.z24_1.j2(element);
  };
  protoOf(MessageQueue).j2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.l25((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).t = function () {
    return this.z24_1.t();
  };
  protoOf(MessageQueue).m25 = function (elements) {
    return this.z24_1.k2(elements);
  };
  protoOf(MessageQueue).k2 = function (elements) {
    return this.m25(elements);
  };
  protoOf(MessageQueue).d1 = function (index) {
    return this.z24_1.d1(index);
  };
  protoOf(MessageQueue).n25 = function (element) {
    return this.z24_1.l2(element);
  };
  protoOf(MessageQueue).l2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.n25((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).o25 = function (element) {
    return this.z24_1.m2(element);
  };
  protoOf(MessageQueue).m2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.o25((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).asJsReadonlyArrayView = function () {
    return this.z24_1.asJsReadonlyArrayView();
  };
  protoOf(MessageQueue).e1 = function () {
    return this.z24_1.jf_1;
  };
  function WindowClearTimeout($outer, handle) {
    this.k26_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).x1n = function () {
    w3cClearTimeout(this.k26_1.m26_1, this.o26_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.m1n(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.m26_1 = window_0;
    this.n26_1 = new WindowMessageQueue(this.m26_1);
  }
  protoOf(WindowDispatcher).h1r = function (context, block) {
    return this.n26_1.g25(block);
  };
  protoOf(WindowDispatcher).o1r = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.m26_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new WindowClearTimeout(this, handle));
  };
  protoOf(WindowDispatcher).p1r = function (timeMillis, block, context) {
    var handle = w3cSetTimeout_0(this.m26_1, Runnable$run$ref(block), delayToInt(timeMillis));
    return new WindowClearTimeout(this, handle);
  };
  function delayToInt(timeMillis) {
    return convertToInt(coerceIn(timeMillis, 0n, 2147483647n));
  }
  function ClearTimeout(handle) {
    this.o26_1 = handle;
  }
  protoOf(ClearTimeout).x1n = function () {
    w3cClearTimeout_0(this.o26_1);
  };
  protoOf(ClearTimeout).w1n = function (cause) {
    this.x1n();
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.o26_1 + ']';
  };
  //region block: post-declaration
  protoOf(JobSupport).p1l = invokeOnCompletion$default;
  protoOf(JobSupport).v1l = cancel$default;
  protoOf(JobSupport).ph = plus;
  protoOf(JobSupport).c9 = get_0;
  protoOf(JobSupport).oh = fold;
  protoOf(JobSupport).nh = minusKey_0;
  protoOf(CoroutineDispatcher).c9 = get;
  protoOf(CoroutineDispatcher).nh = minusKey;
  protoOf(BufferedChannel).r21 = close$default;
  protoOf(BufferedChannel).t21 = cancel$default_0;
  protoOf(ChannelCoroutine).r21 = close$default;
  defineProp(protoOf(DispatchException), 'cause', function () {
    return this.f();
  });
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  GlobalScope_instance = new GlobalScope();
  Key_instance_3 = new Key_2();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_4 = new Key_3();
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = _ChannelResult___get_isClosed__impl__mg7kuu;
  _.$_$.b = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.c = Factory_getInstance;
  _.$_$.d = Key_instance_1;
  _.$_$.e = Dispatchers_getInstance;
  _.$_$.f = GlobalScope_instance;
  _.$_$.g = Key_instance_3;
  _.$_$.h = BufferOverflow_DROP_OLDEST_getInstance;
  _.$_$.i = BufferOverflow_SUSPEND_getInstance;
  _.$_$.j = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.k = await_0;
  _.$_$.l = delay;
  _.$_$.m = delay_0;
  _.$_$.n = withTimeoutOrNull;
  _.$_$.o = cancel$default_0;
  _.$_$.p = close$default;
  _.$_$.q = ChannelResult;
  _.$_$.r = Channel;
  _.$_$.s = ClosedReceiveChannelException;
  _.$_$.t = ClosedSendChannelException;
  _.$_$.u = ProducerScope;
  _.$_$.v = ReceiveChannel;
  _.$_$.w = SendChannel;
  _.$_$.x = cancelConsumed;
  _.$_$.y = produce;
  _.$_$.z = recoverStackTrace;
  _.$_$.a1 = startCoroutineCancellable;
  _.$_$.b1 = Mutex;
  _.$_$.c1 = CancellableContinuationImpl;
  _.$_$.d1 = CancellationException_0;
  _.$_$.e1 = CompletableDeferred;
  _.$_$.f1 = CompletableJob;
  _.$_$.g1 = CopyableThrowable;
  _.$_$.h1 = CoroutineDispatcher;
  _.$_$.i1 = CoroutineName;
  _.$_$.j1 = CoroutineScope_0;
  _.$_$.k1 = CoroutineScope;
  _.$_$.l1 = DisposableHandle;
  _.$_$.m1 = Job_0;
  _.$_$.n1 = SupervisorJob;
  _.$_$.o1 = async;
  _.$_$.p1 = cancel;
  _.$_$.q1 = cancel_2;
  _.$_$.r1 = cancel_0;
  _.$_$.s1 = cancel_1;
  _.$_$.t1 = get_job;
  _.$_$.u1 = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
