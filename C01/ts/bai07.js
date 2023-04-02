"use strict";
exports.__esModule = true;
// Step 01: Khai bao thu vien
var readline_sync_1 = require("readline-sync");
// Step 02: Khai bao va nhap gia tri
/// Toa do diem A(a1, a2)
var a1 = Number((0, readline_sync_1.question)('Nhap a1: '));
var a2 = Number((0, readline_sync_1.question)('Nhap a2: '));
/// Toa do diem B(b1, b2)
var b1 = Number((0, readline_sync_1.question)('Nhap b1: '));
var b2 = Number((0, readline_sync_1.question)('Nhap b2: '));
// Step 03: Khai bao ket qua va in ra man hinh
var result = Math.sqrt(Math.pow((a1 - b1), 2) + Math.pow((a2 - b2), 2));
console.log(result);
