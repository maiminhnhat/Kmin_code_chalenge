// Step 01: Khai bao thu vien
var readline_sync_1 = require("readline-sync");

// Step 02: Khai bao va nhap gia tri
var h = Number((0, readline_sync_1.question)("nhap so height: "));
var w = Number((0, readline_sync_1.question)("nhap so weight: "));

// Step 03: In hinh chu nhat
for (var i = 0; i < h; ++i) {
  var line = "";
  for (var j = 0; j < w; ++j)
    if (i == 0 || i == h - 1 || j == 0 || j == w - 1) line += " * ";
    else {
      line += "   ";
    }
  console.log(line);
}
