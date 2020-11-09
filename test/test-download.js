/*
 * @Descripttion:
 * @version:
 * @Author: 张齐
 * @Date: 2018-09-11 14:16:41
 * @LastEditors: 张齐
 * @LastEditTime: 2020-09-23 16:18:40
 */
const download = require('download-git-repo');
const ora = require('ora');
const url = 'direct:https://code.haiziwang.com/fe_web/pcadmin/marketing-tools-admin.git';
const spinner = new ora({
    text: `正在下载项目模板，源地址：${url}`,
});
spinner.start();

download(url, './tmp', { clone: true }, function (err) {
    if (err) {
        spinner.fail();
    } else {
        // 下载的模板存放在一个临时路径中，下载完成后，可以向下通知这个临时路径，以便后续处理
        spinner.color = 'yellow';
        spinner.text = '🍎';
        spinner.succeed();
    }
});
