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
  var Unit_instance = kotlin_kotlin.$_$.z2;
  var protoOf = kotlin_kotlin.$_$.xb;
  var Continuation = kotlin_kotlin.$_$.c9;
  var initMetadataForClass = kotlin_kotlin.$_$.ya;
  var VOID = kotlin_kotlin.$_$.d;
  var EmptyCoroutineContext_instance = kotlin_kotlin.$_$.c2;
  var CoroutineImpl = kotlin_kotlin.$_$.i9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.q8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ab;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.s8;
  var initMetadataForInterface = kotlin_kotlin.$_$.cb;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b5;
  var toString = kotlin_kotlin.$_$.ac;
  var isInterface = kotlin_kotlin.$_$.nb;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p4;
  var toString_0 = kotlin_kotlin.$_$.bh;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.eb;
  var hashCode = kotlin_kotlin.$_$.xa;
  var equals = kotlin_kotlin.$_$.ra;
  var Companion_instance = kotlin_kotlin.$_$.u2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.qg;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.t3;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.q;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.s;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.y8;
  var Key_instance = kotlin_kotlin.$_$.b2;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.x8;
  var get = kotlin_kotlin.$_$.z8;
  var minusKey = kotlin_kotlin.$_$.a9;
  var ContinuationInterceptor = kotlin_kotlin.$_$.b9;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.z4;
  var addSuppressed = kotlin_kotlin.$_$.mg;
  var getStringHashCode = kotlin_kotlin.$_$.wa;
  var Enum = kotlin_kotlin.$_$.qf;
  var startCoroutine = kotlin_kotlin.$_$.j9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yg;
  var intercepted = kotlin_kotlin.$_$.t8;
  var Duration__isPositive_impl_tvkkt2 = kotlin_kotlin.$_$.f;
  var Companion_getInstance = kotlin_kotlin.$_$.o2;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.x1;
  var toDuration = kotlin_kotlin.$_$.hf;
  var Duration__plus_impl_yu9v8f = kotlin_kotlin.$_$.g;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.e;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.c3;
  var add = kotlin_kotlin.$_$.o9;
  var subtract = kotlin_kotlin.$_$.ca;
  var RuntimeException = kotlin_kotlin.$_$.yf;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.y4;
  var captureStack = kotlin_kotlin.$_$.ha;
  var Error_0 = kotlin_kotlin.$_$.rf;
  var Error_init_$Init$ = kotlin_kotlin.$_$.b4;
  var Element = kotlin_kotlin.$_$.g9;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.m9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d3;
  var CancellationException = kotlin_kotlin.$_$.p8;
  var ArrayList = kotlin_kotlin.$_$.e5;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.r4;
  var plus = kotlin_kotlin.$_$.h9;
  var get_0 = kotlin_kotlin.$_$.e9;
  var fold = kotlin_kotlin.$_$.d9;
  var minusKey_0 = kotlin_kotlin.$_$.f9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.a4;
  var anyToString = kotlin_kotlin.$_$.fa;
  var constructCallableReference = kotlin_kotlin.$_$.pa;
  var UnsupportedOperationException = kotlin_kotlin.$_$.lg;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.s3;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.w1;
  var charSequenceLength = kotlin_kotlin.$_$.ma;
  var charCodeAt = kotlin_kotlin.$_$.ka;
  var toString_1 = kotlin_kotlin.$_$.o;
  var substring = kotlin_kotlin.$_$.le;
  var returnIfSuspended = kotlin_kotlin.$_$.b3;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var fromInt = kotlin_kotlin.$_$.t9;
  var multiply = kotlin_kotlin.$_$.w9;
  var divide = kotlin_kotlin.$_$.s9;
  var modulo = kotlin_kotlin.$_$.v9;
  var convertToInt = kotlin_kotlin.$_$.q9;
  var shiftRight = kotlin_kotlin.$_$.ba;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l4;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.l7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e3;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.t4;
  var compareTo = kotlin_kotlin.$_$.oa;
  var last = kotlin_kotlin.$_$.xd;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var shiftLeft = kotlin_kotlin.$_$.z9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.za;
  var NoSuchElementException = kotlin_kotlin.$_$.vf;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.u4;
  var IllegalStateException = kotlin_kotlin.$_$.uf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.o4;
  var getKClass = kotlin_kotlin.$_$.rc;
  var Unit = kotlin_kotlin.$_$.kg;
  var Exception = kotlin_kotlin.$_$.sf;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.h4;
  var defineProp = kotlin_kotlin.$_$.qa;
  var toLongOrNull = kotlin_kotlin.$_$.ue;
  var createCoroutineUnintercepted_0 = kotlin_kotlin.$_$.r8;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.v8;
  var plus_0 = kotlin_kotlin.$_$.s7;
  var KtList = kotlin_kotlin.$_$.k5;
  var listOf_0 = kotlin_kotlin.$_$.k7;
  var getKClassFromExpression = kotlin_kotlin.$_$.qc;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.g4;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.v3;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.u3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.j3;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.x4;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q3;
  var stackTraceToString = kotlin_kotlin.$_$.ah;
  var removeFirstOrNull = kotlin_kotlin.$_$.u7;
  var KtMutableList = kotlin_kotlin.$_$.o5;
  var coerceIn = kotlin_kotlin.$_$.ic;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.l1m(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.l1m.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.f1m(onCancelling, invokeImmediately, handler) : $super.f1m.call(this, onCancelling, invokeImmediately, handler);
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
    return get_DefaultDelay().g1s(timeMillis, block, context);
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
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.g22(cause) : $super.g22.call(this, cause);
  }
  initMetadataForInterface(SendChannel, 'SendChannel', VOID, VOID, VOID, [1]);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.l1m(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.l1m.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(ReceiveChannel, 'ReceiveChannel', VOID, VOID, VOID, [0]);
  initMetadataForClass(BufferedChannel, 'BufferedChannel', VOID, VOID, [SendChannel, ReceiveChannel], [1, 4, 0, 3]);
  initMetadataForClass(WaiterEB, 'WaiterEB');
  initMetadataForClass(ReceiveCatching, 'ReceiveCatching', VOID, VOID, [Waiter]);
  initMetadataForObject(Factory, 'Factory');
  initMetadataForClass(Failed, 'Failed', Failed);
  initMetadataForClass(Closed, 'Closed', VOID, Failed);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ChannelResult, 'ChannelResult');
  initMetadataForClass(ClosedReceiveChannelException, 'ClosedReceiveChannelException', VOID, NoSuchElementException);
  initMetadataForClass(ClosedSendChannelException, 'ClosedSendChannelException', VOID, IllegalStateException);
  initMetadataForClass(ChannelCoroutine, 'ChannelCoroutine', VOID, AbstractCoroutine, [SendChannel, ReceiveChannel], [1, 0]);
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
      this.y1k(parentContext.d9(Key_instance_3));
    }
    this.b1l_1 = parentContext.rh(this);
  }
  protoOf(AbstractCoroutine).w8 = function () {
    return this.b1l_1;
  };
  protoOf(AbstractCoroutine).c1l = function () {
    return this.b1l_1;
  };
  protoOf(AbstractCoroutine).d1l = function () {
    return protoOf(JobSupport).d1l.call(this);
  };
  protoOf(AbstractCoroutine).e1l = function (value) {
  };
  protoOf(AbstractCoroutine).f1l = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).g1l = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).h1l = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.f1l(state.i1l_1, state.k1l());
    } else {
      this.e1l(state);
    }
  };
  protoOf(AbstractCoroutine).b9 = function (result) {
    var state = this.l1l(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.m1l(state);
  };
  protoOf(AbstractCoroutine).m1l = function (state) {
    return this.n1l(state);
  };
  protoOf(AbstractCoroutine).o1l = function (exception) {
    handleCoroutineException(this.b1l_1, exception);
  };
  protoOf(AbstractCoroutine).p1l = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.b1l_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).p1l.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).p1l.call(this);
  };
  protoOf(AbstractCoroutine).q1l = function (start, receiver, block) {
    start.t1l(block, receiver, this);
  };
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_instance : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.b1n() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.q1l(start, coroutine, block);
    return coroutine;
  }
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_instance : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.b1n() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.q1l(start, coroutine, block);
    return coroutine;
  }
  function $awaitCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k1n_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$).y8 = function () {
    var suspendResult = this.s8_1;
    $sm: do
      try {
        var tmp = this.q8_1;
        switch (tmp) {
          case 0:
            this.r8_1 = 2;
            this.q8_1 = 1;
            suspendResult = this.k1n_1.a1n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.t8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.r8_1 === 2) {
          throw e;
        } else {
          this.q8_1 = this.r8_1;
          this.t8_1 = e;
        }
      }
     while (true);
  };
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).o1n = function ($completion) {
    var tmp = new $awaitCOROUTINE$(this, $completion);
    tmp.s8_1 = Unit_instance;
    tmp.t8_1 = null;
    return tmp.y8();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.s1n_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).a1m = function () {
    startCoroutineCancellable_1(this.s1n_1, this);
  };
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).y1m = function (exception) {
    handleCoroutineException(this.b1l_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.z1n_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).a1m = function () {
    startCoroutineCancellable_1(this.z1n_1, this);
  };
  function CancellableContinuation() {
  }
  function invokeOnCancellation(_this__u8e3s4, handler) {
    var tmp;
    if (_this__u8e3s4 instanceof CancellableContinuationImpl) {
      _this__u8e3s4.l1o(handler);
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
    this.m1o_1 = handle;
  }
  protoOf(DisposeOnCancel).n1o = function (cause) {
    return this.m1o_1.o1o();
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + toString(this.m1o_1) + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 1);
    }
    var tmp0_safe_receiver = delegate.v1o();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver.w1o()) {
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
    this.x1o_1 = handler;
  }
  protoOf(UserSupplied).n1o = function (cause) {
    this.x1o_1(cause);
  };
  protoOf(UserSupplied).toString = function () {
    return 'CancelHandler.UserSupplied[' + get_classSimpleName(this.x1o_1) + '@' + get_hexAddress(this) + ']';
  };
  function CancelHandler() {
  }
  function _get_parentHandle__f8dcex($this) {
    return $this.k1o_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.w1l();
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
    if (get_isReusableMode($this.z1o_1)) {
      var tmp_0 = $this.g1o_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).y1o();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.g1o_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.a1p(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.i1o_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    if (!!(index === 536870911)) {
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      segment.f1p(index, cause, $this.w8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.w8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.i1o_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$4 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.i1o_1.atomicfu$compareAndSet(cur, tmp$ret$4))
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
    var this_0 = $this.i1o_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$4 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.i1o_1.atomicfu$compareAndSet(cur, tmp$ret$4))
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
    var tmp0_elvis_lhs = $this.w8().d9(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, VOID, new ChildContinuation($this));
    $this.k1o_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.j1o_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.j1o_1.atomicfu$compareAndSet(state, handler))
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
            if (!state.o1p()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i1l_1;
              if (isInterface(handler, CancelHandler)) {
                $this.l1p(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.h1p_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.m1p()) {
                $this.l1p(handler, state.k1p_1);
                return Unit_instance;
              }
              var update = state.n1p(VOID, handler);
              if ($this.j1o_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.j1o_1.atomicfu$compareAndSet(state, update_0))
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
    var this_0 = $this.j1o_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState($this, tmp0, proposedUpdate, $this.z1o_1, onCancellation, idempotent);
          if (!$this.j1o_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonReusable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0 instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) && tmp0.j1p_1 === idempotent) {
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
      $this.p1p();
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
    this.g1o_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.h1o_1 = this.g1o_1.w8();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$1 = (0 << 29) + 536870911 | 0;
    tmp.i1o_1 = atomic$int$1(tmp$ret$1);
    this.j1o_1 = atomic$ref$1(Active_instance);
    this.k1o_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).q1p = function () {
    return this.g1o_1;
  };
  protoOf(CancellableContinuationImpl).w8 = function () {
    return this.h1o_1;
  };
  protoOf(CancellableContinuationImpl).w1l = function () {
    return this.j1o_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).x1l = function () {
    var tmp = this.w1l();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).y1l = function () {
    var tmp = this.w1l();
    return tmp instanceof CancelledContinuation;
  };
  protoOf(CancellableContinuationImpl).r1p = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.x1l()) {
      handle.o1o();
      this.k1o_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).w1o = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.j1o_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.j1p_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.p1p();
      return false;
    }
    var tmp_0 = this.i1o_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << 29) + 536870911 | 0;
    this.j1o_1.kotlinx$atomicfu$value = Active_instance;
    return true;
  };
  protoOf(CancellableContinuationImpl).s1p = function () {
    return this.w1l();
  };
  protoOf(CancellableContinuationImpl).t1p = function (takenState, cause) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.j1o_1;
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
            if (!!state.m1p()) {
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.n1p(VOID, VOID, VOID, VOID, cause);
            if (this.j1o_1.atomicfu$compareAndSet(state, update)) {
              state.u1p(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.j1o_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(CancellableContinuationImpl).v1p = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.j1o_1;
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
        if (!this.j1o_1.atomicfu$compareAndSet(tmp0, update)) {
          break $l$block;
        }
        if (isInterface(tmp0, CancelHandler)) {
          this.l1p(tmp0, cause);
        } else {
          if (tmp0 instanceof Segment) {
            callSegmentOnCancellation(this, tmp0, cause);
          }
        }
        detachChildIfNonReusable(this);
        dispatchResume(this, this.z1o_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).w1p = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.v1p(cause);
    detachChildIfNonReusable(this);
  };
  protoOf(CancellableContinuationImpl).l1p = function (handler, cause) {
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      handler.n1o(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.w8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).x1p = function (onCancellation, cause, value) {
    try {
      onCancellation(cause, value, this.w8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.w8(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).y1p = function (parent) {
    return parent.b1m();
  };
  protoOf(CancellableContinuationImpl).z1p = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.a1q();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.a1q();
    }
    var state = this.w1l();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.i1l_1, this);
    if (get_isCancellableMode(this.z1o_1)) {
      var job = this.w8().d9(Key_instance_3);
      if (!(job == null) && !job.d1l()) {
        var cause = job.b1m();
        this.t1p(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.b1q(state);
  };
  protoOf(CancellableContinuationImpl).a1q = function () {
    var tmp = this.g1o_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1q(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.p1p();
    this.v1p(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).b9 = function (result) {
    return this.d1q(toState(result, this), this.z1o_1);
  };
  protoOf(CancellableContinuationImpl).e1q = function (value, onCancellation) {
    var tmp = this.z1o_1;
    var tmp_0;
    if (onCancellation == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = CancellableContinuationImpl$resume$lambda(onCancellation);
    }
    return this.f1q(value, tmp, tmp_0);
  };
  protoOf(CancellableContinuationImpl).e1o = function (value, onCancellation) {
    return this.f1q(value, this.z1o_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).g1q = function (segment, index) {
    var tmp0 = this.i1o_1;
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
  protoOf(CancellableContinuationImpl).c1o = function (handler) {
    return invokeOnCancellation(this, new UserSupplied(handler));
  };
  protoOf(CancellableContinuationImpl).l1o = function (handler) {
    return invokeOnCancellationImpl(this, handler);
  };
  protoOf(CancellableContinuationImpl).f1q = function (proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.j1o_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState(this, tmp0, proposedUpdate, resumeMode, onCancellation, null);
          if (!this.j1o_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonReusable(this);
          dispatchResume(this, resumeMode);
          return Unit_instance;
        } else {
          if (tmp0 instanceof CancelledContinuation) {
            if (tmp0.k1q()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                this.x1p(onCancellation, tmp0.i1l_1, proposedUpdate);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError(this, proposedUpdate);
      }
    }
  };
  protoOf(CancellableContinuationImpl).d1q = function (proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    if ($super === VOID) {
      this.f1q(proposedUpdate, resumeMode, onCancellation);
      tmp = Unit_instance;
    } else {
      tmp = $super.f1q.call(this, proposedUpdate, resumeMode, onCancellation);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).p1p = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.o1o();
    this.k1o_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).a1o = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).b1o = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.z1o_1);
  };
  protoOf(CancellableContinuationImpl).d1o = function (_this__u8e3s4, value) {
    var tmp = this.g1o_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.q1o_1) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.z1o_1;
    }
    this.d1q(value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).b1q = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = state.g1p_1;
    } else {
      tmp = state;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).l1q = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).l1q.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.g1o_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.m1q() + '(' + toDebugString(this.g1o_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).m1q = function () {
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
    this.g1p_1 = result;
    this.h1p_1 = cancelHandler;
    this.i1p_1 = onCancellation;
    this.j1p_1 = idempotentResume;
    this.k1p_1 = cancelCause;
  }
  protoOf(CompletedContinuation).m1p = function () {
    return !(this.k1p_1 == null);
  };
  protoOf(CompletedContinuation).u1p = function (cont, cause) {
    var tmp0_safe_receiver = this.h1p_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.l1p(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.i1p_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.x1p(tmp1_safe_receiver, cause, this.g1p_1);
    }
  };
  protoOf(CompletedContinuation).p1q = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).n1p = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.g1p_1 : result;
    cancelHandler = cancelHandler === VOID ? this.h1p_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.i1p_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.j1p_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.k1p_1 : cancelCause;
    return $super === VOID ? this.p1q(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.p1q.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.g1p_1) + ', cancelHandler=' + toString_0(this.h1p_1) + ', onCancellation=' + toString_0(this.i1p_1) + ', idempotentResume=' + toString_0(this.j1p_1) + ', cancelCause=' + toString_0(this.k1p_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.g1p_1 == null ? 0 : hashCode(this.g1p_1);
    result = imul(result, 31) + (this.h1p_1 == null ? 0 : hashCode(this.h1p_1)) | 0;
    result = imul(result, 31) + (this.i1p_1 == null ? 0 : hashCode(this.i1p_1)) | 0;
    result = imul(result, 31) + (this.j1p_1 == null ? 0 : hashCode(this.j1p_1)) | 0;
    result = imul(result, 31) + (this.k1p_1 == null ? 0 : hashCode(this.k1p_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    if (!equals(this.g1p_1, other.g1p_1))
      return false;
    if (!equals(this.h1p_1, other.h1p_1))
      return false;
    if (!equals(this.i1p_1, other.i1p_1))
      return false;
    if (!equals(this.j1p_1, other.j1p_1))
      return false;
    if (!equals(this.k1p_1, other.k1p_1))
      return false;
    return true;
  };
  function ChildContinuation(child) {
    JobNode.call(this);
    this.u1q_1 = child;
  }
  protoOf(ChildContinuation).v1q = function () {
    return true;
  };
  protoOf(ChildContinuation).n1o = function (cause) {
    this.u1q_1.w1p(this.u1q_1.y1p(this.a1r()));
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
    this.q1r_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$_0).y8 = function () {
    var suspendResult = this.s8_1;
    $sm: do
      try {
        var tmp = this.q8_1;
        switch (tmp) {
          case 0:
            this.r8_1 = 2;
            this.q8_1 = 1;
            suspendResult = this.q1r_1.a1n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.t8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.r8_1 === 2) {
          throw e;
        } else {
          this.q8_1 = this.r8_1;
          this.t8_1 = e;
        }
      }
     while (true);
  };
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.y1k(parent);
  }
  protoOf(CompletableDeferredImpl).k1m = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).o1n = function ($completion) {
    var tmp = new $awaitCOROUTINE$_0(this, $completion);
    tmp.s8_1 = Unit_instance;
    tmp.t8_1 = null;
    return tmp.y8();
  };
  protoOf(CompletableDeferredImpl).t1r = function (value) {
    return this.t1m(value);
  };
  protoOf(CompletableDeferredImpl).u1r = function (exception) {
    return this.t1m(new CompletedExceptionally(exception));
  };
  function CompletableJob() {
  }
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.i1l_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      tmp = _Result___init__impl__xyqfz8(state);
    }
    return tmp;
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.i1l_1 = cause;
    this.j1l_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).k1l = function () {
    return this.j1l_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).o1p = function () {
    return this.j1l_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.i1l_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.j1q_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).k1q = function () {
    return this.j1q_1.atomicfu$compareAndSet(false, true);
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
  protoOf(CoroutineDispatcher).x1r = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).e9 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).f9 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.z1r();
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
      tmp = exception.a1s_1;
    } else {
      tmp = exception;
    }
    var reportException = tmp;
    try {
      var tmp0_safe_receiver = context.d9(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp0_safe_receiver.b1s(context, reportException);
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
    this.d1s_1 = name;
  }
  protoOf(CoroutineName).toString = function () {
    return 'CoroutineName(' + this.d1s_1 + ')';
  };
  protoOf(CoroutineName).hashCode = function () {
    return getStringHashCode(this.d1s_1);
  };
  protoOf(CoroutineName).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    if (!(this.d1s_1 === other.d1s_1))
      return false;
    return true;
  };
  function CoroutineScope() {
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.c1l().d9(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Scope cannot be cancelled because it does not have a job: ' + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.l1m(cause);
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return cancel(_this__u8e3s4, CancellationException_0(message, cause));
  }
  function GlobalScope() {
  }
  protoOf(GlobalScope).c1l = function () {
    return EmptyCoroutineContext_instance;
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    return GlobalScope_instance;
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.d9(Key_instance_3) == null) ? context : context.rh(Job_0()));
  }
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_instance;
    static_init_called = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).t1l = function (block, receiver, completion) {
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
  protoOf(CoroutineStart).b1n = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    static_init();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    static_init();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    static_init();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function CopyableThrowable() {
  }
  function delay(timeMillis, $completion) {
    if (timeMillis <= 0n)
      return Unit_instance;
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.r1p();
    if (timeMillis < 9223372036854775807n) {
      get_delay(cancellable.w8()).f1s(timeMillis, cancellable);
    }
    return cancellable.z1p();
  }
  function delay_0(duration, $completion) {
    return delay(toDelayMillis(duration), $completion);
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.d9(Key_instance);
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
    this.j1s_1 = 0n;
    this.k1s_1 = false;
    this.l1s_1 = null;
  }
  protoOf(EventLoop).m1s = function () {
    var tmp0_elvis_lhs = this.l1s_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.rf();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.n1q();
    return true;
  };
  protoOf(EventLoop).n1s = function (task) {
    var tmp0_elvis_lhs = this.l1s_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      this.l1s_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.pf(task);
  };
  protoOf(EventLoop).o1s = function () {
    return this.j1s_1 >= delta(this, true);
  };
  protoOf(EventLoop).p1s = function () {
    var tmp0_safe_receiver = this.l1s_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).q1s = function (unconfined) {
    this.j1s_1 = add(this.j1s_1, delta(this, unconfined));
    if (!unconfined)
      this.k1s_1 = true;
  };
  protoOf(EventLoop).r1s = function (unconfined) {
    this.j1s_1 = subtract(this.j1s_1, delta(this, unconfined));
    if (this.j1s_1 > 0n)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.k1s_1) {
      this.s1s();
    }
  };
  protoOf(EventLoop).s1s = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.t1s_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).u1s = function () {
    var tmp0_elvis_lhs = this.t1s_1.w1s();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      ThreadLocalEventLoop_getInstance().t1s_1.x1s(this_0);
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
    var tmp0_elvis_lhs = _this__u8e3s4.d9(Key_instance_3);
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
    return _this__u8e3s4.l1m(CancellationException_0(message, cause));
  }
  function cancel_2(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_safe_receiver = _this__u8e3s4.d9(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1m(cause);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, invokeImmediately, handler) {
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.h1m(invokeImmediately, handler);
    } else {
      var tmp_0 = handler.v1q();
      tmp = _this__u8e3s4.f1m(tmp_0, invokeImmediately, JobNode$invoke$ref(handler));
    }
    return tmp;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.d9(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).o1o = function () {
  };
  protoOf(NonDisposableHandle).p1m = function (cause) {
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
    if (!_this__u8e3s4.d1l())
      throw _this__u8e3s4.b1m();
  }
  function ParentJob() {
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    return invokeOnCompletion(_this__u8e3s4, VOID, new DisposeOnCompletion(handle));
  }
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.c1t_1 = handle;
  }
  protoOf(DisposeOnCompletion).v1q = function () {
    return false;
  };
  protoOf(DisposeOnCompletion).n1o = function (cause) {
    return this.c1t_1.o1o();
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
  protoOf(JobNode).a1r = function () {
    var tmp = this.z1q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).d1l = function () {
    return true;
  };
  protoOf(JobNode).b1r = function () {
    return null;
  };
  protoOf(JobNode).o1o = function () {
    return this.a1r().j1m(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.a1r()) + ']';
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1t_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.h1t_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.h1t_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1l_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    wasCancelling = state.i1t();
    var exceptions = state.j1t(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.y1m(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).o1p();
      }
    }
    if (!wasCancelling) {
      $this.v1m(finalException);
    }
    $this.h1l(finalState);
    var casSuccess = $this.w1k_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.r()) {
      if (state.i1t()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.g1l() : null, null, $this);
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
        tmp = seenExceptions.c1(unwrapped);
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
    if (!$this.w1k_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.v1m(null);
    $this.h1l(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.v1l();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      tmp0_safe_receiver.o1o();
      $this.u1l(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i1l_1;
    if (state instanceof JobNode) {
      try {
        state.n1o(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.o1l(new CompletionHandlerException('Exception in completion handler ' + state.toString() + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.b1r();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion($this, tmp2_safe_receiver, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.v1m(cause);
    list.k1t(4);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = list.c1r_1;
    while (!equals(cur, list)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = node.v1q();
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.n1o(cause);
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
      cur = cur.c1r_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.o1l(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.w1m())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.v1l();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.p1m(cause) || isCancellation;
  }
  function notifyCompletion($this, $receiver, cause) {
    $receiver.k1t(1);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = $receiver.c1r_1;
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
          node.n1o(cause);
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
      cur = cur.c1r_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.o1l(tmp0_safe_receiver_0);
    }
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.m1t_1)
        return 0;
      if (!$this.w1k_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.a1m();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.w1k_1.atomicfu$compareAndSet(state, state.l1t_1))
          return -1;
        $this.a1m();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.m1t_1 ? list : new InactiveNodeList(list);
    $this.w1k_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.h1r(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
    var list = state.c1r_1;
    $this.w1k_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.w1l();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false))
        return false;
      if (startInternal($this, state) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.r1p();
    disposeOnCancellation(cancellable, invokeOnCompletion($this, VOID, new ResumeOnCompletion(cancellable)));
    return cancellable.z1p();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.w1l();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.n1t();
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
        tmp_0 = new JobCancellationException(null == null ? $this.g1l() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = (isInterface(cause, ParentJob) ? cause : THROW_CCE()).s1m();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = $this.w1l();
      $l$block: {
        if (tmp0 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          if (tmp0.o1t())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0.i1t();
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
            tmp0.p1t(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp0.q1t();
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
            notifyCancelling($this, tmp0.e1t_1, notifyRootCause);
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
            if (tmp0.d1l()) {
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
    var tmp0_elvis_lhs = state.b1r();
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
    if (!$this.w1k_1.atomicfu$compareAndSet(state, cancelling))
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
    if (finishing.n1t())
      return get_COMPLETING_ALREADY();
    finishing.r1t(true);
    if (!(finishing === state)) {
      if (!$this.w1k_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.i1t();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      finishing.p1t(tmp0_safe_receiver.i1l_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.q1t();
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
    list.k1t(2);
    var anotherChild = nextChild($this, list);
    if (!(anotherChild == null) && tryWaitForChild($this, finishing, anotherChild, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js($this, $receiver) {
    var tmp0_safe_receiver = $receiver instanceof CompletedExceptionally ? $receiver : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1l_1;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.w1t_1, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
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
    state.e1t_1.k1t(2);
    var waitChildAgain = nextChild($this, lastChild);
    if (!(waitChildAgain == null) && tryWaitForChild($this, state, waitChildAgain, proposedUpdate)) {
      return Unit_instance;
    }
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.n1l(finalState);
  }
  function nextChild($this, $receiver) {
    var cur = $receiver;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (!cur.e1r_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.prevNode' call
      cur = cur.d1r_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
      cur = cur.c1r_1;
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (cur.e1r_1)
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
      tmp = state.i1t() ? 'Cancelling' : state.n1t() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.d1l() ? 'Active' : 'New';
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
    this.e1t_1 = list;
    this.f1t_1 = atomic$boolean$1(isCompleting);
    this.g1t_1 = atomic$ref$1(rootCause);
    this.h1t_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).b1r = function () {
    return this.e1t_1;
  };
  protoOf(Finishing).r1t = function (value) {
    this.f1t_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).n1t = function () {
    return this.f1t_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).x1t = function (value) {
    this.g1t_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).q1t = function () {
    return this.g1t_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).o1t = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).i1t = function () {
    return !(this.q1t() == null);
  };
  protoOf(Finishing).d1l = function () {
    return this.q1t() == null;
  };
  protoOf(Finishing).j1t = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        this_0.c1(eh);
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
    var rootCause = this.q1t();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      list.y2(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.c1(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).p1t = function (exception) {
    var rootCause = this.q1t();
    if (rootCause == null) {
      this.x1t(exception);
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
        this_0.c1(eh);
        this_0.c1(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).c1(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.i1t() + ', completing=' + this.n1t() + ', rootCause=' + toString_0(this.q1t()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.e1t_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.c1u_1 = parent;
    this.d1u_1 = state;
    this.e1u_1 = child;
    this.f1u_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).v1q = function () {
    return false;
  };
  protoOf(ChildCompletion).n1o = function (cause) {
    continueCompleting(this.c1u_1, this.d1u_1, this.e1u_1, this.f1u_1);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, 1);
    this.m1u_1 = job;
  }
  protoOf(AwaitContinuation).y1p = function (parent) {
    var state = this.m1u_1.w1l();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.q1t();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.i1l_1;
    return parent.b1m();
  };
  protoOf(AwaitContinuation).m1q = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.r1p();
    disposeOnCancellation(cont, invokeOnCompletion($this, VOID, new ResumeAwaitOnCompletion(cont)));
    return cont.z1p();
  }
  function JobSupport(active) {
    this.w1k_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.x1k_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).m1 = function () {
    return Key_instance_3;
  };
  protoOf(JobSupport).u1l = function (value) {
    this.x1k_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).v1l = function () {
    return this.x1k_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).y1k = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.u1l(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.z1l();
    var handle = parent.u1m(this);
    this.u1l(handle);
    if (this.x1l()) {
      handle.o1o();
      this.u1l(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).w1l = function () {
    return this.w1k_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).d1l = function () {
    var state = this.w1l();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.d1l();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).x1l = function () {
    var tmp = this.w1l();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).y1l = function () {
    var state = this.w1l();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.i1t();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).z1l = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.w1l();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).a1m = function () {
  };
  protoOf(JobSupport).b1m = function () {
    var state = this.w1l();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.q1t();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.c1m(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
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
          tmp = this.d1m(state.i1l_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).c1m = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.g1l() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).d1m = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.c1m(_this__u8e3s4, message) : $super.c1m.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).e1m = function (handler) {
    return this.h1m(true, new InvokeOnCompletion(handler));
  };
  protoOf(JobSupport).f1m = function (onCancelling, invokeImmediately, handler) {
    var tmp;
    if (onCancelling) {
      tmp = new InvokeOnCancelling(handler);
    } else {
      tmp = new InvokeOnCompletion(handler);
    }
    return this.h1m(invokeImmediately, tmp);
  };
  protoOf(JobSupport).h1m = function (invokeImmediately, node) {
    node.z1q_1 = this;
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.w1l();
        if (state instanceof Empty) {
          if (state.m1t_1) {
            if (this.w1k_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.b1r();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var tmp;
              if (node.v1q()) {
                var tmp0_safe_receiver = state instanceof Finishing ? state : null;
                var rootCause = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q1t();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = list.f1r(node, 5);
                } else {
                  if (invokeImmediately) {
                    node.n1o(rootCause);
                  }
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_0;
              } else {
                tmp = list.f1r(node, 1);
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
      var tmp_1 = this.w1l();
      var tmp0_safe_receiver_0 = tmp_1 instanceof CompletedExceptionally ? tmp_1 : null;
      node.n1o(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.i1l_1);
    }
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).i1m = function ($completion) {
    if (!joinInternal(this)) {
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp$ret$0 = $completion.w8();
      ensureActive(tmp$ret$0);
      return Unit_instance;
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).j1m = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.w1l();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.w1k_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.b1r() == null)) {
            node.g1r();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).k1m = function () {
    return false;
  };
  protoOf(JobSupport).l1m = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.g1l() : null, null, this);
    } else {
      tmp = cause;
    }
    this.n1m(tmp);
  };
  protoOf(JobSupport).g1l = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).n1m = function (cause) {
    this.r1m(cause);
  };
  protoOf(JobSupport).o1m = function (parentJob) {
    this.r1m(parentJob);
  };
  protoOf(JobSupport).p1m = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.r1m(cause) && this.x1m();
  };
  protoOf(JobSupport).q1m = function (cause) {
    return this.r1m(cause);
  };
  protoOf(JobSupport).r1m = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.k1m()) {
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
      this.n1l(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).s1m = function () {
    var state = this.w1l();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.q1t();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.i1l_1;
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
  protoOf(JobSupport).t1m = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.w1l();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.n1l(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).l1l = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.w1l();
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
  protoOf(JobSupport).u1m = function (child) {
    // Inline function 'kotlin.also' call
    var this_0 = new ChildHandleNode(child);
    this_0.z1q_1 = this;
    var node = this_0;
    var tmp$ret$2;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.w1l();
        if (state instanceof Empty) {
          if (state.m1t_1) {
            if (this.w1k_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$2 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.b1r();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var addedBeforeCancellation = list.f1r(node, 7);
              var tmp;
              if (addedBeforeCancellation) {
                tmp = true;
              } else {
                var addedBeforeCompletion = list.f1r(node, 3);
                var latestState = this.w1l();
                var tmp_0;
                if (latestState instanceof Finishing) {
                  tmp_0 = latestState.q1t();
                } else {
                  // Inline function 'kotlinx.coroutines.assert' call
                  var tmp0_safe_receiver = latestState instanceof CompletedExceptionally ? latestState : null;
                  tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1l_1;
                }
                var rootCause = tmp_0;
                node.n1o(rootCause);
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
    var tmp_2 = this.w1l();
    var tmp0_safe_receiver_0 = tmp_2 instanceof CompletedExceptionally ? tmp_2 : null;
    node.n1o(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.i1l_1);
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).o1l = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).v1m = function (cause) {
  };
  protoOf(JobSupport).w1m = function () {
    return false;
  };
  protoOf(JobSupport).x1m = function () {
    return true;
  };
  protoOf(JobSupport).y1m = function (exception) {
    return false;
  };
  protoOf(JobSupport).h1l = function (state) {
  };
  protoOf(JobSupport).n1l = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.z1m() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).z1m = function () {
    return this.p1l() + '{' + stateString(this, this.w1l()) + '}';
  };
  protoOf(JobSupport).p1l = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).a1n = function ($completion) {
    $l$loop: while (true) {
      var state = this.w1l();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.i1l_1;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  function handlesExceptionF($this) {
    var tmp = $this.v1l();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1r();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.x1m())
        return true;
      var tmp_1 = parentJob.v1l();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.a1r();
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
    this.y1k(parent);
    this.p1u_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).k1m = function () {
    return true;
  };
  protoOf(JobImpl).x1m = function () {
    return this.p1u_1;
  };
  protoOf(JobImpl).v1r = function () {
    return this.t1m(Unit_instance);
  };
  protoOf(JobImpl).u1r = function (exception) {
    return this.t1m(new CompletedExceptionally(exception));
  };
  function Empty(isActive) {
    this.m1t_1 = isActive;
  }
  protoOf(Empty).d1l = function () {
    return this.m1t_1;
  };
  protoOf(Empty).b1r = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.m1t_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LockFreeLinkedListHead.call(this);
  }
  protoOf(NodeList).d1l = function () {
    return true;
  };
  protoOf(NodeList).b1r = function () {
    return this;
  };
  protoOf(NodeList).t1u = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('List{');
    this_0.q(state);
    this_0.q('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = this.c1r_1;
    while (!equals(cur, this)) {
      var node = cur;
      if (node instanceof JobNode) {
        if (first) {
          first = false;
        } else
          this_0.q(', ');
        this_0.w(node);
      }
      cur = cur.c1r_1;
    }
    this_0.q(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.t1u('Active') : protoOf(LockFreeLinkedListHead).toString.call(this);
  };
  function IncompleteStateBox(state) {
    this.d1t_1 = state;
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
    this.l1t_1 = list;
  }
  protoOf(InactiveNodeList).b1r = function () {
    return this.l1t_1;
  };
  protoOf(InactiveNodeList).d1l = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.l1t_1.t1u('New') : anyToString(this);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.y1u_1 = handler;
  }
  protoOf(InvokeOnCompletion).v1q = function () {
    return false;
  };
  protoOf(InvokeOnCompletion).n1o = function (cause) {
    return this.y1u_1(cause);
  };
  function InvokeOnCancelling(handler) {
    JobNode.call(this);
    this.d1v_1 = handler;
    this.e1v_1 = atomic$boolean$1(false);
  }
  protoOf(InvokeOnCancelling).v1q = function () {
    return true;
  };
  protoOf(InvokeOnCancelling).n1o = function (cause) {
    if (this.e1v_1.atomicfu$compareAndSet(false, true))
      this.d1v_1(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.j1v_1 = continuation;
  }
  protoOf(ResumeOnCompletion).v1q = function () {
    return false;
  };
  protoOf(ResumeOnCompletion).n1o = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = this.j1v_1;
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_instance);
    this_0.b9(tmp$ret$1);
    return Unit_instance;
  };
  function ChildHandleNode(childJob) {
    JobNode.call(this);
    this.w1t_1 = childJob;
  }
  protoOf(ChildHandleNode).v1q = function () {
    return true;
  };
  protoOf(ChildHandleNode).n1o = function (cause) {
    return this.w1t_1.o1m(this.a1r());
  };
  protoOf(ChildHandleNode).p1m = function (cause) {
    return this.a1r().p1m(cause);
  };
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.o1v_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).v1q = function () {
    return false;
  };
  protoOf(ResumeAwaitOnCompletion).n1o = function (cause) {
    var state = this.a1r().w1l();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp0 = this.o1v_1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = state.i1l_1;
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.b9(tmp$ret$2);
    } else {
      var tmp0_0 = this.o1v_1;
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value = unboxState(state);
      var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
      tmp0_0.b9(tmp$ret$4);
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
      p0.n1o(p0_0);
      return Unit_instance;
    }, 1, 0, 11, 'invoke', [p0]);
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.r1v();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).r1v = function () {
    var main = Dispatchers_getInstance().w1v();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.q1v();
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
  protoOf(SupervisorJobImpl).p1m = function (cause) {
    return false;
  };
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$(timeMillis, block, $completion);
    tmp.s8_1 = Unit_instance;
    tmp.t8_1 = null;
    return tmp.y8();
  }
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.l1w_1 = coroutine;
  }
  protoOf(TimeoutCancellationException).e1s = function () {
    var tmp0_elvis_lhs = this.message;
    // Inline function 'kotlin.also' call
    var this_0 = new TimeoutCancellationException(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, this.l1w_1);
    initCause(this_0, this);
    return this_0;
  };
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.w8(), uCont);
    this.q1w_1 = time;
  }
  protoOf(TimeoutCoroutine).n1q = function () {
    var delay = get_delay(this.b1l_1);
    var tmp0_safe_receiver = this.b1l_1.d9(Key_instance_2);
    var name = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1s_1;
    this.q1m(TimeoutCancellationException_0(this.q1w_1, delay, this, name));
  };
  protoOf(TimeoutCoroutine).p1l = function () {
    return protoOf(ScopeCoroutine).p1l.call(this) + '(timeMillis=' + this.q1w_1.toString() + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.u1w_1;
    var context = cont.w8();
    disposeOnCompletion(coroutine, get_delay(context).g1s(coroutine.q1w_1, coroutine, coroutine.b1l_1));
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
      tmp = tmp0_safe_receiver.h1s(tmp$ret$0);
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
    this.i1w_1 = timeMillis;
    this.j1w_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$).y8 = function () {
    var suspendResult = this.s8_1;
    $sm: do
      try {
        var tmp = this.q8_1;
        switch (tmp) {
          case 0:
            this.r8_1 = 3;
            if (this.i1w_1 <= 0n)
              return null;
            this.k1w_1 = {_v: null};
            this.r8_1 = 2;
            this.q8_1 = 1;
            var timeoutCoroutine = new TimeoutCoroutine(this.i1w_1, this);
            this.k1w_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.j1w_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.r8_1 = 3;
            var tmp_0 = this.t8_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.t8_1;
              if (e.l1w_1 === this.k1w_1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.t8_1;
            }

          case 3:
            throw this.t8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.r8_1 === 3) {
          throw e_0;
        } else {
          this.q8_1 = this.r8_1;
          this.t8_1 = e_0;
        }
      }
     while (true);
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).x1r = function (context) {
    return false;
  };
  protoOf(Unconfined).y1r = function (context, block) {
    var yieldContext = context.d9(Key_instance_4);
    if (!(yieldContext == null)) {
      yieldContext.y1w_1 = true;
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
  var static_init_called_0;
  function static_init_0() {
    if (static_init_called_0)
      return Unit_instance;
    static_init_called_0 = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    static_init_0();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    static_init_0();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    static_init_0();
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
    $this.e1x_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.d1x_1 = channel;
    this.e1x_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).f1x = function () {
    return ensureNotNull(this.d1x_1);
  };
  protoOf(ChannelSegment).g1x = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).h1x = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).i1x = function (index) {
    return this.e1x_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).j1x = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.i1x(index);
    this.k1x(index);
    return this_0;
  };
  protoOf(ChannelSegment).k1x = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).l1x = function (index) {
    return this.e1x_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).m1x = function (index, value) {
    this.e1x_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).n1x = function (index, from, to) {
    return this.e1x_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).o1x = function (index, update) {
    return this.e1x_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).f1p = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.i1x(index_0);
    $l$loop: while (true) {
      var cur = this.l1x(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.n1x(index_0, cur, update)) {
          this.k1x(index_0);
          this.b1y(index_0, !isSender);
          if (isSender) {
            var tmp0_safe_receiver = this.f1x().q1x_1;
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
          this.k1x(index_0);
          if (isSender) {
            var tmp1_safe_receiver = this.f1x().q1x_1;
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
  protoOf(ChannelSegment).b1y = function (index, receiver) {
    if (receiver) {
      var tmp = this.f1x();
      var tmp0 = this.d1p_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      // Inline function 'kotlin.Long.plus' call
      var this_0 = multiply(tmp0, fromInt(other));
      var tmp$ret$1 = add(this_0, fromInt(index));
      tmp.c1y(tmp$ret$1);
    }
    this.d1y();
  };
  function onClosedHasNext($this) {
    $this.p1y_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.r1y_1.s1y();
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
      $this.q1y_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.r1y_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension(this_0, $this, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (r < this_0.t1y()) {
          segment.n1y();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.w1x_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if (this_0.u1y()) {
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.s1x_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = divide(r_0, fromInt(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var tmp$ret$6 = modulo(r_0, fromInt(other_0));
            var i = convertToInt(tmp$ret$6);
            if (!(segment_0.d1p_1 === id)) {
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
              if (r_0 < this_0.t1y()) {
                segment_0.n1y();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlin.error' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.n1y();
              $this.p1y_1 = updCellResult_0;
              $this.q1y_1 = null;
              var tmp0_safe_receiver = $this.r1y_1.q1x_1;
              cancellable.e1o(true, tmp0_safe_receiver == null ? null : bindCancellationFun($this.r1y_1, tmp0_safe_receiver, updCellResult_0));
            }
            break $l$block_0;
          }
        }
      } else {
        segment.n1y();
        $this.p1y_1 = updCellResult;
        $this.q1y_1 = null;
        var tmp0_safe_receiver_0 = $this.r1y_1.q1x_1;
        cancellable.e1o(true, tmp0_safe_receiver_0 == null ? null : bindCancellationFun($this.r1y_1, tmp0_safe_receiver_0, updCellResult));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.a1q();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.z1p();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.q1y_1);
    $this.q1y_1 = null;
    $this.p1y_1 = get_CHANNEL_CLOSED();
    var cause = $this.r1y_1.s1y();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
      cont.b9(tmp$ret$1);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.b9(tmp$ret$3);
    }
  }
  function $hasNextCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d1z_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$).y8 = function () {
    var suspendResult = this.s8_1;
    $sm: do
      try {
        var tmp = this.q8_1;
        switch (tmp) {
          case 0:
            this.r8_1 = 8;
            if (!(this.d1z_1.p1y_1 === get_NO_RECEIVE_RESULT()) && !(this.d1z_1.p1y_1 === get_CHANNEL_CLOSED())) {
              var tmp_0 = this;
              tmp_0.e1z_1 = true;
              this.q8_1 = 11;
              continue $sm;
            } else {
              this.o1z_1 = this.d1z_1.r1y_1;
              this.n1z_1 = null;
              this.q8_1 = 1;
              continue $sm;
            }

          case 1:
            this.k1z_1 = this.o1z_1;
            this.l1z_1 = this.n1z_1;
            this.h1z_1 = this.k1z_1.w1x_1.kotlinx$atomicfu$value;
            this.q8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.q8_1 = 9;
              continue $sm;
            }

            if (this.k1z_1.u1y()) {
              var tmp_1 = this;
              tmp_1.f1z_1 = onClosedHasNext(this.d1z_1);
              this.q8_1 = 10;
              continue $sm;
            } else {
              this.q8_1 = 3;
              continue $sm;
            }

          case 3:
            this.i1z_1 = this.k1z_1.s1x_1.atomicfu$getAndIncrement$long();
            var tmp0 = this.i1z_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_2 = this;
            var tmp0_0 = this.i1z_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_2.j1z_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!(this.h1z_1.d1p_1 === id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this.k1z_1, id, this.h1z_1);
              if (tmp0_elvis_lhs == null) {
                this.q8_1 = 2;
                var tmp_3 = this;
                continue $sm;
              } else {
                this.m1z_1 = tmp0_elvis_lhs;
                this.q8_1 = 4;
                continue $sm;
              }
            } else {
              this.q8_1 = 5;
              continue $sm;
            }

          case 4:
            this.h1z_1 = this.m1z_1;
            this.q8_1 = 5;
            continue $sm;
          case 5:
            var updCellResult = updateCellReceive(this.k1z_1, this.h1z_1, this.j1z_1, this.i1z_1, this.l1z_1);
            if (updCellResult === get_SUSPEND()) {
              var tmp_4 = this;
              var tmp_5 = this.l1z_1;
              var tmp1_safe_receiver = (!(tmp_5 == null) ? isInterface(tmp_5, Waiter) : false) ? tmp_5 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.k1z_1, tmp1_safe_receiver, this.h1z_1, this.j1z_1);
              }
              this.h1z_1;
              this.j1z_1;
              this.i1z_1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (updCellResult === get_FAILED()) {
                if (this.i1z_1 < this.k1z_1.t1y()) {
                  this.h1z_1.n1y();
                }
                this.q8_1 = 2;
                var tmp_6 = this;
                continue $sm;
              } else {
                if (updCellResult === get_SUSPEND_NO_WAITER()) {
                  var tmp0_1 = this.h1z_1;
                  var tmp2 = this.j1z_1;
                  var r = this.i1z_1;
                  this.q8_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.d1z_1, tmp0_1, tmp2, r, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_7 = this;
                  this.h1z_1.n1y();
                  this.d1z_1.p1y_1 = updCellResult;
                  tmp_7.g1z_1 = true;
                  this.q8_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_8 = this;
            return suspendResult;
          case 7:
            this.f1z_1 = this.g1z_1;
            this.q8_1 = 10;
            continue $sm;
          case 8:
            throw this.t8_1;
          case 9:
            if (false) {
              this.q8_1 = 1;
              continue $sm;
            }

            this.q8_1 = 10;
            continue $sm;
          case 10:
            this.e1z_1 = this.f1z_1;
            this.q8_1 = 11;
            continue $sm;
          case 11:
            return this.e1z_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.r8_1 === 8) {
          throw e;
        } else {
          this.q8_1 = this.r8_1;
          this.t8_1 = e;
        }
      }
     while (true);
  };
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.t1x_1.kotlinx$atomicfu$value;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    var it = _get_bufferEndCounter__2d4hee($this);
    return it === 0n || it === 9223372036854775807n;
  }
  function onClosedSend($this, element, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.r1p();
    $l$block: {
      var tmp0_safe_receiver = $this.q1x_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, $this.p1z());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp1_safe_receiver, cancellable);
        var tmp$ret$5 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.b9(tmp$ret$5);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.p1z();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.b9(tmp$ret$7);
    }
    return cancellable.z1p();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      switch (updateCellSend($this, segment, index, element, s, cancellable, false)) {
        case 0:
          segment.n1y();
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$5 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.b9(tmp$ret$5);
          break;
        case 1:
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.b9(tmp$ret$8);
          break;
        case 2:
          prepareSenderForSuspension($this, cancellable, segment, index);
          break;
        case 4:
          if (s < $this.q1z()) {
            segment.n1y();
          }

          onClosedSendOnNoWaiterSuspend($this, element, cancellable);
          break;
        case 5:
          segment.n1y();
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
              if (!(segment_0.d1p_1 === id)) {
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
                  segment_0.n1y();
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$17 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.b9(tmp$ret$17);
                  break $l$block_5;
                case 1:
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$20 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.b9(tmp$ret$20);
                  break $l$block_5;
                case 2:
                  if (closed) {
                    segment_0.d1y();
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
                  if (s_0 < $this.q1z()) {
                    segment_0.n1y();
                  }

                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_5;
                case 5:
                  segment_0.n1y();
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
        cancellable.a1q();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.z1p();
  }
  function prepareSenderForSuspension($this, $receiver, segment, index) {
    $receiver.g1q(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp0_safe_receiver = $this.q1x_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, cont.w8());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace($this.p1z(), cont);
    var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.b9(tmp$ret$1);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.h1x(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.l1x(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.n1x(index, null, get_BUFFERED())) {
          return 1;
        }
      } else {
        if (waiter == null) {
          return 3;
        } else {
          if (segment.n1x(index, null, waiter))
            return 2;
        }
      }
    } else {
      if (isInterface(state, Waiter)) {
        segment.k1x(index);
        var tmp;
        if (tryResumeReceiver($this, state, element)) {
          segment.m1x(index, get_DONE_RCV());
          $this.r1z();
          tmp = 0;
        } else {
          if (!(segment.o1x(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.b1y(index, true);
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
      var state = segment.l1x(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) && !closed) {
          if (segment.n1x(index, null, get_BUFFERED())) {
            return 1;
          }
        } else {
          if (closed) {
            if (segment.n1x(index, null, get_INTERRUPTED_SEND())) {
              segment.b1y(index, false);
              return 4;
            }
          } else if (waiter == null)
            return 3;
          else if (segment.n1x(index, null, waiter))
            return 2;
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.n1x(index, state, get_BUFFERED())) {
          return 1;
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.k1x(index);
        return 5;
      } else if (state === get_POISONED()) {
        segment.k1x(index);
        return 5;
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.k1x(index);
        completeCloseOrCancel($this);
        return 4;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.k1x(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.s1z_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver($this, receiver, element)) {
          segment.m1x(index, get_DONE_RCV());
          $this.r1z();
          tmp_0 = 0;
        } else {
          if (!(segment.o1x(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.b1y(index, true);
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
      var tmp0 = $this.q1z();
      // Inline function 'kotlin.Long.plus' call
      var other = $this.p1x_1;
      tmp = curSenders < add(tmp0, fromInt(other));
    }
    return tmp;
  }
  function tryResumeReceiver($this, $receiver, element) {
    var tmp;
    if (isInterface($receiver, SelectInstance)) {
      tmp = $receiver.x1z($this, element);
    } else {
      if ($receiver instanceof ReceiveCatching) {
        if (!($receiver instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance_0().v1z(element);
        var tmp1_safe_receiver = $this.q1x_1;
        tmp = tryResume0($receiver.w1z_1, new ChannelResult(tmp_0), tmp1_safe_receiver == null ? null : bindCancellationFunResult($this, tmp1_safe_receiver));
      } else {
        if ($receiver instanceof BufferedChannelIterator) {
          if (!($receiver instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = $receiver.t1z(element);
        } else {
          if (isInterface($receiver, CancellableContinuation)) {
            if (!isInterface($receiver, CancellableContinuation))
              THROW_CCE();
            var tmp2_safe_receiver = $this.q1x_1;
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
        if (r < $this.t1y()) {
          segment.n1y();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.w1x_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if ($this.u1y()) {
              onClosedReceiveOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.s1x_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = divide(r_0, fromInt(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var tmp$ret$6 = modulo(r_0, fromInt(other_0));
            var i = convertToInt(tmp$ret$6);
            if (!(segment_0.d1p_1 === id)) {
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
              if (r_0 < $this.t1y()) {
                segment_0.n1y();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlin.error' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.n1y();
              var tmp0_safe_receiver = $this.q1x_1;
              var onCancellation = tmp0_safe_receiver == null ? null : bindCancellationFun_0($this, tmp0_safe_receiver);
              cancellable.e1o(updCellResult_0, onCancellation);
            }
            break $l$block_0;
          }
        }
      } else {
        segment.n1y();
        var tmp0_safe_receiver_0 = $this.q1x_1;
        var onCancellation_0 = tmp0_safe_receiver_0 == null ? null : bindCancellationFun_0($this, tmp0_safe_receiver_0);
        cancellable.e1o(updCellResult, onCancellation_0);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.a1q();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.z1p();
  }
  function prepareReceiverForSuspension($this, $receiver, segment, index) {
    $this.y1z();
    $receiver.g1q(segment, index);
  }
  function onClosedReceiveOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = _get_receiveException__foorc1($this);
    var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.b9(tmp$ret$1);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.l1x(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var senders = $this.r1x_1.kotlinx$atomicfu$value & 1152921504606846975n;
      if (r >= senders) {
        if (waiter === null) {
          return get_SUSPEND_NO_WAITER();
        }
        if (segment.n1x(index, state, waiter)) {
          expandBuffer($this);
          return get_SUSPEND();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.n1x(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.j1x(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.l1x(index);
      if (state === null || state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var senders = $this.r1x_1.kotlinx$atomicfu$value & 1152921504606846975n;
        if (r < senders) {
          if (segment.n1x(index, state, get_POISONED())) {
            expandBuffer($this);
            return get_FAILED();
          }
        } else {
          if (waiter === null) {
            return get_SUSPEND_NO_WAITER();
          }
          if (segment.n1x(index, state, waiter)) {
            expandBuffer($this);
            return get_SUSPEND();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.n1x(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.j1x(index);
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
        if (segment.n1x(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.s1z_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender($this, sender, segment, index)) {
            segment.m1x(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.j1x(index);
          } else {
            segment.m1x(index, get_INTERRUPTED_SEND());
            segment.b1y(index, false);
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
        var trySelectResult = $receiver.d20($this, Unit_instance);
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.k1x(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if ($receiver instanceof SendBroadcast) {
          tmp = tryResume0($receiver.z1z_1, true);
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
    var segment = $this.x1x_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.t1x_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = divide(b, fromInt(other));
      var s = $this.t1y();
      if (s <= b) {
        if (segment.d1p_1 < id && !(segment.j1y() == null)) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts($this);
        return Unit_instance;
      }
      if (!(segment.d1p_1 === id)) {
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
    var state = segment.l1x(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (b >= $this.s1x_1.kotlinx$atomicfu$value) {
        if (segment.n1x(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender($this, state, segment, index)) {
            segment.m1x(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.m1x(index, get_INTERRUPTED_SEND());
            segment.b1y(index, false);
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
      var state = segment.l1x(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (b < $this.s1x_1.kotlinx$atomicfu$value) {
          if (segment.n1x(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.n1x(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender($this, state, segment, index)) {
              segment.m1x(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.m1x(index, get_INTERRUPTED_SEND());
              segment.b1y(index, false);
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
            if (segment.n1x(index, state, get_IN_BUFFER()))
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
    if (!(($this.u1x_1.atomicfu$addAndGet$long(nAttempts) & 4611686018427387904n) === 0n)) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        if (!!(($this.u1x_1.kotlinx$atomicfu$value & 4611686018427387904n) === 0n)) {
          break $l$loop;
        }
      }
    }
  }
  function BufferedChannelIterator($outer) {
    this.r1y_1 = $outer;
    this.p1y_1 = get_NO_RECEIVE_RESULT();
    this.q1y_1 = null;
  }
  protoOf(BufferedChannelIterator).e20 = function ($completion) {
    var tmp = new $hasNextCOROUTINE$(this, $completion);
    tmp.s8_1 = Unit_instance;
    tmp.t8_1 = null;
    return tmp.y8();
  };
  protoOf(BufferedChannelIterator).g1q = function (segment, index) {
    var tmp0_safe_receiver = this.q1y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g1q(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).v = function () {
    var result = this.p1y_1;
    // Inline function 'kotlin.check' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.p1y_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.r1y_1));
    return result;
  };
  protoOf(BufferedChannelIterator).t1z = function (element) {
    var cont = ensureNotNull(this.q1y_1);
    this.q1y_1 = null;
    this.p1y_1 = element;
    var tmp0_safe_receiver = this.r1y_1.q1x_1;
    return tryResume0(cont, true, tmp0_safe_receiver == null ? null : bindCancellationFun(this.r1y_1, tmp0_safe_receiver, element));
  };
  protoOf(BufferedChannelIterator).f20 = function () {
    var cont = ensureNotNull(this.q1y_1);
    this.q1y_1 = null;
    this.p1y_1 = get_CHANNEL_CLOSED();
    var cause = this.r1y_1.s1y();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
      cont.b9(tmp$ret$1);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.b9(tmp$ret$3);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.s1y();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException('Channel was closed') : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp0 = $this.a1y_1;
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
    closeHandler($this.s1y());
  }
  function markClosed($this) {
    var tmp0 = $this.r1x_1;
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
    var tmp0 = $this.r1x_1;
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
    var tmp0 = $this.r1x_1;
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
    $this.g20();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.i20()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!(lastBufferedCellGlobalIndex === -1n)) {
        $this.h20(lastBufferedCellGlobalIndex);
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
    var lastSegment = $this.x1x_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    var it = $this.v1x_1.kotlinx$atomicfu$value;
    if (it.d1p_1 > lastSegment.d1p_1)
      lastSegment = it;
    // Inline function 'kotlin.let' call
    var it_0 = $this.w1x_1.kotlinx$atomicfu$value;
    if (it_0.d1p_1 > lastSegment.d1p_1)
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
          var tmp0 = segment.d1p_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var globalIndex = add(this_0, fromInt(index));
          if (globalIndex < $this.q1z())
            return -1n;
          cell_update: while (true) {
            var state = segment.l1x(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.n1x(index, state, get_CHANNEL_CLOSED())) {
                segment.d1y();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.m1y();
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
    var onUndeliveredElement = $this.q1x_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.d1p_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var globalIndex = add(this_0, fromInt(index));
          update_cell: while (true) {
            var state = segment.l1x(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (globalIndex < $this.q1z())
                  break process_segments;
                if (segment.n1x(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.i1x(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.k1x(index);
                  segment.d1y();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() || state === null) {
                  if (segment.n1x(index, state, get_CHANNEL_CLOSED())) {
                    segment.d1y();
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
                    if (globalIndex < $this.q1z())
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.s1z_1;
                    } else {
                      tmp_0 = isInterface(state, Waiter) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.n1x(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.i1x(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.k1x(index);
                      segment.d1y();
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
      var tmp0_elvis_lhs = segment.m1y();
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
          var tmp0 = segment.d1p_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          if (add(this_0, fromInt(index)) < sendersCounter)
            break process_segments;
          cell_update: while (true) {
            var state = segment.l1x(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.n1x(index, state, get_CHANNEL_CLOSED())) {
                segment.d1y();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.n1x(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.s1z_1);
                  segment.b1y(index, true);
                  break cell_update;
                }
              } else {
                if (isInterface(state, Waiter)) {
                  if (segment.n1x(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.b1y(index, true);
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
      segment = segment.m1y();
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
      var this_0 = $receiver.z1z_1;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
      this_0.b9(tmp$ret$1);
    } else {
      if (isInterface($receiver, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.p1z();
        var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
        $receiver.b9(tmp$ret$3);
      } else {
        if ($receiver instanceof ReceiveCatching) {
          var tmp0 = $receiver.w1z_1;
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = new ChannelResult(Companion_getInstance_0().j20($this.s1y()));
          var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
          tmp0.b9(tmp$ret$5);
        } else {
          if ($receiver instanceof BufferedChannelIterator) {
            $receiver.f20();
          } else {
            if (isInterface($receiver, SelectInstance))
              $receiver.x1z($this, get_CHANNEL_CLOSED());
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
        tmp = isClosedForReceive ? !$this.k20() : true;
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
      var state = segment.l1x(index);
      if (state === null || state === get_IN_BUFFER()) {
        if (segment.n1x(index, state, get_POISONED())) {
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
        return globalIndex === $this.q1z();
    }
  }
  function findSegmentSend($this, id, startFrom) {
    var tmp0 = $this.v1x_1;
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
              if (cur.d1p_1 >= tmp2.d1p_1) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.f1y()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.g1y()) {
                  cur.i4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.g1y()) {
                tmp2.i4();
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
      var tmp0_0 = startFrom.d1p_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      if (multiply(tmp0_0, fromInt(other)) < $this.q1z()) {
        startFrom.n1y();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.d1p_1 > id) {
        var tmp0_1 = segment.d1p_1;
        // Inline function 'kotlin.Long.times' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$7 = multiply(tmp0_1, fromInt(other_0));
        updateSendersCounterIfLower($this, tmp$ret$7);
        var tmp0_2 = segment.d1p_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        if (multiply(tmp0_2, fromInt(other_1)) < $this.q1z()) {
          segment.n1y();
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
    var tmp0 = $this.w1x_1;
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
              if (cur.d1p_1 >= tmp2.d1p_1) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.f1y()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.g1y()) {
                  cur.i4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.g1y()) {
                tmp2.i4();
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
      var tmp0_0 = startFrom.d1p_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      if (multiply(tmp0_0, fromInt(other)) < $this.t1y()) {
        startFrom.n1y();
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
        var tmp0_2 = $this.x1x_1;
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          // Inline function 'kotlinx.atomicfu.loop' call
          while (true) {
            var cur_0 = tmp0_2.kotlinx$atomicfu$value;
            if (cur_0.d1p_1 >= segment.d1p_1) {
              break $l$block_5;
            }
            if (!segment.f1y()) {
              break $l$block_5;
            }
            if (tmp0_2.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.g1y()) {
                cur_0.i4();
              }
              break $l$block_5;
            }
            if (segment.g1y()) {
              segment.i4();
            }
          }
        }
      }
      var tmp_2;
      if (segment.d1p_1 > id) {
        var tmp0_3 = segment.d1p_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$11 = multiply(tmp0_3, fromInt(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$11);
        var tmp0_4 = segment.d1p_1;
        // Inline function 'kotlin.Long.times' call
        var other_2 = get_SEGMENT_SIZE();
        if (multiply(tmp0_4, fromInt(other_2)) < $this.t1y()) {
          segment.n1y();
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
    var tmp0 = $this.x1x_1;
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
              if (cur.d1p_1 >= tmp2.d1p_1) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.f1y()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.g1y()) {
                  cur.i4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.g1y()) {
                tmp2.i4();
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
      if (segment.d1p_1 > id) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = add(currentBufferEndCounter, fromInt(1));
        var tmp0_0 = segment.d1p_1;
        // Inline function 'kotlin.Long.times' call
        var other = get_SEGMENT_SIZE();
        var tmp$ret$7 = multiply(tmp0_0, fromInt(other));
        if ($this.t1x_1.atomicfu$compareAndSet(tmp_2, tmp$ret$7)) {
          var tmp0_1 = segment.d1p_1;
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
    $l$loop: while (segment.d1p_1 < id) {
      var tmp0_elvis_lhs = segment.j1y();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.e1y()) {
        var tmp1_elvis_lhs = segment.j1y();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp0 = $this.x1x_1;
      var tmp2 = segment;
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        var tmp$ret$1;
        // Inline function 'kotlinx.atomicfu.loop' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          if (cur.d1p_1 >= tmp2.d1p_1) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!tmp2.f1y()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
            if (cur.g1y()) {
              cur.i4();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (tmp2.g1y()) {
            tmp2.i4();
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
    var this_0 = $this.r1x_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = cur & 1152921504606846975n;
      if (curCounter >= value)
        return Unit_instance;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$3 = convertToInt(shiftRight(cur, 60));
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$3);
      if ($this.r1x_1.atomicfu$compareAndSet(cur, update))
        return Unit_instance;
    }
    return tmp$ret$0;
  }
  function updateReceiversCounterIfLower($this, value) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.s1x_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      if (cur >= value)
        return Unit_instance;
      if ($this.s1x_1.atomicfu$compareAndSet(cur, value))
        return Unit_instance;
    }
    return tmp$ret$0;
  }
  function bindCancellationFunResult($this, $receiver) {
    return BufferedChannel$onCancellationChannelResultImplDoNotCall$ref($this);
  }
  function onCancellationChannelResultImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.q1x_1), ensureNotNull(ChannelResult__getOrNull_impl_f5e07h(element)), context);
  }
  function bindCancellationFun($this, $receiver, element) {
    return BufferedChannel$bindCancellationFun$lambda($receiver, element);
  }
  function bindCancellationFun_0($this, $receiver) {
    return BufferedChannel$onCancellationImplDoNotCall$ref($this);
  }
  function onCancellationImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.q1x_1), element, context);
  }
  function access$_get_sendersAndCloseStatus__tvw29s($this) {
    return $this.r1x_1;
  }
  function access$_get_sendSegment__111kgq($this) {
    return $this.v1x_1;
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
        callUndeliveredElement(this$0.q1x_1, $element, $select.w8());
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
      onCancellationChannelResultImplDoNotCall(tmp0, p0_0, p1.m20_1, p2);
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
    this.v20_1 = _this__u8e3s4;
    this.w20_1 = element;
  }
  protoOf($sendCOROUTINE$).y8 = function () {
    var suspendResult = this.s8_1;
    $sm: do
      try {
        var tmp = this.q8_1;
        switch (tmp) {
          case 0:
            this.r8_1 = 11;
            this.h21_1 = this.v20_1;
            this.g21_1 = this.w20_1;
            this.f21_1 = null;
            this.q8_1 = 1;
            continue $sm;
          case 1:
            this.z20_1 = this.h21_1;
            this.c21_1 = this.g21_1;
            this.a21_1 = this.f21_1;
            this.y20_1 = access$_get_sendSegment__111kgq(this.z20_1).kotlinx$atomicfu$value;
            this.q8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.q8_1 = 12;
              continue $sm;
            }

            var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s(this.z20_1).atomicfu$getAndIncrement$long();
            var tmp_0 = this;
            tmp_0.b21_1 = sendersAndCloseStatusCur & 1152921504606846975n;
            this.d21_1 = access$_get_isClosedForSend0__sm8f7a(this.z20_1, sendersAndCloseStatusCur);
            var tmp0 = this.b21_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_1 = this;
            var tmp0_0 = this.b21_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_1.x20_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!(this.y20_1.d1p_1 === id)) {
              var tmp0_elvis_lhs = access$findSegmentSend(this.z20_1, id, this.y20_1);
              if (tmp0_elvis_lhs == null) {
                if (this.d21_1) {
                  this.q8_1 = 10;
                  suspendResult = onClosedSend(this.v20_1, this.w20_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.q8_1 = 2;
                  var tmp_2 = this;
                  continue $sm;
                }
              } else {
                this.e21_1 = tmp0_elvis_lhs;
                this.q8_1 = 3;
                continue $sm;
              }
            } else {
              this.q8_1 = 4;
              continue $sm;
            }

          case 3:
            this.y20_1 = this.e21_1;
            this.q8_1 = 4;
            continue $sm;
          case 4:
            var tmp1_subject = access$updateCellSend(this.z20_1, this.y20_1, this.x20_1, this.c21_1, this.b21_1, this.a21_1, this.d21_1);
            if (tmp1_subject === 0) {
              this.y20_1.n1y();
              this.q8_1 = 13;
              continue $sm;
            } else {
              if (tmp1_subject === 1) {
                this.q8_1 = 13;
                continue $sm;
              } else {
                if (tmp1_subject === 2) {
                  if (this.d21_1) {
                    this.y20_1.d1y();
                    this.q8_1 = 9;
                    suspendResult = onClosedSend(this.v20_1, this.w20_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.q8_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (tmp1_subject === 4) {
                    if (this.b21_1 < this.z20_1.q1z()) {
                      this.y20_1.n1y();
                    }
                    this.q8_1 = 7;
                    suspendResult = onClosedSend(this.v20_1, this.w20_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp1_subject === 5) {
                      this.y20_1.n1y();
                      this.q8_1 = 2;
                      continue $sm;
                    } else {
                      if (tmp1_subject === 3) {
                        var tmp0_1 = this.y20_1;
                        var tmp2 = this.x20_1;
                        var tmp4 = this.c21_1;
                        var s = this.b21_1;
                        this.q8_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.v20_1, tmp0_1, tmp2, tmp4, s, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.q8_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.q8_1 = 2;
            continue $sm;
          case 6:
            this.q8_1 = 13;
            continue $sm;
          case 7:
            this.q8_1 = 13;
            continue $sm;
          case 8:
            var tmp_3 = this.a21_1;
            var tmp2_safe_receiver = (!(tmp_3 == null) ? isInterface(tmp_3, Waiter) : false) ? tmp_3 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              access$prepareSenderForSuspension(this.z20_1, tmp2_safe_receiver, this.y20_1, this.x20_1);
            }

            this.y20_1;
            this.x20_1;
            this.q8_1 = 13;
            continue $sm;
          case 9:
            this.q8_1 = 13;
            continue $sm;
          case 10:
            this.q8_1 = 13;
            continue $sm;
          case 11:
            throw this.t8_1;
          case 12:
            if (false) {
              this.q8_1 = 1;
              continue $sm;
            }

            this.q8_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.r8_1 === 11) {
          throw e;
        } else {
          this.q8_1 = this.r8_1;
          this.t8_1 = e;
        }
      }
     while (true);
  };
  function $receiveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q21_1 = _this__u8e3s4;
  }
  protoOf($receiveCOROUTINE$).y8 = function () {
    var suspendResult = this.s8_1;
    $sm: do
      try {
        var tmp = this.q8_1;
        switch (tmp) {
          case 0:
            this.r8_1 = 8;
            this.a22_1 = this.q21_1;
            this.z21_1 = null;
            this.q8_1 = 1;
            continue $sm;
          case 1:
            this.w21_1 = this.a22_1;
            this.x21_1 = this.z21_1;
            this.t21_1 = this.w21_1.w1x_1.kotlinx$atomicfu$value;
            this.q8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.q8_1 = 9;
              continue $sm;
            }

            if (this.w21_1.u1y()) {
              var tmp_0 = this;
              throw recoverStackTrace_0(_get_receiveException__foorc1(this.q21_1));
            } else {
              this.q8_1 = 3;
              continue $sm;
            }

          case 3:
            this.u21_1 = this.w21_1.s1x_1.atomicfu$getAndIncrement$long();
            var tmp0 = this.u21_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_1 = this;
            var tmp0_0 = this.u21_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_1.v21_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!(this.t21_1.d1p_1 === id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this.w21_1, id, this.t21_1);
              if (tmp0_elvis_lhs == null) {
                this.q8_1 = 2;
                var tmp_2 = this;
                continue $sm;
              } else {
                this.y21_1 = tmp0_elvis_lhs;
                this.q8_1 = 4;
                continue $sm;
              }
            } else {
              this.q8_1 = 5;
              continue $sm;
            }

          case 4:
            this.t21_1 = this.y21_1;
            this.q8_1 = 5;
            continue $sm;
          case 5:
            var updCellResult = updateCellReceive(this.w21_1, this.t21_1, this.v21_1, this.u21_1, this.x21_1);
            if (updCellResult === get_SUSPEND()) {
              var tmp_3 = this;
              var tmp_4 = this.x21_1;
              var tmp1_safe_receiver = (!(tmp_4 == null) ? isInterface(tmp_4, Waiter) : false) ? tmp_4 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.w21_1, tmp1_safe_receiver, this.t21_1, this.v21_1);
              }
              this.t21_1;
              this.v21_1;
              this.u21_1;
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (updCellResult === get_FAILED()) {
                if (this.u21_1 < this.w21_1.t1y()) {
                  this.t21_1.n1y();
                }
                this.q8_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                if (updCellResult === get_SUSPEND_NO_WAITER()) {
                  var tmp0_1 = this.t21_1;
                  var tmp2 = this.v21_1;
                  var r = this.u21_1;
                  this.q8_1 = 6;
                  suspendResult = receiveOnNoWaiterSuspend(this.q21_1, tmp0_1, tmp2, r, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_6 = this;
                  this.t21_1.n1y();
                  return updCellResult;
                }
              }
            }

          case 6:
            this.s21_1 = suspendResult;
            this.q8_1 = 7;
            continue $sm;
          case 7:
            this.r21_1 = this.s21_1;
            this.q8_1 = 10;
            continue $sm;
          case 8:
            throw this.t8_1;
          case 9:
            if (false) {
              this.q8_1 = 1;
              continue $sm;
            }

            this.q8_1 = 10;
            continue $sm;
          case 10:
            return this.r21_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.r8_1 === 8) {
          throw e;
        } else {
          this.q8_1 = this.r8_1;
          this.t8_1 = e;
        }
      }
     while (true);
  };
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.p1x_1 = capacity;
    this.q1x_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    if (!(this.p1x_1 >= 0)) {
      var message = 'Invalid channel capacity: ' + this.p1x_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.r1x_1 = atomic$long$1(0n);
    this.s1x_1 = atomic$long$1(0n);
    this.t1x_1 = atomic$long$1(initialBufferEnd(this.p1x_1));
    this.u1x_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(0n, null, this, 3);
    this.v1x_1 = atomic$ref$1(firstSegment);
    this.w1x_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.x1x_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.q1x_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.y1x_1 = tmp_3;
    this.z1x_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.a1y_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).t1y = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    return this.r1x_1.kotlinx$atomicfu$value & 1152921504606846975n;
  };
  protoOf(BufferedChannel).q1z = function () {
    return this.s1x_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).b22 = function (element, $completion) {
    var tmp = new $sendCOROUTINE$(this, element, $completion);
    tmp.s8_1 = Unit_instance;
    tmp.t8_1 = null;
    return tmp.y8();
  };
  protoOf(BufferedChannel).c22 = function (element) {
    if (shouldSendSuspend0(this, this.r1x_1.kotlinx$atomicfu$value))
      return Companion_getInstance_0().d22();
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
        if (!(segment.d1p_1 === id)) {
          var tmp0_elvis_lhs = access$findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              tmp$ret$0 = Companion_getInstance_0().j20(this.p1z());
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
            segment.n1y();
            tmp$ret$0 = Companion_getInstance_0().v1z(Unit_instance);
            break $l$block_5;
          case 1:
            tmp$ret$0 = Companion_getInstance_0().v1z(Unit_instance);
            break $l$block_5;
          case 2:
            if (closed) {
              segment.d1y();
              tmp$ret$0 = Companion_getInstance_0().j20(this.p1z());
              break $l$block_5;
            }

            var tmp2_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              access$prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
            }

            segment.d1y();
            tmp$ret$0 = Companion_getInstance_0().d22();
            break $l$block_5;
          case 4:
            if (s < this.q1z()) {
              segment.n1y();
            }

            tmp$ret$0 = Companion_getInstance_0().j20(this.p1z());
            break $l$block_5;
          case 5:
            segment.n1y();
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
  protoOf(BufferedChannel).y1z = function () {
  };
  protoOf(BufferedChannel).r1z = function () {
  };
  protoOf(BufferedChannel).e22 = function ($completion) {
    var tmp = new $receiveCOROUTINE$(this, $completion);
    tmp.s8_1 = Unit_instance;
    tmp.t8_1 = null;
    return tmp.y8();
  };
  protoOf(BufferedChannel).h20 = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.w1x_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.s1x_1.kotlinx$atomicfu$value;
      // Inline function 'kotlin.Long.plus' call
      var other = this.p1x_1;
      var tmp0 = add(r, fromInt(other));
      // Inline function 'kotlin.math.max' call
      var b = _get_bufferEndCounter__2d4hee(this);
      if (globalCellIndex < (tmp0 >= b ? tmp0 : b))
        return Unit_instance;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$3 = add(r, fromInt(1));
      if (!this.s1x_1.atomicfu$compareAndSet(r, tmp$ret$3))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = divide(r, fromInt(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var tmp$ret$5 = modulo(r, fromInt(other_1));
      var i = convertToInt(tmp$ret$5);
      if (!(segment.d1p_1 === id)) {
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
        if (r < this.t1y()) {
          segment.n1y();
        }
      } else {
        segment.n1y();
        var tmp1_safe_receiver = this.q1x_1;
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
  protoOf(BufferedChannel).c1y = function (globalIndex) {
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
        var ebCompleted = this.u1x_1.kotlinx$atomicfu$value & 4611686018427387903n;
        if (b === ebCompleted && b === _get_bufferEndCounter__2d4hee(this))
          return Unit_instance;
      }
       while (inductionVariable < times);
    var tmp0 = this.u1x_1;
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
      var ebCompletedAndBit = this.u1x_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = ebCompletedAndBit & 4611686018427387903n;
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !((ebCompletedAndBit & 4611686018427387904n) === 0n);
      if (b_0 === ebCompleted_0 && b_0 === _get_bufferEndCounter__2d4hee(this)) {
        var tmp0_0 = this.u1x_1;
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
        this.u1x_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).t = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).s1y = function () {
    var tmp = this.z1x_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).p1z = function () {
    var tmp0_elvis_lhs = this.s1y();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).f22 = function () {
  };
  protoOf(BufferedChannel).g22 = function (cause) {
    return this.h22(cause, false);
  };
  protoOf(BufferedChannel).l1m = function (cause) {
    this.j22(cause);
  };
  protoOf(BufferedChannel).j22 = function (cause) {
    return this.h22(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).h22 = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.z1x_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    this.f22();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).i20 = function () {
    return false;
  };
  protoOf(BufferedChannel).g20 = function () {
    return _get_isClosedForSend0__kxgf9m(this, this.r1x_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).u1y = function () {
    return _get_isClosedForReceive0__f7qknl(this, this.r1x_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).k20 = function () {
    $l$loop: while (true) {
      var segment = this.w1x_1.kotlinx$atomicfu$value;
      var r = this.q1z();
      var s = this.t1y();
      if (s <= r)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = divide(r, fromInt(other));
      if (!(segment.d1p_1 === id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (this.w1x_1.kotlinx$atomicfu$value.d1p_1 < id) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.n1y();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var tmp$ret$1 = modulo(r, fromInt(other_0));
      var i = convertToInt(tmp$ret$1);
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = add(r, fromInt(1));
      this.s1x_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var this_0 = this.r1x_1.kotlinx$atomicfu$value;
    var tmp0_subject = convertToInt(shiftRight(this_0, 60));
    if (tmp0_subject === 2) {
      sb.q('closed,');
    } else if (tmp0_subject === 3) {
      sb.q('cancelled,');
    }
    sb.q('capacity=' + this.p1x_1 + ',');
    sb.q('data=[');
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = listOf([this.w1x_1.kotlinx$atomicfu$value, this.v1x_1.kotlinx$atomicfu$value, this.x1x_1.kotlinx$atomicfu$value]);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (!(element === get_NULL_SEGMENT())) {
        destination.c1(element);
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
      var minValue = minElem.d1p_1;
      do {
        var e = iterator.v();
        var v = e.d1p_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.u());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.q1z();
    var s = this.t1y();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_0 = segment.d1p_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_1 = multiply(tmp0_0, fromInt(other));
          var globalCellIndex = add(this_1, fromInt(i));
          if (globalCellIndex >= s && globalCellIndex >= r)
            break append_elements;
          var cellState = segment.l1x(i);
          var element_0 = segment.i1x(i);
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
      var tmp4_elvis_lhs = segment.j1y();
      var tmp_0;
      if (tmp4_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp4_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.pc(sb.a() - 1 | 0);
    }
    sb.q(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.s1z_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + toString(this.s1z_1) + ')';
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
    var token = _this__u8e3s4.a1o(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.b1o(token);
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
    return new ChannelSegment(id, prev, prev.f1x(), 0);
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
    this.l22_1 = 2147483647;
    this.m22_1 = 0;
    this.n22_1 = -1;
    this.o22_1 = -2;
    this.p22_1 = -3;
    this.q22_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.r22_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
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
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s22_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.s22_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.s22_1, other.s22_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.s22_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + toString_0(this.s22_1) + ')';
  };
  function Companion() {
    Companion_instance_0 = this;
    this.u1z_1 = new Failed();
  }
  protoOf(Companion).v1z = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).d22 = function () {
    return _ChannelResult___init__impl__siwsuf(this.u1z_1);
  };
  protoOf(Companion).j20 = function (cause) {
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
    var tmp0_other_with_cast = other.m20_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_0();
    this.m20_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.m20_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.m20_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.m20_1, other);
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
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().r22_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.w22_1 = _channel;
  }
  protoOf(ChannelCoroutine).l1m = function (cause) {
    if (this.y1l())
      return Unit_instance;
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.g1l() : null, null, this);
    } else {
      tmp = cause;
    }
    this.n1m(tmp);
  };
  protoOf(ChannelCoroutine).k22 = function (cause, $super) {
    return this.m1m(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).n1m = function (cause) {
    var exception = this.d1m(cause);
    this.w22_1.l1m(exception);
    this.q1m(exception);
  };
  protoOf(ChannelCoroutine).g20 = function () {
    return this.w22_1.g20();
  };
  protoOf(ChannelCoroutine).b22 = function (element, $completion) {
    return this.w22_1.b22(element, $completion);
  };
  protoOf(ChannelCoroutine).c22 = function (element) {
    return this.w22_1.c22(element);
  };
  protoOf(ChannelCoroutine).g22 = function (cause) {
    return this.w22_1.g22(cause);
  };
  protoOf(ChannelCoroutine).e22 = function ($completion) {
    return this.w22_1.e22($completion);
  };
  protoOf(ChannelCoroutine).t = function () {
    return this.w22_1.t();
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
    _this__u8e3s4.l1m(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.k23_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : trySendDropOldest($this, element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).c22.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) || _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp0_safe_receiver = $this.q1x_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        throw tmp1_safe_receiver;
      }
    }
    return Companion_getInstance_0().v1z(Unit_instance);
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
        if (!(segment.d1p_1 === id)) {
          var tmp0_elvis_lhs = access$findSegmentSend($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              return Companion_getInstance_0().j20($this.p1z());
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
            segment.n1y();
            return Companion_getInstance_0().v1z(Unit_instance);
          case 1:
            return Companion_getInstance_0().v1z(Unit_instance);
          case 2:
            if (closed) {
              segment.d1y();
              return Companion_getInstance_0().j20($this.p1z());
            }

            var tmp2_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              access$prepareSenderForSuspension($this, tmp2_safe_receiver, segment, i);
            }

            var tmp0 = segment.d1p_1;
            // Inline function 'kotlin.Long.times' call

            var other_1 = get_SEGMENT_SIZE();
            // Inline function 'kotlin.Long.plus' call

            var this_0 = multiply(tmp0, fromInt(other_1));
            var tmp$ret$10 = add(this_0, fromInt(i));
            $this.h20(tmp$ret$10);
            return Companion_getInstance_0().v1z(Unit_instance);
          case 4:
            if (s < $this.q1z()) {
              segment.n1y();
            }

            return Companion_getInstance_0().j20($this.p1z());
          case 5:
            segment.n1y();
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
    this.j23_1 = capacity;
    this.k23_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    if (!!(this.k23_1 === BufferOverflow_SUSPEND_getInstance())) {
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).o() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.j23_1 >= 1)) {
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.j23_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).i20 = function () {
    return this.k23_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).b22 = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp0_safe_receiver = this.q1x_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, this.p1z());
        throw tmp1_safe_receiver;
      }
      throw this.p1z();
    }
    return Unit_instance;
  };
  protoOf(ConflatedBufferedChannel).c22 = function (element) {
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
      coroutine.e1m(onCompletion);
    }
    coroutine.q1l(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).d1l = function () {
    return protoOf(ChannelCoroutine).d1l.call(this);
  };
  protoOf(ProducerCoroutine).p23 = function (value) {
    this.w22_1.i22();
  };
  protoOf(ProducerCoroutine).e1l = function (value) {
    return this.p23(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).f1l = function (cause, handled) {
    var processed = this.w22_1.g22(cause);
    if (!processed && !handled) {
      handleCoroutineException(this.b1l_1, cause);
    }
  };
  protoOf(ProducerCoroutine).k22 = function (cause, $super) {
    return this.m1m(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.d1p_1 = id;
    this.e1p_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).e1y = function () {
    return this.e1p_1.kotlinx$atomicfu$value === this.g1x() && !this.l1y();
  };
  protoOf(Segment).f1y = function () {
    var tmp0 = this.e1p_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        if (!(!(cur === this.g1x()) || this.l1y())) {
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
  protoOf(Segment).g1y = function () {
    return this.e1p_1.atomicfu$addAndGet(-65536) === this.g1x() && !this.l1y();
  };
  protoOf(Segment).d1y = function () {
    if (this.e1p_1.atomicfu$incrementAndGet() === this.g1x()) {
      this.i4();
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
        if (cur.o1y())
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
    var tmp0_other_with_cast = other.l20_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.l20_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.l20_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.l20_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.l20_1, other);
  };
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.h1y_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.m1y();
    while (!(cur === null) && cur.e1y())
      cur = cur.i1y_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.j1y());
    while (cur.e1y()) {
      var tmp0_elvis_lhs = cur.j1y();
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
    this.h1y_1 = atomic$ref$1(null);
    this.i1y_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).j1y = function () {
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
  protoOf(ConcurrentLinkedListNode).k1y = function (value) {
    return this.h1y_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).l1y = function () {
    return this.j1y() == null;
  };
  protoOf(ConcurrentLinkedListNode).m1y = function () {
    return this.i1y_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).n1y = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.i1y_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).o1y = function () {
    return this.h1y_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).i4 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.l1y())
      return Unit_instance;
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      var tmp0 = next.i1y_1;
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
        prev.h1y_1.kotlinx$atomicfu$value = next;
      if (next.e1y() && !next.l1y())
        continue $l$loop_0;
      if (!(prev === null) && prev.e1y())
        continue $l$loop_0;
      return Unit_instance;
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (cur.d1p_1 < id || cur.e1y()) {
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
      var this_1 = cur.d1p_1;
      var newTail = createNewSegment(add(this_1, fromInt(1)), cur);
      if (cur.k1y(newTail)) {
        if (cur.e1y()) {
          cur.i4();
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
        handler.b1s(context, exception);
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
      if (safeIsDispatchNeeded(_this__u8e3s4.q1o_1, _this__u8e3s4.w8())) {
        _this__u8e3s4.s1o_1 = state;
        _this__u8e3s4.z1o_1 = 1;
        safeDispatch(_this__u8e3s4.q1o_1, _this__u8e3s4.w8(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().u1s();
          if (false && eventLoop.p1s()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.o1s()) {
            _this__u8e3s4.s1o_1 = state;
            _this__u8e3s4.z1o_1 = 1;
            eventLoop.n1s(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.q1s(true);
            try {
              var tmp$ret$5;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.w8().d9(Key_instance_3);
                if (!(job == null) && !job.d1l()) {
                  var cause = job.b1m();
                  _this__u8e3s4.t1p(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.b9(tmp$ret$7);
                  tmp$ret$5 = true;
                  break $l$block_0;
                }
                tmp$ret$5 = false;
              }
              if (!tmp$ret$5) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.r1o_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.t1o_1;
                _this__u8e3s4.r1o_1.b9(result);
              }
              $l$loop: while (eventLoop.m1s()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.o1q(e);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.r1s(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_instance;
    } else {
      _this__u8e3s4.b9(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.u1o_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.q1o_1 = dispatcher;
    this.r1o_1 = continuation;
    this.s1o_1 = get_UNDEFINED();
    this.t1o_1 = threadContextElements(this.w8());
    this.u1o_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).y1o = function () {
    return !(this.u1o_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).q23 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.u1o_1;
    while (true) {
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).z1r = function () {
    this.q23();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1p();
    }
  };
  protoOf(DispatchedContinuation).v1o = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.u1o_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === null) {
        this.u1o_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this.u1o_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
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
  protoOf(DispatchedContinuation).c1q = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.u1o_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.u1o_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!this.u1o_1.atomicfu$compareAndSet(state, null)) {
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
  protoOf(DispatchedContinuation).a1p = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.u1o_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.u1o_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.u1o_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).s1p = function () {
    var state = this.s1o_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.s1o_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).q1p = function () {
    return this;
  };
  protoOf(DispatchedContinuation).b9 = function (result) {
    var state = toState_0(result);
    if (safeIsDispatchNeeded(this.q1o_1, this.w8())) {
      this.s1o_1 = state;
      this.z1o_1 = 0;
      safeDispatch(this.q1o_1, this.w8(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().u1s();
        if (false && eventLoop.p1s()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.o1s()) {
          this.s1o_1 = state;
          this.z1o_1 = 0;
          eventLoop.n1s(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.q1s(true);
          try {
            this.w8();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.t1o_1;
            this.r1o_1.b9(result);
            $l$loop: while (eventLoop.m1s()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.o1q(e);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.r1s(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.q1o_1.toString() + ', ' + toDebugString(this.r1o_1) + ']';
  };
  protoOf(DispatchedContinuation).w8 = function () {
    return this.r1o_1.w8();
  };
  function safeDispatch(_this__u8e3s4, context, runnable) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    try {
      _this__u8e3s4.y1r(context, runnable);
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
      return _this__u8e3s4.x1r(context);
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
    this.z1o_1 = resumeMode;
  }
  protoOf(DispatchedTask).t1p = function (takenState, cause) {
  };
  protoOf(DispatchedTask).b1q = function (state) {
    return state;
  };
  protoOf(DispatchedTask).l1q = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1l_1;
  };
  protoOf(DispatchedTask).n1q = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    try {
      var tmp = this.q1p();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.r1o_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.t1o_1;
      var context = continuation.w8();
      var state = this.s1p();
      var exception = this.l1q(state);
      var job = exception == null && get_isCancellableMode(this.z1o_1) ? context.d9(Key_instance_3) : null;
      if (!(job == null) && !job.d1l()) {
        var cause = job.b1m();
        this.t1p(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.b9(tmp$ret$4);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.b9(tmp$ret$6);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.b1q(state);
          var tmp$ret$8 = _Result___init__impl__xyqfz8(value);
          continuation.b9(tmp$ret$8);
        }
      }
    } catch ($p) {
      if ($p instanceof DispatchException) {
        var e = $p;
        handleCoroutineException(this.q1p().w8(), e.a1s_1);
      } else {
        if ($p instanceof Error) {
          var e_0 = $p;
          this.o1q(e_0);
        } else {
          throw $p;
        }
      }
    }
  };
  protoOf(DispatchedTask).o1q = function (exception) {
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", exception);
    handleCoroutineException(this.q1p().w8(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.q1p();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.z1o_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.q1o_1;
      var context = delegate.w8();
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
    this.a1s_1 = cause;
    delete this.cause;
  }
  protoOf(DispatchException).f = function () {
    return this.a1s_1;
  };
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().u1s();
    if (eventLoop.o1s()) {
      eventLoop.n1s(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.q1s(true);
      try {
        resume(_this__u8e3s4, _this__u8e3s4.q1p(), true);
        $l$loop: while (eventLoop.m1s()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.o1q(e);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.r1s(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.s1p();
    var exception = _this__u8e3s4.l1q(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.b1q(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      this_0.r1o_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.t1o_1;
      this_0.r1o_1.b9(result);
    } else {
      delegate.b9(result);
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
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).c1(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        list.c1(_get_holder__f6h5pd($this));
        list.c1(element);
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
    this.u1w_1 = uCont;
  }
  protoOf(ScopeCoroutine).w1m = function () {
    return true;
  };
  protoOf(ScopeCoroutine).n1l = function (state) {
    resumeCancellableWithInternal(intercepted(this.u1w_1), recoverResult(state, this.u1w_1));
  };
  protoOf(ScopeCoroutine).v1w = function () {
  };
  protoOf(ScopeCoroutine).m1l = function (state) {
    this.u1w_1.b9(recoverResult(state, this.u1w_1));
  };
  function ContextScope(context) {
    this.r23_1 = context;
  }
  protoOf(ContextScope).c1l = function () {
    return this.r23_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.r23_1) + ')';
  };
  function Symbol(symbol) {
    this.s23_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.s23_1 + '>';
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
      tmp = e.a1s_1;
    } else {
      tmp = e;
    }
    var reportException = tmp;
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(reportException));
    completion.b9(tmp$ret$0);
    throw reportException;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      // Inline function 'kotlinx.coroutines.withCoroutineContext' call
      actualCompletion.w8();
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineResumed' call
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_1;
        if (e instanceof DispatchException) {
          tmp_1 = e.a1s_1;
        } else {
          tmp_1 = e;
        }
        var reportException = tmp_1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(reportException));
        actualCompletion.b9(tmp$ret$6);
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
      actualCompletion.b9(tmp$ret$8);
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
    var state = _this__u8e3s4.l1l(result);
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return get_COROUTINE_SUSPENDED();
    _this__u8e3s4.v1w();
    var tmp_1;
    if (state instanceof CompletedExceptionally) {
      var tmp_2;
      if (alwaysRethrow || notOwnTimeout(_this__u8e3s4, state.i1l_1)) {
        throw recoverStackTrace(state.i1l_1, _this__u8e3s4.u1w_1);
      } else {
        if (result instanceof CompletedExceptionally) {
          throw recoverStackTrace(result.i1l_1, _this__u8e3s4.u1w_1);
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
    _this__u8e3s4.t1m(new CompletedExceptionally(e.a1s_1));
    throw recoverStackTrace(e.a1s_1, _this__u8e3s4.u1w_1);
  }
  function notOwnTimeout(_this__u8e3s4, cause) {
    var tmp;
    if (!(cause instanceof TimeoutCancellationException)) {
      tmp = true;
    } else {
      tmp = !(cause.l1w_1 === _this__u8e3s4);
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
      var curState = $this.a20_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.x23($this, internalResult);
        if ($this.a20_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.c20_1 = internalResult;
          if (tryResume_0(cont, onCancellation))
            return 0;
          $this.c20_1 = get_NO_RESULT();
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
              if ($this.a20_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, KtList)) {
                if ($this.a20_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
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
    var tmp0_elvis_lhs = $this.b20_1;
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
        if (element.u23_1 === clauseObject) {
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
  protoOf(ClauseData).x23 = function (select, internalResult) {
    var tmp0_safe_receiver = this.w23_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver(select, this.v23_1, internalResult);
  };
  function SelectImplementation() {
  }
  protoOf(SelectImplementation).d20 = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  var static_init_called_1;
  function static_init_1() {
    if (static_init_called_1)
      return Unit_instance;
    static_init_called_1 = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
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
    var tmp0_elvis_lhs = _this__u8e3s4.a1o(Unit_instance, null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.b1o(token);
    return true;
  }
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    static_init_1();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    static_init_1();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    static_init_1();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    static_init_1();
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
      this$0.f24_1.kotlinx$atomicfu$value = this$1.i24_1;
      this$0.k24(this$1.i24_1);
      return Unit_instance;
    };
  }
  function MutexImpl$CancellableContinuationWithOwner$resume$lambda(this$0, this$1) {
    return function (it) {
      this$0.k24(this$1.i24_1);
      return Unit_instance;
    };
  }
  function holdsLockImpl($this, owner) {
    $l$loop: while (true) {
      if (!$this.l24())
        return 0;
      var curOwner = $this.f24_1.kotlinx$atomicfu$value;
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
        cancellable.a1q();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.z1p();
  }
  function tryLockImpl($this, owner) {
    $l$loop: while (true) {
      if ($this.t24()) {
        // Inline function 'kotlinx.coroutines.assert' call
        $this.f24_1.kotlinx$atomicfu$value = owner;
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
    this.j24_1 = $outer;
    this.h24_1 = cont;
    this.i24_1 = owner;
  }
  protoOf(CancellableContinuationWithOwner).u24 = function (value, idempotent, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    var token = this.h24_1.a1o(value, idempotent, MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this.j24_1, this));
    if (!(token == null)) {
      // Inline function 'kotlinx.coroutines.assert' call
      this.j24_1.f24_1.kotlinx$atomicfu$value = this.i24_1;
    }
    return token;
  };
  protoOf(CancellableContinuationWithOwner).a1o = function (value, idempotent, onCancellation) {
    return this.u24(value instanceof Unit ? value : THROW_CCE(), idempotent, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).v24 = function (value, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    this.j24_1.f24_1.kotlinx$atomicfu$value = this.i24_1;
    this.h24_1.e1q(Unit_instance, MutexImpl$CancellableContinuationWithOwner$resume$lambda(this.j24_1, this));
  };
  protoOf(CancellableContinuationWithOwner).e1o = function (value, onCancellation) {
    return this.v24(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).y1l = function () {
    return this.h24_1.y1l();
  };
  protoOf(CancellableContinuationWithOwner).b1o = function (token) {
    this.h24_1.b1o(token);
  };
  protoOf(CancellableContinuationWithOwner).c1o = function (handler) {
    this.h24_1.c1o(handler);
  };
  protoOf(CancellableContinuationWithOwner).g1q = function (segment, index) {
    this.h24_1.g1q(segment, index);
  };
  protoOf(CancellableContinuationWithOwner).w24 = function (_this__u8e3s4, value) {
    this.h24_1.d1o(_this__u8e3s4, Unit_instance);
  };
  protoOf(CancellableContinuationWithOwner).d1o = function (_this__u8e3s4, value) {
    return this.w24(_this__u8e3s4, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(CancellableContinuationWithOwner).vg = function (result) {
    this.h24_1.b9(result);
  };
  protoOf(CancellableContinuationWithOwner).b9 = function (result) {
    return this.vg(result);
  };
  protoOf(CancellableContinuationWithOwner).w8 = function () {
    return this.h24_1.w8();
  };
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, $owner) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      this$0.k24($owner);
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
    this.f24_1 = atomic$ref$1(locked ? null : get_NO_OWNER());
    var tmp = this;
    tmp.g24_1 = MutexImpl$onSelectCancellationUnlockConstructor$lambda(this);
  }
  protoOf(MutexImpl).l24 = function () {
    return this.x24() === 0;
  };
  protoOf(MutexImpl).y24 = function (owner, $completion) {
    if (this.z24(owner))
      return Unit_instance;
    return lockSuspend(this, owner, $completion);
  };
  protoOf(MutexImpl).z24 = function (owner) {
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
  protoOf(MutexImpl).k24 = function (owner) {
    $l$loop_0: while (true) {
      // Inline function 'kotlin.check' call
      if (!this.l24()) {
        var message = 'This mutex is not locked';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var curOwner = this.f24_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop_0;
      // Inline function 'kotlin.check' call
      if (!(curOwner === owner || owner == null)) {
        var message_0 = 'This mutex is locked by ' + toString_0(curOwner) + ', but ' + toString_0(owner) + ' is expected';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (!this.f24_1.atomicfu$compareAndSet(curOwner, get_NO_OWNER()))
        continue $l$loop_0;
      this.a25();
      return Unit_instance;
    }
  };
  protoOf(MutexImpl).toString = function () {
    return 'Mutex@' + get_hexAddress(this) + '[isLocked=' + this.l24() + ',owner=' + toString_0(this.f24_1.kotlinx$atomicfu$value) + ']';
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
      var p = $this.r24_1.atomicfu$getAndDecrement();
      if (p > $this.m24_1)
        continue $l$loop;
      return p;
    }
  }
  function coerceAvailablePermitsAtMaximum($this) {
    $l$loop_0: while (true) {
      var cur = $this.r24_1.kotlinx$atomicfu$value;
      if (cur <= $this.m24_1)
        break $l$loop_0;
      if ($this.r24_1.atomicfu$compareAndSet(cur, $this.m24_1))
        break $l$loop_0;
    }
  }
  function addAcquireToQueue($this, waiter) {
    var curTail = $this.p24_1.kotlinx$atomicfu$value;
    var enqIdx = $this.q24_1.atomicfu$getAndIncrement$long();
    var createNewSegment = createSegment$ref_0();
    var tmp0 = $this.p24_1;
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
              if (cur.d1p_1 >= tmp2_0.d1p_1) {
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (!tmp2_0.f1y()) {
                tmp$ret$2 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2_0)) {
                if (cur.g1y()) {
                  cur.i4();
                }
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (tmp2_0.g1y()) {
                tmp2_0.i4();
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
    if (segment.f25_1.atomicfu$get(i).atomicfu$compareAndSet(null, waiter)) {
      waiter.g1q(segment, i);
      return true;
    }
    var tmp4 = get_PERMIT();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    var value = get_TAKEN();
    if (segment.f25_1.atomicfu$get(i).atomicfu$compareAndSet(tmp4, value)) {
      if (isInterface(waiter, CancellableContinuation)) {
        if (!isInterface(waiter, CancellableContinuation))
          THROW_CCE();
        waiter.e1o(Unit_instance, $this.s24_1);
      } else {
        if (isInterface(waiter, SelectInstance)) {
          waiter.t23(Unit_instance);
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
    var curHead = $this.n24_1.kotlinx$atomicfu$value;
    var deqIdx = $this.o24_1.atomicfu$getAndIncrement$long();
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var id = divide(deqIdx, fromInt(other));
    var createNewSegment = createSegment$ref_0();
    var tmp0 = $this.n24_1;
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
              if (cur.d1p_1 >= tmp2.d1p_1) {
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (!tmp2.f1y()) {
                tmp$ret$2 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.g1y()) {
                  cur.i4();
                }
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (tmp2.g1y()) {
                tmp2.i4();
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
    segment.n1y();
    if (segment.d1p_1 > id)
      return false;
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var tmp$ret$5 = modulo(deqIdx, fromInt(other_0));
    var i = convertToInt(tmp$ret$5);
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.getAndSet' call
    var value = get_PERMIT();
    var cellState = segment.f25_1.atomicfu$get(i).atomicfu$getAndSet(value);
    if (cellState === null) {
      // Inline function 'kotlin.repeat' call
      var times = get_MAX_SPIN_CYCLES();
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.get' call
          if (segment.f25_1.atomicfu$get(i).kotlinx$atomicfu$value === get_TAKEN())
            return true;
        }
         while (inductionVariable < times);
      var tmp4 = get_PERMIT();
      // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
      var value_0 = get_BROKEN();
      return !segment.f25_1.atomicfu$get(i).atomicfu$compareAndSet(tmp4, value_0);
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
      var token = $receiver.a1o(Unit_instance, null, $this.s24_1);
      var tmp_0;
      if (!(token == null)) {
        $receiver.b1o(token);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (isInterface($receiver, SelectInstance)) {
        tmp = $receiver.x1z($this, Unit_instance);
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
      this$0.a25();
      return Unit_instance;
    };
  }
  function createSegment$ref_0() {
    return constructCallableReference(function (p0, p1) {
      return createSegment_0(p0, p1);
    }, 2, 0, 15, 'createSegment');
  }
  function SemaphoreAndMutexImpl(permits, acquiredPermits) {
    this.m24_1 = permits;
    this.o24_1 = atomic$long$1(0n);
    this.q24_1 = atomic$long$1(0n);
    // Inline function 'kotlin.require' call
    if (!(this.m24_1 > 0)) {
      var message = 'Semaphore should have at least 1 permit, but had ' + this.m24_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(0 <= acquiredPermits ? acquiredPermits <= this.m24_1 : false)) {
      var message_0 = 'The number of acquired permits should be in 0..' + this.m24_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var s = new SemaphoreSegment(0n, null, 2);
    this.n24_1 = atomic$ref$1(s);
    this.p24_1 = atomic$ref$1(s);
    this.r24_1 = atomic$int$1(this.m24_1 - acquiredPermits | 0);
    var tmp = this;
    tmp.s24_1 = SemaphoreAndMutexImpl$onCancellationRelease$lambda(this);
  }
  protoOf(SemaphoreAndMutexImpl).x24 = function () {
    // Inline function 'kotlin.math.max' call
    var a = this.r24_1.kotlinx$atomicfu$value;
    return Math.max(a, 0);
  };
  protoOf(SemaphoreAndMutexImpl).t24 = function () {
    $l$loop: while (true) {
      var p = this.r24_1.kotlinx$atomicfu$value;
      if (p > this.m24_1) {
        coerceAvailablePermitsAtMaximum(this);
        continue $l$loop;
      }
      if (p <= 0)
        return false;
      if (this.r24_1.atomicfu$compareAndSet(p, p - 1 | 0))
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
          waiter.e1o(Unit_instance, this.s24_1);
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
  protoOf(SemaphoreAndMutexImpl).a25 = function () {
    while (true) {
      var p = this.r24_1.atomicfu$getAndIncrement();
      if (p >= this.m24_1) {
        coerceAvailablePermitsAtMaximum(this);
        // Inline function 'kotlin.error' call
        var message = 'The number of released permits cannot be greater than ' + this.m24_1;
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
    this.f25_1 = atomicfu$AtomicRefArray$ofNulls(get_SEGMENT_SIZE_0());
  }
  protoOf(SemaphoreSegment).g1x = function () {
    return get_SEGMENT_SIZE_0();
  };
  protoOf(SemaphoreSegment).f1p = function (index, cause, context) {
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.set' call
    var value = get_CANCELLED();
    this.f25_1.atomicfu$get(index).kotlinx$atomicfu$value = value;
    this.d1y();
  };
  protoOf(SemaphoreSegment).toString = function () {
    return 'SemaphoreSegment[id=' + this.d1p_1.toString() + ', hashCode=' + hashCode(this) + ']';
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
  protoOf(NodeDispatcher).i25 = function () {
    process.nextTick(this.p25_1.n25_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.t25();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.m25_1 = dispatcher;
    var tmp = this;
    tmp.n25_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).u25 = function () {
    this.m25_1.i25();
  };
  protoOf(ScheduledMessageQueue).v25 = function () {
    setTimeout(this.n25_1, 0);
  };
  protoOf(ScheduledMessageQueue).w25 = function (timeout) {
    setTimeout(this.n25_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.j26_1 && event.data == this$0.k26_1) {
        event.stopPropagation();
        this$0.t25();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.t25();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.j26_1 = window_0;
    this.k26_1 = 'dispatchCoroutine';
    this.j26_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).u25 = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).v25 = function () {
    this.j26_1.postMessage(this.k26_1, '*');
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
    var combined = _this__u8e3s4.c1l().rh(context);
    return !(combined === Dispatchers_getInstance().s1v_1) && combined.d9(Key_instance) == null ? combined.rh(Dispatchers_getInstance().s1v_1) : combined;
  }
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().s1v_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.s1v_1 = createDefaultDispatcher();
    this.t1v_1 = Unconfined_getInstance();
    this.u1v_1 = new JsMainDispatcher(this.s1v_1, false);
    this.v1v_1 = null;
  }
  protoOf(Dispatchers).w1v = function () {
    var tmp0_elvis_lhs = this.v1v_1;
    return tmp0_elvis_lhs == null ? this.u1v_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.m26_1 = delegate;
    this.n26_1 = invokeImmediately;
    this.o26_1 = this.n26_1 ? this : new JsMainDispatcher(this.m26_1, true);
  }
  protoOf(JsMainDispatcher).q1v = function () {
    return this.o26_1;
  };
  protoOf(JsMainDispatcher).x1r = function (context) {
    return !this.n26_1;
  };
  protoOf(JsMainDispatcher).y1r = function (context, block) {
    return this.m26_1.y1r(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.r1v();
    return tmp0_elvis_lhs == null ? this.m26_1.toString() : tmp0_elvis_lhs;
  };
  function CancellationException_0(message, cause) {
    return CancellationException_init_$Create$_0(message, cause);
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.p26_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.p26_1);
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
        tmp_1 = equals(other.p26_1, this.p26_1);
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
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.p26_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function Runnable() {
  }
  function Runnable$run$ref(p0) {
    return constructCallableReference(function () {
      p0.n1q();
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
    this.c1r_1 = this;
    this.d1r_1 = this;
    this.e1r_1 = false;
  }
  protoOf(LockFreeLinkedListNode).f1r = function (node, permissionsBitmask) {
    var prev = this.d1r_1;
    var tmp;
    if (prev instanceof ListClosed) {
      tmp = ((prev.t26_1 & permissionsBitmask) === 0 && prev.f1r(node, permissionsBitmask));
    } else {
      node.c1r_1 = this;
      node.d1r_1 = prev;
      prev.c1r_1 = node;
      this.d1r_1 = node;
      tmp = true;
    }
    return tmp;
  };
  protoOf(LockFreeLinkedListNode).k1t = function (forbiddenElementsBit) {
    this.f1r(new ListClosed(forbiddenElementsBit), forbiddenElementsBit);
  };
  protoOf(LockFreeLinkedListNode).g1r = function () {
    if (this.e1r_1)
      return false;
    var prev = this.d1r_1;
    var next = this.c1r_1;
    prev.c1r_1 = next;
    next.d1r_1 = prev;
    this.e1r_1 = true;
    return true;
  };
  protoOf(LockFreeLinkedListNode).h1r = function (node) {
    if (!(this.c1r_1 === this))
      return false;
    this.f1r(node, -2147483648);
    return true;
  };
  function LockFreeLinkedListHead() {
    LockFreeLinkedListNode.call(this);
  }
  function ListClosed(forbiddenElementsBitmask) {
    LockFreeLinkedListNode.call(this);
    this.t26_1 = forbiddenElementsBitmask;
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
    this.v1s_1 = null;
  }
  protoOf(CommonThreadLocal).w1s = function () {
    return this.v1s_1;
  };
  protoOf(CommonThreadLocal).x1s = function (value) {
    this.v1s_1 = value;
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
  protoOf(UnconfinedEventLoop).y1r = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function await_0(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.r1p();
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.z1p();
  }
  function await$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(it);
      this_0.b9(tmp$ret$1);
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
      tmp0.b9(tmp$ret$1);
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
  protoOf(SetTimeoutDispatcher).i25 = function () {
    this.p25_1.w25(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.n1q();
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.d1o(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.p25_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).y1r = function (context, block) {
    this.p25_1.x25(block);
  };
  protoOf(SetTimeoutBasedDispatcher).g1s = function (timeMillis, block, context) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).f1s = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new ClearTimeout(handle));
  };
  function MessageQueue() {
    this.q25_1 = ArrayDeque_init_$Create$();
    this.r25_1 = 16;
    this.s25_1 = false;
  }
  protoOf(MessageQueue).x25 = function (element) {
    this.y25(element);
    if (!this.s25_1) {
      this.s25_1 = true;
      this.u25();
    }
  };
  protoOf(MessageQueue).t25 = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.r25_1;
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
          element.n1q();
        }
         while (inductionVariable < times);
    }finally {
      if (this.r()) {
        this.s25_1 = false;
      } else {
        this.v25();
      }
    }
  };
  protoOf(MessageQueue).y25 = function (element) {
    return this.q25_1.c1(element);
  };
  protoOf(MessageQueue).c1 = function (element) {
    return this.y25((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).z25 = function (index, element) {
    this.q25_1.y2(index, element);
  };
  protoOf(MessageQueue).y2 = function (index, element) {
    return this.z25(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).a26 = function (elements) {
    return this.q25_1.j1(elements);
  };
  protoOf(MessageQueue).j1 = function (elements) {
    return this.a26(elements);
  };
  protoOf(MessageQueue).w2 = function () {
    this.q25_1.w2();
  };
  protoOf(MessageQueue).b26 = function (index, element) {
    return this.q25_1.x2(index, element);
  };
  protoOf(MessageQueue).x2 = function (index, element) {
    return this.b26(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).z2 = function (index) {
    return this.q25_1.z2(index);
  };
  protoOf(MessageQueue).o2 = function () {
    return this.q25_1.o2();
  };
  protoOf(MessageQueue).f1 = function (index) {
    return this.q25_1.f1(index);
  };
  protoOf(MessageQueue).p2 = function (fromIndex, toIndex) {
    return this.q25_1.p2(fromIndex, toIndex);
  };
  protoOf(MessageQueue).r = function () {
    return this.q25_1.r();
  };
  protoOf(MessageQueue).c26 = function (element) {
    return this.q25_1.j2(element);
  };
  protoOf(MessageQueue).j2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.c26((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).t = function () {
    return this.q25_1.t();
  };
  protoOf(MessageQueue).d26 = function (elements) {
    return this.q25_1.k2(elements);
  };
  protoOf(MessageQueue).k2 = function (elements) {
    return this.d26(elements);
  };
  protoOf(MessageQueue).d1 = function (index) {
    return this.q25_1.d1(index);
  };
  protoOf(MessageQueue).e26 = function (element) {
    return this.q25_1.m2(element);
  };
  protoOf(MessageQueue).m2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.e26((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).f26 = function (element) {
    return this.q25_1.n2(element);
  };
  protoOf(MessageQueue).n2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.f26((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).asJsReadonlyArrayView = function () {
    return this.q25_1.asJsReadonlyArrayView();
  };
  protoOf(MessageQueue).e1 = function () {
    return this.q25_1.lf_1;
  };
  function WindowClearTimeout($outer, handle) {
    this.b27_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).o1o = function () {
    w3cClearTimeout(this.b27_1.d27_1, this.f27_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.d1o(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.d27_1 = window_0;
    this.e27_1 = new WindowMessageQueue(this.d27_1);
  }
  protoOf(WindowDispatcher).y1r = function (context, block) {
    return this.e27_1.x25(block);
  };
  protoOf(WindowDispatcher).f1s = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.d27_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new WindowClearTimeout(this, handle));
  };
  protoOf(WindowDispatcher).g1s = function (timeMillis, block, context) {
    var handle = w3cSetTimeout_0(this.d27_1, Runnable$run$ref(block), delayToInt(timeMillis));
    return new WindowClearTimeout(this, handle);
  };
  function delayToInt(timeMillis) {
    return convertToInt(coerceIn(timeMillis, 0n, 2147483647n));
  }
  function ClearTimeout(handle) {
    this.f27_1 = handle;
  }
  protoOf(ClearTimeout).o1o = function () {
    w3cClearTimeout_0(this.f27_1);
  };
  protoOf(ClearTimeout).n1o = function (cause) {
    this.o1o();
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.f27_1 + ']';
  };
  //region block: post-declaration
  protoOf(JobSupport).g1m = invokeOnCompletion$default;
  protoOf(JobSupport).m1m = cancel$default;
  protoOf(JobSupport).rh = plus;
  protoOf(JobSupport).d9 = get_0;
  protoOf(JobSupport).qh = fold;
  protoOf(JobSupport).ph = minusKey_0;
  protoOf(CoroutineDispatcher).d9 = get;
  protoOf(CoroutineDispatcher).ph = minusKey;
  protoOf(BufferedChannel).i22 = close$default;
  protoOf(BufferedChannel).k22 = cancel$default_0;
  protoOf(ChannelCoroutine).i22 = close$default;
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
  _.$_$.c = BufferOverflow_DROP_OLDEST_getInstance;
  _.$_$.d = BufferOverflow_SUSPEND_getInstance;
  _.$_$.e = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.f = Factory_getInstance;
  _.$_$.g = Key_instance_1;
  _.$_$.h = Dispatchers_getInstance;
  _.$_$.i = GlobalScope_instance;
  _.$_$.j = Key_instance_3;
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
