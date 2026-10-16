import { BasePage } from "./BasePage";
import { type Page, Locator } from '@playwright/test';
import { URLs } from '../constants/urls';

export class CatalogPage extends BasePage {

    readonly shopNow: Locator;
    readonly smartPhone: Locator;
    readonly specialPrice: Locator;
    readonly addtoCart: Locator;

    //create constructor
    constructor(page: Page) {
        super(page);

        this.shopNow = page.getByTestId('shop-now-btn');
        this.smartPhone = page.getByTestId('product-name-link-3')
            .filter({ hasText: 'Smartphone Pro Max' });
        this.specialPrice = page.locator('#productPrice');
        this.addtoCart = page.getByRole('button', { name: 'Add to Cart' });

    }
    //action methods
    async goToShopNow() {
        await this.page.goto(URLs.TesterRank);
        await this.shopNow.click();
    }
    price(): Locator {

        return this.specialPrice;

    }
    async addCart() {
        await this.smartPhone.click();
        await this.page.waitForURL('**/shopping/product?id=3');
        await this.addtoCart.click();
        
    }
}