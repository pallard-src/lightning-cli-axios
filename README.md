# lightning-cli-axios

Demo an issue with rollup and axios which makes it impossible to build apps that pulls in axios as a dependency.

## To reproduce

1. run `npm ci`
2. run `npx lng dev`
3. navigate to http://127.0.0.1:8080

a white page appears with an `Uncaught TypeError: Cannot convert undefined or null to object` exception in the console.

### Removing axios code

The axios code can be found in `src/index.js`. If commented, the app will run properly.

## References

[Proposed workaround](https://github.com/axios/axios/issues/4153) is to use the `resolutions` configuration but that is only available to `yarn`. The equivalent `npm` will be named `overrides` and is currently [under development](https://github.com/npm/statusboard/issues/343).
