(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global['vue-sanitize'] = factory());
}(this, (function () { 'use strict';

  var sanitizeHtml = require("sanitize-html");

  var VueSanitize = {
    install: function install(Vue, options) {
      var defaultOptions = options;

      Vue.prototype.$sanitize = function (dirty) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        var text_string = sanitizeHtml(dirty, opts || defaultOptions);
        text_string = text_string.replace(/&amp;/g, '&');
        text_string = text_string.replace(/&lt;/g, '<');
        text_string = text_string.replace(/&gt;/g, '>');
        return text_string;
      };
    },


    defaults: sanitizeHtml.defaults
  };

  return VueSanitize;

})));
