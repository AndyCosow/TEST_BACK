const express = require("express")
const app = express()
const cors = require("cors")

// app.use(cors())
app.use(cors({origin: "http://68.183.11.247:4006"}))

app.use(express.json())

app.listen(4005)

app.get("/info", (req, res) => {
    res.send({info: "All good working"})
})

