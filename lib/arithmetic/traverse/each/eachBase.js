const keys = require('../../../core/{}[]/keys')
const eachArray = require('./eachArray')
/**
 * The base implementation of `forEach`.
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
function baseEach(collection, iteratee) {
	const _keys = keys(collection)
	eachArray(_keys, function (value) {
		iteratee(collection[value], value, collection) // iteratee ==> callback
	})
	return collection // for ===> chain
}
module.exports = baseEach