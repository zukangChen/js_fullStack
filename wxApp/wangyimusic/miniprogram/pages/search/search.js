// miniprogram/pages/discover/discover.js
    const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:null,
    searchHot : [],
    poster: 'https://p2.music.126.net/hti_a0LADoFMBHvOBwAtRA==/1369991500930171.jpg',
    name: '刚刚好',
    author: '薛之谦',
    src: 'http://m10.music.126.net/20190527001601/a50b490e6d56b2bd1dbc96eebaf0992e/ymusic/ffb9/a7e1/383b/b1a4c190345688313650bfae7ffb54c4.mp3',
    id : null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //热搜
    wx.request({
      url: app.globalData.API_BASE + '/search/hot',

      data: {
      
      },
      success: res => {
        console.log(res.data);
        this.setData({
          searchHot:res.data.result.hots
        })
      }
    });
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')  
  },
  //单击播放音乐
  audioPlay (e){
    console.log(e);
    //获取这首歌的数据
    wx.request({
      url: app.globalData.API_BASE + '/song/url?id='+e.currentTarget.dataset.id,
      data: {
        
      },
      success: res => {
        // console.log(res); 
        let src = res.data.data[0].url;
        this.setData({
          src:src,
          author : e.currentTarget.dataset.singer,
        })
      }
    }),
     //获取这首歌歌曲的信息
     wx.request({
      url: app.globalData.API_BASE + '/song/detail?ids='+e.currentTarget.dataset.id,
      data: {
       
      },
      success: res => {
        // console.log(res)
        // console.log(res.data.songs[0].al.picUrl)
        console.log(e.currentTarget.dataset.index);
        let poster = res.data.songs[0].al.picUrl;
        this.setData({
          currentIndex : e.currentTarget.dataset.index,
          poster:poster,
          name : res.data.songs[0].name
        })
      }
    }),

    setTimeout( ()=>{
      this.audioCtx.play()
    },500)
    
},
  //获取到input框的内容
  forName(e){
    console.log(e.detail.value);
      this.setData({
        keywords : e.detail.value
      })
  },
  //根据keywords查找歌曲
  search(e){
    wx.request({
      url:app.globalData.API_BASE +'/search?keywords='+this.data.keywords,
      success:res =>{
        console.log(res.data.result.songs);
        this.setData({
          searchHot : res.data.result.songs,

        })
      }
    })
  },
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
          let author = this.data.searchHot[index-1].artists[0].name
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
          let author = this.data.searchHot[index+1].artists[0].name
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
    },500)

    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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