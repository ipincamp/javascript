/**
 * @name global-local-scope
 * @version v0.0.1
 * @author ipincamp <support@nur-arifin.my.id>
 * @license GPL-3.0
 */

/*
Scope atau cakupan merupakan area atau wilayah
dimana program itu dieksekusi.
*/
let hariIni = "Rabu";

{
  hariIni = "Wednesday";

  console.log(hariIni);
}

/*
Lingkup lokal hanya dapat diakses dari dalam blok scope.

Jika ingin mengakses variable dari dalam local scope,
maka akan undefined / bahkan error.
*/
{
  let today = "Wednesday";
  // today bisa diakses disini
}
// Tidak bisa memanggil today disini
