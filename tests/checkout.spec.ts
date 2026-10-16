
import { test, expect } from '../fixtures/fixture';


test('complete checkout with delivery address', async ({
    cartWithProduct,
    checkoutPage
}) => {

    // Cart already contains a product.
    // Navigate from cart to checkout.
    await checkoutPage.gotoCheckout();

    // Fill delivery address
    await checkoutPage.fillDeliveryAddress(
        'John Doe',
        '1234567890',
        '123 Main Street',
        'Near Temple',
        'Pune',
        'Maharashtra',
        '411001'
    );

    // Select Home address
    await checkoutPage.selectHomeAddress();

    // Save address
    await checkoutPage.saveAndDeliver();

    // Continue to payment
    await checkoutPage.continueToPayment();

    // Select Cash on Delivery
    await checkoutPage.selectCashOnDelivery();

     // Place order
    await checkoutPage.placeOrder();

    // Verify order confirmation
    await checkoutPage.verifyOrderConfirmation();
});