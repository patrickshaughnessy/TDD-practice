var express = require('express');
var router = express.Router();

// MATH ROUTE
router.get('/sum/:x/:y', function(req, res, next) {

  var x = Number(req.params.x);
  var y = Number(req.params.y);

  res.send({result: x+y});
});

router.get('/product/:x/:y', function(req, res, next) {

  var x = Number(req.params.x);
  var y = Number(req.params.y);

  res.send({result: x*y});
});

module.exports = router;
