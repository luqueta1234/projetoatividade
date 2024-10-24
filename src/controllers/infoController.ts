import {Request, Response} from 'express'

export const dados = ((req: Request, res: Response) =>{
    

    
    let nome: string = req.query.nome as string
    let idade: number = parseInt(req.query.idade as string)
    let telefone: number = parseInt(req.query.telefone as string)
    let endereco: string = req.query.endereco as string
    res.render('pages/dados',{
        nome,
        idade,
        telefone,
        endereco
    })
})

