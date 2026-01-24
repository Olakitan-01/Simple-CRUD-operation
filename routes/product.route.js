const express = require('express')
const Product = require('../models/product.model')
const router = express.Router()
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller')
const upload = require('../Middleware/upload.middleware')


router.get('/products', getProducts)
// router.get('/products/sync-external', syncExterProduct);
router.get('/products/:id', getProduct)
router.post('/products', upload.single("image"), createProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)



module.exports = router;