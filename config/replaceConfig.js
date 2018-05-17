var replace = require('replace')
var paths = require('../config/paths')

function modify () {
  replace({
    regex: '132132131',
    replacement: '1',
    paths: [paths.appSrc],
    recursive: true,
    silent: true
  })
}
module.exports = {
  modify: modify
}
