//creare un oggetto 'ingredienti' in cui inserire tutti gli array necessari

let ingredienti = {
  aggiunte: [
    "burrata",
    "basilico",
    "origano",
    "salvia",
    "patè di olive",
    "pistacchi",
  ],

  impasti: [
    "normale",
    "integrale",
    "al kamut",
    "al carbone vegetale",
    "senza glutine",
    "alla moringa",
  ],

  formaggi: [
    "mozzarella",
    "scamorza",
    "caprino",
    "gorgonzola",
    "taleggio",
    "provola",
  ],

  verdure: [
    "rucola",
    "verza",
    "songino",
    "radicchio",
    "insalata romana",
    "zucchine",
    "mais",
    "melanzane",
    `peperoni`,
    "funghi",
  ],

  proteine: [
    "salsiccia",
    "salame piccante",
    "wurstel",
    "pancetta",
    "lardo",
    "gamberetti",
    "salmone",
    "tonno",
    "mortadella",
  ],
};

//genera un numero casuale intero, del valore massimo = array.at(-1), che si inserisce poi come indice dell'array per prenderne un valore casuale ad ogni caricamento - inserire tutto in una funzione da poter richiamare facilmente nel resto del documento

function selezionaIngrediente(arrayIngredienti) {
  let ingredienteScelto =
    arrayIngredienti[Math.floor(Math.random() * arrayIngredienti.length)];
  return ingredienteScelto; //IMPORTANTE RETURN
}

// GENERARE AGGIUNTE

function generaAggiunta() {
  let aggiuntaRandom = selezionaIngrediente(ingredienti.aggiunte);

  document.getElementById("btn-aggiunta");
  aggiunta.innerHTML = aggiuntaRandom;
}

// GENERARE IMPASTI

function generaImpasto() {
  let impastoRandom = selezionaIngrediente(ingredienti.impasti);
  document.getElementById("btn-impasto");
  impasto.innerHTML = impastoRandom;
}

//GENERA INGREDIENTI - 3 elementi random

function generaIngredienti() {
  let formaggiRandom = selezionaIngrediente(ingredienti.formaggi);
  let verdureRandom = selezionaIngrediente(ingredienti.verdure);
  let proteineRandom = selezionaIngrediente(ingredienti.proteine);

  document.getElementById("btn-ingredienti");
  ingrediente.innerHTML = `${formaggiRandom}, ${verdureRandom}, ${proteineRandom}`;
}

//GENERA PIZZA COMPLETA RICHIAMANDO TUTTE LE FUNZIONI INSIEME

function generaTutto() {
  /*  document.getElementById("btn-pizzaCompleta"); */
  generaIngredienti();
  generaAggiunta();
  generaImpasto();
}
