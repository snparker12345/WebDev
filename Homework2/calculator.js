
const buttons = document.querySelectorAll('.btn-number, .btn-operator')
const clearButton = document.querySelector('.btn-clear')
const equalsButton = document.querySelector('.btn-equals')
const display = document.querySelector('.display')
const box = document.querySelector('.box')

buttons.forEach(button => {
  button.addEventListener('click', () => { 
    const buttonValue = button.getAttribute('data-num');  
    display.textContent += buttonValue
  })
})
const history = [];
const i = 0
equalsButton.addEventListener('click', () => {
const num = eval(display.textContent)
display.textContent = num
history[i] = num
box.textContent = num
})

clearButton.addEventListener('click', () => { 
  display.textContent = ""
})

function saveHistory(expression, result) {
    const historyItem = document.createElement('div');
    historyItem.textContent = `${expression} = ${result}`;
    historyContent.appendChild(historyItem);
}

function clearHistory() {
    historyContent.innerHTML = '';
  }