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
    // kiểm tra số chính phương lẻ và đưa vào mảng
    if (Math.sqrt(i) % 1 == 0 && i % 2 == 0) {
      arrayOfSquares.push(i);
    }
  }
}

lietKeSoChinhPhuong(m, n);

// dùng length để đếm số chính phương trong mảng
let squareNumbers:number = arrayOfSquares.length;

// dùng reduce để tính tổng các thành phần trong mảng số chính phuong và trả về kết quả tổng
let sum:number = arrayOfSquares.reduce((a, b) => a + b, 0);

// tính trung bình cộng và in kết quả
console.log(sum / squareNumbers);
