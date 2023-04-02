"use strict";
exports.__esModule = true;
// Step 01: Khai bao thu vien
var readline_sync_1 = require("readline-sync");
// Step 02: Khai bao va nhap gia tri
var x = Number((0, readline_sync_1.question)('Nhap x: '));
var y = Number((0, readline_sync_1.question)('Nhap y: '));
// Step 03: Khai bao ket qua va in ra man hinh
var s = Math.floor((Math.sqrt(x) + Math.abs(x)) / Math.sqrt(Math.pow(x, y)));
console.log(s);
