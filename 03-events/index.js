const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, (click) => {
    console.log('um usuário cliclou', click)
})

meuEmissor.emit(nomeEvento, 'na barra de rolagem')
meuEmissor.emit(nomeEvento, 'no ok')

let count = 0
setInterval(()=>{
    meuEmissor.emit(nomeEvento, 'no ok' + (count++))
}, 10000)


const stdin = process.openStdin()

// function main() {
//     return new Promise((resolve, reject) => {
//         stdin.addListener('data', (value) => {
//             // console.log(`'vc digitou:' ${value.toString().trim()}`)
//             return resolve(value)
//         })
//     })
// }

//executa apenas uma vez devido a resolução da promise
// main().then((result) =>{
//     console.log(result.toString().trim())
// })


//executa sempre
stdin.addListener('data', (value) => {
     console.log(`'vc digitou:' ${value.toString().trim()}`)
})

