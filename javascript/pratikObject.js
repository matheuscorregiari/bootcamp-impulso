const User ={
    age: 26,
    firstName:'Matheus',
    lastName:'Corregiari',
}

function getprops(firstName, lastName){
    
    console.log(this.firstName,this.lastName)
}


getprops.call(User);