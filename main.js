const submit = document.querySelector('#submit');
const email = document.querySelector('#email');
let message = document.querySelector('.form__msg-err');
const iconErr = document.querySelector('.form__icon-err');


submit.addEventListener('click', function(e) {
  let value = email.value;
  if (value.length == 0 || value == '') {
    e.preventDefault();
  }

  if (validateEmail(value)) {
    message.textContent = `${value} is a valid email`;
    message.style.color = "green";
    message.style.visibility = "visible";
    iconErr.style.visibility = "hidden";
  } else {
    message.textContent = 'Please provide a valid email';
    iconErr.style.visibility = "visible";
    message.style.visibility = "visible";
  }
});


function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}