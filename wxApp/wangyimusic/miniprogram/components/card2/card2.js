// components/card2/card2.js
let currentVideo = null;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mvId :{
      type:Array,
      value:[]
    }
    },
  /**
   * 组件的初始数据
   */
  data: {
    id : null,
    author:[],
    videoimage: "block",
    currentVid: null
  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的方法列表
   */
  methods: {
     //点击播放按钮，封面图片隐藏,播放视频
  play(event){
      if(this.data.currentVid !== null){
        currentVideo.pause();
      }
      const vid = event.target.dataset.vid;
      if (vid){
        currentVideo = wx.createVideoContext(`${vid}`);
        currentVideo.play();
       this.setData({
        currentVid:vid
       })
      }
    }
  },
  // ready: function () {
  //   var data = this.properties.newMv;
  //   console.log(data);
  //   this.setData({
  //     author : this.properties.newMv
  //   })
   
  //   }
})
