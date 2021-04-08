const path = require('path');        //引入path模块
const CompressionPlugin = require("compression-webpack-plugin")
function resolve(dir) {
    return path.join(__dirname, dir)  //path.join(__dirname)设置绝对路径
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            //set第一个参数：设置的别名，第二个参数：设置的路径
            .set('@', resolve('./src'))
            .set('assets', resolve('./src/assets'))
            .set('components', resolve('./src/components'))
            .set('views', resolve('./src/views'))
            .set('network', resolve('./src/network'))
            .set('common', resolve('./src/common'))
            if (process.env.NODE_ENV === 'production') {
                config.plugin('compressionPlugin').use(new CompressionPlugin({
                test: /\.js$|.\css|.\less/, // 匹配文件名
                threshold: 10240, // 对超过10k的数据压缩
                deleteOriginalAssets: false // 不删除源文件
                }))
            }
    },
    pages: {
        index: {
            entry:'src/main.js',
            title:'MyMall'
        }
    },

    productionSourceMap: false
}