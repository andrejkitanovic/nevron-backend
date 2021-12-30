const express = require('express');
const positionController = require('../controllers/position');

const router = express.Router();

router.get('/', positionController.getPositions);
router.post('/reset', positionController.resetPositions);

module.exports = router;
