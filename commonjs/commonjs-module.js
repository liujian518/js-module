let _moduleName = 'module';

let map = {
    list:[1,2,3,4],
    obj:{
        a:'test a',
        b:'test b'
    }
}

function getMap(){
    return map;
}

function setModuleName(name) {
    _moduleName = name;
}

function getModuleName() {
    return _moduleName;
}

module.exports = { _moduleName, setModuleName, getModuleName,map,getMap }

// exports._moduleName = _moduleName;
// exports.setModuleName = setModuleName;
// exports.getModuleName = getModuleName;