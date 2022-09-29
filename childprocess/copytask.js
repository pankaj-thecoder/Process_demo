const fs=require("fs-extra");

async function copytask() {
  await fs.copy('./myfolder','./newfolder')
   console.log("files copied using child")
  

   
}
process.on("message",(message)=>{
    if(message==="start"){
        copytask();
        process.send("success");
    }
})