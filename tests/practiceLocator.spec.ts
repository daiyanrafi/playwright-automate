import {test} from '@playwright/test'

test('practice of locator', async({page})=>{
    await page.goto('https://www.saucedemo.com');
    await page.locator("//*[@name='user-name']").fill('standard_user')
    await page.locator("css=input#password").fill('secret_sauce');
    await page.locator("input.submit-button.btn_action").click();

})