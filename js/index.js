'use strict';

var writeUsBtn = document.querySelector('.write-us.button-decoration');
var writeUsPopup = document.querySelector('.modal.modal-write-us');
var closeWriteUs = document.querySelector('.close-write-us');
var closeMap = document.querySelector('.close-map');
var mapPopup = document.querySelector('.modal.modal-map');
var map = document.querySelector('.map-overlay');
var writeUsForm = document.querySelector('.write-us-form');
var writeUsFullname = document.getElementById('fullname');
var writeUsEmail = document.getElementById('email');
var writeUsMessage = document.getElementById('message');
var writeUsFields = [writeUsFullname, writeUsEmail, writeUsMessage];

function cleanUpInvalid() {
  writeUsFields.forEach(function (field) {
    field.classList.remove('invalid');
  })
}

writeUsForm.onsubmit = function(event) {
  writeUsFields.forEach(function (field) {
    field.classList.remove('invalid');
  });

  if (writeUsForm.checkValidity()) {
    return;
  }
  writeUsPopup.classList.remove('modal-error');
  event.preventDefault();
  writeUsPopup.classList.add('modal-error');

  writeUsFields.forEach(function(field) {
    if (field.checkValidity()) {
      return;
    }

    field.classList.add('invalid');
  });
};

map.onclick = function(event) {
  mapPopup.classList.add('show');
};

writeUsBtn.onclick = function (event) {
  event.preventDefault();
  writeUsPopup.classList.add('show');
};

closeWriteUs.onclick = function (event) {
  writeUsPopup.classList.remove('show');
  writeUsPopup.classList.remove('modal-error');
  cleanUpInvalid();
};

closeMap.onclick = function (event) {
  mapPopup.classList.remove('show');
};

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUsBtn.classList.contains('show')) {
      writeUsPopup.classList.remove('show');
      writeUsPopup.classList.remove('modal-error');
      cleanUpInvalid();
    }
    if (mapPopup.classList.contains('show')) {
      mapPopup.classList.remove('show');
    }
  }
});





