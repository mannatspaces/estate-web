import mongoose from 'mongoose';

const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String },
  neighborhood: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  description: { type: String },
  bedrooms: { type: Number },
  baths: { type: Number },
  bathrooms: { type: Number },
  area: { type: Number },
  amenities: [{ type: String }],
  status: { type: String, default: 'Available' },
  featured: { type: Boolean, default: false },
  hidden: { type: Boolean, default: false },
  tag: { type: String, default: 'Featured' },
  image: { type: String },
  gallery: [{ type: String }],
  images: [{ url: String, public_id: String }],
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  agent: {
    name: String,
    phone: String,
    email: String
  }
}, { timestamps: true });

export default mongoose.model('Property', PropertySchema);
