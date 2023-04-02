// Khai báo thư viện
import { question } from "readline-sync";

// Khai báo và nhập giá trị
let m: number = Number(question("nhap so m: "));
let n: number = Number(question("nhap so n: "));

//Khỏi tạo hàm để kiểm tra số chính phương đầu tiên
function kiemTraSoChinhPhuongDauTien(m: number, n: number) {
  // lặp từ 1 đến n để xem số n chia hết cho số n thì số đo là số chính phương và
  // ta sẽ dừng lại ngay khi tìm đc số chính phương đầu tiên
  for (let i = m; i <= n; i++) {
    if (Math.sqrt(i) % 1 == 0) {
      console.log(i + " là số chính phương");
      break;
    }
  }
}

// Khoi tao va gọi hàm main và chạy chương trình
function main(): void {
  kiemTraSoChinhPhuongDauTien(m, n);
}

main();
