"use strict";
exports.__esModule = true;
// Step 01: Khai bao thu vien
var readline_sync_1 = require("readline-sync");
// Step 02: Khai bao va nhap gia tri
var soXe = (0, readline_sync_1.question)('Nhap so xe: ').split("").map(Number).reduce(function (a, b) { return a + b; }, 0);
// Step 03: Khai bao ket qua va in ra man hinh (using Casting nine out)
console.log(soXe % 9 || 9);
