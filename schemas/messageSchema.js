const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true,
    },
    totalMessages: {
        type: String,
        required: false,
        default: 0
    },
    totalSymbols: {
        type: String,
        required: false,
        default: 0
    },
})

const exportUser = mongoose.model("type11ChatMessage", userSchema)

module.exports = exportUser