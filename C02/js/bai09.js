// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let a, b, n = 0; 
n = Number(question('Nhap vao so n:  '));
a = n % 10;
b = Math.trunc(n / 10) % 10; // De loai bo va lay so cuoi cua n

// Step 03: Kiem tra va in ra ket qua
if (n < 10 || n > 99) {
    console.log('Nhap vao hai chu so');
}
else {
    switch (b) {
        case 1: 
            console.log('Muoi ');
            break;
        case 2: 
            console.log('Hai Muoi ');
            break;
        case 3: 
            console.log('Ba Muoi ');
            break;
        case 4: 
            console.log('Bon Muoi ');
            break;    
        case 5: 
            console.log('Nam Muoi ');
            break;
        case 6: 
            console.log('Sau Muoi ');
            break;
        case 7: 
            console.log('Bay Muoi ');
            break;
        case 8: 
            console.log('Tam Muoi ');
            break;
        case 9: 
            console.log('Chin Muoi ');
            break;
        default: 
            console.log('Khong hop le');
    }
    switch (a) {
        case 1: 
            console.log('Mot ');
            break;
        case 2: 
            console.log('Hai ');
            break;
        case 3: 
            console.log('Ba ');
            break;
        case 4: 
            console.log('Bon ');
            break;    
        case 5: 
            console.log('Nam ');
            break;
        case 6: 
            console.log('Sau ');
            break;
        case 7: 
            console.log('Bay ');
            break;
        case 8: 
            console.log('Tam ');
            break;
        case 9: 
            console.log('Chin ');
            break;
        default: 
            console.log('Khong hop le');
    }
}
console.log(n);