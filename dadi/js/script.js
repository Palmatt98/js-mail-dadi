// Gioco dei dadi 🎲
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let player = Math.floor(Math.random() * (6 - 1)) + 1;

console.log(player);

let computer = Math.floor(Math.random() * (6 - 1)) + 1;
console.log(computer);

let srcPlayer = "";
let srcCPU = "";

if (player === 1) {
	srcPlayer = "dice-one-svgrepo-com.svg";
} else if (player === 2) {
	srcPlayer = "dice-two-svgrepo-com.svg";
} else if (player === 3) {
	srcPlayer = "dice-three-svgrepo-com.svg";
} else if (player === 4) {
	srcPlayer = "dice-four-svgrepo-com.svg";
} else if (player === 5) {
	srcPlayer = "dice-five-svgrepo-com.svg";
} else if (player === 6) {
	srcPlayer = "dice-six-svgrepo-com.svg";
}

if (computer === 1) {
	srcCPU = "dice-one-svgrepo-com.svg";
} else if (computer === 2) {
	srcCPU = "dice-two-svgrepo-com.svg";
} else if (computer === 3) {
	srcCPU = "dice-three-svgrepo-com.svg";
} else if (computer === 4) {
	srcCPU = "dice-four-svgrepo-com.svg";
} else if (computer === 5) {
	srcCPU = "dice-five-svgrepo-com.svg";
} else if (computer === 6) {
	srcCPU = "dice-six-svgrepo-com.svg";
}

const dadiElement = document.querySelector("#dadi");
dadiElement.innerHTML = `
	Giocatore: <img src="/dadi/img/${srcPlayer}" style="width: 60px">  - CPU: <img src="/dadi/img/${srcCPU}" style="width: 60px"> `;
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
