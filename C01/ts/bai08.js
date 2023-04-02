"use strict";
exports.__esModule = true;
// Step 01: Khai bao thu vien
var readline_sync_1 = require("readline-sync");
// Step 02: Khai bao va nhap gia tri
var a = Number((0, readline_sync_1.question)('Nhap a: '));
var b = Number((0, readline_sync_1.question)('Nhap b: '));
//Step 3: Hoan vi bang cach dung bien tam temp de luu gia tri cua a va gan cho b
var temp = a; // temp lưu giá trị a
a = b;
b = temp;
console.log("\na = %d, b = %d", a, b);
