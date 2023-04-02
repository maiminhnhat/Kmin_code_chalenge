// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let a: number = Number(question('Nhap DTB: '));


// Step 03: Khai bao ket qua va in ra man hinh
if (a >= 5) console.log("DAU");
else console.log("ROT");