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
const headerButton = document.querySelector('.header__login-form')
const accountButton = document.querySelector('.header__item-account')
const popupActive = 'login__popup-active';
const popup = document.querySelector('.login__pop-up');
const popupClick = document.querySelector('.login__register-url');
const popupTitle = document.querySelector('.login__caption');
const popupButton = document.querySelector('.login__sign-button-text');
const popupText = document.querySelector('.login__register-question');
const loginButton = document.querySelector('.login__sign-button');

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