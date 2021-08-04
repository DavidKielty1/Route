express = require('express')
router = express.Router()

router.get('/', (req, res) => {
    res.send('Cat index here')
})

router.post('/', (req, res) => {
    res.send('Post a cat')
})

router.get('/:id', (req, res) => {
    res.send('A single cat profile')
})

router.get('/:id/edit', (req, res) => {
    res.send('You can edit a cat')
})

module.exports = router;

