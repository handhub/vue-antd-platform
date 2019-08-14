module.exports = {
  pages: {
    // root: {
    //   // 应用入口配置，相当于单页面应用的main.js，必需项
    //   entry: 'src/modules/root/app.js',
    //   // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
    //   template: 'public/index.html',
    //   // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
    //   filename: 'root/root.html',
    //   // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
    //   // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //   title: 'root',
    //   // 包含的模块，可选项
    //   chunks: ['chunk-common', 'chunk-root-vendors', 'root']
    // },
    index: 'src/main.js',
    root: 'src/modules/root/app.js',
  },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_PROXY,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  productionSourceMap: false,
  // chainWebpack: config => {
  //   const IS_VENDOR = /[\\/]node_modules[\\/]/
  //   config.optimization.splitChunks({
  //     cacheGroups: {
  //       maker: {
  //         name: `chunk-root-vendors`,
  //         priority: -11,
  //         chunks: chunk => chunk.name === 'root',
  //         test: IS_VENDOR,
  //         enforce: true,
  //       },
  //       index: {
  //         name: `chunk-index-vendors`,
  //         priority: -11,
  //         chunks: chunk => chunk.name === 'index',
  //         test: IS_VENDOR,
  //         enforce: true,
  //       },
  //       common: {
  //         name: 'chunk-common',
  //         priority: -20,
  //         chunks: 'initial',
  //         minChunks: 2,
  //         reuseExistingChunk: true,
  //         enforce: true,
  //       }
  //     }
  //   })
  // }
}