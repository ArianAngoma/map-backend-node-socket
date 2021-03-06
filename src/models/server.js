const http = require('http');
const path = require('path');
const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');

/* Importaciones propias */
const Sockets = require('./sockets');

class Server {
    constructor() {
        this.port = process.env.PORT;
        this.app = express();

        /* HTTP Server */
        this.server = http.createServer(this.app);

        /* Configuración de sockets */
        this.io = socketio(this.server);

        /* Middlewares */
        this.middlewares();

        /* Inicializar sockets */
        this.sockets = new Sockets(this.io);
    }

    middlewares() {
        /* Desplegar el directorio público */
        this.app.use(express.static(path.resolve(__dirname, '../public')));

        /* CORS */
        this.app.use(cors());
    }

    execute() {
        this.server.listen(this.port, () => {
            console.log('Server on port:', this.port);
        });
    }
}

module.exports = Server;