
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


const burgerContent = document.querySelector('.burger__content')
const burgerIcon = document.querySelector('.burger')
const burgerClose = document.querySelector('.burger__close-btn')
burgerIcon.addEventListener('click', activateBurger);
burgerClose.addEventListener('click', activateBurger);

function activateBurger(){
  burgerContent.classList.toggle("burger__content--active")
}


/* Phone Mask */
mask('[data-tel-input]');

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=>{
	input.addEventListener('input', ()=>{
		if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', ()=>{
		if (input.value == '+') input.value = '';
	})
});

let swiper = new Swiper(".trust__comm-first", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
 });



const timerElement = document.getElementById('timer');
const endValue = 1.83;


function isElementInViewport(el, offset) {
	var rect = el.getBoundingClientRect();
	return (
	  rect.top >= +offset &&
	  rect.left >= +offset &&
	  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
	  rect.right <= (window.innerWidth || document.documentElement.clientWidth) - offset
	);
 }

 // Функция для запуска анимации при достижении элементом области видимости
 function animateIfVisible() {
	var timerElement = document.getElementById('timer');
	if (isElementInViewport(timerElement, 200)) {
	  // Здесь выполняйте вашу анимацию animateNumber()
	  animateNumber();
	  // Удаляем обработчик события, чтобы анимация запустилась только один раз
	  window.removeEventListener('scroll', animateIfVisible);
	}
 }

 // Функция анимации animateNumber()
 function animateNumber() {
	let wholeNumber = 0;
  let decimal = 0;

  const wholeNumberTimer = setInterval(() => {
    wholeNumber++;
    if (wholeNumber > Math.floor(endValue)) {
      clearInterval(wholeNumberTimer);
      wholeNumber = Math.floor(endValue);
    }
    timerElement.children[0].textContent = wholeNumber;
  }, 500 / Math.floor(endValue));

  const decimalTimer = setInterval(() => {
    decimal++;
    if (decimal > 83) {
      clearInterval(decimalTimer);
      decimal = 83;
    }
    timerElement.children[2].textContent = String(decimal).padStart(2, '0');
    if (wholeNumber === Math.floor(endValue) && decimal === 83) {
      clearInterval(wholeNumberTimer);
      clearInterval(decimalTimer);
    }
  }, 500 / 84);
	console.log('Animation started');
 }

 window.onload = function() {
  if (window.innerWidth < 900 || window.innerHeight < 900) {
      animateNumber(); // Если ширина меньше 750px, начать анимацию сразу
  } else {
      window.addEventListener('scroll', animateIfVisible);
      animateIfVisible(); // Запускаем проверку при загрузке, чтобы анимация сработала, если элемент уже виден
  }
};

//fq

const fqVueBtn = document.querySelector('.fq__vue-btn')
console.log(fqVueBtn)
const fqLinks = document.querySelectorAll('.fq__card-link')

document.addEventListener("DOMContentLoaded", function() {
  if (fqLinks.length < 4) {
    fqVueBtn.classList.add("none"); 
  }
});

fqVueBtn.addEventListener('click', function(){
  if(fqLinks[fqLinks.length - 1].classList.contains("none")){
    for(i=0; i< fqLinks.length; i++){
      fqLinks[i].classList.remove("none")
    }
    fqVueBtn.innerText = "Скрыть"
  }else{
    for(i=3; i< fqLinks.length; i++){
      fqLinks[i].classList.add("none")
    }
    fqVueBtn.innerText = "Показать еще"

  }
  
})
 //form


 document.getElementById('applicationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию

  // Создаем объект FormData для сбора данных формы
  var formData = new FormData(this);

  // Отправляем данные на сервер с помощью AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'обработчик.php', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
          alert('Форма успешно отправлена');
          // Очищаем поля формы
          document.getElementById('applicationForm').reset();
      } else {
          alert('Произошла ошибка при отправке формы');
      }
  };
  xhr.send(formData);
});



 //tabs
 const tabItem = document.querySelectorAll('.tabs__btns-item');
 const tabContent = document.querySelectorAll('.tabs__content-item');

 tabItem.forEach(function(element){
	element.addEventListener('click', open);
  })

 function open(evt){
  const tabtarget = evt.currentTarget;
  console.log(tabtarget)
  const button = tabtarget.dataset.tab;

  tabItem.forEach(function(item){
    item.classList.remove('tabs__btns-item-active');
  });

  tabtarget.classList.add('tabs__btns-item-active');

  tabContent.forEach(function(item){
item.classList.remove('tabs__content-item--active')
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
 }