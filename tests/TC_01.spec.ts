import {test,expect} from '@playwright/test';

// ฟังก์ชันเขียน Test Case
test('Loing Test', async ({page}) => {
    // 1. เปิดหน้าเว็บ
    await page.goto('https://www.saucedemo.com/');
    // 2. 
    await page.getByPlaceholder("Username").fill("standard_user");
    // 3.
    await page.locator('.form_input[placeholder="Password"]').fill("secret_sauce");
    // 4.
    await page.getByRole("button", {name:"Login"}).click();
    // 5. 
    await expect(page.getByText("Swag Labs")).toBeVisible();
    // 6.
    await expect(page.locator(".title")).toHaveText("Products");
    // 7. 
    await page.locator('button[data-test^="add-to-cart"]').first().click();
    // 8. 
    await page.locator('xpath=//a[@class="shopping_cart_link"]').click();
    // 9. 
    await expect(page.locator(".cart_item")).toHaveCount(1);
});
