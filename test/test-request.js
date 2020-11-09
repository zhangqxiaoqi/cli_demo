/*
 * @Descripttion:
 * @version:
 * @Author: 张齐
 * @Date: 2020-09-30 17:36:42
 * @LastEditors: 张齐
 * @LastEditTime: 2020-09-30 17:55:26
 */
const axios = require('axios');

const getTemplateList = async function () {
    const result = await axios.get('https://miniapi.linkkids.cn/common/cms/publish/999/h5_cli_config.json?_platform_num=100100');
    console.log(result.data.data.temp_configs);
};
getTemplateList();
