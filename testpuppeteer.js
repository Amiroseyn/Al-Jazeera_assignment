const puppeteer = require('puppeteer');

async function runTest() {
    const browser = await puppeteer.launch({ headless: false }); // Set headless: false to see the browser
    const page = await browser.newPage();
    await page.goto('https://example.com');
    console.log('Page loaded');
    await page.screenshot({ path: 'example.png' });
    await browser.close();
}

runTest().catch(error => console.error('Error running test:', error));