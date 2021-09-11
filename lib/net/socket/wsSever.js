/**
 * WebSocket server fn
 *
    let a = new Sock()
    a.init()
 */
const ws = require("ws");

class Sock {
    constructor() {
    }

    init(port = 4200) {
        let WebSocketServer = ws.WebSocketServer
        const wss = new WebSocketServer({port: port});
        wss.on('connection', function connection(ws) {
            ws.on('message', function incoming(message) {
                console.log('received: %s', message);
                // received: hello come from postman
            });

            ws.send('something');
        });

        return wss
    }

    receiving(data) {
        // todo
    }

    send(msg) {
        // todo
    }
}

module.exports = Sock