/*
 * @Descripttion:
 * @version:
 * @Author: 张齐
 * @Date: 2020-09-27 20:22:10
 * @LastEditors: 张齐
 * @LastEditTime: 2020-09-27 21:00:29
 */
const { checkFileStatus, creatFloderConfirm } = require('../lib/cliUtils/fileTools');

// console.log(checkFileStatus('aaa'));
const test = async () => {
    const confirmResult = await creatFloderConfirm();
    console.log(confirmResult);
};
test();
