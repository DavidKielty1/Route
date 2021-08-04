express = require('express')
router = express.Router()

router.use((req, res, next) => {
    if(req.query.isAdmin) {
        next()
    }
    res.send("sorry not an admin")
})

router.get('/topsecret', (req, res) => {
    res.send('This is top secret')
})

router.get('/deleteeverthing', (req, res) => {
    res.send('ok deleted it all')
})

module.exports = router