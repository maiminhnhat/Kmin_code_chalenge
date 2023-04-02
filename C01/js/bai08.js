// Step 01: Khai bao thu vien
let readline = require("readline-sync")

// Step 02: Khai bao va nhap gia tri
let a = Number(readline.question('Nhap a: '));
let b = Number(readline.question('Nhap b: '));

//Step 3: Hoan vi bang cach dung bien tam temp de luu gia tri cua a va gan cho b
let temp = a; // temp lưu giá trị a
a = b
b = temp

console.log("\na = %d, b = %d", a, b);