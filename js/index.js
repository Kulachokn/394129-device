'use strict';

var writeUsBtn = document.querySelector('.write-us.button-decoration');
var writeUsPopup = document.querySelector('.modal.modal-write-us');
var closeWriteUs = document.querySelector('.close-write-us');
// var closeMap = document.querySelector('.close-map');
// var mapPopup = document.querySelector('.modal.modal-map');
// var map = document.querySelector('.map');

// map.onclick = function(event) {
//   mapPopup.classList.remove('hide');
//   mapPopup.classList.add('animate-bounce');
// };

writeUsBtn.onclick = function (event) {
  event.preventDefault();
  writeUsPopup.classList.remove('hide');
  writeUsPopup.classList.add('animate-bounce');
};

closeWriteUs.onclick = function (event) {
  writeUsPopup.classList.add('hide');
  writeUsPopup.classList.remove('animate-bounce');
};
//
// closeMap.onclick = function (event) {
//   mapPopup.classList.add('hide');
//   mapPopup.classList.remove('animate-bounce');
// };

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!writeUsBtn.classList.contains('hide')) {
      writeUsPopup.classList.add('hide');
    }
    // if (!mapPopup.classList.contains('hide')) {
    //   mapPopup.classList.add('hide');
    // }
  }
});
