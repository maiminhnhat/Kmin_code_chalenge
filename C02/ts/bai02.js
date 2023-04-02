"use strict";
exports.__esModule = true;
// Step 01: Khai bao thu vien
var readline_sync_1 = require("readline-sync");
// Step 02: Khai bao va nhap gia tri
var a = Number((0, readline_sync_1.question)('Nhap so a: '));
// Step 03: Khai bao ket qua va in ra man hinh
var tram = Math.trunc(a / 100); // De loai bo hai so cuoi cua n
console.log(tram);
if (tram == 9)
    console.log("YES");
else
    console.log("NO");
