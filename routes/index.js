var express = require('express');
var router = express.Router();
var clientService = require('../services/ClientService');
var commonHelper = require('../helper/commonHelper');

/* GET home page. */
router.post('/RegisterSurvey', function(req, res, next) {
  var data = req.body.formInput;
  var log = req.body.logInput;
  var appResponse;
  clientService.RegisterSurvey(data).then((response)=>{
    if(response.insertedCount != undefined && parseInt(response.insertedCount) == 1){
      appResponse = commonHelper.sendResponse('SUCCESS','Saved Successfully','');
    }
    else{
      appResponse = commonHelper.sendResponse('FAILED','Failed to save data','');
    }
    res.send(appResponse)
  }).catch((err)=>{
    appResponse = commonHelper.sendResponse('FAILED','Failed to save data','');
    res.send(appResponse)
  });
});
console.log('Service started.');
module.exports = router;
