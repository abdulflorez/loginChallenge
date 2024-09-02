import {loginPage} from '../pages/login.page';
import { homePage } from '../pages/home.page';
import { expect } from '@wdio/globals';


class BaseOperations {
    async loginWithUI () {
        await homePage.loginMenuOption.click();
        await expect(loginPage.emailInput)
    }
}