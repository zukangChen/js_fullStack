const fs = require('fs');
const files = [];
//一级级在制定目录走下去
const walk = function(path){
fs
    .readdirSync(path)
    .forEach(file => {
        const newPath = path + '/' +file;
        const stat = fs.statSync(newPath);
        console.log(stat);
        if(stat.isFile()){
            if(/\.js$/.test(file)){
                files.push(file);
            }
        }else if (stat.isDirectory()){
            walk(newPath);
        }
        // 文件？
                // js文件？(用正则判断)
        // 目录？
                // 递归
        console.log(file);
    })
    
    // fs.readdir(path,function(err,items){
    //     console.log(items);
    // })
    // console.log('噜啦啦噜啦啦噜啦噜啦啦');
}
walk('./src');
console.log(files);