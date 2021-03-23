/*
showChar.js

Ecrivez un programme qui affiche ligne par ligne, l'index et le caractère situé à cet index de la phrase suivante:

"C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar."
Le format du message attendu pour chaque caractère sera par exemple:
Le caractère C est à l'index 0 Le caractère ' est à l'index 1
*/

/*
showChar.js 2

Améliorez l'exercice précédent pour écrire un message introductif avant l'exécution du programme.
Ce message devra afficher l'auteur et le livre dont est extrait cette phrase, ainsi que le nombre
de caractères que contient cette phrase
*/

let text = "C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar.";
console.log(
  `Cette phrase de "${text.length} caractères", est tirée de "Salammbô",\nroman historique de Gustave Flaubert, paru le 24 novembre 1862 chez Michel Lévy frères.\nIl a pour sujet la guerre des Mercenaires, IIIe siècle av. J.-C.`
);

// Affiche chaque caractère d'une string avec son index
for (let i = 0; i < text.length; ++i) {
  console.log(`Le caractère ${text[i]} est à l'index: ${i}`);
}

/* OUTPUT :

Cette phrase de "68 caractères", est tirée de "Salammbô",
roman historique de Gustave Flaubert, paru le 24 novembre 1862 chez Michel Lévy frères.
Il a pour sujet la guerre des Mercenaires, IIIe siècle av. J.-C.

Le caractère C est à l'index: 0
Le caractère ' est à l'index: 1
Le caractère é est à l'index: 2
Le caractère t est à l'index: 3
Le caractère a est à l'index: 4
Le caractère i est à l'index: 5
Le caractère t est à l'index: 6
Le caractère   est à l'index: 7
Le caractère à est à l'index: 8
Le caractère   est à l'index: 9
Le caractère M est à l'index: 10
Le caractère é est à l'index: 11
Le caractère g est à l'index: 12
Le caractère a est à l'index: 13
Le caractère r est à l'index: 14
Le caractère a est à l'index: 15
Le caractère , est à l'index: 16
Le caractère   est à l'index: 17
Le caractère f est à l'index: 18
Le caractère a est à l'index: 19
Le caractère u est à l'index: 20
Le caractère b est à l'index: 21
Le caractère o est à l'index: 22
Le caractère u est à l'index: 23
Le caractère r est à l'index: 24
Le caractère g est à l'index: 25
Le caractère   est à l'index: 26
Le caractère d est à l'index: 27
Le caractère e est à l'index: 28
Le caractère   est à l'index: 29
Le caractère C est à l'index: 30
Le caractère a est à l'index: 31
Le caractère r est à l'index: 32
Le caractère t est à l'index: 33
Le caractère h est à l'index: 34
Le caractère a est à l'index: 35
Le caractère g est à l'index: 36
Le caractère e est à l'index: 37
Le caractère , est à l'index: 38
Le caractère   est à l'index: 39
Le caractère d est à l'index: 40
Le caractère a est à l'index: 41
Le caractère n est à l'index: 42
Le caractère s est à l'index: 43
Le caractère   est à l'index: 44
Le caractère l est à l'index: 45
Le caractère e est à l'index: 46
Le caractère s est à l'index: 47
Le caractère   est à l'index: 48
Le caractère j est à l'index: 49
Le caractère a est à l'index: 50
Le caractère r est à l'index: 51
Le caractère d est à l'index: 52
Le caractère i est à l'index: 53
Le caractère n est à l'index: 54
Le caractère s est à l'index: 55
Le caractère   est à l'index: 56
Le caractère d est à l'index: 57
Le caractère ' est à l'index: 58
Le caractère H est à l'index: 59
Le caractère a est à l'index: 60
Le caractère m est à l'index: 61
Le caractère i est à l'index: 62
Le caractère l est à l'index: 63
Le caractère c est à l'index: 64
Le caractère a est à l'index: 65
Le caractère r est à l'index: 66
Le caractère . est à l'index: 67
*/
