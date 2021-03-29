import { Button, render } from '../../components/button/button.js';
import Validation from '../../utils/input_validation/input_validation.js';
import { ProfileChangePswAPI } from '../../api/profile-api.js';
import { store } from "../../utils/store/store.js";
import { router } from "../../utils/router/router.js";
document.querySelector(".profile-sidebar").addEventListener("click", event => {
    event.preventDefault();
    router.go("/profile");
});
//Validate data
let node_inputs = document.querySelectorAll('.textinput-profile.right');
let input_select = [...node_inputs];
input_select.shift();
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
                //el.style.background = "";
            }
            else {
                el.style.background = "#ffe9ec";
                error_label.textContent = `${el.dataset.message}`;
                error_label.style.textAlign = "right";
                error_label.style.width = '330px';
                console.log(error_label === null || error_label === void 0 ? void 0 : error_label.textContent);
                error_label.style.visibility = "visible";
            }
        }
    });
});
//Create button
const button = new Button({
    text: 'Сохранить',
});
render(".app", button);
function changeData(data) {
    return { type: 'CHANGEDATA', data: data };
}
document.querySelector(".button_type_submit").addEventListener("click", event => {
    event.preventDefault();
    console.log(`gogo`);
    let form = document.querySelector('form');
    let formData = new FormData(form);
    let data = {};
    formData.forEach((value, key) => { data[key] = value; });
    input_select.find((el) => {
        if (!(Validation(el))) {
            console.log(`${el.placeholder} not valid`);
        }
    });
    let profileChangeApiClient = new ProfileChangePswAPI();
    profileChangeApiClient.update(JSON.stringify(data)).then(function (data) {
        store.update(changeData(JSON.parse(data.response)));
        router.go("/profile");
    });
});
//# sourceMappingURL=profile_change_psw.js.map