// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let n: number = Number(question('nhap n: '));
let tong: number = 0;

// Step 03: Kiem tra va in ket qua
for (let i = 1; i <= n; i++){
    if (n % i == 0 && i != n){
        tong = tong + i;
    }

}
if (tong == n){console.log('co')}
else{console.log('khong')};