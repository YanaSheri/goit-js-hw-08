const input = document.querySelector("input");
const form = document.querySelector(".feedback-form");
const textArea = document.querySelector("textarea");
const btn = document.querySelector("button");

const KEY = "feedback-form-state";
const storage = localStorage.setItem(KEY);

const fn = () => {
    if (!JSON.parse(storage)) return;
    input.vaue = JSON.parse(storage).email;
    textArea.value = JSON.parse(storage).message;
}

fn();

input.addEventListener('input', cb);
