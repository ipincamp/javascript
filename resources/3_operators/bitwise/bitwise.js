/**
 * Operators Bitwise
 * 
 * &	AND	                    Sets each bit to 1 if both bits are 1
 * |	OR	                    Sets each bit to 1 if one of two bits is 1
 * ^	XOR	                    Sets each bit to 1 if only one of two bits is 1
 * ~	NOT	                    Inverts all the bits
 * <<	Zero fill left shift	    Shifts left by pushing zeros in from the right
 *                                  and let the leftmost bits fall off
 * >>	Signed right shift	    Shifts right by pushing copies of the leftmost bit
 *                                  in from the left, and let the rightmost bits fall off
 * >>>	Zero fill right shift	    Shifts right by pushing zeros in from the left,
 *                                  and let the rightmost bits fall off
 */

/**
 * Operation	Result	    Same as     Result
 * 
 * 5 & 1	    1	        0101 & 0001	 0001
 * 5 | 1	    5	        0101 | 0001	 0101
 * ~ 5	            10	        ~0101            1010
 * 5 << 1	    10	        0101 << 1	 1010
 * 5 ^ 1	    4	        0101 ^ 0001	 0100
 * 5 >> 1	    2	        0101 >> 1	 0010
 * 5 >>> 1	    2	        0101 >>> 1	 0010
 */

/**
 * JavaScript Menggunakan 32 bit Bitwise Operand
 * 
 * JavaScript menyimpan angka sebagai 64 bit angka floating point, tetapi
 *    semua operasi bitwise dilakukan pada angka biner 32 bit.
 * Sebelum operasi bitwise dilakukan, JavaScript mengonversi angka
 *    menjadi bilangan bulat bertanda 32 bit.
 * Setelah operasi bitwise dilakukan, hasilnya diubah kembali
 *    menjadi 64 bit angka JavaScript.
 */

/**
 * Contoh di atas menggunakan 4 bit bilangan biner unsigned.
 * Karena itu ~ 5 mengembalikan 10.
 * 
 * Karena JavaScript menggunakan bilangan bulat bertanda 32 bit,
 * itu tidak akan mengembalikan 10. Ini akan mengembalikan -6.
 * 000000000000000000000000000000001 (5)
 * 11111111111111111111111111111111010 (~5 = -6)
 * Bilangan bulat bertanda menggunakan bit paling kiri sebagai tanda minus.
 */

/**
 * AND (&)
 * 
 * Bernilai 1 jika kedua bit nya 1
 */
/**
 * JIKA     HASILNYA
 * 0 & 0	0
 * 0 & 1	0
 * 1 & 0	0
 * 1 & 1	1
 */

/**
 * OR (|)
 * 
 * Bernilai 1 jika salah satu bit nya 1
 */
/**
 * JIKA     HASILNYA
 * 0 | 0	0
 * 0 | 1	1
 * 1 | 0	1
 * 1 | 1	1
 *  */ 

/**
 * XOR (^)
 * 
 * Mengembalikan 1 jika nilai bit nya berbeda
 */
/**
 * JIKA     HASILNYA
 * 0 ^ 0	0
 * 0 ^ 1	1 
 * 1 ^ 0	1
 * 1 ^ 1	0 
 */

/**
 * NOT (~)
 * 
 * Mengembalikan semua bit
 */

// Selebihnya ada di https://www.w3schools.com/js/js_bitwise.asp
