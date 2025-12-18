const captainController = require('../controllers/captainControllers');
const authMiddleware = require('../middlewere/authMiddleware');
const express = require('express');
const router = express.Router();
const { body } = require('express-validator')



// register captain route
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 charater'),
    body('fullname.lastname').isLength({ min: 3 }).withMessage('Last name must be at least 3 charater'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 charater'),
    body('vehicle.colour').isLength({ min: 3 }).withMessage('Colour must be at least 3 charater'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 charater'),
    body('vehicle.capacity').isLength({ min: 1 }).withMessage('Capacity must be at least 1 charater'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be car, motorcycle or auto')
], captainController.registerCaptain);


// login captain route
router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 charater long')
],
    captainController.loginCaptain
)

// get captain profile route
router.get('/profile', authMiddleware.authCaptain,captainController.getCaptainProfile );

// logout captain route
router.get('/logout',authMiddleware.authCaptain, captainController.logoutCaptain);


module.exports = router;