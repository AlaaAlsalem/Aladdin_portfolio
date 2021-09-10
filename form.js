const emailAddress = document.querySelector('#myEmail');
const templateForm = document.querySelector('#form_id');
const messageValidator = document.getElementById('message-validator');
templateForm.addEventListener('submit', (e) => {
  if (emailAddress.value !== emailAddress.value.toLowerCase()) {
    e.preventDefault();
    messageValidator.textContent = 'Kindly input a valid email address on lower case format!';
  } else {
    messageValidator.textContent = '';
  }
});
