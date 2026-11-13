/**
 * Product Controller - Business logic and CRUD handlers for Product Management API
 */

let products = require("../data/products");

// GET ALL PRODUCTS
exports.getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    count: products.length,
    data: products
  });
};

// GET PRODUCT BY ID
exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
};

// ADD PRODUCT
exports.addProduct = (req, res) => {
  const { name, price } = req.body;

  if (!name || price === undefined || price === null || price === "") {
    return res.status(400).json({ message: "Name and price are required" });
  }

  const numericPrice = Number(price);
  if (isNaN(numericPrice) || numericPrice <= 0) {
    return res.status(400).json({ message: "Price must be positive" });
  }

  // Generate unique ID even after deletions
  const nextId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

  const newProduct = {
    id: nextId,
    name,
    price: numericPrice
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product added successfully",
    data: newProduct
  });
};

// UPDATE PRODUCT
exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, price } = req.body;

  if (price !== undefined) {
    const numericPrice = Number(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      return res.status(400).json({ message: "Price must be positive" });
    }
    product.price = numericPrice;
  }

  if (name !== undefined) {
    product.name = name;
  }

  res.status(200).json({
    message: "Product updated successfully",
    data: product
  });
};

// DELETE PRODUCT
exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(productIndex, 1);

  res.status(200).json({
    message: "Product deleted successfully"
  });
};

// SEARCH PRODUCTS BY NAME (Optional Add-On)
exports.searchProducts = (req, res) => {
  const nameQuery = req.query.name ? req.query.name.toString().toLowerCase() : "";
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(nameQuery)
  );
  res.status(200).json(filtered);
};
