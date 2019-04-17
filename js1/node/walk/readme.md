- readdir
读目录里的内容  IO操作异步
readdirSync     Async是异步 sync是同步

js 是单线程的，用回调或promise，释放主线程的控制权，主要因为js是前端dom的编程，用户交互比较多
等到执行完后，再通过event-loop机制，拿回控制权(callback resolve),来到了node, js获取了服务器端的能力，readdirDync()