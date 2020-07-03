'use strict';

(function () {
  var Wizard = window.mock.Wizard;
  var COUNT = 4;
  var userDialog = document.querySelector('.setup');


  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandomElement = function (items) {
    return Math.floor(Math.random() * (items.length));
  };

  var wizardAdd = function (quantity) {
    var wizards = [];
    for (var i = 0; i < quantity; i++) {
      wizards.push({
        name: Wizard.NAMES[getRandomElement(Wizard.NAMES)] + ' ' + Wizard.SURNAMES[getRandomElement(Wizard.SURNAMES)],
        coatColor: Wizard.COAT_COLORS[getRandomElement(Wizard.COAT_COLORS)],
        eyesColor: Wizard.EYES_COLORS[getRandomElement(Wizard.EYES_COLORS)]
      });
    }
    return wizards;
  };

  var wizards = wizardAdd(COUNT);

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  window.setup = {
    userDialog: userDialog
  };

})();

