import {test,expect} from '@playwright/test';
// TC-1 : เพิ่ม 3 ปุ่ม แล้วตรวจสอบว่ามี Delete 3 ปุ่ม
test('Add 3 button', async ({page}) => {
    // Step 1 : เปิดหน้าเว็บ
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    // Step 2 : 
    await page.getByRole("button", {name:"Add Element"}).click();
    await page.getByRole("button", {name:"Add Element"}).click();
    await page.getByRole("button", {name:"Add Element"}).click();
    // Step 3 :
    const deleteButtons = page.locator("button.added-manually")
    await expect(deleteButtons).toHaveCount(3);
});

test('Add 2 button and delete 1', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await page.getByRole("button", {name:"Add Element"}).click();
    await page.getByRole("button", {name:"Add Element"}).click();
    
    const deleteButtons = page.locator("button.added-manually")
    await deleteButtons.first().click();
    await expect(deleteButtons).toHaveCount(1);
});