import { generateArr, timed } from '../globals.js';

const embedSort = arr => arr.sort((a, b) => a - b);

console.log(timed(embedSort, generateArr(100, 1000)));
