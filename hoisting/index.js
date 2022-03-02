/**
 * @name hoisting
 * @version v0.0.1
 * @author ipincamp <support@nur-arifin.my.id>
 * @license GPL-3.0
 */

/*
Sebuah variabel dapat digunakan sebelum dideklarasikan.

Hoisting adalah perilaku default JavaScript untuk memindahkan
semua deklarasi ke bagian atas cakupan saat ini
(ke bagian atas skrip saat ini atau fungsi saat ini).
*/
x = 5;

var x;

/*
Variabel yang didefinisikan dengan let dan const
diangkat ke atas blok, tetapi tidak diinisialisasi.
Artinya: Blok kode mengetahui variabel,
tetapi tidak dapat digunakan sampai dideklarasikan.
*/

// Ini akan error karena belum di inisialisasi.
y = 10;

let y;

z = 12;

const z;

/*
JavaScript dalam mode ketat tidak mengizinkan variabel
digunakan jika tidak dideklarasikan.

Tambahkan kata "use strict" dipaling awal kode.
*/
