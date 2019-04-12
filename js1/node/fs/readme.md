node 让js来到了后端

服务器，Linux
文件系统操作 操作文件系统fs
连接数据库 db

没有DOM
文件读取 是要花时间的 花在定位文件(参数1)，打开文件，将文件内容读到内存中，输出到命令行
要花时间的在js中就是异步的
解决异步：
1. callback(回调函数)
    fs.readFile(path,'utf8',function(err,data){

    })
2. promise
    分开，Promise是类，用于处理耗时异步问题的类，为了防止回调地狱，看到耗时问题就用出一个Promise实例
    resolve将控制权交给then 将结果通过resolve(data)传给then
    reject 失败 执行catch(e){}