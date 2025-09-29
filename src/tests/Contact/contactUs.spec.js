import { test, expect } from '@playwright/test'
test.setTimeout(60000);
test('Contact Us Form', async ({ page }) => {
    let baseURL = 'https://automationexercise.com'
    await page.goto(baseURL)
    await (expect(page).toHaveURL(baseURL))

    await (expect(page.locator('#slider'))).toBeVisible();

    await page.getByRole('link', { name: 'Contact Us' }).click();

    await expect(page.getByRole('heading', { name: 'GET IN TOUCH' })).toBeVisible();

    await page.getByPlaceholder('Name').fill('Rishabh');
    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('Rishabh');

    await page.getByRole('textbox', { name: 'Email', exact:true }).click();
    await page.getByRole('textbox', { name: 'Email', exact:true }).fill('TyrionLannisterFromGOT@gmail.com');

    await page.getByRole('textbox', { name: 'Subject' }).click();
    await page.getByRole('textbox', { name: 'Subject' }).fill("Regarding the Reservation of King's Landing");


    await page.getByRole('textbox', { name: 'Your Message Here' }).click();
    await page.getByRole('textbox', { name: 'Your Message Here' }).fill("I like it here, but i want King's Landing & Iron Throne. It Doesn't Belong to Brandon Stark of Winterfell");

    await page.getByRole('button', { name: 'Choose File' }).setInputFiles('src/test-data/SampleBlankFileForUpload.txt');
    
    page.once('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`)
        await dialog.accept().catch(() => { })
    });
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#contact-page').getByText('Success! Your details have')).toBeVisible();

    await page.getByRole('link', { name: ' Home' }).click();
    
    await page.locator('div').filter({ hasText: 'Home  Products Cart Signup' }).first().click();
    await expect(page.locator('div').filter({ hasText: 'Home  Products Cart Signup' }).first()).toBeVisible();
})