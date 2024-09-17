const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gammes = {
  do: ['do', 'ré', 'mi', 'fa', 'sol', 'la', 'si'],
  ré: ['ré', 'mi', 'fa#', 'sol', 'la', 'si', 'do#'],
  mi: ['mi', 'fa#', 'sol#', 'la', 'si', 'do#', 'ré#'],
  fa: ['fa', 'sol', 'la', 'si', 'do', 'ré', 'mi'],
  sol: ['sol', 'la', 'si', 'do', 'ré', 'mi', 'fa#'],
  la: ['la', 'si', 'do#', 'ré', 'mi', 'fa#', 'sol#'],
  si: ['si', 'do#', 'ré#', 'mi', 'fa#', 'sol#', 'la#']
};

function printGamme(gammeName) {
  const gamme = gammes[gammeName];
  if (gamme) {
    console.log(gamme);
    console.log(`L'accord parfait de la gamme de ${gammeName} est : ${gamme[0]} - ${gamme[2]} - ${gamme[4]}`);
  } else {
    console.log('Gamme non reconnue.');
  }
}

function gamme() {
  rl.question('Quelle gamme voulez-vous choisir ? (Tapez "exit" pour sortir)\n', (answer) => {
    const lowerCaseAnswer = answer.toLowerCase();
    if (lowerCaseAnswer === 'exit') {
        console.log("merci et au revoir");
      rl.close();
    } else {
      printGamme(lowerCaseAnswer);
      gamme(); // appel récurssif
    }
  });
}

gamme();
