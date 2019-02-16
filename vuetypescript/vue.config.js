const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    configureWebpack: config => {
        //配置cdn
        config.externals = {
                vue: "Vue",
                vuex: "Vuex",
                "vue-router": "VueRouter",
                "element-ui": "ELEMENT",
                jquery: 'jQuery',
            }
            //去除console日志
        config.plugins.push(
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true,
                        pure_funcs: ['console.log'] //移除console
                    },
                },
                sourceMap: false,
                parallel: true,
            }))
    }


}