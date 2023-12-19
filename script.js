let str = '';
let inputValue = document.getElementById('inputValue');
let buttons = document.querySelectorAll('button');
let newArr = Array.from(buttons)
newArr.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    try {
      if (e.target.innerHTML == 'X') {
        str += '*'
        inputValue.value = str;

      }
      else if (e.target.innerHTML == '=') {
        str = eval(str);
        inputValue.value = str;
      }
      else if (e.target.innerHTML == 'AC') {
        str = '';
        inputValue.value = str;
      }
      else if (e.target.innerHTML == 'DEL') {
        str = str.substring(0, str.length - 1);
        inputValue.value = str;
      }
      else if (e.target.innerHTML == '%') {
        str = str / 100;
        inputValue.value = str;
      }
      else {
        str += e.target.innerHTML;
        inputValue.value = str;
      }
    } catch (error) {
      inputValue.value = str;
    }
  })
})