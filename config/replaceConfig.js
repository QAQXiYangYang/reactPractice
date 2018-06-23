var replace = require('replace')
var paths = require('../config/paths')

function modify () {
  // process.argv返回命令行脚本的各个参数组成的数组。可以获取bat里面的参数。
  // 会将bat命令以空格为标记，拆成一个数组。索引0是node命令，索引1是运行路径。索引2开始就是参数了。
  process.argv.forEach(function (val, index, array) {
    if (index <= 0) {
      console.log('我传入的第一个参数--->' + array[2])
    } else {
      return
    }
    let channel = process.argv[2]
    if (channel) {
      replace({
        regex: 'ad132132131',
        replacement: '1',
        paths: [paths.appSrc],
        recursive: true,
        silent: true
      })
    }
  })
}
module.exports = {
  modify: modify
}
