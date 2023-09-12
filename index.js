

pergunta2 = prompt("Você acha que é possivel um virús zumbi?");
if(pergunta2 === "sim") {console.log("ok, proxima");
} else if (pergunta2 === "não") {
    console.log("Certo, seguimos para proxima.");
} else {console.log("Apenas com 'sim' ou 'não'.");}


let condição1 = true;
if (condição1){
    console.log('entrei no if 1!');
}
let condição2 = false;{
    console.log('Entrei no if 2!');
}
let num1;
let num2;

num1 = prompt("Digite um numero.");
num2 = prompt("Digite outro numero.");
if (num1 === num2) {console.log("Sucesso.");}
else if (num1 !== num2) {console.log("Erou.");
    
}

function comparaNumeros(a, b) {
    if (a === b) { return "Sucesso";
        
    }
}
console.log(comparaNumeros(2,3));

function nomeIdade(idade, maiorDedade) {
    let nome;
    if(idade >= 18) {return nome, 'você pode dirigir'}
    else if (idade < 18) {nome, 'você não pode dirigir' 
    }
}
console.log(nomeIdade(20,18));

function comparaDoisNumeros(a, b) {
    if (a === b) {
        return 'iguais'
    }
    else { 
        return "diferentes"
    }
}
console.log(comparaDoisNumeros(
    Number(prompt("Digite um numero.")),
    Number(prompt("Digite outro numero"))
));

let condicao1 = false
let condicao2 = true

if (condicao1) {
    console.log('Entrei no if 1!');
} else {
    if (condicao2) {
        console.log('Entrei no if 2!');
    }
}


function comparadorDeNumeros(a, b) {
    if (a >= b) {
        return 'maior ou igual'
    }
    else if(a <= b) {
        return "menor ou igual"
    }else {
        return 'Diferentes'
    }
}
console.log(comparadorDeNumeros(
    Number(prompt("Digite um numero.")),
    Number(prompt("Digite outro numero"))
));

let pokemons = prompt("Escolha um para iniciar: Bulbassauro, Squartle, Charmander.")
switch (pokemons){
    case 'Bulbassauro':
        console.log('Bulbassauro é um Pokemon do Tipo Planta e veneno');
        break
        case 'Squartle':
            console.log('Squartle é um Pokemon Do Tipo Água');
            break
            case 'Charmander':
                console.log('Charmander é um Pokemon do tipo Fogo');
                break
                default:
                    console.log('Pokemon não encontrado.');
}
