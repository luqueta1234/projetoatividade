import express,{Request, Response} from 'express'
import { Server } from 'http'

import mustache from 'mustache-express'
import dotenv from 'dotenv'

import path from 'path'
import mainRoutes from './routes/index'

dotenv.config()

const server = express()


server.set('view engine','mustache')

server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())

server.use(express.static(path.join(__dirname,'../public')))

// Habilitando o POST no código
server.use(express.urlencoded({extended: true}))

server.use(mainRoutes)

server.use((req:Request,res:Response) =>{
    res.status(404).send("Página não encontrada")
})


server.listen(process.env.PORT)