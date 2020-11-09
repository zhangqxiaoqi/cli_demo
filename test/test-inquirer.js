/*
 * @Descripttion:
 * @version:
 * @Author: 张齐
 * @Date: 2018-09-11 14:16:41
 * @LastEditors: 张齐
 * @LastEditTime: 2020-09-30 17:59:57
 */
const inquirer = require('inquirer');

// inquirer
//     .prompt([
//         {
//             name: 'projectName',
//             message: '项目的名称',
//             default: 'tt',
//         },
//         {
//             name: 'projectVersion',
//             message: '项目的版本号',
//             default: '1.0.0',
//         },
//         {
//             name: 'projectDescription',
//             message: '项目的简介',
//             default: `A project named tt`,
//         },
//     ])
//     .then(answers => {
//         console.log(answers);
//     });

const promptList = [
    {
        type: 'confirm',
        message: '是否使用监听？',
        name: 'watch',
        prefix: '前缀',
    },
    {
        type: 'confirm',
        message: '是否进行文件过滤？',
        name: 'filter',
        suffix: '后缀',
        when: function (answers) {
            // 当watch为true的时候才会提问当前问题
            return answers.watch;
        },
    },
];
const promptListA = [
    {
        type: 'list',
        message: '请选择：',
        name: 'watch',
        choices: ['Apple', 'Pear', 'Banana'],
    },
];

const aa = async () => {
    const result = await inquirer.prompt(promptListA);
    console.log(result);
};
aa();
