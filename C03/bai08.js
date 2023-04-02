// Step 01: Khai bao thu vien
var readline = require("readline-sync");

// Step 02: Khai bao va nhap gia tri
var m = Number((0, readline.question)("nhap so m: "));
var n = Number((0, readline.question)("nhap so n: "));

// Step 03: Kiem tra va in ket qua
for (var i = m; i <= n; i++) {
  if (Math.sqrt(i) % 1 == 0) {
    console.log(i + " là số chính phương");
    break;
  }
}
