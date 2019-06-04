//app.js
App({
  onLaunch: function () {
    
    
  },
  globalData: {
    userInfo: null,
    API_BASE: 'http://neteasecloudmusicapi.zhaoboy.com',
    songListId:null,
    getSongId:null,
    userId: null
  },
   //登录
   GetUserData:function(){
    return  new Promise((resolve, reject) => {
      //异步一定要有个回调函数
      wx.request({
        url: 'http://neteasecloudmusicapi.zhaoboy.com' + '/login/cellphone?phone=15770533721&password=czk1997',
  
        data: {
  
        },
        success: res => {
          console.log(res);
          this.globalData.userId = res.data.account.id;
          resolve();  
  
        }
      })
    });
  },
})
