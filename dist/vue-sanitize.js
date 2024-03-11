(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global['vue-sanitize'] = factory());
}(this, (function () { 'use strict';

  var sanitizeHtml = require("sanitize-html");
  var removeEmoji = function removeEmoji(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return str;
    }
    return str.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').replace(/\s+/g, ' ').trim();
  };

  var VueSanitize = {
    install: function install(Vue, options) {
      var defaultOptions = options;

      Vue.prototype.$sanitize = function (dirty) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        var text_string = sanitizeHtml(dirty, opts || defaultOptions);
        text_string = text_string.replace(/&amp;/g, '&');
        text_string = removeEmoji(text_string);
        return text_string;
      };
    },


    defaults: sanitizeHtml.defaults
  };

  return VueSanitize;

})));
