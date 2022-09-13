
function createCalc(a) {
    let result = a;
    return {
        add: (b)=> result+=b,  
        sub: (b)=> result-=b, 
        div: (b)=> result/=b, 
        mult:(b)=> result*=b, 
        set: (b) => result=b,
    };
}



const calc = createCalc(10);







