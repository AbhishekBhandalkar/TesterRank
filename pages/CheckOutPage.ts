import { type Page, Locator ,expect} from '@playwright/test';
import { BasePage } from './BasePage';
import { URLs } from '../constants/urls';

export class CheckoutPage extends BasePage {

    // Delivery Address
    readonly fullNameInput: Locator;
    readonly mobileInput: Locator;
    readonly addressInput: Locator;
    readonly landmarkInput: Locator;
    readonly cityInput: Locator;
    readonly stateSelect: Locator;
    readonly pincodeInput: Locator;
    readonly homeAddressType: Locator;
    readonly saveAndDeliverButton: Locator;

    // Order Summary
    readonly continueButton: Locator;

    // Payment
    readonly cashOnDelivery: Locator;

    readonly placeOrderButton: Locator;
    readonly orderConfirmation: Locator;

    constructor(page: Page) {
        super(page);

        // Delivery Address
        this.fullNameInput = page.getByTestId('full-name');
        this.mobileInput = page.getByTestId('mobile');
        this.addressInput = page.getByLabel('address');
        this.landmarkInput = page.getByTestId('landmark');
        this.cityInput = page.getByTestId('city');
        this.stateSelect = page.getByTestId('state');
        this.pincodeInput = page.getByTestId('pincode');

        this.homeAddressType = page.getByLabel('Home');

        this.saveAndDeliverButton =
            page.getByTestId('save-address-btn');

        // Order Summary
        this.continueButton =
            page.getByRole('button', { name: 'Continue' });

        // Payment
        this.cashOnDelivery =
            page.getByText('Cash on Delivery');

        this.placeOrderButton = page.getByRole('button', {
            name: 'Place Order'
        });

        this.orderConfirmation = page.getByText(
            'Order Confirmed!'
        );
    }

    async gotoCheckout() {
        await this.page.goto(URLs.checkout);
    }
    async fillDeliveryAddress(
        name: string,
        mobile: string,
        address: string,
        landmark: string,
        city: string,
        state: string,
        pincode: string
    ) {
        await this.fullNameInput.fill(name);
        await this.mobileInput.fill(mobile);
        await this.addressInput.fill(address);
        await this.landmarkInput.fill(landmark);
        await this.cityInput.fill(city);

        await this.stateSelect.selectOption({
            label: state
        });

        await this.pincodeInput.fill(pincode);
    }

    async selectHomeAddress() {
        await this.homeAddressType.check();
    }

    async saveAndDeliver() {
        await this.saveAndDeliverButton.click();
    }

    async continueToPayment() {
        await this.continueButton.click();
    }

    async selectCashOnDelivery() {
        await this.cashOnDelivery.click();
    }
    async placeOrder() {
        await this.placeOrderButton.click();
    }

    async verifyOrderConfirmation() {
        await expect(this.orderConfirmation).toBeVisible();
    }
}