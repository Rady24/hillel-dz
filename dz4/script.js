
const action = getAction();
const quantity = getQuantity();
const operands = getOperands();

const result1 = expSum(operands);
const result2 = expMin(operands);
const result3 = expMult(operands);
const result4 = expDiv(operands);

const expression = calculateResult(action);
showResult(expression)







function getAction() {
     let val;
 
     do {
         val = prompt('Action? + - * /');
     } while (isOperatorInvalid(val));
 
     return val;
 }
 
function isOperatorInvalid(val) {
     return val !== '+' && val !== '-' && val !== '*' && val !== '/';
 }

function getQuantity() {
     let val;

     do {
          val = prompt('Quantity of operands?')
     } while (isQuantityInvalid(val));

     return Number (val);
}
function isQuantityInvalid (val) {
     return val === null || val.trim() === '' || isNaN(val) || val <=2;
}

function getOperands () {
     let operands;
     let myArr = new Array (quantity)
     for (let j = 0, J = myArr.length; j < J ; j++)
     do {
          operands = myArr [(+j)] = prompt ('Enter your ' + (+j+1) + ' value', '');
     } while(isOperandInvalid(operands));

     return myArr;

} 

function isOperandInvalid(val) {
     return val === null || val.trim() === '' || isNaN(val);
}

function expSum(array){
     let sum = 0;
     for(let i = 0; i < array.length; i++){
     sum += (+array[i]);
     }
     return sum
}
function expMin(array){
     let sum = array[0];
     for(let i = 1; i < array.length; i++){
     sum = sum - (+array[i]) ;
     }
     return sum

     
}
function expMult(array){
     let sum = 1;
     for(let i = 0; i < array.length; i++){
     sum = sum * (+array[i]);
     }
     return sum
}
function expDiv(array){
     let sum = 1 ;
     for(let i = 0; i < array.length; i++){
     sum = sum / (+array[i]);
     }
     return sum
}

function calculateResult(action) {
     switch (action) {
         case '+':
             return result1;
         case '-':
             return result2;
         case '*':
             return result3;
         case '/':
             return result4;
     }
}
function showResult(result) {
     const expression = result;
     alert(expression);
}






















