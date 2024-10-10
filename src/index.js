
let nomeHeroi = "Targa"
let heroiXp = 5000;
let nivelHeroi = "";

if(heroiXp < 1000){

    nivelHeroi = "Ferro";

}else if((heroiXp > 1000) && ( heroiXp <= 2000)){

    nivelHeroi = "Bronze";

}else if((heroiXp > 2000) && ( heroiXp <= 5000)){
    
    nivelHeroi = "Prata";

}else if((heroiXp > 5000) && ( heroiXp <= 7000)){
    
    nivelHeroi = "Ouro";
    
}else if((heroiXp > 7000) && ( heroiXp <= 8000)){
    
    nivelHeroi = "Platina";

}else if((heroiXp > 8000) && ( heroiXp <= 9000)){
    
    nivelHeroi = "Ascendente";

}else if((heroiXp > 9000) && ( heroiXp <= 10000)){
    
    nivelHeroi = "Imortal";

}else if(heroiXp >= 10001 ){
    
    nivelHeroi = "Radiante";

}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)