function redmor(){
  var dot = document.getElementById('titik');
  var more = document.getElementById('more');
  var btntxt = document.getElementById('myBtn');

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    btntxt.innerHTML = "Read more";
    more.style.display = "none";
  }
  else{
    dot.style.display = "none";
    btntxt.innerHTML = "Read less";
    more.style.display = "inline";
  }
}
function redmores(){
  var dota = document.getElementById('titisk');
  var morea = document.getElementById('moressa');
  var btntxts = document.getElementById('myBtnas');

  if (dota.style.display === "none") {
    dota.style.display = "inline";
    btntxts.innerHTML = "Read more";
    morea.style.display = "none";
  }
  else{
    dota.style.display = "none";
    btntxts.innerHTML = "Read less";
    morea.style.display = "inline";
  }
}
