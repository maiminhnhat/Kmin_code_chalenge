// Khai báo thư viện
var readline = require("readline-sync");

// Viết hàm để tính diện tích hình chữ nhật
function tinhDienTichHinhChuNhat(width, height) {
    return width * height;
}

// khởi tạo hàm main để chạy chương trình
function main() {
    var width = Number((0, readline.question)("Nhap chieu rong: "));
    var height = Number((0, readline.question)("Nhap chieu rong: "));
    console.log(tinhDienTichHinhChuNhat(width, height));
}
main();
