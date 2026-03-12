const express = require("express");

const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProduct,
} = require("../controllers/productController");

router.post("/products", createProduct);

router.get("/products", getProducts);

router.get("/products/search", searchProduct);

router.get("/products/:id", getProductById);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

module.exports = router;