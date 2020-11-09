/*
 * @Descripttion:
 * @version:
 * @Author: 张齐
 * @Date: 2020-09-30 16:39:28
 * @LastEditors: 张齐
 * @LastEditTime: 2020-09-30 17:50:38
 */
const chalk = require('chalk');
const Alphabet = require('alphabetjs');
const logSymbols = require('log-symbols');

const installSuccess = () => {
    const str = Alphabet('h5cli', 'planar');
    console.log(logSymbols.success, chalk.green('创建成功:)'));
    console.log(chalk.gray('\n项目详细操作请阅读README.md'));
    console.log(chalk.yellow(str));
};

module.exports = { installSuccess };
