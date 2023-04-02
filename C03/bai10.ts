// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let h:number = Number(question("nhap so h: "));

// Step 03: In hinh vuong can
for (let i = 0; i < h; ++i) {
  let line = "";

  for (let j = 0; j < i + 1; ++j)
    if (j == 0 || j == i || i == h - 1) line += " * ";
    else {
      line += "   ";
    }

  console.log(line);
}
