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

            /* Emitir evento de los marcadores activos */
            socket.emit('markers-actives', this.markers.markers);

            /* Escuchar evento de un marcador nuevo */
            socket.on('new-marker', (marker) => {
                // console.log(marker);
                this.markers.addMarker(marker);

                socket.broadcast.emit('new-marker', marker);
            });
        });
    }
}

module.exports = Sockets;