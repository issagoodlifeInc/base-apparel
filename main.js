const submit = document.querySelector('#submit');
const email = document.querySelector('#email');
let message = document.querySelector('.form__msg-err');
const iconErr = document.querySelector('.form__icon-err');
let value = email.value;

submit.addEventListener('click', function(e) {
  if (value.length == 0 || value == '') {
    e.preventDefault();
  }

  if (validateEmail(value)) {
    message.textContent = `${email.value} is a valid email`;
    message.style.color = "green";
    message.style.visibility = "visible";
    iconErr.style.visibility = "hidden";
  } else {
    message.textContent = 'Please provide a valid email';
    iconErr.style.visibility = "visible";
    message.style.visibility = "visible";
  }

});


function validateEmail(value) {
  // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(email).toLowerCase());
  //
  // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value))
}
