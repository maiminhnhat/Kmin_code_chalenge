// Step 01: Khai bao thu vien
var readline = require("readline-sync");

// Step 02: Khai bao va nhap gia tri
var n = Number((0, readline.question)("nhap n: "));
var tong = 0;

// Step 03: Kiem tra va in ket qua
for (var i = 1; i <= n; i++) {
  if (n % i == 0) {
    tong = tong + i;
  }
}
if (tong == n) {
  console.log("co");
} else {
  console.log("khong");
}
