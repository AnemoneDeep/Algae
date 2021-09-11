/*
 　　　　　　　　　　　　　　.　....　ﾍ
 　　　　　　　　　　　　.　ﾍ　　../　.|
 　　　　　　　　　　　　./　｜　 /　　|
 　　　　　　　　　　　.ﾉ　　|　.ﾉ 　 　|
 　　　　　　　　　　　 ﾐ}　F′　.〉　..ﾉ┘
 　　　　　 　 　　　　. -┴-┴‐ミ　　､ﾐ.._
 　　　　　 　 　> ´　　　　　　　　　　ミ､
 　　　　　　　/　　　　　　　　　　　　　 ﾐ､
 　　　　　　 ﾉ　　p￣ヽ_　　　　　　　　　.ﾐ､
 　　　　rﾍ⌒　　 `ー ′　　　　　　　　　　　.ﾐ､
 　　　ﾆ{^　　　　　　　　　　　　　　　　　　 ﾐ､
 　　　〈､_　　　＝三二_ー--　　　　　　　　 　 |
 　　　∠_　　　　　ｰ＝= 二_ｰ
 　　／　　 ¨ヾ､
 ﾉﾍ　　　　　　ヽ
 * */

let algea = {};
const fs = require('fs-extra')
let VERSION = '1.0.0';


const ARequire = require('./Algae.require')

let time = require('./lib/core/time')
let {getType, _isType} = require('./lib/core/type')

let {httpReq, httpGet, api} = require('./lib/net')

global.ARequire = ARequire

algea.ARequire = ARequire

//code
algea.nextTick = ARequire('@core/stone/nextTick')
algea.delay = ARequire('@core/base/delay')
// ----------------------------------------------------------
algea.each = require('./lib/arithmetic/traverse/each')
algea.asQueue = require('./lib/arithmetic/queue/async.queue')
algea.queue = require('./lib/arithmetic/queue/queue')
algea.uuid = require('./lib/arithmetic/uuid/index')
//-----------------------------------------------------------
algea.md5 = require('./lib/arithmetic/md5')
// [] {}--------------------------------------
algea.len = require('./lib/core/{}[]/length')
algea.arr2obj = require('./lib/core/{}[]/2[]{}.js')
algea.obj2arr = require('./lib/core/{}[]/2{}[].js')
algea.chunk = require('./lib/core/{}[]/chunk.js')
// [] {}--------------------------------------
// db --------------------------------------------------
algea.lowDBClient = require('./lib/db/lowdb')
algea.lowDBApi = require('./lib/db/lowdb/lowDBApi')
algea.redisClicent = require('./lib/db/redis/client')

algea.restfull = require('./lib/middlewares/restfull')
algea.BootStrap = require('./lib/middlewares/server/BootStrap')

algea.time = time

algea.getType = getType
algea.isType = _isType
//------------net--------------------
algea.httpReq = httpReq
algea.httpGet = httpGet
algea.api = api
algea.parse = require('./lib/net/parse')
algea.webSocketClient = require('./lib/net/socket/wsClient')

// npm part
algea.axios = require('axios')
algea.escaper = require("true-html-escape");
algea.fs = fs
algea.async = require('async')

module.exports = algea;