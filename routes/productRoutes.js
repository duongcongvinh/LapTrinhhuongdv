const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productController');

router.get('/', productCtrl.index);
router.get('/new', productCtrl.newForm);
router.post('/new', productCtrl.create);
router.get('/:id/edit', productCtrl.editForm);
router.post('/:id/edit', productCtrl.update);
router.post('/:id/delete', productCtrl.delete);

module.exports = router;
