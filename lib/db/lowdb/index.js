/*
 * File DB Client base on lowDB
 *     method: FileSync FileAsync
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
