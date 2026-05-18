//ESERCIZIO "2"
//Due giocatori,ognuno sceglie se pari o dispari! Quindi creare una funzione per questo
//Inserire un mathfloor e math random per lanciare numero da 1 a 5 usando una funzione per entrambi i giocatori
//Sommare le due cifre randomiche e capire se il risultato è appunto pari o dispari
//Dire chi ha vinto dei due utenti

function pariODispari() {
    let choiceTypeG1 = prompt("Giocatore 1 scegli: pari o dispari!")
    if (choiceTypeG1 !== "pari" && choiceTypeG1 !== "dispari"){
    alert ("ERRORE: devi per forza scegliere tra pari o dispari");
    } else {
    alert ("OK!Hai scelto " + choiceTypeG1 );
    }
    //ora dovrei aggiungere che se la scelta di G1 è pari automaticamente la scelta del G2 + dispari 
    let choiceTypeG2 = (choiceTypeG1 === "pari")? "dispari" : "pari";
     alert ("Giocatore 2 di conseguenza tu avrai " + choiceTypeG2);



//ora farò dare i numeri ai due giocatori
const numeroG1 = Math.floor(Math.random() * 5) +1;
const numeroG2 = Math.floor(Math.random() * 5) +1;
const somma = numeroG1 + numeroG2;
 
console.log({ numeroG1, numeroG2, somma });
// calcolo col modulo per dare la vittoria a uno dei due
if (somma % 2 === 0){
    if (choiceTypeG1 === "pari"){
    alert ("Vince il giocatore 1")
    } else {
        alert("Vince il giocatore 2")
    }
} else {
    if (choiceTypeG1 === "dispari"){
    alert ("Vince il giocatore 1")
    } else {
        alert("Vince il giocatore 2")
    }
}
}
pariODispari();