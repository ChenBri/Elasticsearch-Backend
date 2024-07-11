var express = require('express');
var router = express.Router();

router.post('/', require('./../controllers/addController'));

module.exports = router;
