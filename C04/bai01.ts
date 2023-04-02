// Khai báo thư viện
import { question } from "readline-sync";

// Khai báo và nhập giá trị
const Pi: number = 3.14;
let r: number = Number(question("Nhap ban kinh: "));

// Khỏi tạo hàm tính chu vi
function chuviHinhTron(Pi: number, r: number): number {
  let c: number = r * 2 * Pi;
  return c;
}

// Khởi tạo hàm tính diện tích
function dienTichHinhTron(Pi: number, r: number): number {
  let s: number = r ** 2 * Pi;
  return s;
}

//Khởi tạo hàm main để chạy chương trình
function main():void {
  const c = chuviHinhTron(Pi, r);
  const s = dienTichHinhTron(Pi, r);
  console.log("Chu vi hinh tron :", c);
  console.log("Dien tich hinh tron :", s);
}
// Step 04: Goi ham
main();
