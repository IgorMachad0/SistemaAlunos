
let numeroDeAlunos = 28;
let contaWhile = 0;

while (contaWhile <= numeroDeAlunos) {

    if(contaWhile == 0){
    
        console.log("O número atual é 0.")

    }else if(contaWhile %2 == 0){

        console.log("O número " +contaWhile+ " é par.")

        }else{
    
         console.log(`O número ${contaWhile} é impar.`)

        }   
    
    contaWhile++
}

let nomeDeAlunos = ["Igor", "Matheus", "Julia", "Willian", "Heitor", "Gru"]

for(let nome of nomeDeAlunos){

    console.log(`Este aluno se chama ${nome}.`)
}


/*
let numeroDeAlunos = 10;

for (let index = 0; index <= numeroDeAlunos; index++) {

   // console.log(index)

    if(index == 0){
    
        console.log("O número atual é 0.")

    }else if(index %2 == 0){

        console.log("O número " +index+ " é par.")

        }else{
    
         console.log(`O número ${index} é impar.`)

        }   
}

*/

/*

=   verificação de atribuição
==  verificação de valores
=== verificação de valor e tipo de valor

*/