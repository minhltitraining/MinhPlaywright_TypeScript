import { test, expect } from '@playwright/test';
import {HomePage} from '../../Spreecom_PageObjectModel/HomePage';
import { SportswearPage } from '../../Spreecom_PageObjectModel/SportswearPage';

test.describe("SportswearPage", () => {
    let homePage: HomePage;
    let sportswearPage: SportswearPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.visit();
        await homePage.goToSportswearPage();
        await homePage.wait(2000)
    })

    test("Go To Women page and validate content", async ({page}) => {
        sportswearPage = new SportswearPage(page);
        sportswearPage.assertTitle();
        sportswearPage.assertUrl();
        sportswearPage.assertAllTexts();
    })
})