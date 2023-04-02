
// Khai báo thư viện
import { question } from "readline-sync";

// Viết hàm để tính diện tích hình chữ nhật
function tinhDienTichHinhChuNhat(width:number, height:number):number {
  return width * height;
}

// khởi tạo hàm main để chạy chương trình
function main():void {
  const width = Number(question("Nhap chieu rong: "));

  const height = Number(question("Nhap chieu rong: "));

  console.log(tinhDienTichHinhChuNhat(width, height));
}

main();