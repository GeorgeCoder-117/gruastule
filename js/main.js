(function () {

	window.onload = function () {

		/*=============== SCROLL HEADER ===============*/
		const header = document.querySelector('header');
		function scrollHeader() {
			if (window.matchMedia("(min-width: 1023px)").matches) {
				//Cuando el scroll es mayor al viewport de 40 , añade los estilos nuevos a la etiqueta del header
				if (this.scrollY >= 40) {
					header.style.position = "fixed";
					header.style.top = "20px";
					header.style.left = "50%";
					header.style.transform = "translate(-50%)";
					header.style.width = "75%";
					header.style.padding = "0px 15px";
					header.style.borderRadius = "50px";
					header.style.background = "#6c6c6c";
					header.style.boxShadow = "0rem 0.25rem 0.4rem rgba(255, 255, 255, 0.15)";
				} else {
					header.style.position = "relative";
					header.style.top = "0";
					header.style.width = "100%";
					header.style.borderRadius = "0rem 0rem 2rem 2rem";
					header.style.zIndex = "none";
					header.style.background = "#6c6c6c";
					header.style.boxShadow = "none";
					header.style.border = "unset";
				}
			}
		}
		window.addEventListener('scroll', scrollHeader);

		//MAIN SLIDER FUNCTIONALITY
		let main_slider = new Swiper(".mainSlider", {
			spaceBetween: 30,
			effect: "fade",
			// loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});

		// SERVICES function

		/*=============== COTIZACION SERVICE EFFECT ===============*/
		const sliderCotizarContainer = document.querySelector('.slider_cotizar_cont');
		const slideRight = document.querySelector('.right-slide');
		const slideLeft = document.querySelector('.left-slide');
		let slideLeftVh = 60;
		let slideLeftUnity = "vh";
		const upButton = document.querySelector('.up-button');
		const downButton = document.querySelector('.down-button');
		const slidesLength = slideRight.querySelectorAll('div').length;

		let activeSlideIndex = 0;

		if (window.matchMedia("(max-width: 821px)").matches) {
			slideLeftUnity = "px";
			sliderCotizarContainer.style.height = "180px";
			slideLeftVh = 180;
		}

		slideLeft.style.top = `-${(slidesLength - 1) * slideLeftVh + slideLeftUnity}`;

		upButton.addEventListener('click', () => changeSlide('up'));
		downButton.addEventListener('click', () => changeSlide('down'));

		const changeSlide = (direction) => {
			const sliderHeight = sliderCotizarContainer.clientHeight;
			if (direction === 'up') {
				activeSlideIndex++;
				if (activeSlideIndex > slidesLength - 1) {
					activeSlideIndex = 0;
				}
			} else if (direction === 'down') {
				activeSlideIndex--;
				if (activeSlideIndex < 0) {
					activeSlideIndex = slidesLength - 1;
				}
			}
			slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
			slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
		}

		// Funcionalidad nueva galeria responsiva
		let next = document.querySelector(".next");
		let prev = document.querySelector(".prev");
		let sliderGallery = document.querySelector(".slider_gallery");

		next.addEventListener('click', function () {
			let slides = document.querySelectorAll('.slides');
			sliderGallery.appendChild(slides[0]);
		});

		prev.addEventListener('click', function () {
			let slides = document.querySelectorAll('.slides');
			sliderGallery.prepend(slides[slides.length - 1]);
		});

		//CERTIFICATES SLIDER 
		var swiper = new Swiper(".agradecimientos_cont", {
			// spaceBetween: 40,
			// grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			loop: true,
			// noSwiping: true,
			// noSwipingClass: 'swiper-slide',
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				350: {
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 50,
				},
				1023: {
					slidesPerView: 3,
					spaceBetween: 40,
					centeredSlides: true,
					loop: true,
					grabCursor: true,
				},
			},
		});
	}

	// IMPROVEMENT WEB

	/** F12 TOOLS .. DEVELOPER ACCESS PERSONALIZATION **/
	// console.error('%cStop!', 'color: red;font-size:2.5rem;font-weight:bold;');
	// console.warn('%cThis console was destinated for developers. If you copy or paste code here to enable some function that unset the integrity of the website you will be reported and we will take actions against you executing a XSS attack.. you were notified.', 'font-size:1.25rem;line-height:1.1;');

	// /** DISABLE RIGHT CLICK **/
	// document.oncontextmenu = function () {
	// 	alert('WARNING \nThe security on the website was improved.');

	// 	return false;
	// };

	// /** DISABLE SCREEN SHOT **/
	// document.addEventListener('keyup', (e) => {

	// 	if (e.key == 'PrintScreen') {
	// 		navigator.clipboard.writeText('');

	// 		alert('ERROR SCREENSHOT DISABLED! \nDont try it again or you will be reported');
	// 	}

	// });

	// /** DISABLE SCREEN IMPRESSION OR PDF EXPORT WITH (CTRL+P) & DISABLE SCREENCUTS (CTRL+SHIFT+S)**/
	// document.addEventListener('keydown', (e) => {

	// 	if (e.ctrlKey && e.key == 'p' || e.ctrlKey && e.key == 'P') {
	// 		alert('ERROR This section doesnt allow impression or PDF export \nDont try it again or your access will be denied and reported');

	// 		e.preventDefault();
	// 	}

	// 	else if (e.metaKey && e.shiftKey) {
	// 		alert('SCREENCUTS DETECTED! \nDont try it again or your access will be denied and reported');

	// 	}

	// 	else if (e.ctrlKey && e.key == 's' || e.ctrlKey && e.key == 'S') {
	// 		alert('ERROR This Website cant be downloaded \nDont try it again or your access will be denied and reported');

	// 		e.preventDefault();
	// 	}

	// 	else if (e.ctrlKey && e.key == 'c' || e.ctrlKey && e.key == 'C') {
	// 		alert('ERROR This Website doesnt allow copy \nDont try it again or your access will be denied and reported');

	// 		e.preventDefault();
	// 	}

	// 	else if (e.ctrlKey && e.key == 'x' || e.ctrlKey && e.key == 'X') {
	// 		alert('ERROR This Website doesnt allow cut \nDont try it again or your access will be denied and reported');

	// 		e.preventDefault();
	// 	}

	// 	else if (e.ctrlKey && e.key == 'v' || e.ctrlKey && e.key == 'V') {
	// 		alert('ERROR This Website doesnt allow paste \nDont try it again or your access will be denied and reported');

	// 		e.preventDefault();
	// 	}

	// });

})();