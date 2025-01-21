
const operatorContainer = document.querySelector('.operator-container');

const letterInputContainer = document.querySelector('.letter-input');

const letterInput = document.querySelector('#letter');

const resultInput = document.querySelector('#result');

let type = '';


function controlDisplay(isShowLetterInput = true) {
  operatorContainer.style.display = isShowLetterInput ? 'none' : 'block';
  letterInputContainer.style.display = isShowLetterInput ? 'block' : 'none';
}

function handlerCapital(buttonType) {
  controlDisplay();
  type = buttonType
}


function handlerBack() {
  letterInput.value = ''
  resultInput.value = ''
  controlDisplay(false);
}

function changeLetter() {
  const value = letterInput.value
  let result = '';
  switch (type) {
    case 'upper':
      result = value.toUpperCase();
      console.log(2)
      break;
    case "upperReplace":
      result = value.toUpperCase()?.replace(' ', '_');
      break;
    case 'lower':
      result = value.toLowerCase();
      break;
    case 'lowerReplace':
      result = value.toLowerCase()?.replace(' ', '_');
      break;
  }
  resultInput.value = result;
}

function handlerTrigger(id, callback) {
  const trigger = document.querySelector(`#${id}`);
  trigger.addEventListener('click', callback);
}
handlerTrigger('back', handlerBack);
handlerTrigger('change', changeLetter);
handlerTrigger('capitalLetter', () => handlerCapital('upper'));
handlerTrigger('capitalLetterReplace', () => handlerCapital('upperReplace'));
handlerTrigger('lowercaseLetter', () => handlerCapital('lower'));
handlerTrigger('lowercaseLetterReplace', () => handlerCapital('lowerReplace'));

