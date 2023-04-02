// Step 01: Khai bao thu vien
let readline = require("readline-sync")

// Step 02: Khai bao va nhap gia tri
let totalSecond = Number(readline.question('Nhap tong so giay: '));

let hour = Math.floor(totalSecond / 3600);
let min = Math.floor(totalSecond / 60);
let second = totalSecond % 60;

// Step 03: Khai bao ket qua va in ra man hinh
console.log("HH:mmm:ssss", hour + ":" + min + ":" + second);
