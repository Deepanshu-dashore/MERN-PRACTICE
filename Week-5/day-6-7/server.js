/**
 * Week 5 - Day 6-7 : Mini Project – Product Management API
 */

const express = require("express");
try {
  require("dotenv").config();
} catch (e) {
  // dotenv loaded if installed
}

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Informational Root Route
app.get("/", (req, res) => {
  res.json({
    message: "Product Management API is running!",
    endpoints: {
      getAllProducts: "GET /api/products",
      getProductById: "GET /api/products/:id",
      searchProducts: "GET /api/products/search?name={keyword}",
      addProduct: "POST /api/products",
      updateProduct: "PUT /api/products/:id",
      deleteProduct: "DELETE /api/products/:id"
    }
  });
});

// Mount Routes
app.use("/api/products", require("./routes/productRoutes"));

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
