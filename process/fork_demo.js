const express = require("express");
const app = express();
const { fork } = require("child_process");

app.get("/one", (req, res) => {
    const sum = longComputation();
    res.send({
        sum: sum
    })

});
app.get("/two", async (req, res) => {
    const sum = await longComputationpromise();
    res.send({
        sum: sum,

    })

});
app.get("/three", (req, res) => {
    const child = fork("./longtask.js");
    child.send("start");
    child.on("message", (sum) => {
        res.json({
            sum: sum,


        })

    })

});

app.listen(3000, () => {
    console.log("server running on port 3000");
});
function longComputation() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum = sum + i;
    }
    return sum;
}
function longComputationpromise() {
    return new Promise((resolve, reject) => {
        let sum = 0;
        for (let i = 0; i < 1e9; i++) {
            sum = sum + i;
        }
        resolve(sum);
    })
}
