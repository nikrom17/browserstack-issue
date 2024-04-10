import { test, request } from "@playwright/test";
import percySnapshot from "@percy/playwright";

import { getStoryUrls } from "./utils.js";

test.use({
  ignoreHTTPSErrors: true,
});
const myRequest = await request.newContext();

const storiesResponse = await myRequest.get(
  `http://127.0.0.1:6006/stories.json`
);
const storiesJson = await storiesResponse.json();
const storyUrls = getStoryUrls(storiesJson);

storyUrls.forEach(async ({ storyUrl, storyName }) => {
  test(`${storyName}`, async ({ page }) => {
    await page.goto(storyUrl);
    await page.waitForTimeout(3000);
    await percySnapshot(page, storyName);
  });
});
