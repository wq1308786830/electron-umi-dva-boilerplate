// ref:
// - https://umijs.org/plugin/develop.html

module.exports = function (api, options) {

  // Example: output the webpack config
  api.onBuildSuccess(({ stats }) => {
    // handle with stats
    console.log(stats);
  });
};
