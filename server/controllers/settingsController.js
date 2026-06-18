import Settings from '../models/Settings.js';

export const getSettings = async (req, res) => {
  const settings = await Settings.findOne();
  res.json(settings);
};

export const updateSettings = async (req, res) => {
  let settings = await Settings.findOne();
  if (!settings) settings = new Settings();
  Object.assign(settings, req.body);
  await settings.save();
  res.json(settings);
};
