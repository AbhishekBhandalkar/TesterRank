
import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CatalogPage } from '../pages/CatalogPage';

import { CheckoutPage } from '../pages/CheckOutPage';

//define typescript type for fixtures we are adding
type MyFixtures = {

    loginPage: LoginPage;
    catalogPage: CatalogPage;
    checkoutPage: CheckoutPage;
    cartWithProduct: Page;

};

//extend base test object with our custom fixtures
export const test = base.extend<MyFixtures>({

    //define login page fixtures
    loginPage: async ({ page }, use) => {
        //instantiate page object
        const loginPage = new LoginPage(page);

        await use(loginPage);
    },
    catalogPage: async ({ page }, use) => {

        const catalogPage = new CatalogPage(page);

        await use(catalogPage);
    },
    checkoutPage: async ({ page }, use) => {

        const checkoutPage = new CheckoutPage(page);

        await use(checkoutPage);
    },
    cartWithProduct: async ({ page, catalogPage }, use) => {

        await catalogPage.goToShopNow();
        await catalogPage.addCart();

        await use(page);
    },



});

export { expect };