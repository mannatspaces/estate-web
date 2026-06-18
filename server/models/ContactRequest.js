import mongoose from 'mongoose';

const ContactRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  status: { type: String, default: 'new' }
}, { timestamps: true });

export default mongoose.model('ContactRequest', ContactRequestSchema);
