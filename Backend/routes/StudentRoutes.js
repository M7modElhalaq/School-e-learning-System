const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');


router.get('/', studentController.student_index);

router.get('/create', studentController.student_create);

router.post('/create', studentController.student_create_post)

router.get('/:id/edit', studentController.student_edit);

router.put('/:id', studentController.student_update);

router.delete('/:id', studentController.student_delete);

module.exports = router;