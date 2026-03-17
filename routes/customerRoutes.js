const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { createCustomer, getCustomers } = require("../controllers/customerController");

router.post("/", auth, createCustomer);
router.get("/", auth, getCustomers);

module.exports = router;