// Khai báo thư viện
var readline = require("readline-sync");

// Khai báo và nhập giá trị
var n = Number((0, readline.question)("nhap n: "));
var tong = 0;

//Khỏi tạo hàm để kiểm tra số chính phương
function kiemTraSoChinhPhuong(n, tong) {
    // lặp từ 1 đến n để xem số n chia hết cho số n và số đó phải khác n
    for (var i = 1; i <= n; i++) {
        if (n % i == 0 && i != n) {
            tong = tong + i;
        }
    }
    if (tong == n) {
        return true;
    }
    else {
        return false;
    }
}

// Khoi tao va gọi hàm main và chạy chương trình
function main() {
    var result = kiemTraSoChinhPhuong(n, tong);
    result == true ? console.log("Co") : console.log("Khong");
}
main();
