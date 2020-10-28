//creo input per inserire la parola
var stringInput = prompt("inserisci una parola palindroma");

//creo le condizioni per cui la parola è polindorma o no. Dentro metto gli output
if (stringInput == stringReverse2(stringInput)){
  alert("La parola è palindroma!");
}else{
  alert("La parola non è palindroma!");
}
//creo la funzione che mi permette di generare l'inverso della parola inserita
function stringReverse(stringToReverse){
  var parola = stringToReverse.split("");
  parola.reverse();
  return parola.join("");
}
//creo la funzione che mi permette di generare l'inverso della parola inserita
function stringReverse2(stringToReverse){
  var newString = "";
  for (var i = stringToReverse.length -1; i >= 0; i--){
    newString += stringToReverse[i];
  }
  return newString;
}
//ALTRA VERSIONE ARRAY
// var stringInput = prompt("inserisci una parola palindroma");
// function array(stringInput){

//   for ( var i = -1; i >= stringInput.length; i--){
//   newString.push(stringInput[i]);
//   console.log(newString);
// }
// return newString;
// }
