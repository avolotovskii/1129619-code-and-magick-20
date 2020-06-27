'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var COLOR_EYES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var COLOR_COAT = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var COLOR_FIREBALL = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupPlayer = document.querySelector('.setup-player');
var coatColor = setupPlayer.querySelector('.wizard-coat');
var coatInput = setupPlayer.querySelector('input[name="coat-color"]');
var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
var eyesInput = setupPlayer.querySelector('input[name="eyes-color"]');
var fireball = setupPlayer.querySelector('.setup-fireball-wrap');
var fireballInput = setupPlayer.querySelector('input[name="fireball-color"]');

var escClousePopupHandler = function (evt) {
  if (evt.key === ESC_KEY) {
    evt.preventDefault();
    setup.classList.add('hidden');
  }
};

var enterClousePopupHandler = function (evt) {
  if (evt.key === ENTER_KEY) {
    evt.preventDefault();
    setup.classList.add('hidden');
  }
};

var enterOpenPopupHandler = function (evt) {
  if (evt.key === ENTER_KEY) {
    evt.preventDefault();
    openPopup();
    setupClose.addEventListener('click', closePopup);
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', escClousePopupHandler);
  setupClose.addEventListener('keydown', enterClousePopupHandler);
  setupClose.addEventListener('click', closePopup);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', escClousePopupHandler);
  setupClose.removeEventListener('keydown', enterClousePopupHandler);
  setupClose.removeEventListener('click', closePopup);
};

setupOpen.addEventListener('click', openPopup);
setupOpen.addEventListener('keydown', enterOpenPopupHandler);


// меняем цвет мантии
var getRandomElement = function (items) {
  return Math.floor(Math.random() * (items.length));
};

var getColor = function (options) {
  return options[getRandomElement(options)];
};

var changeColor = function (arrColor, wizardElement, input) {
  var newColor = getColor(arrColor);
  wizardElement.style.fill = newColor;
  input.value = newColor;
};

coatColor.addEventListener('click', function () {
  changeColor(COLOR_COAT, coatColor, coatInput);
});

// меняем цвет глаз персонажа
wizardEyes.addEventListener('click', function () {
  changeColor(COLOR_EYES, wizardEyes, eyesInput);
});

// меняем цвет фаербола
fireball.addEventListener('click', function () {
  var newColor = getColor(COLOR_FIREBALL);
  fireball.style.backgroundColor = newColor;
  fireballInput.value = newColor;
});
