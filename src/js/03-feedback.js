import LodashThrottle from "lodash.throttle";

const input = document.querySelector("input");
const form = document.querySelector(".feedback-form");
const textArea = document.querySelector("textarea");
const btn = document.querySelector("button");
const LOCALSTORAGE_KEY = "feedback-form-state";
const storage = localStorage.getItem(LOCALSTORAGE_KEY);

const saveMessage = (evt) => {
    evt.preventDefault();
    const dataForm = { email: input.value, message: textArea.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
};
form.addEventListener("input", LodashThrottle(saveMessage, 500));

function updateOutput() {
    if (storage) {
        input.value = JSON.parse(storage).email;
        textArea.value = JSON.parse(storage).message;
    }
}
updateOutput();

const cleanForm = (event) => {
    event.preventDefault();
    console.log({ email: input.value, message: textArea.value });
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

form.addEventListener("submit", cleanForm);






//-------------------
// function saveMessage(evt) {
//   evt.preventDefault();
//     const dataForm = { email: input.value, message: textArea.value };
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
// }
// form.addEventListener("input", saveMessage);

//--------------------


// import throttle from 'lodash.throttle'; 

// const form = document.querySelector(".feedback-form");
// const input = document.querySelector("input");
// const textarea = document.querySelector("textarea");
// const LOCALSTORAGE_KEY = "feedback-form-state";
// const formData = {};

// form.addEventListener('submit', onFormSubmit)
// form.addEventListener('input',throttle(OnTextareaInput, 500));

// populateTextarea();

// function onFormSubmit(event) {
//     event.preventDefault();
//     event.currentTarget.reset();
//     localStorage.removeItem(LOCALSTORAGE_KEY);
// }


// function OnTextareaInput(event) {
//     formData[event.target.name] = event.target.value;
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
// }

// function populateTextarea() {
//     const massege = localStorage.getItem(LOCALSTORAGE_KEY);
//     const parsedSettings = JSON.parse(massege);
//     if (parsedSettings) {
//         input.value = parsedSettings.email; 
//         textarea.value = parsedSettings.message;
//     }
// }