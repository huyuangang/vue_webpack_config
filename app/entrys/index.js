
var path = require('path')
var pageArr = ['index']

var entrys = {}

pageArr.forEach(item => {
  entrys[item] = path.resolve(__dirname, `../pages/${item}/index.js`)
})

module.exports = entrys
