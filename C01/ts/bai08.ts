// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let a: number = Number(question('Nhap a: '));
let b: number = Number(question('Nhap b: '));

//Step 3: Hoan vi bang cach dung bien tam temp de luu gia tri cua a va gan cho b
let temp:number = a; // temp lưu giá trị a
a = b
b = temp

console.log("\na = %d, b = %d", a, b);