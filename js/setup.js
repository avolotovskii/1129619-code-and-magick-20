'use strict';

var Wizard = {
  NAME: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Викто', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAME: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green'],
};
var COUNT = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomElement = function (items) {
  return Math.floor(Math.random() * (items.length));
};

var wizardAdd = function (COUNT) {
  var wizards = [];
  for (var i = 0; i < COUNT; i++) {
    wizards.push ({
      name: Wizard.NAME[getRandomElement (Wizard.NAME)] + ' ' + Wizard.SURNAME[getRandomElement (Wizard.SURNAME)],
      coatColor: Wizard.COAT_COLOR[getRandomElement (Wizard.COAT_COLOR)],
      eyesColor: Wizard.EYES_COLOR[getRandomElement (Wizard.EYES_COLOR)]
    })
  }
  return wizards;
};

var wizards = wizardAdd(COUNT);

var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
