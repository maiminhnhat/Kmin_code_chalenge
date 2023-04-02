"use strict";
exports.__esModule = true;
// Step 01: Khai bao thu vien
var readline_sync_1 = require("readline-sync");
// Step 02: Khai bao va nhap gia tri
var Pi = 3.14;
var r = Number((0, readline_sync_1.question)('Nhap ban kinh: '));
// Step 03: Khai bao ket qua va in ra man hinh
var c = (r * 2) * Pi;
var s = (Math.pow(r, 2)) * Pi;
console.log("Dien tich hinh tron :", s);
console.log("Chu vi hinh tron :", c);
