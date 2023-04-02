"use strict";
exports.__esModule = true;
// Step 01: Khai bao thu vien
var readline_sync_1 = require("readline-sync");
// Step 02: Khai bao va nhap gia tri
var sl = Number((0, readline_sync_1.question)('Nhap so luong: '));
var donGia = Number((0, readline_sync_1.question)('Don gia: '));
// Step 03: Khai bao ket qua va in ra man hinh
var tien = sl * donGia;
var thue = tien * 10 / 100;
console.log("So tien: ", tien);
console.log("Thue gia tri gia tang:", thue);
