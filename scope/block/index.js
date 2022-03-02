/**
 * @name block-scope
 * @version v0.0.1
 * @author ipincamp <support@nur-arifin.my.id>
 * @license GPL-3.0
 */

/*
Sebelum ES6, JavaScript hanya memiliki Global Scope
dan Function Scope. Setelah itu kata kunci "let" dan "const"
menyediakan Block Scope.

Variable yang dideklarasikan di dalam blok { }
tidak dapat diakses dari luar blok.
*/

{
  let myNumber = 10;
}
// myNumber tidak bisa diakses disini.


/*
Berbeda dengan kata kunci "var".

Variable yang dideklarasikan di dalam blok { }
datap diakses dari luar blok.
*/
{
  var myNumber = 10;
}
console.log(myNumber);

// Oleh karena itu, kata kunci "var" jarang dipakai.
