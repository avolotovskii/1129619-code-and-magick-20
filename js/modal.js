'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var Color = {
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var DEFAULT_SETUP = {
    LEFT: '50%',
    TOP: '80px'
  };

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
  var setupSubmitButton = setup.querySelector('.setup-submit');
  var setupForm = setup.querySelector('.setup-wizard-form');

  var escClousePopupHandler = function (evt) {
    if (evt.key === ESC_KEY) {
      evt.preventDefault();
      setup.classList.add('hidden');
    }
  };

  var resetSetupCoords = function () {
    setup.style.left = DEFAULT_SETUP.LEFT;
    setup.style.top = DEFAULT_SETUP.TOP;
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
    resetSetupCoords();

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
    changeColor(Color.COAT, coatColor, coatInput);
  });

  wizardEyes.addEventListener('click', function () {
    changeColor(Color.EYES, wizardEyes, eyesInput);
  });

  fireball.addEventListener('click', function () {
    var newColor = getColor(Color.FIREBALL);
    fireball.style.backgroundColor = newColor;
    fireballInput.value = newColor;
  });

  var successHandler = function () {
    setup.classList.add('hidden');
    setupSubmitButton.textContent = 'Сохранить';
    setupSubmitButton.disabled = false;
  };

  var errorHandler = window.error.errorHandler;

  setup.addEventListener('submit', function (evtBut) {
    window.backend.upload(new FormData(setupForm), successHandler, errorHandler);
    evtBut.preventDefault();
    setupSubmitButton.textContent = 'Данные отправляются...';
    setupSubmitButton.disabled = true;
  });

  window.modal = {
    setup: setup
  };
})();
