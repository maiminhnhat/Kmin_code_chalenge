// Khai báo thư viện
var readline = require("readline-sync");

// Khai báo và nhập giá trị
var year = Number((0, readline.question)("Nhap so nam:  "));

// Khỏi tạo hàm kiểm tra năm nhuận
function kiemTraNamNhuan(year) {
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
function main() {
  var result = kiemTraNamNhuan(year);
  result == true
    ? console.log("Nam " + year + " la nam nhuan")
    : console.log("Nam " + year + " khong la nam nhuan");
}
main();
