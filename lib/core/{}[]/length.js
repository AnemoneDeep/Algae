/*
 * @param collection: the []{} to be counted length
 * The Object.keys() method returns an array of a given collection's own enumerable properties
 * So this function can return how many properties of this collection(object or array)
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */

function length(collection = {}){

	return Object.keys(collection)? Object.keys(collection).length :0
}


module.exports = length