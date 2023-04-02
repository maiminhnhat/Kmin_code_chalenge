// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let totalSecond:number = Number(question('Nhap tong so giay: '));

let hour:number = Math.floor(totalSecond / 3600);
let min:number = Math.floor(totalSecond / 60);
let second:number = totalSecond % 60;

// Step 03: Khai bao ket qua va in ra man hinh
console.log("HH:mmm:ssss", hour + ":" + min + ":" + second);
