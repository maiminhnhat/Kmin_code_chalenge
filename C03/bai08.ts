// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let m:number = Number(question("nhap so m: "));
let n:number = Number(question("nhap so n: "));

// Step 03: Kiem tra va in ket qua
for (let i = m ; i <= n ; i++){
 if ((Math.sqrt(i)) % 1 == 0){
    console.log(i + " là số chính phương")
    break;
 }}