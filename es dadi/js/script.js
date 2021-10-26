//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.Stabilire il vincitore, in base a chi fa il punteggio più alto.

/*
- creare 2 variabili (giocata UTENTE e giocata COMPUTER)
- far pescare un numero intero a caso da 1 a 6 tramite (Math.round(Math.random()*5)+1)
- creare un ciclo IF per decidere qual'è il numero più alto
*/


let giocataUtente = (Math.round(Math.random()*5)+1);
console.log('giocata utente',giocataUtente);

let giocataComputer = (Math.round(Math.random()*5)+1);
console.log('giocata computer',giocataComputer);

const play = document.getElementById('play');

if(giocataUtente == giocataComputer){
  console.log('Pareggio');
  
  play.innerHTML =
  `
  La tua giocata è ${giocataUtente}<br>
  La giocata del computer è ${giocataComputer}<br>
  ${giocataUtente} è uguale a ${giocataComputer}<br>
  Pareggio!
  `;
} else if(giocataUtente > giocataComputer){
  console.log('Utente vince');
  
  play.innerHTML =
  `
  La tua giocata è ${giocataUtente}<br>
  La giocata del computer è ${giocataComputer}<br>
  ${giocataUtente} è maggiore di ${giocataComputer}<br>
  Complimenti! Hai vinto!
  `;
} else {
  console.log('Computer vince');
  
  play.innerHTML =
  `
  La tua giocata è ${giocataUtente}<br>
  La giocata del computer è ${giocataComputer}<br>
  ${giocataUtente} è minore di ${giocataComputer}<br>
  Mi spiace! Hai perso!
  `;
};

