import {test, expect} from "playwright/test";
import type { Locator } from "@playwright/test";


test ('login test', async({page})=>{

    await page.goto("https://practice.expandtesting.com/login")
    await page.locator("#username").fill("practice")
    await page.locator("#password").fill("SuperSecretPassword!")
    await page.getByRole('button', { name: 'submit-login' }).click();


})