var express = require('express');
var router = express.Router();

let plan=require('../controllers/plan');

/* GET home page. */
router.get('/',plan.initial );
router.post('/sub',plan.sub);
router.post('/update',plan.update);
router.get('/logout',plan.logout);

module.exports = router;
