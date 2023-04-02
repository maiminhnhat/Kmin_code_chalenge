// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let canhA: number = Number(question("Nhap canh A cua tam giac: "));

let canhB: number = Number(question("Nhap canh B cua tam giac: "));

let canhC: number = Number(question("Nhap canh C cua tam giac: "));

if (canhA == canhB || canhB == canhC || canhB == canhC) {
  console.log("tam giac can");
} else {
  console.log("tam giac ko can");
}
