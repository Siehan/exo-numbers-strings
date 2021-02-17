// convert.js
/*
Écrivez un programme qui convertira les nombres suivants en binaire, octal et hexadécimal (utiliser .toString() pour cela):
10
15
16
5005
52390903
*/

// My way

let nb1 = 10;
{
  console.log(
    `${nb1} converted to binary = ${nb1.toString(2)}, to octal = ${nb1.toString(
      8
    )}, to hexadecimal = ${nb1.toString(16)}`
  );
}

let nb2 = 15;
{
  console.log(
    `${nb2} converted to binary = ${nb2.toString(2)}, to octal = ${nb2.toString(
      8
    )}, to hexadecimal = ${nb2.toString(16)}`
  );
}

let nb3 = 16;
{
  console.log(
    `${nb3} converted to binary = ${nb3.toString(2)}, to octal = ${nb3.toString(
      8
    )}, to hexadecimal = ${nb3.toString(16)}`
  );
}

let nb4 = 5005;
{
  console.log(
    `${nb4} converted to binary = ${nb4.toString(2)}, to octal = ${nb4.toString(
      8
    )}, to hexadecimal = ${nb4.toString(16)}`
  );
}

let nb5 = 52390903;
{
  console.log(
    `${nb5} converted to binary = ${nb5.toString(2)}, to octal = ${nb5.toString(
      8
    )}, to hexadecimal = ${nb5.toString(16)}`
  );
}

/*
10 converted to binary = 1010, to octal = 12, to hexadecimal = a
15 converted to binary = 1111, to octal = 12, to hexadecimal = f
16 converted to binary = 10000, to octal = 12, to hexadecimal = 10
5005 converted to binary = 1001110001101, to octal = 11615, to hexadecimal = 138d
52390903 converted to binary = 11000111110110101111110111, to octal = 307665767, to hexadecimal = 31f6bf7
*/

// Correction

/*

let nb = 10;
{
  console.log(`${nb} converted to binary = ${nb.toString(2)}`);
  console.log(`${nb} converted to octal = ${nb.toString(8)}`);
  console.log(`${nb} converted to Hexadecimal = ${nb.toString(16)}`);
}

let nb2 = 15;
{
  console.log(`${nb2} converted to binary = ${nb2.toString(2)}`);
  console.log(`${nb2} converted to octal = ${nb2.toString(8)}`);
  console.log(`${nb2} converted to Hexadecimal = ${nb2.toString(16)}`);
}

let nb3 = 16;
{
  console.log(`${nb3} converted to binary = ${nb3.toString(2)}`);
  console.log(`${nb3} converted to octal = ${nb3.toString(8)}`);
  console.log(`${nb3} converted to Hexadecimal = ${nb3.toString(16)}`);
}

let nb4 = 5005;
{
  console.log(`${nb4} converted to binary = ${nb4.toString(2)}`);
  console.log(`${nb4} converted to octal = ${nb4.toString(8)}`);
  console.log(`${nb4} converted to Hexadecimal = ${nb4.toString(16)}`);
}

let nb5 = 52390903;
{
  console.log(`${nb5} converted to binary = ${nb5.toString(2)}`);
  console.log(`${nb5} converted to octal = ${nb5.toString(8)}`);
  console.log(`${nb5} converted to Hexadecimal = ${nb5.toString(16)}`);
}

10 converted to binary = 1010
10 converted to octal = 12
10 converted to Hexadecimal = a
15 converted to binary = 1111
15 converted to octal = 17
15 converted to Hexadecimal = f
16 converted to binary = 10000
16 converted to octal = 20
16 converted to Hexadecimal = 10
5005 converted to binary = 1001110001101
5005 converted to octal = 11615
5005 converted to Hexadecimal = 138d
52390903 converted to binary = 11000111110110101111110111
52390903 converted to octal = 307665767
52390903 converted to Hexadecimal = 31f6bf7
*/
