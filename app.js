
var sum = require('./index.js');

console.info(sum(12, 33));  // 45
console.info(sum(101, '17')); // 118
console.info(sum(118, '-17')); // 101
console.info(sum(101, ' '));  // NaN
console.info(sum(101, '17 попугаев')); // NaN
console.info(sum('101 бегемот', '17 попугаев')); // NaN
console.info(sum(null, '17 попугаев')); // NaN

console.info('OK!');
