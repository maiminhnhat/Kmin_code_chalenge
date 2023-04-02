// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let n:number = Number(question("nhap so n: "));

// Step 03: Kiem tra va in ket qua
 if ((Math.sqrt(n)) % 1 == 0){console.log('co')}
 else {console.log('khong')};