// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let sl:number = Number(question('Nhap so luong: '));
let donGia:number = Number(question('Don gia: '));

// Step 03: Khai bao ket qua va in ra man hinh
let tien:number = sl * donGia;
let thue:number = tien * 10/100

console.log("So tien: ", tien);
console.log("Thue gia tri gia tang:", thue);
