const consBut = document.querySelector('.header__but');
const formContainer = document.querySelector('div[data-action="form-container"]');
const imgCross = document.querySelector('#close-form');
const form = document.querySelector('#form-popup');
const inputTel = form.elements.numTel;
const inputName = form.elements.name;
const divMessage = document.querySelector('div[data-action="show-message"]');
const imgClose = document.querySelector('#close-message');

consBut.addEventListener('click', showForm);
imgCross.addEventListener('click', closeForm);
form.addEventListener('submit', sendForm);
document.addEventListener('keyup', chekValidForm);
imgClose.addEventListener('click', closeMess);


function showForm() {

    if(formContainer.classList.contains("hide")) {

        formContainer.classList.remove("hide");
        formContainer.classList.add("show");

         setTimeout(() => formContainer.style.opacity = "1",0);
    }
    else {

        formContainer.style.opacity = "0";

        setTimeout(() => {
            formContainer.classList.remove("show");
            formContainer.classList.add("hide");
        },1000);
        
        
    }
   

}
function closeForm() {

    formContainer.style.opacity = "0";

     setTimeout(() => {
        formContainer.classList.remove("show");
        formContainer.classList.add("hide");
    },1000);

    inputTel.value = "";
    inputName.value = "";

    document.querySelector('.message') ? document.querySelector('.message').remove() : '';
    inputName.style.borderColor = "black";
    inputTel.style.borderColor = "black";

}

function chekValidForm(event) {
    if(event.target.name == "name") {

        if(!event.target.value.trim()) {

           document.querySelector('.message') ? document.querySelector('.message').remove() : '';

            inputName.style.borderColor = "red";

            let span = document.createElement("span");
            span.textContent = "Обязательное поле";
            span.style.color = "red";
            span.classList.add("message");
            inputName.after(span);
            
        }
        else if(event.target.value.trim().length < 12) {

            document.querySelector('.message') ? document.querySelector('.message').remove() : '';

            inputName.style.borderColor = "green";

            let span = document.createElement("span");
            span.textContent = `Осталось ${12 - event.target.value.length} ${12 - event.target.value.length < 5 ? "символа" : "символов"}` ;
            span.style.color = "green";
            span.classList.add("message");
            inputName.after(span);

        }
        else {
            document.querySelector('.message') ? document.querySelector('.message').remove() : '';
            inputName.style.borderColor = "black";
            inputName.removeAttribute("notValid");
        }


    }
    else if(event.target.name == "numTel") {
        if (event.target.value.replace(/[_-]/g, '').length < 15) {
            document.querySelector('.message') ? document.querySelector('.message').remove() : '';
    
            inputTel.style.borderColor = "red";
    
            let span = document.createElement("span");
            span.textContent = "Обязательное поле";
            span.style.color = "red";
            span.classList.add("message");
            inputTel.after(span);
            
        }
        else {
            document.querySelector('.message') ? document.querySelector('.message').remove() : '';
            inputTel.style.borderColor = "black";
            inputTel.removeAttribute("notValid");
        }
    }
}



function sendForm(event) {
    console.log('send form')
    event.preventDefault();
    if (inputTel.hasAttribute("notValid") || inputName.hasAttribute("notValid")) {

        event.preventDefault();

        let span = document.createElement('span');
        span.textContent = "форма не валидна";
        span.style.color = "red";
        span.style.marginLeft = "14%";
        span.classList.add("message");
        event.target.after(span);
    }
    else {
        formContainer.classList.remove("show");
        formContainer.classList.add("hide");

        inputTel.value = "";
        inputName.value = "";

        document.querySelector('.message') ? document.querySelector('.message').remove() : '';
        inputName.style.borderColor = "black";
        inputTel.style.borderColor = "black";
        
        divMessage.classList.remove('hide');
        divMessage.classList.add('show');

        setTimeout(() => {
            divMessage.classList.remove('show');
            divMessage.classList.add('hide');
        },5000);
    }
}
function closeMess() {
    
    divMessage.classList.remove('show');
    divMessage.classList.add('hide');
}

