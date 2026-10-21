/**
 * Week 5 - Day 2: Modular Programming & npm demonstration
 */

const { add, subtract, multiply, divide } = require('./math');
const { capitalize, slugify, truncate } = require('./stringHelper');

console.log('=== Week 5 - Day 2: Modular Programming in Node.js ===\n');

// 1. Math Module tests
console.log('1. Math Module Operations:');
console.log('add(15, 25)        =', add(15, 25));
console.log('subtract(50, 18)   =', subtract(50, 18));
console.log('multiply(7, 8)     =', multiply(7, 8));
console.log('divide(100, 4)     =', divide(100, 4));

// 2. String Helper tests
console.log('\n2. String Helper Operations:');
console.log('capitalize("mErN sTaCk")       =', capitalize("mErN sTaCk"));
console.log('slugify("Week 5 Day 2 Notes!")  =', slugify("Week 5 Day 2 Notes!"));
console.log('truncate("Building scalable node apps with Express", 25) =', truncate("Building scalable node apps with Express", 25));

// 3. Lodash Third-party usage (if installed)
try {
    const _ = require('lodash');
    console.log('\n3. Third-party Library (lodash) Operations:');
    const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8];
    console.log('Original Array:    ', numbers);
    console.log('lodash.uniq():     ', _.uniq(numbers));
    console.log('lodash.chunk(...,3):', _.chunk(numbers, 3));
    console.log('lodash.shuffle():  ', _.shuffle([10, 20, 30, 40, 50]));
} catch (e) {
    console.log('\n(Note: run `npm install` in this folder to test third-party lodash)');
}

console.log('\nDay 2 Tasks Executed Successfully!');
