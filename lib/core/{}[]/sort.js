function sort(arr, key) {
    return arr.sort(function (a, b) {
        return a[key] < b[key]
    })
}

module.exports = sort