// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,stampa un messaggio appropriato sull’esito del controllo.

/*
1- creare un array di email
2- inizializzo una costante di default NON TROVATA (false)
3- dichiaro un prompt
4- inizializzo ciclo FOR per cercare l'email inserita
5- dentro a FOR inserisco un IF:
      - SE l'email inserita è uguale a un email nella lista --> risultato = email trovata
6- quando la ricerca è stata terminata dichiaro un altro ciclo IF:
      - SE risultato = email trovata, allora dichiaro che è stata trovata
      - ALTRIMENTI dichiaro che NON è stata trovata
*/

const listaMail = ['nomecognome1@gmail.com',
'nomecognome2@gmail.com',
'nomecognome3@gmail.com',
'nomecognome4@gmail.com',
'nomecognome5@gmail.com',
'nomecognome6@gmail.com',
'nomecognome7@gmail.com',
'nomecognome8@gmail.com',
'nomecognome9@gmail.com',
'nomecognome10@gmail.com',
];

console.log('elenco completo',listaMail);

const inserisciMail = prompt('Qual\'è la tua mail?');
console.log('email inserita è',inserisciMail);

let cercaMail = false;

for(let i = 0; i < listaMail.length; i++){
  
  if(listaMail[i] === inserisciMail){
    console.log('email inserita corrisponde a',listaMail[i]);
    cercaMail = true;
  }
}


const mymail = document.getElementById("mymail");

if(cercaMail == true){
  
  console.log(inserisciMail + ' trovata');

  mymail.innerHTML =
  `
  ${inserisciMail} è stata trovata
  `;
} else {
  
  console.log('email non trovata')
  
  mymail.innerHTML =
  `
  la mail ${inserisciMail} non è stata trovata
  `;
}