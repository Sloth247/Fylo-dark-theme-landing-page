'use strict';
const email = document.querySelector('.email');
const errorMessage = document.querySelector('.warning');
const selectedForm = document.getElementById('form');

selectedForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (email.validity.typeMismatch || email.validity.valueMissing) {
    errorMessage.classList.remove('hidden');
  } else {
    email.setCustomValidity('');
  }
});

email.addEventListener('input', function () {
  errorMessage.classList.add('hidden');
});
