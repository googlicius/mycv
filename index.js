const express = require("express")

const app = express()

app.use("/", function(req, res) {
    res.sendFile("index.html")
})

app.listen(3000)

console.log("MyCV is running at port 3000")