// Atividade 01
function getAdmins(map) {
    let admins = []

    for ([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }

    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Arthur', 'Admin');
usuarios.set('Ana', 'User');


console.log(getAdmins(usuarios));

// Atividade 02
const meuArray = [30, 30, 41, 41 , 5, 233, 450];

function valoresUnicos(array){
    const meuSet = new Set(array);

    return [...meuSet];
}

console.log(valoresUnicos(meuArray));