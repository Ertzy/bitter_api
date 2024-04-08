const { Router } = require('express')
const router = Router()
const { downs, delate, getContent } = require('../contollers/contentContoller')
const visualScreen = require('../models/visualModel')

// router.get('/', getContent)

router.get('/posts', async (req, res) =>{
    try {
        const posts = await visualScreen.find().sort({ createdAt: -1 }); // Sort by creation date in descending order
        res.json(posts);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
});

router.post('/add', downs)

router.post('/delete', delate)


module.exports = router