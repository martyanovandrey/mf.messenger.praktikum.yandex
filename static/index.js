import { loginPage, registationPage, chatPage, chatDialogPage, profilePage, profileChangesPage, profileChangePsw } from './pages/pageTemplates/pageBlock.js';
import { Router } from "../../utils/router/router.js";
import Store from "./utils/store/store.js";
// State
const initialstate = {
    id: '1',
    first_name: "User",
    second_name: "test",
    display_name: "test",
    login: "test",
    email: "test",
    password: "test",
    phone: "test",
    userMessage: "Wuzzzuuuuuup",
    myMessage: "Wuzzzuuuuuuuuuuuuuuuuuuuup"
};
const store = new Store(updateState, initialstate);
window.store = store;
function updateState(state, action) {
    if (action.type === 'CHANGEDATA') {
        return action.data;
    }
}
const changeAction = { type: 'CHANGEDATA', amount: {} };
function changeData(data) {
    return { type: 'CHANGEDATA', data: data };
}
const router = new Router('.block-wrapper');
window.router = router;
router
    .use('/', loginPage)
    .use('/signup', registationPage)
    .use('/chat', chatPage)
    .use('/chat_dialog', chatDialogPage)
    .use('/profile', profilePage)
    .use('/profile_changes', profileChangesPage)
    .use('/profile_change_psw', profileChangePsw)
    .start();
//# sourceMappingURL=index.js.map