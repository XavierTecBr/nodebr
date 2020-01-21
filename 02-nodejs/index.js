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

function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)

}

const usuarioPromise = obterUsuario()

usuarioPromise
    .then((usuario) => {
        return obterTelefone(usuario.id)
                .then((result) => {
                    return {
                        usuario: {
                            nome: usuario.nome,
                            id: usuario.id,
                        },
                        telefone: result
                    }
                })
    })
    .then((resultado) => {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then((resultEndereco) => {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: resultEndereco
            }
        })
    })
    .then((resultado) => {
        console.log(`
            Nome: ${resultado.usuario.nome},
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) - ${resultado.telefone.telefone}
        `)
    })
    .catch((error) => {
        console.log('deu erro', error)
    })