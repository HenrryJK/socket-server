import {Router , Request , Response} from 'express';


// export const router = Router();
const router = Router();

router.get('/mensajes' , (req: Request , res: Response) =>{

    res.json({
        ok: true,
        mensaje: 'Todo esta Ok!!'
    });

});

router.post('/mensajes' , (req: Request , res: Response) =>{

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        // mensaje: 'Mensaje Post Go!'
        // es redundante llamarlo asi
        // cuerpo: cuerpo
        cuerpo,
        de
    });

});

router.post('/mensajes/:id' , (req: Request , res: Response) =>{

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    res.json({
        ok: true,
        // mensaje: 'Mensaje Post Go!'
        // es redundante llamarlo asi
        // cuerpo: cuerpo
        cuerpo,
        de,
        id
    });

});

// puedes exportarlo asi
export default router;