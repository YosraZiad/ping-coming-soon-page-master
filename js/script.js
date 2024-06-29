// JavaScript code to handle form submission and display error messages
const form = document.getElementById('myForm');
const errorMessage = document.getElementById('errorMessage')
const email =document.getElementById('email');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Check if the email input is empty
  if (email.value.trim() === '') {
    errorMessage.innerHTML = 'Whoops! It looks like you forgot to add your email';
  }

  // Check if the email address is not correctly formatted

  if (!/\S+@\S+\.\S+/.test(email.value)) {
    errorMessage.style.color = 'hsl(354, 100%, 66%)';
    errorMessage.style.textAlign = 'center';
    errorMessage.style.paddingRight="150px"
    email.style.border = '1px solid  hsl(354, 100%, 66%)';

    errorMessage.innerHTML = 'Please provide a valid email address';
  }
});