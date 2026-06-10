import mongoose from 'mongoose';

const metricSchema = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: Number, required: true },
  trend: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model('Metric', metricSchema);
