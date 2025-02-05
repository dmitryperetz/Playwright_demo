const {test, expect} = require ('@playwright/test')

test('CondoContol Home Page', async ({page}) =>{

    await page.goto('https://www.condocontrol.com')
    await expect(page).toHaveTitle('Condo Control | Condo, HOA and Property management software')

})