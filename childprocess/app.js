const express = require("express");
const app = express();
const { fork } = require("child_process");
const fs = require("fs-extra");



app.listen(3002, () => {
    console.log("server running on port 3002");
});
app.get("/one", async (req, res) => {
    fs.emptyDirSync('./oldfolder');

    await fs.copy('./myfolder', './oldfolder')
    console.log("file copied using main process")
    res.send(true);
})
app.get("/two", async (req, res) => {

    fs.emptyDirSync('./newfolder');

    const child = fork("./copytask.js");
    child.send("start");
    child.on("message", (confirmation) => {
        if (confirmation == "success") {
            console.log("confirmation from child:", confirmation)
         }
        res.send(true);
    });



})
