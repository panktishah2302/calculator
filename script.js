let string = '';
let buttons = document.querySelectorAll('.button');
let inputField = document.querySelector('.input');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;
        if (buttonValue === '=') {
            try {
                string = eval(string).toString();
                inputField.value = string;
            } catch {
                string = 'Error';
                inputField.value = string;
            }
        } else if (buttonValue === 'AC') {
            string = '';
            inputField.value = '0';
        } else if (buttonValue === '%') {
            if (string) {
                string = (parseFloat(string) / 100).toString();
                inputField.value = string;
            }
        } else if (buttonValue === '+/-') {
            if (string) {
                string = string.startsWith('-') ? string.slice(1) : '-' + string;
                inputField.value = string;
            }
        } else if (buttonValue === '0') {
            if (string !== '' && string !== '0') {
                string += '0';
                inputField.value = string;
            }
        } else if (buttonValue === '.') {
            if (!string.includes('.')) {
                string += '.';
                inputField.value = string;
            }
        } else {
            if (inputField.value === '0' && buttonValue !== '.') {
                string = buttonValue;
            } else {
                string += buttonValue;
            }
            inputField.value = string;
        }
    });
});
