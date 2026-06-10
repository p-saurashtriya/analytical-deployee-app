import mongoose from 'mongoose';

const saleSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  customer: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  channel: { type: String, required: true },
  region: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Sale', saleSchema);
