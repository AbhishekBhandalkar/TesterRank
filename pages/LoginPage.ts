
import { BasePage } from "./BasePage"; 
import {type Page, Locator} from '@playwright/test';
import { URLs } from '../constants/urls';

// Page object for the login screen.
// It keeps the selectors in one place so tests can interact with the UI using readable method names.
export class LoginPage extends BasePage{

    readonly loginLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    // The constructor connects this page object to Playwright's Page instance and creates selectors
    // once for the login form fields so each action can reuse the same locators.
    constructor (page: Page){

        super(page);    

        // Define all UI elements used during login.
        this.loginLink = page.getByTestId('header-login-link');
        this.emailInput = page.getByTestId('login-email');
        this.passwordInput = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-btn');

    }

    // Navigate to the application's main URL before performing any login interactions.
    async goto(){
        await this.page.goto(URLs.TesterRank);
    }

    // This method represents the login workflow: fill the email, fill the password, and submit the form.
    // The order matters because the form expects the email field first and then the password field.
    async login(email: string,password: string){

        await this.loginLink.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }
}

