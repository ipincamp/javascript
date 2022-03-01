/**
 * @name declare-variables
 * @version v0.0.1
 * @author ipincamp <support@nur-arifin.my.id>
 * @license GPL-3.0
 */

/*
Ada 3 kata kunci untuk variable di JavaScript
- var
- let
- const
*/

/*
Aturan penulisan variable di JavaScript
1. Tidak diawali dengan huruf besar/kapital.
2. Tidak diawali dengan angka.
3. Dapat berupa kombinasi Abjad (AZ / az),
   Digit (0–9), Garis Bawah(_) dan Dolar($).
4. Spasi dan simbol khusus tidak diperbolehkan.
5. Kata cadangan tidak diperbolehkan.
6. Format CamelCase. (fullName, myAge).
7. Peka terhadap huruf besar/kecil. Misalkan:
   fullname dengan fullName ini berbeda.
*/

/*
Contoh penulisan variable:
*/
let fullname = "ipincamp";

// Contoh dengan format CamelCase
let shortName = "ipin";

// Contoh kombinasi
let $myAddress = "Indonesia";
let _favorite = "Cat";
let hope2022 = "Full Stack Developer";

/*
Mengakses Variable
*/
console.log(fullname);
console.log(shortName);
console.log($myAddress);
console.log(_favorite);
console.log(hope2022);
