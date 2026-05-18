const word = prompt("scrivi una sola parola");

if (word === "") {
    alert ("ERRORE: Non hai inserito nulla!");
} else if (word.includes(" ")) {
    alert ("ERRORE: Hai inserito più di una parola");
} else if (!isNaN(word)) {
    alert ("ERRORE: i numeri non sono validi!")
} else {
    console.log(word);
}