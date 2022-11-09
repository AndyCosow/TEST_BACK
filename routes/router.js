const express = require("express")
const router = express.Router()

const {
    registerValidation,
    secretValidate
} = require("../midleware/middle")

const {
    registerUser,
    login,
    autoLogin,
    logout,
    setUser,
    createPost,
    writeMessage,
    getAll
} = require("../controllers/mainController")

router.post("/login", login)
router.get("/autologin", autoLogin)
router.get("/logout", logout)

router.post("/message", writeMessage)
router.get("/messages", getAll)

// router.get("/setUser/:username", setUser)
// router.post("/create", createPost)





module.exports = router