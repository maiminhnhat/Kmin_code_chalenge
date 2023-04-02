// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let a = Number(question('Nhap so a:  '));
let b = Number(question('Nhap so b:  '));
let c = Number(question('Nhap so c:  '));

// Step 03: Kiem tra va in ra ket qua
if (a == 0) {
    if ( b == 0) {
        if (c == 0) {
            console.log('Phuong trinh vo so nghiem');
        }
        else {
            console.log('Phuong trinh vo nghiem');
        }
    }
    else {
        let Nghiem1 = -c / b;
        console.log('Phuong trinh co 1 nghiem duy nhat', Nghiem1);
    }
}
else {
   let delta = b * b - 4 * a * c;
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log('Nghiem thu nhat x1 = ', x1);
        console.log('Nghiem thu nhat x2 = ', x2);
    }
    else {
        if (delta == 0) {
            let NghiemKep = -b / 2 * a;
            console.log('Phuong trinh co nghiem kep: x1 = x2 = ', NghiemKep);
        }
        else {
            console.log('Phuong trinh vo nghiem');
        }
    }
}