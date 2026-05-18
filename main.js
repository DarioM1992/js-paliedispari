
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


//creare una funzione che mi dica se la parola inserita è palindroma o meno
// const word = prompt("scrivi una sola parola");
function checkWord() {
    let palindromicWord = "";

    for(let i = word.length - 1; i >= 0; i--) {
        palindromicWord += word[i];
    }

    if (word === palindromicWord) {
        return true;
    } else {
        return false;
    }
}
console.log(checkWord());




//ESERCIZIO "2"
//Due giocatori,ognuno sceglie se pari o dispari! Quindi creare una funzione per questo
//Inserire un mathfloor e math random per lanciare numero da 1 a 5 usando una funzione per entrambi i giocatori
//Sommare le due cifre randomiche e capire se il risultato è appunto pari o dispari
//Dire chi ha vinto dei due utenti