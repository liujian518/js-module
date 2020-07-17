
define(function (require) {
  let m1 = require('./modules/module1')
  console.log(m1.getModuleName());
  m1.setModuleName('CMD module');
  console.log(m1.getModuleName());
  console.log(m1._moduleName);

  let m4 = require('./modules/module4')
  //m4.showModule2();
  //m4.showModule3();
})
