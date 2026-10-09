import { test, expect } from '../fixtures/fixture';
import { env } from '../utils/env'

test.use({
    storageState: {
        cookies: [],
        origins: []
    }
});

test('User can login', async ({ loginPage }) => {

    await loginPage.goto();

    await loginPage.login(
        env.email,
        env.password
    );

});