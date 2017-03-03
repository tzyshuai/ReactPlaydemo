var Server = require('./helper/server');
var path = require('path');
var config = require('./webpack.dev.config');

var options = {
  contentBase: path.join(__dirname, './app'),
  hot: true
};

/*
 *   参数一 ： 当前环境配置
 *   参数二 : 额外配置、
 * 	   参数三 ： 自动打开浏览器的主机地址
 * 	   参数四 ： 端口号
 */
Server(config, options, 'localhost', 3000);