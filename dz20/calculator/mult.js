module.exports = mult;
function mult (...values){
    return values.reduce((acc,item) => (acc*item));
}