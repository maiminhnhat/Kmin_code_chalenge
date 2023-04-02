"use strict";
exports.__esModule = true;
// Khai báo thư viện
var readline_sync_1 = require("readline-sync");
// Khai báo và nhập giá trị
var m = Number((0, readline_sync_1.question)("nhap so m: "));
var n = Number((0, readline_sync_1.question)("nhap so n: "));
var arrayOfSquares = [];
// Tạo hàm để liệt kê số chính phương
function lietKeSoChinhPhuong(m, n) {
    // Lặp qua đoạn [m,n] và kiểm tra trên đó số nào là chính phương
    for (var i = m; i <= n; i++) {
        // kiểm tra số chính phương lẻ và đưa vào mảng
        if (Math.sqrt(i) % 1 == 0 && i % 2 == 0) {
            arrayOfSquares.push(i);
        }
    }
}
lietKeSoChinhPhuong(m, n);
// dùng length để đếm số chính phương trong mảng
var squareNumbers = arrayOfSquares.length;
// dùng reduce để tính tổng các thành phần trong mảng số chính phuong và trả về kết quả tổng
var sum = arrayOfSquares.reduce(function (a, b) { return a + b; }, 0);
// tính trung bình cộng và in kết quả
console.log(sum / squareNumbers);
