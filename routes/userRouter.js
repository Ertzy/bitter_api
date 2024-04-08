const { Router } = require('express')
const router = Router()
const { signup_post, login_post, getUsers } = require('../contollers/userController')

router.get('/', getUsers)

router.post('/signup', signup_post)
router.post('/login', login_post)

module.exports = router