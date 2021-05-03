const express = require('express');
const cors = require('cors');
const conectarDB = require('../configs/database');

class Server {
    constructor(){
        //
        this.app    = express();
        this.port   = process.env.PORT;
        this.conectarDB = conectarDB();
        this.pathInfo   = '/api/info';
        this.pathUser   = '/api/user';

        //methods
        this.midllewares();
        this.routes();
        
    }

    midllewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.set('view engine', 'hbs');
    }

    routes(){
        this.app.use(this.pathUser, require('../routes/user'));
        this.app.use(this.pathInfo, require('../routes/info'));
    }

    listen(){
        this.app.listen(this.port, ()=> console.log('Escuchando desde puerto', this.port));
    }
}

module.exports = Server;