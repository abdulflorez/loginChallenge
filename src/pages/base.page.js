import { $ } from '@wdio/globals';

export default class BasePage {
    get loginMenuOption () {
        return $('nav navbar-nav');
    }

    get loggedLabel () {
        return $('.navbar-nav [class*="user"]');
    }
}