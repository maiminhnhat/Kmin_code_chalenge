// Khai báo thư viện
import { question } from "readline-sync";

// Khai báo và nhập giá trị
let soLuong: number = Number(question("Nhap so luong:"));
let donGia: number = Number(question("Nhap don gia:"));

// khởi tạo hàm tính tiền
function tinhTien(soLuong: number, donGia: number):number {
  let tien = soLuong * donGia;
  return tien
}

//Khởi tạo hàm main để chạy chương trình
function main():void {
  let tien = tinhTien(soLuong, donGia);
  let thue = tien * 0.1;

  console.log("Tien phai tra " + tien);
  console.log("Thue gia tang " + thue);
}

// gọi hàm main và chạy chương trình
main();