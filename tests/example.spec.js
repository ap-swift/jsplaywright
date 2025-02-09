// @ts-check
import { test, expect } from '@playwright/test';
import Auth from '../pages/auth.js';
import Products from '../pages/products.js';
import Cart from '../pages/cart.js';

test('Buy product e2e test', async ({ page }) => {
  // Imlementations
  const auth = new Auth(page);
  const products = new Products(page);
  const cart = new Cart(page);

  // Go to website
  await page.goto('https://www.saucedemo.com/');

  // Login
  await auth.login('standard_user', 'secret_sauce');

  //Products
  await products.checkProductsExistence();
  const productName = await products.productName();
  await products.addToCart();
  await products.expectAmountOfProducts('1');
  await products.clickCart();

  // Cart
  await cart.checkProductName(productName);
  await cart.clickCheckout();
});

