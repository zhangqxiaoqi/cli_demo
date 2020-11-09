/*
 * @Descripttion:文件相关工具
 * @version:
 * @Author: 张齐
 * @Date: 2020-09-23 20:18:33
 * @LastEditors: 张齐
 * @LastEditTime: 2020-09-27 20:53:38
 */
const glob = require('glob');
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');

const { FILE_STATUS_ENUM } = require('../common/index');

/**
 *检查文件状态
 * @param {*} projectName
 */
const checkFileStatus = projectName => {
    const list = glob.sync('*'); // 遍历当前目录
    const rootName = path.basename(process.cwd()); // 获取执行当前命令的文件夹名称字符串
    let status = FILE_STATUS_ENUM.NO_EXSIT;
    if (list.length) {
        // 如果当前目录不为空
        if (
            list.filter(name => {
                const fileName = path.resolve(process.cwd(), path.join('.', name));
                const isDir = fs.statSync(fileName).isDirectory();
                return name.indexOf(projectName) !== -1 && isDir;
            }).length !== 0
        ) {
            status = FILE_STATUS_ENUM.EXSIT;
        } else {
            status = FILE_STATUS_ENUM.NO_EXSIT;
        }
    } else {
        status = FILE_STATUS_ENUM.FOLDER_EMPTY;
    }
    return status;
};
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

module.exports = {
    checkFileStatus, //检查文件状态
    creatFloderConfirm, //创建文件询问
};
