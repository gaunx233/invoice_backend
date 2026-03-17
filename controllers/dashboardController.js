const Invoice = require("../models/Invoice");

exports.getDashboard = async (req, res) => {

  const invoices = await Invoice.find({ userId: req.user.id });

  const totalInvoices = invoices.length;

  const revenue = invoices.reduce(
    (acc, inv) => acc + inv.total,
    0
  );

  const paid = invoices.filter(i => i.status === "paid").length;
  const pending = invoices.filter(i => i.status === "pending").length;

  res.json({
    totalInvoices,
    revenue,
    paid,
    pending
  });
};