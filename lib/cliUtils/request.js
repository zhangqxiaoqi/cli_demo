/*
 * @Descripttion:
 * @version:
 * @Author: 张齐
 * @Date: 2020-09-30 17:32:21
 * @LastEditors: 张齐
 * @LastEditTime: 2020-11-09 20:43:43
 */
const axios = require('axios');

/**
 * 获取模板配置项
 */
const getTemplateList = async function () {
    return {
        data: {
            data: {
                temp_configs: [
                    {
                        name: '测试模板(JS)',
                        gitUrl: 'https://github.com/zhangqxiaoqi/vue-docker-demo.git',
                        source: '0',
                        updateSwitch: true,
                    },
                    {
                        name: '测试模板1(JS)',
                        gitUrl: 'https://github.com/zhangqxiaoqi/vue-docker-demo.git',
                        source: '0',
                        updateSwitch: true,
                    },
                ],
                cli_config: {
                    version: '1.0.1',
                    updateSwitch: false,
                },
            },
            errmsg: [],
            start: 0,
            expires: 4102243200000,
            code: 0,
            message: '成功',
        },
    };
};

module.exports = {
    getTemplateList, //获取模板配置项
};
