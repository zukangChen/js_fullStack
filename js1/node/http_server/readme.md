- MVVM  前端新贵
Model 数据  Page({data:{legends:[]}})
View  视图  WXML
VM          {{}} wx:for ...

- MVC   经典的web开发模式
    Model   =>SQL
    View    =>静态页面
    Controller  =>路由

- WebServer 软件程序
Web服务器硬件运行WebServer程序的
通过ip实现http协议 
http://127.0.0.1:3000
3000是一个端口 不只一个服务
3306 是用来做 MySQL服务的
80   是用来做 Web服务的

http
    .createServer(function(request,response){
        response.end('Hello World!');
    })
    .listen(3000)

request  用户 n   WebServer 一直在3000端口上服务
所以 request 就能找到这个店，每个用户到达它会触发事件，触发事件之后它会调用createServer 回调函数，request 用户身份， response 是响应请求的  http 响应之后就断开