const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware=require('../middlewere/authMiddleware')
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

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], userController.loginUser
)

//get user profile route
router.get('/profile', authMiddleware.authUser,userController.getUserProfile );

// logout user route
router.get('/logout',authMiddleware.authUser, userController.logoutUser);

module.exports = router;