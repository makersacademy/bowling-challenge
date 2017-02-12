'use strict';

var extend = require('../helpers/clone-extend').extend;

/**
 * Represents a strategy that extends the configuration.
 *
 * @class
 */
function ExtendConfigStrategy (extendWith) {
  this.extendWith = extendWith;
}

ExtendConfigStrategy.prototype.process = function (config, callback) {
  extend(config, this.extendWith);

  // TODO: FIX HACK! Resolve this in a more generic/re-usable way, perhaps
  // using a different object extension library.
  if (this.extendWith) {
    var extendWith = this.extendWith;

    if(extendWith.cacheOptions && extendWith.cacheOptions.client){
      config.cacheOptions.client = extendWith.cacheOptions.client;
    }

    if(extendWith.requestExecutor){
      config.requestExecutor = extendWith.requestExecutor;
    }

    // TODO: HACK! Fix issue with extend library extending arrays
    // instead of overwriting them.
    if (extendWith.web) {
      var web = extendWith.web;

      if (web.produces) {
        config.web.produces = web.produces;
      }

      if (web.login && web.login.form && web.login.form.fieldOrder) {
        config.web.login.form.fieldOrder = web.login.form.fieldOrder;
      }

      if (web.register && web.register.form && web.register.form.fieldOrder) {
        config.web.register.form.fieldOrder = web.register.form.fieldOrder;
      }
    }
  }

  callback(null, config);
};

module.exports = ExtendConfigStrategy;
