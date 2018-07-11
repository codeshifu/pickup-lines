const express = require('express'),
  router = express.Router();
const { randomLine, lines } = require('../controllers');

router.get('/', lines);
router.get('/random', randomLine);

module.exports = router;
