const isEmail = require("is-email")
const userSchema = require("../schemas/userSchema")
const sendRes = require("../modules/universalRes")

module.exports = {
    registerValidation: (req, res, next) => {
        const {email, passOne, passTwo} = req.body

        if(!isEmail(email)) return sendRes(res, true, "bad email", null)

        if(passTwo !== passOne) return sendRes(res, true, "password should match", null)

        if(!passOne) return sendRes(res, true, "password should be longer than 0", null)

        next()
    },
    secretValidate: async (req, res, next) => {
        let secret = ""

        if(req.params.secret) secret = req.params.secret
        if(req.body.secret) secret = req.body.secret

        const user = await userSchema.findOne({secret}, {email: 1, photo: 1})

        if(!user) return sendRes(res, true, "user not found", null)

        req.body.user = user
        next()
    }
}