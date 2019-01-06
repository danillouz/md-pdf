'use strict';

const headless = require('./headless');

test('makePDF(service, html) throws without service', async () => {
  expect.assertions(1);

  const want = new Error(
    'Provide a headless browser. For example: "https://github.com/GoogleChrome/puppeteer".'
  );

  try {
    await headless.makePDF();
  } catch (err) {
    expect(err).toEqual(want);
  }
});

test('makePDF(service, html) throws without html', async () => {
  expect.assertions(1);

  const want = new Error(
    'Provide some HTML. For example "<h1>Hello World!</h1>".'
  );

  const service = {};

  try {
    await headless.makePDF(service);
  } catch (err) {
    expect(err).toEqual(want);
  }
});

test('makePDF(service, html) resolves with PDF Buffer', async () => {
  expect.assertions(1);

  const html = '<h1>Hello World!</h1>';
  const want = Buffer.from(html, 'base64');

  const service = {
    launch() {
      const browser = {
        newPage() {
          return Promise.resolve({
            setContent: () => Promise.resolve(),
            pdf: () => Promise.resolve(want)
          });
        },
        close: () => Promise.resolve()
      };

      return Promise.resolve(browser);
    }
  };

  const got = await headless.makePDF(service, html);

  expect(got).toEqual(want);
});
