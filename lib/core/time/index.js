/*
 * modules name
 *    Method Detail 
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */
function stamp() {
    return new Date().getTime()
}

function getS(num) {
    if(!num) num = stamp()
    return new Date(num).getSeconds()
}

let time = {
    stamp, getS
}

module.exports = time
