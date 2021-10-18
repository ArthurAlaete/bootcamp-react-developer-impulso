function arrayValidation(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('Envie os parâmetros');
        
        if (typeof arr !== 'object') throw new TypeError('O array precisa ser do tipo object.');
        
        if (typeof num !== 'number') throw new TypeError('O número precisa ser do tipo number.');
    
        if (arr.length !== num) throw new RangeError('Tamanho inválido');

        return arr;

    } catch (err) {
        if (err instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError');
            console.log(err.message);
            console.log(err.stack);
        } else if (err instanceof TypeError) {
            console.log('Este erro é um TypeError');
            console.log(err.message);
            console.log(err.stack);
        } else if (err instanceof RangeError) {
            console.log('Este erro é um RangeError');
            console.log(err.message);
            console.log(err.stack);
        } else {
            console.log('Ocorreu um tipo de erro não esperado.')
        }

    }
}

// console.log(arrayValidation([], '5'))
// console.log(arrayValidation(1, 1))
// console.log(arrayValidation())
console.log(arrayValidation([1, 2, 3, 4, 5], 5))