var express = require('express');
const TempManipulation = require('../Controllers/TempManipulation');
var router = express.Router();
const { commandExecution } = require('../Controllers/TempManipulation');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Project' });
});

router.post('/submit', commandExecution);

module.exports = router;
