// Khai báo thư viện
var readline_sync_1 = require("readline-sync");

// Khai báo và nhập giá trị
var m = Number((0, readline_sync_1.question)("nhap so m: "));
var n = Number((0, readline_sync_1.question)("nhap so n: "));

//Khỏi tạo hàm để kiểm tra số chính phương đầu tiên
function kiemTraSoChinhPhuongDauTien(m, n) {
    // lặp từ 1 đến n để xem số n chia hết cho số n thì số đo là số chính phương và
    // ta sẽ dừng lại ngay khi tìm đc số chính phương đầu tiên
    for (var i = m; i <= n; i++) {
        if (Math.sqrt(i) % 1 == 0) {
            console.log(i + " là số chính phương");
            break;
        }
    }
}

// Khoi tao va gọi hàm main và chạy chương trình
function main() {
    kiemTraSoChinhPhuongDauTien(m, n);
}
main();
