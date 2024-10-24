import {Request, Response} from 'express'

export const home = ((req: Request,res: Response) => {
    let idade: number = 16
    let mostrarIdade: boolean = false
 
    if (idade > 18){
        mostrarIdade = true
       }
   res.render('pages/home',{
        nome:'Fulano',
        sobreNome:'de Tal',
        aparecerMensagem:true,
        idade,
        mostrarIdade,
        produtos:[
            {titulo:'Mesa', preco: 200},
            {titulo:'Xampu', preco: 15},
            {titulo:'Cadeira', preco: 50},
        ],
 
        frases:[
            'Só sei que nada sei',
            'A vigança nunca é plena, mata a alma e envenena',
            'Maldito seja o homem que confia no homem',
            'Eu odeio você, Maria Joaquina'
        ]
})
})