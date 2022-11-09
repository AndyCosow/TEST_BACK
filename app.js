const express = require("express")
const app = express()
const cors = require("cors")

// app.use(cors())
app.use(cors({origin: "http://localhost:3001"}))

app.use(express.json())

app.listen(4005)

app.get("/info", (req, res) => {
    res.send({info: "All good working"})
})

