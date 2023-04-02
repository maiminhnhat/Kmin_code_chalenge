// Khỏi tạo một array
var array = [3, -5, 1, 2, -1, -6, 12, 8];

//Tạo hàm để tìm số lớn nhất trong mảng
function minusLargest(arr) {
    var i;
    // Giả dụ số đầu tiên trong mảng là số lớn nhất
    var max = arr.filter(function (item) { return item < 0; })[0];
    // Lăp qua từng số trong mảng từ vị trí [1] đến cuối và so sanh với max ở trên
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max && arr[i] < 0)
            max = arr[i];
    }
    return max;
}

console.log(minusLargest(array));
