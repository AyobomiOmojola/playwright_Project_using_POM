import { expect, type Locator, type Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
    this.page = page;
    }

    async checkForVisibility(locator) {
        const element = await this.page.locator(locator)
        await expect(element).toBeVisible()
    }
}