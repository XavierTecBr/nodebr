const {obterPessoas} = require('./service')

Array.prototype.customReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for( let index = 0; index <= this.length -1; index++) {
        valorFinal = callback(valorFinal, this[index])
    }
    return valorFinal
}

async function main(){
    try {        
        const { results } = await obterPessoas(`a`)

        const pesos = results.map(item => parseInt(item.height))
        console.log('pesos', pesos)

        const total = pesos.customReduce((anterior, proximo) => {
            return anterior + proximo
        }, 0)
        console.log('peso total', total)

        const minhaLista = [
            ['erick', 'wendel'],
            ['NodeDr', 'NerdZao']
        ]

        const list = minhaLista.customReduce((anterior, proximo) => {
            return anterior.concat(proximo)
        }, [])
        .join(', ')

        console.log('list', list);
        
    } catch (error) {
        console.error('Deu ruim', error)
    }
}
main()