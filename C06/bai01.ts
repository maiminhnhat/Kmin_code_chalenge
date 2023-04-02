// Step 01: Khai báo thư viện
import { question } from "readline-sync";

// Step 02: Khai báo giá trị số nguyên
let n: number = Number(question("nhap so n: "));

function kiemtraSoChinhPhuong(n: number): boolean {
    //Tìm số bất kỳ nhỏ hơn hoặc bằng n mà bình phương bằng n
    let i = 0;
    while(i <= n){
        if( Math.pow( i, 2) == n ) {   
           return true
        }
        i++;
    }
    return false;
}

// Gọi và chạy hàm
console.log(kiemtraSoChinhPhuong(n))