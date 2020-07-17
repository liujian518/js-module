define(function (require, exports, module) {
    //引入依赖模块(同步)
    function show() {
        let module2 = require('./module2')
        console.log('同步引入依赖模块2 ' + module2.msg)
    }
    exports.showModule2 = show
    
    //引入依赖模块(异步)
    function showAsync() {
        require.async('./module3', function (module3) {
            console.log('异步引入依赖模块3 ' + module3.msg)
        })
    }
    exports.showModule3 = showAsync

})