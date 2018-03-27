/*
 * @param array  The array to process // can be string
 * @param size   The length of each chunk  side > 0
 * if argument is not correct return []
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */
function chunk(array = [], size = 0) {
    const _length = array ? array.length : 0
    if (!_length || !size) return []
    let [index, newArray] = [0, []]
    while (index < array.length) {
        newArray.push(array.slice(index, index += size));
    }
    return newArray
}

module.exports = chunk