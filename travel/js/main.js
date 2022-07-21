// Burger menu

const burger = document.querySelector('.header__burger');
const bodyShadow = document.querySelector('.body__shadow');
const nav = document.querySelector('.header__nav');
const navItems = document.querySelectorAll('.header__item');
const closeButton = document.querySelector('.header__nav-close');


burger.onclick = function() {
  nav.classList.toggle('header__nav-active');
  bodyShadow.classList.toggle('body__shadow-active');
  document.body.style.overflow = 'hidden';
}

for (let item in navItems) {
  navItems[item].onclick = function() {
    nav.classList.toggle('header__nav-active');
    bodyShadow.classList.toggle('body__shadow-active');
    document.body.style.overflow = '';
  }
}

closeButton.onclick = function() {
  nav.classList.toggle('header__nav-active');
  bodyShadow.classList.toggle('body__shadow-active');
  document.body.style.overflow = '';
}

document.addEventListener( 'click', (element) => {
  let target = element.target;
 
	if ( !target.closest('.header__wrapper') && !target.closest('.header__burger') ) {
		nav.classList.remove('header__nav-active'); 
    bodyShadow.classList.remove('body__shadow-active');
    document.body.style.overflow = '';
	}
})

// Pop up

const headerButton = document.querySelector('.header__login-form')
const accountButton = document.querySelector('.header__item-account')
const popupActive = 'login__popup-active';
const popup = document.querySelector('.login__pop-up');
const popupClick = document.querySelector('.login__register-url');
const popupTitle = document.querySelector('.login__caption');
const popupButton = document.querySelector('.login__sign-button-text');
const popupText = document.querySelector('.login__register-question');
const loginButton = document.querySelector('.login__sign-button');
const loginWindow = {
  title: "Login to your account",
  button: "Sign In",
  account: "Don't have an account?",
  link: "Register"
}
const createWindow = {
  title: "Create account",
  button: "Sign Up",
  account: "Already have an account?",
  link: "Log in"
}

function ChangePopUpWindow(event) {
  let setOfWords = (event.target.innerHTML != "Register")?loginWindow:createWindow;
  popup.classList.toggle(popupActive);
  popupTitle.innerHTML = setOfWords.title;
  popupButton.innerHTML = setOfWords.button;
  popupText.innerHTML = setOfWords.account;
  popupClick.innerHTML = setOfWords.link;
}

function makePopUpVisible(element){
  element.stopPropagation();
  popup.classList.toggle('login__pop-up-visible');
  shadow.classList.add('body__shadow-active');
  document.body.style.overflow = 'hidden';
}

function makePopUpInvisible(event) {
  let target = event.target;
  let popupIsUp = popup == target || popup.contains(target);
  if (popup.classList.contains('login__pop-up-visible') && !popupIsUp) {
      popup.classList.remove('login__pop-up-visible');
      shadow.classList.remove('body__shadow-active');
    }
}

function alertLoginPassword() {
  let loginValue = document.getElementById('login').value;
  let passwordValue = document.getElementById('password').value;
  alert(`Login: ${loginValue}\nPassword: ${passwordValue}`);
}

popupClick.addEventListener('click', ChangePopUpWindow);
headerButton.addEventListener('click', makePopUpVisible);
accountButton.addEventListener('click', makePopUpVisible);
loginButton.addEventListener('click', alertLoginPassword);
document.addEventListener('click', makePopUpInvisible);

// Slider

const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const slider = document.querySelector('.slider')
const card0 = document.querySelector('#card-0')
const card1 = document.querySelector('#card-1')
const card2 = document.querySelector('#card-2')
const card3 = document.querySelector('#card-3')
const card4 = document.querySelector('#card-4')

const sliderItem = document.querySelectorAll('.slider__item')

const moveLeft = () => {
	slider.classList.add('transition-left')
	arrowLeft.removeEventListener('click', moveLeft)
	arrowRight.removeEventListener('click', moveRight)
	itemLeft()
}
const moveRight = () => {
	slider.classList.add('transition-right')
	arrowRight.removeEventListener('click', moveRight)
	arrowLeft.removeEventListener('click', moveLeft)
	itemRight()
}

function itemLeft() {
	for (let i = 0; i < sliderItem.length; i++) {
		if (sliderItem[i] == document.querySelector('.slider__item_active')) {
			if (i == 0) {
				sliderItem[0].classList.remove('slider__item_active')
				sliderItem[2].classList.add('slider__item_active')
				return
			} else if (i == 1) {
				sliderItem[1].classList.remove('slider__item_active')
				sliderItem[0].classList.add('slider__item_active')
				return
			} else {
				sliderItem[2].classList.remove('slider__item_active')
				sliderItem[1].classList.add('slider__item_active')
				return
			}
		}
	}
}

function itemRight() {
	for (let i = 0; i < sliderItem.length; i++) {
		if (sliderItem[i] == document.querySelector('.slider__item_active')) {
			if (i == 0) {
				sliderItem[0].classList.remove('slider__item_active')
				sliderItem[1].classList.add('slider__item_active')
				return
			} else if (i == 1) {
				sliderItem[1].classList.remove('slider__item_active')
				sliderItem[2].classList.add('slider__item_active')
				return
			} else {
				sliderItem[2].classList.remove('slider__item_active')
				sliderItem[0].classList.add('slider__item_active')
				return
			}
		}
	}
}

arrowLeft.addEventListener('click', moveLeft)
arrowRight.addEventListener('click', moveRight)
card1.addEventListener('click', moveLeft)
card3.addEventListener('click', moveRight)

slider.addEventListener('animationend', (animation) => {
	let cardBox = card2.innerHTML
	if (animation.animationName === 'move-left') {
		slider.classList.remove('transition-left')
		card2.innerHTML = card1.innerHTML
		card1.innerHTML = card0.innerHTML
		card3.innerHTML = cardBox
		card0.innerHTML = cardBox
		card4.innerHTML = card1.innerHTML
	} else {
		slider.classList.remove('transition-right')
		card2.innerHTML = card3.innerHTML
		card3.innerHTML = card4.innerHTML
		card1.innerHTML = cardBox
		card4.innerHTML = cardBox
		card0.innerHTML = card3.innerHTML
	}
	arrowLeft.addEventListener('click', moveLeft)
	arrowRight.addEventListener('click', moveRight)
})