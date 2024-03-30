// Gioco dei dadi 🎲
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let player = Math.floor(Math.random() * (6 - 1)) + 1;

	
let computer = Math.floor(Math.random() * (6 - 1)) + 1;
console.log(computer);

if (player > computer) {
	console.log("hai vinto");
	document.getElementById("result").innerHTML = `
	complmimenti hai vinto`;
} else if (player === computer) {
	console.log("hai pareggiato");
	document.getElementById("result").innerHTML = `
	hai pareggiato, ritenta`;
} else {
	console.log("hai perso");
	document.getElementById("result").innerHTML = `
	mi dispiace hai perso , ritenta.`;
}
