const newText = document.querySelector('#newText');
const enterArea = document.querySelector('#input');
const actionBtn = document.querySelector('#action__btn');

action__btn.addEventListener('click', onClickAdd);

function onClickAdd(){
    if(valueIsValid()){
        return;
    }
    const newDivEl = getText();
    addNewElem(newDivEl);
    resetInput();
}

function getText(){
    return  input.value;       
}


function addNewElem(elem){
    const textElem = generateTextElem(elem);
 
    new__text.append(textElem);
}

function generateTextElem(elem){
    const divElem = document.createElement('div');
  
    divElem.textContent = elem;
    divElem.classList.add('new__item');
    divElem.addEventListener('click',()=>{
        divElem.classList.toggle('new__item-style');
    });
  
    return divElem; 
}

function valueIsValid(){
    if(enterArea.value ===''){
        return true;
    }
    return false;
}

function resetInput(){
    enterArea.value = '';
}







