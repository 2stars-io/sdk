// @2stars/sdk — umbrella re-export.
//
// This file exists so the package has a real entry point (npm's spam
// detector flags meta-packages with no code). The preferred consumer
// pattern is still to import directly from the named sub-package:
//
//   import { StarsClient }            from '@2stars/video-js';
//   import { StarsProvider, useRoom } from '@2stars/video-react';
//   import { VerifAI }                from '@2stars/verifai-web';
//
// ... but you can also do everything off the umbrella:
//
//   import { VideoJS, VideoReact, VerifAI } from '@2stars/sdk';
//   const client = new VideoJS.StarsClient();
//   const r      = await VerifAI.VerifAI.verify(userEmail);
//
// Both patterns tree-shake the same — bundlers eliminate the
// sub-packages you don't actually reference.

export * as VideoJS    from '@2stars/video-js';
export * as VideoReact from '@2stars/video-react';
export * as VerifAI    from '@2stars/verifai-web';
