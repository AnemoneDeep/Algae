/*
 * lowDBClient base on lowDB
 *      sync and async methods under lowDBClient
 *
 * how many size do you recommend db.json
 * Currently, not more than ~200MB for JSON files.
 * todo
 *     In-memory
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const FileAsync = require('lowdb/adapters/FileAsync')

function lowDBClient(path, async) {
	if (!path) return null
	const adapter = async ? new FileAsync(path) : new FileSync(path)
	return low(adapter)
}

module.exports = lowDBClient
