// Khai báo thư viện
import { question } from "readline-sync";

// Khai báo và nhập giá trị
let year: number = Number(question("Nhap so nam:  "));

// Khỏi tạo hàm kiểm tra năm nhuận
function kiemTraNamNhuan(year: number): boolean {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      return year % 400 == 0;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

// Khoi tao va gọi hàm main và chạy chương trình
function main(): void {
  const result: boolean = kiemTraNamNhuan(year);

  result == true
    ? console.log("Nam " + year + " la nam nhuan")
    : console.log("Nam " + year + " khong la nam nhuan");
}

main();
