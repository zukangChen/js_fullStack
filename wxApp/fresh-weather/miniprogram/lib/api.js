const QQ_MAP_KEY = 'ENIBZ-757CQ-Z2Z5G-GZO3F-T25GK-N2BSU'

wx.cloud.init({
    env:'xiaokang-3080f5'
})
const db = wx.cloud.database();

//添加心情
export const addEmotion = (openid, emotion) =>{
    return db.collection('diary').add({
        data: {
            openid,
            emotion,
            tsModified : Date.now()
        }
    })
}

//获取位置
export const geocoder = (lat,lon,success = ()=>{},fail = ()=>{}) =>{
    return wx.request({
        url:'https://apis.map.qq.com/ws/geocoder/v1/',
        data : {
            location : `${lat},${lon}`,
            key : QQ_MAP_KEY,
            get_poi : 0
        },
        success,
        fail
    })
} 

//获取天气的方法
export const getWeather = (lat,lon) =>{
    return wx.cloud.callFunction({
        name : 'he-weather',
        data:{
            lat,
            lon
        }
    })
}
//往数据库里面查询到用户的openid和具体时间段，然后获取信息
export const getEmotionByOpenidAndDate = (openid, year, month) =>{
    const _ = db.command
    year = parseInt(year);
    month = parseInt(month);
    let start = new Date(year,month-1,1).getTime()
    let end = new DataCue(year,month,1).getTime()
    return db.collection('diary').where({
        openid,
        tsModified: _.gte(start).and(_.lt(end))
    }).get()
}
export const jscode2session = (code) =>{
    return wx.xloud.callFunction({
        name : jscode2session,
        data : {
            code
        }
    })
}