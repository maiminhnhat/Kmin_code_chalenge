let readline = require("readline-sync"); // Khai báo thư viện

// Nhập: Nhập hai giá trị của a và b
let sl = Number(readline.question('Nhap so luong: '));
let donGia  = Number(readline.question('Don gia: '));

// Step 03: Khai bao ket qua va in ra man hinh
let tien = sl * donGia;
let thue = tien * 10/100
console.log("So tien: ", tien);
console.log("Thue gia tri gia tang:", thue);

