'use strict';

const md = require('./md');

test('makeHTML(service, markdown) throws without service', async () => {
  expect.assertions(1);

  const want = new Error(
    'Provide a Markdown converting service. For example: "https://github.com/showdownjs/showdown".'
  );

  try {
    await md.makeHTML();
  } catch (err) {
    expect(err).toEqual(want);
  }
});

test('makeHTML(service, markdown) throws without markdown', async () => {
  expect.assertions(1);

  const service = {};
  const want = new Error(
    'Provide some Markdown text. For example "# Hello World!".'
  );

  try {
    await md.makeHTML(service);
  } catch (err) {
    expect(err).toEqual(want);
  }
});

test('makeHTML(service, markdown) resolves with HTML', async () => {
  expect.assertions(1);

  const want = '<h1>Hello World!</h1>';
  const service = {
    makeHtml: () => want
  };

  const markdown = '# Hello World!';
  const got = await md.makeHTML(service, markdown);

  expect(got).toEqual(want);
});
