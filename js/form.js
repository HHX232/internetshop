
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
 
 
 