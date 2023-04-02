// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
const Pi: number = 3.14;

let r: number = Number(question('Nhap ban kinh: '));


// Step 03: Khai bao ket qua va in ra man hinh
let c:number = (r * 2) * Pi
let s:number =  (r ** 2) * Pi

console.log("Dien tich hinh tron :", s)
console.log("Chu vi hinh tron :", c);



