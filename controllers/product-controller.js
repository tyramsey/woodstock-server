const router = require('express').Router();
const Product = require('../db').import('../models/product-model');

let validateSession = require('../middleware/validate-session');


router.post('/createproduct', validateSession, (req, res) => {
 
    
    const createProduct = {
      type: req.body.product.type,
      name: req.body.product.name,
      description: req.body.product.description,
      date: req.body.product.date,
      price: req.body.product.price,
      image_id: req.body.product.image_url,
      owner_id: req.user.id,
      secret: req.body.product.secret
  
  } 
  Product.create(createProduct)
  .then(product => res.status(200).json(product))

  .catch(err => res.status(500).json({error: err}))
  
});


router.get("/getproducts", validateSession, (req, res) => {
  let owner_id = req.user.id
  Product.findAll({
    where: {owner_id: owner_id}
})
  .then(products => res.status(200).json(products))
  .catch(err => res.status(500).json({error: err}))
});

router.put('/updateproduct/:id', validateSession, function(req, res) {
  const updateProduct = {
    type: req.body.product.type,
      name: req.body.product.name,
      description: req.body.product.description,
      date: req.body.product.date,
      price: req.body.product.price,
      image_id: req.body.product.image_url,
      secret: req.body.product.secret
  };
  const query = { where: {id: req.params.id}};

  Product.update(updateProducts, query)
  .then((products) => res.status(200).json(products))
  .catch((err) => res.status(500).json({error: err}));
})


router.delete('/deleteproduct/:id', validateSession, function(req, res) {
const query = { where: { id: req.params.id, owner_id: req.user.id}};
Product.destroy(query)
.then((response) =>
res.status(200).json({
  message: "Product Has Been Deleted",
})
)
.catch((err) => res.status(500).json({ error: err }));
});
module.exports = router;