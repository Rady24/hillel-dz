
function createCalc(a) {
    return {
        add: (b)=> a+=b,  
        sub: (b)=> a-=b, 
        div: (b)=> a/=b, 
        mult:(b)=> a*=b, 
        set: (b) => a=b,
    };
}



const calc = createCalc(10);







