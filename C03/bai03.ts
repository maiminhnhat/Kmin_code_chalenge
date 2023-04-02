// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let n:number = Number(question("nhap n: "));

// Step 03: Lap va in ra ket qua
let uocso = "";
for (let i = 1; i <= n; i++) {
  if (n % i == 0 && i % 2 == 0) {
    if (i != n) {
      uocso += i + ", ";
    } else {
      uocso += i + ". ";
    }
  }
}

if(uocso == "") console.log("Khong co so nao thoa dieu kien");
console.log("Cac uoc so chan cua so nguyen n la: "+ uocso);
