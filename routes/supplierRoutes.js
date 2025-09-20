const express = require('express');
const router = express.Router();
const supplierCtrl = require('../controllers/supplierController');

router.get('/', supplierCtrl.index);
router.get('/new', supplierCtrl.newForm);
router.post('/new', supplierCtrl.create);
router.get('/:id/edit', supplierCtrl.editForm);
router.post('/:id/edit', supplierCtrl.update);
router.post('/:id/delete', supplierCtrl.delete);

module.exports = router;
