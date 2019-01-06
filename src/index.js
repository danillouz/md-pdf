'use strict';

const showdown = require('showdown');
const puppeteer = require('puppeteer');

const markdown = require('./markdown');
const headless = require('./headless');

/**
 * Creates a PDF Buffer from Markdown text.
 *
 * @param {String} mdTxt - Markdown text
 *
 * @return {Promise} PDF Buffer
 */
module.exports = async function createPDF(mdTxt) {
  const mdConverter = new showdown.Converter({
    tables: true,
    tasklists: true,
    disableForced4SpacesIndentedSublists: true,
    openLinksInNewWindow: true
  });

  const html = await markdown.makeHTML(mdConverter, mdTxt);
  const buff = await headless.makePDF(puppeteer, html);

  return buff;
};
