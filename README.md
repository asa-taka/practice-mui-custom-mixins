# practice: Material-UI Custom Mixins

This is a private practice to use `createMixins` of `@material-ui/core` (and TypeScript).

## Summary

In `@material-ui/core/styles/createMixins`

```tsx
export interface Mixins {
  gutters: (styles?: CSSProperties) => CSSProperties;
  toolbar: CSSProperties;
  // ... use interface declaration merging to add custom mixins
}
```

Since that notes, we should do **interface declaration merging** to use `createMixins` and declare our custom mixins like below.

```tsx
// interface declaration merging to add custom mixins
declare module '@material-ui/core/styles/createMixins' {
  interface Mixins {
    myBackgroundMixin: CSSProperties, // <- custom mixin!
  }
}

// get original configs to be used in following `createMixins`
const { breakpoints, spacing } = createMuiTheme()

const mixins = createMixins(breakpoints, spacing, {
  myBackgroundMixin: {
    backgroundColor: '#ff0000'
  }
})
```

See [src/theme.ts](./src/theme.ts) for full declaration.