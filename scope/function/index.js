/**
 * @name function-scope
 * @version v0.0.1
 * @author ipincamp <support@nur-arifin.my.id>
 * @license GPL-3.0
 */

/*
JavaScript memiliki ruang lingkup fungsi, jadi
setiap fungsi membuat ruang lingkup baru.

Variable yang didefinisikan di dalam suatu fungsi
tidak dapat diakses/terlihat dari luar fungsi.
*/

function myName() {
  let shortName = "ipincamp";
  // shortName hanya bisa diakses di lingkup fungsi ini.
}
// Jika Anda mencoba mengakses shortName, itu akan error.
