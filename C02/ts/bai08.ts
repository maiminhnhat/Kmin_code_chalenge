// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let ngay, thang, nam: number = 0; 
ngay = Number(question('Nhap ngay:  '));
thang = Number(question('Nhap thang:  '));
nam = Number(question('Nhap nam:  '));

// Step 03: Kiem tra va in ra ket qua
switch (thang) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12: 
        if (ngay > 0 && ngay < 31) {
            console.log('Valid', ngay, thang ,nam);
            break;
        }
        else {
            console.log('Unvalid',ngay, thang ,nam);
            break;
        }
    case 4: case 6: case 9: case 11: 
        if (ngay > 0 && ngay < 30) {
            console.log('Valid', ngay, thang ,nam);
            break;
        }
        else {
            console.log('Unvalid', ngay, thang ,nam);
            break;
        }
    case 2: 
        if (ngay > 0 && ngay < 28) {
            console.log('Valid', ngay, thang ,nam);
            break;
        }
        else {
            console.log('Unvalid', ngay, thang ,nam);
            break;
        }
    default:
        console.log('Unvalid', ngay, thang ,nam);
        break;
}