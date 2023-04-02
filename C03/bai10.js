// Step 01: Khai bao thu vien
var readline = require("readline-sync");

// Step 02: Khai bao va nhap gia tri
var h = Number((0, readline.question)("nhap so h: "));

// Step 03: In hinh vuong can
for (var i = 0; i < h; ++i) {
  var line = "";
  for (var j = 0; j < i + 1; ++j)
    if (j == 0 || j == i || i == h - 1) line += " * ";
    else {
      line += "   ";
    }
  console.log(line);
}
