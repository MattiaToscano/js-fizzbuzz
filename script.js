// Inizializzo ciclo for.
for(let i = 1; i<=100; i++){ 
    if(i % 3 ===0 && i % 5 ===0){ // Se il numero è divisibile per 3 e 5 stampo FizzBuzz.
        console.log(`FizzBuzz`);  
    }
    else if(i % 3 ==0){ // Se il numero è divisibile per 3 stampo Fizz.
        console.log(`Fizz`);  
    }
    else if(i % 5 ==0){ // Se il numero è divisibile per 5 stampo Buzz.
        console.log(`Buzz`); 
    }  
    else{   //Se il numero non è divisibile per 3 e 5 stampo il numero.
        console.log(i);
    }
}
    


