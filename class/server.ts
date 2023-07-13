
import express  from "express";
import { SERVER_PORT } from "../global/environment";

import socketIO from 'socket.io';
import http from 'http';
export default class Server{

    private static _instance: Server;


    public app: express.Application;
    public port: number;
    // SOCKET - propiedad encargada de emiti eventos 
    public io: socketIO.Server;
    private httpServer: http.Server
    // (port: number)  // normalmente es asi por defecto pero hay otra forma mejor
    // antes era solo constructor , pero ahoral e ponemos private para  no tener que crear muchas instancias
    private constructor(){
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server(this.app);
        // error sale 
        // this.io = socketIO(this.httpServer);
        // usa este 
        this.io = new socketIO.Server( this.httpServer, { cors: { origin: true, credentials: true } } );
        this.escucharSockets();
    }

        // patron singleton
        public static get instance(){
            // si ya existe una instancia ,  sino existe  va a crear una nueva instancia
            return this._instance || (this._instance = new this());
        }

    /// Anteior forma de levantar nuestro servidor 
    // start(callback: any){
    //     this.app.listen(this.port , callback);
    // }

    // nuevo forma ya que utilizamos sockets 
    private escucharSockets () {
        console.log('Escuchando conexiones - sockets');
            // on , es para escuchar un evento
        this.io.on('connection' , cliente =>{

            console.log('Cliente conectado');
        });
    }

    start(callback: any){
        this.httpServer.listen(this.port , callback);
    }
}
