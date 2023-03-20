function inputProduct(element, product, count ){
    const element1 = document.querySelector(element);
    let html = '';

    for(let i = 0; i < count; i++){
        html += product;
    }
    element1.innerHTML = html;
}