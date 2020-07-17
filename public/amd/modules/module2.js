// 定义有依赖的模块
define(['module1'], function (module1) {
  let _firstName = 'AMD';
  function getFullName() {
    return _firstName + ' ' + module1.getName();
  }
  function setFirstName(name) {
    _firstName = name;
  }
  // 暴露模块
  return { _firstName, getFullName, setFirstName }
})