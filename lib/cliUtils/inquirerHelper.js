/*
 * @Descripttion:
 * @version:
 * @Author: 张齐
 * @Date: 2020-09-30 17:10:26
 * @LastEditors: 张齐
 * @LastEditTime: 2020-09-30 18:35:05
 */
const inquirer = require('inquirer');
/**
 *创建文件询问
 */
const creatFloderConfirm = async () => {
    return await inquirer.prompt([
        {
            name: 'buildInCurrent',
            message: '当前目录为空，且目录名称和项目名称相同，是否直接在当前目录下创建新项目？',
            type: 'confirm',
            default: true,
        },
    ]);
};
/**
 *创建项目询问
 */
const creatProjectConfirm = async projectName => {
    return await inquirer.prompt([
        {
            name: 'projectName',
            message: '项目的名称',
            default: projectName,
        },
        {
            name: 'projectVersion',
            message: '项目的版本号',
            default: '1.0.0',
        },
        {
            name: 'projectDescription',
            message: '项目的简介',
            default: `A project named ${projectName}`,
        },
    ]);
};
/**
 *安装NPM询问
 */
const creatNpmInstallConfirm = async () => {
    return await inquirer.prompt([
        {
            name: 'install',
            message: '立即安装项目依赖包么(安装过程可能过久)？',
            type: 'confirm',
            default: true,
        },
    ]);
};

/**
 * 选择模板询问
 * @param {*} temList
 */
const choseTemList = async temList => {
    const list = temList.map((item, index) => {
        return `${index + 1}:${item.name}${+item.source === 0 ? '【官方】' : '【自定义】'}`;
    });
    const chosedResult = await inquirer.prompt([
        {
            type: 'list',
            message: '请选择您需要的模板：',
            name: 'temName',
            choices: list,
        },
    ]);
    const index = chosedResult.temName.split(':')[0];
    return temList[index - 1] || {};
};
module.exports = {
    creatFloderConfirm, //创建文件询问
    creatProjectConfirm, //创建项目询问
    creatNpmInstallConfirm, //安装NPM询问
    choseTemList, //选择模板询问
};
