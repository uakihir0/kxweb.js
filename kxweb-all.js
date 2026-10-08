(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kxweb-core.js', './kotlin-kotlin-stdlib.js', './ktor-ktor-client-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kxweb-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-client-core.js'));
  else {
    if (typeof globalThis['kxweb-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kxweb:all'. Its dependency 'kxweb-core' was not found. Please, check whether 'kxweb-core' is loaded prior to 'work.socialhub.kxweb:all'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kxweb:all'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'work.socialhub.kxweb:all'.");
    }
    if (typeof globalThis['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kxweb:all'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'work.socialhub.kxweb:all'.");
    }
    globalThis['work.socialhub.kxweb:all'] = factory(typeof globalThis['work.socialhub.kxweb:all'] === 'undefined' ? {} : globalThis['work.socialhub.kxweb:all'], globalThis['kxweb-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-client-core']);
  }
}(function (_, kotlin_work_socialhub_kxweb_core, kotlin_kotlin, kotlin_io_ktor_ktor_client_core) {
  'use strict';
  //region block: imports
  var XWebFactory_instance = kotlin_work_socialhub_kxweb_core.$_$.a;
  var protoOf = kotlin_kotlin.$_$.wb;
  var XWebConfig = kotlin_work_socialhub_kxweb_core.$_$.b;
  var VOID = kotlin_kotlin.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.db;
  var defineProp = kotlin_kotlin.$_$.pa;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(KxwebFactory, 'KxwebFactory');
  //endregion
  function KxwebFactory() {
  }
  protoOf(KxwebFactory).g50 = function (config) {
    return XWebFactory_instance.instanceFromConfig(config);
  };
  protoOf(KxwebFactory).instanceFromConfig = function (config, $super) {
    config = config === VOID ? new XWebConfig() : config;
    return $super === VOID ? this.g50(config) : $super.g50.call(this, config);
  };
  protoOf(KxwebFactory).instanceFromCookies = function (authToken, csrfToken) {
    return XWebFactory_instance.instanceFromCookies(authToken, csrfToken);
  };
  protoOf(KxwebFactory).instanceFromCookieString = function (cookieString) {
    return XWebFactory_instance.instanceFromCookieString(cookieString);
  };
  protoOf(KxwebFactory).instanceFromOAuth = function (oauthToken, oauthSecret) {
    return XWebFactory_instance.instanceFromOAuth(oauthToken, oauthSecret);
  };
  protoOf(KxwebFactory).instanceFromPool = function (pool) {
    return XWebFactory_instance.instanceFromPool(pool);
  };
  protoOf(KxwebFactory).instanceFromSessions = function (sessions) {
    return XWebFactory_instance.instanceFromSessions(sessions);
  };
  protoOf(KxwebFactory).instanceFromJsonLines = function (jsonLines) {
    return XWebFactory_instance.instanceFromJsonLines(jsonLines);
  };
  var KxwebFactory_instance;
  function KxwebFactory_getInstance() {
    return KxwebFactory_instance;
  }
  //region block: init
  KxwebFactory_instance = new KxwebFactory();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var work = _.work || (_.work = {});
    var socialhub = work.socialhub || (work.socialhub = {});
    var kxweb = socialhub.kxweb || (socialhub.kxweb = {});
    defineProp(kxweb, 'KxwebFactory', KxwebFactory_getInstance, VOID, true);
  }
  $jsExportAll$(_);
  kotlin_kotlin.$jsExportAll$(_);
  kotlin_io_ktor_ktor_client_core.$jsExportAll$(_);
  kotlin_work_socialhub_kxweb_core.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=kxweb-all.js.map
