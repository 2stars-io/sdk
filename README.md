# @2stars/sdk

The umbrella meta-package for the [2Stars](https://2stars.io) JavaScript SDK suite. Installing this one package pulls in everything the platform offers for browsers and Node — Video AI, React bindings, and VerifAI device trust.

```bash
npm install @2stars/sdk
```

## What you get

This meta-package has zero code of its own. It just pulls in:

| Sub-package | Version | What it is |
|---|---|---|
| [`@2stars/video-js`](https://www.npmjs.com/package/@2stars/video-js) | `^0.4.0` | Core JavaScript SDK — `StarsClient`, rooms, peers, messages, recording, broadcasts, AI in-call |
| [`@2stars/video-react`](https://www.npmjs.com/package/@2stars/video-react) | `^0.5.0` | React Provider + 25 hooks + ready-made components on top of `@2stars/video-js` |
| [`@2stars/verifai-web`](https://www.npmjs.com/package/@2stars/verifai-web) | `^3.1.0` | Zero-knowledge device trust + behavioral biometrics for browsers |

After install, you import each sub-package by its own name — your bundler tree-shakes at the import level, so you only ship what you actually `import`.

```js
import { StarsClient }            from '@2stars/video-js';
import { StarsProvider, useRoom } from '@2stars/video-react';
import { VerifAI }                from '@2stars/verifai-web';
```

## Or install only what you need

The meta-package is purely additive — every sub-package is also independently installable. If you only need one product, skip the umbrella:

```bash
npm install @2stars/verifai-web        # just VerifAI for browsers
npm install @2stars/video-js           # just the Video AI core
npm install @2stars/video-react        # React bindings (peer-deps on video-js)
```

## Android

This umbrella is JS-only. The Android SDKs are published as Maven artifacts via JitPack:

```gradle
maven { url 'https://jitpack.io' }

implementation 'com.github.2stars-io:verifai-android:3.2.0'  // VerifAI for Android
implementation 'com.github.2stars-io:video-android:0.5.1'    // Video AI for Android
```

See [`github.com/2stars-io`](https://github.com/2stars-io) for the full org.

## Versioning policy

This meta-package follows the lifecycle of its sub-packages:

- A **patch** bump on `@2stars/sdk` indicates a patch bump in one or more sub-packages.
- A **minor** bump indicates a new public feature in one or more sub-packages.
- A **major** bump indicates a breaking change in one or more sub-packages.

Cherry-pick installs (`npm install @2stars/verifai-web@3.1.5`) always win over whatever range this meta declares — npm's normal semver resolution applies.

## License

MIT — see [LICENSE](./LICENSE). Each sub-package is also MIT-licensed.
