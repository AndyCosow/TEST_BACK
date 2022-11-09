const sendRes = require("../modules/universalRes")
const {uid} = require("uid")
const bcrypt = require("bcrypt")
const userSchema = require("../schemas/colorUserSchema")
const messageSchema = require("../schemas/messageSchema")
const e = require("express");

module.exports = {
    login: async (req, res) => {
        const {username, password, color} = req.body

        const user = await userSchema.findOne({username})

        if(user) {

            const compare = await bcrypt.compare(password, user.password)

            if(compare) {
                req.session.messageCount = 0
                req.session.symbolCount = 0

                req.session.user = user
                return sendRes(res, false, "logged in", null)
            } else {
                return sendRes(res, true, "bad credentials", null)
            }


        } else {
            req.session.messageCount = 0
            req.session.symbolCount = 0

            const passHash = await bcrypt.hash(password, 10)

            const newUser = new userSchema({
                username,
                color,
                password: passHash
            })

            const myUser = await newUser.save()

            req.session.user = myUser

            return sendRes(res, false, "registered user, and logged in", null)
        }

    },

    autoLogin: async (req, res) => {
        if (req.session.user) {
            return sendRes(res, false, "all good", null)
        }
        return sendRes(res, true, "no session data", null)
    },
    logout: async (req, res) => {
        req.session.user = null
        return sendRes(res, false, "all good", null)
    },
    writeMessage: async (req, res) => {
        if(req.session.user) {
            const {message} = req.body
            const {username, color} = req.session.user

            req.session.messageCount = req.session.messageCount +1
            req.session.symbolCount = req.session.symbolCount + message.length

            const newMessage = new messageSchema({
                username,
                color,
                message,
                time: Date.now(),
                totalMessages: req.session.messageCount,
                totalSymbols: req.session.symbolCount
            })

            await newMessage.save()

            return sendRes(res, false, "all good", newMessage)
        }
        return sendRes(res, true, "no session data", null)

    },
    getAll: async (req, res) => {
        const messages = await messageSchema.find()
        return sendRes(res, false, "all good", messages)
    }

}


