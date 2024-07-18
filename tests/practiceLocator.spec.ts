import {test} from '@playwright/test'

test('practice of locator', async({page})=>{
    await page.goto('https://www.saucedemo.com');
    await page.locator("//*[@name='user-name']").fill('standard_user')
    await page.locator("css=input#password").fill('secret_sauce');
    await page.locator("input.submit-button.btn_action").click();
    // await page.locator("input[value=login]").click();
    await page.locator("text='Sauce Labs Backpack'").click();
    // await page.locator("text=Sauce LABS Backpack").click(); //cotation changes for simple match
    // await page.locator("id=add-to-cart").click();
    await page.locator("data-test=add-to-cart").click();

})

test('locator with options', async({page})=>{
    await page.goto('https://www.saucedemo.com');

    await page.locator('.form_group', {has: page.locator('input#user-name')}).click();
    await page.locator('.form_group', {has: page.locator('input#user-name')}).pressSequentially('problem_user');
    
    await page.locator('.form_group', {hasNot: page.locator('input#user-name')}).click();
    await page.locator('.form_group', {hasNot: page.locator('input#user-name')}).pressSequentially('secret_sauce');

    await page.locator("#login-button").click();

    // await page.locator("//a", {hasText:'Sauce Labs Backpack'}).click(); //******hasText
    
    await page.locator(".inventory_item_name", {hasNotText : /Sauce.*/}).click();

})

test('practice of getby method', async({page})=>{
    await page.goto("https://demo.nopcommerce.com/login");

    // await page.getByLabel("Email:").fill('testautomate@gmail.com')

    //this line iis to exacly match {exact:true} keyword
    await page.getByLabel("Email:", {exact:true}).fill('testautomate@gmail.com')

    
    console.log(await page.getByText('New Cus').textContent());
    
    await page.getByAltText('nopCommerce demo store').click()
    await page.getByTitle("Show products in category Electronics").first().click() //SAME NAMER 3TA TAI FIRST METHOD USE KORLAM
    
    await page.getByPlaceholder("Search store").fill('Mobile')
    await page.getByRole('button', { name: 'Search'}).click()

    // await page.goto('https://www.saucedemo.com');
    // await page.getByTestId('username').fill('TestCode')
})