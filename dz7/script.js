
function createCalc(a) {
    let result = a;
    return {
        add:  function (b) {
            return result+=b;  
        },
        sub: function (b) {
            return result-=b;
        },
            
        div: function (b) {
            return result /=b;
        }, 
        mult: function (b) {
           return result *=b;
        }, 
        set: (b) => result=b,
    };
}



const calc = createCalc(10);







