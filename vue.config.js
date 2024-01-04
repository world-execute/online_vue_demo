const { defineConfig } = require('@vue/cli-service')
const isProd = process.env.NODE_ENV==='production'

// 打包忽略的包
let externals = {}
console.log('环境: ',process.env.NODE_ENV)

if(isProd){
  externals={
    'vue':'Vue',
    'vue-router':'VueRouter',
  }
  console.log('省略的包',externals)
}

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'./',
  configureWebpack:{
    externals
  }
})
