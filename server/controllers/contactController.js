import ContactRequest from '../models/ContactRequest.js';

export const createContactRequest = async (req, res) => {
  const { name, email, phone, message, property } = req.body;
  const contactRequest = new ContactRequest({ name, email, phone, message, property });
  await contactRequest.save();
  res.status(201).json({ message: 'Contact request submitted' });
};

export const getContactRequests = async (req, res) => {
  const requests = await ContactRequest.find().populate('property', 'title city state');
  res.json({ requests });
};
