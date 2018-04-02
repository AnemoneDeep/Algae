/*
 * @param collection: the []{} to be counted depth
 * find the max depth of the collection
 * depth({'s':{"3":"sdf"}}) //1
 * depth([]) //0
 * depth({'s':2}) //0
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */

function depth(collection = {}){

	if(typeof collection !== 'object') return 0

	let Objectvalues = Object.values(collection)

	if(!Objectvalues.length) return 0 

	let depthMap = new Map()

	for( let value of Objectvalues){

		let deep = 0

		if(typeof value === 'object'){

			deep++
		}

		depthMap.set(value,deep + depth(value))
	}

	return Math.max(...depthMap.values())

}


module.exports = depth