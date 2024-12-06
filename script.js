const wrapper = document.querySelector('.wrapper'),
	form = wrapper.querySelector('.form'),
	input = wrapper.querySelector('.form input'),
	btn = wrapper.querySelector('.form button'),
	img = wrapper.querySelector('.qr-code img')
let curentValueInput

form.addEventListener('submit', event => {
	event.preventDefault()
	const inputValue = input.value.trim()
	if (!inputValue || inputValue === curentValueInput) return
	curentValueInput = inputValue

	btn.textContent = 'Идет создание QR-кода...'
	img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`
	img.addEventListener('load', () => {
		wrapper.classList.add('active')
		btn.textContent = 'Сгенирировать QR-код'
	})
	img.addEventListener('error', () => {
		alert('Ошибка при загрузке QR-кода. Пожалуйста, попробуйте еще раз.')
		location.reload()
	})
})

input.addEventListener('input', function () {
	if (this.value.trim() && wrapper.classList.contains('active')) {
		wrapper.classList.remove('active')
	}
})

//! link API
//img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;
