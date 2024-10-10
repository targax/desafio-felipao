
let herois = [
    { nome: "Targa", xp: 5000 },
    { nome: "Felipao", xp: 2500 },
    { nome: "Jett", xp: 10500 },
    { nome: "Sage", xp: 7500 }
];

for(let i = 0; i < herois.length; i++){
    let heroi = herois[i]
    let nivelHeroi = "";

    if(heroi.xp < 1000){

        nivelHeroi = "Ferro";

    }else if((heroi.xp > 1000) && ( heroi.xp <= 2000)){

        nivelHeroi = "Bronze";

    }else if((heroi.xp > 2000) && ( heroi.xp <= 5000)){
            
        nivelHeroi = "Prata";

     }else if((heroi.xp > 5000) && ( heroi.xp <= 7000)){
            
        nivelHeroi = "Ouro";
            
    }else if((heroi.xp > 7000) && ( heroi.xp <= 8000)){
            
        nivelHeroi = "Platina";

     }else if((heroi.xp > 8000) && ( heroi.xp <= 9000)){
            
        nivelHeroi = "Ascendente";

    }else if((heroi.xp > 9000) && ( heroi.xp <= 10000)){
            
        nivelHeroi = "Imortal";

    }else if(heroi.xp >= 10001 ){
            
        nivelHeroi = "Radiante";
    }

    console.log("O Herói de nome " + heroi.nome + " está no nível de " + nivelHeroi)
}

