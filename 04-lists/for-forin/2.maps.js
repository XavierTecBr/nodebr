const service  = require('./service')

Array.prototype.customMap = function (callback) {
    const newValues = []
    for (let i = 0; i <= this.length -1; i++) {
        const result = callback(this[i], i)
        newValues.push(result)
    }

    return newValues
}

async function main() {
    try {
        const result = await service.obterPessoas('a')

        console.time('customMap')
        const names = result.results.customMap((pessoa, indice) => `[${indice}] - ${pessoa.name}`)
        console.timeEnd('customMap')
        console.log(names);
        
    } catch (error) {
        console.error(error)
    }
}

main()