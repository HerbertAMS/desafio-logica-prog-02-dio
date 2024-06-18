
let resultado = infoHeroi(21,10)
console.log(`O Herói tem de saldo de ${resultado[0]} vitórias e está no nível de ${resultado[1]}`); 

function infoHeroi (qtdVitorias, qtdDerrotas){
    let nivel = qtdVitorias - qtdDerrotas
    let nomeNivel
    
    switch (true) {
        case nivel <= 10:
            nomeNivel = "Ferro";
            break;
        case nivel <= 20:
            nomeNivel = "Bronze";
            break;
        case nivel <= 50:
            nomeNivel = "Prata";
            break;
        case nivel <= 80:
            nomeNivel = "Ouro";
            break;
        case nivel <= 90:
            nomeNivel = "PDiamente";
            break;
        case nivel <= 100:
            nomeNivel = "Lendário";
            break;
        default:
            nomeNivel = "Imortal";
    }
    return [nivel, nomeNivel];
}




