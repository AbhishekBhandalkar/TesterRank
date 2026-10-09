import { BasePage } from "./BasePage";
import { type Page, Locator } from '@playwright/test';
import { URLs } from '../constants/urls';

export class CatalogPage extends BasePage {

    readonly ShopNow: Locator;
    readonly SmartPhone: Locator;
    readonly SpecialPrice: Locator;
    readonly AddtoCart: Locator;

    //create constructor
    constructor(page: Page) {
        super(page);

        this.ShopNow = page.getByTestId('shop-now-btn');
        this.SmartPhone = page.getByTestId('product-name-link-3')
            .filter({ hasText: 'Smartphone Pro Max' });
        this.SpecialPrice = page.locator('#productPrice');
        this.AddtoCart = page.getByRole('button', { name: 'Add to Cart' });

    }
    //action methods
    async goToShopNow() {
        await this.page.goto(URLs.TesterRank);
        await this.ShopNow.click();
    }
    price(): Locator {

        return this.SpecialPrice;

    }
    async addCart() {
        await this.SmartPhone.click();
        await this.page.waitForURL('**/shopping/product?id=3');
        await this.AddtoCart.click();
        
    }
}