# 作用域 Scope
document 也叫DOM 
  getElementsByTagName
  getElementsByClassName
  querySelector
  querySelectorAll
window 也叫BOM
  全局定义了 var name="yh";
  全局变量  前端js的全局就是window
  局部变量  function(){}
  js 是一个内嵌在浏览器中的脚本语言，它与其他语言不一样的地方在于他有一个顶级的window,全局变量挂在在window上，所以console.log(name);console.log(window.name);都可以
  window 类型 可以用typeof得到某个对象的类型
  数值 字符串 布尔值 null undefine  
  Symbol object
  const let 比var 优秀的地方是他遵守块级作用域
  全局 ->函数局部 ->块级作用域 
  scope(范围)

  setTimeout是一个异步的内置函数，for循环是立即同步执行的，但1000 之后 var i =0 经过for循环已经变成了10
  let 块级作用域 for{块级作用域 let}循环的每一次,你都可以找到那一时刻的i。