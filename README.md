# react-navigation-type-repro

`getState` isn't defined as able to return `undefined`, however if you run this example in the iOS simulator you'll see the following printed:

```
LOG  state is **undefined**
```

Furthermore, when running ESLint you'll see the following error:

```
  29:28  error  Unnecessary conditional, the types have no overlap  @typescript-eslint/no-unnecessary-condition
```