# MD -> PDF

Generate a PDF Buffer from Markdown text.

## Input/Output Example

The following Markdown:

```
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
```

Generates the following PDF:

![PDF Output Example](./example.pdf)

## API

### createPDF(mdTxt)

Creates a PDF Buffer from some Markdown text.

#### Arguments

| Name     | Type     | Required | Description   |
| -------- | -------- | -------- | ------------- |
| `mdText` | `String` | Yes      | Mardown text. |

#### Returns

`Promise` which resolves with a `Buffer` or rejects with an `Error`.

#### Usage

```js
createPDF('# Hi')
  .then(buff => console.log(buff))
  .catch(err => console.error(err));
```

## Examples

- [Save to file](./examples/save-to-file.js)
