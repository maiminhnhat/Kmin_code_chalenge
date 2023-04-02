"use strict";
exports.__esModule = true;
// Step 01: Khai bao thu vien
var readline_sync_1 = require("readline-sync");
// Step 02: Khai bao va nhap gia tri
var a = Number((0, readline_sync_1.question)('Nhap so kw dien:  '));
var Sotiendien = 0;
// Step 03: Kiem tra va dua ra ket qua
if (a < 100) {
    Sotiendien = 2000 * a;
}
else {
    if (100 <= a && a < 200) {
        Sotiendien = 2500 * a;
    }
    else {
        Sotiendien = 3500 * a;
    }
}
console.log('So tien dien cua ban la: ' + Sotiendien + ' dong');
