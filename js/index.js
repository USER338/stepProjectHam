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
