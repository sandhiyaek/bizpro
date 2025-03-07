window.addEventListener('load', function () {
	const html = document.querySelector('html');
	// Inititing splide slider
	if (document.querySelector('.packages--slider')) {
		new Splide('.packages--slider', {
			type: 'loop',
			perPage: 3.5,
			perMove: 1,
			pagination: false,
			gap: '20px',
			speed: 1000,
			rewind: true,
			mediaQuery: 'max',
			breakpoints: {
				1024: {
					perPage: 3,
				},
				820: {
					perPage: 2.5,
				},
				768: {
					perPage: 2,
				},
				576: {
					perPage: 1.5,
					gap: '10px',
				},
			},
		}).mount();
	}

	// Video Popup
	if (document.querySelector('.hero-video')) {
		const video = document.querySelector('.hero-video');
		const videoPopupTrigger = document.querySelector('.video-popup--trigger');
		const videoPopupCloser = video.querySelector('.hero-video--close');
		videoPopupTrigger.addEventListener('click', function () {
			video.classList.remove('none');
			html.classList.add('no-flow');
		});
		videoPopupCloser.addEventListener('click', function () {
			video.classList.add('none');
			const videoEl = video.querySelector('video');
			videoEl.pause();
			html.classList.remove('no-flow');
		});
	}

	// Mobile navigation
	if (document.querySelector('.primary-nav')) {
		const menuTrigger = document.querySelector('.menu-trigger');
		const menuClose = document.querySelector('.menu-close');
		const nav = document.querySelector('.primary-nav');
		menuTrigger.addEventListener('click', function () {
			nav.classList.add('swipe');
			html.classList.add('no-flow');
		});
		menuClose.addEventListener('click', function () {
			nav.classList.remove('swipe');
			html.classList.remove('no-flow');
		});
	}
});
