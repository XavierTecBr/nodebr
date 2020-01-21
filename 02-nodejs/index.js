/*
 0 - Obter usuário 
 1 - Obter o número de telefone de um usuário a partir de seu Id
 2 - Obter o endereço do usuário pelo Id
*/

const util = require('util')

const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            // return reject(new Error('uuuui'))
            return resolve({
                id: 1,
                nome: "Aladin",
                dataNascimento: new Date()
            })
        }, 1000)
    })    
}

function obterTelefone(idUsuario) {
    return new Promise((resolve, rejetc) => {
        setTimeout(function(){
            return resolve({
                telefone: '119999999',
                ddd: '11'
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {

    setTimeout(function(){
        return callback(null, {
            rua: "rua dos bobos",
            numero: "0"
        })
    }, 2000)
}

main()
async function main() {
    try {
        console.time('medida', )
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])

        const telefone = resultado[0]
        const endereco = resultado[1]

        console.log(`
            'Nome': ${usuario.nome},
            'Telefone: ${telefone.ddd} - ${telefone.telefone}
            'Endereço: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('medida')
    }catch(error) {
        console.log('deu erro', error)
    }
}