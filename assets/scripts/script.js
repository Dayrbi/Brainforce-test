const consBut = document.querySelector('.header__but');
const formContainer = document.querySelector('div[data-action="form-container"]');


consBut.addEventListener('click', showForm);


function showForm () {
    console.log("form show")

    if(formContainer.classList.contains("hide")) {

        formContainer.classList.remove("hide");
        formContainer.classList.add("show");
    }
    else {

        formContainer.classList.remove("show");
        formContainer.classList.add("hide");
    }
   

}
