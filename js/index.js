/* TABS */
const tabsBtn = document.querySelectorAll('.tabs-title')
const tabsItem = document.querySelectorAll('.tabs-item')

tabsBtn.forEach(element => {
	element.addEventListener('click', () => {
		let currentBtn = element
		let tabId = currentBtn.getAttribute('data-tab')
		let currentTab = document.querySelector(tabId)
		if (!currentBtn.classList.contains('active')) {
			tabsBtn.forEach(element => {
				element.classList.remove('active')
			})

			tabsItem.forEach(element => {
				element.classList.remove('active')
			})

			currentBtn.classList.add('active')
			currentTab.classList.add('active')
		}
	})
})

/* WORKS-TABS */

const worksBtn = document.querySelectorAll('.works-tabs__title')
const worksItem = document.querySelectorAll('.works-tabs__item')
const worksContent = document.querySelector('.works-tabs__content')

worksBtn.forEach(element => {
	element.addEventListener('click', () => {
		let currentBtn = element
		let tabId = currentBtn.getAttribute('data-tab')
		let currentTab = document.querySelector(tabId)
		if (!currentTab.classList.contains('active')) {
			worksBtn.forEach(element => {
				element.classList.remove('active')
			})

			worksItem.forEach(element => {
				element.classList.remove('active')
			})

			currentBtn.classList.add('active')
			currentTab.classList.add('active')
		}
	})
})

/* LOAD MORE */

const btn = document.querySelector('.works-more')
const hidden = document.querySelector('.works-tabs__item--hidden')
const loader = document.querySelector('.lds-ripple')
btn.addEventListener('click', () => {
	let timerId = setTimeout(function showLoader() {
		loader.classList.add('active')
		btn.style.display = 'none'
	}, 2000)

	setTimeout(() => {
		loader.classList.remove('active')
		hidden.classList.add('active')
	}, 5000)
})

/* SWIPER */

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	cssMode: true,
	effect: 'slide',

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
		type: 'custom',
		bulletClass: 'swiper-pagination-img',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

/* MASONRY */

let elem = document.querySelector('.gallery-content')
let msnry = new Masonry(elem, {
	itemSelector: '.gallery-content__img',
	columnWidth: 200,
})
