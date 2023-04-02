// Khai báo thư viện
var readline = require("readline-sync");

// Khai báo và nhập giá trị
var soLuong = Number((0, readline.question)("Nhap so luong:"));
var donGia = Number((0, readline.question)("Nhap don gia:"));

// khởi tạo hàm tính tiền
function tinhTien(soLuong, donGia) {
    var tien = soLuong * donGia;
    return tien;
}

//Khởi tạo hàm main để chạy chương trình
function main() {
    var tien = tinhTien(soLuong, donGia);
    var thue = tien * 0.1;
    console.log("Tien phai tra " + tien);
    console.log("Thue gia tang " + thue);
}

// gọi hàm main và chạy chương trình
main();
