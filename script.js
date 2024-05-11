const pessoas = ["Fulano","Ciclano","Beltrano"]

// //Adicionar um item ao final da array
// pessoas.push("Matheus")

// //Remover um ultimo intem do array
// pessoas.pop()

// //Adicionar um item na primeira posição do array
// pessoas.unshift("Matheus")

// //Remover o primeiro item
// pessoas.shift()

// //atualizo o valor do array
// pessoas[1]="Matheus"

// console.log(pessoas)

// for(i=0; 1<=10;i++){
//     console.log(i)
// }

// pessoas.forEach(
//     function passarNomes(pessoa){
//         console.log(`Olá ${pessoa.toLowerCase()}`)
//     }
// )

//Arrow function- não precisa da palavra function, nome. Se for so um parametro n precisa das {}, se for mais precisa
// pessoas.forEach(pessoa => console.log(`Olá ${pessoa.toLowerCase()}`))

// const pessaosCorinthians = pessoas.map(pessoa => ){

// }

function vaiCorinthias(dadosDasPessoas){

    return dadosDasPessoas.map(elemento => elemento + "Vai Corinthians")
}
console.log(vaiCorinthias([`Matheus`]))


function dobrar(numeros){
    return numeros.map(elemento => elemento *2 )
}
console.log(dobrar([2,4,6]))


const frase = ["oi", "tudo", "bem?"]
function caps(frases){
    return frases.map(elemento =>elemento.toUpperCase())
}
console.log(frase)

// const caps = frase.map(elemento => elemento.toUpperCase())

// console.log(caps)

const filmes = [
    {
        nome: "Gente Grande",
        diretor: "Adam Sandler",
        ano: 2012
    },
    {
        nome: "Todo mundo em pânico",
        diretor: "Michael Jackson",
        ano: 2005
    },
    {
        nome: "Meninas Malvadas",
        diretor: "Linday Lohan",
        ano: 2002

    }
]

console.log(filmes.map(filme => filme.nome))
console.log(filmes.filter(filme => 
    filme.ano > 2006))