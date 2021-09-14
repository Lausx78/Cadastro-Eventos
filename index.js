let meuNome=Rodrigo
let dataAtual=14
let dataEvento=30
let idadeParticipante=17
let participantes=["Rodrigo", "Marcia", "Maria", "Joao"]
let permitirCadastro=true

if (dataEvento<dataAtual){
    console.log ('Data inválida')
    permitirCadastro=false
}

if (idadeParticipante,18){
    console.log ('Idade não autorizada para o cadastro')
    permitirCadastro=false
}

if (participantes.length>100){
    console.log ('Desculpe, não temos mais vagas disponíveis')
    permitirCadastro=false
}

if (permitirCadastro){
    participantes.push ('meuNome')
    console.log ('Cadastro realizado com sucesso')
} else {
    console.log ('Retorne, problemas ao se cadastrar')
        }

console.log ('Lista de participantes:')
for (let i=0;i<participantes.length;i++){
    console.log (participantes [i])
}