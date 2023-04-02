// Khai báo thư viện
import { question } from "readline-sync";

// Khai báo và nhập giá trị
let a,
  b,
  n: number = 0;
n = Number(question("Nhap vao so n:  "));
a = n % 10;
b = Math.trunc(n / 10) % 10; // De loai bo va lay so cuoi cua n

// Khởi tạo hàm để đọc số hàng chục
function docHangChuc(n: number, a: number, b: number): void {
  if (n < 10 || n > 99) {
    console.log("Nhap vao hai chu so");
  } else {
    switch (b) {
      case 1:
        console.log("Muoi ");
        break;
      case 2:
        console.log("Hai Muoi ");
        break;
      case 3:
        console.log("Ba Muoi ");
        break;
      case 4:
        console.log("Bon Muoi ");
        break;
      case 5:
        console.log("Nam Muoi ");
        break;
      case 6:
        console.log("Sau Muoi ");
        break;
      case 7:
        console.log("Bay Muoi ");
        break;
      case 8:
        console.log("Tam Muoi ");
        break;
      case 9:
        console.log("Chin Muoi ");
        break;
      default:
        console.log("Khong hop le");
    }
    docHangDonVi(a);
  }
}

// Khởi tạo hàm để đọc số hàng đơn vị
function docHangDonVi(a: number): void {
  switch (a) {
    case 1:
      console.log("Mot ");
      break;
    case 2:
      console.log("Hai ");
      break;
    case 3:
      console.log("Ba ");
      break;
    case 4:
      console.log("Bon ");
      break;
    case 5:
      console.log("Nam ");
      break;
    case 6:
      console.log("Sau ");
      break;
    case 7:
      console.log("Bay ");
      break;
    case 8:
      console.log("Tam ");
      break;
    case 9:
      console.log("Chin ");
      break;
    default:
      console.log("Khong hop le");
  }
}

// Khoi tao va gọi hàm main và chạy chương trình
function main(): void {
  docHangChuc(n, a, b);
}
main()
