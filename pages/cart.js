import { expect } from '@playwright/test';

export default class Cart {
    constructor(page) {
        this.page = page;
        this.productName = '.inventory_item_name';
        this.checkoutButton = '#checkout';
    }

    async checkProductName(name) {
        await expect(this.page.locator(this.productName)).toHaveText(name);
    }

    async clickCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }
}