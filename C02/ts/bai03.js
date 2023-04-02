"use strict";
exports.__esModule = true;
// Step 01: Khai bao thu vien
var readline_sync_1 = require("readline-sync");
// Step 02: Khai bao va nhap gia tri
var canhA = Number((0, readline_sync_1.question)("Nhap canh A cua tam giac: "));
var canhB = Number((0, readline_sync_1.question)("Nhap canh B cua tam giac: "));
var canhC = Number((0, readline_sync_1.question)("Nhap canh C cua tam giac: "));
if (canhA == canhB || canhB == canhC || canhB == canhC) {
    console.log("tam giac can");
}
else {
    console.log("tam giac ko can");
}
