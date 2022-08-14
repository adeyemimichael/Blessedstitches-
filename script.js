let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');

}
var swiper = new Swiper('.home-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 300,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        Clickable: true,
    },
    loop: true,
});
var swiper = new Swiper('.review-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 400,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        Clickable: true,
    },
    loop: true,
});