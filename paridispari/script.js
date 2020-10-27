//voglio creare una checkbox che mi dia la scelta dell'utente tra pari e dispari; voglio un input text dove l'utente possa inserire il numero scelto; con un bottone voglio che i due valori (pari/dispari e numero) vengano presi; voglio poi un altro bottone con il quale si genera il numero random; faccio la somma tra il numero dell'utente e quello random; se il risultato è uguale a quello scelto dall'utente allora ha vinto, in caso contrario ha perso
//creo le costanti che mi servono
var evenOdd = document.getElementById("paridispari");
var num = document.getElementById("numero");
var MIN_NUM = 1;
var MAX_NUM = 5;
//prendo gli input dell'utente con il click sul primo bottone
var generate = document.getElementById("bottoneUt");
generate.addEventListener("click", function(){
  evenOdd = document.getElementById("paridispari").value;
  num = document.getElementById("numero").value;
  //stampo il numero dell'utente
  document.getElementById("numeroUt").innerHTML = num;
  if(num < MIN_NUM || num > MAX_NUM){
    alert("Hai messo un numero troppo grande o troppo piccolo")
  }
  //con il click al secondo bottone creo un numero random
  var randomnum = document.getElementById("bottoneRandom");
  randomnum.addEventListener("click", function(){
    var random = Math.floor(Math.random() * (MAX_NUM - MIN_NUM) + MIN_NUM);
    //stampo il numero random
    document.getElementById("rand").innerHTML = random;
    //creo con una funzione il totale del numero random e del numero inserito dall'utente
    function somma(num1, num2){
      var addizione = num1 + num2;
      return addizione;
    }
    var totale = somma(random, num);
    var message = document.getElementById("result");
    //creo le condizioni
    if(totale % 2 == 0 && evenOdd == "pari"){
      message.innerHTML = "Hai vinto!";
    }
    else if(totale % 2 == 1 && evenOdd == "dispari"){

      message.innerHTML = "Hai vinto!";
    }
    else{
      message.innerHTML = "Mi dispiace, hai perso";
    }
  })
})


// document.getElementById("rand").innerHTML = randomnum();
// var somma = num + randomnum();
// if (somma == pari && even == "pari"){
//   alert("Complimenti!")
// }
// else if( somma == dispari && odd == "dispari"){
//   alert("Complimenti!")
// }
// else{
//   alert("Mi dispiace, hai perso")
// }
