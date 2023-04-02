"use strict";
exports.__esModule = true;
// Step 01: Khai bao thu vien
var readline_sync_1 = require("readline-sync");
// Step 02: Khai bao va nhap gia tri
var year = Number((0, readline_sync_1.question)('Nhap so nam:  '));
// Step 03: Kiem tra va dua ra ket qua
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log('Nam ' + year + ' la nam nhuan');
        }
        else {
            console.log('Nam ' + year + ' khong la nam nhuan');
        }
    }
    else {
        console.log('Nam' + year + ' la nam nhuan');
    }
}
else {
    console.log('Nam ' + year + ' khong la nam nhuan');
}
