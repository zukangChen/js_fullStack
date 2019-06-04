// miniprogram/pages/songSquare/songSquare.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:[],
    TabCur: 0,
    isActive : 0,
    scrollLeft:0,
    name : '',
    list:['推荐','精品','华语','民谣','轻音乐','电子','摇滚'],
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'http://p1.music.126.net/9R7PD9p03LLxykyibHiKEw==/109951163804524121.jpg?param=140y140'
    }, {
      id: 1,
        type: 'image',
        url: 'http://p1.music.126.net/1zOMcO4a3Pxo8c5xhiVZ1Q==/109951163637220918.jpg?param=140y140',
    }, {
      id: 2,
      type: 'image',
      url: 'http://p1.music.126.net/O4ee-Bl6Z7R-8rikBflpzQ==/109951164036483747.jpg?param=140y140'
    }, {
      id: 3,
      type: 'image',
      url: 'http://p1.music.126.net/JXo18VuEJ4J6ymOn1QhBlQ==/109951164068405964.jpg?param=140y140'
    }],
  },
  //
  getSong(e){
    console.log(e);
    var id = e.currentTarget.dataset.id;
    //跳转到歌单详情页面
    wx.navigateTo({
      url: '/pages/songDetail/songDetail'
    })
  ,
    app.globalData.getSongId = id;
  },
  tabSelect(e) {
    var name = e.currentTarget.dataset.name;
    console.log(name);
    wx.request({
      url: app.globalData.API_BASE + '/top/playlist?cat='+name,

      data: {
        idx: 1
      },
      success: res => {
        console.log(name);
        console.log(res);
        this.setData({
          images:res.data.playlists
        })
        // console.log(this.data.images)
        wx.hideLoading();
      }
    }),
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60,
      name : name
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.towerSwiper('swiperList');
    wx.request({
      url: app.globalData.API_BASE + '/top/playlist/highquality',

      data: {
        idx: 1
      },
      success: res => {
        console.log(res.data.playlists);
        this.setData({
          images:res.data.playlists
        })
        wx.hideLoading();
      }
    }),
    //歌单种类列表
    wx.request({
      url: app.globalData.API_BASE + '/playlist/catlist',

      data: {
        idx: 1
      },
      success: res => {
        console.log(res.data.sub);
        this.setData({
          list:res.data.sub
        })
        wx.hideLoading();
      }
    })
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
    // this.setData({
    //   TabCur :  app.globalData.songListId
    // })
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

  },
    DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }
})