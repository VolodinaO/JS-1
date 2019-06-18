// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var sum = require('./index.js');

try{
    assert.equal(sum(12, 33), 45, 'При сложении 12 и 33 получится 45');
    assert.equal(sum(101, '17'), 118, 'При сложении 101 и 17 получится 118');
    assert.equal(sum(118, '-17'), 101, 'При сложении 118 и -17 получится 111');
    assert.deepStrictEqual(sum(101, ' '), NaN, 'При сложении 101 и " " получится NaN');
    assert.deepStrictEqual(sum(101, '17 попугаев'), NaN, 'При сложении 101 и 17 попугаев получится NaN');
    assert.deepStrictEqual(sum('101 бегемот', '17 попугаев'), NaN, 'При сложении 101 бегемота и 17 попугаев получится NaN');
    console.info('OK!');
    console.info('А теперь пойдут ошибки.');
    assert.equal(sum(101, ' '), NaN, 'При сложении 101 и " " получится Error, в equal NaN !== NaN');
    assert.equal(sum(101, '17 попугаев'), NaN, 'При сложении 101 и 17 попугаев получится Error, в equal NaN !== NaN');
    assert.equal(sum('101 бегемот', '17 попугаев'), NaN, 'При сложении 101 бегемота и 17 попугаев получится Error, в equal NaN !== NaN');
} catch (e) {
        console.error(e);
}

