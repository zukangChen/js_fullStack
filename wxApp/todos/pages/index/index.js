Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo:{},
    addShow: false,
    addText: '',
    todos:[],
  },
  getUserInfo: function(e) {
    // console.log(e);
    // MVVM编程 响应式 状态
    this.setData({
      userInfo:e.detail.userInfo,
      hasUserInfo:true,
    })
  },
  addTodoShow: function(e){
    this.setData({
      addShow:true,
    })
  },
  addTodoHide: function(e){
    this.setData({
      addShow:false,
    })
  },
  addinput: function(e){
    this.setData({
      addText: e.detail.value,
    })
  },
  addTodo: function(e){
      // - 判断输入框是否有内容
      if (!this.data.addText.trim()){
        return;
      };
        // - todos 界面上 wx:for setData() 
      let todos = this.data.todos;
      todos.push({
        id: new Date().getTime(),
        title: this.data.addText,
        status: '0',
      });
    this.setData({
      todos:todos
    });
     // - 退出输入状态
    this.addTodoHide();
  }
})
