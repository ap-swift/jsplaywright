export default class Auth {
    constructor(page) {
        this.page = page;
        this.username = '#user-name';
        this.password = '#password';
        this.loginButton = '#login-button';
    }

    async fillUsername(username) {
        await this.page.fill(this.username, username);
    }

    async fillPassword(password) {
        await this.page.fill(this.password, password);
    }

    async login(username, password) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.page.click(this.loginButton);
    }
}