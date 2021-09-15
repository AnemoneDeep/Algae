/**
 * Gets the last element of []
 *
 * @param {Array} array The array to query.
 * _.last([1, 2, 3]);
 * //  3
 * _.last([1, 2, 3],1)
 * // 2
 */
function last(array, num = 0) {
    let length = array == null ? 0 : array.length;
    let index = 1
    if (num >= length) return array[0]
    if (num && num < length) {
    } else {
        num = 0
    }
    index = index + num
    return length ? array[length - index] : undefined;
}