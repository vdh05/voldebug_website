import express from 'express';
import multer from 'multer';
import sharp from 'sharp';
import { ImageModel } from './models/imagemodel.js';
import path from 'path';
import fs from 'fs/promises';
import mongoose from 'mongoose';
import cors from 'cors';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });
router.use(cors({
    origin: 'http://localhost:3000'
}));
const safeUnlink = async (filePath) => {
    try {
        await fs.unlink(filePath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.warn(`File not found: ${filePath}`);
        } else if (error.code === 'EPERM') {
            console.error(`Operation not permitted: ${filePath}`);
        
        } else {
            console.error(`Error deleting file ${filePath}:`, error);
            throw error;
        }
    }
};

router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const { originalname, filename, path: tempPath } = req.file;
        const newFilename = `${filename}.jpeg`;
        const newPath = path.join('uploads', newFilename);
        await sharp(tempPath).jpeg().toFile(newPath);
        await safeUnlink(tempPath);
        const newImage = new ImageModel({ originalname, filename: newFilename, path: newPath });
        await newImage.save();
        res.status(201).json({ message: 'Image uploaded and converted to JPEG successfully', image: newImage });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).send('Error uploading image');
    }
});

router.get('/images/:id', async (req, res) => {
    try {
      const image = await ImageModel.findById(req.params.id);
      if (!image) {
        return res.status(404).json({ message: 'Image not found' });
      }
      
      res.json([image]); 
    } catch (error) {
      console.error('Error fetching image:', error);
      res.status(500).send('Error fetching image');
    }
  });

  
  router.get('/images/:id/originalname', async (req, res) => {
    try {
        const image = await ImageModel.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.json({ originalname: image.originalname });
    } catch (error) {
        console.error('Error fetching image original name:', error);
        res.status(500).send('Error fetching image original name');
    }
});


router.get('/images', async (req, res) => {
  try {
    const images = await ImageModel.find(); 
    res.json(images); 
  } catch (err) {
    console.error('Error fetching images:', err);
    res.status(500).json({ message: 'Error fetching images', error: err });
  }
});

  

router.delete('/images/:id', async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }
    try {
        const image = await ImageModel.findByIdAndDelete(req.params.id);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }
        await safeUnlink(image.path);
        res.json({ message: 'Image deleted successfully' });
    } catch (error) {
        console.error('Error deleting image:', error);
        res.status(500).send('Error deleting image');
    }
});

router.put('/images/:id', upload.single('image'), async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }
    try {
        const image = await ImageModel.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }
        const { originalname, filename, path: tempPath } = req.file;
        const newFilename = `${filename}.jpeg`;
        const newPath = path.join('uploads', newFilename);
        await sharp(tempPath).jpeg().toFile(newPath);
        await safeUnlink(tempPath);
        await safeUnlink(image.path);
        image.originalname = originalname;
        image.filename = newFilename;
        image.path = newPath;
        await image.save();
        res.json({ message: 'Image updated and converted to JPEG successfully', image });
    } catch (error) {
        console.error('Error updating image:', error);
        res.status(500).send('Error updating image');
    }
});

export default router;
