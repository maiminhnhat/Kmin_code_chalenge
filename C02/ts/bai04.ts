
// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let year:number = Number(question('Nhap so nam:  '));

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