const formElement = document.getElementsByTagName("form")[0]
const sendButtonElement = document.getElementsByTagName("button")[0]


function checkForm(){
    let allFilled = true
    for (let i = 0; i<formElement.length; i++){
        if (formElement[i].tagName === "INPUT" && formElement[i].value.trim() === ""){
            allFilled = false
            break
            }
        }
        if (allFilled) {
            sendButtonElement.type = "submit";
        } else {
            sendButtonElement.type = "button";
    }
}
function clickOnSend(){
    for (let i = 0; i<formElement.length; i++){
        if (formElement[i].tagName === "INPUT" && formElement[i].value.trim() === ""){
            formElement[i].focus()
            sendButtonElement.classList.toggle("button-clicked")
            break
            }
        }
}
sendButtonElement.addEventListener("mouseout", ()=>{
    sendButtonElement.classList.remove("button-clicked")
})
for (let i = 0; i<formElement.length; i++){
    if (formElement[i].tagName === "INPUT"){       
        formElement[i].addEventListener("input", checkForm)
    }
}

sendButtonElement.addEventListener("click", clickOnSend);

let clicked = false;


checkForm()
