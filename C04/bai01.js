// Khai báo thư viện
var readline = require("readline-sync");

// Khai báo và nhập giá trị
var Pi = 3.14;
var r = Number((0, readline.question)("Nhap ban kinh: "));

// Khỏi tạo hàm tính chu vi
function chuviHinhTron(Pi, r) {
    var c = r * 2 * Pi;
    return c;
}

// Khởi tạo hàm tính diện tích
function dienTichHinhTron(Pi, r) {
    var s = Math.pow(r, 2) * Pi;
    return s;
}

//Khởi tạo hàm main để chạy chương trình
function main() {
    var c = chuviHinhTron(Pi, r);
    var s = dienTichHinhTron(Pi, r);
    console.log("Chu vi hinh tron :", c);
    console.log("Dien tich hinh tron :", s);
}

// Step 04: Goi ham
main();
