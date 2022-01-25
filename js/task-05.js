/*
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/

const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange)
  



function onInputChange(event) {
  if (inputEl.value === '') {
    return nameOutputEl.textContent = 'Anonymous';
  }
  nameOutputEl.textContent = event.currentTarget.value;
}
