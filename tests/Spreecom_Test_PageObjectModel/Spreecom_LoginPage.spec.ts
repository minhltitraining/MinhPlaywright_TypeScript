import { test, expect } from '@playwright/test';
import {HomePage} from '../../Spreecom_PageObjectModel/HomePage';
import { LoginPage } from '../../Spreecom_PageObjectModel/LoginPage';


test.describe('HomePage', () => {

    let homePage :HomePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.visit();
        await homePage.goToLogin();
        await homePage.wait(2000)
    })

    test('Enter username/password - Verify account page url', async ({page}) => {
        loginPage = new LoginPage(page);
        loginPage.assertUrl();
        loginPage.assertTitle();
        await loginPage.enterUserName('minh@spree.com')
        await loginPage.enterPassword('123456')
        await loginPage.clickOnLoginBtn();
        await loginPage.wait(3000)

        //verify url
        expect(page.url()).toBe("https://demo.spreecommerce.org/account")
    });

})



