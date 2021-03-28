import { Button, render } from '../../components/button/button.js';
import Validation from '../../utils/input_validation/input_validation.js';
import { SignupAPI } from "../../api/signin-api.js";
import { store } from "../../utils/store/store.js";
import { router } from "../../utils/router/router.js";
//Validate data
let node_inputs = document.querySelectorAll('.textinput-control');
let input_select = [...node_inputs];
let password = document.querySelector('.textinput input[name="password"]');
password.id = 'password';
input_select.map((el) => {
    let input_span = el.parentElement;
    let error_label = input_span.querySelector('.registration__invalid');
    el.addEventListener("focus", () => {
        el.style.background = "";
    });
    el.addEventListener("blur", () => {
        if (Validation(el)) {
            el.style.background = "";
        }
        else {
            if (el.value === "") {
                el.style.background = "";
            }
            else {
                el.style.background = "#ffe9ec";
                error_label.textContent = `${el.dataset.message}`;
                error_label.style.visibility = "visible";
            }
        }
    });
});
//Create button
const button = new Button({
    text: 'Зарегистрироваться',
});
render(".app", button);
const button_div = document.querySelector('.app');
const button_div_b = button_div.firstElementChild;
button_div_b.classList.add("button_type_submit");
button_div_b.type = 'submit';
const button_span = button_div_b.firstElementChild;
button_span.classList.add("button-text");
function changeData(data) {
    return { type: 'CHANGEDATA', data: data };
}
//Send req
document.querySelector(".button_bottom").addEventListener("click", event => {
    event.preventDefault();
    console.log('OKAAY');
    let form = document.querySelector('form');
    let formData = new FormData(form);
    let data = {};
    formData.forEach((value, key) => { data[key] = value; });
    input_select.find((el) => {
        if (!(Validation(el))) {
            console.log(`${el.placeholder} not valid`);
        }
    });
    console.log(data);
    sendData(data);
});
function sendData(data) {
    console.log(data, 'YYYYYYYYYYYYYYYYYYY');
    let signunApiClient = new SignupAPI();
    signunApiClient.create(JSON.stringify(data)).then(function (data) {
        console.log('WHAT I GET ');
        console.log(data);
        store.update(changeData(JSON.parse(data.response)));
    }).then(() => router.go("/chat"));
}
//# sourceMappingURL=registration.js.map