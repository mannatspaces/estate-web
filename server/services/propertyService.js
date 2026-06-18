import Property from '../models/Property.js';

export const fetchProperties = async (query) => {
  return Property.find(query).sort({ createdAt: -1 });
};

export const fetchPropertyById = async (id) => {
  return Property.findById(id);
};

export const saveProperty = async (data) => {
  const property = new Property(data);
  return property.save();
};

export const modifyProperty = async (id, data) => {
  return Property.findByIdAndUpdate(id, data, { new: true });
};

export const removeProperty = async (id) => {
  return Property.findByIdAndDelete(id);
};
