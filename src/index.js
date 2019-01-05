'use strict';

const showdown = require('showdown');
const puppeteer = require('puppeteer');

async function main() {
  const converter = new showdown.Converter();
  const text = '# Hello Markdown!\n\nThis is some text.';
  const html = converter.makeHtml(text);

  console.log(html);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // https://github.com/GoogleChrome/puppeteer/blob/v1.11.0/docs/api.md#pagesetcontenthtml-options
  await page.setContent(html);

  // https://github.com/GoogleChrome/puppeteer/blob/v1.11.0/docs/api.md#pagepdfoptions
  await page.pdf({
    path: 'test.pdf',
    format: 'A4'
  });

  await browser.close();
}

main();
