// Khai báo thư viện
var readline = require("readline-sync");

// Khai báo và nhập giá trị
var m = Number((0, readline.question)("nhap so m: "));
var n = Number((0, readline.question)("nhap so n: "));
var arrayOfSquares = [];

// Tạo hàm để liệt kê số chính phương
function lietKeSoChinhPhuong(m, n) {
  // Lặp qua đoạn [m,n] và kiểm tra trên đó số nào là chính phương
  for (var i = m; i <= n; i++) {
    // kiểm tra số chính phương lẻ và đưa vào mảng
    if (Math.sqrt(i) % 1 == 0) {
      arrayOfSquares.push(i);
    }
  }
}
lietKeSoChinhPhuong(m, n);

// dùng reduce để tính tổng các thành phần trong mảng số chính phuong và trả về kết quả tổng
console.log(
  arrayOfSquares.reduce(function (a, b) {
    return a + b;
  }, 0)
);
