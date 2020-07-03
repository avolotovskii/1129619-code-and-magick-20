'use strict';

(function () {
  var NameSymbol = {
    MIN: 2,
    MAX: 25
  };

  var setupModule = document.querySelector('.setup');
  var userNameInput = setupModule.querySelector('.setup-user-name');

  var inputInvalidHandler = function (evt) {
    var target = evt.target;
    if (target.value.length < NameSymbol.MIN) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из ' + NameSymbol.MIN + '-х символов');
    } else if (target.value.length > NameSymbol.MAX) {
      userNameInput.setCustomValidity('Имя не должно быть длиннее ' + NameSymbol.MAX + '-ти символов');
    } else {
      userNameInput.setCustomValidity('');
    }
  };

  userNameInput.addEventListener('invalid', inputInvalidHandler);
})();
