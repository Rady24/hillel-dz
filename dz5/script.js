const action = getAction();
const operands = getOperands();
const answer = calculate(operands, action);
alert(answer)




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

function getOperands(){
    let operands = [];
    do{
        operands = prompt ('Enter your value splitted with comma');    
    } while (isOperandInvalid(operands));
    return operands.split(',').map(Number);
}
function isOperandInvalid(val) {
    return val === null || val.trim() === '';
}

function calculate(values, operation) {
    const result = values.reduce(function (acc, item) {
        return calculateResult(acc, item, operation);
    });

    return result;
}

const result = operands.reduce(function (acc, item) {
    return calculateResult(acc, item, action);
});

function calculateResult(a, b, action) {
    switch (action) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}
























