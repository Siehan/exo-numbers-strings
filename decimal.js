/*
Écrivez un programme qui affiche sur la console, les nombres suivants en base 10 (c'est à dire en décimal)
0x123
0123
0b10011001
0xdeadbeef
0xea7beef
0b1111111111111111
0777
*/

let numbers = [
  0x123,
  0123,
  0b10011001,
  0xdeadbeef,
  0xea7beef,
  0b1111111111111111,
  0777,
];

if (numbers <= 9) {
  console.log(numbers.toString());
}
