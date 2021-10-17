// Atividade 1
function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i ++) {
        
        const { nota, nome } = arr[i];
        
        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

const alunos = [
    {
        nome: 'Arthur',
        nota: 7,
        turma: '1B'
    },
    {
        nome: 'Aluno 02',
        nota: 4,
        turma: '1B'
    },
    {
        nome: 'Aluno 03',
        nota: 8,
        turma: '1B'
    },
    {
        nome: 'Aluno 04',
        nota: 5,
        turma: '1B'
    },
]

console.log(alunosAprovados(alunos, 5));


// Atividade 2
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa = {
    nome: "Arthur",
    idade: 26
}

console.log(calculaIdade.call(pessoa, 10));
console.log(calculaIdade.apply(pessoa, [4]));

