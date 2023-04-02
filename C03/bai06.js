// Step 01: Khai bao thu vien
var readline = require("readline-sync");

// Step 02: Khai bao va nhap gia tri
var n = Number((0, readline.question)("nhap so n: "));

// Step 03: Kiem tra va in ket qua
if (Math.sqrt(n) % 1 == 0) {
  console.log("co");
} else {
  console.log("khong");
}
