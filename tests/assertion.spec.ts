import { test, expect } from '@playwright/test';

test('assertion', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    // await page.locator('[data-test="login-button"]');
    
    await expect(page.locator('[data-test="login-button"]')).toHaveCount(1);
    await expect(page.locator('[data-test="login-button"]')).toBeEnabled();
    // await expect(page.locator('[data-test="login-button"]')).toBeDisabled();

    await expect.soft(page.locator('[data-test="login-button"]')).toBeDisabled(); //here i used soft assertion, so error hole thiis code will not stop

    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    // await expect(page.locator('[data-test="login-button"]')).toBeHidden();

    await expect(page.locator('[data-test="login-button"]')).toHaveText('Login');
    await expect(page.locator('[data-test="login-button"]')).toHaveAttribute('name','login-button');
    await expect(page.locator('[data-test="login-button"]')).toHaveId('login-button')
    await expect(page).toHaveURL('https://www.saucedemo.com/')
    await expect(page).toHaveTitle('Swag Labs')
    
    // expect(5).toBe(4);
    // await expect(page).not.toHaveTitle('Swag Labs');

    //custom error message*********
    // await expect(page,'this is custom error message gg').not.toHaveTitle('Swag Labs');


})