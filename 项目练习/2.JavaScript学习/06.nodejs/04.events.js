//【Node.js 事件循环】

/*事件驱动程序
Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。
当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。
*/
//Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，如下实例：

/*
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);
// 触发事件
eventEmitter.emit('eventName');

*/

//【实例】
// 引入 events 模块
var events = require("events");
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
   //【3】
   console.log("连接成功。"); //【4】

   // 触发 data_received 事件
   eventEmitter.emit("data_received"); //【5】
};

// 绑定 connection 事件处理程序
eventEmitter.on("connection", connectHandler); //【2】

// 使用匿名函数绑定 data_received 事件
eventEmitter.on("data_received", function () {
   //【6】
   console.log("数据接收成功。"); //【7】
});

// 触发 connection 事件
eventEmitter.emit("connection"); //【1】

console.log("程序执行完毕。"); //【8】

//【Node 应用程序是如何工作的？】
//在 Node 应用程序中，执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数。

//如果没发生错误，readFile 跳过 err 对象的输出，文件内容就通过回调函数输出。

var fs = require("fs");

fs.readFile("zuse.txt", function (err, data) {
   if (err) {
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("程序执行完毕");
