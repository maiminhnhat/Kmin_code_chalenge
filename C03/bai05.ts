// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let n: number = Number(question("nhap n: "));
let uocso: string = "";

// Step 03: Lap va in ra ket qua
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    if (i != n) {
      uocso += i;
    }
  }
}
console.log(uocso.length);
