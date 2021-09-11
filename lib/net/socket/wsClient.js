/**
 * WebSocket client fn
 *    Sending and receiving data
 *
 const url = 'wss://xxxxx'
 let options = {}
 let wss = new Sock()
 wss.init(url, options)
 */
const ws = require("ws");

class Sock {
    constructor() {
        this.sock = null
    }

    init(url, option, cb) {
        let sock = new ws(url, options);
        this.sock = sock
        sock.on("open", function () {
            console.log("connect success !");
            sock.send("HelloWorld");
        });

        sock.on("error", function (err) {
            console.log("error: ", err);
        });

        sock.on("close", function () {
            console.log("close");
        });

        sock.on("message", (data) => {
            this.receiving(data)
            if (cb) cb(data)
        });
        return sock
    }

    receiving(data) {
        // todo
    }

    send(msg) {
        // todo
    }
}

module.exports = Sock