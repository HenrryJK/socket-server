
import Server from "./class/server";
import { SERVER_PORT } from "./global/environment";
import  router  from "./routes/router";
import cors from "cors";
// bodyparser
import bodyParser from 'body-parser';

const server = new Server();

// Body Parser
server.app.use(bodyParser.urlencoded({extended: true}));
// pasar la peticion en formayo json
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({ origin: true , credentials: true }))


/// conectando el path , que hemos creado en el router
server.app.use('/' , router)

server.start( () =>{
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);

    // funciona igual de esta forma
    // console.log(`Servidor corriendo en el puerto ${server.port}`);
});