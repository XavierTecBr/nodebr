const {obterPessoas} = require('./service')

Array.prototype.customFilter = function (callback) {
    const list = []
    for (i in this) {
        const item = this[i]
        const result = callback(item, i, this)
        if (!result) continue;
        list.push(item)
    }
    return list
}

async function main(){
    try {        
        const {
            results
        } = await obterPessoas(`a`)
        
        // const familiaLars = results.filter(function (item) {
        //     const result = item.name.toLowerCase().indexOf(`lars`) !== -1
        //     return result
        // })

        const familiaLars = results.customFilter((item, index, list) => {
            console.log(`index: ${index}, length: ${list.length}`);            
            return item.name.toLowerCase().indexOf(`lars`) !== -1
        })

        const names = familiaLars.map(pessoa => pessoa.name)
        console.log(names);
        
    } catch (error) {
        console.error('Deu ruim', error)
    }
}
main()