
//prompt per chiedere all'utente una parola
const word = prompt("scrivi una sola parola");


//verifica del prompt che sia una sola parola e non numeri o appunto più parole
if (word === "") {
    alert ("ERRORE: Non hai inserito nulla!");
} else if (word.includes(" ")) {
    alert ("ERRORE: Hai inserito più di una parola");
} else if (!isNaN(word)) {
    alert ("ERRORE: i numeri non sono validi!")
} else {
    console.log(word);
}