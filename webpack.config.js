module.exports = {
    // webpack4需要添加这个配置，development为开发环境，production为生产环境
    mode: "development",
    entry:  __dirname + "/es6/es6.js", // 之前提到的唯一入口文件
    output: {
        path: __dirname + "/dist", // 打包后的文件存放的地方
        filename: "index.js" // 打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./dist", // 本地服务器所加载的页面所在的目录
        inline: true // 实时刷新
    } 
}