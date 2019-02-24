var express = require('express');
var router = express.Router();
var Product = require('../models/productSchema');
var multer  = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './client/public/uploads');
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});


var upload = multer({storage: storage});

/* GET home page. */
router.get('/', function(req, res, next) {
  
});
router.post('/' , upload.single('productImage'),(req, res) => {
    
    
    
    var product = new Product({
        name: req.body.name,
        category: req.body.category,
        subCategory: req.body.subCategory,
        imgSrc: req.file.filename,
        description: req.body.description,
        caunt: req.body.caunt,
        sale: req.body.sale,
        price: req.body.price
    });
    product.save().then(res.status(201).json(req.file));
    


});

router.delete('/', (req, res) => {
    Product.remove({});
    res.json(201);
});

module.exports = router;