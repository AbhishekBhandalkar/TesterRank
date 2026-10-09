import { test, expect } from '../fixtures/fixture';

test.use({
    storageState: {
        cookies: [],
        origins: []
    }
});

test('User can login', async ({ loginPage }) => {

    await loginPage.goto();

    await loginPage.login(
        'testuser@quickkart.com',
        'Test@123'
    );

});