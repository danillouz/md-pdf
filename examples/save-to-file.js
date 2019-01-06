'use strict';

const fs = require('fs');
const createPDF = require('../src');

async function main() {
  const mdTxt = '# Hello World!';
  const buff = await createPDF(mdTxt);
  const file = fs.createWriteStream('output.pdf');

  file.write(buff);
  file.end();
}

main().catch(err => {
  console.error(err);
});
