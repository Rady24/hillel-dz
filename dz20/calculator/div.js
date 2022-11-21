module.exports = div;
function div (...values){
    return values.reduce((acc,item) => (acc/item));
}