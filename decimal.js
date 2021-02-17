//decimal.js
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

console.log(`The decimal representation of number 0x123 is ${0x123}`); // 291
console.log(`The decimal representation of number 0123 is ${0123}`); // 83
console.log(`The decimal representation of number 0b10011001 is ${0b10011001}`); // 153
console.log(`The decimal representation of number 0xdeadbeef is ${0xdeadbeef}`); // 3735928559
console.log(`The decimal representation of number 0xea7beef is ${0xea7beef}`); // 245874415
console.log(
  `The decimal representation of number 0b1111111111111111 is ${0b1111111111111111}`
); // 65535
console.log(`The decimal representation of number 0777 is ${0777}`); // 511

// Ma version

let numberToDecimal = [
  0x123,
  0123,
  0b10011001,
  0xdeadbeef,
  0xea7beef,
  0b1111111111111111,
  0777,
];

{
  console.log(numberToDecimal.toString());
}
// 291,83,153,3735928559,245874415,65535,511
