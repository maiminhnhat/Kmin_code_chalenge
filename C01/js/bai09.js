// Step 01: Khai bao thu vien
let readline = require("readline-sync");

// Step 02: Khai bao va nhap gia tri
let x = Number(readline.question('Nhap x: '));
let y = Number(readline.question('Nhap y: '));

// Step 03: Khai bao ket qua va in ra man hinh
let s = Math.floor((Math.sqrt(x) + Math.abs(x)) / Math.sqrt(x**y));
console.log(s);