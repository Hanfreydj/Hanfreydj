function regist(){
  var namaass = document.getElementById('namas').value;
  var angkat = document.getElementById('angkatan').value;
  var nomer = document.getElementById('nmr').value;
  var email = document.getElementById('email').value;
  if (namaass == "") {
    alert("Silahkan lengkapi field yang belum terisi!");
  }
  else if (angkat == ""){
    alert("Silahkan lengkapi field yang belum terisi!");
  }
  else if (nomer == "") {
    alert("Silahkan lengkapi field yang belum terisi!");
  }
  else if (email == "") {
    alert("Silahkan lengkapi field yang belum terisi!");
  }
  else{
    alert("Pendaftaran anda sudah berhasil");
    alert("Hi!"+" "+ namaass +" "+ "\n Terima kasih telah mendaftar di UKM fotografi Universitas Ma Chung, silahkan menunggu Email dari kami ya!.");
  }
}
