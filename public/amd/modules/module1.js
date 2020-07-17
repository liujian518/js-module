// 定义没有依赖的模块
define(function () {
  let _moduleName = 'module';
  function getName() {
    return _moduleName;
  }
  return { getName } // 暴露模块
})