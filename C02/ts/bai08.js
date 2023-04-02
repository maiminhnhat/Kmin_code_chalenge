"use strict";
exports.__esModule = true;
// Step 01: Khai bao thu vien
var readline_sync_1 = require("readline-sync");
var ngay, thang, nam;
ngay = Number((0, readline_sync_1.question)('Nhap ngay:  '));
thang = Number((0, readline_sync_1.question)('Nhap thang:  '));
nam = Number((0, readline_sync_1.question)('Nhap nam:  '));
switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        if (ngay > 0 && ngay < 31) {
            console.log('Valid', ngay, thang, nam);
            break;
        }
        else {
            console.log('Unvalid', ngay, thang, nam);
            break;
        }
    case 4:
    case 6:
    case 9:
    case 11:
        if (ngay > 0 && ngay < 30) {
            console.log('Valid', ngay, thang, nam);
            break;
        }
        else {
            console.log('Unvalid', ngay, thang, nam);
            break;
        }
    case 2:
        if (ngay > 0 && ngay < 28) {
            console.log('Valid', ngay, thang, nam);
            break;
        }
        else {
            console.log('Unvalid', ngay, thang, nam);
            break;
        }
    default:
        console.log('Unvalid', ngay, thang, nam);
        break;
}
