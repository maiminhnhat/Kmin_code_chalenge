// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let a: number = Number(question('Nhap so a: '));


// Step 03: Khai bao ket qua va in ra man hinh
let tram:number = Math.trunc(a / 100); // De loai bo hai so cuoi cua n

if (tram == 9) console.log("YES");
else console.log("NO");