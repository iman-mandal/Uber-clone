const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

const { body } = require('express-validator');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage
        ('First name must be atlest 3 charaters long'),
    body('password').isLength({ min: 5 }).withMessage
        ('First name must be atlest 3 charaters long'),
],
    userController.registerUser
)

module.exports = router;