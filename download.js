/*
 * @Descripttion:
 * @version:
 * @Author: 张齐
 * @Date: 2020-09-17 17:22:57
 * @LastEditors: 张齐
 * @LastEditTime: 2020-11-08 15:33:08
 */
const path = require('path');
const ora = require('ora');
const download = require('download-git-repo');

module.exports = function (target, url) {
    let targeturl = `direct:${url}`;
    target = path.join(target || '.', '.download-temp');
    console.log('target', target);
    return new Promise((resolve, reject) => {
        const spinner = ora(`h5cli板，源地址：xxxx`);
        spinner.start();
        download(targeturl, target, { clone: true }, err => {
            if (err) {
                spinner.fail();
                console.log('err', err);
                reject(err);
            } else {
                // 下载的模板存放在一个临时路径中，下载完成后，可以向下通知这个临时路径，以便后续处理
                spinner.succeed();
                resolve(target);
            }
        });
    });
};
