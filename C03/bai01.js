// Step 01: Khai bao thu vien
var readline = require("readline-sync");

// Step 02: Khai bao va nhap gia tri
var n = Number((0, readline.question)("Nhap n: "));

var output = "";

// Step 03: Lap va in ra ket qua
for (var i = 1; i <= n; i++) {
    output += "Kmin " + i;
    if (i != n) {
        output += ", ";
    }
    else {
        output += ".";
    }
}
console.log(output);
