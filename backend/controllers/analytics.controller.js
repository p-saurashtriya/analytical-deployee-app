import Sale from '../models/Sale.js';

export const getAnalytics = async (req, res) => {
  const totalSales = await Sale.countDocuments();
  const revenue = await Sale.aggregate([{ $group: { _id: null, total: { $sum: '$amount' } } }]);
  res.json({ totalSales, revenue: revenue[0]?.total || 0 });
};
