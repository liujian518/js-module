require.config({
  paths: {
    module1: './modules/module1',
    module2: './modules/module2',
    // 第三方库模块
    jquery: './libs/jquery.min'
  }
})
require(['module2','jquery'], function(module2,jquery) {
  console.log(module2.getFullName());
  module2.setFirstName('AMD-AMD');
  console.log(module2.getFullName());
  console.log(module2._firstName);
  jquery('#moduleId').html("<i>My name is jquery-module</i>");
})