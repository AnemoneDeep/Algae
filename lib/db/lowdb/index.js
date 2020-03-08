/*
 * File DB Client base on lowDB
 * todo
 *     In-memory not finish
 *     async
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */
const low = require('lowdb')
const fileAsync = require('lowdb/adapters/FileSync')

/**
 *
 * @param path (File path)
 *               before pass in need resolve( path)
 * @returns DB name
 */
function lowDBClient(path) {
	if (!path) return false
	const adapter = new fileAsync(path)
	return low(adapter)/**/
}

module.exports = lowDBClient
