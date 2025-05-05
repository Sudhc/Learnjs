import { test, expect } from '@playwright/test';
import { title } from 'process';

const jobtitles = {
  title1 : "Test1",
  title2 : "Test2",
  title3 : "Test3"
}


for(let title in jobtitles){
  test(`OrangeHrm Veriy job titles'-${jobtitles[title]}`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  //login
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
    //await page.locator('a[href="/web/index/.php/admin/viewAdminModule"]').click();

    await page.locator("//span[normalize-space(text())='Job']").click();
    await page.locator("//ul[@role='menu']//li[1]").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList");
    await page.locator("//button[contains(.,'Add')]").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle");

    // await page.locator('a[class="oxd-main-menu-item active"]').click();
    await page.locator('input[class="oxd-input oxd-input--active"]').nth(1).fill(jobtitles[title]);
   
    await page.locator(' button[type="submit"]').click();
   
    
    
    
})
}

