import { test, expect } from '@playwright/test'

let pageURL = 'https://automationexercise.com/'
test.setTimeout(60000);

test('Login User with correct email and password', async ({ page }) => {
    await page.goto(pageURL)
    await expect(page).toHaveURL(pageURL);
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page.locator('#slider')).toBeVisible();

    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await expect(page.getByText('Login to your account')).toBeVisible();

    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('TestCaseEmailID#1999AutomationExcercise@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Logged in as SampleTest')).toBeVisible();
    // await page.getByRole('link', { name: 'Delete Account' }).click();
    // await expect(page.getByText('Account Deleted!')).toBeVisible();
});


test('Login User with incorrect email and password', async ({ page }) => {
    await page.goto(pageURL)
    await expect(page).toHaveURL(pageURL);
    await expect(page.locator('#slider')).toBeVisible();

    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await expect(page.getByText('Login to your account')).toBeVisible();

    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('SamplTest@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
});

test('Logout User', async ({ page }) => {
    await page.goto(pageURL)
    await expect(page).toHaveURL(pageURL);
    await expect(page.locator('#slider')).toBeVisible();

    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await expect(page.getByText('Login to your account')).toBeVisible();

    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('TyrionLannisterFromGOT@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForTimeout(2000);
    await expect(page.getByText('Logged in as Tyrion')).toBeVisible();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page).toHaveURL('https://automationexercise.com/login')
});