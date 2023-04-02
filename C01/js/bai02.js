let readline = require("readline-sync"); // Khai báo thư viện

// Nhập: Nhập hai giá trị của a và b
let a = Number(readline.question('Nhap a: '));
let b  = Number(readline.question('Nhap b: '))
let c  = Number(readline.question('Nhap c: '))

// Step 03: Khai bao ket qua va in ra man hinh
let result = (a ** 2*b ** 2)/c
console.log("Ket qua la:", result);