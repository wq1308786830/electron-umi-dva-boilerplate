<img src="internals/img/erb-banner.png" width="100%" />

<br>

<p>
  Electron Umi Dva Boilerplate uses <a href="http://electron.atom.io/">Electron</a>, <a href="https://umijs.org/">UmiJS</a>, <a href="https://dvajs.com/">DvaJS</a> and <a href="https://github.com/gaearon/react-hot-loader">React Hot Loader</a> for rapid application development (HMR).
</p>

<br>

<div align="center">
  <a href="https://facebook.github.io/react/"><img src="./internals/img/react-padded-90.png" /></a>
  <a href="https://webpack.github.io/"><img src="./internals/img/webpack-padded-90.png" /></a>
  <a href="http://redux.js.org/"><img src="./internals/img/redux-padded-90.png" /></a>
  <a href="https://github.com/ReactTraining/react-router"><img src="./internals/img/react-router-padded-90.png" /></a>
  <a href="https://flowtype.org/"><img src="./internals/img/flow-padded-90.png" /></a>
  <a href="http://eslint.org/"><img src="./internals/img/eslint-padded-90.png" /></a>
  <a href="https://facebook.github.io/jest/"><img src="./internals/img/jest-padded-90.png" /></a>
  <a href="https://yarnpkg.com/"><img src="./internals/img/yarn-padded-90.png" /></a>
</div>

<hr />
<br />

<div align="center">

[![Chrome Version][chrome-img]][chrome-url]
[![Node Version][node-img]][node-url]
[![Electron Version][electron-img]][electron-url]
[![Umi Version][umi-img]][umi-url]



</div>

## Install
First, clone the repo via git:

```bash
git clone --depth 1 --single-branch --branch master https://github.com/wq1308786830/electron-umi-dva-boilerplate-template.git your-project-name
```

And then install the dependencies with npm.

```bash
$ cd your-project-name
$ npm i
```

## Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ npm run dev
```

## Packaging for Production

To package apps for the local platform:

```bash
$ npm run package
```

## Maintainers

- [Russell](https://github.com/wq1308786830)
## License

MIT © [electron-umi-dva-boilerplate-template](https://github.com/wq1308786830/electron-umi-dva-boilerplate-template)

[chrome-img]: https://img.shields.io/badge/chrome-%5E73.0-redgreen.svg
[chrome-url]: https://www.google.com/intl/zh-CN/chrome/
[node-img]: https://img.shields.io/badge/node-%5E12.4.0-brightgreen.svg
[node-url]: https://nodejs.org/zh-cn/
[electron-img]: https://img.shields.io/badge/electron-%5E5.0.3-orange.svg
[electron-url]: https://electronjs.org/
[umi-img]: https://img.shields.io/badge/umi-%5E2.7.0-red.svg
[umi-url]: https://umijs.org/
