# Electron with Webpack and TypeScript

This repos is an example of how to use Electron with Webpack and TypeScript.

The renderer process compiles TypeScript to ECMAScript modules. To stay compatible with Electron, the main process still uses CommonJS modules.

To compile and run the Electron app, run:

```bash
npm install
npm run build
npm run start
```
