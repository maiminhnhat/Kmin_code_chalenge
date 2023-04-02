// Khỏi tạo một array
var array = [3, 5, 1, 2, 9, 6, 12, 8];
var arrayOfSquares = [];

// Tạo hàm để liệt kê số chính phương
function lietKeSoChinhPhuong(arr) {
    // Lặp qua mảng và kiểm tra trên đó số nào là chính phương
    for (var i = 1; i <= arr.length; i++) {
        // kiểm tra số chính phương và đưa vào mảng
        if (Math.sqrt(arr[i]) % 1 == 0 && arr[i] % 2 == 0) {
            arrayOfSquares.push(i);
        }
    }
}
lietKeSoChinhPhuong(array);
arrayOfSquares.length > 0 ? console.log("Yes") : console.log("No");
