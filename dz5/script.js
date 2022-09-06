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
     let array = prompt('Enter your values separated with comma').split(',');
     return array.map(Number);
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
























