
{/* <script src="./http"></script> html引入模块的方式 */}
// require关键字 是js引入一个模块， COMMONJS
const http = require('http');
let i=0;
http 
    .createServer(function(request,response){

        response.end(`hello World ${++i}`);
    })
    .listen(3000);

 