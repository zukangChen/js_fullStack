## h5 
1. flex 弹性布局（按比例分配） 特别适合移动端大小弹性 支持不同的设备
   display: flex|block
   块级元素 div.keys
- .keys 内部有什么异常？
 9个.key  被flex管理起来
 - 水平居中 justify-content 水平 主轴
 - align-items 纵轴居中
 2. 相对单位
 - vh 相对于屏幕
 - rem 相对于html 根元素
 - px 是绝对大小 不适用与移动

- e.keyCode指示哪个键被按下，给出该键的索引值（按键码）
js控制html5 audio的暂停( audio.pause() )、播放( audio.play() )

 - add(class1, class2, ...) 在元素中添加一个或多个类名，如果已经类名已经存在，则不会添加
remove(class1, class2, ...) 移除元素中一个或多个类名
contains(class) 判读指定的类名是否在元素中存在，如果存在，则返回true；否则返回false
item(index) 返回类名在元素中的索引值，该值从0开始
toggle(class, true|false) 如果第二个参数存在且为false，则强制移除指定的类名；如果第二个参数存在且为true，则强制添加指定的类名