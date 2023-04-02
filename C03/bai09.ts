// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let h:number = Number(question("nhap so height: "));
let w:number = Number(question("nhap so weight: "));

// Step 03: In hinh chu nhat
for (let i = 0; i < h; ++i) {
  let line:string  = "";

  for (let j = 0; j < w; ++j)
    if (i == 0 || i == h - 1 || j == 0 || j == w - 1) line += " * ";
    else {
      line += "   ";
    }
  console.log(line);
}
