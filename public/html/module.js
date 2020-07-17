(function (window) {
    let _moduleName = 'module';

    function setModuleName(name) {
        _moduleName = name;
    }

    function getModuleName() {
        return _moduleName;
    }
    window.moduleA = { _moduleName, setModuleName, getModuleName }
})(window)