var express = require('express');
var router = express.Router();

let login=require('../controllers/login')
/* GET home page. */
router.get('/', login.initial);
router.post('/signup',login.signup);
router.post('/login',login.login);


module.exports = router;
