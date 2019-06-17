// ref:
// - https://umijs.org/plugin/develop.html

const { ipcRenderer } = require('electron');


module.exports = function (api, options) {

  // Example: output the webpack config
  api.onDevCompileDone(({ isFirstCompile, stats }) => {
    // handle with stats
    console.log('*****************isFirstCompile', isFirstCompile);
    ipcRenderer.send('reload', 'reload');
  });
};
