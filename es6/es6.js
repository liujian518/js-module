import { _moduleName, getModuleName, setModuleName } from './es6.module';
import module1 from './es6.module1'
import $ from 'jquery'
import {Base64} from 'js-base64';

setModuleName("es6 Module");
console.log(getModuleName());
console.log(_moduleName);


module1.setChangeModuleName();
console.log(_moduleName);

// module1.setName('module 1 name');
// console.log(module1.getName());

$('#moduleId').html("<i>My name is jquery-module</i>");
console.log(Base64.encode('My name is jquery-module'));
