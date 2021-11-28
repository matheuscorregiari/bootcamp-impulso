function getAdmins(map){
    let admins = [];
    
    for([key, value] of map){
        if(value === 'admin'){
            admins.push(key);
        }
    }
    return admins;
}



const usuarios = new Map();

usuarios.set('Matheus', 'admin');
usuarios.set('Eloisa', 'admin');
usuarios.set('Raphaella', 'user');

console.log(getAdmins(usuarios));


const meuArray = [30, 45, 27, 100000, 08]

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]
}

console.log(valoresUnicos(meuArray));


