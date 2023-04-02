// Khai báo thư viện
import { question } from "readline-sync";

// Khai báo và nhập giá trị
let m: number = Number(question("nhap so m: "));
let n: number = Number(question("nhap so n: "));

let arrayOfSquares: number[] = [];

// Tạo hàm để liệt kê số chính phương
function lietKeSoChinhPhuong(m: number, n: number) {

// Lặp qua đoạn [m,n] và kiểm tra trên đó số nào là chính phương
  for (let i = m; i <= n; i++) {

    // kiểm tra số chính phương và đưa vào mảng
    if (Math.sqrt(i) % 1 == 0  ) {
      arrayOfSquares.push(i);
    }
  }
}

lietKeSoChinhPhuong(m, n);
console.log(arrayOfSquares.reduce((a, b) => Math.min(a, b)));