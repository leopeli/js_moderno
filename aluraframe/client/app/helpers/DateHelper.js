class DateHelper {

    parseDataTexto(data) {
        return `${data.getDate()}/${data.getMonth() - 1}/${data.getFullYear()}`
    }

    parseTextoData(texto) {
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2))
    }

}