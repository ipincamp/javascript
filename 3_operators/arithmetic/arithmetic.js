/**
 * Operator Aritmetika
 * 
 * (+)	Addition / tambah
 * (-)	Subtraction / kurang
 * (*)	Multiplication / kali
 * (**)	Exponentiation (ES2016) / eksponen
 * (/)	Division / bagi
 * (%)	Modulus (Division Remainder) / modulus
 * (++)	Increment / tambah 1
 * (--)	Decrement / kurang 1
 * 
 */

/**
 * Penjumlahan
 */
let tambah1 = 10;
let tambah2 = 5;

let hasilTambah = tambah1 + tambah2;

/**
 * Pengurangan
 */
let kurang1 = 100;
let kurang2 = 50;

let hasilKurang = kurang1 - kurang2;

/**
 * Perkalian
 */
let kali1 = 20;
let kali2 = 5;

let hasilKali = kali1 * kali2;

/**
 * Pembagian
 */
let bagi1 = 20;
let bagi2 = 4;

let hasilBagi = bagi1 / bagi2;

/**
 * Sisa bagi / modulus
 */
let sisa1 = 99;
let sisa2 = 10;

let hasilSisa = sisa1 % sisa2;

/**
 * Increment / kenaikan
 */
let naik = 10;
naik++;

let hasilNaik = naik;

/**
 * Decrement / penurunan
 */
let turun = 10;
turun--;

let hasilTurun = turun;

/**
 * Exponent / pangkat
 */
let pangkat = 5;

let hasilPangkat = pangkat ** 2; // hasilnya 25

// Alternative
let pow = 5;

let hasilPow = Math.pow(pow,2);
// Hasilnya sama seperti diatas kok :D

/**
 * Prioritas Operator
 * 
 * Contoh:
 *   let x = 100 + 50 * 3;
 * 
 * Apakah hasil contoh di atas sama dengan 150 * 3, atau sama dengan 100 + 150?
 * Apakah penjumlahan atau perkalian dilakukan terlebih dahulu?
 * 
 * Seperti dalam matematika sekolah tradisional, perkalian terlebih dahulu.
 * Perkalian (*) dan pembagian (/) lebih diutamakan daripada
 *   penjumlahan (+) dan pengurangan (-).
 * Dan (seperti dalam matematika sekolah) prioritas dapat diubah
 *   dengan menggunakan tanda kurung:
 */
