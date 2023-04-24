const express = require('express');
const router = express.Router();
//const app = express ()

const adsController = require("../controller/adsController")
const companiesController = require ("../controller/companiesController")
//const adsController2 = require("../controller/companiesController")

router.post('/companies', companiesController.companyCreation);
router.post('/createAds',adsController.adCreation);
router.get('/GetAds',adsController.adSearch)
router.get('/getAllads', adsController.getAllAds);


module.exports = router;


