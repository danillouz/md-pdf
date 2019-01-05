'use strict';

module.exports = {
  /**
   * Makes HTML from Markdown text.
   *
   * @param {Object} service - Markdown converting service
   * @param {String} markdown - Markdown text
   *
   * @return {Promise} HTML
   */
  async makeHTML(service, markdown) {
    if (!service) {
      const err = new Error(
        'Provide a Markdown converting service. For example: "https://github.com/showdownjs/showdown".'
      );

      throw err;
    }

    if (!markdown) {
      const err = new Error(
        'Provide some Markdown text. For example "# Hello World!".'
      );

      throw err;
    }

    const html = service.makeHtml(markdown);

    return html;
  }
};
