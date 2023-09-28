const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/hello', userController.sayHello);

router.get('/users', userController.getAllUsers);

router.post('/users', userController.createUser);

router.get('/users/:id', userController.findById);

router.put('/users/:id', userController.update);

router.delete('/users/:id', userController.delete);

module.exports = router;