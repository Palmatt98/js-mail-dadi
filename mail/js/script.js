// Mail 📩
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
let mailList = [
	"Andrea@gmail.com",
	"Federico@gmail.com",
	"Cristia@gmail.com",
	"Giorgio@gmail.com",
	"Davide@gmail.com",
	"Alberto@gmail.com",
	"Mauro@gmail.com",
	"Matteo@gmail.com",
	"Michele@gmail.com",
	"Pasquale@gmail.com",
	"AndreaF@gmail.com",
	"Simone@gmail.com",
	"Mattia@gmail.com",
	"Larisa@gmail.com",
	"Manuel@gmail.com",
];
console.table(mailList);
let emailResult = false;
let request = prompt("scrivi la tua e-mail")
console.log("request: " + request);

for (let i = 0; i < mailList.length; i++){
	if (request === mailList[i]) {
		
		emailResult = true
		
	}
}
if (emailResult === true){
	
	console.log("l'email esiste");
}else{
	console.log("l'email non esiste");
}