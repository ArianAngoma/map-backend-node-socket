/* Importaciones propias */
const Markers = require('./markersList');

class Sockets {
    constructor(io) {
        this.io = io;

        this.markers = new Markers();

        this.socketEvents();
    }

    socketEvents() {
        /* On connection */
        this.io.on('connection', (socket) => {
            console.log('Cliente conectado', socket.id);
        });
    }
}

module.exports = Sockets;