// Solução 1
function verificaPalindromo(palavra) {
    if (!palavra) return "String inexistente";

    let palavraInvertida = palavra.split("").reverse().join("");

    return palavra === palavraInvertida
}

console.log(verificaPalindromo('ovo'))


// Solução 2
function verificaPalindromo2(palavra) {
    if (!palavra) return "String inexistente";

    for(let i = 0; i < palavra.length / 2; i++) {
        if(palavra[i] !== palavra.length - 1 - i) {
            return false;
        }
    }

    return true;
}