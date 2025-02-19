const express = require("express");
// const path = require("path");
// const rootDir = require("../util/path");
const router = express.Router();
const shopController = require("../controllers/shop");
// const adminData = require("./admin");

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);
router.get("/cart", shopController.getCart);
router.get("/orders", shopController.getOrders);
router.get("/checkout", shopController.getCheckout);

module.exports = router;
