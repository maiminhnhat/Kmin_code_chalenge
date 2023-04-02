// Khai báo thư viện
var readline = require("readline-sync");

//Khởi tạo hàm main để chạy chương trình
function main() {
    var laptop = nhapThongTin();
    console.log(laptop);
    console.log("May duoc san xuat dc", new Date().getFullYear() - laptop.manufactureYear, "nam");
}

// Tạo hàm để xử lý việc nhập thông tin latop
function nhapThongTin() {
    var laptop = {
        model: "",
        manufactureYear: 0,
        ram: 0,
        hdd: 0,
        display: {
            width: 0,
            height: 0
        }
    };
    laptop.model = (0, readline.question)("Nhap model may: ");
    laptop.manufactureYear = (0, readline.question)("Nhap nam san xuat: ");
    laptop.ram = (0, readline.question)("Nhap ram: ");
    laptop.hdd = (0, readline.question)("Nhap hdd: ");
    laptop.display.width = (0, readline.question)("Nhap chieu ngang man hinh: ");
    laptop.display.height = (0, readline.question)("Nhap chieu cao man hinh: ");
    tinhDiemMaytinh(laptop.ram, laptop.hdd);
    return laptop;
}

// Tạo hàm để tính điểm của laptop
function tinhDiemMaytinh(ram, hdd) {
    var diem = (3 * ram + 2 * hdd) / 5;
    console.log(diem);
}

main();
