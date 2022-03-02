/**
 * @name primitive-number
 * @version v0.0.1
 * @author ipincamp <support@nur-arifin.my.id>
 * @license GPL-3.0
 */

/*
Seperti yang kita tahu, angka dalam permprograman
sangat sering dipakai.

Di JavaScript hanya memiliki satu jenis angka.
Dapat ditulis dengan atau tanpa desimal.

JavaScript juga mendukung Number Notation.
*/

// Contoh dengan desimal
const d1 = 99.9;

console.log(d1);

// Contoh tanpa desimal
const d2 = 100;

console.log(d2);


// Number Notation

/*
Binary

Sintaks bilangan biner menggunakan nol di depan diikuti
dengan huruf Latin kecil atau besar "B" ( 0b atau 0B).
*/
const b1 = 0b10101;

console.log(b1);

/*
Eksponen

Sintaks bilangan eksponen diawali dengan angka
diikuti huruf kecil "e" lalu jumlah NOL di belakang/depan.
*/
const e1 = 12e5;

console.log(e1);

const e2 = 12e-5;

console.log(e2);

/*
Hexadecimal

Sintaks bilangan heksadesimal menggunakan nol di depan diikuti
dengan huruf kecil atau huruf besar Latin "X" ( 0x atau 0X).
*/
const h1 = 0xff;

console.log(h1);

/*
Octal

Sintaks bilangan oktal menggunakan nol di depan.
Di ECMAScript 2015, angka oktal didukung jika diawali dengan 0o.
*/
const o1 = 0o10;

console.log(o1);
