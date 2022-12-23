const num = Number(prompt("Enter number"));
let sonuc = true;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    sonuc = false;

    break;
  }
}

if (sonuc) {
  console.log(num + " is prime");
} else {
  console.log(num + " is not prime");
}
