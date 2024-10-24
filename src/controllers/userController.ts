import {Request, Response} from 'express'

export const idade = ((req:Request, res:Response) =>{
    res.render('pages/idade')
})

export const idaderesultado = ((req:Request, res:Response) =>{
    let mostrarIdade: boolean = false
    let idade: number = 0

    if(req.body.anoNascimento){

    let anoNascimento: number = parseInt(req.body.anoNascimento as string)
    let anoAtual: number = new Date().getFullYear() //2024
    idade = anoAtual - anoNascimento
    mostrarIdade = true
    }

    res.render('pages/idade',{
        idade,
        mostrarIdade
    })
})

export const registro = ((req: Request, res: Response) =>{
    res.render('pages/registro');
})

export const login = ((req: Request, res: Response) =>{
    res.render('pages/login');
})

export const loginresultado = ((req: Request, res: Response) =>{
    let mostrarEmail: boolean = false
    let mostrarSenha: boolean = false
    let email: string = req.body.email as string
    let senha: string = req.body.senha as string

    if(req.body.senha){
        mostrarSenha = true
    }

    if(req.body.email){
        mostrarEmail = true
    }

    res.render('pages/login',{
        mostrarEmail,
        mostrarSenha,
        senha,
        email
    })
})

export const nome = ((req: Request, res: Response) =>{
    let mostrarIdade: boolean = false

    let nome: string = req.query.nome as string
    let idade: number = parseInt(req.query.idade as string)
    let endereco: string = req.query.endereco as string
    let telefone: string = req.query.telefone as string

    res.render('pages/nome',{
        nome,
        idade,
        endereco,
        telefone
    })
})