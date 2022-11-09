const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})

const exportUser = mongoose.model("colorUserType11", userSchema)

module.exports = exportUser