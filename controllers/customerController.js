const Customer = require("../models/Customer");

exports.createCustomer = async (req, res) => {

  const customer = await Customer.create({
    ...req.body,
    userId: req.user.id
  });

  res.json(customer);
};

exports.getCustomers = async (req, res) => {

  const customers = await Customer.find({
    userId: req.user.id
  });

  res.json(customers);
};