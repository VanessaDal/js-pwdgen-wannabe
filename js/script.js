var nome = prompt("Qual è il tuo nome?");

var cognome = prompt("Qual è il tuo cognome?");

var colore = prompt("Qual è il tuo colore preferito?");

var password = nome+cognome+colore+19;

console.log(password);

document.getElementById("titolo").innerHTML = "Grazie! Abbiamo generato la password: " + password;