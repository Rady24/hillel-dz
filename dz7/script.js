
function createCalc(a) {
    let result = 0;
    return {
        add:  function (b) {
            if (result === 0){return result = a+b} else{return result = result+b}
        },
        sub: function (b) {
            if (result === 0){return result = a-b} else{return result = result-b}
        },
            
        div: function (b) {
            if (result === 0){return result = a/b} else{return result = result/b}
        }, 
        mult: function (b) {
            if (result === 0){return result = a*b} else{return result = result*b}
        }, 
        set: (b) => result=b,
    };
}



const calc = createCalc(10);







