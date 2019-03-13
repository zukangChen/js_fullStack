dom event (事件)
- dom 
onclick事件只能注册一个 dom-0
addEventListener('click')可以同时使用多个方法 dom-2
addEventListener('keyup')可以同时使用多个方法 dom-3

- dom 事件流
  捕获(capture)
  window -> document(document.documentElevent) -> body -> 父级 -> 目标元素
  冒泡(bubble)
   window <- document(document.documentElevent) <- body <- 父级 <- 目标元素
   事件按照 dom 流的顺序执行我们的事件回调
   处于目标阶段的时候，事件的调用的顺序取决于事件注册的顺序

   事件代理 (事件委托)
   event-question.html
   原理:冒泡