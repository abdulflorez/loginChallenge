import BasePage from './base.page';
import { $ } from '@wdio/globals';

class LoginPage extends BasePage{
    get emailInput (){
        return $('input[data-qa*="login-email"]');
    }

    get passwordInput (){
        return $('input[data-qa*="login-password"]');
    }

    get loginButton (){
        return $('input[data-qa*="login-button"]');
    }
}

export const loginPage = new LoginPage() 