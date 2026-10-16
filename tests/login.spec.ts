import { test, expect } from '../fixtures/fixture';
import { env } from '../utils/env'

test.use({
    storageState: {
        cookies: [],
        origins: []
    }
});

test('User can login', async ({ loginPage,page }) => {

   await loginPage.goto();

    await loginPage.login(
        env.email,
        env.password
    );
    await expect(page.getByText('Hi, Test')).toBeVisible();

});