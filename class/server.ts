
import express  from "express";
import { SERVER_PORT } from "../global/environment";

export default class Server{
    public app: express.Application;
    public port: number;

            // (port: number)  // normalmente es asi por defecto pero hay otra forma mejor
    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
    }


    start(callback: any){
        this.app.listen(this.port , callback);


    }
}
