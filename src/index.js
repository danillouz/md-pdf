'use strict';

const showdown = require('showdown');
const puppeteer = require('puppeteer');

const md = require('./md');

const log = console.log.bind(console);

async function main() {
  const mdConverter = new showdown.Converter();
  const mdText = '# Hello Markdown!\n\nThis is some texxxt.';
  const html = await md.makeHTML(mdConverter, mdText);

  log(html);

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

main().catch(log);
