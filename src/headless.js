'use strict';

module.exports = {
  /**
   * Make a PDF from HTML text.
   *
   * @param {Object} service - Headless browser
   * @param {String} html - HTML text
   *
   * @return {Promise} PDF Buffer
   */
  async makePDF(service, html) {
    if (!service) {
      const err = new Error(
        'Provide a headless browser. For example: "https://github.com/GoogleChrome/puppeteer".'
      );

      throw err;
    }

    if (!html) {
      const err = new Error(
        'Provide some HTML. For example "<h1>Hello World!</h1>".'
      );

      throw err;
    }

    const browser = await service.launch();
    const page = await browser.newPage();

    // https://github.com/GoogleChrome/puppeteer/blob/v1.11.0/docs/api.md#pagesetcontenthtml-options
    await page.setContent(html);

    // https://github.com/GoogleChrome/puppeteer/blob/v1.11.0/docs/api.md#pagepdfoptions
    const buff = await page.pdf({
      format: 'A4'
    });

    await browser.close();

    return buff;
  }
};
