/*
 * @Descripttion:
 * @version:
 * @Author: 张齐
 * @Date: 2020-09-23 19:42:43
 * @LastEditors: 张齐
 * @LastEditTime: 2020-09-30 18:31:04
 */
const path = require('path');
const fs = require('fs');
const download = require('./cliUtils/download');
const generator = require('./cliUtils/generator');
// 命令行交互工具
const program = require('commander');
const process = require('process');
const spawn = require('react-dev-utils/crossSpawn');
const logSymbols = require('log-symbols');
const chalk = require('chalk');
const { checkFileStatus, creatFloderConfirm } = require('./cliUtils/fileTools');
const inquirerHelper = require('./cliUtils/inquirerHelper');
const { FILE_STATUS_ENUM } = require('./common/index');
const message = require('./cliUtils/message');
const request = require('./cliUtils/request');
const init = async () => {
    try {
        program.usage('<project-name>').parse(process.argv);
        let projectName = program.args[0];
        // 如果没有项目名称
        if (!projectName) {
            program.help();
            return;
        }
        // 检查要创建的项目文件状态
        const fileStatus = checkFileStatus(projectName);
        // 如果文件夹已存在
        if (fileStatus === FILE_STATUS_ENUM.EXSIT) {
            console.log(`项目${projectName}已经存在`);
            return;
        }
        // 如果当前目录为空且父文件夹和项目名相同
        if (fileStatus === FILE_STATUS_ENUM.FOLDER_EMPTY) {
            const confirmResult = await inquirerHelper.creatFloderConfirm();
            if (confirmResult.buildInCurrent) {
                projectName = '.';
            }
        }
        // 交互获取需要创建项目的信息
        const projectInfo = await inquirerHelper.creatProjectConfirm(projectName);
        // 获取下载数据
        let templist = [];
        const temResult = await request.getTemplateList();
        if (+temResult.data.code === 0) {
            templist = temResult.data.data.temp_configs;
        } else {
            console.log(logSymbols.error, chalk.red('模板列表加载失败'));
            return;
        }
        const chosedTem = await inquirerHelper.choseTemList(templist);
        // 下载
        const downLoadResult = await download(projectName, chosedTem.gitUrl);
        // 修改模板数据
        await generator(projectInfo, downLoadResult, path.parse(downLoadResult).dir);
        // 选择是否安装
        const installResult = await inquirerHelper.creatNpmInstallConfirm();
        if (installResult.install) {
            try {
                process.chdir(projectName);
                const proc = spawn.sync('npm', ['install'], { stdio: 'inherit' });
                if (proc.status === 0) {
                    // 成功提示
                    message.installSuccess();
                }
            } catch (err) {
                throw new Error(err);
            }
        } else {
            // 成功提示
            message.installSuccess();
        }
    } catch (error) {
        console.log(logSymbols.error, chalk.red(error));
    }
};
init();
