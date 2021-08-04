express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ALL DOGS')
})

router.post('/', (req, res) => {
    res.send('CREATE A DOG')
})

router.get('/:id', (req, res) => {
    res.send('A DOG')
})
router.get('/:id/edit', (req, res) => {
    res.send('EDIT A DOG')
})

module.exports = router;