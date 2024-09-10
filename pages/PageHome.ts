import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from '../pages/BasePage'


export class PageHome {
    readonly page: Page;
    readonly logo: Locator;

    constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('[data-qa="header-logo"]')
    }

    async getLogo() {
        await expect(this.logo).toBeVisible()
    }
}