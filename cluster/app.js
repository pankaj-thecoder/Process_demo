const express=require("express");
const os=require("os");
const cluster=require("cluster");
const app=express();
const numCpu=os.cpus().length;

app.get('/',(req,res)=>{
    for(let i=0;i<1e8;i++){

    //some long task
  
}
res.send("ok");
})
// if(cluster.isMaster){
//     for(let i=0;i<numCpu;i++){
//         cluster.fork();
//     }
// }
// else{
//     app.listen(3001,()=>{
//         console.log(`server${process.pid}@http://localhost:3001`)
//     })
// }
app.listen(3001,()=>{
    console.log(`server${process.pid}@http://localhost:3001`)
})

