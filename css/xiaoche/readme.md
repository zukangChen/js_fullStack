## 界面大框架及经验

水平方向一般禁止滚动条的出现，垂直方向要出现滚动条。
- 水平和垂直两个方向都滚动，页面会摇晃，容易产生误操作而引起用户体验
- 垂直方向一直滚动是开发的主要方式。
-  -webkit-overflow-scrolling: touch;/*使滑动更加舒适，增加用户体验*/


- margin:0 auto; max-width:960px
-   flex 布局
需要了解 flex-grow按比例放大  flex-basis  flex-shrink 按比例缩小  flex-wrap
当网页有Pc端到某mobile时,缩小阵仗

# 经验 简单的适配pc 到 mobile ，这样可以照顾所有的用户。 这样在Pc端就可以大手大脚一点，max-width  margin:0 auto,  在mobile上 flex-shrink 让关键部分坚挺一点
-   flex: 1;把多余的都给这个盒子 
-   flex-grow: 1; 把多余的空间按照flex-grow的比例分配给盒子
-  