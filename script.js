document.addEventListener('DOMContentLoaded', function () {
	// Menu-mobile
	const burgerIcon = document.querySelector('.nav__burger');
	const popupMenu = document.getElementById('popupMenu');
	const closePopup = document.getElementById('closePopup');

	burgerIcon.addEventListener('click', function () {
		popupMenu.style.display = 'flex';
	});

	closePopup.addEventListener('click', function (event) {
		event.preventDefault();
		popupMenu.style.display = 'none';
	});
	// Question popup
	const questionButton = document.getElementById('questionButton');
	const questionPopup = document.getElementById('questionPopup');
	const closeQuestion = document.getElementById('closeQuestion');
	const BtnAnswerCompany = document.getElementById('answerCompany');
	const BtnAnswerPrivate = document.getElementById('answerPrivate');
	const confirmationMessage = document.getElementById('confirmationMessage');
	const questionPopupOverlay = document.getElementById('questionPopupOverlay');

	questionButton.addEventListener('click', function () {
		questionPopup.style.display = 'flex';
	});

	closeQuestion.addEventListener('click', function (event) {
		event.preventDefault();
		questionPopup.style.display = 'none';
	});
	questionPopupOverlay.addEventListener('click', function (event) {
		event.preventDefault();
		questionPopup.style.display = 'none';
	});

	BtnAnswerCompany.addEventListener('click', function (event) {
		event.preventDefault();
		questionPopup.style.display = 'none';
		confirmationMessage.style.display = 'block';
		setTimeout(() => {
			confirmationMessage.style.display = 'none';
		}, 3500);
	});
	BtnAnswerPrivate.addEventListener('click', function (event) {
		event.preventDefault();
		questionPopup.style.display = 'none';
		confirmationMessage.style.display = 'block';
		setTimeout(() => {
			confirmationMessage.style.display = 'none';
		}, 3500);
	});

	// brutto-netto prices
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

	toggleSwitch.addEventListener('change', function () {
		const priceType = toggleSwitch.checked ? 'brutto' : 'netto';
		priceValue.textContent = prices[priceType].value;
		pricePl.textContent = prices[priceType].pl;
		priceEu.textContent = prices[priceType].eu;
		priceCom.textContent = prices[priceType].com;
	});
});
// Section 3 Slider

var testim = document.getElementById('testim'),
	testimDots = Array.prototype.slice.call(
		document.getElementById('testim-dots').children
	),
	testimContent = Array.prototype.slice.call(
		document.getElementById('testim-content').children
	),
	testimleftArrow = document.getElementById('left-arrow'),
	testimRightArrow = document.getElementById('right-arrow'),
	testimSpeed = 4500,
	currentSlide = 0,
	currentActive = 0,
	testimTimer,
	touchStartX = 0,
	touchEndX = 0;

window.onload = function () {
	// Testim Script
	function playSlide(slide) {
		for (var k = 0; k < testimDots.length; k++) {
			testimContent[k].classList.remove('active');
			testimContent[k].classList.remove('inactive');
			testimDots[k].classList.remove('active');
		}
		if (slide < 0) {
			slide = currentSlide = testimContent.length - 1;
		}
		if (slide > testimContent.length - 1) {
			slide = currentSlide = 0;
		}
		if (currentActive != currentSlide) {
			testimContent[currentActive].classList.add('inactive');
		}
		testimContent[slide].classList.add('active');
		testimDots[slide].classList.add('active');

		currentActive = currentSlide;

		clearTimeout(testimTimer);
		testimTimer = setTimeout(function () {
			playSlide((currentSlide += 1));
		}, testimSpeed);
	}
	// arrow active change slide
	testimleftArrow.addEventListener('click', function () {
		playSlide((currentSlide -= 1));
	});
	testimRightArrow.addEventListener('click', function () {
		playSlide((currentSlide += 1));
	});

	for (var l = 0; l < testimDots.length; l++) {
		testimDots[l].addEventListener('click', function () {
			playSlide((currentSlide = testimDots.indexOf(this)));
		});
	}
	// Touch events to change slide on swipe
	testim.addEventListener('touchstart', function (event) {
		touchStartX = event.changedTouches[0].screenX;
	});

	testim.addEventListener('touchmove', function (event) {
		touchEndX = event.changedTouches[0].screenX;
	});

	testim.addEventListener('touchend', function () {
		if (touchStartX - touchEndX > 50) {
			playSlide((currentSlide += 1)); // Swipe left
		} else if (touchEndX - touchStartX > 50) {
			playSlide((currentSlide -= 1)); // Swipe right
		}
	});

	playSlide(currentSlide);
};

// Footer Year
function displayCurrentYear() {
	var currentYear = new Date().getFullYear();
	document.getElementById('currentYear').textContent = currentYear;
}
document.addEventListener('DOMContentLoaded', displayCurrentYear);
