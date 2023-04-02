// Step 01: Khai báo thư viện
let readline = require("readline-sync");

// Step 02: Khai báo giá trị số nguyên
let n = Number((0, readline.question)("nhap so n: "));

function kiemtraSoChinhPhuong(m) {
  //Tìm số bất kỳ nhỏ hơn hoặc bằng n mà bình phương bằng n
  let i = 0;
  while (i <= n) {

    // Kiểm tra nếu số i bình phương lên bằng n thì kết luận là số chính phương trả về true
    if (Math.pow(i, 2) == n) {
      return true;
    }
    i++;
  }
  return false;
}

// Gọi và chạy hàm
console.log(kiemtraSoChinhPhuong(n));
