const Pessoa = 
{
    name: 'Maria',
    age: 32,
}

function calcAge(years){
    return `Daqui a ${years} anos, ${this.name} terá ${this.age + years}`
}

console.log(calcAge.call(Pessoa, 15))