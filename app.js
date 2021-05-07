const express = require("express")


const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/index1.html", (req, res) => {
    res.sendFile(__dirname + "/index1.html")
})

app.get("/admin.html", (req, res) => {
    res.sendFile(__dirname + "/admin.html")
})

app.get("/bill.html", (req, res) => {
    res.sendFile(__dirname + "/bill.html")
})

app.get("/client.html", (req, res) => {
    res.sendFile(__dirname + "/client.html")
})

app.get("/payment.html", (req, res) => {
    res.sendFile(__dirname + "/payment.html")
})

app.get("/premise.html", (req, res) => {
    res.sendFile(__dirname + "/premise.html")
})

app.get("/route.html", (req, res) => {
    res.sendFile(__dirname + "/route.html")
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("App is runing")
})
