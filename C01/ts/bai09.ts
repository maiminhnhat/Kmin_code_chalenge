// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let x: number = Number(question('Nhap x: '));
let y: number = Number(question('Nhap y: '));

// Step 03: Khai bao ket qua va in ra man hinh
let s:number = Math.floor((Math.sqrt(x) + Math.abs(x)) / Math.sqrt(x**y));
console.log(s);