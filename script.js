// lógica dos alimentos e bebidas.
// Carne= 400gr por pessoa  +6 horas = 650gr
// Cerveja = 1200ml por pessoa +6 horas = 2000ml
// Refrigerante/agua = 1000ml +6 horas = 1500ml

// Criança vale por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCrianca = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let crianca = inputCrianca.value;
    let duracao = inputDuracao.value;

    let QdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2  * crianca);
    let QdtTotalCerveja = cervejaPP(duracao) * adultos;
    let QdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2  * crianca);

    resultado.innerHTML = `<p>${QdtTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(QdtTotalCerveja/355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(QdtTotalBebidas/2000)} Pet's 2L de Bebidas</p>`

}

function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    }else{
        return 400;
    }
};
function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
};
function bebidasPP(duracao){
    if (duracao >= 6){
        return 1000;
    }else{
        return 1500;
    }
}