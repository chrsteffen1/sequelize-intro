const router = require('express').Router()
const catsCtrl = require('../controllers/cats.js')
const cat = require('../models/cat.js')




module.exports = router

router.post('/', catsCtrl.create)
router.get('/', catsCtrl.index)
router.put('/:id', catsCtrl.update)
router.delete('/:id', catsCtrl.delete)
router.post('/:id/feedings', catsCtrl.addFeeding)
router.post('/:catId/toys/:toyId', catsCtrl.associateToy)