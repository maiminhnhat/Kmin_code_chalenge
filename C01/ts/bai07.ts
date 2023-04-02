// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
/// Toa do diem A(a1, a2)
let a1: number = Number(question('Nhap a1: '));
let a2: number = Number(question('Nhap a2: '));

/// Toa do diem B(b1, b2)
let b1: number = Number(question('Nhap b1: '));
let b2: number = Number(question('Nhap b2: '));

// Step 03: Khai bao ket qua va in ra man hinh
let result:number = Math.sqrt((a1 - b1)**2 + (a2 - b2)**2)
console.log(result);