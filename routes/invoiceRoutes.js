const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { createInvoice, getInvoices } = require("../controllers/invoiceController");

router.post("/", auth, createInvoice);
router.get("/", auth, getInvoices);

module.exports = router;