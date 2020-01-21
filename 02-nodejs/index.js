/*
 0 - Obter usuário 
 1 - Obter o número de telefone de um usuário a partir de seu Id
 2 - Obter o endereço do usuário pelo Id
*/

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: "Aladin",
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function(){
        return callback(null, {
            telefone: '119999999',
            ddd: '11'
        })
    }, 2000)
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

obterUsuario(function resolverUsuario(error, usuario) {
    // null || "" || 0 === false
    if (error) {
        console.log("Deu ruim em USUARIO", error)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if (error1) {
            console.log("Deu ruim em Telefone", error1)
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.log("Deu ruim em Endereco", error2)
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua}, ${endereco.numero},
                Telefone: (${telefone.ddd}) - ${telefone.telefone}
            `)
        })
    })
})
// const telefone = obterTelefone(usuario.id)


// console.log('telefone', telefone)