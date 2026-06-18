import mongoose from 'mongoose';

const SettingsSchema = new mongoose.Schema({
  websiteName: { type: String, default: 'MannatSpaces' },
  logoUrl: { type: String, default: '' },
  contactNumber: { type: String, default: '' },
  whatsappNumber: { type: String, default: '' },
  email: { type: String, default: '' },
  officeAddress: { type: String, default: '' },
  footerContent: { type: String, default: '' },
  socialLinks: {
    facebook: { type: String, default: '' },
    instagram: { type: String, default: '' },
    twitter: { type: String, default: '' },
    linkedin: { type: String, default: '' }
  }
}, { timestamps: true });

export default mongoose.model('Settings', SettingsSchema);
