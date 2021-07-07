'use strict';
erySelector('.warning');
const email = document.q;
const warning = document.quuerySelector('.email');
const selectedForm = document.getElementById('form');

selectedForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (email.validity.typeMismatch || email.validity.valueMissing) {
    warning.classList.remove('hidden');
  } else {
    email.setCustomValidity('');
  }
});

email.addEventListener('input', function () {
  warning.classList.add('hidden');
});
