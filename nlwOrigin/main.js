window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
	showNavOnScroll()
	showBackToTopButtonOnScroll()
}



function showNavOnScroll() {
	if (scrollY > 0) {
		navigation.classList.add('onscroll')
	} else {
		navigation.classList.remove('onscroll')
	}
}
function showBackToTopButtonOnScroll() {
	if (scrollY > 200) {
		backToTopButton.classList.add('show')
	} else {
		backToTopButton.classList.remove('show')
	}
}

function openMenu() {
	document.body.classList.add('menu-expanded')
}
function closeMenu() {
	document.body.classList.remove('menu-expanded')
}





ScrollReveal({
	origin: 'top',
	distance: '0px',
	duration: 700,  
}).reveal(`
	#home,
	#home img,
	#home .numbers,
	#services,
	#services header,
	#services .card`)
