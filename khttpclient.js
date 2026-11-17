(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './ktor-ktor-client-core.js', './ktor-ktor-utils.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'khttpclient'.");
    }
    globalThis.khttpclient = factory(typeof khttpclient === 'undefined' ? {} : khttpclient, globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-client-core'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.z2;
  var Enum = kotlin_kotlin.$_$.qf;
  var protoOf = kotlin_kotlin.$_$.xb;
  var initMetadataForClass = kotlin_kotlin.$_$.ya;
  var VOID = kotlin_kotlin.$_$.d;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.c1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.za;
  var split = kotlin_kotlin.$_$.ee;
  var lastOrNull = kotlin_kotlin.$_$.h7;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var Image_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var Video_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var ContentType_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.o;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.i9;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.k;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.g;
  var url = kotlin_io_ktor_ktor_client_core.$_$.i;
  var toString = kotlin_kotlin.$_$.ac;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p4;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.i1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.e2;
  var headers = kotlin_io_ktor_ktor_client_core.$_$.h;
  var timeout = kotlin_io_ktor_ktor_client_core.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e3;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var contentType = kotlin_io_ktor_ktor_http.$_$.t1;
  var FormBuilder = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.f1;
  var append = kotlin_io_ktor_ktor_http.$_$.m1;
  var copyToArray = kotlin_kotlin.$_$.o6;
  var formData = kotlin_io_ktor_ktor_client_core.$_$.f;
  var MultiPartFormDataContent = kotlin_io_ktor_ktor_client_core.$_$.e;
  var getKClass = kotlin_kotlin.$_$.rc;
  var arrayOf = kotlin_kotlin.$_$.ng;
  var createKType = kotlin_kotlin.$_$.pc;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.y;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.m;
  var ParametersBuilder = kotlin_io_ktor_ktor_http.$_$.h1;
  var FormDataContent = kotlin_io_ktor_ktor_client_core.$_$.d;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.j;
  var first = kotlin_kotlin.$_$.x6;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.p;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.q8;
  var closeFinally = kotlin_kotlin.$_$.og;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ab;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n3;
  var toMap = kotlin_io_ktor_ktor_utils.$_$.d1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.m2;
  var isByteArray = kotlin_kotlin.$_$.hb;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var decodeToString = kotlin_kotlin.$_$.gd;
  var constructCallableReference = kotlin_kotlin.$_$.pa;
  var lazy = kotlin_kotlin.$_$.xg;
  var KProperty1 = kotlin_kotlin.$_$.wc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.va;
  var isBlank = kotlin_kotlin.$_$.qd;
  var ProxyBuilder_instance = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Url = kotlin_io_ktor_ktor_http.$_$.l1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Type, 'Type', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(HttpParameter, 'HttpParameter');
  initMetadataForCoroutine($proceedCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpRequest, 'HttpRequest', HttpRequest, VOID, VOID, [0, 1]);
  initMetadataForCoroutine($fromCOROUTINE$, CoroutineImpl);
  initMetadataForCompanion(Companion_0, VOID, VOID, [1]);
  initMetadataForClass(HttpResponse, 'HttpResponse');
  //endregion
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_instance;
    static_init_called = true;
    Type_QUERY_instance = new Type('QUERY', 0);
    Type_PARAM_instance = new Type('PARAM', 1);
    Type_FILE_instance = new Type('FILE', 2);
    Type_JSON_instance = new Type('JSON', 3);
  }
  var Type_QUERY_instance;
  var Type_PARAM_instance;
  var Type_FILE_instance;
  var Type_JSON_instance;
  function Type(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
  }
  protoOf(Companion).f4w = function (key, value) {
    return new HttpParameter(Type_QUERY_getInstance(), key, value);
  };
  protoOf(Companion).g4w = function (key, value) {
    return new HttpParameter(Type_PARAM_getInstance(), key, value);
  };
  protoOf(Companion).h4w = function (key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  };
  protoOf(Companion).i4w = function (json) {
    return new HttpParameter(Type_JSON_getInstance(), 'json', null, 'file.json', toByteArray(json));
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    return Companion_instance;
  }
  function Type_QUERY_getInstance() {
    static_init();
    return Type_QUERY_instance;
  }
  function Type_PARAM_getInstance() {
    static_init();
    return Type_PARAM_instance;
  }
  function Type_FILE_getInstance() {
    static_init();
    return Type_FILE_instance;
  }
  function Type_JSON_getInstance() {
    static_init();
    return Type_JSON_instance;
  }
  function HttpParameter(type, key, value, fileName, fileBody) {
    value = value === VOID ? null : value;
    fileName = fileName === VOID ? null : fileName;
    fileBody = fileBody === VOID ? null : fileBody;
    this.j4w_1 = type;
    this.k4w_1 = key;
    this.l4w_1 = value;
    this.m4w_1 = fileName;
    this.n4w_1 = fileBody;
  }
  protoOf(HttpParameter).o4w = function () {
    var tmp0_safe_receiver = this.m4w_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  };
  protoOf(HttpParameter).p4w = function () {
    switch (this.o4w()) {
      case 'txt':
        return Text_getInstance().r2u_1;
      case 'html':
        return Text_getInstance().u2u_1;
      case 'css':
        return Text_getInstance().s2u_1;
      case 'csv':
        return Text_getInstance().t2u_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().y2t_1;
      case 'png':
        return Image_getInstance().a2u_1;
      case 'gif':
        return Image_getInstance().v2t_1;
      case 'svg':
        return Image_getInstance().b2u_1;
      case 'mpeg':
        return Video_getInstance().c2v_1;
      case 'mp4':
        return Video_getInstance().d2v_1;
      case 'mov':
        return Video_getInstance().f2v_1;
      case 'webm':
        return ContentType_init_$Create$('video', 'webm');
      case 'json':
        return Application_getInstance().w2s_1;
      case 'xml':
        return Application_getInstance().c2t_1;
      case 'zip':
        return Application_getInstance().f2t_1;
      case 'pdf':
        return Application_getInstance().i2t_1;
    }
    return Application_getInstance().z2s_1;
  };
  function proceed($this, method, $completion) {
    var tmp = new $proceedCOROUTINE$($this, method, $completion);
    tmp.s8_1 = Unit_instance;
    tmp.t8_1 = null;
    return tmp.y8();
  }
  function canSendOnly($this, param) {
    if (param.j4w_1.equals(Type_JSON_getInstance()))
      return true;
    var tmp0_subject = param.p4w();
    return tmp0_subject.equals(Application_getInstance().w2s_1) ? true : tmp0_subject.equals(Image_getInstance().y2t_1) ? true : tmp0_subject.equals(Image_getInstance().a2u_1) ? true : tmp0_subject.equals(Image_getInstance().v2t_1) ? true : tmp0_subject.equals(Video_getInstance().c2v_1) ? true : tmp0_subject.equals(Video_getInstance().d2v_1) ? true : tmp0_subject.equals(Video_getInstance().f2v_1) ? true : tmp0_subject.equals(ContentType_init_$Create$('video', 'webm')) ? true : false;
  }
  function HttpRequest$proceed$lambda($req) {
    return function ($this$HttpClient) {
      applySystemProxy($this$HttpClient);
      var tmp;
      if ($req.t4x_1) {
        applySkipSSLValidation($this$HttpClient);
        tmp = Unit_instance;
      }
      $this$HttpClient.p3p_1 = $req.s4x_1;
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_0($req) {
    return function ($this$headers) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $req.p4x_1.l1().t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        // Inline function 'kotlin.collections.component1' call
        var k = element.m1();
        // Inline function 'kotlin.collections.component2' call
        var v = element.n1();
        $this$headers.c2n(k, v);
      }
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_1($req) {
    return function ($this$timeout) {
      $this$timeout.o4e($req.u4x_1);
      $this$timeout.p4e($req.v4x_1);
      $this$timeout.q4e($req.w4x_1);
      return Unit_instance;
    };
  }
  function $proceedCOROUTINE$(_this__u8e3s4, method, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y4w_1 = _this__u8e3s4;
    this.z4w_1 = method;
  }
  protoOf($proceedCOROUTINE$).y8 = function () {
    var suspendResult = this.s8_1;
    $sm: do
      try {
        var tmp = this.q8_1;
        switch (tmp) {
          case 0:
            this.r8_1 = 9;
            this.f4x_1 = this.y4w_1;
            var tmp_0 = this;
            tmp_0.g4x_1 = HttpClient(HttpRequest$proceed$lambda(this.f4x_1));
            this.q8_1 = 1;
            continue $sm;
          case 1:
            this.c4x_1 = this.g4x_1;
            this.b4x_1 = null;
            this.q8_1 = 2;
            continue $sm;
          case 2:
            this.q8_1 = 3;
            continue $sm;
          case 3:
            this.r8_1 = 8;
            this.r8_1 = 7;
            var client = this.c4x_1;
            var tmp0_safe_receiver = this.y4w_1.m4x_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              this.y4w_1.p4x_1.a3('Accept', tmp0_safe_receiver);
            }

            var tmp1_safe_receiver = this.y4w_1.n4x_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var tmp0 = this.y4w_1.p4x_1;
              var key = 'User-Agent';
              tmp0.a3(key, tmp1_safe_receiver);
            }

            this.e4x_1 = Companion_getInstance_3();
            var this_0 = new HttpRequestBuilder();
            this_0.z3o_1 = this.z4w_1;
            if (!(this.f4x_1.l4x_1 == null)) {
              var tmp0_0 = this.f4x_1.l4x_1;
              var tmp$ret$0 = Unit_instance;
              l$ret$1: do {
                if (tmp0_0 == null) {
                  var message = 'Required value was null.';
                  throw IllegalStateException_init_$Create$(toString(message));
                } else {
                  tmp$ret$0 = tmp0_0;
                  break l$ret$1;
                }
              }
               while (false);
              var tmp_1 = tmp$ret$0;
              takeFrom(this_0.y3o_1, URLBuilder(tmp_1));
            } else {
              url(this_0, this.f4x_1.h4x_1, this.f4x_1.i4x_1, this.f4x_1.k4x_1, this.f4x_1.j4x_1);
            }

            headers(this_0, HttpRequest$proceed$lambda_0(this.f4x_1));
            timeout(this_0, HttpRequest$proceed$lambda_1(this.f4x_1));
            if (!this.y4w_1.q4x_1 && !this.y4w_1.r4x_1 && this.f4x_1.o4x_1.e1() === 1 && canSendOnly(this.y4w_1, first(this.f4x_1.o4x_1))) {
              var param = first(this.f4x_1.o4x_1);
              var body = new ByteArrayContent(ensureNotNull(param.n4w_1), param.p4w());
              if (body == null) {
                this_0.b3p_1 = NullBody_instance;
                var tmp_2 = getKClass(ByteArrayContent);
                var tmp_3 = null instanceof ByteArrayContent;
                var tmp_4;
                try {
                  tmp_4 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_5;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3 = $p;
                    tmp_5 = null;
                  } else {
                    throw $p;
                  }
                  tmp_4 = tmp_5;
                }
                this_0.t3u(new TypeInfo(tmp_2, tmp_3, tmp_4));
              } else {
                if (body instanceof OutgoingContent) {
                  this_0.b3p_1 = body;
                  this_0.t3u(null);
                } else {
                  this_0.b3p_1 = body;
                  var tmp_6 = getKClass(ByteArrayContent);
                  var tmp_7 = null instanceof ByteArrayContent;
                  var tmp_8;
                  try {
                    tmp_8 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
                  } catch ($p_0) {
                    var tmp_9;
                    if ($p_0 instanceof Error) {
                      var _unused_var__etf5q3_0 = $p_0;
                      tmp_9 = null;
                    } else {
                      throw $p_0;
                    }
                    tmp_8 = tmp_9;
                  }
                  this_0.t3u(new TypeInfo(tmp_6, tmp_7, tmp_8));
                }
              }
            } else {
              if (this.z4w_1.equals(Companion_getInstance_1().w2z_1)) {
                var _iterator__ex2g4s = this.f4x_1.o4x_1.t();
                while (_iterator__ex2g4s.u()) {
                  var element = _iterator__ex2g4s.v();
                  if (element.j4w_1.a1_1 === 0) {
                    this_0.y3o_1.j33_1.c2n(element.k4w_1, ensureNotNull(element.l4w_1));
                  } else {
                    throw IllegalStateException_init_$Create$('Request Body is not supported in the GET method.');
                  }
                }
              } else {
                var tmp0_1 = this.f4x_1.o4x_1;
                var destination = ArrayList_init_$Create$();
                var _iterator__ex2g4s_0 = tmp0_1.t();
                while (_iterator__ex2g4s_0.u()) {
                  var element_0 = _iterator__ex2g4s_0.v();
                  if (element_0.j4w_1.equals(Type_QUERY_getInstance())) {
                    destination.c1(element_0);
                  }
                }
                var queries = destination;
                var tmp0_2 = this.f4x_1.o4x_1;
                var destination_0 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_1 = tmp0_2.t();
                while (_iterator__ex2g4s_1.u()) {
                  var element_1 = _iterator__ex2g4s_1.v();
                  if (element_1.j4w_1.equals(Type_PARAM_getInstance())) {
                    destination_0.c1(element_1);
                  }
                }
                var params = destination_0;
                var tmp0_3 = this.f4x_1.o4x_1;
                var destination_1 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_2 = tmp0_3.t();
                while (_iterator__ex2g4s_2.u()) {
                  var element_2 = _iterator__ex2g4s_2.v();
                  if (element_2.j4w_1.equals(Type_FILE_getInstance())) {
                    destination_1.c1(element_2);
                  }
                }
                var files = destination_1;
                if (!queries.r()) {
                  var _iterator__ex2g4s_3 = queries.t();
                  while (_iterator__ex2g4s_3.u()) {
                    var element_3 = _iterator__ex2g4s_3.v();
                    this_0.y3o_1.j33_1.c2n(element_3.k4w_1, ensureNotNull(element_3.l4w_1));
                  }
                }
                var tmp_10;
                if (!params.r()) {
                  tmp_10 = true;
                } else {
                  tmp_10 = !files.r();
                }
                if (tmp_10) {
                  if (this.y4w_1.r4x_1) {
                    if (!files.r()) {
                      throw IllegalStateException_init_$Create$('ApplicationFormUrlEncoded cannot send files.');
                    }
                    contentType(this_0, Application_getInstance().h2t_1);
                    Companion_getInstance_0();
                    var this_1 = ParametersBuilder();
                    var _iterator__ex2g4s_4 = params.t();
                    while (_iterator__ex2g4s_4.u()) {
                      var element_4 = _iterator__ex2g4s_4.v();
                      this_1.c2n(element_4.k4w_1, ensureNotNull(element_4.l4w_1));
                    }
                    var body_0 = new FormDataContent(this_1.o2v());
                    if (body_0 == null) {
                      this_0.b3p_1 = NullBody_instance;
                      var tmp_11 = getKClass(FormDataContent);
                      var tmp_12 = null instanceof FormDataContent;
                      var tmp_13;
                      try {
                        tmp_13 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                      } catch ($p_1) {
                        var tmp_14;
                        if ($p_1 instanceof Error) {
                          var _unused_var__etf5q3_1 = $p_1;
                          tmp_14 = null;
                        } else {
                          throw $p_1;
                        }
                        tmp_13 = tmp_14;
                      }
                      this_0.t3u(new TypeInfo(tmp_11, tmp_12, tmp_13));
                    } else {
                      if (body_0 instanceof OutgoingContent) {
                        this_0.b3p_1 = body_0;
                        this_0.t3u(null);
                      } else {
                        this_0.b3p_1 = body_0;
                        var tmp_15 = getKClass(FormDataContent);
                        var tmp_16 = null instanceof FormDataContent;
                        var tmp_17;
                        try {
                          tmp_17 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                        } catch ($p_2) {
                          var tmp_18;
                          if ($p_2 instanceof Error) {
                            var _unused_var__etf5q3_2 = $p_2;
                            tmp_18 = null;
                          } else {
                            throw $p_2;
                          }
                          tmp_17 = tmp_18;
                        }
                        this_0.t3u(new TypeInfo(tmp_15, tmp_16, tmp_17));
                      }
                    }
                  } else {
                    contentType(this_0, MultiPart_getInstance().k2u_1);
                    var this_2 = new FormBuilder();
                    var _iterator__ex2g4s_5 = params.t();
                    while (_iterator__ex2g4s_5.u()) {
                      var element_5 = _iterator__ex2g4s_5.v();
                      this_2.o4n(element_5.k4w_1, ensureNotNull(element_5.l4w_1));
                    }
                    var _iterator__ex2g4s_6 = files.t();
                    while (_iterator__ex2g4s_6.u()) {
                      var element_6 = _iterator__ex2g4s_6.v();
                      var tmp_19 = ensureNotNull(element_6.n4w_1);
                      Companion_getInstance();
                      var this_3 = new HeadersBuilder();
                      append(this_3, 'Content-Type', element_6.p4w());
                      this_3.c2n('Content-Disposition', 'filename=' + element_6.m4w_1);
                      this_2.p4n(element_6.k4w_1, tmp_19, this_3.o2v());
                    }
                    var this_4 = this_2.q4n();
                    var body_1 = new MultiPartFormDataContent(formData(copyToArray(this_4).slice()));
                    if (body_1 == null) {
                      this_0.b3p_1 = NullBody_instance;
                      var tmp_20 = getKClass(MultiPartFormDataContent);
                      var tmp_21 = null instanceof MultiPartFormDataContent;
                      var tmp_22;
                      try {
                        tmp_22 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                      } catch ($p_3) {
                        var tmp_23;
                        if ($p_3 instanceof Error) {
                          var _unused_var__etf5q3_3 = $p_3;
                          tmp_23 = null;
                        } else {
                          throw $p_3;
                        }
                        tmp_22 = tmp_23;
                      }
                      this_0.t3u(new TypeInfo(tmp_20, tmp_21, tmp_22));
                    } else {
                      if (body_1 instanceof OutgoingContent) {
                        this_0.b3p_1 = body_1;
                        this_0.t3u(null);
                      } else {
                        this_0.b3p_1 = body_1;
                        var tmp_24 = getKClass(MultiPartFormDataContent);
                        var tmp_25 = null instanceof MultiPartFormDataContent;
                        var tmp_26;
                        try {
                          tmp_26 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                        } catch ($p_4) {
                          var tmp_27;
                          if ($p_4 instanceof Error) {
                            var _unused_var__etf5q3_4 = $p_4;
                            tmp_27 = null;
                          } else {
                            throw $p_4;
                          }
                          tmp_26 = tmp_27;
                        }
                        this_0.t3u(new TypeInfo(tmp_24, tmp_25, tmp_26));
                      }
                    }
                  }
                }
              }
            }

            this.q8_1 = 4;
            suspendResult = (new HttpStatement(this_0, client)).x4p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var ARGUMENT = suspendResult;
            this.q8_1 = 5;
            suspendResult = this.e4x_1.y4x(ARGUMENT, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.d4x_1 = suspendResult;
            this.r8_1 = 9;
            this.q8_1 = 6;
            var tmp_28 = this;
            continue $sm;
          case 6:
            var tmp_29 = this.d4x_1;
            this.r8_1 = 9;
            closeFinally(this.c4x_1, this.b4x_1);
            this.a4x_1 = tmp_29;
            this.q8_1 = 11;
            continue $sm;
          case 7:
            this.r8_1 = 8;
            var tmp_30 = this.t8_1;
            if (tmp_30 instanceof Error) {
              var e = this.t8_1;
              var tmp_31 = this;
              this.b4x_1 = e;
              throw e;
            } else {
              throw this.t8_1;
            }

          case 8:
            this.r8_1 = 9;
            var t = this.t8_1;
            closeFinally(this.c4x_1, this.b4x_1);
            throw t;
          case 9:
            throw this.t8_1;
          case 10:
            this.r8_1 = 9;
            closeFinally(this.c4x_1, this.b4x_1);
            if (false) {
              this.q8_1 = 1;
              continue $sm;
            }

            this.q8_1 = 11;
            continue $sm;
          case 11:
            return this.a4x_1;
        }
      } catch ($p_5) {
        var e_0 = $p_5;
        if (this.r8_1 === 9) {
          throw e_0;
        } else {
          this.q8_1 = this.r8_1;
          this.t8_1 = e_0;
        }
      }
     while (true);
  };
  function HttpRequest() {
    this.h4x_1 = 'https';
    this.i4x_1 = null;
    this.j4x_1 = null;
    this.k4x_1 = null;
    this.l4x_1 = null;
    this.m4x_1 = null;
    this.n4x_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o4x_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.p4x_1 = LinkedHashMap_init_$Create$();
    this.q4x_1 = false;
    this.r4x_1 = false;
    this.s4x_1 = true;
    this.t4x_1 = false;
    this.u4x_1 = null;
    this.v4x_1 = null;
    this.w4x_1 = null;
  }
  protoOf(HttpRequest).z4x = function (url) {
    // Inline function 'kotlin.also' call
    this.l4x_1 = url;
    return this;
  };
  protoOf(HttpRequest).a4y = function (key, value) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.set' call
    this.p4x_1.a3(key, value);
    return this;
  };
  protoOf(HttpRequest).b4y = function (skipSSLValidation) {
    // Inline function 'kotlin.also' call
    this.t4x_1 = skipSSLValidation;
    return this;
  };
  protoOf(HttpRequest).c4y = function (key, value) {
    // Inline function 'kotlin.also' call
    this.o4x_1.c1(Companion_instance.f4w(key, toString(value)));
    return this;
  };
  protoOf(HttpRequest).d4y = function (key, value) {
    // Inline function 'kotlin.also' call
    this.o4x_1.c1(Companion_instance.g4w(key, toString(value)));
    return this;
  };
  protoOf(HttpRequest).h4w = function (key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.o4x_1.c1(Companion_instance.h4w(key, fileName, fileBody));
    return this;
  };
  protoOf(HttpRequest).i4w = function (json) {
    // Inline function 'kotlin.also' call
    this.o4x_1.c1(Companion_instance.i4w(json));
    return this;
  };
  protoOf(HttpRequest).e4y = function ($completion) {
    return proceed(this, Companion_getInstance_1().w2z_1, $completion);
  };
  protoOf(HttpRequest).f4y = function ($completion) {
    return proceed(this, Companion_getInstance_1().x2z_1, $completion);
  };
  function HttpResponse$Companion$mapper$lambda($this$Json) {
    $this$Json.k17_1 = true;
    return Unit_instance;
  }
  function $fromCOROUTINE$(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o4y_1 = _this__u8e3s4;
    this.p4y_1 = response;
  }
  protoOf($fromCOROUTINE$).y8 = function () {
    var suspendResult = this.s8_1;
    $sm: do
      try {
        var tmp = this.q8_1;
        switch (tmp) {
          case 0:
            this.r8_1 = 2;
            this.r4y_1 = this.p4y_1.t3q().u32_1;
            this.q4y_1 = toMap(this.p4y_1.v2z());
            var this_0 = this.p4y_1;
            this.q8_1 = 1;
            var tmp_0 = this_0.r3q();
            var tmp_1 = PrimitiveClasses_getInstance().bc();
            var tmp_2 = !(null == null) ? isByteArray(null) : false;
            var tmp_3;
            try {
              tmp_3 = createKType(PrimitiveClasses_getInstance().bc(), arrayOf([]), false);
            } catch ($p) {
              var tmp_4;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_4 = null;
              } else {
                throw $p;
              }
              tmp_3 = tmp_4;
            }

            suspendResult = tmp_0.q3q(new TypeInfo(tmp_1, tmp_2, tmp_3), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = (!(suspendResult == null) ? isByteArray(suspendResult) : false) ? suspendResult : THROW_CCE();
            return new HttpResponse(this.r4y_1, this.q4y_1, ARGUMENT);
          case 2:
            throw this.t8_1;
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.r8_1 === 2) {
          throw e;
        } else {
          this.q8_1 = this.r8_1;
          this.t8_1 = e;
        }
      }
     while (true);
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.x4x_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  protoOf(Companion_0).y4x = function (response, $completion) {
    var tmp = new $fromCOROUTINE$(this, response, $completion);
    tmp.s8_1 = Unit_instance;
    tmp.t8_1 = null;
    return tmp.y8();
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function HttpResponse$stringBody$delegate$lambda(this$0) {
    return function () {
      return decodeToString(this$0.u4y_1);
    };
  }
  function HttpResponse$_get_stringBody_$ref_nmyr7m() {
    return constructCallableReference(function (p0) {
      return p0.w4y();
    }, 1, 0, 34);
  }
  function HttpResponse(status, headers, body) {
    Companion_getInstance_3();
    this.s4y_1 = status;
    this.t4y_1 = headers;
    this.u4y_1 = body;
    var tmp = this;
    tmp.v4y_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  protoOf(HttpResponse).w4y = function () {
    var tmp0 = this.v4y_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.n1();
  };
  function applySystemProxy(_this__u8e3s4) {
    var proxyUrl = proxyUrlFromEnv();
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(proxyUrl == null || isBlank(proxyUrl))) {
      _this__u8e3s4.f3q(applySystemProxy$lambda(proxyUrl));
    }
  }
  function applySystemProxy$lambda($proxyUrl) {
    return function ($this$engine) {
      $this$engine.k3v_1 = ProxyBuilder_instance.e4w(Url($proxyUrl));
      return Unit_instance;
    };
  }
  function applySkipSSLValidation(_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('Skip SSL Validation is not supported on JS target.');
  }
  function proxyUrlFromEnv() {
    return null;
  }
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = HttpRequest;
  //endregion
  return _;
}));

//# sourceMappingURL=khttpclient.js.map
