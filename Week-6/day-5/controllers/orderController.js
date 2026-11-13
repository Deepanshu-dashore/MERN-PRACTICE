const Order = require("../models/Order");
const User = require("../models/User");

// Create Order for a user
exports.createOrder = async (req, res) => {
  try {
    const { userId, items, status } = req.body;

    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ success: false, message: "Referenced user does not exist" });
    }

    if (!items || !items.length) {
      return res.status(400).json({ success: false, message: "Order must contain at least one item" });
    }

    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const order = await Order.create({
      user: userId,
      items,
      totalAmount,
      status: status || "Pending"
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      data: order
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Get all orders with populated user info
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email mobile role");
    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get orders by specific user
exports.getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).populate("user", "name email");
    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};
