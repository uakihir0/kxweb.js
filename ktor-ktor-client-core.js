(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './ktor-ktor-utils.js', './kotlinx-atomicfu.js', './ktor-ktor-events.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './kotlinx-io-kotlinx-io-core.js', './ktor-ktor-http-cio.js', './ktor-ktor-websockets.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-atomicfu.js'), require('./ktor-ktor-events.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./ktor-ktor-http-cio.js'), require('./ktor-ktor-websockets.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-events'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-events' was not found. Please, check whether 'ktor-ktor-events' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-http-cio'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-http-cio' was not found. Please, check whether 'ktor-ktor-http-cio' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-websockets'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-websockets' was not found. Please, check whether 'ktor-ktor-websockets' is loaded prior to 'ktor-ktor-client-core'.");
    }
    globalThis['ktor-ktor-client-core'] = factory(typeof globalThis['ktor-ktor-client-core'] === 'undefined' ? {} : globalThis['ktor-ktor-client-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-atomicfu'], globalThis['ktor-ktor-events'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-http'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['ktor-ktor-http-cio'], globalThis['ktor-ktor-websockets']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_io_ktor_ktor_http_cio, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.s2;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var protoOf = kotlin_kotlin.$_$.wb;
  var objectCreate = kotlin_kotlin.$_$.vb;
  var CancellationException = kotlin_kotlin.$_$.n8;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.t3;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var CoroutineImpl = kotlin_kotlin.$_$.g9;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.i;
  var toString = kotlin_kotlin.$_$.zb;
  var getKClassFromExpression = kotlin_kotlin.$_$.pc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o8;
  var initMetadataForLambda = kotlin_kotlin.$_$.cb;
  var VOID = kotlin_kotlin.$_$.d;
  var constructCallableReference = kotlin_kotlin.$_$.oa;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.za;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var AttributesJsFn = kotlin_io_ktor_ktor_utils.$_$.o;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.n;
  var AutoCloseable = kotlin_kotlin.$_$.jf;
  var isInterface = kotlin_kotlin.$_$.mb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var initMetadataForClass = kotlin_kotlin.$_$.xa;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m3;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.k1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.g2;
  var arrayOf = kotlin_kotlin.$_$.ng;
  var createKType = kotlin_kotlin.$_$.oc;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ya;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.m;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.qa;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.k9;
  var IllegalStateException = kotlin_kotlin.$_$.uf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.l4;
  var captureStack = kotlin_kotlin.$_$.ga;
  var defineProp = kotlin_kotlin.$_$.pa;
  var UnsupportedOperationException = kotlin_kotlin.$_$.lg;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.y4;
  var trimIndent = kotlin_kotlin.$_$.cf;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.q1;
  var fromInt = kotlin_kotlin.$_$.r9;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.j1;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.j;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.m4;
  var initMetadataForInterface = kotlin_kotlin.$_$.bb;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yg;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var writer = kotlin_io_ktor_ktor_io.$_$.v1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.w;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.v;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.c;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.t;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.u;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.r;
  var ContentWrapper = kotlin_io_ktor_ktor_http.$_$.s;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.m1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j4;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.x;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var emptySet = kotlin_kotlin.$_$.q6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d3;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.j1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.r3;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var getKClass = kotlin_kotlin.$_$.qc;
  var getStarKTypeProjection = kotlin_kotlin.$_$.rc;
  var ioDispatcher = kotlin_io_ktor_ktor_io.$_$.s1;
  var SilentSupervisor = kotlin_io_ktor_ktor_utils.$_$.q;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var lazy = kotlin_kotlin.$_$.xg;
  var KProperty1 = kotlin_kotlin.$_$.vc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ua;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var KtMutableMap = kotlin_kotlin.$_$.o5;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.mc;
  var setOf = kotlin_kotlin.$_$.v7;
  var get = kotlin_kotlin.$_$.c9;
  var fold = kotlin_kotlin.$_$.b9;
  var minusKey = kotlin_kotlin.$_$.d9;
  var plus = kotlin_kotlin.$_$.f9;
  var Element = kotlin_kotlin.$_$.e9;
  var joinToString = kotlin_kotlin.$_$.a7;
  var setOf_0 = kotlin_kotlin.$_$.w7;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.j;
  var isSuspendFunction = kotlin_kotlin.$_$.pb;
  var initMetadataForObject = kotlin_kotlin.$_$.db;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.p;
  var Unit = kotlin_kotlin.$_$.kg;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var toLong = kotlin_kotlin.$_$.ve;
  var contentType = kotlin_io_ktor_ktor_http.$_$.r1;
  var isByteArray = kotlin_kotlin.$_$.gb;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.c1;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.e;
  var rethrowCloseCauseIfNeeded = kotlin_io_ktor_ktor_io.$_$.u1;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.c;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var CIOMultipartDataBase = kotlin_io_ktor_ktor_http_cio.$_$.a;
  var MultiPartData = kotlin_io_ktor_ktor_http.$_$.p;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.o1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.f1;
  var invokeOnCompletion = kotlin_io_ktor_ktor_io.$_$.r1;
  var attachWriterJob = kotlin_io_ktor_ktor_io.$_$.n1;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.m;
  var Source = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.h;
  var readText = kotlin_io_ktor_ktor_io.$_$.t1;
  var toInt = kotlin_kotlin.$_$.te;
  var reversed = kotlin_kotlin.$_$.u7;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.p;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o3;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var toList = kotlin_kotlin.$_$.c8;
  var sortedWith = kotlin_kotlin.$_$.y7;
  var Collection = kotlin_kotlin.$_$.d5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.y3;
  var charSequenceLength = kotlin_kotlin.$_$.la;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var roundToInt = kotlin_kotlin.$_$.bc;
  var firstOrNull = kotlin_kotlin.$_$.t6;
  var FunctionAdapter = kotlin_kotlin.$_$.da;
  var Comparator = kotlin_kotlin.$_$.nf;
  var hashCode = kotlin_kotlin.$_$.wa;
  var compareValues = kotlin_kotlin.$_$.l8;
  var charset = kotlin_io_ktor_ktor_http.$_$.p1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.d2;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.o1;
  var readText_0 = kotlin_io_ktor_ktor_io.$_$.y;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.l;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.n1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.c2;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.w1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.m1;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.j;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var KFunctionImpl = kotlin_kotlin.$_$.lc;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.ab;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var Default_getInstance = kotlin_kotlin.$_$.f2;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var toLongOrNull = kotlin_kotlin.$_$.ue;
  var multiply = kotlin_kotlin.$_$.v9;
  var toNumber = kotlin_kotlin.$_$.ca;
  var numberToLong = kotlin_kotlin.$_$.x9;
  var add = kotlin_kotlin.$_$.m9;
  var Companion_instance = kotlin_kotlin.$_$.n2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.qg;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.q;
  var toString_0 = kotlin_kotlin.$_$.bh;
  var trimMargin = kotlin_kotlin.$_$.df;
  var getBigIntHashCode = kotlin_kotlin.$_$.sa;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.x1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.i2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.u2;
  var toDuration = kotlin_kotlin.$_$.hf;
  var delay_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.h;
  var KProperty0 = kotlin_kotlin.$_$.uc;
  var createKTypeParameter = kotlin_kotlin.$_$.nc;
  var NullBody = kotlin_io_ktor_ktor_http.$_$.q;
  var WebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.o;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.k;
  var generateNonce = kotlin_io_ktor_ktor_utils.$_$.y;
  var Default_getInstance_0 = kotlin_kotlin.$_$.x1;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.e1;
  var emptyList = kotlin_kotlin.$_$.o6;
  var addAll = kotlin_kotlin.$_$.r5;
  var parseWebSocketExtensions = kotlin_io_ktor_ktor_websockets.$_$.q;
  var WebSocketExtensionsConfig = kotlin_io_ktor_ktor_websockets.$_$.m;
  var WebSocketChannelsConfig = kotlin_io_ktor_ktor_websockets.$_$.l;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_websockets.$_$.b;
  var DefaultWebSocketSession_0 = kotlin_io_ktor_ktor_websockets.$_$.j;
  var IllegalStateException_init_$Init$_1 = kotlin_kotlin.$_$.o4;
  var KtList = kotlin_kotlin.$_$.i5;
  var WebSocketExtension = kotlin_io_ktor_ktor_websockets.$_$.n;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.i1;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.i1;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.b2;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.x;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.a1;
  var set = kotlin_io_ktor_ktor_http.$_$.z1;
  var GMTDate = kotlin_io_ktor_ktor_utils.$_$.d;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.k;
  var formUrlEncode = kotlin_io_ktor_ktor_http.$_$.t1;
  var toByteArray_0 = kotlin_io_ktor_ktor_io.$_$.c1;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d1;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.n;
  var copyTo_0 = kotlin_io_ktor_ktor_io.$_$.f;
  var closeFinally = kotlin_kotlin.$_$.og;
  var close = kotlin_io_ktor_ktor_io.$_$.p1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.c3;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var build = kotlin_io_ktor_ktor_io.$_$.w;
  var BinaryChannelItem = kotlin_io_ktor_ktor_http.$_$.y;
  var FormItem = kotlin_io_ktor_ktor_http.$_$.b1;
  var BinaryItem = kotlin_io_ktor_ktor_http.$_$.z;
  var FileItem = kotlin_io_ktor_ktor_http.$_$.a1;
  var toString_1 = kotlin_kotlin.$_$.we;
  var take = kotlin_kotlin.$_$.ne;
  var writePacket = kotlin_io_ktor_ktor_io.$_$.o;
  var Companion_getInstance_5 = kotlin_io_ktor_ktor_http.$_$.h;
  var get_remaining = kotlin_io_ktor_ktor_io.$_$.z;
  var isNumber = kotlin_kotlin.$_$.nb;
  var getStringHashCode = kotlin_kotlin.$_$.va;
  var quote = kotlin_io_ktor_ktor_http.$_$.y1;
  var isQuoted = kotlin_io_ktor_ktor_http.$_$.v1;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.v;
  var decode = kotlin_io_ktor_ktor_io.$_$.q;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.f1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.g;
  var KtMutableList = kotlin_kotlin.$_$.m5;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_http.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var equals_0 = kotlin_kotlin.$_$.ld;
  var flatten = kotlin_kotlin.$_$.v6;
  var copyToArray = kotlin_kotlin.$_$.l6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CancellationException_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var headersOf = kotlin_io_ktor_ktor_http.$_$.u1;
  var intercepted = kotlin_kotlin.$_$.r8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var listOf = kotlin_kotlin.$_$.i7;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.u3;
  var Error_init_$Create$ = kotlin_kotlin.$_$.a4;
  var Companion_getInstance_7 = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.c;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.h;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.f;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.i;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Codes_NORMAL_getInstance = kotlin_io_ktor_ktor_websockets.$_$.d;
  var decodeToString = kotlin_kotlin.$_$.gd;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var from = kotlin_io_ktor_ktor_websockets.$_$.p;
  var send = kotlin_io_ktor_ktor_websockets.$_$.e;
  var toTypedArray = kotlin_kotlin.$_$.j8;
  var get_supportsRequestBody = kotlin_io_ktor_ktor_http.$_$.a2;
  var isEmpty = kotlin_io_ktor_ktor_http.$_$.d1;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(HttpClient$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClient$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpClient, 'HttpClient', VOID, VOID, [CoroutineScope, AutoCloseable], [1]);
  initMetadataForClass(HttpClientConfig, 'HttpClientConfig', HttpClientConfig);
  initMetadataForClass(HttpClientCall, 'HttpClientCall', VOID, VOID, [CoroutineScope], [0, 1]);
  initMetadataForClass(DelegatedCall, 'DelegatedCall', VOID, HttpClientCall, VOID, [0, 1]);
  function get_coroutineContext() {
    return this.s3p().l1k();
  }
  initMetadataForInterface(HttpRequest_0, 'HttpRequest', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedRequest, 'DelegatedRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(HttpResponse, 'HttpResponse', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedResponse, 'DelegatedResponse', VOID, HttpResponse);
  initMetadataForCompanion(Companion);
  initMetadataForCoroutine($bodyNullableCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DoubleReceiveException, 'DoubleReceiveException', VOID, IllegalStateException);
  initMetadataForClass(NoTransformationFoundException, 'NoTransformationFoundException', VOID, UnsupportedOperationException);
  initMetadataForClass(SavedHttpCall, 'SavedHttpCall', VOID, HttpClientCall, VOID, [0, 1]);
  initMetadataForClass(SavedHttpRequest, 'SavedHttpRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(SavedHttpResponse, 'SavedHttpResponse', VOID, HttpResponse);
  initMetadataForCoroutine($saveCOROUTINE$, CoroutineImpl);
  initMetadataForClass(UnsupportedContentTypeException, 'UnsupportedContentTypeException', VOID, IllegalStateException);
  initMetadataForInterface(ProgressListener, 'ProgressListener', VOID, VOID, VOID, [2]);
  initMetadataForLambda(ObservableContent$getContent$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ObservableContent, 'ObservableContent', VOID, ReadChannelContent);
  initMetadataForLambda(HttpClientEngine$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClientEngine$executeWithinCallContext$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($executeWithinCallContextCOROUTINE$, CoroutineImpl);
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().n3o_1;
    client.z3l_1.a2q(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  initMetadataForInterface(HttpClientEngine, 'HttpClientEngine', VOID, VOID, [CoroutineScope, AutoCloseable], [1]);
  initMetadataForClass(HttpClientEngineBase, 'HttpClientEngineBase', VOID, VOID, [HttpClientEngine], [1]);
  initMetadataForClass(ClientEngineClosedException, 'ClientEngineClosedException', ClientEngineClosedException, IllegalStateException);
  initMetadataForInterface(HttpClientEngineCapability, 'HttpClientEngineCapability');
  initMetadataForClass(HttpClientEngineConfig, 'HttpClientEngineConfig', HttpClientEngineConfig);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(KtorCallContextElement, 'KtorCallContextElement', VOID, VOID, [Element]);
  initMetadataForLambda(AfterRenderHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(AfterRenderHook, 'AfterRenderHook');
  initMetadataForLambda(AfterReceiveHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(AfterReceiveHook, 'AfterReceiveHook');
  initMetadataForLambda(BodyProgress$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(BodyProgress$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ResponseException, 'ResponseException', VOID, IllegalStateException);
  initMetadataForClass(RedirectResponseException, 'RedirectResponseException', VOID, ResponseException);
  initMetadataForClass(ClientRequestException, 'ClientRequestException', VOID, ResponseException);
  initMetadataForClass(ServerResponseException, 'ServerResponseException', VOID, ResponseException);
  initMetadataForLambda(addDefaultResponseValidation$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(defaultTransformers$1$content$1, VOID, VOID, ByteArrayContent);
  initMetadataForClass(defaultTransformers$1$content$2, VOID, VOID, ReadChannelContent);
  initMetadataForLambda(defaultTransformers$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(defaultTransformers$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(defaultTransformers$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HttpCallValidatorConfig, 'HttpCallValidatorConfig', HttpCallValidatorConfig);
  initMetadataForClass(ExceptionHandlerWrapper, 'ExceptionHandlerWrapper');
  initMetadataForClass(RequestExceptionHandlerWrapper, 'RequestExceptionHandlerWrapper');
  initMetadataForLambda(RequestError$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RequestError, 'RequestError');
  initMetadataForLambda(ReceiveError$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(ReceiveError, 'ReceiveError');
  initMetadataForLambda(HttpCallValidator$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_3, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_5, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($invoke$validateResponseCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($invoke$processExceptionCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpRequest$1, VOID, VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(HttpPlainTextConfig, 'HttpPlainTextConfig', HttpPlainTextConfig);
  initMetadataForLambda(RenderRequestHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RenderRequestHook, 'RenderRequestHook');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForLambda(HttpPlainText$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpPlainText$lambda$slambda_1, CoroutineImpl, VOID, [4]);
  initMetadataForClass(HttpRedirectConfig, 'HttpRedirectConfig', HttpRedirectConfig);
  initMetadataForLambda(HttpRedirect$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($invoke$handleCallCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($invokeCOROUTINE$, CoroutineImpl);
  initMetadataForFunctionReference(PipelineContext$proceed$ref, KFunctionImpl, VOID, [0]);
  initMetadataForLambda(SetupRequestContext$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(SetupRequestContext, 'SetupRequestContext');
  initMetadataForLambda(HttpRequestLifecycle$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HttpRetryEventData, 'HttpRetryEventData');
  initMetadataForLambda(HttpRequestRetryConfig$delay$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(HttpRequestRetryConfig, 'HttpRequestRetryConfig', HttpRequestRetryConfig);
  initMetadataForClass(HttpRetryShouldRetryContext, 'HttpRetryShouldRetryContext');
  initMetadataForClass(HttpRetryDelayContext, 'HttpRetryDelayContext');
  initMetadataForClass(HttpRetryModifyRequestContext, 'HttpRetryModifyRequestContext');
  initMetadataForLambda(HttpRequestRetry$lambda$slambda, CoroutineImpl, VOID, [3]);
  initMetadataForLambda(HttpRequestRetry$lambda$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($throwOnInvalidResponseBodyCOROUTINE$, CoroutineImpl);
  initMetadataForLambda(HttpSend$Plugin$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(Config, 'Config', Config);
  initMetadataForObject(Plugin, 'Plugin');
  initMetadataForInterface(Sender, 'Sender', VOID, VOID, VOID, [1]);
  initMetadataForClass(InterceptedSender, 'InterceptedSender', VOID, VOID, [Sender], [1]);
  initMetadataForClass(DefaultSender, 'DefaultSender', VOID, VOID, [Sender], [1]);
  initMetadataForClass(HttpSend, 'HttpSend');
  initMetadataForClass(SendCountExceedException, 'SendCountExceedException', VOID, IllegalStateException);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(HttpTimeoutConfig, 'HttpTimeoutConfig', HttpTimeoutConfig_init_$Create$);
  initMetadataForObject(HttpTimeoutCapability, 'HttpTimeoutCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(HttpRequestTimeoutException, 'HttpRequestTimeoutException', VOID, IOException, [CopyableThrowable]);
  initMetadataForLambda(HttpTimeout$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(applyRequestTimeout$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SaveBodyPluginConfig, 'SaveBodyPluginConfig', SaveBodyPluginConfig);
  initMetadataForLambda(SaveBody$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HookHandler, 'HookHandler');
  initMetadataForClass(ClientPluginBuilder, 'ClientPluginBuilder');
  initMetadataForClass(ClientPluginInstance, 'ClientPluginInstance', VOID, VOID, [AutoCloseable]);
  initMetadataForLambda(SetupRequest$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(SetupRequest, 'SetupRequest');
  initMetadataForClass(Sender_0, 'Sender', VOID, VOID, [CoroutineScope], [1]);
  initMetadataForLambda(Send$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(Send, 'Send');
  initMetadataForClass(ClientPluginImpl, 'ClientPluginImpl');
  initMetadataForClass(TransformResponseBodyContext, 'TransformResponseBodyContext');
  initMetadataForClass(OnRequestContext, 'OnRequestContext');
  initMetadataForLambda(RequestHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RequestHook, 'RequestHook');
  initMetadataForLambda(TransformResponseBodyHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(TransformResponseBodyHook, 'TransformResponseBodyHook');
  initMetadataForObject(SSECapability, 'SSECapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(SSEClientContent, 'SSEClientContent', VOID, ContentWrapper);
  initMetadataForClass(DefaultClientWebSocketSession, 'DefaultClientWebSocketSession', VOID, VOID, [WebSocketSession, DefaultWebSocketSession], [1, 0]);
  initMetadataForClass(DelegatingClientWebSocketSession, 'DelegatingClientWebSocketSession', VOID, VOID, [WebSocketSession], [1, 0]);
  initMetadataForClass(ClientUpgradeContent, 'ClientUpgradeContent', VOID, NoContent, VOID, [1]);
  initMetadataForClass(WebSocketContent, 'WebSocketContent', WebSocketContent, ClientUpgradeContent, VOID, [1]);
  initMetadataForLambda(WebSockets$Plugin$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(WebSockets$Plugin$install$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForClass(Config_0, 'Config', Config_0);
  initMetadataForObject(Plugin_0, 'Plugin');
  initMetadataForClass(WebSockets, 'WebSockets');
  initMetadataForObject(WebSocketExtensionsCapability, 'WebSocketExtensionsCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForObject(WebSocketCapability, 'WebSocketCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(WebSocketException, 'WebSocketException', VOID, IllegalStateException);
  initMetadataForClass(DefaultHttpRequest, 'DefaultHttpRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(HttpRequestBuilder, 'HttpRequestBuilder', HttpRequestBuilder);
  initMetadataForClass(HttpRequestData, 'HttpRequestData');
  initMetadataForClass(HttpResponseData, 'HttpResponseData');
  initMetadataForInterface(ResponseAdapter, 'ResponseAdapter');
  initMetadataForObject(Phases, 'Phases');
  initMetadataForClass(HttpRequestPipeline, 'HttpRequestPipeline', HttpRequestPipeline, Pipeline, VOID, [2]);
  initMetadataForObject(Phases_0, 'Phases');
  initMetadataForClass(HttpSendPipeline, 'HttpSendPipeline', HttpSendPipeline, Pipeline, VOID, [2]);
  initMetadataForClass(FormDataContent, 'FormDataContent', VOID, ByteArrayContent);
  initMetadataForCoroutine($writeToCOROUTINE$, CoroutineImpl);
  initMetadataForClass(MultiPartFormDataContent, 'MultiPartFormDataContent', VOID, WriteChannelContent, VOID, [1]);
  initMetadataForClass(PreparedPart, 'PreparedPart');
  initMetadataForClass(InputPart, 'InputPart', VOID, PreparedPart);
  initMetadataForClass(ChannelPart, 'ChannelPart', VOID, PreparedPart);
  initMetadataForClass(FormBuilder, 'FormBuilder');
  initMetadataForClass(FormPart, 'FormPart');
  initMetadataForClass(InputProvider, 'InputProvider');
  initMetadataForClass(ChannelProvider, 'ChannelProvider');
  initMetadataForClass(DefaultHttpResponse, 'DefaultHttpResponse', VOID, HttpResponse);
  initMetadataForCoroutine($bodyAsTextCOROUTINE$, CoroutineImpl);
  initMetadataForObject(Phases_1, 'Phases');
  initMetadataForClass(HttpResponsePipeline, 'HttpResponsePipeline', HttpResponsePipeline, Pipeline, VOID, [2]);
  initMetadataForObject(Phases_2, 'Phases');
  initMetadataForClass(HttpReceivePipeline, 'HttpReceivePipeline', HttpReceivePipeline, Pipeline, VOID, [2]);
  initMetadataForClass(HttpResponseContainer, 'HttpResponseContainer');
  initMetadataForCoroutine($fetchResponseCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($cleanupCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpStatement, 'HttpStatement', VOID, VOID, VOID, [1, 0, 2]);
  initMetadataForLambda(observable$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(HttpResponseReceiveFail, 'HttpResponseReceiveFail');
  initMetadataForObject(EmptyContent, 'EmptyContent', VOID, NoContent);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(FetchOptions, 'FetchOptions');
  initMetadataForObject(Js, 'Js');
  initMetadataForClass(JsClientEngineConfig, 'JsClientEngineConfig', JsClientEngineConfig, HttpClientEngineConfig);
  initMetadataForClass(JsClientEngine$createWebSocket$headers_capturingHack$1);
  initMetadataForCoroutine($executeCOROUTINE$_1, CoroutineImpl);
  initMetadataForCoroutine($createWebSocketCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($executeWebSocketRequestCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsClientEngine, 'JsClientEngine', VOID, HttpClientEngineBase, VOID, [1, 2]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForLambda(channelFromStream$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0_0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForLambda(JsWebSocketSession$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JsWebSocketSession, 'JsWebSocketSession', VOID, VOID, [DefaultWebSocketSession], [0, 1]);
  initMetadataForLambda(getBodyBytes$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($toRawCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getBodyBytesCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Node, 'Node');
  initMetadataForClass(engines$iterator$1);
  initMetadataForObject(engines, 'engines');
  initMetadataForClass(ConnectTimeoutException, 'ConnectTimeoutException', VOID, IOException);
  initMetadataForClass(InterruptedIOException, 'InterruptedIOException', VOID, IOException);
  initMetadataForClass(SocketTimeoutException, 'SocketTimeoutException', VOID, InterruptedIOException);
  initMetadataForObject(ProxyBuilder, 'ProxyBuilder');
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.t3l_1 = manageEngine;
    if ($this.t3l_1) {
      if (engine instanceof HttpClientEngineBase) {
        engine.h3m_1.atomicfu$incrementAndGet();
      }
      var tmp = ensureNotNull($this.w3l_1.c9(Key_instance));
      tmp.n1l(HttpClient$_init_$lambda_36nm6w(engine));
    }
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, objectCreate(protoOf(HttpClient)));
  }
  function HttpClient$_init_$lambda_36nm6w($engine) {
    return function (cause) {
      var tmp;
      if (!($engine instanceof HttpClientEngineBase)) {
        tmp = true;
      } else {
        tmp = $engine.h3m_1.atomicfu$decrementAndGet() <= 0;
      }
      var shouldClose = tmp;
      var tmp_0;
      if (shouldClose) {
        var tmp_1;
        if (cause == null) {
          $engine.f4();
          tmp_1 = Unit_instance;
        } else {
          var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
          cancel($engine, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Client scope is canceled', cause) : tmp0_elvis_lhs);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
      return Unit_instance;
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.s3m_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda).v3m = function ($this$intercept, call, $completion) {
    var tmp = this.w3m($this$intercept, call, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpClient$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3m(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            var tmp_0 = this.u3m_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.u3m_1) + '(' + toString(getKClassFromExpression(this.u3m_1)) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.p8_1 = 1;
            suspendResult = this.s3m_1.a3m_1.v2p(Unit_instance, this.u3m_1.c3n(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            this.u3m_1.d3n(response);
            this.p8_1 = 2;
            suspendResult = this.t3m_1.a2p(this.u3m_1, this);
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
  protoOf(HttpClient$slambda).w3m = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.s3m_1, completion);
    i.t3m_1 = $this$intercept;
    i.u3m_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, call, $completion) {
      return i.v3m($this$intercept, call, $completion);
    }, 2);
  }
  function HttpClient$lambda($this$install) {
    defaultTransformers($this$install);
    return Unit_instance;
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.m3n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda_1).q3n = function ($this$intercept, it, $completion) {
    var tmp = this.r3n($this$intercept, it, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpClient$slambda_1).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3n(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda_1).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            this.q8_1 = 2;
            this.p8_1 = 1;
            suspendResult = this.n3n_1.b2p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p3n_1 = suspendResult;
            this.q8_1 = 3;
            this.p8_1 = 4;
            continue $sm;
          case 2:
            this.q8_1 = 3;
            var tmp_0 = this.s8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.s8_1;
              var tmp_1 = this;
              this.m3n_1.d3m_1.z36(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.n3n_1.w2p_1.c3n(), cause));
              throw cause;
            } else {
              throw this.s8_1;
            }

          case 3:
            throw this.s8_1;
          case 4:
            this.q8_1 = 3;
            return Unit_instance;
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
  protoOf(HttpClient$slambda_1).r3n = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.m3n_1, completion);
    i.n3n_1 = $this$intercept;
    i.o3n_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.q3n($this$intercept, it, $completion);
    }, 2);
  }
  function $executeCOROUTINE$(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a3o_1 = _this__u8e3s4;
    this.b3o_1 = builder;
  }
  protoOf($executeCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            this.a3o_1.d3m_1.z36(get_HttpRequestCreated(), this.b3o_1);
            this.p8_1 = 1;
            suspendResult = this.a3o_1.x3l_1.v2p(this.b3o_1, this.b3o_1.f3o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  function HttpClient(engine, userConfig) {
    userConfig = userConfig === VOID ? new HttpClientConfig() : userConfig;
    this.r3l_1 = engine;
    this.s3l_1 = userConfig;
    this.t3l_1 = false;
    this.u3l_1 = atomic$boolean$1(false);
    this.v3l_1 = Job(this.r3l_1.l1k().c9(Key_instance));
    this.w3l_1 = this.r3l_1.l1k().ph(this.v3l_1);
    this.x3l_1 = new HttpRequestPipeline();
    this.y3l_1 = new HttpResponsePipeline();
    this.z3l_1 = new HttpSendPipeline();
    this.a3m_1 = new HttpReceivePipeline();
    this.b3m_1 = AttributesJsFn(true);
    this.c3m_1 = this.r3l_1.i3o();
    this.d3m_1 = new Events();
    this.e3m_1 = new HttpClientConfig();
    this.r3l_1.j3o(this);
    var tmp = Phases_getInstance_0().o3o_1;
    this.z3l_1.a2q(tmp, HttpClient$slambda_0(this, null));
    // Inline function 'kotlin.with' call
    var $this$with = this.s3l_1;
    this.e3m_1.x3o(get_HttpRequestLifecycle());
    this.e3m_1.x3o(get_BodyProgress());
    this.e3m_1.x3o(get_SaveBody());
    if ($this$with.u3o_1) {
      this.e3m_1.y3o('DefaultTransformers', HttpClient$lambda);
    }
    this.e3m_1.x3o(Plugin_getInstance());
    this.e3m_1.x3o(get_HttpCallValidator());
    if ($this$with.t3o_1) {
      this.e3m_1.x3o(get_HttpRedirect());
    }
    this.e3m_1.z3o($this$with);
    if ($this$with.u3o_1) {
      this.e3m_1.x3o(get_HttpPlainText());
    }
    addDefaultResponseValidation(this.e3m_1);
    this.e3m_1.j3o(this);
    var tmp_0 = Phases_getInstance_1().a3p_1;
    this.y3l_1.a2q(tmp_0, HttpClient$slambda_2(this, null));
  }
  protoOf(HttpClient).l1k = function () {
    return this.w3l_1;
  };
  protoOf(HttpClient).f3p = function (builder, $completion) {
    var tmp = new $executeCOROUTINE$(this, builder, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpClient).f4 = function () {
    var success = this.u3l_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_instance;
    var installedFeatures = this.b3m_1.c2k(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = installedFeatures.j2k().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var plugin = installedFeatures.c2k(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, AutoCloseable)) {
        plugin.f4();
      }
    }
    this.v3l_1.e1r();
  };
  protoOf(HttpClient).toString = function () {
    return 'HttpClient[' + toString(this.r3l_1) + ']';
  };
  function HttpClient_0(engineFactory, block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_0;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HttpClientConfig();
    block(this_0);
    var config = this_0;
    var engine = engineFactory.g3p(config.s3o_1);
    return HttpClient_init_$Create$(engine, config, true);
  }
  function HttpClient$lambda_0(_this__u8e3s4) {
    return Unit_instance;
  }
  function installPlugin($this, plugin) {
    if ($this.p3o_1.q2(plugin.m1()))
      return Unit_instance;
    var tmp0 = $this.p3o_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$installPlugin$lambda(plugin);
    tmp0.v2(tmp2, value);
  }
  function HttpClientConfig$engineConfig$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function HttpClientConfig$engine$lambda($oldConfig, $block) {
    return function (_this__u8e3s4) {
      $oldConfig(_this__u8e3s4);
      $block(_this__u8e3s4);
      return Unit_instance;
    };
  }
  function HttpClientConfig$install$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function (_this__u8e3s4) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(_this__u8e3s4);
      $configure(!(_this__u8e3s4 == null) ? _this__u8e3s4 : THROW_CCE());
      return Unit_instance;
    };
  }
  function HttpClientConfig$installPlugin$lambda$lambda() {
    return AttributesJsFn(true);
  }
  function HttpClientConfig$installPlugin$lambda($plugin) {
    return function (scope) {
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.b3m_1.i2k(tmp, HttpClientConfig$installPlugin$lambda$lambda);
      var config = ensureNotNull(scope.e3m_1.q3o_1.s2($plugin.m1()));
      var pluginData = $plugin.h3p(config);
      $plugin.i3p(pluginData, scope);
      attributes.f2k($plugin.m1(), pluginData);
      return Unit_instance;
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.p3o_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.q3o_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.r3o_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    tmp_2.s3o_1 = HttpClientConfig$engineConfig$lambda;
    this.t3o_1 = true;
    this.u3o_1 = true;
    this.v3o_1 = false;
    this.w3o_1 = PlatformUtils_getInstance().e2m_1;
  }
  protoOf(HttpClientConfig).j3p = function (block) {
    var oldConfig = this.s3o_1;
    var tmp = this;
    tmp.s3o_1 = HttpClientConfig$engine$lambda(oldConfig, block);
  };
  protoOf(HttpClientConfig).k3p = function (plugin, configure) {
    var previousConfigBlock = this.q3o_1.s2(plugin.m1());
    var tmp0 = this.q3o_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$install$lambda_0(previousConfigBlock, configure);
    tmp0.v2(tmp2, value);
    installPlugin(this, plugin);
  };
  protoOf(HttpClientConfig).x3o = function (plugin, configure, $super) {
    var tmp;
    if (configure === VOID) {
      tmp = HttpClientConfig$install$lambda;
    } else {
      tmp = configure;
    }
    configure = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.k3p(plugin, configure);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.k3p.call(this, plugin, configure);
    }
    return tmp_0;
  };
  protoOf(HttpClientConfig).y3o = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    this.r3o_1.v2(key, block);
  };
  protoOf(HttpClientConfig).j3o = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.p3o_1.u2().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.apply' call
      element(client);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.r3o_1.u2().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.apply' call
      element_0(client);
    }
  };
  protoOf(HttpClientConfig).z3o = function (other) {
    this.t3o_1 = other.t3o_1;
    this.u3o_1 = other.u3o_1;
    this.v3o_1 = other.v3o_1;
    var tmp0 = this.p3o_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map = other.p3o_1;
    tmp0.x2(map);
    var tmp0_0 = this.q3o_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_0 = other.q3o_1;
    tmp0_0.x2(map_0);
    var tmp0_1 = this.r3o_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_1 = other.r3o_1;
    tmp0_1.x2(map_1);
  };
  function replaceResponse(_this__u8e3s4, headers, content) {
    headers = headers === VOID ? _this__u8e3s4.c3n().a2z() : headers;
    return new DelegatedCall(_this__u8e3s4.x3m_1, _this__u8e3s4, content, headers);
  }
  function DelegatedCall(client, originCall, responseContent, responseHeaders) {
    responseHeaders = responseHeaders === VOID ? originCall.c3n().a2z() : responseHeaders;
    HttpClientCall.call(this, client);
    this.z3m_1 = new DelegatedRequest(this, originCall.l3p());
    this.a3n_1 = new DelegatedResponse(this, originCall.c3n(), responseContent, responseHeaders);
  }
  function DelegatedRequest(call, origin) {
    this.q3p_1 = origin;
    this.r3p_1 = call;
  }
  protoOf(DelegatedRequest).s3p = function () {
    return this.r3p_1;
  };
  protoOf(DelegatedRequest).l1k = function () {
    return this.q3p_1.l1k();
  };
  protoOf(DelegatedRequest).t3p = function () {
    return this.q3p_1.t3p();
  };
  protoOf(DelegatedRequest).u3p = function () {
    return this.q3p_1.u3p();
  };
  protoOf(DelegatedRequest).m3p = function () {
    return this.q3p_1.m3p();
  };
  protoOf(DelegatedRequest).u18 = function () {
    return this.q3p_1.u18();
  };
  protoOf(DelegatedRequest).a2z = function () {
    return this.q3p_1.a2z();
  };
  function DelegatedResponse(call, origin, content, headers) {
    headers = headers === VOID ? origin.a2z() : headers;
    HttpResponse.call(this);
    this.v3p_1 = call;
    this.w3p_1 = origin;
    this.x3p_1 = content;
    this.y3p_1 = headers;
    this.z3p_1 = this.w3p_1.l1k();
  }
  protoOf(DelegatedResponse).s3p = function () {
    return this.v3p_1;
  };
  protoOf(DelegatedResponse).a2z = function () {
    return this.y3p_1;
  };
  protoOf(DelegatedResponse).a3q = function () {
    return this.x3p_1(this.w3p_1);
  };
  protoOf(DelegatedResponse).l1k = function () {
    return this.z3p_1;
  };
  protoOf(DelegatedResponse).b3q = function () {
    return this.w3p_1.b3q();
  };
  protoOf(DelegatedResponse).c3q = function () {
    return this.w3p_1.c3q();
  };
  protoOf(DelegatedResponse).d3q = function () {
    return this.w3p_1.d3q();
  };
  protoOf(DelegatedResponse).e3q = function () {
    return this.w3p_1.e3q();
  };
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.z3m_1 = new DefaultHttpRequest($this, requestData);
    $this.a3n_1 = new DefaultHttpResponse($this, responseData);
    $this.m3p().h2k(Companion_getInstance_8().f3q_1);
    var tmp = responseData.k3q_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.m3p().f2k(Companion_getInstance_8().f3q_1, responseData.k3q_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, objectCreate(protoOf(HttpClientCall)));
  }
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'CustomResponse';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = PrimitiveClasses_getInstance().lb();
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(PrimitiveClasses_getInstance().lb(), arrayOf([]), false);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_2 = null;
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.f3q_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $bodyNullableCOROUTINE$(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3q_1 = _this__u8e3s4;
    this.w3q_1 = info;
  }
  protoOf($bodyNullableCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 5;
            this.q8_1 = 4;
            if (instanceOf(this.v3q_1.c3n(), this.w3q_1.n2q_1))
              return this.v3q_1.c3n();
            if (!this.v3q_1.n3p() && !get_isSaved(this.v3q_1.c3n()) && !this.v3q_1.y3m_1.atomicfu$compareAndSet(false, true)) {
              throw new DoubleReceiveException(this.v3q_1);
            }

            var tmp0_elvis_lhs = this.v3q_1.m3p().d2k(Companion_getInstance_8().f3q_1);
            if (tmp0_elvis_lhs == null) {
              this.p8_1 = 1;
              suspendResult = this.v3q_1.o3p(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.x3q_1 = tmp0_elvis_lhs;
              this.p8_1 = 2;
              continue $sm;
            }

          case 1:
            this.x3q_1 = suspendResult;
            this.p8_1 = 2;
            continue $sm;
          case 2:
            var responseData = this.x3q_1;
            var subject = new HttpResponseContainer(this.w3q_1, responseData);
            this.p8_1 = 3;
            suspendResult = this.v3q_1.x3m_1.y3l_1.v2p(this.v3q_1, subject, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var this_0 = suspendResult.z3q_1;
            var tmp_0;
            if (!equals(this_0, NullBody_instance)) {
              tmp_0 = this_0;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) && !instanceOf(result, this.w3q_1.n2q_1)) {
              var from = getKClassFromExpression(result);
              var to = this.w3q_1.n2q_1;
              throw new NoTransformationFoundException(this.v3q_1.c3n(), from, to);
            }

            return result;
          case 4:
            this.q8_1 = 5;
            var tmp_1 = this.s8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.s8_1;
              cancel_0(this.v3q_1.c3n(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.s8_1;
            }

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
  function HttpClientCall(client) {
    Companion_getInstance_8();
    this.x3m_1 = client;
    this.y3m_1 = atomic$boolean$1(false);
    this.b3n_1 = false;
  }
  protoOf(HttpClientCall).l1k = function () {
    return this.c3n().l1k();
  };
  protoOf(HttpClientCall).m3p = function () {
    return this.l3p().m3p();
  };
  protoOf(HttpClientCall).l3p = function () {
    var tmp = this.z3m_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  protoOf(HttpClientCall).c3n = function () {
    var tmp = this.a3n_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  protoOf(HttpClientCall).n3p = function () {
    return this.b3n_1;
  };
  protoOf(HttpClientCall).o3p = function ($completion) {
    return this.c3n().a3q();
  };
  protoOf(HttpClientCall).p3p = function (info, $completion) {
    var tmp = new $bodyNullableCOROUTINE$(this, info, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpClientCall).toString = function () {
    return 'HttpClientCall[' + this.l3p().u3p().toString() + ', ' + this.c3n().b3q().toString() + ']';
  };
  protoOf(HttpClientCall).d3n = function (response) {
    this.a3n_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, DoubleReceiveException);
    this.a3r_1 = 'Response already received: ' + call.toString();
    delete this.message;
  }
  protoOf(DoubleReceiveException).e = function () {
    return this.a3r_1;
  };
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    captureStack(this, NoTransformationFoundException);
    this.b3r_1 = trimIndent("\n        Expected response body of the type '" + toString(to) + "' but was '" + toString(from) + "'\n        In response from `" + get_request(response).u3p().toString() + '`\n        Response status `' + response.b3q().toString() + '`\n        Response header `ContentType: ' + response.a2z().rd('Content-Type') + '` \n        Request header `Accept: ' + get_request(response).a2z().rd('Accept') + '`\n        \n        You can read how to resolve NoTransformationFoundException at FAQ: \n        https://ktor.io/docs/faq.html#no-transformation-found-exception\n    ');
    delete this.message;
  }
  protoOf(NoTransformationFoundException).e = function () {
    return this.b3r_1;
  };
  function save(_this__u8e3s4, $completion) {
    var tmp = new $saveCOROUTINE$(_this__u8e3s4, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.q3r_1 = responseBody;
    this.z3m_1 = new SavedHttpRequest(this, request);
    this.a3n_1 = new SavedHttpResponse(this, this.q3r_1, response);
    checkContentLength(contentLength(response), fromInt(this.q3r_1.length), request.t3p());
    this.r3r_1 = true;
  }
  protoOf(SavedHttpCall).n3p = function () {
    return this.r3r_1;
  };
  function SavedHttpRequest(call, origin) {
    this.s3r_1 = origin;
    this.t3r_1 = call;
  }
  protoOf(SavedHttpRequest).s3p = function () {
    return this.t3r_1;
  };
  protoOf(SavedHttpRequest).l1k = function () {
    return this.s3r_1.l1k();
  };
  protoOf(SavedHttpRequest).t3p = function () {
    return this.s3r_1.t3p();
  };
  protoOf(SavedHttpRequest).u3p = function () {
    return this.s3r_1.u3p();
  };
  protoOf(SavedHttpRequest).m3p = function () {
    return this.s3r_1.m3p();
  };
  protoOf(SavedHttpRequest).u18 = function () {
    return this.s3r_1.u18();
  };
  protoOf(SavedHttpRequest).a2z = function () {
    return this.s3r_1.a2z();
  };
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.u3r_1 = call;
    this.v3r_1 = body;
    this.w3r_1 = origin.b3q();
    this.x3r_1 = origin.c3q();
    this.y3r_1 = origin.d3q();
    this.z3r_1 = origin.e3q();
    this.a3s_1 = origin.a2z();
    this.b3s_1 = origin.l1k();
  }
  protoOf(SavedHttpResponse).s3p = function () {
    return this.u3r_1;
  };
  protoOf(SavedHttpResponse).b3q = function () {
    return this.w3r_1;
  };
  protoOf(SavedHttpResponse).c3q = function () {
    return this.x3r_1;
  };
  protoOf(SavedHttpResponse).d3q = function () {
    return this.y3r_1;
  };
  protoOf(SavedHttpResponse).e3q = function () {
    return this.z3r_1;
  };
  protoOf(SavedHttpResponse).a2z = function () {
    return this.a3s_1;
  };
  protoOf(SavedHttpResponse).l1k = function () {
    return this.b3s_1;
  };
  protoOf(SavedHttpResponse).a3q = function () {
    return ByteReadChannel_0(this.v3r_1);
  };
  function $saveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k3r_1 = _this__u8e3s4;
  }
  protoOf($saveCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            var tmp_0 = this.k3r_1;
            if (tmp_0 instanceof SavedHttpCall)
              return this.k3r_1;
            this.p8_1 = 1;
            suspendResult = readRemaining(this.k3r_1.c3n().a3q(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readByteArray(ARGUMENT);
            return new SavedHttpCall(this.k3r_1.x3m_1, this.k3r_1.l3p(), this.k3r_1.c3n(), responseBody);
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
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + toString(getKClassFromExpression(content)), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  function ProgressListener() {
  }
  function getContent($this, delegate) {
    var tmp;
    if (delegate instanceof ContentWrapper) {
      tmp = getContent($this, delegate.s36());
    } else {
      if (delegate instanceof ByteArrayContent) {
        tmp = ByteReadChannel_0(delegate.o34());
      } else {
        if (delegate instanceof ProtocolUpgrade) {
          throw new UnsupportedContentTypeException(delegate);
        } else {
          if (delegate instanceof NoContent) {
            tmp = Companion_getInstance().z2a_1;
          } else {
            if (delegate instanceof ReadChannelContent) {
              tmp = delegate.m36();
            } else {
              if (delegate instanceof WriteChannelContent) {
                var tmp_0 = GlobalScope_instance;
                tmp = writer(tmp_0, $this.f3s_1, true, ObservableContent$getContent$slambda_0(delegate, null)).v2a_1;
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function ObservableContent$getContent$slambda($delegate, resultContinuation) {
    this.p3s_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ObservableContent$getContent$slambda).o3b = function ($this$writer, $completion) {
    var tmp = this.p3b($this$writer, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(ObservableContent$getContent$slambda).k9 = function (p1, $completion) {
    return this.o3b(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ObservableContent$getContent$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            this.p8_1 = 1;
            suspendResult = this.p3s_1.o36(this.q3s_1.w2g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ObservableContent$getContent$slambda).p3b = function ($this$writer, completion) {
    var i = new ObservableContent$getContent$slambda(this.p3s_1, completion);
    i.q3s_1 = $this$writer;
    return i;
  };
  function ObservableContent$getContent$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$getContent$slambda($delegate, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.o3b($this$writer, $completion);
    }, 1);
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.e3s_1 = delegate;
    this.f3s_1 = callContext;
    this.g3s_1 = listener;
  }
  protoOf(ObservableContent).m34 = function () {
    return this.e3s_1.m34();
  };
  protoOf(ObservableContent).n34 = function () {
    return this.e3s_1.n34();
  };
  protoOf(ObservableContent).a2z = function () {
    return this.e3s_1.a2z();
  };
  protoOf(ObservableContent).m36 = function () {
    return observable(getContent(this, this.e3s_1), this.f3s_1, this.n34(), this.g3s_1);
  };
  function get_CALL_COROUTINE() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $client.d3m_1.z36(get_HttpResponseCancelled(), $response);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.l1k().c9(Key_instance);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1k();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $completion) {
    var tmp = new $executeWithinCallContextCOROUTINE$($this, requestData, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function checkExtensions($this, requestData) {
    var _iterator__ex2g4s = requestData.h3t_1.t();
    while (_iterator__ex2g4s.u()) {
      var requestedExtension = _iterator__ex2g4s.v();
      // Inline function 'kotlin.require' call
      if (!$this.i3t().j2(requestedExtension)) {
        var message = "Engine doesn't support " + toString(requestedExtension);
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.r3t_1 = $client;
    this.s3t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$install$slambda).v3m = function ($this$intercept, content, $completion) {
    var tmp = this.w3m($this$intercept, content, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpClientEngine$install$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3m(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$install$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            var this_0 = new HttpRequestBuilder();
            this_0.w3t(this.t3t_1.w2p_1);
            var body = this.u3t_1;
            if (body == null) {
              this_0.f3o_1 = NullBody_instance;
              var tmp_0 = PrimitiveClasses_getInstance().lb();
              var tmp_1;
              try {
                tmp_1 = createKType(PrimitiveClasses_getInstance().lb(), arrayOf([]), false);
              } catch ($p) {
                var tmp_2;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_2 = null;
                } else {
                  throw $p;
                }
                tmp_1 = tmp_2;
              }
              this_0.x3t(new TypeInfo(tmp_0, tmp_1));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.f3o_1 = body;
                this_0.x3t(null);
              } else {
                this_0.f3o_1 = body;
                var tmp_3 = PrimitiveClasses_getInstance().lb();
                var tmp_4;
                try {
                  tmp_4 = createKType(PrimitiveClasses_getInstance().lb(), arrayOf([]), false);
                } catch ($p_0) {
                  var tmp_5;
                  if ($p_0 instanceof Error) {
                    var _unused_var__etf5q3_0 = $p_0;
                    tmp_5 = null;
                  } else {
                    throw $p_0;
                  }
                  tmp_4 = tmp_5;
                }
                this_0.x3t(new TypeInfo(tmp_3, tmp_4));
              }
            }

            var builder = this_0;
            this.r3t_1.d3m_1.z36(get_HttpRequestIsReadyForSending(), builder);
            var tmp_6 = this;
            var this_1 = builder.t2u();
            this_1.g3t_1.f2k(get_CLIENT_CONFIG(), this.r3t_1.e3m_1);
            tmp_6.v3t_1 = this_1;
            validateHeaders(this.v3t_1);
            checkExtensions(this.s3t_1, this.v3t_1);
            this.p8_1 = 1;
            suspendResult = executeWithinCallContext(this.s3t_1, this.v3t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var responseData = suspendResult;
            var call = HttpClientCall_init_$Create$(this.r3t_1, this.v3t_1, responseData);
            var response = call.c3n();
            this.r3t_1.d3m_1.z36(get_HttpResponseReceived(), response);
            var tmp_7 = get_job(response.l1k());
            tmp_7.n1l(HttpClientEngine$install$slambda$lambda(this.r3t_1, response));
            this.p8_1 = 2;
            suspendResult = this.t3t_1.a2p(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.s8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.q8_1 === 3) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClientEngine$install$slambda).w3m = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.r3t_1, this.s3t_1, completion);
    i.t3t_1 = $this$intercept;
    i.u3t_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.v3m($this$intercept, content, $completion);
    }, 2);
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.g3u_1 = this$0;
    this.h3u_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).j3u = function ($this$async, $completion) {
    var tmp = this.b2i($this$async, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).k9 = function (p1, $completion) {
    return this.j3u((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            if (_get_closed__iwkfs1(this.g3u_1)) {
              throw new ClientEngineClosedException();
            }

            this.p8_1 = 1;
            suspendResult = this.g3u_1.k3u(this.h3u_1, this);
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
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).b2i = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.g3u_1, this.h3u_1, completion);
    i.i3u_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    return constructCallableReference(function ($this$async, $completion) {
      return i.j3u($this$async, $completion);
    }, 1);
  }
  function $executeWithinCallContextCOROUTINE$(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z3s_1 = _this__u8e3s4;
    this.a3t_1 = requestData;
  }
  protoOf($executeWithinCallContextCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            this.p8_1 = 1;
            suspendResult = createCallContext(this.z3s_1, this.a3t_1.f3t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var callContext = suspendResult;
            var context = callContext.ph(new KtorCallContextElement(callContext));
            this.p8_1 = 2;
            suspendResult = async(this.z3s_1, context, VOID, HttpClientEngine$executeWithinCallContext$slambda_0(this.z3s_1, this.a3t_1, null)).x1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    _init_properties_HttpClientEngine_kt__h91z5h();
    var requestHeaders = request.d3t_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = requestHeaders.n2m();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (HttpHeaders_getInstance().s2y_1.j2(element)) {
        destination.b1(element);
      }
    }
    var unsafeRequestHeaders = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!unsafeRequestHeaders.r()) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $completion) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.l1k().ph(callJob).ph(get_CALL_COROUTINE());
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp0_elvis_lhs = $completion.v8().c9(Key_instance);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.p1l(true, VOID, createCallContext$lambda(callJob));
      callJob.n1l(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      if (cause == null)
        return Unit_instance;
      var tmp1_elvis_lhs = cause instanceof CancellationException ? cause : null;
      var cancellation = tmp1_elvis_lhs == null ? CancellationException_init_$Create$_0(cause.message) : tmp1_elvis_lhs;
      $callJob.u1l(cancellation);
      return Unit_instance;
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.x1n();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function _init_properties_HttpClientEngine_kt__h91z5h() {
    if (!properties_initialized_HttpClientEngine_kt_5uiebb) {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'client-config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(HttpClientConfig);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(HttpClientConfig), arrayOf([getStarKTypeProjection()]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      CLIENT_CONFIG = new AttributeKey(name, tmp$ret$1);
    }
  }
  function HttpClientEngineBase$dispatcher$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.i3o().m3u_1;
      return tmp0_elvis_lhs == null ? ioDispatcher() : tmp0_elvis_lhs;
    };
  }
  function HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v() {
    return constructCallableReference(function (p0) {
      return p0.p3u();
    }, 1, 0, 23);
  }
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor().ph(this$0.p3u()).ph(new CoroutineName(this$0.f3m_1 + '-context'));
    };
  }
  function HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr() {
    return constructCallableReference(function (p0) {
      return p0.l1k();
    }, 1, 0, 24);
  }
  function HttpClientEngineBase(engineName) {
    this.f3m_1 = engineName;
    this.g3m_1 = atomic$boolean$1(false);
    this.h3m_1 = atomic$int$1(0);
    var tmp = this;
    tmp.i3m_1 = lazy(HttpClientEngineBase$dispatcher$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.j3m_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  protoOf(HttpClientEngineBase).p3u = function () {
    var tmp0 = this.i3m_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('dispatcher', 1, tmp, HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).l1k = function () {
    var tmp0 = this.j3m_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('coroutineContext', 1, tmp, HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).f4 = function () {
    if (!this.g3m_1.atomicfu$compareAndSet(false, true))
      return Unit_instance;
    var tmp = this.l1k().c9(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.e1r();
  };
  function ClientEngineClosedException(cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$_0('Client already closed', this);
    captureStack(this, ClientEngineClosedException);
    this.q3u_1 = cause;
    delete this.cause;
  }
  protoOf(ClientEngineClosedException).f = function () {
    return this.q3u_1;
  };
  function get_ENGINE_CAPABILITIES_KEY() {
    _init_properties_HttpClientEngineCapability_kt__ifvyst();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  function HttpClientEngineCapability() {
  }
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function _init_properties_HttpClientEngineCapability_kt__ifvyst() {
    if (!properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'EngineCapabilities';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtMutableMap);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtMutableMap), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpClientEngineCapability), arrayOf([getStarKTypeProjection()]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().lb(), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      ENGINE_CAPABILITIES_KEY = new AttributeKey(name, tmp$ret$1);
      DEFAULT_CAPABILITIES = setOf(HttpTimeoutCapability_instance);
    }
  }
  function HttpClientEngineConfig() {
    this.l3u_1 = 4;
    this.m3u_1 = null;
    this.n3u_1 = false;
    this.o3u_1 = null;
  }
  function get_KTOR_DEFAULT_USER_AGENT() {
    _init_properties_Utils_kt__jo07cx();
    return KTOR_DEFAULT_USER_AGENT;
  }
  var KTOR_DEFAULT_USER_AGENT;
  function get_DATE_HEADERS() {
    _init_properties_Utils_kt__jo07cx();
    return DATE_HEADERS;
  }
  var DATE_HEADERS;
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_9() {
    return Companion_instance_1;
  }
  function KtorCallContextElement(callContext) {
    this.r3u_1 = callContext;
  }
  protoOf(KtorCallContextElement).m1 = function () {
    return Companion_instance_1;
  };
  function callContext($completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.v8();
    return ensureNotNull(tmp$ret$0.c9(Companion_instance_1)).r3u_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    _init_properties_Utils_kt__jo07cx();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.s2m(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.rd('User-Agent') == null && content.a2z().rd('User-Agent') == null;
    if (missingAgent && needUserAgent()) {
      block('User-Agent', get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.m34();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.a2z().rd('Content-Type') : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.rd('Content-Type') : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.n34();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.a2z().rd('Content-Length') : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.rd('Content-Length') : tmp5_elvis_lhs;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      block('Content-Type', type);
    }
    if (length == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      block('Content-Length', length);
    }
  }
  function needUserAgent() {
    _init_properties_Utils_kt__jo07cx();
    return !PlatformUtils_getInstance().y2l_1;
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.r2m($requestHeaders);
      $this$buildHeaders.r2m($content.a2z());
      return Unit_instance;
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if ('Content-Length' === key) {
        return Unit_instance;
      }
      var tmp_0;
      if ('Content-Type' === key) {
        return Unit_instance;
      }
      var tmp_1;
      if (get_DATE_HEADERS().j2(key)) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = values.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          $block(key, element);
        }
        tmp_1 = Unit_instance;
      } else {
        var separator = 'Cookie' === key ? '; ' : ',';
        tmp_1 = $block(key, joinToString(values, separator));
      }
      return Unit_instance;
    };
  }
  var properties_initialized_Utils_kt_xvi83j;
  function _init_properties_Utils_kt__jo07cx() {
    if (!properties_initialized_Utils_kt_xvi83j) {
      properties_initialized_Utils_kt_xvi83j = true;
      KTOR_DEFAULT_USER_AGENT = 'ktor-client';
      DATE_HEADERS = setOf_0(['Date', 'Expires', 'Last-Modified', 'If-Modified-Since', 'If-Unmodified-Since']);
    }
  }
  function get_UploadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function get_BodyProgress() {
    _init_properties_BodyProgress_kt__s0v569();
    return BodyProgress;
  }
  var BodyProgress;
  function AfterRenderHook$install$slambda($handler, resultContinuation) {
    this.a3v_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterRenderHook$install$slambda).v3m = function ($this$intercept, content, $completion) {
    var tmp = this.w3m($this$intercept, content, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(AfterRenderHook$install$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3m(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterRenderHook$install$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            var tmp_0 = this.c3v_1;
            if (!(tmp_0 instanceof OutgoingContent))
              return Unit_instance;
            this.p8_1 = 1;
            suspendResult = this.a3v_1(this.b3v_1.w2p_1, this.c3v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            var newContent = tmp_1;
            this.p8_1 = 2;
            suspendResult = this.b3v_1.a2p(newContent, this);
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
  protoOf(AfterRenderHook$install$slambda).w3m = function ($this$intercept, content, completion) {
    var i = new AfterRenderHook$install$slambda(this.a3v_1, completion);
    i.b3v_1 = $this$intercept;
    i.c3v_1 = content;
    return i;
  };
  function AfterRenderHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterRenderHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.v3m($this$intercept, content, $completion);
    }, 2);
  }
  function AfterRenderHook() {
  }
  protoOf(AfterRenderHook).d3v = function (client, handler) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    client.x3l_1.x2p(Phases_getInstance().h3v_1, observableContentPhase);
    client.x3l_1.a2q(observableContentPhase, AfterRenderHook$install$slambda_0(handler, null));
  };
  protoOf(AfterRenderHook).j3v = function (client, handler) {
    return this.d3v(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var AfterRenderHook_instance;
  function AfterRenderHook_getInstance() {
    return AfterRenderHook_instance;
  }
  function AfterReceiveHook$install$slambda($handler, resultContinuation) {
    this.s3v_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterReceiveHook$install$slambda).v3v = function ($this$intercept, response, $completion) {
    var tmp = this.w3v($this$intercept, response, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(AfterReceiveHook$install$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3v(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterReceiveHook$install$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 4;
            this.p8_1 = 1;
            suspendResult = this.s3v_1(this.u3v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var newResponse = suspendResult;
            if (!(newResponse == null)) {
              this.p8_1 = 2;
              suspendResult = this.t3v_1.a2p(newResponse, this);
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
  protoOf(AfterReceiveHook$install$slambda).w3v = function ($this$intercept, response, completion) {
    var i = new AfterReceiveHook$install$slambda(this.s3v_1, completion);
    i.t3v_1 = $this$intercept;
    i.u3v_1 = response;
    return i;
  };
  function AfterReceiveHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterReceiveHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.v3v($this$intercept, response, $completion);
    }, 2);
  }
  function AfterReceiveHook() {
  }
  protoOf(AfterReceiveHook).x3v = function (client, handler) {
    var tmp = Phases_getInstance_2().a3w_1;
    client.a3m_1.a2q(tmp, AfterReceiveHook$install$slambda_0(handler, null));
  };
  protoOf(AfterReceiveHook).j3v = function (client, handler) {
    return this.x3v(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var AfterReceiveHook_instance;
  function AfterReceiveHook_getInstance() {
    return AfterReceiveHook_instance;
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = _this__u8e3s4.s3p();
    return replaceResponse(tmp, VOID, withObservableDownload$lambda(listener)).c3n();
  }
  function BodyProgress$lambda($this$createClientPlugin) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = AfterRenderHook_instance;
    $this$createClientPlugin.g3w(tmp, BodyProgress$lambda$slambda_0(null));
    var tmp_0 = AfterReceiveHook_instance;
    $this$createClientPlugin.g3w(tmp_0, BodyProgress$lambda$slambda_2(null));
    return Unit_instance;
  }
  function BodyProgress$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda).r3w = function (request, content, $completion) {
    var tmp = this.s3w(request, content, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(BodyProgress$lambda$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.r3w(tmp, p2 instanceof OutgoingContent ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        if (tmp === 0) {
          this.q8_1 = 1;
          var tmp0_elvis_lhs = this.p3w_1.h3o_1.d2k(get_UploadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return new ObservableContent(this.q3w_1, this.p3w_1.g3o_1, listener);
        } else if (tmp === 1) {
          throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda).s3w = function (request, content, completion) {
    var i = new BodyProgress$lambda$slambda(completion);
    i.p3w_1 = request;
    i.q3w_1 = content;
    return i;
  };
  function BodyProgress$lambda$slambda_0(resultContinuation) {
    var i = new BodyProgress$lambda$slambda(resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.r3w(request, content, $completion);
    }, 2);
  }
  function BodyProgress$lambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda_1).c3x = function (response, $completion) {
    var tmp = this.d3x(response, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(BodyProgress$lambda$slambda_1).k9 = function (p1, $completion) {
    return this.c3x(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda_1).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        if (tmp === 0) {
          this.q8_1 = 1;
          var tmp0_elvis_lhs = this.b3x_1.s3p().l3p().m3p().d2k(get_DownloadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return withObservableDownload(this.b3x_1, listener);
        } else if (tmp === 1) {
          throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda_1).d3x = function (response, completion) {
    var i = new BodyProgress$lambda$slambda_1(completion);
    i.b3x_1 = response;
    return i;
  };
  function BodyProgress$lambda$slambda_2(resultContinuation) {
    var i = new BodyProgress$lambda$slambda_1(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.c3x(response, $completion);
    }, 1);
  }
  function withObservableDownload$lambda($listener) {
    return function ($this$replaceResponse) {
      return observable($this$replaceResponse.a3q(), $this$replaceResponse.l1k(), contentLength($this$replaceResponse), $listener);
    };
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function _init_properties_BodyProgress_kt__s0v569() {
    if (!properties_initialized_BodyProgress_kt_pmfrhr) {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'UploadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(ProgressListener);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      UploadProgressListenerAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'DownloadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(ProgressListener);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_4;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_4 = null;
        } else {
          throw $p_0;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$2_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$2_0);
      DownloadProgressListenerAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      BodyProgress = createClientPlugin('BodyProgress', BodyProgress$lambda);
    }
  }
  function get_ValidateMark() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return ValidateMark;
  }
  var ValidateMark;
  function get_LOGGER() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return LOGGER;
  }
  var LOGGER;
  function addDefaultResponseValidation(_this__u8e3s4) {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response.toString() + '. Text: "' + cachedResponseText + '"', this);
    captureStack(this, ResponseException);
    this.e3x_1 = response;
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, RedirectResponseException);
    this.g3x_1 = 'Unhandled redirect: ' + response.s3p().l3p().t3p().l2z_1 + ' ' + response.s3p().l3p().u3p().toString() + '. ' + ('Status: ' + response.b3q().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(RedirectResponseException).e = function () {
    return this.g3x_1;
  };
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ClientRequestException);
    this.i3x_1 = 'Client request(' + response.s3p().l3p().t3p().l2z_1 + ' ' + response.s3p().l3p().u3p().toString() + ') ' + ('invalid: ' + response.b3q().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ClientRequestException).e = function () {
    return this.i3x_1;
  };
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ServerResponseException);
    this.k3x_1 = 'Server error(' + response.s3p().l3p().t3p().l2z_1 + ' ' + response.s3p().l3p().u3p().toString() + ': ' + (response.b3q().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ServerResponseException).e = function () {
    return this.k3x_1;
  };
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(addDefaultResponseValidation$lambda$slambda).x3x = function (response, $completion) {
    var tmp = this.d3x(response, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).k9 = function (p1, $completion) {
    return this.x3x(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 5;
            var expectSuccess = this.t3x_1.s3p().m3p().c2k(get_ExpectSuccessAttributeKey());
            if (!expectSuccess) {
              get_LOGGER().u2q('Skipping default response validation for ' + this.t3x_1.s3p().l3p().u3p().toString());
              return Unit_instance;
            }

            this.v3x_1 = this.t3x_1.b3q().y31_1;
            var originCall = this.t3x_1.s3p();
            if (this.v3x_1 < 300 || originCall.m3p().e2k(get_ValidateMark())) {
              return Unit_instance;
            }

            this.p8_1 = 1;
            suspendResult = save(originCall, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this_0.m3p().f2k(get_ValidateMark(), Unit_instance);
            var exceptionCall = this_0;
            this.u3x_1 = exceptionCall.c3n();
            this.q8_1 = 3;
            this.p8_1 = 2;
            suspendResult = bodyAsText(this.u3x_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w3x_1 = suspendResult;
            this.q8_1 = 5;
            this.p8_1 = 4;
            continue $sm;
          case 3:
            this.q8_1 = 5;
            var tmp_0 = this.s8_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _unused_var__etf5q3 = this.s8_1;
              var tmp_1 = this;
              tmp_1.w3x_1 = '<body failed decoding>';
              this.p8_1 = 4;
              continue $sm;
            } else {
              throw this.s8_1;
            }

          case 4:
            this.q8_1 = 5;
            var exceptionResponseText = this.w3x_1;
            var tmp0_subject = this.v3x_1;
            var exception = (300 <= tmp0_subject ? tmp0_subject <= 399 : false) ? new RedirectResponseException(this.u3x_1, exceptionResponseText) : (400 <= tmp0_subject ? tmp0_subject <= 499 : false) ? new ClientRequestException(this.u3x_1, exceptionResponseText) : (500 <= tmp0_subject ? tmp0_subject <= 599 : false) ? new ServerResponseException(this.u3x_1, exceptionResponseText) : new ResponseException(this.u3x_1, exceptionResponseText);
            get_LOGGER().u2q('Default response validation for ' + this.t3x_1.s3p().l3p().u3p().toString() + ' failed with ' + exception.toString());
            throw exception;
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
  protoOf(addDefaultResponseValidation$lambda$slambda).d3x = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.t3x_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.x3x(response, $completion);
    }, 1);
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.a3y_1 = $this_addDefaultResponseValidation.v3o_1;
      $this$HttpResponseValidator.b3y(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_instance;
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function _init_properties_DefaultResponseValidation_kt__wcn8vr() {
    if (!properties_initialized_DefaultResponseValidation_kt_akvzqt) {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ValidateMark';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Unit);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      ValidateMark = new AttributeKey(name, tmp$ret$1);
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.DefaultResponseValidation');
    }
  }
  function get_LOGGER_0() {
    _init_properties_DefaultTransform_kt__20knxx();
    return LOGGER_0;
  }
  var LOGGER_0;
  function defaultTransformers(_this__u8e3s4) {
    _init_properties_DefaultTransform_kt__20knxx();
    var tmp = Phases_getInstance().h3v_1;
    _this__u8e3s4.x3l_1.a2q(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_1().b3p_1;
    _this__u8e3s4.y3l_1.a2q(tmp_0, defaultTransformers$slambda_2(_this__u8e3s4, null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.f3y_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    tmp.d3y_1 = $contentType == null ? Application_getInstance().f2s_1 : $contentType;
    this.e3y_1 = fromInt($body.length);
  }
  protoOf(defaultTransformers$1$content$1).m34 = function () {
    return this.d3y_1;
  };
  protoOf(defaultTransformers$1$content$1).n34 = function () {
    return this.e3y_1;
  };
  protoOf(defaultTransformers$1$content$1).o34 = function () {
    return this.f3y_1;
  };
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.j3y_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.w2p_1.e3o_1.rd('Content-Length');
    tmp.h3y_1 = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
    var tmp_0 = this;
    tmp_0.i3y_1 = $contentType == null ? Application_getInstance().f2s_1 : $contentType;
  }
  protoOf(defaultTransformers$1$content$2).n34 = function () {
    return this.h3y_1;
  };
  protoOf(defaultTransformers$1$content$2).m34 = function () {
    return this.i3y_1;
  };
  protoOf(defaultTransformers$1$content$2).m36 = function () {
    return this.j3y_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda).v3m = function ($this$intercept, body, $completion) {
    var tmp = this.w3m($this$intercept, body, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(defaultTransformers$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3m(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            if (this.s3y_1.w2p_1.e3o_1.rd('Accept') == null) {
              this.s3y_1.w2p_1.e3o_1.q2m('Accept', '*/*');
            }

            var contentType_0 = contentType(this.s3y_1.w2p_1);
            var tmp0_subject = this.t3y_1;
            var tmp_0;
            if (typeof tmp0_subject === 'string') {
              tmp_0 = new TextContent(this.t3y_1, contentType_0 == null ? Text_getInstance().x2t_1 : contentType_0);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_0 = new defaultTransformers$1$content$1(contentType_0, this.t3y_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_0 = new defaultTransformers$1$content$2(this.s3y_1, contentType_0, this.t3y_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_0 = this.t3y_1;
                  } else {
                    tmp_0 = platformRequestDefaultTransform(contentType_0, this.s3y_1.w2p_1, this.t3y_1);
                  }
                }
              }
            }

            var content = tmp_0;
            if (!((content == null ? null : content.m34()) == null)) {
              this.s3y_1.w2p_1.e3o_1.t2m('Content-Type');
              get_LOGGER_0().u2q('Transformed with default transformers request body for ' + this.s3y_1.w2p_1.c3o_1.toString() + ' from ' + toString(getKClassFromExpression(this.t3y_1)));
              this.p8_1 = 1;
              suspendResult = this.s3y_1.a2p(content, this);
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
  protoOf(defaultTransformers$slambda).w3m = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.s3y_1 = $this$intercept;
    i.t3y_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, body, $completion) {
      return i.v3m($this$intercept, body, $completion);
    }, 2);
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.c3z_1 = $body;
    this.d3z_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda$slambda).o3b = function ($this$writer, $completion) {
    var tmp = this.p3b($this$writer, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(defaultTransformers$slambda$slambda).k9 = function (p1, $completion) {
    return this.o3b(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 4;
            this.q8_1 = 3;
            this.p8_1 = 1;
            suspendResult = copyTo(this.c3z_1, this.e3z_1.w2g_1, 9223372036854775807n, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            rethrowCloseCauseIfNeeded(this.c3z_1);
            this.q8_1 = 4;
            this.p8_1 = 2;
            continue $sm;
          case 2:
            this.q8_1 = 4;
            return Unit_instance;
          case 3:
            this.q8_1 = 4;
            var tmp_0 = this.s8_1;
            if (tmp_0 instanceof CancellationException) {
              var cause = this.s8_1;
              cancel(this.d3z_1, cause);
              throw cause;
            } else {
              var tmp_1 = this.s8_1;
              if (tmp_1 instanceof Error) {
                var cause_0 = this.s8_1;
                cancel_0(this.d3z_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.s8_1;
              }
            }

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
  protoOf(defaultTransformers$slambda$slambda).p3b = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.c3z_1, this.d3z_1, completion);
    i.e3z_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.o3b($this$writer, $completion);
    }, 1);
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.e1r();
      return Unit_instance;
    };
  }
  function defaultTransformers$slambda_1($this_defaultTransformers, resultContinuation) {
    this.n3z_1 = $this_defaultTransformers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda_1).q3n = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.r3n($this$intercept, _destruct__k2r9zo, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(defaultTransformers$slambda_1).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3n(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda_1).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 12;
            this.q3z_1 = this.p3z_1.jg();
            var body = this.p3z_1.kg();
            if (!isInterface(body, ByteReadChannel))
              return Unit_instance;
            var response = this.o3z_1.w2p_1.c3n();
            var tmp0_subject = this.q3z_1.n2q_1;
            if (tmp0_subject.equals(getKClass(Unit))) {
              cancel_1(body);
              this.p8_1 = 10;
              suspendResult = this.o3z_1.a2p(new HttpResponseContainer(this.q3z_1, Unit_instance), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().rb())) {
                this.p8_1 = 8;
                suspendResult = readRemaining(body, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject.equals(getKClass(Source)) || tmp0_subject.equals(getKClass(Source))) {
                  this.p8_1 = 6;
                  suspendResult = readRemaining(body, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject.equals(PrimitiveClasses_getInstance().ac())) {
                    this.p8_1 = 4;
                    suspendResult = toByteArray(body, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject.equals(getKClass(ByteReadChannel))) {
                      var responseJobHolder = Job(get_job(response.l1k()));
                      var this_0 = writer(this.o3z_1, this.n3z_1.w3l_1, VOID, defaultTransformers$slambda$slambda_0(body, response, null));
                      invokeOnCompletion(this_0, defaultTransformers$slambda$lambda(responseJobHolder));
                      attachWriterJob(body, this_0);
                      var channel = this_0.v2a_1;
                      this.p8_1 = 3;
                      suspendResult = this.o3z_1.a2p(new HttpResponseContainer(this.q3z_1, channel), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (tmp0_subject.equals(getKClass(HttpStatusCode))) {
                        cancel_1(body);
                        this.p8_1 = 2;
                        suspendResult = this.o3z_1.a2p(new HttpResponseContainer(this.q3z_1, response.b3q()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        if (tmp0_subject.equals(getKClass(MultiPartData))) {
                          var tmp0 = this.o3z_1.w2p_1.c3n().a2z().rd('Content-Type');
                          var tmp$ret$0;
                          l$ret$1: do {
                            if (tmp0 == null) {
                              var message = 'No content type provided for multipart';
                              throw IllegalStateException_init_$Create$(toString(message));
                            } else {
                              tmp$ret$0 = tmp0;
                              break l$ret$1;
                            }
                          }
                           while (false);
                          var rawContentType = tmp$ret$0;
                          var contentType = Companion_getInstance_0().ho(rawContentType);
                          if (!contentType.q2u(MultiPart_getInstance().q2t_1)) {
                            var message_0 = 'Expected multipart/form-data, got ' + contentType.toString();
                            throw IllegalStateException_init_$Create$(toString(message_0));
                          }
                          var tmp1_safe_receiver = this.o3z_1.w2p_1.c3n().a2z().rd('Content-Length');
                          var contentLength_0 = tmp1_safe_receiver == null ? null : toLong(tmp1_safe_receiver);
                          var body_0 = new CIOMultipartDataBase(this.o3z_1.l1k(), body, rawContentType, contentLength_0);
                          var parsedResponse = new HttpResponseContainer(this.q3z_1, body_0);
                          this.p8_1 = 1;
                          suspendResult = this.o3z_1.a2p(parsedResponse, this);
                          if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                          }
                          continue $sm;
                        } else {
                          this.r3z_1 = null;
                          this.p8_1 = 11;
                          continue $sm;
                        }
                      }
                    }
                  }
                }
              }
            }

          case 1:
            this.r3z_1 = suspendResult;
            this.p8_1 = 11;
            continue $sm;
          case 2:
            this.r3z_1 = suspendResult;
            this.p8_1 = 11;
            continue $sm;
          case 3:
            this.r3z_1 = suspendResult;
            this.p8_1 = 11;
            continue $sm;
          case 4:
            var bytes = suspendResult;
            checkContentLength(contentLength(this.o3z_1.w2p_1.c3n()), fromInt(bytes.length), this.o3z_1.w2p_1.l3p().t3p());
            this.p8_1 = 5;
            suspendResult = this.o3z_1.a2p(new HttpResponseContainer(this.q3z_1, bytes), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.r3z_1 = suspendResult;
            this.p8_1 = 11;
            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new HttpResponseContainer(this.q3z_1, ARGUMENT);
            this.p8_1 = 7;
            suspendResult = this.o3z_1.a2p(ARGUMENT_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.r3z_1 = suspendResult;
            this.p8_1 = 11;
            continue $sm;
          case 8:
            var ARGUMENT_1 = suspendResult;
            var ARGUMENT_2 = readText(ARGUMENT_1);
            var ARGUMENT_3 = toInt(ARGUMENT_2);
            var ARGUMENT_4 = new HttpResponseContainer(this.q3z_1, ARGUMENT_3);
            this.p8_1 = 9;
            suspendResult = this.o3z_1.a2p(ARGUMENT_4, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.r3z_1 = suspendResult;
            this.p8_1 = 11;
            continue $sm;
          case 10:
            this.r3z_1 = suspendResult;
            this.p8_1 = 11;
            continue $sm;
          case 11:
            var result = this.r3z_1;
            if (!(result == null)) {
              get_LOGGER_0().u2q('Transformed with default transformers response body ' + ('for ' + this.o3z_1.w2p_1.l3p().u3p().toString() + ' to ' + toString(this.q3z_1.n2q_1)));
            }

            return Unit_instance;
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
  protoOf(defaultTransformers$slambda_1).r3n = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new defaultTransformers$slambda_1(this.n3z_1, completion);
    i.o3z_1 = $this$intercept;
    i.p3z_1 = _destruct__k2r9zo;
    return i;
  };
  function defaultTransformers$slambda_2($this_defaultTransformers, resultContinuation) {
    var i = new defaultTransformers$slambda_1($this_defaultTransformers, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.q3n($this$intercept, _destruct__k2r9zo, $completion);
    }, 2);
  }
  var properties_initialized_DefaultTransform_kt_ossax9;
  function _init_properties_DefaultTransform_kt__20knxx() {
    if (!properties_initialized_DefaultTransform_kt_ossax9) {
      properties_initialized_DefaultTransform_kt_ossax9 = true;
      LOGGER_0 = KtorSimpleLogger('io.ktor.client.plugins.defaultTransformers');
    }
  }
  function get_LOGGER_1() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return LOGGER_1;
  }
  var LOGGER_1;
  function get_HttpCallValidator() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return HttpCallValidator;
  }
  var HttpCallValidator;
  function get_ExpectSuccessAttributeKey() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidatorConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y3x_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.z3x_1 = ArrayList_init_$Create$();
    this.a3y_1 = true;
  }
  protoOf(HttpCallValidatorConfig).b3y = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.y3x_1.b1(block);
  };
  function HttpResponseValidator(_this__u8e3s4, block) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    _this__u8e3s4.k3p(get_HttpCallValidator(), block);
  }
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function RequestError$install$slambda($handler, resultContinuation) {
    this.a40_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestError$install$slambda).v3m = function ($this$intercept, it, $completion) {
    var tmp = this.w3m($this$intercept, it, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(RequestError$install$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3m(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestError$install$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 5;
            this.q8_1 = 2;
            this.p8_1 = 1;
            suspendResult = this.b40_1.b2p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.d40_1 = suspendResult;
            this.q8_1 = 5;
            this.p8_1 = 4;
            continue $sm;
          case 2:
            this.q8_1 = 5;
            var tmp_0 = this.s8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.s8_1;
              this.p8_1 = 3;
              suspendResult = this.a40_1(HttpRequest(this.b40_1.w2p_1), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.s8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.d40_1 = Unit_instance;
            this.p8_1 = 4;
            continue $sm;
          case 4:
            this.q8_1 = 5;
            return Unit_instance;
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
  protoOf(RequestError$install$slambda).w3m = function ($this$intercept, it, completion) {
    var i = new RequestError$install$slambda(this.a40_1, completion);
    i.b40_1 = $this$intercept;
    i.c40_1 = it;
    return i;
  };
  function RequestError$install$slambda_0($handler, resultContinuation) {
    var i = new RequestError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.v3m($this$intercept, it, $completion);
    }, 2);
  }
  function RequestError() {
  }
  protoOf(RequestError).e40 = function (client, handler) {
    var tmp = Phases_getInstance().e3v_1;
    client.x3l_1.a2q(tmp, RequestError$install$slambda_0(handler, null));
  };
  protoOf(RequestError).j3v = function (client, handler) {
    return this.e40(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RequestError_instance;
  function RequestError_getInstance() {
    return RequestError_instance;
  }
  function ReceiveError$install$slambda($handler, resultContinuation) {
    this.n40_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveError$install$slambda).q3n = function ($this$intercept, it, $completion) {
    var tmp = this.r3n($this$intercept, it, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(ReceiveError$install$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3n(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveError$install$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 5;
            this.q8_1 = 2;
            this.p8_1 = 1;
            suspendResult = this.o40_1.b2p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.q40_1 = suspendResult;
            this.q8_1 = 5;
            this.p8_1 = 4;
            continue $sm;
          case 2:
            this.q8_1 = 5;
            var tmp_0 = this.s8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.s8_1;
              this.p8_1 = 3;
              suspendResult = this.n40_1(this.o40_1.w2p_1.l3p(), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.s8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.q40_1 = Unit_instance;
            this.p8_1 = 4;
            continue $sm;
          case 4:
            this.q8_1 = 5;
            return Unit_instance;
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
  protoOf(ReceiveError$install$slambda).r3n = function ($this$intercept, it, completion) {
    var i = new ReceiveError$install$slambda(this.n40_1, completion);
    i.o40_1 = $this$intercept;
    i.p40_1 = it;
    return i;
  };
  function ReceiveError$install$slambda_0($handler, resultContinuation) {
    var i = new ReceiveError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.q3n($this$intercept, it, $completion);
    }, 2);
  }
  function ReceiveError() {
  }
  protoOf(ReceiveError).e40 = function (client, handler) {
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    client.y3l_1.z2p(Phases_getInstance_1().a3p_1, BeforeReceive);
    client.y3l_1.a2q(BeforeReceive, ReceiveError$install$slambda_0(handler, null));
  };
  protoOf(ReceiveError).j3v = function (client, handler) {
    return this.e40(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var ReceiveError_instance;
  function ReceiveError_getInstance() {
    return ReceiveError_instance;
  }
  function HttpRequest(builder) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return new HttpRequest$1(builder);
  }
  function HttpCallValidatorConfig$_init_$ref_m1o2g9() {
    return constructCallableReference(function () {
      return new HttpCallValidatorConfig();
    }, 0, 0, 25, '<init>');
  }
  function HttpCallValidator$lambda($this$createClientPlugin) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    var responseValidators = reversed($this$createClientPlugin.d3w_1.y3x_1);
    var callExceptionHandlers = reversed($this$createClientPlugin.d3w_1.z3x_1);
    var expectSuccess = $this$createClientPlugin.d3w_1.a3y_1;
    var tmp = SetupRequest_instance;
    $this$createClientPlugin.g3w(tmp, HttpCallValidator$lambda$slambda_0(expectSuccess, null));
    var tmp_0 = Send_instance;
    $this$createClientPlugin.g3w(tmp_0, HttpCallValidator$lambda$slambda_2(responseValidators, null));
    var tmp_1 = RequestError_instance;
    $this$createClientPlugin.g3w(tmp_1, HttpCallValidator$lambda$slambda_4(callExceptionHandlers, null));
    var tmp_2 = ReceiveError_instance;
    $this$createClientPlugin.g3w(tmp_2, HttpCallValidator$lambda$slambda_6(callExceptionHandlers, null));
    return Unit_instance;
  }
  function invoke$validateResponse(responseValidators, response, $completion) {
    var tmp = new $invoke$validateResponseCOROUTINE$(responseValidators, response, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function invoke$processException(callExceptionHandlers, cause, request, $completion) {
    var tmp = new $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function HttpCallValidator$lambda$slambda$lambda($expectSuccess) {
    return function () {
      return $expectSuccess;
    };
  }
  function HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation) {
    this.w41_1 = $expectSuccess;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda).y41 = function (request, $completion) {
    var tmp = this.z41(request, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpCallValidator$lambda$slambda).k9 = function (p1, $completion) {
    return this.y41(p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        if (tmp === 0) {
          this.q8_1 = 1;
          var tmp_0 = get_ExpectSuccessAttributeKey();
          this.x41_1.h3o_1.i2k(tmp_0, HttpCallValidator$lambda$slambda$lambda(this.w41_1));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda).z41 = function (request, completion) {
    var i = new HttpCallValidator$lambda$slambda(this.w41_1, completion);
    i.x41_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_0($expectSuccess, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation);
    return constructCallableReference(function (request, $completion) {
      return i.y41(request, $completion);
    }, 1);
  }
  function HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation) {
    this.i42_1 = $responseValidators;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_1).m42 = function ($this$on, request, $completion) {
    var tmp = this.n42($this$on, request, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpCallValidator$lambda$slambda_1).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.m42(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_1).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            this.p8_1 = 1;
            suspendResult = this.j42_1.q42(this.k42_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l42_1 = suspendResult;
            this.p8_1 = 2;
            suspendResult = invoke$validateResponse(this.i42_1, this.l42_1.c3n(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.l42_1;
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
  protoOf(HttpCallValidator$lambda$slambda_1).n42 = function ($this$on, request, completion) {
    var i = new HttpCallValidator$lambda$slambda_1(this.i42_1, completion);
    i.j42_1 = $this$on;
    i.k42_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_2($responseValidators, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.m42($this$on, request, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation) {
    this.z42_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_3).d43 = function (request, cause, $completion) {
    var tmp = this.e43(request, cause, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpCallValidator$lambda$slambda_3).l9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.d43(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_3).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            this.c43_1 = unwrapCancellationException(this.b43_1);
            this.p8_1 = 1;
            suspendResult = invoke$processException(this.z42_1, this.c43_1, this.a43_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.c43_1;
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
  protoOf(HttpCallValidator$lambda$slambda_3).e43 = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_3(this.z42_1, completion);
    i.a43_1 = request;
    i.b43_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_4($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.d43(request, cause, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation) {
    this.n43_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_5).d43 = function (request, cause, $completion) {
    var tmp = this.e43(request, cause, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpCallValidator$lambda$slambda_5).l9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.d43(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_5).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            this.q43_1 = unwrapCancellationException(this.p43_1);
            this.p8_1 = 1;
            suspendResult = invoke$processException(this.n43_1, this.q43_1, this.o43_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.q43_1;
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
  protoOf(HttpCallValidator$lambda$slambda_5).e43 = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_5(this.n43_1, completion);
    i.o43_1 = request;
    i.p43_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_6($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.d43(request, cause, $completion);
    }, 2);
  }
  function $invoke$validateResponseCOROUTINE$(responseValidators, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z40_1 = responseValidators;
    this.a41_1 = response;
  }
  protoOf($invoke$validateResponseCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 4;
            get_LOGGER_1().u2q('Validating response for request ' + this.a41_1.s3p().l3p().u3p().toString());
            this.b41_1 = this.z40_1.t();
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!this.b41_1.u()) {
              this.p8_1 = 3;
              continue $sm;
            }

            var element = this.b41_1.v();
            this.p8_1 = 2;
            suspendResult = element(this.a41_1, this);
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
  function $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k41_1 = callExceptionHandlers;
    this.l41_1 = cause;
    this.m41_1 = request;
  }
  protoOf($invoke$processExceptionCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 6;
            get_LOGGER_1().u2q('Processing exception ' + this.l41_1.toString() + ' for request ' + this.m41_1.u3p().toString());
            this.n41_1 = this.k41_1.t();
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!this.n41_1.u()) {
              this.p8_1 = 5;
              continue $sm;
            }

            var element = this.n41_1.v();
            if (element instanceof ExceptionHandlerWrapper) {
              this.p8_1 = 3;
              suspendResult = element.s43_1(this.l41_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (element instanceof RequestExceptionHandlerWrapper) {
                this.p8_1 = 2;
                suspendResult = element.r43_1(this.l41_1, this.m41_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                noWhenBranchMatchedException();
              }
            }

            break;
          case 2:
            this.p8_1 = 4;
            continue $sm;
          case 3:
            this.p8_1 = 4;
            continue $sm;
          case 4:
            this.p8_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
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
  function HttpRequest$1($builder) {
    this.x43_1 = $builder;
    this.t43_1 = $builder.d3o_1;
    this.u43_1 = $builder.c3o_1.t2u();
    this.v43_1 = $builder.h3o_1;
    this.w43_1 = $builder.e3o_1.t2u();
  }
  protoOf(HttpRequest$1).s3p = function () {
    // Inline function 'kotlin.error' call
    var message = 'Call is not initialized';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(HttpRequest$1).t3p = function () {
    return this.t43_1;
  };
  protoOf(HttpRequest$1).u3p = function () {
    return this.u43_1;
  };
  protoOf(HttpRequest$1).m3p = function () {
    return this.v43_1;
  };
  protoOf(HttpRequest$1).a2z = function () {
    return this.w43_1;
  };
  protoOf(HttpRequest$1).u18 = function () {
    var tmp = this.x43_1.f3o_1;
    var tmp0_elvis_lhs = tmp instanceof OutgoingContent ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Content was not transformed to OutgoingContent yet. Current body is ' + toString(this.x43_1.f3o_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  };
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function _init_properties_HttpCallValidator_kt__r6yh2y() {
    if (!properties_initialized_HttpCallValidator_kt_xrx49w) {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      LOGGER_1 = KtorSimpleLogger('io.ktor.client.plugins.HttpCallValidator');
      var tmp = HttpCallValidatorConfig$_init_$ref_m1o2g9();
      HttpCallValidator = createClientPlugin_0('HttpResponseValidator', tmp, HttpCallValidator$lambda);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ExpectSuccessAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().ob();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().ob(), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
      ExpectSuccessAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + toString(plugin) + ' is not installed. Consider using `install(' + plugin.m1().toString() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function pluginOrNull(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_safe_receiver = _this__u8e3s4.b3m_1.d2k(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d2k(plugin.m1());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function _init_properties_HttpClientPlugin_kt__cypu1m() {
    if (!properties_initialized_HttpClientPlugin_kt_p98320) {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ApplicationPluginRegistry';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Attributes);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Attributes), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      PLUGIN_INSTALLED_LIST = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_LOGGER_2() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return LOGGER_2;
  }
  var LOGGER_2;
  function get_HttpPlainText() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return HttpPlainText;
  }
  var HttpPlainText;
  function HttpPlainTextConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.y43_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.z43_1 = LinkedHashMap_init_$Create$();
    this.a44_1 = null;
    this.b44_1 = Charsets_getInstance().a2j_1;
  }
  function RenderRequestHook$install$slambda($handler, resultContinuation) {
    this.k44_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RenderRequestHook$install$slambda).v3m = function ($this$intercept, content, $completion) {
    var tmp = this.w3m($this$intercept, content, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(RenderRequestHook$install$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3m(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RenderRequestHook$install$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 4;
            this.p8_1 = 1;
            suspendResult = this.k44_1(this.l44_1.w2p_1, this.m44_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!(result == null)) {
              this.p8_1 = 2;
              suspendResult = this.l44_1.a2p(result, this);
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
  protoOf(RenderRequestHook$install$slambda).w3m = function ($this$intercept, content, completion) {
    var i = new RenderRequestHook$install$slambda(this.k44_1, completion);
    i.l44_1 = $this$intercept;
    i.m44_1 = content;
    return i;
  };
  function RenderRequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RenderRequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.v3m($this$intercept, content, $completion);
    }, 2);
  }
  function RenderRequestHook() {
  }
  protoOf(RenderRequestHook).n44 = function (client, handler) {
    var tmp = Phases_getInstance().h3v_1;
    client.x3l_1.a2q(tmp, RenderRequestHook$install$slambda_0(handler, null));
  };
  protoOf(RenderRequestHook).j3v = function (client, handler) {
    return this.n44(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RenderRequestHook_instance;
  function RenderRequestHook_getInstance() {
    return RenderRequestHook_instance;
  }
  function HttpPlainTextConfig$_init_$ref_isjudo() {
    return constructCallableReference(function () {
      return new HttpPlainTextConfig();
    }, 0, 0, 26, '<init>');
  }
  function HttpPlainText$lambda($this$createClientPlugin) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = toList($this$createClientPlugin.d3w_1.z43_1);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
    var withQuality = sortedWith(this_0, tmp$ret$1);
    var responseCharsetFallback = $this$createClientPlugin.d3w_1.b44_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this$createClientPlugin.d3w_1.y43_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (!$this$createClientPlugin.d3w_1.z43_1.q2(element)) {
        destination.b1(element);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda$lambda_0;
    var tmp$ret$6 = new sam$kotlin_Comparator$0(tmp_0);
    var withoutQuality = sortedWith(destination, tmp$ret$6);
    var tmp_1;
    var tmp0_0 = $this$createClientPlugin.d3w_1.y43_1;
    var tmp$ret$7;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_2;
      if (isInterface(tmp0_0, Collection)) {
        tmp_2 = tmp0_0.r();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$7 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0_0.t();
      while (_iterator__ex2g4s_0.u()) {
        var element_0 = _iterator__ex2g4s_0.v();
        if (!element_0.equals(Charsets_getInstance().a2j_1)) {
          tmp$ret$7 = true;
          break $l$block_0;
        }
      }
      tmp$ret$7 = false;
    }
    if (tmp$ret$7) {
      tmp_1 = true;
    } else {
      var tmp0_1 = $this$createClientPlugin.d3w_1.z43_1.t2();
      var tmp$ret$9;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_3;
        if (isInterface(tmp0_1, Collection)) {
          tmp_3 = tmp0_1.r();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$9 = false;
          break $l$block_2;
        }
        var _iterator__ex2g4s_1 = tmp0_1.t();
        while (_iterator__ex2g4s_1.u()) {
          var element_1 = _iterator__ex2g4s_1.v();
          if (!element_1.equals(Charsets_getInstance().a2j_1)) {
            tmp$ret$9 = true;
            break $l$block_2;
          }
        }
        tmp$ret$9 = false;
      }
      tmp_1 = tmp$ret$9;
    }
    var hasRegisteredCharsets = tmp_1;
    var tmp_4;
    if (hasRegisteredCharsets) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_2 = withoutQuality.t();
      while (_iterator__ex2g4s_2.u()) {
        var element_2 = _iterator__ex2g4s_2.v();
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_1) > 0) {
          this_1.q(',');
        }
        this_1.q(get_name(element_2));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_3 = withQuality.t();
      while (_iterator__ex2g4s_3.u()) {
        var element_3 = _iterator__ex2g4s_3.v();
        var charset = element_3.jg();
        var quality = element_3.kg();
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_1) > 0) {
          this_1.q(',');
        }
        // Inline function 'kotlin.check' call
        if (!(0.0 <= quality ? quality <= 1.0 : false)) {
          throw IllegalStateException_init_$Create$('Check failed.');
        }
        // Inline function 'kotlin.math.roundToInt' call
        var this_2 = 100 * quality;
        var truncatedQuality = roundToInt(this_2) / 100.0;
        this_1.q(get_name(charset) + ';q=' + truncatedQuality);
      }
      tmp_4 = this_1.toString();
    } else {
      tmp_4 = null;
    }
    var acceptCharsetHeader = tmp_4;
    var tmp0_elvis_lhs = $this$createClientPlugin.d3w_1.a44_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_5;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = firstOrNull(withQuality);
      tmp_5 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hg_1;
    } else {
      tmp_5 = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_5;
    var requestCharset = tmp3_elvis_lhs == null ? Charsets_getInstance().a2j_1 : tmp3_elvis_lhs;
    var tmp_6 = RenderRequestHook_instance;
    $this$createClientPlugin.g3w(tmp_6, HttpPlainText$lambda$slambda_0(acceptCharsetHeader, requestCharset, null));
    $this$createClientPlugin.o44(HttpPlainText$lambda$slambda_2(responseCharsetFallback, null));
    return Unit_instance;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.p44_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).ee = function (a, b) {
    return this.p44_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.ee(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).i3 = function () {
    return this.p44_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.i3());
  };
  function HttpPlainText$lambda$lambda(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.ig_1;
    var tmp$ret$2 = a.ig_1;
    return compareValues(tmp, tmp$ret$2);
  }
  function HttpPlainText$lambda$lambda_0(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = get_name(a);
    var tmp$ret$2 = get_name(b);
    return compareValues(tmp, tmp$ret$2);
  }
  function invoke$wrapContent(requestCharset, request, content, requestContentType) {
    var contentType = requestContentType == null ? Text_getInstance().x2t_1 : requestContentType;
    var tmp2_elvis_lhs = requestContentType == null ? null : charset(requestContentType);
    var charset_0 = tmp2_elvis_lhs == null ? requestCharset : tmp2_elvis_lhs;
    get_LOGGER_2().u2q('Sending request body to ' + request.c3o_1.toString() + ' as text/plain with charset ' + charset_0.toString());
    return new TextContent(content, withCharset(contentType, charset_0));
  }
  function invoke$read(responseCharsetFallback, call, body) {
    var tmp0_elvis_lhs = charset_0(call.c3n());
    var actualCharset = tmp0_elvis_lhs == null ? responseCharsetFallback : tmp0_elvis_lhs;
    get_LOGGER_2().u2q('Reading response body for ' + call.l3p().u3p().toString() + ' as String with charset ' + actualCharset.toString());
    return readText_0(body, actualCharset);
  }
  function invoke$addAcceptCharsetHeader(_this__u8e3s4, value) {
    if (value == null || !(_this__u8e3s4.e3o_1.rd('Accept-Charset') == null))
      return Unit_instance;
    get_LOGGER_2().u2q('Adding Accept-Charset=' + value + ' to ' + _this__u8e3s4.c3o_1.toString());
    _this__u8e3s4.e3o_1.o2m('Accept-Charset', value);
  }
  function HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation) {
    this.y44_1 = $acceptCharsetHeader;
    this.z44_1 = $requestCharset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda).c45 = function (request, content, $completion) {
    var tmp = this.d45(request, content, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpPlainText$lambda$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.c45(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        if (tmp === 0) {
          this.q8_1 = 1;
          invoke$addAcceptCharsetHeader(this.a45_1, this.y44_1);
          var tmp_0 = this.b45_1;
          if (!(typeof tmp_0 === 'string'))
            return null;
          var contentType_0 = contentType(this.a45_1);
          if (!(contentType_0 == null) && !(contentType_0.n2u_1 === Text_getInstance().x2t_1.n2u_1)) {
            return null;
          }
          return invoke$wrapContent(this.z44_1, this.a45_1, this.b45_1, contentType_0);
        } else if (tmp === 1) {
          throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpPlainText$lambda$slambda).d45 = function (request, content, completion) {
    var i = new HttpPlainText$lambda$slambda(this.y44_1, this.z44_1, completion);
    i.a45_1 = request;
    i.b45_1 = content;
    return i;
  };
  function HttpPlainText$lambda$slambda_0($acceptCharsetHeader, $requestCharset, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.c45(request, content, $completion);
    }, 2);
  }
  function HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation) {
    this.m45_1 = $responseCharsetFallback;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda_1).r45 = function ($this$transformResponseBody, response, content, requestedType, $completion) {
    var tmp = this.s45($this$transformResponseBody, response, content, requestedType, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpPlainText$lambda$slambda_1).t45 = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.r45(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda_1).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            if (!this.q45_1.n2q_1.equals(PrimitiveClasses_getInstance().wb()))
              return null;
            this.p8_1 = 1;
            suspendResult = readRemaining(this.p45_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return invoke$read(this.m45_1, this.o45_1.s3p(), bodyBytes);
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
  protoOf(HttpPlainText$lambda$slambda_1).s45 = function ($this$transformResponseBody, response, content, requestedType, completion) {
    var i = new HttpPlainText$lambda$slambda_1(this.m45_1, completion);
    i.n45_1 = $this$transformResponseBody;
    i.o45_1 = response;
    i.p45_1 = content;
    i.q45_1 = requestedType;
    return i;
  };
  function HttpPlainText$lambda$slambda_2($responseCharsetFallback, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation);
    return constructCallableReference(function ($this$transformResponseBody, response, content, requestedType, $completion) {
      return i.r45($this$transformResponseBody, response, content, requestedType, $completion);
    }, 4);
  }
  var properties_initialized_HttpPlainText_kt_2nx4ox;
  function _init_properties_HttpPlainText_kt__iy89z1() {
    if (!properties_initialized_HttpPlainText_kt_2nx4ox) {
      properties_initialized_HttpPlainText_kt_2nx4ox = true;
      LOGGER_2 = KtorSimpleLogger('io.ktor.client.plugins.HttpPlainText');
      var tmp = HttpPlainTextConfig$_init_$ref_isjudo();
      HttpPlainText = createClientPlugin_0('HttpPlainText', tmp, HttpPlainText$lambda);
    }
  }
  function get_ALLOWED_FOR_REDIRECT() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function get_LOGGER_3() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return LOGGER_3;
  }
  var LOGGER_3;
  function get_HttpResponseRedirectEvent() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return HttpResponseRedirectEvent;
  }
  var HttpResponseRedirectEvent;
  function get_HttpRedirect() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return HttpRedirect;
  }
  var HttpRedirect;
  function HttpRedirectConfig() {
    this.u45_1 = true;
    this.v45_1 = false;
  }
  function isRedirect(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp0_subject = _this__u8e3s4.y31_1;
    return tmp0_subject === Companion_getInstance_1().h30_1.y31_1 || tmp0_subject === Companion_getInstance_1().i30_1.y31_1 || (tmp0_subject === Companion_getInstance_1().n30_1.y31_1 || (tmp0_subject === Companion_getInstance_1().o30_1.y31_1 || tmp0_subject === Companion_getInstance_1().j30_1.y31_1)) ? true : false;
  }
  function HttpRedirectConfig$_init_$ref_rhym9t() {
    return constructCallableReference(function () {
      return new HttpRedirectConfig();
    }, 0, 0, 27, '<init>');
  }
  function HttpRedirect$lambda($this$createClientPlugin) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var checkHttpMethod = $this$createClientPlugin.d3w_1.u45_1;
    var allowHttpsDowngrade = $this$createClientPlugin.d3w_1.v45_1;
    var tmp = Send_instance;
    $this$createClientPlugin.g3w(tmp, HttpRedirect$lambda$slambda_0(checkHttpMethod, allowHttpsDowngrade, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function invoke$handleCall(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion) {
    var tmp = new $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    this.t46_1 = $checkHttpMethod;
    this.u46_1 = $allowHttpsDowngrade;
    this.v46_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRedirect$lambda$slambda).m42 = function ($this$on, request, $completion) {
    var tmp = this.n42($this$on, request, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpRedirect$lambda$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.m42(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRedirect$lambda$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            this.p8_1 = 1;
            suspendResult = this.w46_1.q42(this.x46_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var origin = suspendResult;
            if (this.t46_1 && !get_ALLOWED_FOR_REDIRECT().j2(origin.l3p().t3p())) {
              return origin;
            }

            this.p8_1 = 2;
            suspendResult = invoke$handleCall(this.w46_1, this.x46_1, origin, this.u46_1, this.v46_1.c3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  protoOf(HttpRedirect$lambda$slambda).n42 = function ($this$on, request, completion) {
    var i = new HttpRedirect$lambda$slambda(this.t46_1, this.u46_1, this.v46_1, completion);
    i.w46_1 = $this$on;
    i.x46_1 = request;
    return i;
  };
  function HttpRedirect$lambda$slambda_0($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    var i = new HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.m42($this$on, request, $completion);
    }, 2);
  }
  function $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e46_1 = _this__u8e3s4;
    this.f46_1 = context;
    this.g46_1 = origin;
    this.h46_1 = allowHttpsDowngrade;
    this.i46_1 = client;
  }
  protoOf($invoke$handleCallCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            this.j46_1 = this.g46_1;
            this.k46_1 = this.f46_1;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.p8_1 = 4;
              continue $sm;
            }

            var previousProtocol = this.j46_1.l3p().u3p().d33_1;
            var previousAuthority = get_authority(this.j46_1.l3p().u3p());
            if (!isRedirect(this.j46_1.c3n().b3q()))
              return this.j46_1;
            var location = this.j46_1.c3n().a2z().rd('Location');
            if (location == null) {
              get_LOGGER_3().s2q('Location header missing from redirect response ' + this.j46_1.l3p().u3p().toString() + '; returning response as is');
              return this.j46_1;
            }

            this.i46_1.d3m_1.z36(get_HttpResponseRedirectEvent(), this.j46_1.c3n());
            get_LOGGER_3().u2q('Received redirect response to ' + location + ' for request ' + this.j46_1.l3p().u3p().toString());
            var tmp_0 = this;
            var this_0 = new HttpRequestBuilder();
            this_0.w3t(this.k46_1);
            this_0.c3o_1.n32_1.y2();
            takeFrom(this_0.c3o_1, location);
            if (!this.h46_1 && isSecure(previousProtocol) && !isSecure(this_0.c3o_1.q32())) {
              get_LOGGER_3().u2q('Blocked redirect from ' + this.j46_1.l3p().u3p().toString() + ' to ' + location + ' due to HTTPS downgrade');
              return this.j46_1;
            }

            if (!(previousAuthority === get_authority_0(this_0.c3o_1))) {
              this_0.e3o_1.t2m('Authorization');
              get_LOGGER_3().u2q('Removing Authorization header for cross-authority redirect: ' + (previousAuthority + ' -> ' + this_0.c3o_1.a34()));
            }

            tmp_0.k46_1 = this_0;
            this.p8_1 = 2;
            suspendResult = this.e46_1.q42(this.k46_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.j46_1 = suspendResult;
            this.p8_1 = 1;
            continue $sm;
          case 3:
            throw this.s8_1;
          case 4:
            return Unit_instance;
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
  var properties_initialized_HttpRedirect_kt_klj746;
  function _init_properties_HttpRedirect_kt__ure7fo() {
    if (!properties_initialized_HttpRedirect_kt_klj746) {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().b2z_1, Companion_getInstance_2().g2z_1]);
      LOGGER_3 = KtorSimpleLogger('io.ktor.client.plugins.HttpRedirect');
      HttpResponseRedirectEvent = new EventDefinition();
      var tmp = HttpRedirectConfig$_init_$ref_rhym9t();
      HttpRedirect = createClientPlugin_0('HttpRedirect', tmp, HttpRedirect$lambda);
    }
  }
  function get_LOGGER_4() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return LOGGER_4;
  }
  var LOGGER_4;
  function get_HttpRequestLifecycle() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return HttpRequestLifecycle;
  }
  var HttpRequestLifecycle;
  function $invokeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g47_1 = _this__u8e3s4;
  }
  protoOf($invokeCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            var tmp0 = this.g47_1.k47_1;
            this.p8_1 = 1;
            suspendResult = tmp0.b2p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  function PipelineContext$proceed$ref(p0) {
    KFunctionImpl.call(this, 9, 1, 28);
    this.k47_1 = p0;
  }
  protoOf(PipelineContext$proceed$ref).v2g = function ($completion) {
    var tmp = new $invokeCOROUTINE$(this, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(PipelineContext$proceed$ref).j9 = function ($completion) {
    return this.v2g($completion);
  };
  function PipelineContext$proceed$ref_0(p0) {
    var i = new PipelineContext$proceed$ref(p0);
    return constructCallableReference(function ($completion) {
      return i.v2g($completion);
    }, 0, 9, 28, VOID, [p0]);
  }
  function SetupRequestContext$install$slambda($handler, resultContinuation) {
    this.t47_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequestContext$install$slambda).v3m = function ($this$intercept, it, $completion) {
    var tmp = this.w3m($this$intercept, it, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(SetupRequestContext$install$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3m(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequestContext$install$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            this.p8_1 = 1;
            suspendResult = this.t47_1(this.u47_1.w2p_1, PipelineContext$proceed$ref_0(this.u47_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(SetupRequestContext$install$slambda).w3m = function ($this$intercept, it, completion) {
    var i = new SetupRequestContext$install$slambda(this.t47_1, completion);
    i.u47_1 = $this$intercept;
    i.v47_1 = it;
    return i;
  };
  function SetupRequestContext$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequestContext$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.v3m($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequestContext() {
  }
  protoOf(SetupRequestContext).w47 = function (client, handler) {
    var tmp = Phases_getInstance().e3v_1;
    client.x3l_1.a2q(tmp, SetupRequestContext$install$slambda_0(handler, null));
  };
  protoOf(SetupRequestContext).j3v = function (client, handler) {
    return this.w47(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var SetupRequestContext_instance;
  function SetupRequestContext_getInstance() {
    return SetupRequestContext_instance;
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var handler = clientEngineJob.n1l(attachToClientEngineJob$lambda(requestJob));
    requestJob.n1l(attachToClientEngineJob$lambda_0(handler));
  }
  function HttpRequestLifecycle$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var tmp = SetupRequestContext_instance;
    $this$createClientPlugin.g3w(tmp, HttpRequestLifecycle$lambda$slambda_0($this$createClientPlugin, null));
    return Unit_instance;
  }
  function HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation) {
    this.f48_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestLifecycle$lambda$slambda).j48 = function (request, proceed, $completion) {
    var tmp = this.k48(request, proceed, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.j48(tmp, (!(p2 == null) ? isSuspendFunction(p2, 0) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 6;
            this.i48_1 = SupervisorJob(this.g48_1.g3o_1);
            attachToClientEngineJob(this.i48_1, ensureNotNull(this.f48_1.c3w_1.w3l_1.c9(Key_instance)));
            this.p8_1 = 1;
            continue $sm;
          case 1:
            this.q8_1 = 4;
            this.q8_1 = 3;
            this.g48_1.g3o_1 = this.i48_1;
            this.p8_1 = 2;
            suspendResult = this.h48_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q8_1 = 6;
            this.p8_1 = 5;
            continue $sm;
          case 3:
            this.q8_1 = 4;
            var tmp_0 = this.s8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.s8_1;
              this.i48_1.d1r(cause);
              throw cause;
            } else {
              throw this.s8_1;
            }

          case 4:
            this.q8_1 = 6;
            var t = this.s8_1;
            this.i48_1.e1r();
            throw t;
          case 5:
            this.q8_1 = 6;
            this.i48_1.e1r();
            return Unit_instance;
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
  protoOf(HttpRequestLifecycle$lambda$slambda).k48 = function (request, proceed, completion) {
    var i = new HttpRequestLifecycle$lambda$slambda(this.f48_1, completion);
    i.g48_1 = request;
    i.h48_1 = proceed;
    return i;
  };
  function HttpRequestLifecycle$lambda$slambda_0($this_createClientPlugin, resultContinuation) {
    var i = new HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation);
    return constructCallableReference(function (request, proceed, $completion) {
      return i.j48(request, proceed, $completion);
    }, 2);
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      if (!(cause == null)) {
        get_LOGGER_4().u2q('Cancelling request because engine Job failed with error: ' + cause.toString());
        cancel_2($requestJob, 'Engine failed', cause);
      } else {
        get_LOGGER_4().u2q('Cancelling request because engine Job completed');
        $requestJob.e1r();
      }
      return Unit_instance;
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.x1n();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpRequestLifecycle_kt_3hmcrf;
  function _init_properties_HttpRequestLifecycle_kt__jgkmfx() {
    if (!properties_initialized_HttpRequestLifecycle_kt_3hmcrf) {
      properties_initialized_HttpRequestLifecycle_kt_3hmcrf = true;
      LOGGER_4 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestLifecycle');
      HttpRequestLifecycle = createClientPlugin('RequestLifecycle', HttpRequestLifecycle$lambda);
    }
  }
  function get_LOGGER_5() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return LOGGER_5;
  }
  var LOGGER_5;
  function get_HttpRequestRetryEvent() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return HttpRequestRetryEvent;
  }
  var HttpRequestRetryEvent;
  var HttpRequestRetry;
  function get_MaxRetriesPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return MaxRetriesPerRequestAttributeKey;
  }
  var MaxRetriesPerRequestAttributeKey;
  function get_ShouldRetryPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ShouldRetryPerRequestAttributeKey;
  }
  var ShouldRetryPerRequestAttributeKey;
  function get_ShouldRetryOnExceptionPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ShouldRetryOnExceptionPerRequestAttributeKey;
  }
  var ShouldRetryOnExceptionPerRequestAttributeKey;
  function get_ModifyRequestPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ModifyRequestPerRequestAttributeKey;
  }
  var ModifyRequestPerRequestAttributeKey;
  function get_RetryDelayPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return RetryDelayPerRequestAttributeKey;
  }
  var RetryDelayPerRequestAttributeKey;
  function HttpRetryEventData(request, retryCount, response, cause) {
    this.l48_1 = request;
    this.m48_1 = retryCount;
    this.n48_1 = response;
    this.o48_1 = cause;
  }
  function randomMs($this, randomizationMs) {
    return randomizationMs === 0n ? 0n : Default_getInstance().jj(randomizationMs);
  }
  function HttpRequestRetryConfig$delay$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetryConfig$delay$slambda).y48 = function (it, $completion) {
    var tmp = this.z48(it, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).k9 = function (p1, $completion) {
    return this.y48((!(p1 == null) ? typeof p1 === 'bigint' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            this.p8_1 = 1;
            suspendResult = delay(this.x48_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(HttpRequestRetryConfig$delay$slambda).z48 = function (it, completion) {
    var i = new HttpRequestRetryConfig$delay$slambda(completion);
    i.x48_1 = it;
    return i;
  };
  function HttpRequestRetryConfig$delay$slambda_0(resultContinuation) {
    var i = new HttpRequestRetryConfig$delay$slambda(resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.y48(it, $completion);
    }, 1);
  }
  function HttpRequestRetryConfig$modifyRequest$lambda(_this__u8e3s4, it) {
    return Unit_instance;
  }
  function HttpRequestRetryConfig$retryOnException$lambda($retryOnTimeout) {
    return function ($this$retryOnExceptionIf, _unused_var__etf5q3, cause) {
      var tmp;
      if (isTimeoutException(cause)) {
        tmp = $retryOnTimeout;
      } else {
        if (cause instanceof CancellationException) {
          tmp = false;
        } else {
          tmp = true;
        }
      }
      return tmp;
    };
  }
  function HttpRequestRetryConfig$retryOnServerErrors$lambda($this$retryIf, _unused_var__etf5q3, response) {
    // Inline function 'kotlin.let' call
    var it = response.b3q().y31_1;
    return 500 <= it ? it <= 599 : false;
  }
  function HttpRequestRetryConfig$delayMillis$lambda($respectRetryAfterHeader, $block) {
    return function (_this__u8e3s4, it) {
      var tmp;
      if ($respectRetryAfterHeader) {
        var tmp0_safe_receiver = _this__u8e3s4.b49_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a2z();
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.rd('Retry-After');
        var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : toLongOrNull(tmp2_safe_receiver);
        var tmp_0;
        if (tmp3_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.Long.times' call
          tmp_0 = multiply(tmp3_safe_receiver, fromInt(1000));
        }
        var retryAfter = tmp_0;
        var tmp0 = $block(_this__u8e3s4, it);
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = retryAfter == null ? 0n : retryAfter;
        tmp = tmp0 >= b ? tmp0 : b;
      } else {
        tmp = $block(_this__u8e3s4, it);
      }
      return tmp;
    };
  }
  function HttpRequestRetryConfig$exponentialDelay$lambda($base, $baseDelayMs, $maxDelayMs, this$0, $randomizationMs) {
    return function ($this$delayMillis, retry) {
      var tmp0 = $base;
      // Inline function 'kotlin.math.pow' call
      var n = retry - 1 | 0;
      var tmp$ret$0 = Math.pow(tmp0, n);
      var tmp0_0 = numberToLong(tmp$ret$0 * toNumber($baseDelayMs));
      // Inline function 'kotlin.comparisons.minOf' call
      var b = $maxDelayMs;
      var delay = tmp0_0 <= b ? tmp0_0 : b;
      return add(delay, randomMs(this$0, $randomizationMs));
    };
  }
  function HttpRequestRetryConfig() {
    var tmp = this;
    tmp.g49_1 = HttpRequestRetryConfig$delay$slambda_0(null);
    var tmp_0 = this;
    tmp_0.h49_1 = HttpRequestRetryConfig$modifyRequest$lambda;
    this.i49_1 = 0;
    this.j49(3);
    this.k49();
  }
  protoOf(HttpRequestRetryConfig).l49 = function () {
    var tmp = this.d49_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetry');
    }
  };
  protoOf(HttpRequestRetryConfig).m49 = function () {
    var tmp = this.e49_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetryOnException');
    }
  };
  protoOf(HttpRequestRetryConfig).n49 = function () {
    var tmp = this.f49_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('delayMillis');
    }
  };
  protoOf(HttpRequestRetryConfig).o49 = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.i49_1 = maxRetries;
    this.d49_1 = block;
  };
  protoOf(HttpRequestRetryConfig).p49 = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.i49_1 = maxRetries;
    this.e49_1 = block;
  };
  protoOf(HttpRequestRetryConfig).q49 = function (maxRetries, retryOnTimeout) {
    this.p49(maxRetries, HttpRequestRetryConfig$retryOnException$lambda(retryOnTimeout));
  };
  protoOf(HttpRequestRetryConfig).r49 = function (maxRetries, retryOnTimeout, $super) {
    maxRetries = maxRetries === VOID ? -1 : maxRetries;
    retryOnTimeout = retryOnTimeout === VOID ? false : retryOnTimeout;
    var tmp;
    if ($super === VOID) {
      this.q49(maxRetries, retryOnTimeout);
      tmp = Unit_instance;
    } else {
      tmp = $super.q49.call(this, maxRetries, retryOnTimeout);
    }
    return tmp;
  };
  protoOf(HttpRequestRetryConfig).s49 = function (maxRetries) {
    this.o49(maxRetries, HttpRequestRetryConfig$retryOnServerErrors$lambda);
  };
  protoOf(HttpRequestRetryConfig).j49 = function (maxRetries) {
    this.s49(maxRetries);
    this.r49(maxRetries);
  };
  protoOf(HttpRequestRetryConfig).t49 = function (respectRetryAfterHeader, block) {
    var tmp = this;
    tmp.f49_1 = HttpRequestRetryConfig$delayMillis$lambda(respectRetryAfterHeader, block);
  };
  protoOf(HttpRequestRetryConfig).u49 = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader) {
    // Inline function 'kotlin.check' call
    if (!(base > 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(baseDelayMs > 0n)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(maxDelayMs > 0n)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(randomizationMs >= 0n)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    this.t49(respectRetryAfterHeader, HttpRequestRetryConfig$exponentialDelay$lambda(base, baseDelayMs, maxDelayMs, this, randomizationMs));
  };
  protoOf(HttpRequestRetryConfig).k49 = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader, $super) {
    base = base === VOID ? 2.0 : base;
    baseDelayMs = baseDelayMs === VOID ? 1000n : baseDelayMs;
    maxDelayMs = maxDelayMs === VOID ? 60000n : maxDelayMs;
    randomizationMs = randomizationMs === VOID ? 1000n : randomizationMs;
    respectRetryAfterHeader = respectRetryAfterHeader === VOID ? true : respectRetryAfterHeader;
    var tmp;
    if ($super === VOID) {
      this.u49(base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
      tmp = Unit_instance;
    } else {
      tmp = $super.u49.call(this, base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
    }
    return tmp;
  };
  function HttpRetryShouldRetryContext(retryCount) {
    this.v49_1 = retryCount;
  }
  function HttpRetryDelayContext(request, response, cause) {
    this.a49_1 = request;
    this.b49_1 = response;
    this.c49_1 = cause;
  }
  function HttpRetryModifyRequestContext(request, response, cause, retryCount) {
    this.w49_1 = request;
    this.x49_1 = response;
    this.y49_1 = cause;
    this.z49_1 = retryCount;
  }
  function throwOnInvalidResponseBody(_this__u8e3s4, $completion) {
    var tmp = new $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function isTimeoutException(_this__u8e3s4) {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    var exception = unwrapCancellationException(_this__u8e3s4);
    var tmp;
    var tmp_0;
    if (exception instanceof HttpRequestTimeoutException) {
      tmp_0 = true;
    } else {
      tmp_0 = exception instanceof ConnectTimeoutException;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = exception instanceof SocketTimeoutException;
    }
    return tmp;
  }
  function HttpRequestRetryConfig$_init_$ref_mqbboi() {
    return constructCallableReference(function () {
      return new HttpRequestRetryConfig();
    }, 0, 0, 29, '<init>');
  }
  function HttpRequestRetry$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    var shouldRetry = $this$createClientPlugin.d3w_1.l49();
    var shouldRetryOnException = $this$createClientPlugin.d3w_1.m49();
    var delayMillis = $this$createClientPlugin.d3w_1.n49();
    var delay = $this$createClientPlugin.d3w_1.g49_1;
    var maxRetries = $this$createClientPlugin.d3w_1.i49_1;
    var modifyRequest = $this$createClientPlugin.d3w_1.h49_1;
    $this$createClientPlugin.m4a(HttpRequestRetry$lambda$slambda_0(maxRetries, null));
    var tmp = Send_instance;
    $this$createClientPlugin.g3w(tmp, HttpRequestRetry$lambda$slambda_2(shouldRetry, shouldRetryOnException, maxRetries, delayMillis, modifyRequest, $this$createClientPlugin, delay, null));
    return Unit_instance;
  }
  function HttpRequestRetry$lambda$prepareRequest$lambda($subRequest) {
    return function (cause) {
      var tmp = $subRequest.g3o_1;
      var subRequestJob = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
      if (cause == null) {
        subRequestJob.e1r();
      } else {
        subRequestJob.d1r(cause);
      }
      return Unit_instance;
    };
  }
  function invoke$shouldRetry(retryCount, maxRetries, shouldRetry, call) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), call.l3p(), call.c3n());
  }
  function invoke$shouldRetryOnException(retryCount, maxRetries, shouldRetry, subRequest, cause) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), subRequest, cause);
  }
  function invoke$prepareRequest(request) {
    var subRequest = (new HttpRequestBuilder()).n4a(request);
    var tmp = request.g3o_1;
    tmp.n1l(HttpRequestRetry$lambda$prepareRequest$lambda(subRequest));
    return subRequest;
  }
  function HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation) {
    this.w4a_1 = $maxRetries;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda).a4b = function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
    var tmp = this.b4b($this$onRequest, request, _unused_var__etf5q3, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpRequestRetry$lambda$slambda).c4b = function (p1, p2, p3, $completion) {
    var tmp = p1 instanceof OnRequestContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    return this.a4b(tmp, tmp_0, !(p3 == null) ? p3 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        if (tmp === 0) {
          this.q8_1 = 1;
          var tmp0_elvis_lhs = this.y4a_1.h3o_1.d2k(get_MaxRetriesPerRequestAttributeKey());
          var maxRetriesValue = tmp0_elvis_lhs == null ? this.w4a_1 : tmp0_elvis_lhs;
          this.y4a_1.h3o_1.f2k(get_MaxRetriesPerRequestAttributeKey(), maxRetriesValue);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpRequestRetry$lambda$slambda).b4b = function ($this$onRequest, request, _unused_var__etf5q3, completion) {
    var i = new HttpRequestRetry$lambda$slambda(this.w4a_1, completion);
    i.x4a_1 = $this$onRequest;
    i.y4a_1 = request;
    i.z4a_1 = _unused_var__etf5q3;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_0($maxRetries, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation);
    return constructCallableReference(function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
      return i.a4b($this$onRequest, request, _unused_var__etf5q3, $completion);
    }, 3);
  }
  function HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    this.l4b_1 = $shouldRetry;
    this.m4b_1 = $shouldRetryOnException;
    this.n4b_1 = $maxRetries;
    this.o4b_1 = $delayMillis;
    this.p4b_1 = $modifyRequest;
    this.q4b_1 = $this_createClientPlugin;
    this.r4b_1 = $delay;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda_1).m42 = function ($this$on, request, $completion) {
    var tmp = this.n42($this$on, request, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.m42(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 8;
            this.v4b_1 = 0;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.t4b_1.h3o_1.d2k(get_ShouldRetryPerRequestAttributeKey());
            tmp_0.c4c_1 = tmp0_elvis_lhs == null ? this.l4b_1 : tmp0_elvis_lhs;
            var tmp_1 = this;
            var tmp1_elvis_lhs = this.t4b_1.h3o_1.d2k(get_ShouldRetryOnExceptionPerRequestAttributeKey());
            tmp_1.a4c_1 = tmp1_elvis_lhs == null ? this.m4b_1 : tmp1_elvis_lhs;
            var tmp_2 = this;
            var tmp2_elvis_lhs = this.t4b_1.h3o_1.d2k(get_MaxRetriesPerRequestAttributeKey());
            tmp_2.b4c_1 = tmp2_elvis_lhs == null ? this.n4b_1 : tmp2_elvis_lhs;
            var tmp_3 = this;
            var tmp3_elvis_lhs = this.t4b_1.h3o_1.d2k(get_RetryDelayPerRequestAttributeKey());
            tmp_3.w4b_1 = tmp3_elvis_lhs == null ? this.o4b_1 : tmp3_elvis_lhs;
            var tmp_4 = this;
            var tmp4_elvis_lhs = this.t4b_1.h3o_1.d2k(get_ModifyRequestPerRequestAttributeKey());
            tmp_4.d4c_1 = tmp4_elvis_lhs == null ? this.p4b_1 : tmp4_elvis_lhs;
            this.x4b_1 = null;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.p8_1 = 9;
              continue $sm;
            }

            this.z4b_1 = invoke$prepareRequest(this.t4b_1);
            this.q8_1 = 5;
            if (!(this.x4b_1 == null)) {
              var modifyRequestContext = new HttpRetryModifyRequestContext(this.t4b_1, this.x4b_1.n48_1, this.x4b_1.o48_1, this.x4b_1.m48_1);
              this.d4c_1(modifyRequestContext, this.z4b_1);
            }

            this.p8_1 = 2;
            suspendResult = this.s4b_1.q42(this.z4b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u4b_1 = suspendResult;
            if (!invoke$shouldRetry(this.v4b_1, this.b4c_1, this.c4c_1, this.u4b_1)) {
              this.p8_1 = 4;
              suspendResult = throwOnInvalidResponseBody(this.u4b_1.c3n(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.p8_1 = 3;
              continue $sm;
            }

          case 3:
            var tmp_5 = this;
            this.v4b_1 = this.v4b_1 + 1 | 0;
            tmp_5.y4b_1 = new HttpRetryEventData(this.z4b_1, this.v4b_1, this.u4b_1.c3n(), null);
            this.q8_1 = 8;
            this.p8_1 = 6;
            continue $sm;
          case 4:
            this.q8_1 = 8;
            this.p8_1 = 9;
            continue $sm;
          case 5:
            this.q8_1 = 8;
            var tmp_6 = this.s8_1;
            if (tmp_6 instanceof Error) {
              var cause = this.s8_1;
              var tmp_7 = this;
              if (!invoke$shouldRetryOnException(this.v4b_1, this.b4c_1, this.a4c_1, this.z4b_1, cause)) {
                throw cause;
              }
              this.v4b_1 = this.v4b_1 + 1 | 0;
              tmp_7.y4b_1 = new HttpRetryEventData(this.z4b_1, this.v4b_1, null, cause);
              this.p8_1 = 6;
              continue $sm;
            } else {
              throw this.s8_1;
            }

          case 6:
            this.q8_1 = 8;
            var retryData = this.y4b_1;
            this.x4b_1 = retryData;
            this.q4b_1.c3w_1.d3m_1.z36(get_HttpRequestRetryEvent(), this.x4b_1);
            var delayContext = new HttpRetryDelayContext(this.x4b_1.l48_1, this.x4b_1.n48_1, this.x4b_1.o48_1);
            this.p8_1 = 7;
            suspendResult = this.r4b_1(this.w4b_1(delayContext, this.v4b_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            get_LOGGER_5().u2q('Retrying request ' + this.t4b_1.c3o_1.toString() + ' attempt: ' + this.v4b_1);
            this.p8_1 = 1;
            continue $sm;
          case 8:
            throw this.s8_1;
          case 9:
            return this.u4b_1;
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
  protoOf(HttpRequestRetry$lambda$slambda_1).n42 = function ($this$on, request, completion) {
    var i = new HttpRequestRetry$lambda$slambda_1(this.l4b_1, this.m4b_1, this.n4b_1, this.o4b_1, this.p4b_1, this.q4b_1, this.r4b_1, completion);
    i.s4b_1 = $this$on;
    i.t4b_1 = request;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_2($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.m42($this$on, request, $completion);
    }, 2);
  }
  function $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i4a_1 = _this__u8e3s4;
  }
  protoOf($throwOnInvalidResponseBodyCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 6;
            if (get_isSaved(this.i4a_1)) {
              this.j4a_1 = this.i4a_1.a3q();
              this.p8_1 = 1;
              continue $sm;
            } else {
              this.k4a_1 = false;
              this.p8_1 = 4;
              continue $sm;
            }

          case 1:
            this.q8_1 = 5;
            this.p8_1 = 2;
            suspendResult = this.j4a_1.b29(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.l4a_1 = suspendResult;
            this.q8_1 = 6;
            this.p8_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this.l4a_1;
            this.q8_1 = 6;
            var this_0 = this.j4a_1;
            var tmp_1;
            try {
              cancel_1(this_0);
              tmp_1 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof Error) {
                var e = $p;
                tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var this_1 = tmp_1;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              get_LOGGER_5().t2q('Failed to close response body channel', tmp0_safe_receiver);
            }

            this.k4a_1 = tmp_0;
            this.p8_1 = 4;
            continue $sm;
          case 4:
            return this.k4a_1;
          case 5:
            this.q8_1 = 6;
            var t = this.s8_1;
            var this_2 = this.j4a_1;
            var tmp_3;
            try {
              cancel_1(this_2);
              tmp_3 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p_0) {
              var tmp_4;
              if ($p_0 instanceof Error) {
                var e_0 = $p_0;
                tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_0));
              } else {
                throw $p_0;
              }
              tmp_3 = tmp_4;
            }

            var this_3 = tmp_3;
            var tmp0_safe_receiver_0 = Result__exceptionOrNull_impl_p6xea9(this_3);
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              get_LOGGER_5().t2q('Failed to close response body channel', tmp0_safe_receiver_0);
            }

            throw t;
          case 6:
            throw this.s8_1;
        }
      } catch ($p_1) {
        var e_1 = $p_1;
        if (this.q8_1 === 6) {
          throw e_1;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e_1;
        }
      }
     while (true);
  };
  var properties_initialized_HttpRequestRetry_kt_jcpv6l;
  function _init_properties_HttpRequestRetry_kt__h4xjtt() {
    if (!properties_initialized_HttpRequestRetry_kt_jcpv6l) {
      properties_initialized_HttpRequestRetry_kt_jcpv6l = true;
      LOGGER_5 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestRetry');
      HttpRequestRetryEvent = new EventDefinition();
      var tmp = HttpRequestRetryConfig$_init_$ref_mqbboi();
      HttpRequestRetry = createClientPlugin_0('RetryFeature', tmp, HttpRequestRetry$lambda);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'MaxRetriesPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().rb();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().rb(), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
      MaxRetriesPerRequestAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ShouldRetryPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = PrimitiveClasses_getInstance().functionClass(3);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_4;
      try {
        tmp_4 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequest_0), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpResponse), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ob(), arrayOf([]), false))]), false);
      } catch ($p_0) {
        var tmp_5;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_5 = null;
        } else {
          throw $p_0;
        }
        tmp_4 = tmp_5;
      }
      var tmp$ret$2_0 = tmp_4;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp$ret$2_0);
      ShouldRetryPerRequestAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_1 = 'ShouldRetryOnExceptionPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_6 = PrimitiveClasses_getInstance().functionClass(3);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_7;
      try {
        tmp_7 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xb(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ob(), arrayOf([]), false))]), false);
      } catch ($p_1) {
        var tmp_8;
        if ($p_1 instanceof Error) {
          var _unused_var__etf5q3_1 = $p_1;
          tmp_8 = null;
        } else {
          throw $p_1;
        }
        tmp_7 = tmp_8;
      }
      var tmp$ret$2_1 = tmp_7;
      var tmp$ret$1_1 = new TypeInfo(tmp_6, tmp$ret$2_1);
      ShouldRetryOnExceptionPerRequestAttributeKey = new AttributeKey(name_1, tmp$ret$1_1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_2 = 'ModifyRequestPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_9 = PrimitiveClasses_getInstance().functionClass(2);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_10;
      try {
        tmp_10 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryModifyRequestContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(Unit), arrayOf([]), false))]), false);
      } catch ($p_2) {
        var tmp_11;
        if ($p_2 instanceof Error) {
          var _unused_var__etf5q3_2 = $p_2;
          tmp_11 = null;
        } else {
          throw $p_2;
        }
        tmp_10 = tmp_11;
      }
      var tmp$ret$2_2 = tmp_10;
      var tmp$ret$1_2 = new TypeInfo(tmp_9, tmp$ret$2_2);
      ModifyRequestPerRequestAttributeKey = new AttributeKey(name_2, tmp$ret$1_2);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_3 = 'RetryDelayPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_12 = PrimitiveClasses_getInstance().functionClass(2);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_13;
      try {
        tmp_13 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryDelayContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().rb(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().sb(), arrayOf([]), false))]), false);
      } catch ($p_3) {
        var tmp_14;
        if ($p_3 instanceof Error) {
          var _unused_var__etf5q3_3 = $p_3;
          tmp_14 = null;
        } else {
          throw $p_3;
        }
        tmp_13 = tmp_14;
      }
      var tmp$ret$2_3 = tmp_13;
      var tmp$ret$1_3 = new TypeInfo(tmp_12, tmp$ret$2_3);
      RetryDelayPerRequestAttributeKey = new AttributeKey(name_3, tmp$ret$1_3);
    }
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.m4c_1 = $plugin;
    this.n4c_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpSend$Plugin$install$slambda).v3m = function ($this$intercept, content, $completion) {
    var tmp = this.w3m($this$intercept, content, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpSend$Plugin$install$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3m(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpSend$Plugin$install$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            var tmp_0 = this.p4c_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var message = trimMargin('\n|Fail to prepare request body for sending. \n|The body type is: ' + toString(getKClassFromExpression(this.p4c_1)) + ', with Content-Type: ' + toString_0(contentType(this.o4c_1.w2p_1)) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.');
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp0 = this.o4c_1.w2p_1;
            var body = this.p4c_1;
            if (body == null) {
              tmp0.f3o_1 = NullBody_instance;
              var tmp_1 = getKClass(OutgoingContent);
              var tmp_2;
              try {
                tmp_2 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_3;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_3 = null;
                } else {
                  throw $p;
                }
                tmp_2 = tmp_3;
              }
              tmp0.x3t(new TypeInfo(tmp_1, tmp_2));
            } else {
              if (body instanceof OutgoingContent) {
                tmp0.f3o_1 = body;
                tmp0.x3t(null);
              } else {
                tmp0.f3o_1 = body;
                var tmp_4 = getKClass(OutgoingContent);
                var tmp_5;
                try {
                  tmp_5 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p_0) {
                  var tmp_6;
                  if ($p_0 instanceof Error) {
                    var _unused_var__etf5q3_0 = $p_0;
                    tmp_6 = null;
                  } else {
                    throw $p_0;
                  }
                  tmp_5 = tmp_6;
                }
                tmp0.x3t(new TypeInfo(tmp_4, tmp_5));
              }
            }

            var maxRetries = this.o4c_1.w2p_1.h3o_1.d2k(get_MaxRetriesPerRequestAttributeKey());
            var tmp_7;
            if (!(maxRetries == null) && maxRetries >= this.m4c_1.q4c_1) {
              var tmp_8;
              if (maxRetries < 2147483647) {
                tmp_8 = maxRetries + 1 | 0;
              } else {
                tmp_8 = maxRetries;
              }
              tmp_7 = tmp_8;
            } else {
              tmp_7 = this.m4c_1.q4c_1;
            }

            var maxSendCount = tmp_7;
            var realSender = new DefaultSender(maxSendCount, this.n4c_1);
            var interceptedSender = realSender;
            var _iterator__ex2g4s = reversed(this.m4c_1.r4c_1).t();
            while (_iterator__ex2g4s.u()) {
              var interceptor = _iterator__ex2g4s.v();
              interceptedSender = new InterceptedSender(interceptor, interceptedSender);
            }

            this.p8_1 = 1;
            suspendResult = interceptedSender.s4c(this.o4c_1.w2p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var call = suspendResult;
            this.p8_1 = 2;
            suspendResult = this.o4c_1.a2p(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.s8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.q8_1 === 3) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpSend$Plugin$install$slambda).w3m = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.m4c_1, this.n4c_1, completion);
    i.o4c_1 = $this$intercept;
    i.p4c_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.v3m($this$intercept, content, $completion);
    }, 2);
  }
  function $executeCOROUTINE$_0(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b4d_1 = _this__u8e3s4;
    this.c4d_1 = requestBuilder;
  }
  protoOf($executeCOROUTINE$_0).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            var tmp0_safe_receiver = this.b4d_1.g4d_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel(tmp0_safe_receiver);
            }

            if (this.b4d_1.f4d_1 >= this.b4d_1.d4d_1) {
              throw new SendCountExceedException('Max send count ' + this.b4d_1.d4d_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var _unary__edvuaz = this.b4d_1.f4d_1;
            this.b4d_1.f4d_1 = _unary__edvuaz + 1 | 0;
            this.p8_1 = 1;
            suspendResult = this.b4d_1.e4d_1.z3l_1.v2p(this.c4d_1, this.c4d_1.f3o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp1_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              var message = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var call = tmp_0;
            this.b4d_1.g4d_1 = call;
            return call;
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
  function Config() {
    this.h4d_1 = 20;
  }
  function Plugin() {
    Plugin_instance = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'HttpSend';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpSend);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(HttpSend), arrayOf([]), false);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_2 = null;
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.i4d_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin).m1 = function () {
    return this.i4d_1;
  };
  protoOf(Plugin).j4d = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config();
    block(this_0);
    var config = this_0;
    return new HttpSend(config.h4d_1);
  };
  protoOf(Plugin).h3p = function (block) {
    return this.j4d(block);
  };
  protoOf(Plugin).k4d = function (plugin, scope) {
    var tmp = Phases_getInstance().i3v_1;
    scope.x3l_1.a2q(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  protoOf(Plugin).i3p = function (plugin, scope) {
    return this.k4d(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.l4d_1 = interceptor;
    this.m4d_1 = nextSender;
  }
  protoOf(InterceptedSender).s4c = function (requestBuilder, $completion) {
    return this.l4d_1(this.m4d_1, requestBuilder, $completion);
  };
  function DefaultSender(maxSendCount, client) {
    this.d4d_1 = maxSendCount;
    this.e4d_1 = client;
    this.f4d_1 = 0;
    this.g4d_1 = null;
  }
  protoOf(DefaultSender).s4c = function (requestBuilder, $completion) {
    var tmp = new $executeCOROUTINE$_0(this, requestBuilder, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance();
    maxSendCount = maxSendCount === VOID ? 20 : maxSendCount;
    this.q4c_1 = maxSendCount;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.r4c_1 = ArrayList_init_$Create$();
  }
  protoOf(HttpSend).n4d = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.r4c_1.b1(block);
  };
  function Sender() {
  }
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  function get_LOGGER_6() {
    _init_properties_HttpTimeout_kt__pucqrr();
    return LOGGER_6;
  }
  var LOGGER_6;
  var HttpTimeout;
  function timeout(_this__u8e3s4, block) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp = HttpTimeoutCapability_instance;
    // Inline function 'kotlin.apply' call
    var this_0 = HttpTimeoutConfig_init_$Create$();
    block(this_0);
    return _this__u8e3s4.o4d(tmp, this_0);
  }
  function HttpTimeoutConfig_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    requestTimeoutMillis = requestTimeoutMillis === VOID ? null : requestTimeoutMillis;
    connectTimeoutMillis = connectTimeoutMillis === VOID ? null : connectTimeoutMillis;
    socketTimeoutMillis = socketTimeoutMillis === VOID ? null : socketTimeoutMillis;
    HttpTimeoutConfig.call($this);
    $this.s4d(requestTimeoutMillis);
    $this.t4d(connectTimeoutMillis);
    $this.u4d(socketTimeoutMillis);
    return $this;
  }
  function HttpTimeoutConfig_init_$Create$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    return HttpTimeoutConfig_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, objectCreate(protoOf(HttpTimeoutConfig)));
  }
  function checkTimeoutValue($this, value) {
    // Inline function 'kotlin.require' call
    if (!(value == null || value > 0n)) {
      var message = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeoutConfig.INFINITE_TIMEOUT_MS';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return value;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.v4d_1 = 9223372036854775807n;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'TimeoutConfiguration';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpTimeoutConfig);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(HttpTimeoutConfig), arrayOf([]), false);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_2 = null;
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.w4d_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_2;
  function Companion_getInstance_10() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  protoOf(HttpTimeoutConfig).s4d = function (value) {
    this.p4d_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).x4d = function () {
    return this.p4d_1;
  };
  protoOf(HttpTimeoutConfig).t4d = function (value) {
    this.q4d_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).y4d = function () {
    return this.q4d_1;
  };
  protoOf(HttpTimeoutConfig).u4d = function (value) {
    this.r4d_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).z4d = function () {
    return this.r4d_1;
  };
  protoOf(HttpTimeoutConfig).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof HttpTimeoutConfig))
      THROW_CCE();
    if (!(this.p4d_1 == other.p4d_1))
      return false;
    if (!(this.q4d_1 == other.q4d_1))
      return false;
    if (!(this.r4d_1 == other.r4d_1))
      return false;
    return true;
  };
  protoOf(HttpTimeoutConfig).hashCode = function () {
    var tmp0_safe_receiver = this.p4d_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getBigIntHashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.q4d_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : getBigIntHashCode(tmp2_safe_receiver);
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.r4d_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : getBigIntHashCode(tmp4_safe_receiver);
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  function HttpTimeoutConfig() {
    Companion_getInstance_10();
    this.p4d_1 = 0n;
    this.q4d_1 = 0n;
    this.r4d_1 = 0n;
  }
  function HttpTimeoutCapability() {
  }
  protoOf(HttpTimeoutCapability).toString = function () {
    return 'HttpTimeoutCapability';
  };
  protoOf(HttpTimeoutCapability).hashCode = function () {
    return 2058496954;
  };
  protoOf(HttpTimeoutCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpTimeoutCapability))
      return false;
    return true;
  };
  var HttpTimeoutCapability_instance;
  function HttpTimeoutCapability_getInstance() {
    return HttpTimeoutCapability_instance;
  }
  function HttpRequestTimeoutException_init_$Init$(request, $this) {
    var tmp = request.c3o_1.a34();
    var tmp0_safe_receiver = request.a4e(HttpTimeoutCapability_instance);
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x4d());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$(request, objectCreate(protoOf(HttpRequestTimeoutException)));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$);
    return tmp;
  }
  function HttpRequestTimeoutException(url, timeoutMillis, cause) {
    cause = cause === VOID ? null : cause;
    IOException_init_$Init$('Request timeout has expired [url=' + url + ', request_timeout=' + toString(timeoutMillis == null ? 'unknown' : timeoutMillis) + ' ms]', cause, this);
    captureStack(this, HttpRequestTimeoutException);
    this.b4e_1 = url;
    this.c4e_1 = timeoutMillis;
  }
  protoOf(HttpRequestTimeoutException).n1r = function () {
    return new HttpRequestTimeoutException(this.b4e_1, this.c4e_1, this.cause);
  };
  function get_supportsRequestTimeout(_this__u8e3s4) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp;
    var tmp_0;
    if (!isWebsocket(_this__u8e3s4.c3o_1.q32())) {
      var tmp_1 = _this__u8e3s4.f3o_1;
      tmp_0 = !(tmp_1 instanceof ClientUpgradeContent);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_2 = _this__u8e3s4.f3o_1;
      tmp = !(tmp_2 instanceof SSEClientContent);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function applyRequestTimeout(_this__u8e3s4, request, requestTimeout) {
    _init_properties_HttpTimeout_kt__pucqrr();
    if (requestTimeout == null || requestTimeout === 9223372036854775807n)
      return Unit_instance;
    var executionContext = request.g3o_1;
    var tmp = new CoroutineName('request-timeout');
    var killer = launch(_this__u8e3s4, tmp, VOID, applyRequestTimeout$slambda_0(requestTimeout, request, executionContext, null));
    var tmp_0 = request.g3o_1;
    tmp_0.n1l(applyRequestTimeout$lambda(killer));
  }
  function HttpTimeoutConfig$_init_$ref_dl1k0m() {
    return constructCallableReference(function () {
      return HttpTimeoutConfig_init_$Create$();
    }, 0, 0, 30);
  }
  function HttpTimeout$lambda($this$createClientPlugin) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var requestTimeoutMillis = $this$createClientPlugin.d3w_1.x4d();
    var connectTimeoutMillis = $this$createClientPlugin.d3w_1.y4d();
    var socketTimeoutMillis = $this$createClientPlugin.d3w_1.z4d();
    var tmp = Send_instance;
    $this$createClientPlugin.g3w(tmp, HttpTimeout$lambda$slambda_0(connectTimeoutMillis, socketTimeoutMillis, requestTimeoutMillis, null));
    return Unit_instance;
  }
  function invoke$hasNotNullTimeouts(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, supportsRequestTimeout) {
    return supportsRequestTimeout && !(requestTimeoutMillis == null) || !(connectTimeoutMillis == null) || !(socketTimeoutMillis == null);
  }
  function HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    this.l4e_1 = $connectTimeoutMillis;
    this.m4e_1 = $socketTimeoutMillis;
    this.n4e_1 = $requestTimeoutMillis;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpTimeout$lambda$slambda).m42 = function ($this$on, request, $completion) {
    var tmp = this.n42($this$on, request, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpTimeout$lambda$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.m42(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpTimeout$lambda$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            var supportsRequestTimeout = get_supportsRequestTimeout(this.p4e_1);
            var configuration = this.p4e_1.a4e(HttpTimeoutCapability_instance);
            if (configuration == null && invoke$hasNotNullTimeouts(this.n4e_1, this.l4e_1, this.m4e_1, supportsRequestTimeout)) {
              configuration = HttpTimeoutConfig_init_$Create$();
              this.p4e_1.o4d(HttpTimeoutCapability_instance, configuration);
            }

            var tmp0_safe_receiver = configuration;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp0_elvis_lhs = tmp0_safe_receiver.y4d();
              tmp0_safe_receiver.t4d(tmp0_elvis_lhs == null ? this.l4e_1 : tmp0_elvis_lhs);
              var tmp1_elvis_lhs = tmp0_safe_receiver.z4d();
              tmp0_safe_receiver.u4d(tmp1_elvis_lhs == null ? this.m4e_1 : tmp1_elvis_lhs);
              if (supportsRequestTimeout) {
                var tmp2_elvis_lhs = tmp0_safe_receiver.x4d();
                tmp0_safe_receiver.s4d(tmp2_elvis_lhs == null ? this.n4e_1 : tmp2_elvis_lhs);
                applyRequestTimeout(this.o4e_1, this.p4e_1, tmp0_safe_receiver.x4d());
              }
            }

            this.p8_1 = 1;
            suspendResult = this.o4e_1.q42(this.p4e_1, this);
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
  protoOf(HttpTimeout$lambda$slambda).n42 = function ($this$on, request, completion) {
    var i = new HttpTimeout$lambda$slambda(this.l4e_1, this.m4e_1, this.n4e_1, completion);
    i.o4e_1 = $this$on;
    i.p4e_1 = request;
    return i;
  };
  function HttpTimeout$lambda$slambda_0($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    var i = new HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.m42($this$on, request, $completion);
    }, 2);
  }
  function applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation) {
    this.y4e_1 = $requestTimeout;
    this.z4e_1 = $request;
    this.a4f_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(applyRequestTimeout$slambda).a2i = function ($this$launch, $completion) {
    var tmp = this.b2i($this$launch, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(applyRequestTimeout$slambda).k9 = function (p1, $completion) {
    return this.a2i((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(applyRequestTimeout$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            this.p8_1 = 1;
            Companion_getInstance_3();
            var this_0 = this.y4e_1;
            suspendResult = delay_0(toDuration(this_0, DurationUnit_MILLISECONDS_getInstance()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.z4e_1);
            var this_1 = get_LOGGER_6();
            if (get_isTraceEnabled(this_1)) {
              this_1.u2q('Request timeout: ' + this.z4e_1.c3o_1.toString());
            }

            cancel_2(this.a4f_1, ensureNotNull(cause.message), cause);
            return Unit_instance;
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
  protoOf(applyRequestTimeout$slambda).b2i = function ($this$launch, completion) {
    var i = new applyRequestTimeout$slambda(this.y4e_1, this.z4e_1, this.a4f_1, completion);
    i.b4f_1 = $this$launch;
    return i;
  };
  function applyRequestTimeout$slambda_0($requestTimeout, $request, $executionContext, resultContinuation) {
    var i = new applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.a2i($this$launch, $completion);
    }, 1);
  }
  function applyRequestTimeout$lambda($killer) {
    return function (it) {
      $killer.v1l();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpTimeout_kt_9oyjbd;
  function _init_properties_HttpTimeout_kt__pucqrr() {
    if (!properties_initialized_HttpTimeout_kt_9oyjbd) {
      properties_initialized_HttpTimeout_kt_9oyjbd = true;
      LOGGER_6 = KtorSimpleLogger('io.ktor.client.plugins.HttpTimeout');
      var tmp = HttpTimeoutConfig$_init_$ref_dl1k0m();
      HttpTimeout = createClientPlugin_0('HttpTimeout', tmp, HttpTimeout$lambda);
    }
  }
  function get_SKIP_SAVE_BODY() {
    _init_properties_SaveBody_kt__lbc3fj();
    return SKIP_SAVE_BODY;
  }
  var SKIP_SAVE_BODY;
  function get_RESPONSE_BODY_SAVED() {
    _init_properties_SaveBody_kt__lbc3fj();
    return RESPONSE_BODY_SAVED;
  }
  var RESPONSE_BODY_SAVED;
  function get_LOGGER_7() {
    _init_properties_SaveBody_kt__lbc3fj();
    var tmp0 = LOGGER$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('LOGGER', 0, tmp, _get_LOGGER_$ref_77hhxy(), null);
    return tmp0.n1();
  }
  var LOGGER$delegate;
  function get_SaveBody() {
    _init_properties_SaveBody_kt__lbc3fj();
    return SaveBody;
  }
  var SaveBody;
  var SaveBodyPlugin;
  function get_isSaved(_this__u8e3s4) {
    _init_properties_SaveBody_kt__lbc3fj();
    return _this__u8e3s4.s3p().m3p().e2k(get_RESPONSE_BODY_SAVED());
  }
  function SaveBodyPluginConfig() {
    this.c4f_1 = false;
  }
  function LOGGER$delegate$lambda() {
    _init_properties_SaveBody_kt__lbc3fj();
    return KtorSimpleLogger('io.ktor.client.plugins.SaveBody');
  }
  function _get_LOGGER_$ref_77hhxy() {
    return constructCallableReference(function () {
      return get_LOGGER_7();
    }, 0, 0, 31);
  }
  function SaveBody$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    var tmp = Phases_getInstance_2().y3v_1;
    $this$createClientPlugin.c3w_1.a3m_1.a2q(tmp, SaveBody$lambda$slambda_0(null));
    return Unit_instance;
  }
  function SaveBody$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SaveBody$lambda$slambda).v3v = function ($this$intercept, response, $completion) {
    var tmp = this.w3v($this$intercept, response, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(SaveBody$lambda$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3v(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SaveBody$lambda$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 6;
            this.p4f_1 = this.m4f_1.s3p();
            this.n4f_1 = this.p4f_1.m3p();
            if (this.n4f_1.e2k(get_SKIP_SAVE_BODY())) {
              var this_0 = get_LOGGER_7();
              if (get_isTraceEnabled(this_0)) {
                this_0.u2q('Skipping body saving for ' + this.p4f_1.l3p().u3p().toString());
              }
              return Unit_instance;
            }

            this.p8_1 = 1;
            continue $sm;
          case 1:
            this.q8_1 = 5;
            var this_1 = get_LOGGER_7();
            if (get_isTraceEnabled(this_1)) {
              this_1.u2q('Saving body for ' + this.p4f_1.l3p().u3p().toString());
            }

            this.p8_1 = 2;
            suspendResult = save(this.p4f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o4f_1 = suspendResult.c3n();
            this.q8_1 = 6;
            this.p8_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this.o4f_1;
            this.q8_1 = 6;
            this.l4f_1;
            var tmp_1;
            try {
              cancel_1(this.m4f_1.a3q());
              tmp_1 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof Error) {
                var e = $p;
                tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var this_2 = tmp_1;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_2);
            if (tmp0_safe_receiver == null)
              null;
            else {
              get_LOGGER_7().t2q('Failed to cancel response body', tmp0_safe_receiver);
            }

            var savedResponse = tmp_0;
            this.n4f_1.f2k(get_RESPONSE_BODY_SAVED(), Unit_instance);
            this.p8_1 = 4;
            suspendResult = this.l4f_1.a2p(savedResponse, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            this.q8_1 = 6;
            var t = this.s8_1;
            this.l4f_1;
            var tmp_3;
            try {
              cancel_1(this.m4f_1.a3q());
              tmp_3 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p_0) {
              var tmp_4;
              if ($p_0 instanceof Error) {
                var e_0 = $p_0;
                tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_0));
              } else {
                throw $p_0;
              }
              tmp_3 = tmp_4;
            }

            var this_3 = tmp_3;
            var tmp0_safe_receiver_0 = Result__exceptionOrNull_impl_p6xea9(this_3);
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              get_LOGGER_7().t2q('Failed to cancel response body', tmp0_safe_receiver_0);
            }

            throw t;
          case 6:
            throw this.s8_1;
        }
      } catch ($p_1) {
        var e_1 = $p_1;
        if (this.q8_1 === 6) {
          throw e_1;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(SaveBody$lambda$slambda).w3v = function ($this$intercept, response, completion) {
    var i = new SaveBody$lambda$slambda(completion);
    i.l4f_1 = $this$intercept;
    i.m4f_1 = response;
    return i;
  };
  function SaveBody$lambda$slambda_0(resultContinuation) {
    var i = new SaveBody$lambda$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.v3v($this$intercept, response, $completion);
    }, 2);
  }
  function SaveBodyPluginConfig$_init_$ref_lwjaof() {
    return constructCallableReference(function () {
      return new SaveBodyPluginConfig();
    }, 0, 0, 32, '<init>');
  }
  function SaveBodyPlugin$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    if ($this$createClientPlugin.d3w_1.c4f_1) {
      get_LOGGER_7().s2q('It is no longer possible to disable body saving for all requests. Use client.prepareRequest(...).execute { ... } syntax to prevent saving the body in memory.\n\nThis API is deprecated and will be removed in Ktor 4.0.0\nIf you were relying on this functionality, share your use case by commenting on this issue: https://youtrack.jetbrains.com/issue/KTOR-8367/');
    } else {
      get_LOGGER_7().s2q('The SaveBodyPlugin plugin is deprecated and can be safely removed. Request bodies are now saved in memory by default for all non-streaming responses.');
    }
    return Unit_instance;
  }
  var properties_initialized_SaveBody_kt_hzvee7;
  function _init_properties_SaveBody_kt__lbc3fj() {
    if (!properties_initialized_SaveBody_kt_hzvee7) {
      properties_initialized_SaveBody_kt_hzvee7 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'SkipSaveBody';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Unit);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      SKIP_SAVE_BODY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ResponseBodySaved';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(Unit);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_4;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_4 = null;
        } else {
          throw $p_0;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$2_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$2_0);
      RESPONSE_BODY_SAVED = new AttributeKey(name_0, tmp$ret$1_0);
      LOGGER$delegate = lazy(LOGGER$delegate$lambda);
      SaveBody = createClientPlugin('SaveBody', SaveBody$lambda);
      var tmp_5 = SaveBodyPluginConfig$_init_$ref_lwjaof();
      SaveBodyPlugin = createClientPlugin_0('DoubleReceivePlugin', tmp_5, SaveBodyPlugin$lambda);
    }
  }
  function HookHandler(hook, handler) {
    this.q4f_1 = hook;
    this.r4f_1 = handler;
  }
  protoOf(HookHandler).j3o = function (client) {
    this.q4f_1.j3v(client, this.r4f_1);
  };
  function ClientPluginBuilder$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginBuilder(key, client, pluginConfig) {
    this.b3w_1 = key;
    this.c3w_1 = client;
    this.d3w_1 = pluginConfig;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.e3w_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    tmp_0.f3w_1 = ClientPluginBuilder$onClose$lambda;
  }
  protoOf(ClientPluginBuilder).m4a = function (block) {
    this.g3w(RequestHook_instance, block);
  };
  protoOf(ClientPluginBuilder).o44 = function (block) {
    this.g3w(TransformResponseBodyHook_instance, block);
  };
  protoOf(ClientPluginBuilder).g3w = function (hook, handler) {
    this.e3w_1.b1(new HookHandler(hook, handler));
  };
  function ClientPluginInstance$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginInstance(key, config, body) {
    this.s4f_1 = key;
    this.t4f_1 = config;
    this.u4f_1 = body;
    var tmp = this;
    tmp.v4f_1 = ClientPluginInstance$onClose$lambda;
  }
  protoOf(ClientPluginInstance).j3o = function (scope) {
    var tmp0 = new ClientPluginBuilder(this.s4f_1, scope, this.t4f_1);
    // Inline function 'kotlin.apply' call
    this.u4f_1(tmp0);
    var pluginBuilder = tmp0;
    this.v4f_1 = pluginBuilder.f3w_1;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = pluginBuilder.e3w_1.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      element.j3o(scope);
    }
  };
  protoOf(ClientPluginInstance).f4 = function () {
    this.v4f_1();
  };
  function SetupRequest$install$slambda($handler, resultContinuation) {
    this.e4g_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequest$install$slambda).v3m = function ($this$intercept, it, $completion) {
    var tmp = this.w3m($this$intercept, it, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(SetupRequest$install$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3m(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequest$install$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            this.p8_1 = 1;
            suspendResult = this.e4g_1(this.f4g_1.w2p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(SetupRequest$install$slambda).w3m = function ($this$intercept, it, completion) {
    var i = new SetupRequest$install$slambda(this.e4g_1, completion);
    i.f4g_1 = $this$intercept;
    i.g4g_1 = it;
    return i;
  };
  function SetupRequest$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequest$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.v3m($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequest() {
  }
  protoOf(SetupRequest).h4g = function (client, handler) {
    var tmp = Phases_getInstance().e3v_1;
    client.x3l_1.a2q(tmp, SetupRequest$install$slambda_0(handler, null));
  };
  protoOf(SetupRequest).j3v = function (client, handler) {
    return this.h4g(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var SetupRequest_instance;
  function SetupRequest_getInstance() {
    return SetupRequest_instance;
  }
  function Sender_0(httpSendSender, coroutineContext) {
    this.o42_1 = httpSendSender;
    this.p42_1 = coroutineContext;
  }
  protoOf(Sender_0).l1k = function () {
    return this.p42_1;
  };
  protoOf(Sender_0).q42 = function (requestBuilder, $completion) {
    return this.o42_1.s4c(requestBuilder, $completion);
  };
  function Send$install$slambda($handler, $client, resultContinuation) {
    this.q4g_1 = $handler;
    this.r4g_1 = $client;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Send$install$slambda).u4g = function ($this$intercept, request, $completion) {
    var tmp = this.v4g($this$intercept, request, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(Send$install$slambda).l9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.u4g(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Send$install$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            this.p8_1 = 1;
            suspendResult = this.q4g_1(new Sender_0(this.s4g_1, this.r4g_1.w3l_1), this.t4g_1, this);
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
  protoOf(Send$install$slambda).v4g = function ($this$intercept, request, completion) {
    var i = new Send$install$slambda(this.q4g_1, this.r4g_1, completion);
    i.s4g_1 = $this$intercept;
    i.t4g_1 = request;
    return i;
  };
  function Send$install$slambda_0($handler, $client, resultContinuation) {
    var i = new Send$install$slambda($handler, $client, resultContinuation);
    return constructCallableReference(function ($this$intercept, request, $completion) {
      return i.u4g($this$intercept, request, $completion);
    }, 2);
  }
  function Send() {
  }
  protoOf(Send).w4g = function (client, handler) {
    var tmp = plugin(client, Plugin_getInstance());
    tmp.n4d(Send$install$slambda_0(handler, client, null));
  };
  protoOf(Send).j3v = function (client, handler) {
    return this.w4g(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var Send_instance;
  function Send_getInstance() {
    return Send_instance;
  }
  function createClientPlugin(name, body) {
    return createClientPlugin_0(name, createClientPlugin$lambda, body);
  }
  function createClientPlugin_0(name, createConfiguration, body) {
    return new ClientPluginImpl(name, createConfiguration, body);
  }
  function ClientPluginImpl(name, createConfiguration, body) {
    this.x4g_1 = createConfiguration;
    this.y4g_1 = body;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(ClientPluginInstance);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(ClientPluginInstance), arrayOf([createInvariantKTypeProjection(createKType(createKTypeParameter('PluginConfigT', arrayOf([createKType(PrimitiveClasses_getInstance().lb(), arrayOf([]), false)]), 'invariant', false, 'io.ktor.client.plugins.api.ClientPluginImpl'), arrayOf([]), false))]), false);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_2 = null;
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.z4g_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(ClientPluginImpl).m1 = function () {
    return this.z4g_1;
  };
  protoOf(ClientPluginImpl).a4h = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.x4g_1();
    block(this_0);
    var config = this_0;
    return new ClientPluginInstance(this.z4g_1, config, this.y4g_1);
  };
  protoOf(ClientPluginImpl).h3p = function (block) {
    return this.a4h(block);
  };
  protoOf(ClientPluginImpl).b4h = function (plugin, scope) {
    plugin.j3o(scope);
  };
  protoOf(ClientPluginImpl).i3p = function (plugin, scope) {
    return this.b4h(plugin instanceof ClientPluginInstance ? plugin : THROW_CCE(), scope);
  };
  function createClientPlugin$lambda() {
    return Unit_instance;
  }
  function TransformResponseBodyContext() {
  }
  function OnRequestContext() {
  }
  function RequestHook$install$slambda($handler, resultContinuation) {
    this.k4h_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestHook$install$slambda).v3m = function ($this$intercept, it, $completion) {
    var tmp = this.w3m($this$intercept, it, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(RequestHook$install$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3m(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestHook$install$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            this.p8_1 = 1;
            suspendResult = this.k4h_1(new OnRequestContext(), this.l4h_1.w2p_1, this.l4h_1.z2o(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(RequestHook$install$slambda).w3m = function ($this$intercept, it, completion) {
    var i = new RequestHook$install$slambda(this.k4h_1, completion);
    i.l4h_1 = $this$intercept;
    i.m4h_1 = it;
    return i;
  };
  function RequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.v3m($this$intercept, it, $completion);
    }, 2);
  }
  function RequestHook() {
  }
  protoOf(RequestHook).n4h = function (client, handler) {
    var tmp = Phases_getInstance().f3v_1;
    client.x3l_1.a2q(tmp, RequestHook$install$slambda_0(handler, null));
  };
  protoOf(RequestHook).j3v = function (client, handler) {
    return this.n4h(client, (!(handler == null) ? isSuspendFunction(handler, 3) : false) ? handler : THROW_CCE());
  };
  var RequestHook_instance;
  function RequestHook_getInstance() {
    return RequestHook_instance;
  }
  function TransformResponseBodyHook$install$slambda($handler, resultContinuation) {
    this.w4h_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TransformResponseBodyHook$install$slambda).q3n = function ($this$intercept, it, $completion) {
    var tmp = this.r3n($this$intercept, it, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(TransformResponseBodyHook$install$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3n(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(TransformResponseBodyHook$install$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            var _destruct__k2r9zo = this.x4h_1.z2o();
            this.z4h_1 = _destruct__k2r9zo.jg();
            var content = _destruct__k2r9zo.kg();
            if (!isInterface(content, ByteReadChannel))
              return Unit_instance;
            this.p8_1 = 1;
            suspendResult = this.w4h_1(new TransformResponseBodyContext(), this.x4h_1.w2p_1.c3n(), content, this.z4h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var newContent = tmp_0;
            var tmp_1;
            if (!(newContent instanceof NullBody)) {
              tmp_1 = !this.z4h_1.n2q_1.ta(newContent);
            } else {
              tmp_1 = false;
            }

            if (tmp_1) {
              throw IllegalStateException_init_$Create$('transformResponseBody returned ' + toString(newContent) + ' but expected value of type ' + this.z4h_1.toString());
            }

            this.p8_1 = 2;
            suspendResult = this.x4h_1.a2p(new HttpResponseContainer(this.z4h_1, newContent), this);
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
  protoOf(TransformResponseBodyHook$install$slambda).r3n = function ($this$intercept, it, completion) {
    var i = new TransformResponseBodyHook$install$slambda(this.w4h_1, completion);
    i.x4h_1 = $this$intercept;
    i.y4h_1 = it;
    return i;
  };
  function TransformResponseBodyHook$install$slambda_0($handler, resultContinuation) {
    var i = new TransformResponseBodyHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.q3n($this$intercept, it, $completion);
    }, 2);
  }
  function TransformResponseBodyHook() {
  }
  protoOf(TransformResponseBodyHook).a4i = function (client, handler) {
    var tmp = Phases_getInstance_1().c3p_1;
    client.y3l_1.a2q(tmp, TransformResponseBodyHook$install$slambda_0(handler, null));
  };
  protoOf(TransformResponseBodyHook).j3v = function (client, handler) {
    return this.a4i(client, (!(handler == null) ? isSuspendFunction(handler, 4) : false) ? handler : THROW_CCE());
  };
  var TransformResponseBodyHook_instance;
  function TransformResponseBodyHook_getInstance() {
    return TransformResponseBodyHook_instance;
  }
  function SSECapability() {
  }
  protoOf(SSECapability).toString = function () {
    return 'SSECapability';
  };
  protoOf(SSECapability).hashCode = function () {
    return -177755299;
  };
  protoOf(SSECapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SSECapability))
      return false;
    return true;
  };
  var SSECapability_instance;
  function SSECapability_getInstance() {
    return SSECapability_instance;
  }
  function SSEClientContent() {
  }
  function DefaultClientWebSocketSession(call, delegate) {
    this.b4i_1 = delegate;
    this.c4i_1 = call;
  }
  protoOf(DefaultClientWebSocketSession).n3d = function (frame, $completion) {
    return this.b4i_1.n3d(frame, $completion);
  };
  protoOf(DefaultClientWebSocketSession).t28 = function ($completion) {
    return this.b4i_1.t28($completion);
  };
  protoOf(DefaultClientWebSocketSession).j3d = function (_set____db54di) {
    this.b4i_1.j3d(_set____db54di);
  };
  protoOf(DefaultClientWebSocketSession).k3d = function () {
    return this.b4i_1.k3d();
  };
  protoOf(DefaultClientWebSocketSession).l3d = function () {
    return this.b4i_1.l3d();
  };
  protoOf(DefaultClientWebSocketSession).m3d = function () {
    return this.b4i_1.m3d();
  };
  protoOf(DefaultClientWebSocketSession).l1k = function () {
    return this.b4i_1.l1k();
  };
  protoOf(DefaultClientWebSocketSession).i3d = function (negotiatedExtensions) {
    this.b4i_1.i3d(negotiatedExtensions);
  };
  function DelegatingClientWebSocketSession(call, session) {
    this.d4i_1 = session;
    this.e4i_1 = call;
  }
  protoOf(DelegatingClientWebSocketSession).n3d = function (frame, $completion) {
    return this.d4i_1.n3d(frame, $completion);
  };
  protoOf(DelegatingClientWebSocketSession).t28 = function ($completion) {
    return this.d4i_1.t28($completion);
  };
  protoOf(DelegatingClientWebSocketSession).j3d = function (_set____db54di) {
    this.d4i_1.j3d(_set____db54di);
  };
  protoOf(DelegatingClientWebSocketSession).k3d = function () {
    return this.d4i_1.k3d();
  };
  protoOf(DelegatingClientWebSocketSession).l3d = function () {
    return this.d4i_1.l3d();
  };
  protoOf(DelegatingClientWebSocketSession).m3d = function () {
    return this.d4i_1.m3d();
  };
  protoOf(DelegatingClientWebSocketSession).l1k = function () {
    return this.d4i_1.l1k();
  };
  function WebSocketContent() {
    ClientUpgradeContent.call(this);
    var tmp = this;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    var nonce = generateNonce(16);
    this_0.q(Default_getInstance_0().ui(nonce));
    tmp.h4i_1 = this_0.toString();
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new HeadersBuilder();
    this_1.q2m('Upgrade', 'websocket');
    this_1.q2m('Connection', 'Upgrade');
    this_1.q2m('Sec-WebSocket-Key', this.h4i_1);
    this_1.q2m('Sec-WebSocket-Version', '13');
    tmp_0.i4i_1 = this_1.t2u();
  }
  protoOf(WebSocketContent).a2z = function () {
    return this.i4i_1;
  };
  protoOf(WebSocketContent).toString = function () {
    return 'WebSocketContent';
  };
  function get_REQUEST_EXTENSIONS_KEY() {
    _init_properties_WebSockets_kt__jaqpbo();
    return REQUEST_EXTENSIONS_KEY;
  }
  var REQUEST_EXTENSIONS_KEY;
  function get_WEBSOCKETS_KEY() {
    _init_properties_WebSockets_kt__jaqpbo();
    return WEBSOCKETS_KEY;
  }
  var WEBSOCKETS_KEY;
  function get_LOGGER_8() {
    _init_properties_WebSockets_kt__jaqpbo();
    return LOGGER_7;
  }
  var LOGGER_7;
  function WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation) {
    this.r4i_1 = $extensionsSupported;
    this.s4i_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda).v3m = function ($this$intercept, it, $completion) {
    var tmp = this.w3m($this$intercept, it, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(WebSockets$Plugin$install$slambda).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3m(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            if (!isWebsocket(this.t4i_1.w2p_1.c3o_1.q32())) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.u2q('Skipping WebSocket plugin for non-websocket request: ' + this.t4i_1.w2p_1.c3o_1.toString());
              }
              return Unit_instance;
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.u2q('Sending WebSocket request ' + this.t4i_1.w2p_1.c3o_1.toString());
            }

            this.t4i_1.w2p_1.o4d(WebSocketCapability_instance, Unit_instance);
            if (this.r4i_1) {
              installExtensions(this.s4i_1, this.t4i_1.w2p_1);
            }

            this.t4i_1.w2p_1.h3o_1.g2k(get_WEBSOCKETS_KEY(), this.s4i_1);
            this.p8_1 = 1;
            suspendResult = this.t4i_1.a2p(new WebSocketContent(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(WebSockets$Plugin$install$slambda).w3m = function ($this$intercept, it, completion) {
    var i = new WebSockets$Plugin$install$slambda(this.r4i_1, this.s4i_1, completion);
    i.t4i_1 = $this$intercept;
    i.u4i_1 = it;
    return i;
  };
  function WebSockets$Plugin$install$slambda_0($extensionsSupported, $plugin, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.v3m($this$intercept, it, $completion);
    }, 2);
  }
  function WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation) {
    this.d4j_1 = $plugin;
    this.e4j_1 = $extensionsSupported;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda_1).q3n = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.r3n($this$intercept, _destruct__k2r9zo, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(WebSockets$Plugin$install$slambda_1).l9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3n(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda_1).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            var info = this.g4j_1.jg();
            var session = this.g4j_1.kg();
            var response = this.f4j_1.w2p_1.c3n();
            var status = response.b3q();
            var requestContent = get_request(response).u18();
            if (!(requestContent instanceof WebSocketContent)) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.u2q('Skipping non-websocket response from ' + this.f4j_1.w2p_1.l3p().u3p().toString() + ': ' + toString(requestContent));
              }
              return Unit_instance;
            }

            if (!status.equals(Companion_getInstance_1().w2z_1)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected status code ' + Companion_getInstance_1().w2z_1.y31_1 + ' but was ' + status.y31_1);
            }

            if (!isInterface(session, WebSocketSession)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected `WebSocketSession` content but was ' + toString(getKClassFromExpression(session)));
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.u2q('Receive websocket session from ' + this.f4j_1.w2p_1.l3p().u3p().toString() + ': ' + toString(session));
            }

            if (!(this.d4j_1.i4j_1 === 2147483647n)) {
              session.j3d(this.d4j_1.i4j_1);
            }

            var tmp_0;
            if (info.n2q_1.equals(getKClass(DefaultClientWebSocketSession))) {
              var defaultSession = this.d4j_1.m4j(session);
              var clientSession = new DefaultClientWebSocketSession(this.f4j_1.w2p_1, defaultSession);
              var tmp_1;
              if (this.e4j_1) {
                tmp_1 = completeNegotiation(this.d4j_1, this.f4j_1.w2p_1);
              } else {
                tmp_1 = emptyList();
              }
              var negotiated = tmp_1;
              clientSession.i3d(negotiated);
              tmp_0 = clientSession;
            } else {
              tmp_0 = new DelegatingClientWebSocketSession(this.f4j_1.w2p_1, session);
            }

            var clientSession_0 = tmp_0;
            this.p8_1 = 1;
            suspendResult = this.f4j_1.a2p(new HttpResponseContainer(info, clientSession_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(WebSockets$Plugin$install$slambda_1).r3n = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new WebSockets$Plugin$install$slambda_1(this.d4j_1, this.e4j_1, completion);
    i.f4j_1 = $this$intercept;
    i.g4j_1 = _destruct__k2r9zo;
    return i;
  };
  function WebSockets$Plugin$install$slambda_2($plugin, $extensionsSupported, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.q3n($this$intercept, _destruct__k2r9zo, $completion);
    }, 2);
  }
  function installExtensions($this, context) {
    var installed = $this.j4j_1.t2u();
    context.h3o_1.f2k(get_REQUEST_EXTENSIONS_KEY(), installed);
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = installed.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var list = element.b3l();
      addAll(destination, list);
    }
    var protocols = destination;
    addNegotiatedProtocols($this, context, protocols);
  }
  function completeNegotiation($this, call) {
    var tmp0_safe_receiver = call.c3n().a2z().rd('Sec-WebSocket-Extensions');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = parseWebSocketExtensions(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var serverExtensions = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    var clientExtensions = call.m3p().c2k(get_REQUEST_EXTENSIONS_KEY());
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = clientExtensions.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (element.c3l(serverExtensions)) {
        destination.b1(element);
      }
    }
    return destination;
  }
  function addNegotiatedProtocols($this, context, protocols) {
    if (protocols.r())
      return Unit_instance;
    var headerValue = joinToString(protocols, ',');
    header(context, 'Sec-WebSocket-Extensions', headerValue);
  }
  function Config_0() {
    this.n4j_1 = new WebSocketExtensionsConfig();
    this.o4j_1 = new WebSocketChannelsConfig();
    this.p4j_1 = 0n;
    this.q4j_1 = 2147483647n;
    this.r4j_1 = null;
  }
  function Plugin_0() {
    Plugin_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'Websocket';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(WebSockets);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(WebSockets), arrayOf([]), false);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_2 = null;
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.s4j_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin_0).m1 = function () {
    return this.s4j_1;
  };
  protoOf(Plugin_0).t4j = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config_0();
    block(this_0);
    var config = this_0;
    return new WebSockets(config.p4j_1, config.q4j_1, config.n4j_1, config.r4j_1, config.o4j_1);
  };
  protoOf(Plugin_0).h3p = function (block) {
    return this.t4j(block);
  };
  protoOf(Plugin_0).u4j = function (plugin, scope) {
    var extensionsSupported = scope.r3l_1.i3t().j2(WebSocketExtensionsCapability_instance);
    var tmp = Phases_getInstance().h3v_1;
    scope.x3l_1.a2q(tmp, WebSockets$Plugin$install$slambda_0(extensionsSupported, plugin, null));
    var tmp_0 = Phases_getInstance_1().c3p_1;
    scope.y3l_1.a2q(tmp_0, WebSockets$Plugin$install$slambda_2(plugin, extensionsSupported, null));
  };
  protoOf(Plugin_0).i3p = function (plugin, scope) {
    return this.u4j(plugin instanceof WebSockets ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function WebSockets(pingIntervalMillis, maxFrameSize, extensionsConfig, contentConverter, channelsConfig) {
    Plugin_getInstance_0();
    contentConverter = contentConverter === VOID ? null : contentConverter;
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_4().o3d_1 : channelsConfig;
    this.h4j_1 = pingIntervalMillis;
    this.i4j_1 = maxFrameSize;
    this.j4j_1 = extensionsConfig;
    this.k4j_1 = contentConverter;
    this.l4j_1 = channelsConfig;
  }
  protoOf(WebSockets).m4j = function (session) {
    if (isInterface(session, DefaultWebSocketSession))
      return session;
    // Inline function 'kotlin.Long.times' call
    var this_0 = this.h4j_1;
    var timeoutMillis = multiply(this_0, fromInt(2));
    // Inline function 'kotlin.also' call
    var this_1 = DefaultWebSocketSession_0(session, this.h4j_1, timeoutMillis, this.l4j_1);
    this_1.j3d(this.i4j_1);
    return this_1;
  };
  function WebSocketExtensionsCapability() {
  }
  protoOf(WebSocketExtensionsCapability).toString = function () {
    return 'WebSocketExtensionsCapability';
  };
  protoOf(WebSocketExtensionsCapability).hashCode = function () {
    return 806573237;
  };
  protoOf(WebSocketExtensionsCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebSocketExtensionsCapability))
      return false;
    return true;
  };
  var WebSocketExtensionsCapability_instance;
  function WebSocketExtensionsCapability_getInstance() {
    return WebSocketExtensionsCapability_instance;
  }
  function WebSocketCapability() {
  }
  protoOf(WebSocketCapability).toString = function () {
    return 'WebSocketCapability';
  };
  protoOf(WebSocketCapability).hashCode = function () {
    return -1146563391;
  };
  protoOf(WebSocketCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebSocketCapability))
      return false;
    return true;
  };
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    return WebSocketCapability_instance;
  }
  function WebSocketException_init_$Init$(message, $this) {
    WebSocketException.call($this, message, null);
    return $this;
  }
  function WebSocketException_init_$Create$(message) {
    var tmp = WebSocketException_init_$Init$(message, objectCreate(protoOf(WebSocketException)));
    captureStack(tmp, WebSocketException_init_$Create$);
    return tmp;
  }
  function WebSocketException(message, cause) {
    IllegalStateException_init_$Init$_1(message, cause, this);
    captureStack(this, WebSocketException);
  }
  var properties_initialized_WebSockets_kt_2t2hw2;
  function _init_properties_WebSockets_kt__jaqpbo() {
    if (!properties_initialized_WebSockets_kt_2t2hw2) {
      properties_initialized_WebSockets_kt_2t2hw2 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'Websocket extensions';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtList);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(WebSocketExtension), arrayOf([getStarKTypeProjection()]), false))]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      REQUEST_EXTENSIONS_KEY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'Websocket plugin config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(WebSockets);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(WebSockets), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_4;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_4 = null;
        } else {
          throw $p_0;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$2_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$2_0);
      WEBSOCKETS_KEY = new AttributeKey(name_0, tmp$ret$1_0);
      LOGGER_7 = KtorSimpleLogger('io.ktor.client.plugins.websocket.WebSockets');
    }
  }
  function ClientUpgradeContent$content$delegate$lambda() {
    return new ByteChannel();
  }
  function ClientUpgradeContent() {
    NoContent.call(this);
    var tmp = this;
    tmp.w4j_1 = lazy(ClientUpgradeContent$content$delegate$lambda);
  }
  function DefaultHttpRequest(call, data) {
    this.x4j_1 = call;
    this.y4j_1 = data.c3t_1;
    this.z4j_1 = data.b3t_1;
    this.a4k_1 = data.e3t_1;
    this.b4k_1 = data.d3t_1;
    this.c4k_1 = data.g3t_1;
  }
  protoOf(DefaultHttpRequest).s3p = function () {
    return this.x4j_1;
  };
  protoOf(DefaultHttpRequest).l1k = function () {
    return this.s3p().l1k();
  };
  protoOf(DefaultHttpRequest).t3p = function () {
    return this.y4j_1;
  };
  protoOf(DefaultHttpRequest).u3p = function () {
    return this.z4j_1;
  };
  protoOf(DefaultHttpRequest).u18 = function () {
    return this.a4k_1;
  };
  protoOf(DefaultHttpRequest).a2z = function () {
    return this.b4k_1;
  };
  protoOf(DefaultHttpRequest).m3p = function () {
    return this.c4k_1;
  };
  function get_ResponseAdapterAttributeKey() {
    _init_properties_HttpRequest_kt__813lx1();
    return ResponseAdapterAttributeKey;
  }
  var ResponseAdapterAttributeKey;
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_11() {
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    return LinkedHashMap_init_$Create$();
  }
  function HttpRequestBuilder() {
    this.c3o_1 = new URLBuilder();
    this.d3o_1 = Companion_getInstance_2().b2z_1;
    this.e3o_1 = new HeadersBuilder();
    this.f3o_1 = EmptyContent_getInstance();
    this.g3o_1 = SupervisorJob();
    this.h3o_1 = AttributesJsFn(true);
  }
  protoOf(HttpRequestBuilder).a2z = function () {
    return this.e3o_1;
  };
  protoOf(HttpRequestBuilder).x3t = function (value) {
    if (!(value == null)) {
      this.h3o_1.f2k(get_BodyTypeAttributeKey(), value);
    } else {
      this.h3o_1.h2k(get_BodyTypeAttributeKey());
    }
  };
  protoOf(HttpRequestBuilder).d4k = function () {
    return this.h3o_1.d2k(get_BodyTypeAttributeKey());
  };
  protoOf(HttpRequestBuilder).t2u = function () {
    var tmp = this.c3o_1.t2u();
    var tmp_0 = this.d3o_1;
    var tmp_1 = this.e3o_1.t2u();
    var tmp_2 = this.f3o_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'No request transformation found: ' + toString(this.f3o_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.g3o_1, this.h3o_1);
  };
  protoOf(HttpRequestBuilder).w3t = function (builder) {
    this.g3o_1 = builder.g3o_1;
    return this.n4a(builder);
  };
  protoOf(HttpRequestBuilder).n4a = function (builder) {
    this.d3o_1 = builder.d3o_1;
    this.f3o_1 = builder.f3o_1;
    this.x3t(builder.d4k());
    takeFrom_0(this.c3o_1, builder.c3o_1);
    this.c3o_1.l32_1 = this.c3o_1.l32_1;
    appendAll(this.e3o_1, builder.e3o_1);
    putAll(this.h3o_1, builder.h3o_1);
    return this;
  };
  protoOf(HttpRequestBuilder).o4d = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.h3o_1.i2k(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.v2(key, capability);
  };
  protoOf(HttpRequestBuilder).a4e = function (key) {
    var tmp0_safe_receiver = this.h3o_1.d2k(get_ENGINE_CAPABILITIES_KEY());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s2(key);
  };
  function url(_this__u8e3s4, scheme, host, port, path, block) {
    scheme = scheme === VOID ? null : scheme;
    host = host === VOID ? null : host;
    port = port === VOID ? null : port;
    path = path === VOID ? null : path;
    var tmp;
    if (block === VOID) {
      tmp = url$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    _init_properties_HttpRequest_kt__813lx1();
    set(_this__u8e3s4.c3o_1, scheme, host, port, path, block);
  }
  function headers(_this__u8e3s4, block) {
    _init_properties_HttpRequest_kt__813lx1();
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4.a2z();
    block(this_0);
    return this_0;
  }
  function HttpRequest_0() {
  }
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.b3t_1 = url;
    this.c3t_1 = method;
    this.d3t_1 = headers;
    this.e3t_1 = body;
    this.f3t_1 = executionContext;
    this.g3t_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.g3t_1.d2k(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2();
    tmp.h3t_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  protoOf(HttpRequestData).toString = function () {
    return 'HttpRequestData(url=' + this.b3t_1.toString() + ', method=' + this.c3t_1.toString() + ')';
  };
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.g3q_1 = statusCode;
    this.h3q_1 = requestTime;
    this.i3q_1 = headers;
    this.j3q_1 = version;
    this.k3q_1 = body;
    this.l3q_1 = callContext;
    this.m3q_1 = GMTDate();
  }
  protoOf(HttpResponseData).toString = function () {
    return 'HttpResponseData=(statusCode=' + this.g3q_1.toString() + ')';
  };
  function ResponseAdapter() {
  }
  function isUpgradeRequest(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    var tmp = _this__u8e3s4.e3t_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function url$lambda(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    return Unit_instance;
  }
  var properties_initialized_HttpRequest_kt_zh09pz;
  function _init_properties_HttpRequest_kt__813lx1() {
    if (!properties_initialized_HttpRequest_kt_zh09pz) {
      properties_initialized_HttpRequest_kt_zh09pz = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ResponseAdapterAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(ResponseAdapter);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(ResponseAdapter), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      ResponseAdapterAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function Phases() {
    Phases_instance = this;
    this.e3v_1 = new PipelinePhase('Before');
    this.f3v_1 = new PipelinePhase('State');
    this.g3v_1 = new PipelinePhase('Transform');
    this.h3v_1 = new PipelinePhase('Render');
    this.i3v_1 = new PipelinePhase('Send');
  }
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance().e3v_1, Phases_getInstance().f3v_1, Phases_getInstance().g3v_1, Phases_getInstance().h3v_1, Phases_getInstance().i3v_1]);
    this.m4k_1 = developmentMode;
  }
  protoOf(HttpRequestPipeline).u2p = function () {
    return this.m4k_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.k3o_1 = new PipelinePhase('Before');
    this.l3o_1 = new PipelinePhase('State');
    this.m3o_1 = new PipelinePhase('Monitoring');
    this.n3o_1 = new PipelinePhase('Engine');
    this.o3o_1 = new PipelinePhase('Receive');
  }
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_0().k3o_1, Phases_getInstance_0().l3o_1, Phases_getInstance_0().m3o_1, Phases_getInstance_0().n3o_1, Phases_getInstance_0().o3o_1]);
    this.u4k_1 = developmentMode;
  }
  protoOf(HttpSendPipeline).u2p = function () {
    return this.u4k_1;
  };
  function get_BodyTypeAttributeKey() {
    _init_properties_RequestBody_kt__bo3lwf();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function _init_properties_RequestBody_kt__bo3lwf() {
    if (!properties_initialized_RequestBody_kt_agyv1b) {
      properties_initialized_RequestBody_kt_agyv1b = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'BodyTypeAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(TypeInfo);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(TypeInfo), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      BodyTypeAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_RN_BYTES() {
    _init_properties_FormDataContent_kt__7tvkbr();
    return RN_BYTES;
  }
  var RN_BYTES;
  function FormDataContent(formData) {
    ByteArrayContent.call(this);
    this.w4k_1 = formData;
    this.x4k_1 = toByteArray_0(formUrlEncode(this.w4k_1));
    this.y4k_1 = fromInt(this.x4k_1.length);
    this.z4k_1 = withCharset(Application_getInstance().n2s_1, Charsets_getInstance().a2j_1);
  }
  protoOf(FormDataContent).n34 = function () {
    return this.y4k_1;
  };
  protoOf(FormDataContent).m34 = function () {
    return this.z4k_1;
  };
  protoOf(FormDataContent).o34 = function () {
    return this.x4k_1;
  };
  function MultiPartFormDataContent$rawParts$lambda($bytes) {
    return function () {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      var builder = new Buffer();
      writeFully(builder, $bytes);
      return builder;
    };
  }
  function $writeToCOROUTINE$(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i4l_1 = _this__u8e3s4;
    this.j4l_1 = channel;
  }
  protoOf($writeToCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 25;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            this.q8_1 = 21;
            this.q8_1 = 20;
            this.q4l_1 = this.i4l_1.z4l_1.t();
            this.p8_1 = 2;
            continue $sm;
          case 2:
            if (!this.q4l_1.u()) {
              this.p8_1 = 18;
              continue $sm;
            }

            this.p4l_1 = this.q4l_1.v();
            this.p8_1 = 3;
            suspendResult = writeFully_0(this.j4l_1, this.i4l_1.v4l_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.p8_1 = 4;
            suspendResult = writeFully_0(this.j4l_1, this.p4l_1.b4m_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.p8_1 = 5;
            suspendResult = writeFully_0(this.j4l_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp0_subject = this.p4l_1;
            if (tmp0_subject instanceof InputPart) {
              this.o4l_1 = this.p4l_1.i4m_1();
              this.p8_1 = 7;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ChannelPart) {
                this.p8_1 = 6;
                suspendResult = copyTo_0(this.p4l_1.f4m_1(), this.j4l_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_0 = this;
                noWhenBranchMatchedException();
              }
            }

            break;
          case 6:
            this.l4l_1 = suspendResult;
            this.p8_1 = 16;
            continue $sm;
          case 7:
            this.n4l_1 = this.o4l_1;
            this.m4l_1 = null;
            this.p8_1 = 8;
            continue $sm;
          case 8:
            this.p8_1 = 9;
            continue $sm;
          case 9:
            this.q8_1 = 13;
            this.q8_1 = 12;
            var input = this.n4l_1;
            this.p8_1 = 10;
            suspendResult = copyTo_1(input, this.j4l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.p8_1 = 11;
            var tmp_1 = this;
            continue $sm;
          case 11:
            this.q8_1 = 20;
            closeFinally(this.n4l_1, this.m4l_1);
            this.p8_1 = 15;
            continue $sm;
          case 12:
            this.q8_1 = 13;
            var tmp_2 = this.s8_1;
            if (tmp_2 instanceof Error) {
              var e = this.s8_1;
              var tmp_3 = this;
              this.m4l_1 = e;
              throw e;
            } else {
              throw this.s8_1;
            }

          case 13:
            this.q8_1 = 20;
            var t = this.s8_1;
            closeFinally(this.n4l_1, this.m4l_1);
            throw t;
          case 14:
            this.q8_1 = 20;
            closeFinally(this.n4l_1, this.m4l_1);
            if (false) {
              this.p8_1 = 7;
              continue $sm;
            }

            this.p8_1 = 15;
            continue $sm;
          case 15:
            this.l4l_1 = Unit_instance;
            this.p8_1 = 16;
            continue $sm;
          case 16:
            this.p8_1 = 17;
            suspendResult = writeFully_0(this.j4l_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 17:
            this.p8_1 = 2;
            continue $sm;
          case 18:
            this.p8_1 = 19;
            suspendResult = writeFully_0(this.j4l_1, this.i4l_1.w4l_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 19:
            this.q8_1 = 25;
            this.p8_1 = 23;
            continue $sm;
          case 20:
            this.q8_1 = 21;
            var tmp_4 = this.s8_1;
            if (tmp_4 instanceof Error) {
              var cause = this.s8_1;
              close(this.j4l_1, cause);
              this.q8_1 = 25;
              this.p8_1 = 23;
              continue $sm;
            } else {
              throw this.s8_1;
            }

          case 21:
            this.q8_1 = 25;
            this.k4l_1 = this.s8_1;
            this.p8_1 = 22;
            suspendResult = this.j4l_1.c29(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 22:
            throw this.k4l_1;
          case 23:
            this.q8_1 = 25;
            this.p8_1 = 24;
            suspendResult = this.j4l_1.c29(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 24:
            return Unit_instance;
          case 25:
            throw this.s8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.q8_1 === 25) {
          throw e_0;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e_0;
        }
      }
     while (true);
  };
  function MultiPartFormDataContent(parts, boundary, contentType) {
    boundary = boundary === VOID ? generateBoundary() : boundary;
    contentType = contentType === VOID ? MultiPart_getInstance().q2t_1.p2u('boundary', boundary) : contentType;
    WriteChannelContent.call(this);
    this.s4l_1 = parts;
    this.t4l_1 = boundary;
    this.u4l_1 = contentType;
    this.v4l_1 = toByteArray_0('--' + this.t4l_1 + '\r\n');
    this.w4l_1 = toByteArray_0('--' + this.t4l_1 + '--\r\n');
    this.x4l_1 = this.w4l_1.length;
    this.y4l_1 = imul(get_RN_BYTES().length, 2) + this.v4l_1.length | 0;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.s4l_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var headersBuilder = BytePacketBuilder();
      var _iterator__ex2g4s_0 = item.h36_1.g2m().t();
      while (_iterator__ex2g4s_0.u()) {
        var _destruct__k2r9zo = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.m1();
        // Inline function 'kotlin.collections.component2' call
        var values = _destruct__k2r9zo.n1();
        writeText(headersBuilder, key + ': ' + joinToString(values, '; '));
        writeFully(headersBuilder, get_RN_BYTES());
      }
      var tmp0_safe_receiver = item.h36_1.rd('Content-Length');
      var bodySize = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
      var tmp_0;
      if (item instanceof FileItem) {
        var headers = readByteArray(build(headersBuilder));
        var tmp_1;
        if (bodySize == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.Long.plus' call
          var other = this.y4l_1;
          tmp_1 = add(bodySize, fromInt(other));
        }
        var tmp3_safe_receiver = tmp_1;
        var tmp_2;
        if (tmp3_safe_receiver == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.Long.plus' call
          var other_0 = headers.length;
          tmp_2 = add(tmp3_safe_receiver, fromInt(other_0));
        }
        var size = tmp_2;
        tmp_0 = new ChannelPart(headers, item.o4m_1, size);
      } else {
        if (item instanceof BinaryItem) {
          var headers_0 = readByteArray(build(headersBuilder));
          var tmp_3;
          if (bodySize == null) {
            tmp_3 = null;
          } else {
            // Inline function 'kotlin.Long.plus' call
            var other_1 = this.y4l_1;
            tmp_3 = add(bodySize, fromInt(other_1));
          }
          var tmp5_safe_receiver = tmp_3;
          var tmp_4;
          if (tmp5_safe_receiver == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.Long.plus' call
            var other_2 = headers_0.length;
            tmp_4 = add(tmp5_safe_receiver, fromInt(other_2));
          }
          var size_0 = tmp_4;
          tmp_0 = new InputPart(headers_0, item.z35_1, size_0);
        } else {
          if (item instanceof FormItem) {
            // Inline function 'io.ktor.utils.io.core.buildPacket' call
            var builder = new Buffer();
            writeText(builder, item.t35_1);
            var bytes = readByteArray(builder);
            var provider = MultiPartFormDataContent$rawParts$lambda(bytes);
            if (bodySize == null) {
              writeText(headersBuilder, 'Content-Length: ' + bytes.length);
              writeFully(headersBuilder, get_RN_BYTES());
            }
            var headers_1 = readByteArray(build(headersBuilder));
            var size_1 = (bytes.length + this.y4l_1 | 0) + headers_1.length | 0;
            tmp_0 = new InputPart(headers_1, provider, fromInt(size_1));
          } else {
            if (item instanceof BinaryChannelItem) {
              var headers_2 = readByteArray(build(headersBuilder));
              var tmp_5;
              if (bodySize == null) {
                tmp_5 = null;
              } else {
                // Inline function 'kotlin.Long.plus' call
                var other_3 = this.y4l_1;
                tmp_5 = add(bodySize, fromInt(other_3));
              }
              var tmp7_safe_receiver = tmp_5;
              var tmp_6;
              if (tmp7_safe_receiver == null) {
                tmp_6 = null;
              } else {
                // Inline function 'kotlin.Long.plus' call
                var other_4 = headers_2.length;
                tmp_6 = add(tmp7_safe_receiver, fromInt(other_4));
              }
              var size_2 = tmp_6;
              tmp_0 = new ChannelPart(headers_2, item.f36_1, size_2);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      var tmp$ret$2 = tmp_0;
      destination.b1(tmp$ret$2);
    }
    tmp.z4l_1 = destination;
    this.a4m_1 = null;
    var rawLength = 0n;
    var _iterator__ex2g4s_1 = this.z4l_1.t();
    $l$loop: while (_iterator__ex2g4s_1.u()) {
      var part = _iterator__ex2g4s_1.v();
      var size_3 = part.c4m_1;
      if (size_3 == null) {
        rawLength = null;
        break $l$loop;
      }
      var tmp0_safe_receiver_0 = rawLength;
      rawLength = tmp0_safe_receiver_0 == null ? null : add(tmp0_safe_receiver_0, size_3);
    }
    if (!(rawLength == null)) {
      var tmp0 = rawLength;
      // Inline function 'kotlin.Long.plus' call
      var other_5 = this.x4l_1;
      rawLength = add(tmp0, fromInt(other_5));
    }
    this.a4m_1 = rawLength;
  }
  protoOf(MultiPartFormDataContent).m34 = function () {
    return this.u4l_1;
  };
  protoOf(MultiPartFormDataContent).n34 = function () {
    return this.a4m_1;
  };
  protoOf(MultiPartFormDataContent).o36 = function (channel, $completion) {
    var tmp = new $writeToCOROUTINE$(this, channel, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  function generateBoundary() {
    _init_properties_FormDataContent_kt__7tvkbr();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_0.q(toString_1(Default_getInstance().lg(), 16));
      }
       while (inductionVariable < 32);
    var tmp$ret$0 = this_0.toString();
    return take(tmp$ret$0, 70);
  }
  function InputPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.i4m_1 = provider;
  }
  function ChannelPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.f4m_1 = provider;
  }
  function PreparedPart(headers, size) {
    this.b4m_1 = headers;
    this.c4m_1 = size;
  }
  function copyTo_1(_this__u8e3s4, channel, $completion) {
    return writePacket(channel, _this__u8e3s4, $completion);
  }
  var properties_initialized_FormDataContent_kt_w3e0rf;
  function _init_properties_FormDataContent_kt__7tvkbr() {
    if (!properties_initialized_FormDataContent_kt_w3e0rf) {
      properties_initialized_FormDataContent_kt_w3e0rf = true;
      RN_BYTES = toByteArray_0('\r\n');
    }
  }
  function FormBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p4m_1 = ArrayList_init_$Create$();
  }
  protoOf(FormBuilder).q4m = function (key, value, headers) {
    var tmp0 = this.p4m_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.b1(element);
  };
  protoOf(FormBuilder).r4m = function (key, value, headers, $super) {
    headers = headers === VOID ? Companion_getInstance_5().v2y_1 : headers;
    var tmp;
    if ($super === VOID) {
      this.q4m(key, value, headers);
      tmp = Unit_instance;
    } else {
      tmp = $super.q4m.call(this, key, value, headers);
    }
    return tmp;
  };
  protoOf(FormBuilder).s4m = function (key, value, headers) {
    var tmp0 = this.p4m_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.b1(element);
  };
  protoOf(FormBuilder).t4m = function () {
    return this.p4m_1;
  };
  function formData(values) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = values.length;
    while (inductionVariable < last) {
      var element = values[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = element.jg();
      var value = element.kg();
      var headers = element.x4m();
      // Inline function 'kotlin.apply' call
      var this_0 = new HeadersBuilder();
      this_0.q2m('Content-Disposition', 'form-data; name=' + quoteForMultipart(key));
      this_0.r2m(headers);
      var partHeaders = this_0;
      var tmp;
      if (typeof value === 'string') {
        tmp = new FormItem(value, formData$lambda, partHeaders.t2u());
      } else {
        if (isNumber(value)) {
          var tmp_0 = toString(value);
          tmp = new FormItem(tmp_0, formData$lambda_0, partHeaders.t2u());
        } else {
          if (typeof value === 'boolean') {
            var tmp_1 = value.toString();
            tmp = new FormItem(tmp_1, formData$lambda_1, partHeaders.t2u());
          } else {
            if (isByteArray(value)) {
              partHeaders.q2m('Content-Length', value.length.toString());
              var tmp_2 = formData$lambda_2(value);
              tmp = new BinaryItem(tmp_2, formData$lambda_3, partHeaders.t2u());
            } else {
              if (isInterface(value, Source)) {
                if (value instanceof Buffer) {
                  partHeaders.q2m('Content-Length', get_remaining(value).toString());
                }
                var tmp_3 = formData$lambda_4(value);
                tmp = new BinaryItem(tmp_3, formData$lambda_5(value), partHeaders.t2u());
              } else {
                if (value instanceof InputProvider) {
                  var size = value.a4n_1;
                  if (!(size == null)) {
                    partHeaders.q2m('Content-Length', size.toString());
                  }
                  tmp = new BinaryItem(value.b4n_1, formData$lambda_6, partHeaders.t2u());
                } else {
                  if (value instanceof ChannelProvider) {
                    var size_0 = value.y4m_1;
                    if (!(size_0 == null)) {
                      partHeaders.q2m('Content-Length', size_0.toString());
                    }
                    tmp = new BinaryChannelItem(value.z4m_1, partHeaders.t2u());
                  } else {
                    // Inline function 'kotlin.error' call
                    var message = 'Unknown form content type: ' + toString(value);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
      var part = tmp;
      // Inline function 'kotlin.collections.plusAssign' call
      result.b1(part);
    }
    return result;
  }
  function FormPart(key, value, headers) {
    headers = headers === VOID ? Companion_getInstance_5().v2y_1 : headers;
    this.u4m_1 = key;
    this.v4m_1 = value;
    this.w4m_1 = headers;
  }
  protoOf(FormPart).jg = function () {
    return this.u4m_1;
  };
  protoOf(FormPart).kg = function () {
    return this.v4m_1;
  };
  protoOf(FormPart).x4m = function () {
    return this.w4m_1;
  };
  protoOf(FormPart).toString = function () {
    return 'FormPart(key=' + this.u4m_1 + ', value=' + toString(this.v4m_1) + ', headers=' + toString(this.w4m_1) + ')';
  };
  protoOf(FormPart).hashCode = function () {
    var result = getStringHashCode(this.u4m_1);
    result = imul(result, 31) + hashCode(this.v4m_1) | 0;
    result = imul(result, 31) + hashCode(this.w4m_1) | 0;
    return result;
  };
  protoOf(FormPart).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FormPart))
      return false;
    if (!(this.u4m_1 === other.u4m_1))
      return false;
    if (!equals(this.v4m_1, other.v4m_1))
      return false;
    if (!equals(this.w4m_1, other.w4m_1))
      return false;
    return true;
  };
  function InputProvider() {
  }
  function ChannelProvider() {
  }
  function quoteForMultipart(_this__u8e3s4) {
    return isQuoted(_this__u8e3s4) ? _this__u8e3s4 : quote(_this__u8e3s4);
  }
  function formData$lambda() {
    return Unit_instance;
  }
  function formData$lambda_0() {
    return Unit_instance;
  }
  function formData$lambda_1() {
    return Unit_instance;
  }
  function formData$lambda_2($value) {
    return function () {
      return ByteReadPacket($value);
    };
  }
  function formData$lambda_3() {
    return Unit_instance;
  }
  function formData$lambda_4($value) {
    return function () {
      return $value.e1i();
    };
  }
  function formData$lambda_5($value) {
    return function () {
      $value.f4();
      return Unit_instance;
    };
  }
  function formData$lambda_6() {
    return Unit_instance;
  }
  function header(_this__u8e3s4, key, value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      _this__u8e3s4.a2z().q2m(key, toString(value));
      tmp = Unit_instance;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? Unit_instance : tmp1_elvis_lhs;
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.c4n_1 = call;
    this.d4n_1 = responseData.l3q_1;
    this.e4n_1 = responseData.g3q_1;
    this.f4n_1 = responseData.j3q_1;
    this.g4n_1 = responseData.h3q_1;
    this.h4n_1 = responseData.m3q_1;
    var tmp = this;
    var tmp_0 = responseData.k3q_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.i4n_1 = tmp0_elvis_lhs == null ? Companion_getInstance().z2a_1 : tmp0_elvis_lhs;
    this.j4n_1 = responseData.i3q_1;
  }
  protoOf(DefaultHttpResponse).s3p = function () {
    return this.c4n_1;
  };
  protoOf(DefaultHttpResponse).l1k = function () {
    return this.d4n_1;
  };
  protoOf(DefaultHttpResponse).b3q = function () {
    return this.e4n_1;
  };
  protoOf(DefaultHttpResponse).c3q = function () {
    return this.f4n_1;
  };
  protoOf(DefaultHttpResponse).d3q = function () {
    return this.g4n_1;
  };
  protoOf(DefaultHttpResponse).e3q = function () {
    return this.h4n_1;
  };
  protoOf(DefaultHttpResponse).a3q = function () {
    return this.i4n_1;
  };
  protoOf(DefaultHttpResponse).a2z = function () {
    return this.j4n_1;
  };
  function HttpResponse() {
  }
  protoOf(HttpResponse).toString = function () {
    return 'HttpResponse[' + get_request(this).u3p().toString() + ', ' + this.b3q().toString() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.s3p().l3p();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $completion) {
    fallbackCharset = fallbackCharset === VOID ? Charsets_getInstance().a2j_1 : fallbackCharset;
    var tmp = new $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s4n_1 = _this__u8e3s4;
    this.t4n_1 = fallbackCharset;
  }
  protoOf($bodyAsTextCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            var tmp0_elvis_lhs = charset_0(this.s4n_1);
            var originCharset = tmp0_elvis_lhs == null ? this.t4n_1 : tmp0_elvis_lhs;
            this.u4n_1 = originCharset.e2j();
            var this_0 = this.s4n_1;
            this.p8_1 = 1;
            var tmp_0 = this_0.s3p();
            var tmp_1 = getKClass(Source);
            var tmp_2;
            try {
              tmp_2 = createKType(getKClass(Source), arrayOf([]), false);
            } catch ($p) {
              var tmp_3;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_3 = null;
              } else {
                throw $p;
              }
              tmp_2 = tmp_3;
            }

            suspendResult = tmp_0.p3p(new TypeInfo(tmp_1, tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = (!(suspendResult == null) ? isInterface(suspendResult, Source) : false) ? suspendResult : THROW_CCE();
            return decode(this.u4n_1, input);
          case 2:
            throw this.s8_1;
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.q8_1 === 2) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function Phases_1() {
    Phases_instance_1 = this;
    this.a3p_1 = new PipelinePhase('Receive');
    this.b3p_1 = new PipelinePhase('Parse');
    this.c3p_1 = new PipelinePhase('Transform');
    this.d3p_1 = new PipelinePhase('State');
    this.e3p_1 = new PipelinePhase('After');
  }
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_1();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_1().a3p_1, Phases_getInstance_1().b3p_1, Phases_getInstance_1().c3p_1, Phases_getInstance_1().d3p_1, Phases_getInstance_1().e3p_1]);
    this.c4o_1 = developmentMode;
  }
  protoOf(HttpResponsePipeline).u2p = function () {
    return this.c4o_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.y3v_1 = new PipelinePhase('Before');
    this.z3v_1 = new PipelinePhase('State');
    this.a3w_1 = new PipelinePhase('After');
  }
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_2();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_2().y3v_1, Phases_getInstance_2().z3v_1, Phases_getInstance_2().a3w_1]);
    this.k4o_1 = developmentMode;
  }
  protoOf(HttpReceivePipeline).u2p = function () {
    return this.k4o_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.y3q_1 = expectedType;
    this.z3q_1 = response;
  }
  protoOf(HttpResponseContainer).jg = function () {
    return this.y3q_1;
  };
  protoOf(HttpResponseContainer).kg = function () {
    return this.z3q_1;
  };
  protoOf(HttpResponseContainer).toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.y3q_1.toString() + ', response=' + toString(this.z3q_1) + ')';
  };
  protoOf(HttpResponseContainer).hashCode = function () {
    var result = this.y3q_1.hashCode();
    result = imul(result, 31) + hashCode(this.z3q_1) | 0;
    return result;
  };
  protoOf(HttpResponseContainer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    if (!this.y3q_1.equals(other.y3q_1))
      return false;
    if (!equals(this.z3q_1, other.z3q_1))
      return false;
    return true;
  };
  function $fetchResponseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t4o_1 = _this__u8e3s4;
  }
  protoOf($fetchResponseCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 7;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            this.q8_1 = 6;
            var builder = (new HttpRequestBuilder()).w3t(this.t4o_1.x4o_1);
            this.p8_1 = 2;
            suspendResult = this.t4o_1.y4o_1.f3p(builder, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w4o_1 = suspendResult;
            this.p8_1 = 3;
            suspendResult = save(this.w4o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.v4o_1 = suspendResult.c3n();
            this.p8_1 = 4;
            suspendResult = this.t4o_1.z4o(this.w4o_1.c3n(), null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_0 = this;
            return this.v4o_1;
          case 5:
            return this.u4o_1;
          case 6:
            this.q8_1 = 7;
            var tmp_1 = this.s8_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.s8_1;
              throw unwrapCancellationException(cause);
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
  function $cleanupCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, cause, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i4p_1 = _this__u8e3s4;
    this.j4p_1 = _this__u8e3s4_0;
    this.k4p_1 = cause;
  }
  protoOf($cleanupCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            var tmp_0 = get_job(this.j4p_1.l1k());
            var job = isInterface(tmp_0, CompletableJob) ? tmp_0 : THROW_CCE();
            this.l4p_1 = job;
            var $this$apply = this.l4p_1;
            var tmp0_subject = this.k4p_1;
            if (tmp0_subject == null)
              $this$apply.e1r();
            else {
              if (tmp0_subject instanceof CancellationException) {
                $this$apply.u1l(this.k4p_1);
              } else {
                $this$apply.u1l(CancellationException_init_$Create$('Exception occurred during request execution', this.k4p_1));
              }
            }

            if (!get_isSaved(this.j4p_1)) {
              try {
                cancel_1(this.j4p_1.a3q());
              } catch ($p) {
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                } else {
                  throw $p;
                }
              }
            }

            this.p8_1 = 1;
            suspendResult = $this$apply.r1l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.s8_1;
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.q8_1 === 2) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  function HttpStatement(builder, client) {
    this.x4o_1 = builder;
    this.y4o_1 = client;
  }
  protoOf(HttpStatement).m4p = function ($completion) {
    return this.n4p($completion);
  };
  protoOf(HttpStatement).n4p = function ($completion) {
    var tmp = new $fetchResponseCOROUTINE$(this, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpStatement).z4o = function (_this__u8e3s4, cause, $completion) {
    var tmp = new $cleanupCOROUTINE$(this, _this__u8e3s4, cause, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(HttpStatement).toString = function () {
    return 'HttpStatement[' + this.x4o_1.c3o_1.toString() + ']';
  };
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_instance;
    return writer(tmp, context, true, observable$slambda_0(_this__u8e3s4, listener, contentLength, null)).v2a_1;
  }
  function observable$slambda($this_observable, $listener, $contentLength, resultContinuation) {
    this.w4p_1 = $this_observable;
    this.x4p_1 = $listener;
    this.y4p_1 = $contentLength;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observable$slambda).o3b = function ($this$writer, $completion) {
    var tmp = this.p3b($this$writer, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(observable$slambda).k9 = function (p1, $completion) {
    return this.o3b(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observable$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 16;
            this.f4q_1 = get_ByteArrayPool();
            this.p8_1 = 1;
            continue $sm;
          case 1:
            this.b4q_1 = this.f4q_1;
            this.a4q_1 = this.b4q_1.p2j();
            this.p8_1 = 2;
            continue $sm;
          case 2:
            this.p8_1 = 3;
            continue $sm;
          case 3:
            this.q8_1 = 15;
            this.e4q_1 = this.a4q_1;
            this.c4q_1 = 0n;
            this.p8_1 = 4;
            continue $sm;
          case 4:
            if (!!this.w4p_1.z28()) {
              this.p8_1 = 9;
              continue $sm;
            }

            this.p8_1 = 5;
            suspendResult = readAvailable(this.w4p_1, this.e4q_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.d4q_1 = suspendResult;
            if (this.d4q_1 <= 0) {
              this.p8_1 = 4;
              continue $sm;
            } else {
              this.p8_1 = 6;
              continue $sm;
            }

          case 6:
            this.p8_1 = 7;
            suspendResult = writeFully_0(this.z4p_1.w2g_1, this.e4q_1, 0, this.d4q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var tmp_0 = this;
            var tmp0 = this.c4q_1;
            var other = this.d4q_1;
            tmp_0.c4q_1 = add(tmp0, fromInt(other));
            this.p8_1 = 8;
            suspendResult = this.x4p_1.c3s(this.c4q_1, this.y4p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.p8_1 = 4;
            continue $sm;
          case 9:
            var closedCause = this.w4p_1.y28();
            close(this.z4p_1.w2g_1, closedCause);
            if (closedCause == null && this.c4q_1 === 0n) {
              this.p8_1 = 10;
              suspendResult = this.x4p_1.c3s(this.c4q_1, this.y4p_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.p8_1 = 11;
              continue $sm;
            }

          case 10:
            this.p8_1 = 11;
            continue $sm;
          case 11:
            this.q8_1 = 16;
            this.p8_1 = 12;
            var tmp_1 = this;
            continue $sm;
          case 12:
            this.q8_1 = 16;
            this.b4q_1.q2j(this.a4q_1);
            this.p8_1 = 14;
            continue $sm;
          case 13:
            this.q8_1 = 16;
            this.b4q_1.q2j(this.a4q_1);
            if (false) {
              this.p8_1 = 1;
              continue $sm;
            }

            this.p8_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            this.q8_1 = 16;
            var t = this.s8_1;
            this.b4q_1.q2j(this.a4q_1);
            throw t;
          case 16:
            throw this.s8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.q8_1 === 16) {
          throw e;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e;
        }
      }
     while (true);
  };
  protoOf(observable$slambda).p3b = function ($this$writer, completion) {
    var i = new observable$slambda(this.w4p_1, this.x4p_1, this.y4p_1, completion);
    i.z4p_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($this_observable, $listener, $contentLength, resultContinuation) {
    var i = new observable$slambda($this_observable, $listener, $contentLength, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.o3b($this$writer, $completion);
    }, 1);
  }
  function get_HttpRequestCreated() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.g4q_1 = response;
    this.h4q_1 = cause;
  }
  var properties_initialized_ClientEvents_kt_rdee4m;
  function _init_properties_ClientEvents_kt__xuvbz8() {
    if (!properties_initialized_ClientEvents_kt_rdee4m) {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.j4q_1 = 0n;
  }
  protoOf(EmptyContent).n34 = function () {
    return this.j4q_1;
  };
  protoOf(EmptyContent).toString = function () {
    return 'EmptyContent';
  };
  protoOf(EmptyContent).hashCode = function () {
    return 1450860306;
  };
  protoOf(EmptyContent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EmptyContent))
      return false;
    return true;
  };
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function get_DecompressionListAttribute() {
    _init_properties_HeadersUtils_kt__fb6dxx();
    return DecompressionListAttribute;
  }
  var DecompressionListAttribute;
  function dropCompressionHeaders(_this__u8e3s4, method, attributes, alwaysRemove) {
    alwaysRemove = alwaysRemove === VOID ? false : alwaysRemove;
    _init_properties_HeadersUtils_kt__fb6dxx();
    if (method.equals(Companion_getInstance_2().g2z_1) || method.equals(Companion_getInstance_2().h2z_1))
      return Unit_instance;
    var header = _this__u8e3s4.rd('Content-Encoding');
    if (header == null) {
      if (!alwaysRemove)
        return Unit_instance;
    } else {
      var tmp = get_DecompressionListAttribute();
      attributes.i2k(tmp, dropCompressionHeaders$lambda).b1(header);
    }
    _this__u8e3s4.t2m('Content-Encoding');
    _this__u8e3s4.t2m('Content-Length');
  }
  function dropCompressionHeaders$lambda() {
    _init_properties_HeadersUtils_kt__fb6dxx();
    // Inline function 'kotlin.collections.mutableListOf' call
    return ArrayList_init_$Create$();
  }
  var properties_initialized_HeadersUtils_kt_8c3zal;
  function _init_properties_HeadersUtils_kt__fb6dxx() {
    if (!properties_initialized_HeadersUtils_kt_8c3zal) {
      properties_initialized_HeadersUtils_kt_8c3zal = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'DecompressionListAttribute';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtMutableList);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtMutableList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().wb(), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      DecompressionListAttribute = new AttributeKey(name, tmp$ret$1);
    }
  }
  function buildHeaders(block) {
    var tmp;
    if (block === VOID) {
      tmp = buildHeaders$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HeadersBuilder();
    block(this_0);
    return this_0.t2u();
  }
  function buildHeaders$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'FetchOptions';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(FetchOptions);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(FetchOptions), arrayOf([]), false);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_2 = null;
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.k4q_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_4;
  function Companion_getInstance_12() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function FetchOptions(requestInit) {
    Companion_getInstance_12();
    this.l4q_1 = requestInit;
  }
  function get_initHook() {
    return initHook;
  }
  var initHook;
  function Js() {
  }
  protoOf(Js).m4q = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new JsClientEngineConfig();
    block(this_0);
    return new JsClientEngine(this_0);
  };
  protoOf(Js).g3p = function (block) {
    return this.m4q(block);
  };
  protoOf(Js).toString = function () {
    return 'Js';
  };
  protoOf(Js).hashCode = function () {
    return -527824213;
  };
  protoOf(Js).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Js))
      return false;
    return true;
  };
  var Js_instance;
  function Js_getInstance() {
    return Js_instance;
  }
  function JsClientEngineConfig$requestInit$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function JsClientEngineConfig() {
    HttpClientEngineConfig.call(this);
    var tmp = this;
    tmp.r4q_1 = JsClientEngineConfig$requestInit$lambda;
    this.s4q_1 = Object.create(null);
  }
  function initHook$init$() {
    engines_getInstance().u4q(Js_instance);
    return Unit_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers, $completion) {
    var tmp = new $createWebSocketCOROUTINE$($this, urlString_capturingHack, headers, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function executeWebSocketRequest($this, request, callContext, $completion) {
    var tmp = new $executeWebSocketRequestCOROUTINE$($this, request, callContext, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function JsClientEngine$execute$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString(values, ',');
      return Unit_instance;
    };
  }
  function $executeCOROUTINE$_1(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h4s_1 = _this__u8e3s4;
    this.i4s_1 = data;
  }
  protoOf($executeCOROUTINE$_1).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 6;
            this.p8_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j4s_1 = suspendResult;
            this.l4s_1 = this.i4s_1.g3t_1.c2k(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.i4s_1)) {
              this.p8_1 = 5;
              suspendResult = executeWebSocketRequest(this.h4s_1, this.i4s_1, this.j4s_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.p8_1 = 2;
              continue $sm;
            }

          case 2:
            this.k4s_1 = GMTDate();
            this.p8_1 = 3;
            suspendResult = ktor_toRaw(this.i4s_1, this.l4s_1, this.j4s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rawRequest = suspendResult;
            var tmp0_safe_receiver = this.i4s_1.g3t_1.d2k(Companion_getInstance_12().k4q_1);
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l4q_1;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              tmp_0 = JsClientEngine$execute$lambda;
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var fetchOptions = tmp_0;
            this.p8_1 = 4;
            suspendResult = commonFetch(this.i4s_1.b3t_1.toString(), rawRequest, fetchOptions, this.h4s_1.r4s_1, get_job(this.j4s_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers, this.i4s_1.c3t_1, this.i4s_1.g3t_1);
            var version = Companion_getInstance_6().o2z_1;
            var body = readBody(CoroutineScope_0(this.j4s_1), rawResponse);
            var tmp2_safe_receiver = this.i4s_1.g3t_1.d2k(get_ResponseAdapterAttributeKey());
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.e4k(this.i4s_1, status, headers, body, this.i4s_1.e3t_1, this.j4s_1);
            var responseBody = tmp3_elvis_lhs == null ? body : tmp3_elvis_lhs;
            return new HttpResponseData(status, this.k4s_1, headers, version, responseBody, this.j4s_1);
          case 5:
            return suspendResult;
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
  function $createWebSocketCOROUTINE$(_this__u8e3s4, urlString_capturingHack, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d4r_1 = _this__u8e3s4;
    this.e4r_1 = urlString_capturingHack;
    this.f4r_1 = headers;
  }
  protoOf($createWebSocketCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 3;
            var tmp0 = this.f4r_1.n2m();
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.t();
            while (_iterator__ex2g4s.u()) {
              var element = _iterator__ex2g4s.v();
              if (equals_0(element, 'Sec-WebSocket-Protocol', true)) {
                destination.b1(element);
              }
            }

            var protocolHeaderNames = destination;
            var tmp_0 = this;
            var destination_0 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_0 = protocolHeaderNames.t();
            while (_iterator__ex2g4s_0.u()) {
              var element_0 = _iterator__ex2g4s_0.v();
              var tmp0_safe_receiver = this.f4r_1.m2m(element_0);
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination_0.b1(tmp0_safe_receiver);
              }
            }

            var this_0 = flatten(destination_0);
            tmp_0.h4r_1 = copyToArray(this_0);
            if (PlatformUtils_getInstance().y2l_1) {
              this.g4r_1 = new WebSocket(this.e4r_1, this.h4r_1);
              this.p8_1 = 2;
              continue $sm;
            } else {
              var ws_import = import('ws');
              this.p8_1 = 1;
              suspendResult = await_0(ws_import, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ws_capturingHack = suspendResult.default;
            var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
            this.f4r_1.s2m(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
            this.g4r_1 = new ws_capturingHack(this.e4r_1, this.h4r_1, {headers: headers_capturingHack});
            this.p8_1 = 2;
            continue $sm;
          case 2:
            return this.g4r_1;
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
  function $executeWebSocketRequestCOROUTINE$(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q4r_1 = _this__u8e3s4;
    this.r4r_1 = request;
    this.s4r_1 = callContext;
  }
  protoOf($executeWebSocketRequestCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 5;
            this.u4r_1 = GMTDate();
            this.x4r_1 = this.r4r_1.b3t_1.toString();
            this.y4r_1 = this.r4r_1.g3t_1.c2k(get_WEBSOCKETS_KEY());
            this.p8_1 = 1;
            suspendResult = createWebSocket(this.q4r_1, this.x4r_1, this.r4r_1.d3t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v4r_1 = suspendResult;
            this.t4r_1 = new JsWebSocketSession(this.s4r_1, this.v4r_1, this.y4r_1.l4j_1);
            this.q8_1 = 3;
            this.p8_1 = 2;
            suspendResult = awaitConnection(this.v4r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w4r_1 = suspendResult;
            this.q8_1 = 5;
            this.p8_1 = 4;
            continue $sm;
          case 3:
            this.q8_1 = 5;
            var tmp_0 = this.s8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.s8_1;
              var tmp_1 = this;
              cancel_3(this.s4r_1, CancellationException_0('Failed to connect to ' + this.x4r_1, cause));
              throw cause;
            } else {
              throw this.s8_1;
            }

          case 4:
            this.q8_1 = 5;
            var this_0 = this.v4r_1.protocol;
            var tmp_2;
            if (charSequenceLength(this_0) > 0) {
              tmp_2 = this_0;
            } else {
              tmp_2 = null;
            }

            var protocol = tmp_2;
            var headers = !(protocol == null) ? headersOf('Sec-WebSocket-Protocol', protocol) : Companion_getInstance_5().v2y_1;
            return new HttpResponseData(Companion_getInstance_1().w2z_1, this.u4r_1, headers, Companion_getInstance_6().o2z_1, this.t4r_1, this.s4r_1);
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
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.r4s_1 = config;
    this.s4s_1 = setOf_0([HttpTimeoutCapability_instance, WebSocketCapability_instance, SSECapability_instance]);
    // Inline function 'kotlin.check' call
    if (!(this.r4s_1.o3u_1 == null)) {
      var message = 'Proxy unsupported in Js engine.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(JsClientEngine).i3o = function () {
    return this.r4s_1;
  };
  protoOf(JsClientEngine).i3t = function () {
    return this.s4s_1;
  };
  protoOf(JsClientEngine).k3u = function (data, $completion) {
    var tmp = new $executeCOROUTINE$_1(this, data, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  function mapToKtor(_this__u8e3s4, method, attributes) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4, method, attributes));
  }
  function awaitConnection(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.a1p();
    $l$block: {
      if (cancellable.h1l()) {
        break $l$block;
      }
      // Inline function 'io.ktor.client.utils.addEventListener' call
      var events = ['error'];
      var events_0 = listOf(arrayConcat([['open'], events]));
      var callback = {_v: null};
      var tmp = awaitConnection$lambda(events_0, _this__u8e3s4, callback);
      var disposable = new sam$kotlinx_coroutines_DisposableHandle$0(tmp);
      callback._v = awaitConnection$lambda_0(true, disposable, cancellable, _this__u8e3s4);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = events_0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var tmp_0;
        if (callback._v == null) {
          throwUninitializedPropertyAccessException('callback');
        } else {
          tmp_0 = callback._v;
        }
        _this__u8e3s4.addEventListener(element, tmp_0);
      }
      var disposable_0 = disposable;
      cancellable.l1n(awaitConnection$lambda_1(disposable_0, _this__u8e3s4));
    }
    return cancellable.i1p();
  }
  function sam$kotlinx_coroutines_DisposableHandle$0(function_0) {
    this.t4s_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).x1n = function () {
    return this.t4s_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).i3 = function () {
    return this.t4s_1;
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
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.q2m(key, value);
      return Unit_instance;
    };
  }
  function mapToKtor$lambda($this_mapToKtor, $method, $attributes) {
    return function ($this$buildHeaders) {
      // Inline function 'kotlin.js.asDynamic' call
      $this_mapToKtor.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      dropCompressionHeaders($this$buildHeaders, $method, $attributes, PlatformUtils_getInstance().y2l_1);
      return Unit_instance;
    };
  }
  function awaitConnection$lambda($events, $this, $callback) {
    return function () {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $events.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var tmp;
        if ($callback._v == null) {
          throwUninitializedPropertyAccessException('callback');
        } else {
          tmp = $callback._v;
        }
        $this.removeEventListener(element, tmp);
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_0($once, $disposable, $continuation, $this_awaitConnection) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      if ($once) {
        $disposable.x1n();
      }
      var tmp0_subject = event.type;
      if (tmp0_subject === 'open') {
        var tmp0 = $continuation;
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value = $this_awaitConnection;
        var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
        tmp0.a9(tmp$ret$5);
      } else if (tmp0_subject === 'error') {
        var tmp0_0 = $continuation;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = WebSocketException_init_$Create$(asString(event));
        var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(exception));
        tmp0_0.a9(tmp$ret$7);
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_1($disposable, $this_awaitConnection) {
    return function (cause) {
      $disposable.x1n();
      var tmp;
      if (!(cause == null)) {
        $this_awaitConnection.close();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function asByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().z2a_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer(_this__u8e3s4, VOID, VOID, channelFromStream$slambda_0(stream, null)).v2a_1;
  }
  function readChunk(_this__u8e3s4, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(safe));
    tmp_0.catch(readChunk$lambda_0(safe));
    return safe.h9();
  }
  function channelFromStream$slambda$lambda(it) {
    return Unit_instance;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.c4t_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(channelFromStream$slambda).o3b = function ($this$writer, $completion) {
    var tmp = this.p3b($this$writer, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(channelFromStream$slambda).k9 = function (p1, $completion) {
    return this.o3b(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(channelFromStream$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 9;
            this.f4t_1 = this.c4t_1.getReader();
            this.q8_1 = 7;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.p8_1 = 6;
              continue $sm;
            }

            this.p8_1 = 2;
            suspendResult = readChunk(this.f4t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            if (tmp0_elvis_lhs == null) {
              this.p8_1 = 6;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.g4t_1 = tmp0_elvis_lhs;
              this.p8_1 = 3;
              continue $sm;
            }

          case 3:
            var chunk = this.g4t_1;
            this.p8_1 = 4;
            suspendResult = writeFully_0(this.d4t_1.w2g_1, asByteArray(chunk), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.p8_1 = 5;
            suspendResult = this.d4t_1.w2g_1.t28(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.p8_1 = 1;
            continue $sm;
          case 6:
            this.q8_1 = 9;
            this.p8_1 = 10;
            continue $sm;
          case 7:
            this.q8_1 = 9;
            var tmp_1 = this.s8_1;
            if (tmp_1 instanceof Error) {
              this.e4t_1 = this.s8_1;
              this.p8_1 = 8;
              var tmp_2 = this.f4t_1.cancel(this.e4t_1);
              suspendResult = await_0(tmp_2.catch(channelFromStream$slambda$lambda), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.s8_1;
            }

          case 8:
            throw this.e4t_1;
          case 9:
            throw this.s8_1;
          case 10:
            this.q8_1 = 9;
            return Unit_instance;
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
  protoOf(channelFromStream$slambda).p3b = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.c4t_1, completion);
    i.d4t_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.o3b($this$writer, $completion);
    }, 1);
  }
  function readChunk$lambda($continuation) {
    return function (it) {
      var chunk = it.value;
      var result = it.done ? null : chunk;
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(result);
      this_0.a9(tmp$ret$1);
      return Unit_instance;
    };
  }
  function readChunk$lambda_0($continuation) {
    return function (cause) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
      this_0.a9(tmp$ret$1);
      return Unit_instance;
    };
  }
  function commonFetch(input, init, requestConfig, config, callJob, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.a1p();
    var controller = AbortController_0();
    init.signal = controller.signal;
    config.r4q_1(init);
    requestConfig(init);
    callJob.p1l(true, VOID, commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().y2l_1) {
      tmp = fetch(input, init);
    } else {
      var options = Object.assign(Object.create(null), init, config.s4q_1);
      tmp = fetch(input, options);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda_0(cancellable);
    promise.then(tmp_0, commonFetch$lambda_1(cancellable));
    return cancellable.i1p();
  }
  function readBody(_this__u8e3s4, response) {
    return readBodyBrowser(_this__u8e3s4, response);
  }
  function AbortController_0() {
    return new AbortController();
  }
  function commonFetch$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_instance;
    };
  }
  function commonFetch$lambda_0($continuation) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(it);
      this_0.a9(tmp$ret$1);
      return Unit_instance;
    };
  }
  function commonFetch$lambda_1($continuation) {
    return function (it) {
      var tmp0 = $continuation;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = Error_init_$Create$('Fail to fetch', it);
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.a9(tmp$ret$1);
      return Unit_instance;
    };
  }
  function isReservedStatusCode($this, $receiver) {
    // Inline function 'kotlin.let' call
    var resolved = Companion_getInstance_7().e3d($receiver);
    return resolved == null || equals(resolved, Codes_CLOSED_ABNORMALLY_getInstance());
  }
  function sam$kotlinx_coroutines_DisposableHandle$0_0(function_0) {
    this.h4t_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).x1n = function () {
    return this.h4t_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).i3 = function () {
    return this.h4t_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).equals = function (other) {
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
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).hashCode = function () {
    return hashCode(this.i3());
  };
  function JsWebSocketSession$lambda(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = new Int8Array(data);
        tmp = Binary_init_$Create$(true, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0.k4t_1.d1r(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.l4t_1.l21(frame);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_0($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cause = WebSocketException_init_$Create$(asString(event));
      this$0.k4t_1.d1r(cause);
      this$0.l4t_1.p21(cause);
      this$0.m4t_1.t21();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_2($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_3(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var reason = new CloseReason(event.code, event.reason);
      this$0.k4t_1.c1r(reason);
      this$0.l4t_1.l21(Close_init_$Create$(reason));
      this$0.l4t_1.r21();
      this$0.m4t_1.t21();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_4($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda$lambda($cause, this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      if ($cause == null) {
        this$0.j4t_1.close();
      } else {
        this$0.j4t_1.close(Codes_NORMAL_getInstance().b3d_1, 'Client failed');
      }
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda$lambda_0($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_5(this$0, $onMessage, $onError) {
    return function (cause) {
      var tmp0 = this$0;
      $l$block: {
        // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.runWhenOpen' call
        if (tmp0.j4t_1.readyState === WebSocket.OPEN) {
          if (cause == null) {
            this$0.j4t_1.close();
          } else {
            this$0.j4t_1.close(Codes_NORMAL_getInstance().b3d_1, 'Client failed');
          }
          break $l$block;
        }
        // Inline function 'io.ktor.client.utils.addEventListener' call
        var this_0 = tmp0.j4t_1;
        var callback = JsWebSocketSession$lambda$lambda(cause, this$0);
        // Inline function 'org.w3c.dom.AddEventListenerOptions' call
        var o = {};
        o['passive'] = false;
        o['once'] = true;
        o['capture'] = false;
        var options = (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
        this_0.addEventListener('open', callback, options);
        var tmp = JsWebSocketSession$lambda$lambda_0(this_0, 'open', callback);
        new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp);
      }
      $onMessage.x1n();
      $onError.x1n();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.y4t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsWebSocketSession$slambda).a2i = function ($this$launch, $completion) {
    var tmp = this.b2i($this$launch, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(JsWebSocketSession$slambda).k9 = function (p1, $completion) {
    return this.a2i((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JsWebSocketSession$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 10;
            this.d4u_1 = this.y4t_1.m4t_1;
            this.p8_1 = 1;
            continue $sm;
          case 1:
            this.b4u_1 = this.d4u_1;
            this.a4u_1 = null;
            this.p8_1 = 2;
            continue $sm;
          case 2:
            this.p8_1 = 3;
            continue $sm;
          case 3:
            this.q8_1 = 9;
            this.q8_1 = 8;
            this.c4u_1 = this.b4u_1.t();
            this.p8_1 = 4;
            continue $sm;
          case 4:
            this.p8_1 = 5;
            suspendResult = this.c4u_1.n1z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.p8_1 = 6;
              continue $sm;
            }

            var e = this.c4u_1.v();
            switch (e.d3h_1.a1_1) {
              case 0:
                var text = e.e3h_1;
                this.y4t_1.j4t_1.send(decodeToString(text, 0, 0 + text.length | 0));
                break;
              case 1:
                var tmp_0 = e.e3h_1;
                var source = tmp_0 instanceof Int8Array ? tmp_0 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.y4t_1.j4t_1.send(frameData);
                break;
              case 2:
                var builder = new Buffer();
                writeFully(builder, e.e3h_1);
                var data = builder;
                var code = data.n1h();
                var reason = readText(data);
                this.y4t_1.k4t_1.c1r(new CloseReason(code, reason));
                if (isReservedStatusCode(this.y4t_1, code)) {
                  this.y4t_1.j4t_1.close();
                } else {
                  this.y4t_1.j4t_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }

            this.p8_1 = 4;
            continue $sm;
          case 6:
            this.q8_1 = 10;
            this.p8_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            this.q8_1 = 10;
            cancelConsumed(this.b4u_1, this.a4u_1);
            this.p8_1 = 12;
            continue $sm;
          case 8:
            this.q8_1 = 9;
            var tmp_2 = this.s8_1;
            if (tmp_2 instanceof Error) {
              var e_0 = this.s8_1;
              var tmp_3 = this;
              this.a4u_1 = e_0;
              throw e_0;
            } else {
              throw this.s8_1;
            }

          case 9:
            this.q8_1 = 10;
            var t = this.s8_1;
            cancelConsumed(this.b4u_1, this.a4u_1);
            throw t;
          case 10:
            throw this.s8_1;
          case 11:
            this.q8_1 = 10;
            cancelConsumed(this.b4u_1, this.a4u_1);
            if (false) {
              this.p8_1 = 1;
              continue $sm;
            }

            this.p8_1 = 12;
            continue $sm;
          case 12:
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.q8_1 === 10) {
          throw e_1;
        } else {
          this.p8_1 = this.q8_1;
          this.s8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(JsWebSocketSession$slambda).b2i = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.y4t_1, completion);
    i.z4t_1 = $this$launch;
    return i;
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.a2i($this$launch, $completion);
    }, 1);
  }
  function JsWebSocketSession(coroutineContext, websocket, channelsConfig) {
    this.i4t_1 = coroutineContext;
    this.j4t_1 = websocket;
    this.k4t_1 = CompletableDeferred();
    this.l4t_1 = from(Factory_getInstance(), channelsConfig.p3d_1);
    this.m4t_1 = from(Factory_getInstance(), channelsConfig.q3d_1);
    this.n4t_1 = this.l4t_1;
    this.o4t_1 = this.m4t_1;
    this.p4t_1 = this.k4t_1;
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_0 = this.j4t_1;
    var callback = JsWebSocketSession$lambda(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o = {};
    o['passive'] = false;
    o['once'] = false;
    o['capture'] = false;
    var options = (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
    this_0.addEventListener('message', callback, options);
    var tmp = JsWebSocketSession$lambda_0(this_0, 'message', callback);
    var onMessage = new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp);
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_1 = this.j4t_1;
    var callback_0 = JsWebSocketSession$lambda_1(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o_0 = {};
    o_0['passive'] = false;
    o_0['once'] = false;
    o_0['capture'] = false;
    var options_0 = (!(o_0 == null) ? !(o_0 == null) : false) ? o_0 : THROW_CCE();
    this_1.addEventListener('error', callback_0, options_0);
    var tmp_0 = JsWebSocketSession$lambda_2(this_1, 'error', callback_0);
    var onError = new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp_0);
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_2 = this.j4t_1;
    var callback_1 = JsWebSocketSession$lambda_3(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o_1 = {};
    o_1['passive'] = false;
    o_1['once'] = true;
    o_1['capture'] = false;
    var options_1 = (!(o_1 == null) ? !(o_1 == null) : false) ? o_1 : THROW_CCE();
    this_2.addEventListener('close', callback_1, options_1);
    var tmp_1 = JsWebSocketSession$lambda_4(this_2, 'close', callback_1);
    new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp_1);
    var tmp0_safe_receiver = this.i4t_1.c9(Key_instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n1l(JsWebSocketSession$lambda_5(this, onMessage, onError));
    }
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9 = 'arraybuffer';
    this.j4t_1.binaryType = tmp$ret$9;
    launch(this, VOID, VOID, JsWebSocketSession$slambda_0(this, null));
    // Inline function 'kotlin.require' call
    if (!!channelsConfig.p3d_1.v3k()) {
      var message = 'Suspendable channels are not supported in JS.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(JsWebSocketSession).l1k = function () {
    return this.i4t_1;
  };
  protoOf(JsWebSocketSession).l3d = function () {
    return this.n4t_1;
  };
  protoOf(JsWebSocketSession).m3d = function () {
    return this.o4t_1;
  };
  protoOf(JsWebSocketSession).j3d = function (_) {
    throw WebSocketException_init_$Create$('Max frame size switch is not supported in Js engine.');
  };
  protoOf(JsWebSocketSession).k3d = function () {
    return 9223372036854775807n;
  };
  protoOf(JsWebSocketSession).i3d = function (negotiatedExtensions) {
    // Inline function 'kotlin.require' call
    if (!negotiatedExtensions.r()) {
      var message = 'Extensions are not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(JsWebSocketSession).t28 = function ($completion) {
    return Unit_instance;
  };
  function ktor_toRaw(_this__u8e3s4, clientConfig, callContext, $completion) {
    var tmp = new $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function asString(_this__u8e3s4) {
    var tmp = JSON;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = ['message', 'target', 'type', 'isTrusted'];
    return tmp.stringify(_this__u8e3s4, tmp$ret$0);
  }
  function getBodyBytes(content, callContext, $completion) {
    var tmp = new $getBodyBytesCOROUTINE$(content, callContext, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  }
  function buildObject(block) {
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    return this_0;
  }
  function toRaw$lambda($skipContentLengthHeader, $jsHeaders) {
    return function (key, value) {
      var tmp;
      if ($skipContentLengthHeader && key === 'Content-Length') {
        return Unit_instance;
      }
      $jsHeaders[key] = value;
      return Unit_instance;
    };
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.c3t_1.l2z_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.t3o_1) {
        // Inline function 'org.w3c.fetch.FOLLOW' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = 'follow';
      } else {
        // Inline function 'org.w3c.fetch.MANUAL' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = 'manual';
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
      }
      return Unit_instance;
    };
  }
  function getBodyBytes$slambda($content, resultContinuation) {
    this.j4v_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytes$slambda).o3b = function ($this$writer, $completion) {
    var tmp = this.p3b($this$writer, $completion);
    tmp.r8_1 = Unit_instance;
    tmp.s8_1 = null;
    return tmp.x8();
  };
  protoOf(getBodyBytes$slambda).k9 = function (p1, $completion) {
    return this.o3b(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytes$slambda).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            this.p8_1 = 1;
            suspendResult = this.j4v_1.o36(this.k4v_1.w2g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(getBodyBytes$slambda).p3b = function ($this$writer, completion) {
    var i = new getBodyBytes$slambda(this.j4v_1, completion);
    i.k4v_1 = $this$writer;
    return i;
  };
  function getBodyBytes$slambda_0($content, resultContinuation) {
    var i = new getBodyBytes$slambda($content, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.o3b($this$writer, $completion);
    }, 1);
  }
  function $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m4u_1 = _this__u8e3s4;
    this.n4u_1 = clientConfig;
    this.o4u_1 = callContext;
  }
  protoOf($toRawCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 2;
            this.p4u_1 = {};
            var this_0 = this.m4u_1;
            var skipContentLengthHeader = !get_supportsRequestBody(this_0.c3t_1) && isEmpty(this_0.e3t_1);
            mergeHeaders(this_0.d3t_1, this_0.e3t_1, toRaw$lambda(skipContentLengthHeader, this.p4u_1));
            this.p8_1 = 1;
            suspendResult = getBodyBytes(this.m4u_1.e3t_1, this.o4u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return buildObject(toRaw$lambda_0(this.m4u_1, this.p4u_1, this.n4u_1, bodyBytes));
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
  function $getBodyBytesCOROUTINE$(content, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y4u_1 = content;
    this.z4u_1 = callContext;
  }
  protoOf($getBodyBytesCOROUTINE$).x8 = function () {
    var suspendResult = this.r8_1;
    $sm: do
      try {
        var tmp = this.p8_1;
        switch (tmp) {
          case 0:
            this.q8_1 = 4;
            var tmp0_subject = this.y4u_1;
            if (tmp0_subject instanceof ByteArrayContent) {
              this.a4v_1 = this.y4u_1.o34();
              this.p8_1 = 5;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ReadChannelContent) {
                this.p8_1 = 3;
                suspendResult = readRemaining(this.y4u_1.m36(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject instanceof WriteChannelContent) {
                  this.p8_1 = 2;
                  var tmp_0 = GlobalScope_instance;
                  suspendResult = readRemaining(writer(tmp_0, this.z4u_1, VOID, getBodyBytes$slambda_0(this.y4u_1, null)).v2a_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject instanceof ContentWrapper) {
                    this.p8_1 = 1;
                    suspendResult = getBodyBytes(this.y4u_1.s36(), this.z4u_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject instanceof NoContent) {
                      this.a4v_1 = null;
                      this.p8_1 = 5;
                      continue $sm;
                    } else {
                      if (tmp0_subject instanceof ProtocolUpgrade) {
                        var tmp_1 = this;
                        throw new UnsupportedContentTypeException(this.y4u_1);
                      } else {
                        var tmp_2 = this;
                        noWhenBranchMatchedException();
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            this.a4v_1 = suspendResult;
            this.p8_1 = 5;
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.a4v_1 = readByteArray(ARGUMENT);
            this.p8_1 = 5;
            continue $sm;
          case 3:
            var ARGUMENT_0 = suspendResult;
            this.a4v_1 = readByteArray(ARGUMENT_0);
            this.p8_1 = 5;
            continue $sm;
          case 4:
            throw this.s8_1;
          case 5:
            return this.a4v_1;
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
  function Node(item, next) {
    this.l4v_1 = item;
    this.m4v_1 = next;
  }
  function engines$iterator$1() {
    this.n4v_1 = engines_getInstance().t4q_1.kotlinx$atomicfu$value;
  }
  protoOf(engines$iterator$1).v = function () {
    var result = ensureNotNull(this.n4v_1);
    this.n4v_1 = result.m4v_1;
    return result.l4v_1;
  };
  protoOf(engines$iterator$1).u = function () {
    return !(null == this.n4v_1);
  };
  function engines() {
    engines_instance = this;
    this.t4q_1 = atomic$ref$1(null);
  }
  protoOf(engines).u4q = function (item) {
    $l$loop: while (true) {
      var current = this.t4q_1.kotlinx$atomicfu$value;
      var new_0 = new Node(item, current);
      if (this.t4q_1.atomicfu$compareAndSet(current, new_0))
        break $l$loop;
    }
  };
  protoOf(engines).t = function () {
    return new engines$iterator$1();
  };
  var engines_instance;
  function engines_getInstance() {
    if (engines_instance == null)
      new engines();
    return engines_instance;
  }
  function ConnectTimeoutException() {
  }
  function SocketTimeoutException() {
  }
  function InterruptedIOException() {
  }
  var useEngineDispatcher;
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (exception instanceof CancellationException) {
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      exception = exception.cause;
    }
    var tmp0_elvis_lhs = exception;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  function get_FACTORY() {
    _init_properties_HttpClient_web_kt__pyfqvb();
    return FACTORY;
  }
  var FACTORY;
  function HttpClient_1(block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_1;
    } else {
      tmp = block;
    }
    block = tmp;
    _init_properties_HttpClient_web_kt__pyfqvb();
    return HttpClient_0(get_FACTORY(), block);
  }
  function HttpClient$lambda_1(_this__u8e3s4) {
    _init_properties_HttpClient_web_kt__pyfqvb();
    return Unit_instance;
  }
  var properties_initialized_HttpClient_web_kt_zbb0cl;
  function _init_properties_HttpClient_web_kt__pyfqvb() {
    if (!properties_initialized_HttpClient_web_kt_zbb0cl) {
      properties_initialized_HttpClient_web_kt_zbb0cl = true;
      var tmp0 = engines_getInstance();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (!equals(element, Js_instance)) {
            tmp$ret$0 = element;
            break $l$block;
          }
        }
        tmp$ret$0 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$0;
      FACTORY = tmp0_elvis_lhs == null ? Js_instance : tmp0_elvis_lhs;
    }
  }
  function checkContentLength(contentLength, bodySize, method) {
  }
  function ProxyBuilder() {
  }
  protoOf(ProxyBuilder).o4v = function (url) {
    // Inline function 'kotlin.error' call
    var message = 'Proxy unsupported in js client engine.';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  var ProxyBuilder_instance;
  function ProxyBuilder_getInstance() {
    return ProxyBuilder_instance;
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  //region block: post-declaration
  defineProp(protoOf(DoubleReceiveException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(NoTransformationFoundException), 'message', function () {
    return this.e();
  });
  protoOf(HttpClientEngineBase).i3t = get_supportedCapabilities;
  protoOf(HttpClientEngineBase).j3o = install;
  defineProp(protoOf(ClientEngineClosedException), 'cause', function () {
    return this.f();
  });
  protoOf(KtorCallContextElement).c9 = get;
  protoOf(KtorCallContextElement).oh = fold;
  protoOf(KtorCallContextElement).nh = minusKey;
  protoOf(KtorCallContextElement).ph = plus;
  defineProp(protoOf(RedirectResponseException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ClientRequestException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ServerResponseException), 'message', function () {
    return this.e();
  });
  protoOf(HttpRequest$1).l1k = get_coroutineContext;
  protoOf(JsWebSocketSession).n3d = send;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  AfterRenderHook_instance = new AfterRenderHook();
  AfterReceiveHook_instance = new AfterReceiveHook();
  RequestError_instance = new RequestError();
  ReceiveError_instance = new ReceiveError();
  RenderRequestHook_instance = new RenderRequestHook();
  SetupRequestContext_instance = new SetupRequestContext();
  HttpTimeoutCapability_instance = new HttpTimeoutCapability();
  SetupRequest_instance = new SetupRequest();
  Send_instance = new Send();
  RequestHook_instance = new RequestHook();
  TransformResponseBodyHook_instance = new TransformResponseBodyHook();
  SSECapability_instance = new SSECapability();
  WebSocketExtensionsCapability_instance = new WebSocketExtensionsCapability();
  WebSocketCapability_instance = new WebSocketCapability();
  Companion_instance_3 = new Companion_2();
  Js_instance = new Js();
  useEngineDispatcher = true;
  ProxyBuilder_instance = new ProxyBuilder();
  //endregion
  //region block: eager init
  initHook = initHook$init$();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var io = _.io || (_.io = {});
    var ktor = io.ktor || (io.ktor = {});
    var client = ktor.client || (ktor.client = {});
    var engine = client.engine || (client.engine = {});
    var js = engine.js || (engine.js = {});
    defineProp(js, 'initHook', get_initHook, VOID, true);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = ProxyBuilder_instance;
  _.$_$.b = timeout;
  _.$_$.c = FormBuilder;
  _.$_$.d = FormDataContent;
  _.$_$.e = MultiPartFormDataContent;
  _.$_$.f = formData;
  _.$_$.g = HttpRequestBuilder;
  _.$_$.h = headers;
  _.$_$.i = url;
  _.$_$.j = HttpStatement;
  _.$_$.k = HttpClient_1;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core.js.map
