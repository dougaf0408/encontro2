const quantidadedealunos = 14;
for(let x = 0; x <= quantidadedealunos; x++){
    if(x == 0 ){
        console.log("O numero "+ x + " é zero")
    }
    else if(x % 2 == 0){
        console.log("O numero: " + x + " par")
    }
    else{
        console.log("O numero: " + x + " impar")
    }
}