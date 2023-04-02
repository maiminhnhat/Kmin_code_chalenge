// Step 01: Khai bao thu vien
var readline = require("readline-sync");

// Step 02: Khai bao va nhap gia tri
var n = Number((0, readline.question)("nhap n: "));
var uocso = "";

// Step 03: Lap va in ra ket qua
for (var i = 1; i <= n; i++) {
  if (n % i == 0) {
    if (i != n) {
      uocso += i;
    }
  }
}
console.log(uocso.length);
