
const button = document.querySelector('.button');

button.onclick = function () {
  let result = document.querySelector('.input').value;
  document.getElementById('result').innerHTML = result;
  
}