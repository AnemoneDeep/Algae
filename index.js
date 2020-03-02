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
let VERSION = '1.0.0';
let algea = {VERSION};
let {getType, _isType} = require('./lib/core/type')
let {httpReq, httpGet} = require('./lib/net')
let time = require('./lib/core/time')

algea.nextTick = require('./lib/core/stone/nextTick')
algea.each = require('./lib/arithmetic/traverse/each')
algea.asQueue = require('./lib/arithmetic/queue/async.queue')
algea.queue = require('./lib/arithmetic/queue/queue')
algea.len = require('./lib/core/{}[]/length')
algea.md5 = require('./lib/arithmetic/md5')
algea.restfull = require('./lib/restfull')
algea.lowDBClient = require('./lib/aDB')
algea.time = time

algea.getType = getType
algea.isType = _isType

algea.httpReq = httpReq
algea.httpGet = httpGet

// npm part
algea.axios = require('axios')
algea.escaper = require("true-html-escape");


module.exports = algea;