// //creo input per inserire la parola
// var stringInput = prompt("inserisci una parola palindroma");
// //creo la funzione che mi permette di generare l'inverso della parola inserita
// function isPalindroma(stringInput){
//   var parola = stringInput.split("");
//   console.log(parola);
//   parola.reverse();
//   console.log(parola);
//   return parola.join("");
//   console.log(parola);
// }
// //creo le condizioni per cui la parola è polindorma o no. Dentro metto gli output
// if (stringInput == isPalindroma(stringInput)){
//   alert("La parola è palindroma!");
// }else{
//   alert("La parola non è palindroma!");
// }
//ALTRA VERSIONE ARRAY
var stringInput = prompt("inserisci una parola palindroma");
function array(stringInput){
  var newString = "";
  for ( var i = -1; i >= stringInput.length; i--){
  newString.push(stringInput[i]);
  console.log(newString);
}
return newString;

}
