/**
 * Product Routes
 */

const express = require("express");
const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  searchProducts
} = require("../controllers/productController");

const router = express.Router();

// Search endpoint (defined before /:id parameter)
router.get("/search", searchProducts);

// Standard CRUD endpoints
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
