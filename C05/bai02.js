// Khai báo thư viện
var readline_sync_1 = require("readline-sync");

//Khởi tạo hàm main để chạy chương trình
function main() {
  var user = nhapThongTin();
  console.log(user);
}

// Tạo hàm để xử lý việc nhập thông tin người dùng
function nhapThongTin() {
  var user = {
    username: "",
    password: "",
    email: "",
    phone: "",
  };
  user.username = (0, readline_sync_1.question)("Nhap username: ");
  user.password = (0, readline_sync_1.question)("Nhap password: ");
  user.email = (0, readline_sync_1.question)("Nhap email: ");
  user.phone = (0, readline_sync_1.question)("Nhap phone: ");
  tinhSoNut(user.phone);
  return user;
}

//Tạo hàm để xử lý tính số nút của số điện thoại vừa nhập vào
function tinhSoNut(phone) {
  var soNut = phone
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);
  console.log(soNut % 10);
}

//Run program
main();
