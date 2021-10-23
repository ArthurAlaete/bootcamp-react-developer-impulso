

console.log('-=-=-=-=-=-=-=-=- MAP COM THIS =-=-=-=-=-=-=-=-')

const maca = {
    value: 2
}

const laranja = {
    value: 3
}

const numeros = [4, 8]

function mapComThis(array, thisArg) { // O thisArg referenciará o objeto passsado como parâmetro
    return array.map(function(item) {
        return item * this.value;
    }, thisArg)
}

console.log('Quando this é maça:' , mapComThis(numeros, maca));
console.log('Quando this é Laranja:', mapComThis(numeros, laranja));


console.log('-=-=-=-=-=-=-=-=- MAP SEM THIS =-=-=-=-=-=-=-=-');

const numeros02 = [1, 2, 4, 6, 10]

function mapSemThis(array) {
    return array.map(function(item) {
        return item * 2
    })
}

console.log('Resultado sem this (multiplicado por 2): ', mapSemThis(numeros02))