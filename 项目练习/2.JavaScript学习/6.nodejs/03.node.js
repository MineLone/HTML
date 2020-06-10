//【Node.js 回调函数】

//一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。

//【回调函数一般作为函数的最后一个参数出现：】
//function foo1(name, age, callback) { }
//function foo2(value, callback1, callback2) { }

var _fs = require("fs");
var data = _fs.readFileSync('zuse.txt');
//toString方法执行同步操作
console.log(data.toString());
console.log("我是最后一个程序----------程序执行结束!");


var _fs = require("fs");

_fs.readFile('zuse.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("我是最后一个程序----------程序执行结束!");