
import { test as setup ,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { env } from '../utils/env';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        env.email,
        env.password
    );

    await expect(page.getByText('Hi, Test')).toBeVisible();

    await page.context().storageState({ path: authFile });

    await page.context().storageState({ path: authFile });


});