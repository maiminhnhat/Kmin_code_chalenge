// Khỏi tạo một array
var array = [3, -5, 1, 2, -1, -6, 12, 8];

//Tạo hàm để kiểm tra xem mảng có toàn là số âm
function kiemTraMangToanAm(arr) {
    var i;
    // Lăp qua từng số trong mảng từ vị trí [0] xem nêu tồn tại số nào lớn hơn 0 thì trả về false
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > 0)
            return false;
    }
    //Không thì trả về true
    return true;
}
console.log(kiemTraMangToanAm(array));
