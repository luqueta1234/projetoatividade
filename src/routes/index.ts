import {Router, Request, Response, RequestHandler} from 'express'
import * as HomeController from '../controllers/homeController'
import * as InfoController from '../controllers/infoController'
import * as UserController from '../controllers/userController'
import { register } from 'module'


const router = Router()

//PÁGINA HOME
router.get('/', HomeController.home)

//PÁGINA NOME
router.get('/nome', UserController.nome)

//PÁGINA DE DADOS
router.get('/dados', InfoController.dados)

//PÁGINA DE IDADE
router.get('/idade', UserController.idade)

//PÁGINA DE CADASTRO
router.get('/registro', UserController.registro)

//PÁGINA DO RESULTADO DE IDADE
router.post('/idade-resultado', UserController.idaderesultado)

//PÁGINA DE LOGIN
router.get('/login', UserController.login)

//PÁGINA DO RESULTADO DE LOGIN
router.post('/login-resultado', UserController.loginresultado)

export default router