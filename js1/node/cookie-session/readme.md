## why?
http 无转态的
客户端 服务器 再次请求时知道是谁

## -S
其实就是--save的缩写
将安装的依赖装在"dependencies"上
之后如果打包发给别人可以压缩大小，对方只用npm i就可以在json文件中寻找各个依赖并安装
本地开发安装的node_module
服务器上只需要写的代码 不需要上传的node_module

## cookie 是存在客户端的
js操作:
document.cookie
后端:响应头
Set-Cookie : name1=value1 ; path=/; httponly

浏览器检查所有存储的cookie，把符合当前作用范围的cookie放在http请求头发给服务器

内容:  name:
      value:
      path:规定cookie生效的路径
      httpOnly : true /false  httpOnly的值为true时就不能通过js获取cookie
      max-age: 设置cookie的生存时间，在设置时间过后就会过期


作用范围:
path 
domain
用途 : 会话状态管理，保存用户的个性化设置

## session 
  靠后台语言实现
  有很多个session
  很多个用户sessionID

  ## koa 第三方中间件
  ctx : req+res
  ctx:{
    req,
    res,
  }
  koa-views ejs
  往ctx上拓展80%东西
  ctx : {
    req,
    res,
    render:() =>{}
  }
  调用它提供的render()


## localStrorage  sessionStorage  cookie  session (面试必问)