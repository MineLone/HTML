/*
        // 获取cookie 直接调用
        document.cookie;

        // 设置cookie 直接赋值 字符串
        document.cookie = "username=John Doe";

        // 设置3天过期
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + 3);
        document.cookie = "username=li;expires=" + oDate;

        // 设置 cookie 过期时间 expires参数
        document.cookie =
          "username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";

        // path 参数告诉浏览器 cookie 的路径
        document.cookie =
          "username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";

        // 删除cookie 方法 设置过期时间
        var oDate = new Date();
        oDate.setDate(oDate.getDate() - 1);
        document.cookie = "username=li;expires=" + oDate;

    */

// 封装cookie 函数

// name：输入cookie的名字；
// value: 输入cookie的值；
// day: 输入过期的时间 （天数）；

// 设置cookie函数
function setCookie(name, value, day) {
  //获取当前时间
  var oDate = new Date();
  //对设置cookie时间进行赋值
  oDate.setDate(oDate.getDate() + day);
  // 设置cookie
  document.cookie = name + "=" + value + ";expires=" + oDate;
}

// 读取cookie记录
function getCookie(name) {
  //遍历所有的cookie记录进行记录
  var str = document.cookie;
  //字符串分割的形式转换成数组
  var arr = str.split("; ");
  //遍历数组 通过name
  for (var i = 0; i < arr.length; i++) {
    //分割字符串
    var arr1 = arr[i].split("=");

    //用元素对数组进行取值判断 匹配到后 返回
    if (arr1[0] == name) {
      return arr1[1];
    }
  }
}

//删除cookie函数
function removeCookie(name) {
  setCookie(name, 1, -1);
}
