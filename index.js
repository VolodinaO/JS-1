/**
 * @param {Number} a Первое слагаемое
 * @param {Number} b Второе слагаемое
 * @returns {Number}
 */
module.exports = function (a, b){
    var c = Number(a) + Number(b);

    // Для случая сложений с null/""/''
    if (!Number(a) || (!Number(b)))
        c = NaN;
    return c;
};
