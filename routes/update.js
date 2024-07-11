var express = require('express');
var router = express.Router();

router.post('/', require('./../controllers/updateController'));

module.exports = router;
