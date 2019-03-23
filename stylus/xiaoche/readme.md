不再写css，写的是css的预编译语言stylus
它的优点：快
一套语法支持现代css的开发，因为它有compile的过程  stylus style.styl -o style.css  
-o output 输出的

stylus -w style.styl -o style.css  
-w 是一直监听style.styl文件的修改，实时生成style.css文件

1. 跟css的规则说goodbye
   {} : ; 取而代之的是tab

2. stylus 提供嵌套功能 可以帮我们补上前面的选择器 现在我们的css就模块化了 从此css就有编程的感觉了

3. &运算符 
    依然使用tab缩进，但是它与上一级同级，适合于同一个元素多个类名，或者伪类，伪状态

4. 变量定义
    将常用的，重复使用
    css不是编程语言，它是表达性的
    在最上面统一定义后，可以修改一处，所有使用了此变量的地方都会跟着修改成为网站的风格

# css语法
1. overflow:hidden
2. flex aligin-items(在父元素中使用) 可以解决vertical-align(在子元素中使用)有时不好解决的情况， vertical-align 兄弟之间 img+兄弟
3. text-rendeing: optimizeLegibility(抗锯齿 )使在高清手机上的文字的边缘不出现锯齿(也就是不模糊)
4. flex-shrink:0 flex-grow
5. 第几个元素的选择
   :first-child :last-child
   :nth-child(2n) :nth-child(2n+1)
6. -apple-system