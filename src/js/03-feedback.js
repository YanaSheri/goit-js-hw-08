import { throttle } from "lodash";

const input = document.querySelector("input");
const form = document.querySelector(".feedback-form");
const textArea = document.querySelector("textarea");
const btn = document.querySelector("button");
const LOCALSTORAGE_KEY = "feedback-form-state";
const storage = localStorage.getItem(LOCALSTORAGE_KEY);

// function saveMessage(evt) {
//   evt.preventDefault();
//     const dataForm = { email: input.value, message: textArea.value };
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
// }
// form.addEventListener("input", saveMessage);

const saveMessage = throttle((evt) => {
    evt.preventDefault();
    const dataForm = { email: input.value, message: textArea.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
}, 500);
form.addEventListener("input", saveMessage);

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
