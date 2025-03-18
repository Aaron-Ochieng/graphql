import { Auth, AUTH_TOKEN } from "./auth/auth.js";
import { auth_ui } from "./auth/ui.js";

const auth = new Auth();
document.addEventListener('DOMContentLoaded', async () => {
    const authform = document.getElementById('auth');
    const clickToLogin = async () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const res = await auth.login(username, password);
        const data = await res.json();

        if (res.status === 200) {
            localStorage.setItem(AUTH_TOKEN, data.token);
            authform.style.display = 'none';
        }
    };

    if (!auth.authToken) {
        authform.innerHTML = auth_ui;
        document.getElementById('submit').addEventListener('click', clickToLogin);
    }
});