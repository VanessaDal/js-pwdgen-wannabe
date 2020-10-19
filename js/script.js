var nome = prompt("Qual è il tuo nome?");

var cognome = prompt("Qual è il tuo cognome?");

var colore = prompt("Qual è il tuo colore preferito?");

var password = nome+cognome+colore+Math.floor(Math.random() * 100);

console.log(password);

document.getElementById("titolo").innerHTML = "Grazie per aver compilato il form! Abbiamo generato per te la password: " + password;