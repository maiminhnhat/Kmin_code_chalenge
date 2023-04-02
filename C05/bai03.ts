// Khai báo thư viện
import { question } from "readline-sync";

//Khai báo interface để định nghĩa các thuộc tính của laptop
interface ILaptop {
  model: string;
  manufactureYear: number;
  ram: number;
  hdd: number;
  display: {
    width: number;
    height: number;
  };
}

//Khởi tạo hàm main để chạy chương trình
function main() {
  const laptop = nhapThongTin();
  console.log(laptop);
  console.log(
    "May duoc san xuat dc",
    new Date().getFullYear() - laptop.manufactureYear,
    "nam"
  );
}

// Tạo hàm để xử lý việc nhập thông tin latop
function nhapThongTin(): ILaptop {
  const laptop: ILaptop = {
    model: "",
    manufactureYear: 0,
    ram: 0,
    hdd: 0,
    display: {
      width: 0,
      height: 0,
    },
  };

  laptop.model = question("Nhap model may: ");
  laptop.manufactureYear = question("Nhap nam san xuat: ");
  laptop.ram = question("Nhap ram: ");
  laptop.hdd = question("Nhap hdd: ");
  laptop.display.width = question("Nhap chieu ngang man hinh: ");
  laptop.display.height = question("Nhap chieu cao man hinh: ");

  tinhDiemMaytinh(laptop.ram, laptop.hdd);
  return laptop;
}

// Tạo hàm để tính điểm của laptop
function tinhDiemMaytinh(ram: number, hdd: number) {
  const diem = (3 * ram + 2 * hdd) / 5;
  console.log(diem);
}
main();
