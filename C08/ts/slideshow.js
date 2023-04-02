// Khởi tạo biến để lưu vị trí bắt đầu của slide - sẽ bắt đầu từ vị trí số 0
var index = 0;

// Khởi tạo hàm để lưu logic chuyển slide
function chuyenSlide(truocsau) {
    // Dùng getElementById để lấy HTML element có id là slideshow
    var slideshow = document.getElementById("slideshow");
    // Kiểm tra xem mình có lấy được element slideshow không
    // Nếu được thì sẽ vào code của if
    if (slideshow !== null) {
        // Dùng QuerySelectorAll để lấy tất cả các thẻ img từ đó sẽ biết được số lượng hình trong slide
        var imageQuanlity = slideshow.querySelectorAll('img').length - 1;

        // Kiểm tra xem nếu đã đi đến slide cuối cùng thì reset lại index
        if (index + truocsau > imageQuanlity) {
            index = 0;
        }

        // Kiểm tra xem nếu người dùng lùi slide từ slide đầu tiên đến slide cuối cùng
        // Sẽ hiện slide cuối cung bằng cách set index = imageQuanlity
        else if (index + truocsau < 0) {
            index = imageQuanlity;
        }
        // Kiểm tra trường hợp người dùng nhấn hiện slide tiếp theo
        else
            index += truocsau;
        // Dùng vòng lặp để điều khiển sự xuất hiện của các slides
        for (var i = 0; i <= imageQuanlity; i++) {
            // Nếu i = index thì sẽ cho slide đó hiện bằng cách remove class "slides"
            if (i == index) {
                slideshow.children[i].classList.remove("slides");
            }
            // Ẩn các slide còn lại
            if (i != index && !slideshow.children[i].classList.contains("slides")) {
                slideshow.children[i].classList.add("slides");
            }
        }
    }
}

function hienThiSlideKeTiep() {
    chuyenSlide(1);
}

function hienThiSlideTruocDo() {
    chuyenSlide(-1);
}
chuyenSlide(0);
