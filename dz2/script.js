let val1;

do {
  val1 = prompt('Enter first value');
} while (isNaN(val1) || val1 === null || val1.trim() === '');

val1 = +val1;

let val2;

do {
  val2 = prompt('Enter second value');
} while (isNaN(val2) || val2 === null || val2.trim() === '');

val2 = +val2;

let action;

do {
    action = prompt('+, -, * or /?');
  } while (action !== '+' && action !== '-' && action !== '*' && action !== '/');

const plus = val1 + val2;
const minus = val1 - val2;
const multiply = val1 * val2;
const divide = val1 / val2;

switch (action) {
    case '+' :
         alert(val1 + action + val2 + '=' + plus); break;
    case '-' :
         alert(val1 + action + val2 + '=' + minus); break;
    case '*' :
         alert(val1 + action + val2 + '=' + multiply); break;
    case '/' :
         alert(val1 + action + val2 + '=' + divide); break;
}




