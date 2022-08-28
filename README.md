# ReactNative E2E PoC with Detox
```
ℹ️ At this point it is only about Android. If you are willing to add an iOS part, please, let me know.
```
Here are the steps to set up intergrate Detox on you ReactNative project:
1. `yarn add detox`  
   `yarn add --dev eslint-plugin-detox`  
   `yarn add --dev ts-jest`
2. Copy directory `e2e` and `scripts` to you prject.
3. Copy files `.github/workflows/android.yml` and `.detoxrc.json` to your project.
4. Go through the steps from: https://wix.github.io/Detox/docs/introduction/android  
   Test Butler support wasn't added here, but it should be done for the real project.
5. Add the following to your `package.json`:
```json
  "scripts": {
    "e2e:build": "detox build --configuration",
    "e2e:test": "detox test --configuration"    
  }
```
---
Now you can extend the tests in `e2e` forlder and explore how these tests are run in the CI/CD with [android.yml](.github/workflows/android.yml)
## Running locally
1. Make sure you have Android SDK installed
2. Install the platform tools:
```bash
$ sdkmanager --install 'build-tools;33.0.0' platform-tools 'platforms;android-29'
```
3. Install the emulator:
```bash
$ sdkmanager --install 'system-images;android-29;default;x86_64'
$ avdmanager create avd --force -n Pixel_API_29_AOSP --abi 'default/x86_64' --package 'system-images;android-29;default;x86_64' --device 'pixel'
```
4. Build the app for Android:
```bash
$ yarn e2e:build android.emu.debug
```
5. Start the emulator (don't close the terminal):
```bash
$ $ANDROID_HOME/emulator/emulator -avd Pixel_API_29_AOSP
```
6. Run Metro (don't close the terminal):
```bash
$ yarn start
```
7. Run the tests:
```bash
$ yarn e2e:test android.emu.debug
``` 
