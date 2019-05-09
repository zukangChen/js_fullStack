- 一套好的UI
    app.wxss 全局皮肤

- 组件思想
    界面中相对独立的显示区块，选择区块抽成组件,
    他的意义是界面是由组件构成，不是由标签构成
    组件是可以复用的

- 项目中所有的请求都封装到 api 目录下面
    module.export = require()

- wx.startPullDownRefresh();  onload把生命周期交给onPullDownRefresh()
  api 请求
  wx.stopPullDownRefresh();

- 复杂项目的组件数量比较多 /style/base.wxss 他封装的是多个组件都依赖的基础样式