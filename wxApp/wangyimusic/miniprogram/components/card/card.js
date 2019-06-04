// components/card/dard.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    repo:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    music : function(){
      wx.navigateTo({
        url: '/pages/songSquare/songSquare'
      })
    },
    getSong(e){
      console.log(e);
      console.log(this.properties.repo);
      var id = e.currentTarget.dataset.id;
      //跳转到歌单详情页面
      wx.navigateTo({
        url: '/pages/songDetail/songDetail'
      })
    ,
      app.globalData.getSongId = id;
    }
  }
})
