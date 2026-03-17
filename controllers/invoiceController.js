const Invoice = require("../models/Invoice");

exports.createInvoice = async (req, res) => {

  const invoice = await Invoice.create({
    ...req.body,
    userId: req.user.id
  });

  res.json(invoice);
};

exports.getInvoices = async (req, res) => {

  const invoices = await Invoice
    .find({ userId: req.user.id })
    .populate("customerId");

  res.json(invoices);
};