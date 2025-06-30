import {test,expect} from '@playwright/test';

test('Input accepts number 123', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/inputs");
    const input = page.locator("input[type='number']");
    await input.fill("123");
    await expect(input).toHaveValue("123");
});