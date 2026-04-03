const { Router } = require('express');
const router = Router();

const { createIndexGet } = require('../controllers/index.controller');

router.get('/', createIndexGet);

module.exports = router;
