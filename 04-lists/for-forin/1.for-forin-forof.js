const service = require('./service')

async function main() 
{
    try{

        const result = await service.obterPessoas('a')

        let names = []

        console.time('tempo-for')
        for(let i = 0; i <= result.results.length -1; i++){
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('tempo-for')


        names = []
        console.time('tempo-forin')
        for(let i in result.results) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('tempo-forin')

        names = []
        console.time('tempo-forof')
        for(pessoa of result.results) {
            names.push(pessoa.name)
        }
        console.timeEnd('tempo-forof')


        console.log('names', names)
    }catch(error){
        console.error('erro interno', error)
    }
}

main()