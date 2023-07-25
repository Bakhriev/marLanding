const burgerMenu = () => {
	const burger = document.querySelector('.burger')
	const navigation = document.querySelector('.header__navigation')
	const overlay = document.querySelector('.overlay')
	const elements = [burger, navigation, overlay]

	const toggleActiveClass = () =>
		elements.forEach(element => element.classList.toggle('active'))

	burger.addEventListener('click', toggleActiveClass)

	overlay.addEventListener('click', toggleActiveClass)

	window.addEventListener('resize', () => {
		const {innerWidth} = window
		if (innerWidth > 991.98) {
			elements.forEach(element => element.classList.remove('active'))
		}
	})
}

burgerMenu()

const dropdownInit = () => {
	const allDropdowns = document.querySelectorAll('[data-dropdown]')

	if (window.innerWidth > 992.98) {
		document.addEventListener('click', e => {
			let currentDropdown
			if (e.target.closest('[data-dropdown]')) {
				currentDropdown = e.target.closest('[data-dropdown]')
				currentDropdown.classList.toggle('active')
			}

			document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
				if (dropdown === currentDropdown) return
				dropdown.classList.remove('active')
			})
		})
		allDropdowns.forEach(d => {
			d.addEventListener('mouseover', () => {
				d.classList.add('active')
			})
			d.addEventListener('mouseleave', () => {
				d.classList.remove('active')
			})
		})
	} else {
		allDropdowns.forEach(drp => {
			drp.addEventListener('click', () => {
				const subMenu = drp.querySelector('.sub-menu')
				if (!subMenu.style.maxHeight) {
					const allSubMenus = document.querySelectorAll('.sub-menu')
					allSubMenus.forEach(sub => {
						sub.style.maxHeight = ''
					})
					subMenu.style.maxHeight = subMenu.scrollHeight + 'px'
				} else {
					subMenu.style.maxHeight = ''
				}
			})
		})
	}
}
dropdownInit()

const modal1 = document.querySelector('.modal-1')
const modal2 = document.querySelector('.modal-2')
const modal3 = document.querySelector('.modal-3')
const modal4 = document.querySelector('.modal-4')

const cardStandard = document.querySelector('[data-card-standard]')
const cardStandardPlus = document.querySelector('[data-card-standard-plus]')
const cardVip = document.querySelector('[data-card-vip]')
const cardPersonal = document.querySelector('[data-card-personal]')

const overlay = document.querySelector('.overlay')
const closeBtns = document.querySelectorAll('.modal-close')
const modalInners = document.querySelector('.modal__inner')

closeBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		modal1.classList.remove('active')
		modal2.classList.remove('active')
		modal3.classList.remove('active')
		modal4.classList.remove('active')
		overlay.classList.remove('active')
		document.body.classList.remove('lock')
	})
})

cardStandard.addEventListener('click', () => {
	modal1.classList.add('active')
	overlay.classList.add('active')
	document.body.classList.add('lock')
})

cardStandardPlus.addEventListener('click', () => {
	modal2.classList.add('active')
	overlay.classList.add('active')
	document.body.classList.add('lock')
})

cardVip.addEventListener('click', () => {
	modal3.classList.add('active')
	overlay.classList.add('active')
	document.body.classList.add('lock')
})

cardPersonal.addEventListener('click', () => {
	modal4.classList.add('active')
	overlay.classList.add('active')
	document.body.classList.add('lock')
})

const videos = document.querySelectorAll('[data-modal-video]')
const videoModal = document.querySelector('.video-modal')
const reviews = document.querySelectorAll('[data-review]')

reviews.forEach(review => {
	review.addEventListener('click', () => {
		const index = review.dataset.index
		videos.forEach(video => {
			video.src = `assets/video/${index}.mp4`
			video.load()
		})
		videoModal.classList.add('active')
		overlay.classList.add('active')
	})
})

overlay.addEventListener('click', () => {
	videoModal.classList.remove('active')
	videos.forEach(video => {
		video.pause()
	})
})
// assets/video/rew16.mp4
videos.forEach(video => {
	video.addEventListener('click', () => {
		if (video.paused) {
			video.play()
		} else video.pause()
	})
})
