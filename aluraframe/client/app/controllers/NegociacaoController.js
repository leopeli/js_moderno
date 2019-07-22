class NegociacaoController {

    constructor() {

        //quando você declara o query Selector no metodo constructor passa aa não precisar percorrer o Dom todas as vezes que incluir um nova negociação pois no momento que instancia a classe é como mantivesse o monitoramento ao elemento não precisando assim busca-lo a todo momento
        this._inputData = document.querySelector('#data')
        this._inputQuantidade = document.querySelector('#quantidade')
        this._inputValor = document.querySelector('#valor')
    }

    adiciona(event) {
        event.preventDefault();
        
        let helper = new DateHelper()
        
        let negociacao = new Negociacao (
            helper.parseTextoData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )

        console.log(negociacao.data)

        console.log(helper.parseDataTexto(negociacao.data))
    }
}