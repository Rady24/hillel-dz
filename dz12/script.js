
function Calculator(a){
    this.a = a;
    this.add = function (b){
        return a += b;
    }
    this.sub = function (b){
        return a -= b;
    }
    this.mult = function (b){
        return a *= b;
    }
    this.div = function (b){
        return a /= b;
    }
    this.result = function (){
        return a;
    }
   
}

const calc = new Calculator(10);





