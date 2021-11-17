const router = require('express').Router()
const mainController = require('../controllers/mainController')

router.get('/', mainController.root)
router.get('/home', mainController.home)
router.get("/users", mainController.user)

module.exports = router
