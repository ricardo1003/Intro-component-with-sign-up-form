const formElement = document.getElementsByTagName("form")[0]
const sendButtonElement = document.getElementsByTagName("button")[0]


// sendButtonElement.addEventListener("click", () => {
function checkForm(){
    let allFilled = true

    for (let i = 0; i<formElement.length; i++){
        if (formElement[i].tagName === "INPUT" && formElement[i].value.trim() === ""){
            allFilled = false
        }
    }
    if (allFilled) {
        sendButtonElement.disabled = false;
    } else {
        sendButtonElement.disabled = true;
    }
    for (let i = 0; i<formElement.length; i++){
        if (formElement[i].tagName === "INPUT"){
            formElement[i].addEventListener("input", checkForm)
        }
    }
}
checkForm()