const menuBtn = document.querySelector('.menu-btn');
const menuBurger = document.querySelector('.menu-burger');
const headerDropdown = document.querySelectorAll('.header__dropdown__text');
const menuDropdown = document.querySelectorAll('.menu__dropdown__text');


menuBtn.addEventListener('click', function(event) {
  event.preventDefault();
  menuBtn.classList.toggle('menu-btn-active');
  menuBurger.classList.toggle('menu-burger-active');
});


headerDropdown.forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});
menuDropdown.forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});


var mySwiper = new Swiper('.swiper-container', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  spaceBetween: 100,
})
