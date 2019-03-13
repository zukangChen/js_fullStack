class 类 js 现在也有了
es5没有class 关键字，那他怎么做面对对象呢？
js是面对对象的，用Function是一等对象
 Player()这样作为普通函数调用
new Player();这样是作为类的构造函数被运行，
function Player(){this}里的this一直都在，他是函数里的一个常在，相当于一个指针，this指向一个Object{} this.name=name;

函数运行方式的不同，里面的this 指向是不同的
当它当作普通函数被运行时，this指针是没有使命的，但他会指向全局，在前端指向的是全局window,在后端指向的是global.
当函数作为构造函数被运行时new Player();,this会指向实例化对象，这个过程就是构造函数需要的过程，

- 函数可以用来构造类，这是js通过this来实现的
- this 是一直在的，他是一个指针，函数的运行方式，this指向不一样
    普通函数他的this是指向全局的window||global,但如果代码启动严格模式，这个this就会变成undefine
- new 过程中发生了什么
 new Player();将函数作为构造函数运行，this指向Objec{};
 this=> {} consrtructor
 this.name= name;
 - 构造函数