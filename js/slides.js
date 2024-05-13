
$(document).ready(function(){
	$('.trust__slider').slick();
 })
 document.getElementById('file').addEventListener('change', function () {
	var files = this.files;
	if (files.length > 0) {
		 var label = document.querySelector('.file__label');
		 if (files.length === 1) {
			  label.textContent = files[0].name;
		 } else {
			  label.textContent = files.length + " файлов прикреплено";
		 }
	}
});

let swiper = new Swiper(".trust__comm-first", {
   loop: true,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
 });


const burgerContent = document.querySelector('.burger__content')
const burgerIcon = document.querySelector('.burger')
const burgerClose = document.querySelector('.burger__close-btn')
burgerIcon.addEventListener('click', activateBurger);
burgerClose.addEventListener('click', activateBurger);

function activateBurger(){
  burgerContent.classList.toggle("burger__content--active")
}
