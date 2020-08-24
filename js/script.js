function tokoOnline() {
  let pembeli = prompt("Masukkan Namamu ?");
  let produk = prompt("Apa produk yang kamu beli ?");
  alert("Terima kasih " + pembeli + " telah membeli produk " + produk);
}

function fromCelsius(number) {
  return (number * 9) / 5;
}

function getFahrenheit() {
  let celcius = prompt("Masukkan nilai Celcius");
  alert(fromCelsius(celcius) + 32);
}

function fromFahrenheit(number) {
  return number - 32;
}

function getCelcius() {
  let fahrenheit = prompt("Masukkan nilai fahrenheit");
  alert((fromFahrenheit(fahrenheit) * 5) / 9);
}

let umurKucing = () => {
  let umur = prompt("Berapa umur kucingmu ?");

  if (umur == 1) {
    alert(15);
  } else if (umur == 2) {
    alert(24);
  } else if (umur >= 3) {
    alert(24 + 4 * (umur - 2));
  }
};

let masukkan = (nama = prompt("Masukkan nama BESAR")) =>
  alert(nama.toLowerCase());
