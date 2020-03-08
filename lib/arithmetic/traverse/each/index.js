/**
 * traverse [ ] { }
 */
const eachArray = require('./eachArray.js')
const baseEach = require('./eachBase.js')

function each(collection, iteratee) {
    const func = Array.isArray(collection) ? eachArray : baseEach
    return func(collection, iteratee)
}
module.exports = each