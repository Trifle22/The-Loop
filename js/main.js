const menuBtn = document.querySelector('.menu-btn');
const menuBurger = document.querySelector('.menu-burger');

menuBtn.addEventListener('click', function(event) {
  event.preventDefault();
  menuBtn.classList.toggle('menu-btn-active');
  menuBurger.classList.toggle('menu-burger-active');
});