/*
 * lowDBClient base on lowDB
 *      sync and async methods under lowDBClient
 *      inject custom fn lowDBApi
 * how many size do you recommend db.json
 * Currently, not more than ~200MB for JSON files.
 *
 * let dbFile = 'db.json'
 * let db = lowDBClient(dbFile)
 *
 * todo
 *     In-memory
 * Copyright(c) 2009-2333 by github
 * MIT Licensed
 */
const low = require('lowdb')
const lowDBApi = require('./lowDBApi')
const FileSync = require('lowdb/adapters/FileSync')
const FileAsync = require('lowdb/adapters/FileAsync')

function lowDBClient(path, async) {
    if (!path) return null
    const adapter = async ? new FileAsync(path) : new FileSync(path)
    const db = low(adapter)
    return Object.assign(db, lowDBApi)
}

module.exports = lowDBClient