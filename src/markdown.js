'use strict';

module.exports = {
  /**
   * Makes HTML from Markdown text.
   *
   * @param {Object} service - Markdown converting service
   * @param {String} mdTxt - Markdown text
   *
   * @return {Promise} HTML String or Error
   */
  async makeHTML(service, mdTxt) {
    if (!service) {
      const err = new Error(
        'Provide a Markdown converting service. For example: "https://github.com/showdownjs/showdown".'
      );

      throw err;
    }

    if (!mdTxt) {
      const err = new Error(
        'Provide some Markdown text. For example "# Hello World!".'
      );

      throw err;
    }

    return service.makeHtml(mdTxt);
  }
};
