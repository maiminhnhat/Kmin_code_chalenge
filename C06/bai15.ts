// Khỏi tạo một array
let array:number[] = [3, 5, 1, 2, 9, 6, 12, 8]
let dem:number = 0

//Tạo hàm để tìm số lớn nhất trong mảng
function largest(arr:number[]):void {
    let i;

    // Lặp qua mảng và kiểm tra xem số sau có lớn hơn số trước không, nếu có thì cứ tăng dần biến dem lên.
    for (i = 0; i <= arr.length; i++) {
        if (arr[i + 1] > arr[i]) dem++
    }     
}
largest(array);

// Nếu biến dem bằng đúng chiều dài của mảng thì đó là mảng tăng dần
dem == array.length ? console.log("Yes") : console.log("No");