// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let a: number = Number(question('Nhap a: '));
let b: number = Number(question('Nhap b: '));
let c: number = Number(question('Nhap c: '));

// Step 03: Khai bao ket qua va in ra man hinh
let result: Number = (a ** 2*b ** 2)/c
console.log(result);

