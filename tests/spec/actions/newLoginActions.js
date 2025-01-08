import newLoginLocators from "../locator/newLoginLocators";
import { expect } from "@playwright/test";

export default class newLoginActions{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page;
        this.newLoginLocators = new newLoginLocators();
        this.inputUsername = page.locator(this.newLoginLocators.inputUsername);
        this.inputPassword = page.locator(this.newLoginLocators.inputPassword);
        this.clickButton = page.locator(this.newLoginLocators.clickButtonLogin);
        this.pilihItemTas = page.locator(this.newLoginLocators.pilihItemTas);
        this.pilihItemSepeda = page.locator(this.newLoginLocators.pilihItemSepeda);
        this.btnCart = page.locator(this.newLoginLocators.btnCart);
        this.btnCheckout = page.locator(this.newLoginLocators.btnCheckout);
        this.inputFirstName = page.locator(this.newLoginLocators.inputFirstName);
        this.inputLastName = page.locator(this.newLoginLocators.inputLastName);
        this.inputZipCode = page.locator(this.newLoginLocators.inputZipCode);
        this.btnContinue = page.locator(this.newLoginLocators.btnContinue);
        this.btnFinish = page.locator(this.newLoginLocators.btnFinish);
        this.headerSukses = page.locator(this.newLoginLocators.headerSukses);
    }

    async Goto(){
        await this.page.goto('https://www.saucedemo.com/');

    }
    
    async inputLogin(){
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.clickButton.click();
    }

    async addItem(){
        await this.pilihItemTas.click();
        await this.pilihItemSepeda.click();
    }

    async cart(){
        await this.btnCart.click();
        await this.btnCheckout.click();
    }

    async inputDataPelanggan(){
        await this.inputFirstName.fill('fauzi');
        await expect(this.inputFirstName).toHaveValue('fauzi');
        await this.inputLastName.fill('sunarya');
        await expect(this.inputLastName).toHaveValue('sunarya');
        await this.inputZipCode.fill('45264');
        await expect(this.inputZipCode).toHaveValue('45264');
    }

    
    async checkout(){
        await this.btnContinue.click();
        await this.btnFinish.click();
        await expect(this.headerSukses).toHaveText('Thank you for your order!');
    }


}