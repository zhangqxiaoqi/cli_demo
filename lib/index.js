/*
 * @Descripttion:
 * @version:
 * @Author: 张齐
 * @Date: 2020-09-23 19:41:09
 * @LastEditors: 张齐
 * @LastEditTime: 2020-09-23 19:41:19
 */
const program = require('commander');
const config = require('../package.json');
program
    .version(config.version, '-v, --version')
    .usage('<command> [项目名称]')
    .command('init', '创建项目')
    .command('update', '更新项目版本')
    .parse(process.argv);
