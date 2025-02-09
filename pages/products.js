import { expect } from '@playwright/test';

export default class Products {
    constructor(page) {
        this.page = page;
        this.inventoryItem = '.inventory_item';
        this.inventortItemName = '.inventory_item_name '
        this.addToCartButton = '.btn_inventory '
        this.shoppingCartBadge = '.shopping_cart_badge'
        this.cart = '#shopping_cart_container'
    }

    async checkProductsExistence() {
        let inventory_items = this.page.locator(this.inventoryItem);
        if (inventory_items.count === 0) {
            throw new Error('No products found');
        }
    }

    async productName() {
        return await this.page.locator(this.inventoryItem).nth(0).locator(this.inventortItemName).innerText();
    }

    async addToCart() {
        await this.page.locator(this.inventoryItem).nth(0).locator(this.addToCartButton).click();
    }

    async expectAmountOfProducts(amount) {
        await expect(this.page.locator(this.shoppingCartBadge)).toHaveText(amount);
    }

    async clickCart() {
        await this.page.locator(this.cart).click();
    }

}