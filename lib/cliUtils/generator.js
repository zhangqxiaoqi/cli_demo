/*
 * @Descripttion:
 * @version:
 * @Author: 张齐
 * @Date: 2020-09-23 16:47:21
 * @LastEditors: 张齐
 * @LastEditTime: 2020-09-28 19:47:19
 */
const Metalsmith = require('metalsmith');
const Handlebars = require('handlebars');
const rm = require('rimraf').sync;
const fs = require('fs');
const path = require('path');
module.exports = function (metadata = {}, src, dest = '.') {
    if (!src) {
        return Promise.reject(new Error(`无效的source：${src}`));
    }
    console.log(path.resolve(`${src}/package.json`));
    const { templateVersion } = JSON.parse(fs.readFileSync(path.resolve(`${src}/package.json`)).toString());
    console.log(templateVersion);
    return new Promise((resolve, reject) => {
        Metalsmith(process.cwd())
            .metadata(metadata)
            .clean(false)
            .source(src)
            .destination(dest)
            .use((files, metalsmith, done) => {
                const meta = metalsmith.metadata();
                // 目前仅定义替换package.json文件
                Object.keys(files)
                    .filter(x => x.includes('package.json'))
                    .forEach(fileName => {
                        const t = files[fileName].contents.toString();
                        files[fileName].contents = Buffer.from(Handlebars.compile(t)(meta));
                    });
                done();
            })
            .build(err => {
                rm(src);
                err ? reject(err) : resolve({ dest, templateVersion });
            });
    });
};
