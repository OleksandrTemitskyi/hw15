(() => {
	const burgerOpen = document.querySelector('.header__box-burger')
	const burgerClose = document.querySelector('.header__nav-close')
	const navigation = document.querySelector('.header__nav')

	burgerOpen.addEventListener('click', () => {
		navigation.classList.add('active')
	})

	burgerClose.addEventListener('click', () => {
		navigation.classList.remove('active')
	})
})();

(() => {
	const tabsItem = document.querySelectorAll('.tabs__links-item')
	const tabsBlock = document.querySelectorAll('.tabs__content-item')
	
	tabsItem.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabsBlock.forEach((content) => {
				content.classList.remove('active')
			})
			tabsItem.forEach((tab) => {
				tab.classList.remove('active')
			})
			tabsItem[index].classList.add('active')
			tabsBlock[index].classList.add('active')
		})
	})
})();

const swiper = new Swiper('.team__swiper', {
  loop: true,
	spaceBetween: 30,
	grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
		clickable: true
  },
});

// POPUP
(() => {
	const servicesBtn = document.querySelector('.services__btn')
	const formPopup = new Popup({
		id: "form__popup",
		title: "We would like to help you",
		content: `<form class='form'>
								<input type="text" name='name' placeholder='Name'/ class='form__name'>
								<input type="text" name='name' placeholder='Message'/ class='form__massage'>
								<p class='form__desc'>How to answer you?</p>
								<input type='tel' name='number' placeholder='Phone number' class='form__tel'/>
								<input type='email' name='email' placeholder='Email' class='form__email'/>
								<button class='form__button'>Send message</button>
							</form>`,
		borderRadius: '12px',
		titleMargin: "0",
		titleColor: '#f0145a',
	});

	console.log(formPopup)

	servicesBtn.addEventListener('click', () => {
		formPopup.show()
	})

})();