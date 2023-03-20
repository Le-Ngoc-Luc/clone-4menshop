const navbarMain = document.querySelector('.navbar');
const mynavbarElement = document.querySelector('.nav-mobile');
const navbarButtonElement = document.querySelector('.navbar-button');
const topsearch = document.querySelector('.topsearch');
const inputSearch = document.querySelector('.search-input');

//xử lí sự kiện click menu ở mobile
function navbarTogger(){
    navbarButtonElement.addEventListener('click', () => {
        mynavbarElement.classList.toggle('nav-toggle');
    })
    
}
// Sự kiện clivk vào search
topsearch.onclick = (e) => {
    if(e.target != inputSearch){
        inputSearch.classList.toggle('active');
    }
}

// Xử lí sự kiện khi cuộn 
    window.addEventListener('scroll', () => {
        if(window.scrollY > 40){
            navbarMain.classList.add('sticky');
        }else{
            navbarMain.classList.remove('sticky');
        }
    })    


navbarTogger();