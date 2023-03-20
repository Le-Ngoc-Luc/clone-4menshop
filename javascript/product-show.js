const mainImgProduct = document.querySelectorAll('.product-img-main img'); 
const product_detail_accordion = document.querySelector('.product-detail-accordion');
const icon_minus = document.querySelector('.fa-minus');
const icon_plus = document.querySelector('.fa-plus');
const accordion_detail = document.querySelector('.accordion-detail');


function displayImgProduct(n){

    for(let i = 0 ; i < mainImgProduct.length ; i++){
        mainImgProduct[i].className = mainImgProduct[i].className.replace('active', '');
    }
    
    mainImgProduct[n - 1].className += ' active';
}

product_detail_accordion.addEventListener('click', () => {
    icon_minus.classList.toggle('active');
    icon_plus.classList.toggle('active');

    if(icon_minus.classList.contains('active')){
        accordion_detail.classList.add('active');
    }else{
        accordion_detail.classList.remove('active');
    }
})