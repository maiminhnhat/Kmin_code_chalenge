// Khai báo thư viện
import { question } from "readline-sync";

//Khởi tạo interface để định nghĩa các thuộc tính của user
interface IUser {
    username: string,
    password: string,
    email: string,
    phone: string,
}

//Khởi tạo hàm main để chạy chương trình
function main() {
  const user = nhapThongTin();
  console.log(user);
}

// Tạo hàm để xử lý việc nhập thông tin người dùng
function nhapThongTin():IUser {
  const user:IUser = {
    username: "",
    password: "",
    email: "",
    phone: "",
  };

  user.username = question("Nhap username: ");
  user.password = question("Nhap password: ");
  user.email = question("Nhap email: ");
  user.phone = question("Nhap phone: ");

  tinhSoNut(user.phone);
  return user;
}

//Tạo hàm để xử lý tính số nút của số điện thoại vừa nhập vào
function tinhSoNut(phone) {
  let soNut = phone
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  console.log(soNut % 10);
}

//Run program
main();
