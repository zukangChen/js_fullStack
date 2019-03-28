类型检测是js的考点

<!-- new Array() []  -->
object
Array是一个可遍历的对象  for(in)
JSON object 对象字面量 是一个可枚举的对象  for(key in)
function是一等对象  

typeof不靠谱

1. Object.prototype.toString()用来弥补typeof半吊子的，这个的返回值是一个字符串"[Object Object]"
2. 借给Array用
    Object.prototype.toString.call([]),返回值为"[Object Array]"
    函数上就有call(),call能动态指定内部this的指向

3. js的面向对象
   Type{isString}

4. 立即执行函数 + 嵌套函数定义 这就是闭包 
  type 就在这些嵌套函数被调用时可以引用到