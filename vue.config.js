const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
});

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/https://github.com/Emmyinkk/vuejs-test.git/" : "/"
}
