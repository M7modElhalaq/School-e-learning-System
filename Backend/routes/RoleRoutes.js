const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

router.get('/', roleController.role_index);

router.get('/create', roleController.role_create);

router.post('/create', roleController.role_create_post);

router.get('/:id/edit', roleController.role_edit);

router.put('/:id', roleController.role_update);

router.delete('/:id', roleController.role_delete);

module.exports = router;