'use strict';

const burgerBtn = document.querySelector('.menu_burger');
const navMenu = document.querySelector('.nav_menu');

burgerBtn.addEventListener('click', (e) => {
   burgerBtn.classList.toggle('active');
   if (e.target.classList.contains('active')) {
      navMenu.style.cssText = 'left: -10px;';
   } else {
      navMenu.style.cssText = 'left: -180px;';
   }
});


