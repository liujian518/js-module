import { setModuleName } from './es6.module'

export default {
    name: 'defalut name',
    setName(text) {
        this.name = text;
    },
    getName() {
        return this.name;
    },
    setChangeModuleName() {
        setModuleName('mddule1 change name');
    }
}