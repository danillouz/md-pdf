'use strict';

const showdown = require('showdown');
const puppeteer = require('puppeteer');

const md = require('./md');
const headless = require('./headless');

const log = console.log.bind(console);

const mdText = `
# This is a header

This is some text.

\`\`\`js
// This is some code.
const x = 1;

console.log(x);
\`\`\`

## This is a sub header

_This is **more** text._

# This is a table

| AAA | BBB |
| --- | --- |
| aaa | bbb |

# These are lists

## Bullets

- Item 1
  - Item 1a
- Item 2
  - Item 2a
- Item 3
  - Item 3a

## Todos

- [ ] A
- [x] B
- [ ] C
`;

const filePath = 'test.pdf';

async function main() {
  const mdConverter = new showdown.Converter({
    tables: true,
    tasklists: true,
    disableForced4SpacesIndentedSublists: true,
    openLinksInNewWindow: true
  });
  const html = await md.makeHTML(mdConverter, mdText);

  await headless.makePDF(puppeteer, html, filePath);
}

main().catch(log);
