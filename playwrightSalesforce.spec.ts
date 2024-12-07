import { chromium, test } from "@playwright/test";

test(`Test to launch salesforce URL`, async () => {
    
    //create browser instance
    const browser = await chromium.launch({headless:false,channel:'chrome'});

    //create browser context
    const browserContext = await browser.newContext();

    //create page
    const page = await browserContext.newPage();

    //load url
    await page.goto("https://login.salesforce.com/");

    //to get the url 
    const url = page.url();
    console.log(`The url of the page is ${url}`);
    
    //to get the title of the page
    console.log(`The title of the page is ${await page.title()}`);
    
    await page.waitForTimeout(10000);

    await page.close();
    
    await browserContext.close();

    //close the browser
    await browser.close();
})
