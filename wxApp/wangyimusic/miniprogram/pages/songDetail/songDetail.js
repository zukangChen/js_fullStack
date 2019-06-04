// miniprogram/pages/songDetail/songDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:null,
    songList:[],
    searchHot:[],
    scrollTop: 0,
    poster: 'https://p2.music.126.net/hti_a0LADoFMBHvOBwAtRA==/1369991500930171.jpg',
    name: '刚刚好',
    author: '薛之谦',
    src: 'http://m10.music.126.net/20190527001601/a50b490e6d56b2bd1dbc96eebaf0992e/ymusic/ffb9/a7e1/383b/b1a4c190345688313650bfae7ffb54c4.mp3',
    id : null,
    // songList:[],
    // scrollTop: 0,
    // poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    // name: '此时此刻',
    // author: '许巍',
    // src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    // id : null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onPageScroll(e){
    // console.log('onPageScroll', e.scrollTop)
    this.setData({
        scrollTop: e.scrollTop,
    })
},
  onLoad: function (options) {
      //获取这个id的歌单详情
      wx.request({
        url: app.globalData.API_BASE + '/playlist/detail?id='+app.globalData.getSongId,
        // url: app.globalData.API_BASE + '/playlist/detail?id=24381616',
        data: {
         
        },
        success: res => {
          console.log(res);
          this.setData({
            searchHot:res.data.playlist.tracks,
            songList : res.data.playlist
          })
          
          wx.hideLoading();
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  audioPlay (e){
      console.log(e);
      //获取这首歌的数据
      wx.request({
        url: app.globalData.API_BASE + '/song/url?id='+e.currentTarget.dataset.tracksid,
        data: {
         
        },
        success: res => {
          console.log(res.data.data[0].url);
          let src = res.data.data[0].url;
          this.setData({
            src:src
          })
        }
      }),
      this.setData({
        author : e.currentTarget.dataset.author,
        name : e.currentTarget.dataset.name,
        poster : e.currentTarget.dataset.poster,
        id : e.currentTarget.dataset.tracksid,
        currentIndex : e.currentTarget.dataset.index,
      })
      setTimeout( ()=>{
        this.audioCtx.play()
      },500)
      
  },
  // audioPlay: function () {
  //   this.audioCtx.play()
  // },
  // audioPause: function () {
  //   this.audioCtx.pause()
  // },
  // audio14: function () {
  //   this.audioCtx.seek(14)
  // },
  // audioStart: function () {
  //   this.audioCtx.seek(0)
  // },
  // funplay: function(){
  //     console.log("audio play");
  // },
  // funpause: function(){
  //     console.log("audio pause");
  // },
  // funtimeupdate: function(u){
  //     console.log(u.detail.currentTime);
  //     console.log(u.detail.duration);
  // },
  // funended: function(){
  //     console.log("audio end");
  // },
  // funerror: function(u){
  //     console.log(u.detail.errMsg);
  // },
  //上一首
  bindLeft(e){
    let song = this.audioCtx;
    console.log(song)
    return  new Promise((resolve, reject) => {
      //异步一定要有个回调函数
      let index = this.data.currentIndex;
      if(index==0){
        index=this.data.searchHot.length
      }
      wx.request({
        url: app.globalData.API_BASE + '/song/url?id='+this.data.searchHot[index-1].id,
  
        data: {
  
        },
        success: res => {
          console.log(res); 
          let src = res.data.data[0].url;
          // let author = this.data.searchHot[index-1].artists[0].name
          let author = this.data.searchHot[index-1].al.name
          this.setData({
            currentIndex : index-1,
            src:src,
            author : author,
          })
        },
      });
       //获取这首歌歌曲的信息
     wx.request({
      url: app.globalData.API_BASE + '/song/detail?ids='+this.data.searchHot[index-1].id,
      data: {
       
      },
      success: res => {
        // console.log(res)
        // console.log(res.data.songs[0].al.picUrl)
        // console.log(e.currentTarget.dataset.index);
        let poster = res.data.songs[0].al.picUrl;
        this.setData({
          poster:poster,
          name : res.data.songs[0].name
        })
      }
    })
    setTimeout( ()=>{
      this.audioCtx.play()
    },500)

    }).then(this.play())
  },
  play(){
    this.audioCtx.play()
  },
  //下一首
  bindRight(e){
    return  new Promise((resolve, reject) => {
      //异步一定要有个回调函数
      let index = this.data.currentIndex;
      if(index==this.data.searchHot.length-1){
        index=-1
      }
      console.log(index)
      wx.request({
        url: app.globalData.API_BASE + '/song/url?id='+this.data.searchHot[index+1].id,
  
        data: {
  
        },
        success: res => {
          console.log(res); 
          let src = res.data.data[0].url;
          let author = this.data.searchHot[index+1].al.name
          this.setData({
            currentIndex : index+1,
            src:src,
            author : author,
          })
        },
      });
       //获取这首歌歌曲的信息
     wx.request({
      url: app.globalData.API_BASE + '/song/detail?ids='+this.data.searchHot[index+1].id,
      data: {
       
      },
      success: res => {
        // console.log(res)
        // console.log(res.data.songs[0].al.picUrl)
        // console.log(e.currentTarget.dataset.index);
        let poster = res.data.songs[0].al.picUrl;
        this.setData({
          poster:poster,
          name : res.data.songs[0].name
        })
      }
    })
    setTimeout( ()=>{
      this.audioCtx.play()
    },1000)

    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})