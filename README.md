# A-Frame + Preact + Snowpack — WebXR Starter

A small WebXR scene built with [A-Frame](https://aframe.io), [Preact](https://preactjs.com), and [Snowpack](https://www.snowpack.dev): a rotating cube floating over a starry landscape that changes color when you look at it or click it. It runs in the browser on desktop and mobile, and in VR headsets.

This repo accompanies my tutorial **[How I Built WebXR using A-Frame, Preact, & Snowpack](https://medium.com/hexavara-tech/how-i-built-webxr-using-a-frame-preact-snowpack-6cee19c72d81)** on the medium blog.

**[▶ Live demo](https://hello-virtualworld.surge.sh)**

![A rotating cube above a starry landscape with a neon grid floor](docs/screenshot.png)

## What's in the scene

- **Procedural environment**: the [aframe-environment-component](https://github.com/supermedium/aframe-environment-component) `starry` preset with a starry sky, distant hills, and a neon grid floor
- **Lighting**: ambient, directional, and point lights
- **Gaze cursor**: a ring cursor fixed to the camera that "clicks" after you look at an object for 0.5 seconds, so it works in a headset without controllers
- **Interactive object**: a rotating cube that cycles through five colors on each click, with its color held in Preact state (`useState`)

## Why this stack

- **A-Frame** describes 3D and VR scenes declaratively and handles WebXR, cameras, and input.
- **Preact** (through `preact/compat` and [aframe-react](https://github.com/supermedium/aframe-react)) manages state and lets the scene be written as components, at a fraction of React's size.
- **Snowpack** serves native ES modules in development, so changes show up instantly with Preact Fast Refresh.

## Branches

| Branch | Contents |
|---|---|
| [`main`](https://github.com/rizanw/aframe-preact-snowpack) | the finished example from the tutorial |
| [`boilerplate`](https://github.com/rizanw/aframe-preact-snowpack/tree/boilerplate) | a clean starter to build your own scene on |
| [`example`](https://github.com/rizanw/aframe-preact-snowpack/tree/example) | the example app on its own |

## Getting started

Requires [Node.js](https://nodejs.org). [Yarn](https://yarnpkg.com) is optional.

```bash
git clone https://github.com/rizanw/aframe-preact-snowpack.git
cd aframe-preact-snowpack
npm install       # or: yarn
npm start         # dev server at http://localhost:3000
npm run build     # production build in build/
```

To try it in a headset or on your phone, deploy the `build/` folder to any static host over HTTPS (WebXR requires a secure context). The demo uses [surge.sh](https://surge.sh): `npx surge build`.

> [!NOTE]
> Snowpack is no longer maintained (since 2022). The code still works with the versions locked in `yarn.lock`. For a new project, [Vite](https://vitejs.dev) offers the same instant dev server and is the recommended successor.

## Project structure

```
public/                        index.html, favicon
src/index.jsx                  entry: loads A-Frame and components, renders the app
src/App.jsx                    the scene: environment, lights, cursor, interactive cube
src/assets/js/                 aframe-environment-component (bundled)
src/styles/                    global styles
snowpack.config.js             mounts, Preact Fast Refresh, react → preact/compat aliases
```

## Credits

`src/assets/js/aframe-environment.js` is the [aframe-environment-component](https://github.com/supermedium/aframe-environment-component) by Supermedium (MIT license).

## License

[MIT](LICENSE)
