import express from 'express';
import upload from '../middleware/upload.js';
import cloudinary from '../config/cloudinary.js';
import streamifier from 'streamifier';
import { adminAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', adminAuth, upload.single('image'), async (req, res) => {
  try {
    console.log('File received:', !!req.file);
    console.log('Cloudinary Config:', cloudinary.config());

    if (!req.file) {
      return res.status(400).json({
        error: 'No file uploaded'
      });
    }

    const uploadFromBuffer = () =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: 'mannatspaces'
          },
          (error, result) => {
            if (error) {
              console.error('Cloudinary Error:', error);
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });

    const result = await uploadFromBuffer();

    res.json({
      url: result.secure_url,
      public_id: result.public_id
    });

  } catch (error) {
    console.error('UPLOAD ERROR:', error);

    res.status(500).json({
      error: 'Upload failed',
      details: error.message
    });
  }
});

export default router;