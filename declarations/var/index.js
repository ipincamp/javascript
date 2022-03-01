/**
 * @name keyword-var
 * @version v0.0.1
 * @author ipincamp <support@nur-arifin.my.id>
 * @license GPL-3.0
 */

/*
Saya tidak menyarankan untuk menggunakannya,
kecuali jika Anda menggunakan browser versi lama.
- Kata kunci ini digunakan di semua kode JavaScript
  dari tahun 1995 sampai 2015. Lalu kata kunci
  "let" dan "const" ditambahkan pada tahub 2015.
*/

// Deklarasi
var myName = "ipincamp";

console.log(myName);

/*
Kenapa ditinggalkan?

Perilaku hoising dan function scope.

- Hoisting membuat perilaku variabel menjadi aneh,
  dan function scope membuat kode lebih sulit dibaca
  dan diprediksi.
- Keyword var bersifat function scope sehingga
  membuat kode lebih sulit dibaca dan diprediksi.
  
  Pada bahasa pemrograman seharusnya variabel
  yang dideklarasi di dalam scope menjadi private
  sehingga tidak bisa diakses dari luar scope.

  Keyword let bersifat block scope sehingga variabel
  yang berada di dalam scope tidak bisa diakses
  dari luar scope.
*/
