var express = require("express");
var app = express();
var hostName = '127.0.0.1';
var port = 9999;
 
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});
 
app.get("/getDatas",function(req,res){
    let data = [
        {
          name:'java',
          price:120,
          src:'1.jpg'
        },
        {
          name:'javascript',
          price:150,
          src:'2.jpg'
        },
        {
          name:'node',
          price:170,
          src:'3.jpg'
        },
        {
          name:'css',
          price:160,
          src:'4.jpg'
        },
      ]
      let obj = {
          code:'200',
          data:data
      }
    res.end(JSON.stringify(obj));
})
 
app.listen(port,hostName,function(){
 
   console.log(`服务器运行在http://${hostName}:${port}`);
 
});