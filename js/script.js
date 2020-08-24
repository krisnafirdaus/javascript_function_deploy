function tokoOnline(pembeli, produk) {
  return "Terima kasih " + pembeli + " telah membeli produk " + produk;
}

function fromCelsius(number) {
  return (number * 9) / 5;
}

function getFahrenheit(celsius) {
  return fromCelsius(celsius) + 32;
}

function fromFahrenheit(number) {
  return number - 32;
}

function getCelcius(fahrenheit) {
  return (fromFahrenheit(fahrenheit) * 5) / 9;
}

let umurKucing = (umur) => {
  if (umur == 1) {
    return 15;
  } else if (umur == 2) {
    return 24;
  } else if (umur >= 3) {
    return 24 + 4 * (umur - 2);
  }
};

let masukkan = (nama) => nama.toLowerCase();
