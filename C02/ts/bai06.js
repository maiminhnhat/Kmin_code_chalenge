"use strict";
exports.__esModule = true;
// Step 01: Khai bao thu vien
var readline_sync_1 = require("readline-sync");
// Step 02: Khai bao va nhap gia tri
var character = (0, readline_sync_1.question)("Nhap ky tu: ");
var hasNumber = /\d/;
if (character.match(hasNumber)) {
    console.log("So");
}
else if (character === character.toLowerCase()) {
    console.log("Thuong");
}
else {
    console.log("Hoa");
}
