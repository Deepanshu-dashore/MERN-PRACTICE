const express = require("express");
const router = express.Router();
const { createOrder, getAllOrders, getOrdersByUser } = require("../controllers/orderController");

router.route("/")
  .get(getAllOrders)
  .post(createOrder);

router.route("/user/:userId")
  .get(getOrdersByUser);

module.exports = router;
