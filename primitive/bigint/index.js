/**
 * @name primitive-bigint
 * @version v0.0.1
 * @author ipincamp <support@nur-arifin.my.id>
 * @license GPL-3.0
 */

/*
BigInt adalah objek pembungkus primitif yang digunakan untuk
mewakili dan memanipulasi nilai primitif bigint yang terlalu besar
untuk diwakili oleh number primitif.
*/

/*
Cara deklarasi yaitu dengan menambahkan "n" ke akhir literal integer,
atau dengan memanggil BigInt() konstruktor (tetapi tanpa new operator)
dan memberinya nilai integer atau nilai string.
*/
const previouslyMaxSafeInteger = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777");
// ↪ 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111"
);
// ↪ 9007199254740991n

/*
Nilai BigInt tidak dapat digunakan dengan metode dalam Math objek bawaan
dan tidak dapat dicampur dengan nilai Number dalam operasi.

Referensi:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
*/
