import {compose , pipe} from 'lodash/fp'; 

let input = "  Javascript   "

const trim= str => str.trim();
const wrapInDiv = str => `<div> ${str}</div>`;
const toLowerCase = str => str.toLowerCase();

// compose(wrapInDiv, toLowerCase, trim)

const transform= pipe(trim, toLowerCase, wrapInDiv);
transform(input);