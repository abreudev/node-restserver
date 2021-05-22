const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 8088;
        this.usersPath = '/api/users';
        // Middlewares
        this.middleware();
        // Routes
        this.routes();
    }
    middleware(){
        // CORS
        this.app.use(cors())
        // Lectura y parse del body
        this.app.use(express.json());
        // Directorio publico
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use( this.usersPath, require('../routes/user.routes'));
    }
    listen(){
        this.app.listen( this.port, () => {
            console.log('Server on port:', this.port)
        });
    }
}


module.exports = Server;