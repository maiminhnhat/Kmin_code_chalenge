// Khỏi tạo một array
var array = [3, 5, 1, 2, 9, 6, 12, 8];

//Tạo hàm để tìm số lớn nhất trong mảng
function largest(arr) {
    var i;
    // Giả dụ số đầu tiên trong mảng là số lớn nhất
    var max = arr[0];
    // Lăp qua từng số trong mảng từ vị trí [1] đến cuối và so sanh với max ở trên
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}

console.log(largest(array));
