var express = require('express');
const {User, Business, Category, Operation, Product, OperationProduct} = require('../database/schemas')

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// get users
router.get('/accounts', function(req, res, next) {
  User.find().then(function(data){
        res.send(data)  // Success 
    }).catch(function(error){
        console.log(error)      // Failure
        res.send(error)   
    });
});

// get businesses
router.get('/businesses', function(req, res, next) {
  Business.find().populate('owner').populate('addedBy').then(function(data){
        res.send(data)  // Success 
    }).catch(function(error){
        console.log(error)      // Failure
        res.send(error)   
    });
});

// get categories
router.get('/categories', function(req, res, next) {
  Category.find().populate('addedBy').then(function(data){
        res.send(data)  // Success 
    }).catch(function(error){
        console.log(error)      // Failure
        res.send(error)   
    });
});

// get operations
router.get('/operations', function(req, res, next) {
  Operation.find().populate('category')
  .populate('runBy')
  .populate('addedBy')
  .then(function(data){
        res.send(data)  // Success 
    }).catch(function(error){
        console.log(error)      // Failure
        res.send(error)   
    });
});

// get products
router.get('/products', function(req, res, next) {
  Product.find().populate('addedBy')
  .populate('category')
  .populate('addedBy')
  .then(function(data){
        res.send(data)  // Success 
    }).catch(function(error){
        console.log('ERROR FOUND IS:', error)      // Failure
        res.send(error)   
    });
});

// get operation products
router.get('/operation-products', function(req, res, next) {
  OperationProduct.find().populate('owner').then(function(data){
        res.send(data)  // Success 
    }).catch(function(error){
        console.log(error)      // Failure
        res.send(error)   
    });
});

// get single user
router.get('/account/:id', function(req, res, next) {
    User.findOne({_id: req.params.id }).then(function(data){
          res.send(data)  // Success 
      }).catch(function(error){
          console.log(error)      // Failure
          res.send(error)   
      });
  });

// get single product
router.get('/product/:id', function(req, res, next) {
    Product.findOne({_id: req.params.id }).populate('addedBy')
    .populate('category')
    .then(function(data){
        res.send(data)  // Success 
    }).catch(function(error){
        console.log(error)      // Failure
        res.send(error)   
    });
});

// get single category
router.get('/category/:id', function(req, res, next) {
    Category.findOne({_id: req.params.id })
    .populate('addedBy')
    .then(function(data){
          res.send(data)  // Success 
      }).catch(function(error){
          console.log(error)      // Failure 
          res.send(error)  
      });
  });

// get single operation product
router.get('/operation-product/:id', function(req, res, next) {
    OperationProduct.findOne({_id: req.params.id })
    .populate('addedBy')
    .populate('product')
    .populate('operation')
    .then(function(data){
        res.send(data)  // Success 
    }).catch(function(error){
        console.log(error)      // Failure
        res.send(error)   
    });
});

// get single business
router.get('/business/:id', function(req, res, next) {
    Business.findOne({_id: req.params.id })
    .populate('owner')
    .populate('addedBy')
    .then(function(data){
          res.send(data)  // Success 
      }).catch(function(error){
          console.log(error)      // Failure
          res.send(error)   
      });
  });

// get single operation
router.get('/operation/:id', function(req, res, next) {
Operation.findOne({_id: req.params.id })
    .populate('runBy')
    .populate('addedBy')
    .populate('category')
    .populate({
        path: 'products', 
        model: 'OperationProduct',
        populate: {
          path: 'product',
          model: 'Product'
        }
      })
    .then(function(data){
        res.send(data)  // Success 
    }).catch(function(error){
        console.log(error)      // Failure 
        res.send(error)  
    });
});

//get number of all records
router.get('/get-counts', async(req, res)=>{
    try{
        const opProducts = await OperationProduct.find()
        const products = await Product.find()
        const categories = await Category.find()
        const businesses = await Business.find()
        const operations = await Operation.find()
        const users = await User.find()
        res.send({
            opProducts: opProducts.length,
            products: products.length,
            categories: categories.length,
            businesses: businesses.length,
            operations: operations.length,
            users: users.length
        }) 
    }
    catch(error){
        res.send(error)      // Failure 
        console.log(error)
    }
})

router.post('/operation-product', async(req, res)=>{
    console.log(req.body.operation)
    try{
        const opProduct = await OperationProduct.create(req.body)
        const op = await Operation.findOneAndUpdate(
            {_id: req.body.operation},
            {$push:{"products": opProduct._id}}
        )
        console.log(op)
        console.log("Data inserted")  // Success
        res.send('data inserted') 
    }
    catch(error){
        res.send(error)      // Failure 
        console.log(error)
    }
})

router.post('/operation', async(req, res)=>{
    console.log(req.body)
    try{
        const operation = await Operation.create(req.body)
        console.log(operation)  // Success
        res.send('data inserted') 
    }
    catch(error){
        res.send(error)      // Failure 
        console.log(error)
    }
})

//delete
router.delete('/manage-operations/:id', async(req,res)=>{
    try{
        const operation = await Operation.findOneAndDelete({_id: req.params.id })
        await OperationProduct.remove({operation: req.params.id})
        res.send(operation)  // Success
        console.log('deleted') 
    }
    catch(error){
        res.send(error)      // Failure 
        console.log(error)
    }
})

module.exports = router;
