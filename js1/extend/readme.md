Person 由prototype属性来解决它自身构造之外的原型上的属性或方法
原型对象会有他的构造函数 Person.prototype.constructor属性 
谁是第三者？  -- 实例
实例根Person 有什么关系,Person.prototype 有关系

js实例跟类其实不是java等语言的血缘关系
cxq 实例是怎么来的呢？ 它是new出来的
1. Person 函数运行 new 的方式，this指向new Object();
2. cxq 怎么拿到? Person.prototype 原型对象上定义的方法 __proto__ 属性
3. 方法有prototype 属性，值为对象 开支
4. 任何对象都有 __proto__ 属性，指向它的原型对象
5. 原型对象上有一个额外的constructor属性指向谁是他的构造函数

原型链
  
