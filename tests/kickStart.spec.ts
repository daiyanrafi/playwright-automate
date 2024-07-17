import {chromium, test} from "@playwright/test";

test('first case', async({page})=>{

    //custom-fiixture (if you dont pass page in the async func)********
    
    // const browser = await chromium.launch()
    // const context = await browser.newContext()
    // const page = await context.newPage();

    await page.goto('https://www.google.com')
    await page.getByLabel('Google অ্যাপ্লিকেশানগুলি').click();

    console.log('my first case')
})

test('SECOND case', ()=>{
    console.log('my first case')
})
