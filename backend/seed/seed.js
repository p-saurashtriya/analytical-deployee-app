import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import Sale from '../models/Sale.js';
import User from '../models/User.js';

dotenv.config();

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
};

const seed = async () => {
  await connectDB();
  await User.deleteMany();
  await Sale.deleteMany();

  const users = [
    { name: 'Admin User', email: 'admin@demo.com', password: bcrypt.hashSync('Admin@123', 10), role: 'admin' },
    { name: 'Analyst User', email: 'analyst@demo.com', password: bcrypt.hashSync('Analyst@123', 10), role: 'analyst' },
    { name: 'Viewer User', email: 'viewer@demo.com', password: bcrypt.hashSync('Viewer@123', 10), role: 'viewer' },
  ];

  await User.insertMany(users);

  const categories = ['Electronics', 'Fashion', 'Home', 'Beauty'];
  const channels = ['Online', 'Retail', 'Wholesale'];
  const regions = ['North', 'South', 'East', 'West'];

  const sales = Array.from({ length: 50 }, (_, idx) => ({
    date: new Date(Date.now() - idx * 86400000),
    customer: `Customer ${idx + 1}`,
    amount: Math.floor(Math.random() * 1000) + 100,
    category: categories[idx % categories.length],
    channel: channels[idx % channels.length],
    region: regions[idx % regions.length],
  }));

  await Sale.insertMany(sales);
  console.log('Seed complete.');
  process.exit();
};

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
