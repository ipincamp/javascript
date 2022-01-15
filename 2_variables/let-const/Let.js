/**
 * let
 * 
 * Kata kunci let diperkenalkan di ES6 (2015).
 * Variabel yang didefinisikan dengan let tidak dapat dideklarasikan ulang.
 * Variabel yang didefinisikan dengan let harus Dideklarasikan sebelum digunakan.
 * Variabel didefinisikan dengan let memiliki Lingkup Blok.
 */
let x = "Nur Arifin";

/**
 * Tidak Dapat Dideklarasikan Ulang
 * 
 * Variabel yang didefinisikan dengan let tidak dapat dideklarasikan ulang.
 * Anda tidak dapat secara tidak sengaja mendeklarasikan ulang sebuah variabel.
 * Dengan let Anda tidak dapat melakukan ini:
 * 
 * let x = 23;
 * 
 * let x = 20;
 * 
 * Ini akan menimbulkan error karena sudah di deklarasikan sebelumnya di atas
 * 
 * Mendeklarasikan ulang variabel JavaScript dengan var diizinkan di mana saja dalam suatu program
 */
var dekUlang = "Your Name";

var dekUlang = 11;

/**
 * Block Scope / Lingkup Block
 * 
 * Intinya, variabel yang dideklarasikan di dalam blok {}
 * tidak dapat diakses dari luar blok.
 * 
 * Sebaliknya, variabel yang dideklarasikan di luar blok {}
 * bisa diakses dari dalam blok.
 */
{
    let x = 10;
}
// x tidak bisa diakses di baris ini.

let y = 20;
{
    y = 23;
    // Bisa diakses di sini
}

/**
 * Deklarasi Ulang Let
 * 
 * Untuk mendeklarasikan ulang variabel let
 * Anda bisa menyebut nama variabel dan diikuti nilai perubahannya
 */
let myPhone = 911;
myPhone = 555;

// Lihat ke konsol
console.log(myPhone);
