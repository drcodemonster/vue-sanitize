const sanitizeHtml = require("sanitize-html");

const VueSanitize = {
  install(Vue, options) {
    const defaultOptions = options;

    Vue.prototype.$sanitize = (dirty, opts = null) => {
      let text_string = sanitizeHtml(dirty, opts || defaultOptions);
      text_string = text_string.replace(/&amp;/g, '&');
      return text_string;
    };
  },

  defaults: sanitizeHtml.defaults
};

export default VueSanitize;
