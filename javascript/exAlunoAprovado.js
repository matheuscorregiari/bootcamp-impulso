const Aluno = [{
    nome: 'João',
    nota: 3 ,
    turma: '1B',
},
{
    nome: 'Maria',
    nota: 10, 
    turma: '1B',
},
{
    nome: 'José',
    nota: 7 ,
    turma: '2C',
}]


function alunosAprovados(arr, media){
    let aprovados = [];
    
    for( i = 0; i < arr.length; i++){
        
        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(Aluno, 5))