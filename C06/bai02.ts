// Step 01: Khai báo giá trị mảng
let arrayOfNumber: number[] = [24, 32, 45, 126, 68, 12, 81];
let arrOfVB: number[] = [];

// Khai báo hàm kiểm tra số VB
function kiemTraVB(arr: number[]) {

  // Sử dụng vòng lặp để lặp qua từng thành phần của mảng
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i] % 10;
    let b = Math.trunc(arr[i] / 10) % 10;
    let c = Math.trunc(arr[i] / 100);

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

kiemTraVB(arrayOfNumber);
console.log(arrOfVB);
