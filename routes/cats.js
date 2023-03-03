const router = require('express').Router()
const catsCtrl = require('../controllers/cats.js')




module.exports = router

router.post('/', catsCtrl.create)
router.get('/', catsCtrl.index)
router.put('/:id', catsCtrl.update)