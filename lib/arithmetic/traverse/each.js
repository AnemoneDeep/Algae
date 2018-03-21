/**
 * [ ] { }
 * @type {eachArray}
 */
const eachArray = require('./eachArray')
const baseEach = require('./eachBase')

function each(collection, iteratee) {
    const func = Array.isArray(collection) ? eachArray : baseEach
    return func(collection, iteratee)
}

module.exports = each