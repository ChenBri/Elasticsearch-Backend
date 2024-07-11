var express = require('express');
var router = express.Router();

router.post('/', require('./../controllers/searchController'));

module.exports = router;
