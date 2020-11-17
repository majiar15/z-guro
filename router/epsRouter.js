const express = require('express');
const router = express.Router();
const epsController = require('../controller/epsController');

router.get('/:eps/nocovid', epsController.getAllEpsNoCovid);
router.get('/:eps/covid', epsController.getAllEpsCovid);
router.get('/eps/:id', epsController.getOneEps);
module.exports  = router;
