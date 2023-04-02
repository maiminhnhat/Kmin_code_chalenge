// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let soXe = question('Nhap so xe: ').split("").map(Number).reduce((a,b) => a + b, 0);

// Step 03: Khai bao ket qua va in ra man hinh (using Casting nine out)
console.log(soXe % 9 || 9)