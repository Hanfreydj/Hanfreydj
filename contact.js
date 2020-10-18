function submist() {
  var namex = document.getElementById('nm').value;
  if (namex == "") {
    alert("Nama harus diisi!");
    return false;
  }
  var emalix = document.getElementById('em').value;
  if (emalix == "") {
    alert("Alamat email harus diisi!");
    return false;
  }
  var cmnt = document.getElementById('ip').value;
  if (cmnt == "") {
    alert("Isi pesan yang anda kirim harus ada isinya!");
    return false;
  }
  alert("Halo!"+" "+namex+" "+"Pesan kamu sudah terkirim Terima Kasih!")
}
