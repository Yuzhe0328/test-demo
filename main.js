function abs(a) {
    if (typeof a != 'number') {
        throw new TypeError('参数必须为数值型')
    }
    if (a < 0) return -a
    return a
}
module.exports = {
        abs,
};