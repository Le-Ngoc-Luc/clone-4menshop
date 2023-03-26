const listProductElement = document.querySelector(".list-product");
var html = "";
for (let i = 0; i < 24; i++) {
  html += `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="product-box">
        <!-- img box -->
        <div class="p-img-box">
            <span>-13%</span>
            <img src="./image/product-2-1.jpg" alt="">
            <div class="overlay">
                <a href="./product.html" class="buy-btn">Buy Now</a>
            </div>
        </div>

        <!-- details box -->
        <div class="p-details-box">
                <!-- type -->
            <div class="p-type">
                <a href="./product.html">Áo Sơ Mi Rengular Phối Màu SM129</a>
            </div>
                <!-- Price -->
            <div class="p-price">
                <a href="#">239.000đ</a>
                <span>295.000đ</span>
            </div>
            </div>
        </div>
    </div>`;
}

listProductElement.innerHTML = html;
