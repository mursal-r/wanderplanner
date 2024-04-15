const express = require('express');

const router = express.Router();
const searchCtrl = require('../../controllers/api/search');

router.post('/', searchCtrl.getActivities);

module.exports = router;