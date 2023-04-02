// Khỏi tạo một array
let array: number[] = [3, 5, 1, 2, 9, 6, 12, 8];
let arrayOfSquares: number[] = [];

// Tạo hàm để liệt kê số chính phương
function lietKeSoChinhPhuong(arr: number[]) {
  // Lặp qua mảng và kiểm tra trên đó số nào là chính phương
  for (let i = 1; i <= arr.length; i++) {
    // kiểm tra số chính phương và đưa vào mảng
    if (Math.sqrt(arr[i]) % 1 == 0) {
      arrayOfSquares.push(arr[i]);
    }
  }
}

lietKeSoChinhPhuong(array);
arrayOfSquares.length > 0 ? console.log("Yes") : console.log("No");
