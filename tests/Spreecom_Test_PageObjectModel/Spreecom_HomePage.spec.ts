import { test, expect } from '@playwright/test';
import {HomePage} from '../../Spreecom_PageObjectModel/HomePage';
import { LoginPage } from '../../Spreecom_PageObjectModel/LoginPage';


test.describe('HomePage', () => {

    let homePage :HomePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.visit();
    })

    test('Verify HomePage - Click Account/Login - Verify Login Page Url', async ({page}) => {
        homePage.assertTitle();
        homePage.assertUrl();
        await homePage.clickOnAccountBtn();
        await homePage.clickOnLogginBtn();
        await homePage.wait(2000);
        loginPage = new LoginPage(page);
        loginPage.assertUrl();
    });

})



