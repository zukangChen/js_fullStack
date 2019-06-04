//index.js
const app = getApp()

Page({
  data: {
    bottom:[
      {
        name : '夜间模式',
        icon : '../../images/night.png'
      },
      {
        name : '设置',
        icon : '../../images/set.png'
      },
      {
        name : '退出',
        icon : '../../images/quit.png'
      },
    ],
    more :[
      {
        name : '我的消息',
        icon : '../../images/info.png'
      },
      {
        name : '我的好友',
        icon : '../../images/friend.png'
      },
      {
        name : '个性换肤',
        icon : '../../images/clothes.png'
      },
      {
        name : '听歌识曲',
        icon : '../../images/song.png'
      }
    ],
    item:[
      {
        name : '演出',
        icon : '../../images/show.png'
      },
      {
        name : '商城',
        icon : '../../images/shop.png'
      },
      {
        name : '附近的人',
        icon : '../../images/people.png'
      },
      {
        name : '口袋铃声',
        icon : '../../images/ning.png'
      },
    ],
    friendshare : [],
    list:['我的','发现','朋友','视频'],
    images:[],
    newMv:[],
    mvId:[],
    TabCur: 1 ,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'http://p1.music.126.net/3-M9stP2BZ1f9-a9VUtVrw==/109951164062217336.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'http://p1.music.126.net/jP-MVVH1iRZDT0YOykVS3w==/109951164062226902.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'http://p1.music.126.net/QYws_q5R66G6JwdcaZw6sw==/109951164062261611.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'http://p1.music.126.net/iU4jp0jYBqQPHv8J9IRcKg==/109951164062237220.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'http://p1.music.126.net/3RxlqcjpQwgulljlmfs2Qw==/109951164062210883.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'http://p1.music.126.net/x6LggAUYDUjMLTBAGn2epg==/109951163935064997.jpg?param=140y140'
    }, {
      id: 6,
      type: 'image',
      url: 'http://p1.music.126.net/2MsRpVYW5_rzPi314I3y7g==/109951163841105938.jpg?param=140y140'
    }],
  },

  onLoad: function() {
    let that = this;
    //推荐歌单
      wx.request({
        url: app.globalData.API_BASE + '/top/playlist/highquality',

        data: {
          idx: 1
        },
        success: res => {
          console.log(res);
          this.setData({
            images:res.data.playlists
          })
          wx.hideLoading();
        }
      }),
    //最新MV
    wx.request({
      url: app.globalData.API_BASE + '/mv/first?limit=6',

      data: {
       
      },
      success: res => {
        console.log(res.data.data);
        this.setData({
          newMv:res.data.data
        })
        // Promise.all()
        //获取对应歌手的id
        //
        var mvId = [];
        var newData ={};
        for(let i=0; i<5; i++){
          // console.log(this.data.newMv[i].id)
        //获取对应mv的数据
        wx.request({
          url: app.globalData.API_BASE + '/mv/detail?mvid=' + that.data.newMv[i].id,
  
          data: {
          },
          success: res => {
            // console.log(res);
            newData=Object.assign(this.data.newMv[i] , res.data.data);
            // console.log(newData);
            mvId.push(newData);
            // mvId[i]=newData;
            // console.log(mvId[i])
            wx.hideLoading();
          }
        })
        }
        console.log(newData);
        setTimeout( ()=>{
          this.setData({
            mvId : mvId
          })
          console.log(this.data.mvId);
        },2000)
        wx.hideLoading();
      }
    });
    app.GetUserData().then(that.userState);

  },
  //获取动态信息
  userState(e){
    console.log(666);
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        wx.request({
          url: app.globalData.API_BASE + '/event?pagesize=30&lasttime=-1',
          data: {
              
          },
          success: res => {
            console.log(res);
            this.setData({
              friendshare: res.data.event,
            })
    
          },
        

        })
      },500)
  })
    
  },
  //搜索歌曲
  search(e){
    wx.navigateTo({
      url: '../search/search'
    })
  },
  // this.onLoad.p.then(userState),
  tabSelect(e){
    const id = e.currentTarget.dataset.id;
    this.setData({
      TabCur: e.currentTarget.dataset.id,
    })
  },
  click(e){
    const id = e.currentTarget.dataset.id;
    if(id==1){
      wx.navigateTo({
        url: '../songSquare/songSquare'
      })
    }
    if(id==2){
      wx.navigateTo({
        url: '../songTop/songTop'
      })
    }
  },
  //图片切换时
  cardSwiper(){

  },
  //侧边抽屉
  showModal(e) {
    let that = this;
    //获取用户头像与昵称
    wx.getUserInfo({
      success:function(res) {
        console.log(res);
      that.setData({
        nickName: res.userInfo.nickName,
        avatarUrl: res.userInfo.avatarUrl,
      })
      },
   })
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  }
})
