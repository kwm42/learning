const request = require('superagent');


exports.testRequest = function() {
  request.get('http://www.baidu.com')
    .end(function(err, res) {
      console.log(err, res);
    })
}