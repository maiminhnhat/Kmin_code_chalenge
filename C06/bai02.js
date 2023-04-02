// Step 01: Khai báo giá trị mảng
var arrayOfNumber = [24, 32, 45, 126, 68, 12, 81];
var arrOfVB = [];

// Khai báo hàm kiểm tra số VB
function kiemTraVB(arr) {
  // Sử dụng vòng lặp để lặp qua từng thành phần của mảng
  for (var i = 0; i < arr.length; i++) {
    var a = arr[i] % 10;
    var b = Math.trunc(arr[i] / 10) % 10;
    var c = Math.trunc(arr[i] / 100);

    // kiểm tra xem số có hàng trăm không
    if (c != 0) {
      //kiểm tra điều kiện số VB
      if (
        arr[i] % (a + b + c) == 0 &&
        arr[i] % (a * b * c) == 0 &&
        arr[i] % a == 0 &&
        arr[i] % b == 0 &&
        arr[i] % c == 0
      ) {
        arrOfVB.push(arr[i]);
      }
    }
    
    //kiểm tra điều kiện số VB
    if (
      arr[i] % (a + b) == 0 &&
      arr[i] % (a * b) == 0 &&
      arr[i] % a == 0 &&
      arr[i] % b == 0
    ) {
      arrOfVB.push(arr[i]);
    }
  }
}
kiemTraSoVB(arr);
console.log(arrOfVB);
