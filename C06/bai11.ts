// Khỏi tạo một array
let array: number[] = [3, -5, 1, 2, -1, -6, 12, 8]

//Tạo hàm để kiểm tra xem có tồn tại số dương nào không
function kiemTraTonTaiSoDuong(arr:number[]): boolean {
    let i;
   
    // Lăp qua từng số trong mảng từ vị trí [0] xem nêu tồn tại số nào lớn hơn 0 thì trả về true
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > 0) return true
    }
  //Không thì trả về false
  return false;
}
console.log(kiemTraTonTaiSoDuong(array));