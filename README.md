<p>
  Electron Umi Dva Boilerplate 使用的技术包括 <a href="http://electron.atom.io/">Electron</a>, <a href="https://umijs.org/">UmiJS</a>, <a href="https://dvajs.com/">DvaJS</a> 并支持HMR热加载.
</p>
<br />

<div align="center">

[![Chrome Version][chrome-img]][chrome-url]
[![Node Version][node-img]][node-url]
[![Electron Version][electron-img]][electron-url]
[![Umi Version][umi-img]][umi-url]

</div>

## 安装依赖

```bash
$ npm i
```

## 开始开发

以开发环境运行支持热加载，分为electron热加载和webpack热加载：

```bash
$ npm run app-dev
```

## 打包生产模式

通过electron-builder打包，过程中会下载打包所必须的资源文件请确保网络通畅，如打包windows安装文件:

```bash
$ npm run pack:win
```

## Maintainers

- [Russell](https://github.com/wq1308786830)

## License

MIT © [electron-umi-dva-boilerplate](https://github.com/wq1308786830/electron-umi-dva-boilerplate)

[chrome-img]: https://img.shields.io/badge/chrome-%5E73.0-redgreen.svg
[chrome-url]: https://www.google.com/intl/zh-CN/chrome/
[node-img]: https://img.shields.io/badge/node-%5E12.4.0-brightgreen.svg
[node-url]: https://nodejs.org/zh-cn/
[electron-img]: https://img.shields.io/badge/electron-%5E5.0.3-orange.svg
[electron-url]: https://electronjs.org/
[umi-img]: https://img.shields.io/badge/umi-%5E2.7.0-red.svg
[umi-url]: https://umijs.org/
