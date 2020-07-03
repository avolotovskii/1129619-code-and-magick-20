'use strict';

var userDialog = window.setup.userDialog;
var dialogHandler = userDialog.querySelector('.upload');


dialogHandler.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;

  var avatarMousedownHamndler = function (moveEvt) {
    moveEvt.preventDefault();

    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
    userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';

    if (dragged) {
      var dialogClickPreventDefaultHandler = function (clickEvt) {
        clickEvt.preventDefault();
        dialogHandler.removeEventListener('click', dialogClickPreventDefaultHandler);
      };
      dialogHandler.addEventListener('click', dialogClickPreventDefaultHandler);
    }
  };

  var avatarMouseupHamndler = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', avatarMousedownHamndler);
    document.removeEventListener('moseup', avatarMouseupHamndler);
  };

  document.addEventListener('mousemove', avatarMousedownHamndler);
  document.addEventListener('mouseup', avatarMouseupHamndler);
});
