//Node.js 创建第一个应用

//1.引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。
//2.创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。
//3.接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。

//【创建 Node.js 应用】
//步骤一、引入 required 模块
var _http = require("http");

//步骤二、使用 http.createServer() 方法创建服务器   listen 方法绑定 5678 端口 函数通过 request, response 参数来接收和响应数据。
_http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain   --    text/html
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // 发送响应数据 "Hello World"
    response.end('<h1>Hello World</h1>\n');
}).listen(5678);

// 终端打印如下信息
console.log('打印成功')
console.log('Server running at http://127.0.0.1:5678/');