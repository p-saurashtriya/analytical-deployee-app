import Sale from '../models/Sale.js';

export const getSales = async (req, res) => {
  const sales = await Sale.find().sort({ createdAt: -1 });
  res.json(sales);
};

export const createSale = async (req, res) => {
  const sale = await Sale.create(req.body);
  res.status(201).json(sale);
};

export const updateSale = async (req, res) => {
  const sale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(sale);
};

export const deleteSale = async (req, res) => {
  await Sale.findByIdAndDelete(req.params.id);
  res.json({ message: 'Sale removed' });
};
