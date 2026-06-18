import {
  fetchProperties,
  fetchPropertyById,
  saveProperty,
  modifyProperty,
  removeProperty
} from '../services/propertyService.js';

export const getProperties = async (req, res) => {
  try {
    const filters = {};
    if (req.query.type) filters.type = req.query.type;
    if (req.query.location) filters.location = req.query.location;
    const properties = await fetchProperties(filters);
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch properties.' });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const property = await fetchPropertyById(req.params.id);
    if (!property) return res.status(404).json({ error: 'Property not found.' });
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch property.' });
  }
};

export const createProperty = async (req, res) => {
  try {
    const saved = await saveProperty(req.body);
    res.status(201).json(saved);
  } catch (error) {
    console.error('createProperty error:', error);
    res.status(400).json({ error: 'Unable to create property.', details: error.message });
  }
};

export const updateProperty = async (req, res) => {
  try {
    const updated = await modifyProperty(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Property not found.' });
    res.json(updated);
  } catch (error) {
    console.error('updateProperty error:', error);
    res.status(400).json({ error: 'Unable to update property.', details: error.message });
  }
};

export const deleteProperty = async (req, res) => {
  try {
    const removed = await removeProperty(req.params.id);
    if (!removed) return res.status(404).json({ error: 'Property not found.' });
    res.json({ message: 'Property deleted.' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete property.' });
  }
};
