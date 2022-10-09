   
function calculateResult(a,b,action,) {
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
calculate.onclick = function() {
    let action = document.getElementById("operator").value;
    let a = Number(document.getElementById('first__value').value);
    let b = Number(document.getElementById('second__value').value);
    let result = calculateResult(a,b,action)


    return document.getElementById('str').innerHTML=`Exp: ${a} ${action} ${b} = ${result}`;
}








