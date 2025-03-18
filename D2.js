/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 5;
const num2 = 3;
if (num1 === num2) {
  console.log("num1 e num2 sono uguali");
} else if (num1 > num2) {
  console.log(num1 + " è maggiore di " + num2);
} else {
  console.log(num2 + " è maggiore di " + num1);
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num2 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num1 % 5 === 0) {
  console.log(num1 + " è divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num1 === 8 || num2 === 8) {
  console.log("Uno dei due numeri è uguale a 8");
}
if (num1 + num2 === 8 && (num1 - num2 === 8 || num2 - num1 === 8)) {
  console.log("la loro addidione e sottrazione è ugauale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const art1 = 20;
const art2 = 6;
const art3 = 5;
let totalShoppingCart = art1 + art2 + art3;
let freeShipping = true;
if (totalShoppingCart <= 50) {
  totalShoppingCart += 10;
  freeShipping = false;
}
console.log("Il costo totale è pari a " + totalShoppingCart);
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart = art1 * 0.2 + art2 * 0.2 + art3 * 0.2;
if (freeShipping) {
  console.log("La spedizione è gratuita");
} else {
  console.log("La spedizione costa 10$");
  totalShoppingCart += 10;
}
console.log("Il costo totale dop lo sconto del 20% è: " + totalShoppingCart);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let var1 = 2;
let var2 = 15;
let var3 = 8;
let max;
let mid;
let min;
if (var1 > var2 && var1 > var3) {
  max = var1;
  if (var3 > var2) {
    mid = var3;
    min = var2;
  } else {
    mid = var2;
    min = var3;
  }
} else if (var2 > var1 && var2 > var3) {
  max = var2;
  if (var3 > var1) {
    mid = var3;
    min = var1;
  } else {
    mid = var1;
    min = var3;
  }
} else {
  max = var3;
  if (var2 > var1) {
    mid = var2;
    min = var1;
  } else {
    mid = var1;
    min = var2;
  }
}
console.log("Le variabili in ordine decrescente: \n" + max + " " + mid + " " + min);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let test = 12;
if (typeof test === "number") {
  console.log(test + " è un numero");
} else {
  console.log(test + " non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let isEven = 8;
if (isEven % 2 === 0) {
  console.log(isEven + " è pari");
} else {
  console.log(isEven + " è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
  if (val < 5) {
    console.log("Meno di 5");
  }
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numToTen = [];
numToTen.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numToTen.splice(9, 1, 100);
