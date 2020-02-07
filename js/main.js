var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop:true ,
    navigation: {
        nextEl: '.arrow',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        581: {
          slidesPerView: 2,
          spaceBetween: 40
        }
      }

});

var menuButton = document.querySelector('.menu-button') ;

var menu = document.querySelector('.header') ;
menuButton.addEventListener('click' , function() {
  menuButton.classList.toggle('menu-button-active') ;
  menu.classList.toggle('header-active') ;
})