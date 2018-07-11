const express = require('express'),
  router = express.Router();
const { randomLine, lines } = require('../controllers');

router.get(['/', '/random'], randomLine);
router.get('/all', lines);

module.exports = router;
