'use strict';

const headless = require('./headless');

test('makePDF(service, html, filePath) throws without service', async () => {
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

test('makePDF(service, html, filePath) throws without html', async () => {
  expect.assertions(1);

  const service = {};
  const want = new Error(
    'Provide some HTML. For example "<h1>Hello World!</h1>".'
  );

  try {
    await headless.makePDF(service);
  } catch (err) {
    expect(err).toEqual(want);
  }
});

test('makePDF(service, html, filePath) throws without filePath', async () => {
  expect.assertions(1);

  const service = {};
  const html = '<h1>Hello World!</h1>';
  const want = new Error(
    'Provide a file path to store the PDF. For example "file.pdf".'
  );

  try {
    await headless.makePDF(service, html);
  } catch (err) {
    expect(err).toEqual(want);
  }
});

test('makePDF(service, html, filePath) resolves', async () => {
  expect.assertions(1);

  const service = {
    launch() {
      const browser = {
        newPage() {
          return Promise.resolve({
            setContent: () => Promise.resolve(),
            pdf: () => Promise.resolve()
          });
        },
        close: () => Promise.resolve()
      };

      return Promise.resolve(browser);
    }
  };

  const html = '<h1>Hello World!</h1>';
  const filePath = 'test.pdf';
  const got = await headless.makePDF(service, html, filePath);

  expect(got).toEqual();
});
