'use strict';

const markdown = require('./markdown');

test('makeHTML(service, mdTxt) throws without service', async () => {
  expect.assertions(1);

  const want = new Error(
    'Provide a Markdown converting service. For example: "https://github.com/showdownjs/showdown".'
  );

  try {
    await markdown.makeHTML();
  } catch (err) {
    expect(err).toEqual(want);
  }
});

test('makeHTML(service, mdTxt) throws without mdTxt', async () => {
  expect.assertions(1);

  const want = new Error(
    'Provide some Markdown text. For example "# Hello World!".'
  );

  const service = {};

  try {
    await markdown.makeHTML(service);
  } catch (err) {
    expect(err).toEqual(want);
  }
});

test('makeHTML(service, mdTxt) resolves with HTML String', async () => {
  expect.assertions(1);

  const want = '<h1>Hello World!</h1>';

  const service = {
    makeHtml: () => want
  };

  const mdTxt = '# Hello World!';
  const got = await markdown.makeHTML(service, mdTxt);

  expect(got).toEqual(want);
});
