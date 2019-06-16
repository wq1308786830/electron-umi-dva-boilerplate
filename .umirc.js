// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  publicPath: './',
  history: 'memory',
  hash: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true,
      },
      dynamicImport: false,
      title: 'test_umi',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  proxy: {
    '/api': {
      'target': 'https://nei.netease.com/api/apimock/1d150f1ef158dbd6bb3b95fe12d5400a/',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '/api' },
    },
  },
};
