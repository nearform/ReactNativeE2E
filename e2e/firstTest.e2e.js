const { expect, device, element, by, waitFor } = require('detox');

describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('login-input'))).toBeVisible();
  });

  it('should show hello text with name after logging in', async () => {
    await element(by.id('login-input')).replaceText('John');
    await element(by.id('password-input')).replaceText('Password');
    await element(by.id('sign-in-button')).tap();
    await waitFor(element(by.id('welcome-text')))
      .toHaveText('Hello, John. You are logged in.')
      .withTimeout(5000);
  });
});
