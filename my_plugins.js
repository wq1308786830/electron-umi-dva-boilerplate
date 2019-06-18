// ref:
// - https://umijs.org/plugin/develop.html
const exec = require('child_process').exec;

module.exports = function(api, options) {

  // Example: output the webpack config
  api.onDevCompileDone(({ isFirstCompile, stats }) => {
    // handle with stats
    console.log('electron start!');
    if (isFirstCompile) {
      // exec('npm run electron-dev');
    }
  });
};
