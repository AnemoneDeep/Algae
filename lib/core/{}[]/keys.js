/**
 *  get [] {} key
 *  The Object.keys() method returns an array of a given object's own enumerable properties, //only
 *  in the same order as that provided by a for...in loop
 *  (the difference being that a for-in loop enumerates properties in the prototype chain as well).
 */
function keys(collection) {
	return Object.keys(collection)?Object.keys(collection):[]
}
module.exports = keys