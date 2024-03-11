const sanitizeHtml = require("sanitize-html");
const removeEmoji = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  }
  return str
    .replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      '',
    )
    .replace(/\s+/g, ' ')
    .trim();
};

const VueSanitize = {
  install(Vue, options) {
    const defaultOptions = options;

    Vue.prototype.$sanitize = (dirty, opts = null) => {
      let text_string = sanitizeHtml(dirty, opts || defaultOptions);
      text_string = text_string.replace(/&amp;/g, '&');
      text_string = removeEmoji(text_string)
      return text_string;
    };
  },

  defaults: sanitizeHtml.defaults
};

export default VueSanitize;
