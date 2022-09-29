const contactTemplate = document.querySelector('#contactTemplate').innerHTML;
const contactsListElem = document.querySelector('#contactsList');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const phoneInput = document.querySelector('#phone');
const deleteContactBtn = document.querySelector('#deleteContactBtn');
const newContactForm = document.querySelector('#newContactForm')



newContactForm.addEventListener('submit', onFormSubmit);

contactsListElem.addEventListener('click', onDeleteContactBtn);



function onDeleteContactBtn(event){
    if (event.target.classList.contains("delete-btn")) {
        removeContact(event.target.parentElement.parentElement);
    }
}

function onFormSubmit(event){
    event.preventDefault();

    resetValidation();
    if(!validateForm()){
        return
    }
    const newContact = getFormData();
    addContact(newContact);
    resetForm();

}
function validateForm(){
    if (nameInput.value === ''){
        nameInput.classList.add('invalid-input');
        return false;
    }
    if (surnameInput.value === ''){
        surnameInput.classList.add('invalid-input');
        return false;
    }
    if (phoneInput.value === ''){
        phoneInput.classList.add('invalid-input');
        return false;
    }
    return true;
}
function resetValidation(){
    nameInput.classList.remove('invalid-input');
    surnameInput.classList.remove('invalid-input');
    phoneInput.classList.remove('invalid-input');
}
function getFormData(){
    return {
        name: nameInput.value,
        surname: surnameInput.value,
        phone: phoneInput.value,
    };
}
function addContact(contact){
    const contactHtml = generateContactHtml(contact);
    contactsListElem.insertAdjacentHTML('beforeend', contactHtml);
}

function generateContactHtml({name,surname,phone}){
    return template = contactTemplate
                                    .replaceAll('{{name}}', name)
                                    .replaceAll('{{surname}}', surname)
                                    .replaceAll('{{phone}}', phone); 
}
function generateCell(value){
    const tdElem = document.createElement('td');
    tdElem.textContent = value;
    
    return tdElem;
}
function resetForm(){
    nameInput.value = '';
    surnameInput.value = '';
    phoneInput.value = '';
}
function removeContact(contactEl){
    contactEl.remove()
}