/*
 * modules name
 *    Method Detail 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */
const initData = require('./initialization/index')
const insertUnique = require('./insert/insertUnique')
const updateOne = require('./up/updateOne')


let lowDBApi = {initData, insertUnique, updateOne}

module.exports = lowDBApi
