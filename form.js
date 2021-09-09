/*const emailAddress = document.querySelector('#myEmail');
const templateForm = document.querySelector('#form_id');
const validatorMessage = document.getElementById('validator-message');*/
templateForm.addEventListener('submit', (e) => {
  if (emailAddress.value !== emailAddress.value.toLowerCase()) {
    e.preventDefault();
    validatorMessage.textContent = 'Kindly input a valid email address!';
  } else {
    validatorMessage.textContent = '';
  }
});
