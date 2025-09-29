import { test, expect } from '@playwright/test'
let pageURL = 'https://automationexercise.com/'
test.setTimeout(60000);

test('Register User', async ({ page }) => {
    await page.goto(pageURL)
    await expect(page).toHaveURL(pageURL);
    await expect(page.locator('#slider')).toBeVisible();
    await page.getByRole('link', { name: ' Signup / Login' }).click();

    await page.waitForLoadState('domcontentloaded')
    await expect(page.getByText('New User Signup!')).toBeVisible();

    await page.getByRole('textbox', { name: 'Name' }).fill('Rishabh');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('TestCase#001EmailIDAutomationExcercise@gmail.com');
    await page.getByRole('button', { name: 'Signup' }).click();

    await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();

    await page.getByText('Mr.').click();
    await page.getByRole('textbox', { name: 'Name *', exact: true }).fill('Rishabh Jha');
    await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('test@123');
    await page.locator('#days').selectOption('22');
    await page.locator('#months').selectOption('9');
    await page.locator('#years').selectOption('1997');
    await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).click();
    await page.getByRole('checkbox', { name: 'Receive special offers from our partners!' }).click();

    await page.getByRole('textbox', { name: 'First name *' }).fill('Rishabh');
    await page.getByRole('textbox', { name: 'Last name *' }).fill('Jha');
    await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Sample Pvt Ltd');
    await page.getByRole('textbox', { name: 'Address * (Street address,' }).fill('123, SampleStreet, SampleTown, SampleCity');
    await page.getByRole('textbox', { name: 'Address 2' }).fill('456, SampleStreet, SampleTown, SampleCity');
    await page.getByRole('textbox', { name: 'State *' }).fill('Uttar Pradesh');
    await page.getByRole('textbox', { name: 'City *' }).fill('Agra');
    await page.locator('#zipcode').fill('282007');
    await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('123456789');
    await page.getByRole('button', { name: 'Create Account' }).click();

    await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();
    await page.getByRole('link', { name: 'Continue' }).click();

    await expect(page.getByText('Logged in as Rishabh')).toBeVisible();
    await page.getByRole('link', { name: 'Delete Account' }).click();

    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();

    await page.getByRole('link', { name: 'Continue' }).click();
});

test('Register User with existing email', async ({ page }) => {
    await page.goto(pageURL)
    await expect(page).toHaveURL(pageURL);
    await expect(page.locator('#slider')).toBeVisible();
    await page.getByRole('link', { name: ' Signup / Login' }).click();

    await page.waitForLoadState('domcontentloaded')
    await expect(page.getByText('New User Signup!')).toBeVisible();

    await page.getByRole('textbox', { name: 'Name' }).fill('Rishabh');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('TyrionLannisterFromGOT@gmail.com');
    await page.getByRole('button', { name: 'Signup' }).click();

    await expect(page.getByText('Email Address already exist!')).toBeVisible();
})