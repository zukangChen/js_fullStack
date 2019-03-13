# WEUI
来自于微信的前端开发框架，
- 微信生态 公众号 小程序
weui.css 在基础上做开发
- App生态 ： 内嵌的html
- pc端 传统网站 Bootstrap

- 界面的编写过程
  - Html结构，独立于样式
    DOM文档流 从左到右，从上到下
    - 取类名很重要
    国际版本的BEM规范
    Block 区块 weui-cell
    weui-button 30-50个复用的组件
    Element元素:weui-cell__hd weui-cell__bd weui-cell__ft
    有一些通用的词汇 hd + bd + ft
    
  - 再写样式

  - 离开文档流
    里面的元素不在受其影响，before absolute脱离了正常的文档流
    weui-cells border-top 使用盒子模型，元素在页面上的站位，是需要综合考虑 内容w*h
    padding border margin position等因素需要考虑

- 1px 边框
  css 像素 1px 在手机里
  硬件物理像素 retina 2px  3倍retina 3px
  使用transform scaleY(0.5)压一下
  其实我们的浏览器不会处理小数点像素 transform-origin:基点(根据这个点来做变化，这个点是不动的)上边线，从下往上压用transform: scaleY();

- flex 弹性布局
  不收块级元素的约束，他的内部是一个新世界，弹性布局是父与子们的一起的布局，其好用的对齐方式 aligin-items (纵轴对齐居中) jiustify-content(横轴)，在一堆子元素中设置flex:1这个元素成为主元素，其他的元素占完自己该占的盒子模型的内容后，余下的空间都交给主体元素。