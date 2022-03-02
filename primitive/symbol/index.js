/**
 * @name primitive-symbol
 * @version v0.0.1
 * @author ipincamp <support@nur-arifin.my.id>
 * @license GPL-3.0
 */

/*
Symbol adalah objek bawaan yang konstruktornya mengembalikan symbol primitif
juga disebut nilai Simbol atau hanya Simbol yang dijamin unik.

Simbol sering digunakan untuk menambahkan kunci properti unik ke objek yang
tidak akan bertabrakan dengan kunci yang mungkin ditambahkan oleh kode lain ke objek,
dan yang disembunyikan dari mekanisme apa pun yang biasanya digunakan kode lain
untuk mengakses objek. Itu memungkinkan bentuk enkapsulasi yang lemah,
atau bentuk penyembunyian informasi yang lemah .

Setiap Symbol() panggilan dijamin untuk mengembalikan Simbol unik.

Setiap Symbol.for("key") panggilan akan selalu mengembalikan Simbol yang sama
untuk nilai tertentu "key". Saat Symbol.for("key")dipanggil, jika Simbol
dengan kunci yang diberikan dapat ditemukan di registri Simbol global,
Simbol itu dikembalikan.
Jika tidak, Simbol baru dibuat, ditambahkan ke registri Simbol global
di bawah kunci yang diberikan, dan dikembalikan.
*/
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

/*
Referensi:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
*/
