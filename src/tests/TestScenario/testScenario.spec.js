import { test, expect } from '@playwright/test'

test.setTimeout(60000);
test('Verify Test Cases Page', async ({ page }) => {
    let baseURL = 'https://automationexercise.com'
    await page.goto(baseURL)
    await (expect(page).toHaveURL(baseURL))

    await expect(page.locator('#slider')).toBeVisible();
    await page.getByRole('button', { name: 'Test Cases' }).click();

    await expect(page.locator('b')).toContainText('Test Cases');
    await expect(page.getByText('Below is the list of test Cases for you to practice the Automation')).toBeVisible();
})