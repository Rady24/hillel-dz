module.exports = add;
function add (...values){
    return values.reduce((acc,item) => (acc+item));
}

