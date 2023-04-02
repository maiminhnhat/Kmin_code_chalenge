// Khỏi tạo một array
let array: number[] = [3, -5, 1, 2, -1, -6, 12, 8]

//Tạo hàm để tìm số âm lớn nhất trong mảng
function minusLargest(arr:number[]) {
    let i;
   
    // Tìm và giả dụ số âm đầu tiên trong mảng là số lớn nhất
    let max = arr.filter(item => item < 0)[0];

    // Lăp qua từng số trong mảng từ vị trí [1] đến cuối và so sanh với max ở trên
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max && arr[i] < 0)
            max = arr[i];
    }
     
  return max;
}
console.log(minusLargest(array));