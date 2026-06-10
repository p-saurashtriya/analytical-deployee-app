import Sale from '../models/Sale.js';

export const exportSales = async (req, res) => {
  const sales = await Sale.find().lean();
  const csv = ['Date,Customer,Amount,Category']
    .concat(sales.map((item) => `${item.date.toISOString()},${item.customer},${item.amount},${item.category}`))
    .join('\n');
  res.setHeader('Content-Type', 'text/csv');
  res.send(csv);
};
