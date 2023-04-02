"use strict";
exports.__esModule = true;
// Step 01: Khai bao thu vien
var readline_sync_1 = require("readline-sync");
// Step 02: Khai bao va nhap gia tri
var a = Number((0, readline_sync_1.question)('Nhap so a:  '));
var b = Number((0, readline_sync_1.question)('Nhap so b:  '));
var c = Number((0, readline_sync_1.question)('Nhap so c:  '));
// Step 03: Kiem tra va in ra ket qua
if (a == 0) {
    if (b == 0) {
        if (c == 0) {
            console.log('Phuong trinh vo so nghiem');
        }
        else {
            console.log('Phuong trinh vo nghiem');
        }
    }
    else {
        var Nghiem1 = -c / b;
        console.log('Phuong trinh co 1 nghiem duy nhat', Nghiem1);
    }
}
else {
    var delta = b * b - 4 * a * c;
    if (delta > 0) {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log('Nghiem thu nhat x1 = ', x1);
        console.log('Nghiem thu nhat x2 = ', x2);
    }
    else {
        if (delta == 0) {
            var NghiemKep = -b / 2 * a;
            console.log('Phuong trinh co nghiem kep: x1 = x2 = ', NghiemKep);
        }
        else {
            console.log('Phuong trinh vo nghiem');
        }
    }
}
