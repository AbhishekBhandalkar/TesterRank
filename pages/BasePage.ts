
import { Page } from '@playwright/test';

// Base class for all page objects in the project.
// It holds a shared Playwright Page instance and can be reused by child page classes.
export class BasePage {
    // Reference to the current browser page used for interactions.
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}