/**
 * Const (konstant)
 *
 * Kata kunci const diperkenalkan di ES6 (2015).
 * Variabel yang didefinisikan dengan const tidak dapat
 *   dideklarasikan ulang.
 * Variabel yang didefinisikan dengan const nilainya
 *   tidak dapat diubah.
 *   Contoh:
 *     const age = 21;
 *     age = 20; maka akan terjadi error.
 *
 * Variabel didefinisikan dengan const memiliki Lingkup Blok.
 *
 */

// Harus diberi nilai
const age = 21;

/**
 * Kapan variabel const digunakan?
 *
 * A new Array
 * A new Object
 * A new Function
 * A new RegExp
 */

/**
 * Block Scope / Lingkup Blok
 *
 * Sama seperti let
 */

/**
 * Const Objek & Array
 *
 * Ini mendefinisikan referensi konstan ke nilai.
 * Karena itu, Anda TIDAK BISA:
 *   > Tetapkan kembali nilai konstan
 *   > Tetapkan ulang array konstan
 *   > Tetapkan kembali objek konstan
 * Tapi kamu bisa:
 *   - Ubah elemen array konstan
 *   - Ubah properti objek konstan
 */

/**
 * Const Array
 */
const tas = ["buku", "pulpen", "bekal"];
// Anda bisa merubah elemen nya
tas[0] = "tipe-x";
// Atau bisa menambah elemen array tersebut
tas.push("jaket");

/**
 * Const Object
 */
const merkMobil = { type: "flat", model: "400", warna: "merah" };
// Anda bisa merubah properti nya
merkMobil.model = "bulet";
// Atau menambah properti
merkMobil.lokasi = "jakarta";

/**
 * Deklarasi ulang variabel const di lain block scope
 */
const x = 2;
{
    const x = 4;
}
{
    const x = 10;
}