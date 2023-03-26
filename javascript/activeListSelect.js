function clickShow(element) {
  var ulElement = document.querySelector(element);
  var selectElement = ulElement.closest(".form-control-select");
  var spanElement = selectElement.querySelector("span.form-control");

  // get elemnt active
  if (ulElement) {
    // hiển thị thẻ
    const liElement = ulElement.querySelectorAll("li");
    var html = "";
    var value = "";
    for (let i = 0; i < liElement.length; i++) {
      if (liElement[i].className.includes("active")) {
        html = liElement[i].innerHTML + `<i class="fa fa-angle-down"></i>`;
      }
    }
    spanElement.innerHTML = html;

    // xử lí sự kiện khi click vài thẻ span
    spanElement.addEventListener("click", () => {
      ulElement.classList.toggle("active");
    });

    // xử lí sự kiện onclick vaof danh sách
    ulElement.addEventListener("click", (e) => {
      html = e.target.innerHTML + `<i class="fa fa-angle-down"></i>`;
      spanElement.innerHTML = html;

      for (let i = 0; i < liElement.length; i++) {
        if (liElement[i].className.includes("active")) {
          liElement[i].classList.remove("active");
          break;
        }
      }

      e.target.classList.add("active");
      spanElement.value = e.target.value;
      console.log(spanElement.value);
      ulElement.classList.remove("active");
    });
  }
}

function activeSelect(element) {
  var ulElement = document.querySelector(element);
  var selectElement = ulElement.closest(".form-control-select");
  var spanElement = selectElement.querySelector("span.form-control");
}
