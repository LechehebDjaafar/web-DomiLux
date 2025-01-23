// Channge background header 
function scrollHeader() {
	const header = document.getElementById('header');
	// when the scroll is > 50 vh 
	if (this.scrollY >= 50) header.classList.add('scroll-header');
	 else header.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader);

// swiper popular 
 var swiperPopular = new Swiper(".popular-container", {
 	 spaceBetween: 32,
 	 grabCursor: true,
 	 centerdSlides: true,
 	 loop: true,
 	 navigation: {
 	 	nextEl: ".swiper-button-next",
 	 	prevEl: ".swiper-button-prev",
 	 },
 });

 // value accordiion 
 const accordionItems = document.querySelectorAll('.value-accordion-item');

 accordionItems.forEach((item) => {
 	const accordionHeader = item.querySelector('.value-accordion-header');

 	accordionHeader.addEventListener('click', () => {
 		const openItem = document.querySelector('.accordion-open')

 		toggleItem(item) 

 		if (openItem && openItem!== item) {
 			toggleItem(openItem)
 		}
 	});
 });

 const toggleItem = (item) => {

 	const accordionContent = item.querySelector('.value-accordion-content');

 	if (item.classList.contains('accordion-open')) {
 		accordionContent.removeAttribute('style')
 		item.classList.remove('accordion-open')
 	} else {
	 	accordionContent.style.height = accordionContent.scrollHeight + 'px' 
	 	item.classList.add('accordion-open')
 	}
 }

 // Scroll section active link 
  let sections = document.querySelectorAll('section[id]');

  function scrollActive () {
  	let scrollY = window.pageYOffset;

  	sections.forEach(current => {
  		let sectionHeight = current.offsetHeight,
  			sectionTop    = current.offsetTop -58,
  			sectionId     = current.getAttribute('id');

  		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  			document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
  		} else {
  			document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
  		};
  	});

  };
  window.addEventListener('scroll', scrollActive);

  // Show Scroll Up
    const scrollUp = () => {
 	const scrollUp = document.getElementById('scroll-up');
 	// when the scroll is > 350 vh add cllass 'show-scroll'
 	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
 						: scrollUp.classList.remove('show-scroll')
 }

 window.addEventListener('scroll', scrollUp);

// Dark / Light mode
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-sun' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button

function theme() {
  
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
}

themeButton.addEventListener('click', theme)

// scroll reveal aimation
const sr = ScrollReveal ({
   origin: 'top',
   distance : '60px',
   duration : 2500,
   delay: 400,
   //reset : true
})

sr.reveal(`.home-title, .popular-container, .subscribe-container, .footer-container`)
sr.reveal(`.home-desc, .footer-info`, {delay: 500})
sr.reveal(`.home-search`, {delay: 600})
sr.reveal(`.home-value`, {delay: 700})
sr.reveal(`.home-imgs`, {delay: 800, origin:'bottom'})
sr.reveal(`.logos-img`, {delay: 100})
sr.reveal(`.value-imgs, contact-content`, {origin: 'left'})
sr.reveal(`.value-content, .contact-imgs`, {origin: 'right'})