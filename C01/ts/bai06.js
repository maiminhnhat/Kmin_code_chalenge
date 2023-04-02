"use strict";
exports.__esModule = true;
// Step 01: Khai bao thu vien
var readline_sync_1 = require("readline-sync");
// Step 02: Khai bao va nhap gia tri
var totalSecond = Number((0, readline_sync_1.question)('Nhap tong so giay: '));
var hour = Math.floor(totalSecond / 3600);
var min = Math.floor(totalSecond / 60);
var second = totalSecond % 60;
console.log("HH:mmm:ssss", hour + ":" + min + ":" + second);
