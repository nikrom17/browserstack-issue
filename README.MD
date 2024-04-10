# PayPal JS SDK Percy Snapshot Testing Issues

This repo showcases replicates the issues we are having with `@percy/storybook` and `@percy/playwright`

## Repo Setup

Install dependencies

```bash
npm install
```

## Replicate Issue with @percy/storybook

The error received is the same with both examples

```bash
[percy] Percy has started!
[percy] Stopping percy...
[percy] Build not created
[percy] Error: TypeError: Cannot read properties of null (reading 'prepend')
    at injectDeclarativeShadowDOMPolyfill (<anonymous>:527:18)
    at serializeDOM (<anonymous>:615:9)
    at serializeFrames (<anonymous>:95:28)
    at serializeElements (<anonymous>:558:7)
    at Object.serializeDOM (<anonymous>:602:7)
    at <anonymous>:11:29
    at withPercyStorybookHelpers (<anonymous>:13:8)
    at withPercyHelpers (<anonymous>:64:3)
```

## Run Percy against static build of storybook

1. Run `npm run percy:static-build`
1. This command builds and runs the percy tests

## Run Percy against storybook dev server

1. Run `npm run storybook`
1. Run `npm run percy:live-storybook`
1. This percy test will execute on a storybook running on port `6006`

## Replicate Issue with @percy/playwright

When using @percy/playwright I don't receive any build errors but the snapshots are blank for all the button examples. Only the Marks get taken successfully.

## Run @percy/playwright

1. Run `npm run percy:playwright`
