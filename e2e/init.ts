import { cleanup, device, init } from 'detox';

jest.setTimeout(120000);

beforeAll(async () => {
  await init();
  await device.launchApp();
});

beforeEach(async () => {
  await device.reloadReactNative();
});

afterAll(async () => {
  await cleanup();
});
