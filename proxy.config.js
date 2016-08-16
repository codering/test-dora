'use strict';

var mock = {
   '/*': 'http://localhost:8700/output', // 全部代理到output目录
};

require('fs').readdirSync(require('path').join(__dirname + '/mock'))
  .forEach(function (file) {
    Object.assign(mock, require('./mock/' + file));
  });

module.exports = mock;