# Plugin system MVP

## Preface

This is an implementation of plugin system built on top of [Module Federation](https://webpack.js.org/concepts/module-federation/). 

> Loading remote modules is considered asynchronous operation. When using a remote module these asynchronous operations will be placed in the next chunk loading operation(s) that is between the remote module and the entrypoint.

## Run it! Analyze it!
This repo is managed by Yarn workspaces, so you'll need to run `yarn` to install its dependencies.
Each package has `analyze` script to see what it's made from.

### Container
Container application can be run by `yarn start` from the root repository or the same in `container` folder.
 
### Plugins
Plugins live in corresponding folder and can be run separately. They are published at `@elitvinchuk` scope:
* https://www.npmjs.com/package/@elitvinchuk/plugins-first
* https://www.npmjs.com/package/@elitvinchuk/plugins-second

but they are basically the same dist, produced by `build` or `analyze` scripts. 
 
 
## Further reading
* https://medium.com/dev-genius/module-federation-advanced-api-inwebpack-5-0-0-beta-17-71cd4d42e534
