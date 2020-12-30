module.exports = (api, options, rootOptions) => {
  // 修改package.json
  api.extendPackage({
    'name': options.name 
  })
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('../template')
}