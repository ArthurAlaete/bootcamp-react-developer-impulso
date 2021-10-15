function resolution(number1, number2) {

    if (!number1 || !number2) {
        console.log('Digite número válidos.');
    } else {
        const equal = number1 === number2 ? 'são iguais' : 'não são iguais';
        const sum = number1 + number2;
    
        const upperThen10 = sum > 10 
            ? 'maior que 10' 
            : 'menor que 10';
        
        const lowerThen10 = sum < 20 
            ? 'menor que 20' 
            : (sum === 20 ? 'igual a 20' : 'maior que 20');
                
        console.log(`
            Os números ${number1} e ${number2} ${equal}.
            Sua soma é ${sum}, que é ${upperThen10} e ${lowerThen10} 
        `);
    }
}

resolution(10, 10)