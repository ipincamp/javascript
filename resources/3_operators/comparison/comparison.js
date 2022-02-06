/**
 * Operator Perbandingan
 *  
 ==	equal to    	    x == 8	    false
                            x == 5          true
                            x == "5"        true
                            ===	equal value 	    x === 5         true
        and equal type      x === "5"       false
        !=	not equal	    x != 8	    true
!==	not equal value     x !== 5	    false
or not equal type   x !== "5"	    true
x !== 8         true
>	greater than	    x > 8	    false
<	less than           x < 8	    true
>=	greater than        x >= 8	    false
or equal to
<=	less than or        x <= 8	    true
equal to
*/

/**
 * Digunakan dalam sebuah pernyataan (if)
 * dan hasilnya berupa boolean (true/false)
 */
let x = 5;

if (x < 20) {
    console.log("Anda belum cukup umur!");
}
