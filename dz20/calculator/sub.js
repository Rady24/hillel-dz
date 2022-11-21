module.exports = sub;
function sub (...values){
    return values.reduce((acc,item) => (acc-item));
}