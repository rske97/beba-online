var express = require('express');
var router = express.Router();
var Product = require('../models/productSchema');

/* GET users listing. */
router.get('/', function(req, res, next) {
   Product.find().then(data => res.json(data));
  
  
  // res.json(JSON.stringify(data));
});

router.get('/:category', function(req, res, next) {
  if(req.params.category === 'sale'){
    Product.find({sale: true}).then(data => res.json(data));
  }else{
  Product.find({category: req.params.category})
  .then(data => res.json(data));
  // res.json(data);
  }
});

module.exports = router;
