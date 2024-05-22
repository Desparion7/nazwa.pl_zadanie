document.addEventListener('DOMContentLoaded', function () {
	// Mobile Menu
	const burgerIcon = document.querySelector('.nav__burger');
	const popupMenu = document.getElementById('popupMenu');
	const closePopup = document.getElementById('closePopup');

	const togglePopupMenu = (show) => {
		popupMenu.style.display = show ? 'flex' : 'none';
	};

	burgerIcon.addEventListener('click', () => togglePopupMenu(true));
	closePopup.addEventListener('click', (event) => {
		event.preventDefault();
		togglePopupMenu(false);
	});

	// Question Popup
	const questionButton = document.getElementById('questionButton');
	const questionPopup = document.getElementById('questionPopup');
	const closeQuestion = document.getElementById('closeQuestion');
	const BtnAnswerCompany = document.getElementById('answerCompany');
	const BtnAnswerPrivate = document.getElementById('answerPrivate');
	const confirmationMessage = document.getElementById('confirmationMessage');
	const questionPopupOverlay = document.getElementById('questionPopupOverlay');

	const toggleQuestionPopup = (show) => {
		questionPopup.style.display = show ? 'flex' : 'none';
	};

	const showConfirmationMessage = () => {
		confirmationMessage.style.display = 'block';
		setTimeout(() => {
			confirmationMessage.style.display = 'none';
		}, 3500);
	};

	questionButton.addEventListener('click', () => toggleQuestionPopup(true));
	closeQuestion.addEventListener('click', (event) => {
		event.preventDefault();
		toggleQuestionPopup(false);
	});
	questionPopupOverlay.addEventListener('click', (event) => {
		event.preventDefault();
		toggleQuestionPopup(false);
	});

	[BtnAnswerCompany, BtnAnswerPrivate].forEach((btn) => {
		btn.addEventListener('click', (event) => {
			event.preventDefault();
			toggleQuestionPopup(false);
			showConfirmationMessage();
		});
	});

	// Brutto-Netto Prices
	const toggleSwitch = document.getElementById('toggleSwitch');
	const priceValue = document.getElementById('priceValue');
	const pricePl = document.getElementById('pricePl');
	const priceEu = document.getElementById('priceEu');
	const priceCom = document.getElementById('priceCom');

	const prices = {
		netto: {
			value: '100 PLN',
			pl: '5',
			eu: '5',
			com: '40',
		},
		brutto: {
			value: '123 PLN',
			pl: '6,15',
			eu: '6,15',
			com: '49,2',
		},
	};

	toggleSwitch.addEventListener('change', () => {
		const priceType = toggleSwitch.checked ? 'brutto' : 'netto';
		priceValue.textContent = prices[priceType].value;
		pricePl.textContent = prices[priceType].pl;
		priceEu.textContent = prices[priceType].eu;
		priceCom.textContent = prices[priceType].com;
	});

	// Footer Year
	document.getElementById('currentYear').textContent = new Date().getFullYear();
});

// Section 3 Slider
window.onload = function () {
	const testim = document.getElementById('testim');
	const testimDots = Array.from(document.getElementById('testim-dots').children);
	const testimContent = Array.from(document.getElementById('testim-content').children);
	const testimLeftArrow = document.getElementById('left-arrow');
	const testimRightArrow = document.getElementById('right-arrow');
	const testimSpeed = 4500;
	let currentSlide = 0;
	let currentActive = 0;
	let testimTimer;
	let touchStartX = 0;
	let touchEndX = 0;

	const playSlide = (slide) => {
		testimContent.forEach((content, index) => {
			content.classList.remove('active', 'inactive');
			testimDots[index].classList.remove('active');
		});

		if (slide < 0) slide = currentSlide = testimContent.length - 1;
		if (slide >= testimContent.length) slide = currentSlide = 0;

		if (currentActive !== currentSlide) testimContent[currentActive].classList.add('inactive');
		testimContent[slide].classList.add('active');
		testimDots[slide].classList.add('active');

		currentActive = currentSlide;

		clearTimeout(testimTimer);
		testimTimer = setTimeout(() => playSlide(++currentSlide), testimSpeed);
	};

	testimLeftArrow.addEventListener('click', () => playSlide(--currentSlide));
	testimRightArrow.addEventListener('click', () => playSlide(++currentSlide));
	testimDots.forEach((dot, index) => dot.addEventListener('click', () => playSlide(currentSlide = index)));

	testim.addEventListener('touchstart', (event) => touchStartX = event.changedTouches[0].screenX);
	testim.addEventListener('touchmove', (event) => touchEndX = event.changedTouches[0].screenX);
	testim.addEventListener('touchend', () => {
		if (touchStartX - touchEndX > 50) playSlide(++currentSlide); // Swipe left
		if (touchEndX - touchStartX > 50) playSlide(--currentSlide); // Swipe right
	});

	playSlide(currentSlide);
};
