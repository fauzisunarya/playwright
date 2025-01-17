const {test, expect } = require("@playwright/test");
const { default: newLoginActions } = require("./spec/actions/newLoginActions");

test('case satu', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    const inputUsername = page.locator('#user-name');
    await inputUsername.fill('standard_user');
    await expect(inputUsername).toHaveValue('standard_user');

    const inputPasword = page.locator('#password');
    await inputPasword.fill('secret_sauce');
    await expect(inputPasword).toHaveValue('secret_sauce');

    const buttonLogin = page.locator('#login-button');
    await buttonLogin.click();
})

test('case dua', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    const inputUsername = page.locator('#user-name');
    await inputUsername.fill('standard_user');
    await expect(inputUsername).toHaveValue('standard_user');

    const inputPasword = page.locator('#password');
    await inputPasword.fill('secret_sauce');
    await expect(inputPasword).toHaveValue('secret_sauce');

    const buttonLogin = page.locator('#login-button');
    await buttonLogin.click();

    const pilihItemTas = page.locator('#add-to-cart-sauce-labs-backpack');
    await pilihItemTas.click();
    const pilihItemSepeda = page.locator('#add-to-cart-sauce-labs-bike-light');
    await pilihItemSepeda.click();

    const btnCart = page.locator('.shopping_cart_link');
    await btnCart.click();

    const btnCheckout = page.locator('#checkout');
    await btnCheckout.click();

    const inputFirstName = page.locator('#first-name');
    await inputFirstName.fill('fauzi');
    await expect(inputFirstName).toHaveValue('fauzi');

    const inputLastName = page.locator('#last-name');
    await inputLastName.fill('sunarya');
    await expect(inputLastName).toHaveValue('sunarya');

    const inputZipCode = page.locator('#postal-code');
    await inputZipCode.fill('45264');
    await expect(inputZipCode).toHaveValue('45264');

    const btnContinue = page.locator('#continue');
    await btnContinue.click();

    const btnFinish = page.locator('#finish');
    await btnFinish.click();

    const headerSukses = page.locator('.complete-header');
    await expect(headerSukses).toHaveText('Thank you for your order!');


})

test('cara pmo', async ({ page }) => {
    const objTest = new newLoginActions(page);
    await objTest.Goto();
    await objTest.inputLogin();
    await objTest.addItem();
    await objTest.cart();
    await objTest.inputDataPelanggan();
    await objTest.checkout();
})