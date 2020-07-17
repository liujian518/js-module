define(function (require, exports, module) {
    let _moduleName = 'module';

    function setModuleName(name) {
        _moduleName = name;
    }

    function getModuleName() {
        return _moduleName;
    }
    //向外暴露
    module.exports = { _moduleName, setModuleName, getModuleName }
})