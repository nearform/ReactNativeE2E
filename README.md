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
