// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let character = question("Nhap ky tu: ");
let hasNumber = /\d/;

if (character.match(hasNumber)) {
  console.log("So");
} else if (character === character.toLowerCase()) {
  console.log("Thuong");
} else {
  console.log("Hoa");
}