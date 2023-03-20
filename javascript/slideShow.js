var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

var slideIndex = 1;
showSlides(slideIndex);

//Hàm thực hiện cho sụ kiện nhấn vaaof prev và next
function plusSlides(n){
    showSlides(slideIndex += n);
}

// Hàm thục hiện cho việc nhấn dot
function currentSlides(n){
    showSlides(slideIndex = n);
}

// Hàm thục hiện việc show slide
function showSlides(n){
    //Lấy ra các class list của slide và nút dot


    // Nếu n truyền vào lớn hơn số phần tử slide thì sẽ reset nó về 1
    if (n > slides.length) {slideIndex = 1}

    // Nếu n truyền vào nhỏ hơn 1 thì sẽ trả nó về độ dài của slides
    if (n < 1) {slideIndex = slides.length}

    //Ẩn tất cả các slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Sử dụng phương thức replace() để thay thế class active = chuỗi rỗng
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //hiển thị slide 
    slides[slideIndex-1].style.display = "block";

    // Thêm class active và element dot
    dots[slideIndex-1].className += " active";

}

// Auto Slides

autoshowSlide();

function autoshowSlide(){
    for(let i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    setTimeout(autoshowSlide, 5000);
}