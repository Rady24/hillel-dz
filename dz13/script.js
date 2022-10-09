const SMALL_SIZE = {
    price: 50,
    callories: 20
};
const MEDIUM_SIZE = {
    price: 75,
    callories: 30
};
const BIG_SIZE = {
    price: 100,
    callories: 40
}; 

const TOPPING_CHEESE = {
    price: 10,
    callories: 20
};
const TOPPING_SALAD = {
    price: 20,
    callories: 5
};
const TOPPING_POTATO = {
    price: 15,
    callories: 10
};
const TOPPING_SPICES = {
    price: 15,
    callories: 0
};  
const TOPPING_MAYO = {
    price: 20,
    callories: 0
};  


function Hamburger(size){
    this.size = size;
    this.price = size.price;
    this.callories = size.callories;
    
};

Hamburger.prototype.addTopping = function(topping){
    this.topping = topping;
    this.price = topping.price + this.price;
    this.callories = topping.callories + this.callories ;
};
Hamburger.prototype.getPrice = function(){
    return this.price;  
};
Hamburger.prototype.getCallories = function(){
    return this.callories;  
};

const hamburger = new Hamburger(BIG_SIZE);
hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_SPICES);
hamburger.addTopping(TOPPING_POTATO);


console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());









// const hamburger = new Hamburger(SIZE_SMALL);
// // добавка из майонеза
// hamburger.addTopping(TOPPING_MAYO);
// hamburger.addTopping(TOPPING_POTATO);

// console.log("Price with sauce: “ + hamburger.getPrice());
// console.log("Callories with sauce: “ + hamburger.getCallories());

