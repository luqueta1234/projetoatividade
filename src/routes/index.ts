import {Router, Request, Response, RequestHandler} from 'express'

const router = Router()

router.get('/',(req: Request, res: Response) =>{
    res.render('home');
})

router.get('/registro',(req: Request, res: Response) =>{
    res.render('registro');
})

router.get('/login',(req: Request, res: Response) =>{
    res.render('login');
})

export default router