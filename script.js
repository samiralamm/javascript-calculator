let input = document.querySelector('input');
let buttons = document.querySelectorAll('.button');
let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const value = e.target.innerHTML;

        switch (value) {
            case '=':
                try {
                    expression = eval(expression).toString();
                    input.value = expression;
                    localStorage.setItem('lastResult', expression);
                } catch {
                    input.value = 'Error';
                    expression = '';
                }
                break;

            case 'AC':
                expression = '';
                input.value = '';
                break;

            case 'MR':
                expression = localStorage.getItem('lastResult') || '';
                input.value = expression;
                break;

            case '+/-':
                try {
                    expression = (eval(expression) * -1).toString();
                    input.value = expression;
                    localStorage.setItem('lastResult', expression);
                } catch {
                    input.value = 'Error';
                    expression = '';
                }
                break;

            default:
                expression += value;
                input.value = expression;
        }
    });
});

// Append value to display
// function appendValue(value) {
//   document.getElementById("display").value += value;
// }

// // Clear display
// function clearDisplay() {
//   document.getElementById("display").value = "";
// }

// // Calculate result
// function calculate() {
//   try {
//     document.getElementById("display").value =
//       eval(document.getElementById("display").value);
//   } catch {
//     document.getElementById("display").value = "Error";
//   }
// }

