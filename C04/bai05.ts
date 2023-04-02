// Khai báo thư viện
import { question } from "readline-sync";

// Khai báo và nhập giá trị
let n: number = Number(question("nhap n: "));
let tong: number = 0;

//Khỏi tạo hàm để kiểm tra số chính phương
function kiemTraSoChinhPhuong(n: number, tong: number):boolean {
  // lặp từ 1 đến n để xem số n chia hết cho số n và số đó phải khác n
  for (let i = 1; i <= n; i++) {
    if (n % i == 0 && i != n) {
      tong = tong + i;
    }
  }
  if (tong == n) {
    return true
  } else {
    return false
  }
}

// Khoi tao va gọi hàm main và chạy chương trình
function main():void {
  const result = kiemTraSoChinhPhuong(n, tong);
  result == true ? console.log("Co") : console.log("Khong");
}
main()
