// Khỏi tạo một array
var array = [3, 5, 1, 2, 9, 6, 12, 8];
var dem = 0;

//Tạo hàm để tìm số lớn nhất trong mảng
function largest(arr) {
    var i;
    // Lặp qua mảng và kiểm tra xem số sau có lớn hơn số trước không, nếu có thì cứ tăng dần biến dem lên.
    for (i = 0; i <= arr.length; i++) {
        if (arr[i + 1] > arr[i])
            dem++;
    }
}
largest(array);
// Nếu biến dem bằng đúng chiều dài của mảng thì đó là mảng tăng dần
dem == array.length ? console.log("Yes") : console.log("No");