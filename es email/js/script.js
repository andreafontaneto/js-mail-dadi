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

const listaMail = ['nomecognome1@mail.com',
'nomecognome2@mail.com',
'nomecognome3@mail.com',
'nomecognome4@mail.com',
'nomecognome5@mail.com',
'nomecognome6@mail.com',
'nomecognome7@mail.com',
'nomecognome8@mail.com',
'nomecognome9@mail.com',
'nomecognome10@mail.com',
];

const cercaMail = false;

