function substituiPares(array){
    for(let i = 0; i < array.length; i++){
        if(array === 0){
            console.log('Você já é zero')
        }else if(array [i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }

    return array;
}

let arr = [1, 3, 4, 6, 90, 360];
console.log(substituiPares(arr));