import { test, expect } from '@playwright/test';
import { PageHome } from '../pages/PageHome'


test.beforeEach(async ({page}) => {
  await page.goto('https://www.rottentomatoes.com/')
})

test('first', async ({page}) => {
  const pageHome = new PageHome(page)
  pageHome.getLogo()
});
