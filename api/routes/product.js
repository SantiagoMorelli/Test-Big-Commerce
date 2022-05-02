const router= require("express").Router();
const axios = require("axios").default;
const dotenv=require("dotenv");


dotenv.config();

//GET ALL PRODUCTS
router.get("/",async(req,res)=>{

var options = {
  method: 'GET',
  url: `https://api.bigcommerce.com/stores/${process.env.STORE_HASH}/v3/catalog/products`,
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': process.env.X_AUTH_TOKEN
  }
};
try {
    const products =await axios.request(options)
    res.status(200).json(products.data);
} catch (error) {
    res.status(500).json(error);
}

});
//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  const options = {
    method: 'GET',
    url: `https://api.bigcommerce.com/stores/${process.env.STORE_HASH}/v3/catalog/products/${req.params.id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Auth-Token': process.env.X_AUTH_TOKEN
    }
  };
  try {
    const product = await axios.request(options)
    res.status(200).json(product.data);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE

router.put("/:id", async (req, res) => {
    var options = {
        method: 'PUT',
        url: `https://api.bigcommerce.com/stores/${process.env.STORE_HASH}/v3/catalog/products/${req.params.id}`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-Auth-Token': process.env.X_AUTH_TOKEN
        },
        data: req.body
      };
    
    try {
      const updatedProduct = await axios.request(options)
      res.status(200).json(updatedProduct.data);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  


  

module.exports=router